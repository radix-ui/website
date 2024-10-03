// See https://github.com/juliencrn/usehooks-ts/blob/master/packages/usehooks-ts/src/useLocalStorage/useLocalStorage.ts
// Copyright (c) 2020 Julien CARON, MIT License
import * as React from "react";
import type { Dispatch, SetStateAction } from "react";
import { useEffectEvent } from "./use-effect-event";
import { canUseDOM } from "./can-use-dom";

/**
 * Options for customizing the behavior of serialization and deserialization.
 * @template T - The type of the state to be stored in local storage.
 */
interface UseLocalStorageOptions<T> {
	serializer?: (value: T) => string;
	deserializer?: (value: string) => T;
	/**
	 * If `true`, the hook will initialize reading the local storage. In SSR, you
	 * should omit this option or set it to `false`, returning the initial value
	 * initially.
	 * @default false
	 */
	initializeWithValue?: boolean;
}

export function useLocalStorage<T>(
	key: string,
	initialValue: T | (() => T),
	options: UseLocalStorageOptions<T> = {},
): [T, Dispatch<SetStateAction<T>>, () => void] {
	const { initializeWithValue = false } = options;

	const serializer = React.useCallback<(value: T) => string>(
		(value) => {
			return options.serializer
				? options.serializer(value)
				: JSON.stringify(value);
		},
		[options],
	);

	const deserializer = React.useCallback<(value: string) => T>(
		(value) => {
			if (options.deserializer) {
				return options.deserializer(value);
			}
			// Support 'undefined' as a value
			if (value === "undefined") {
				return undefined as unknown as T;
			}

			const defaultValue =
				initialValue instanceof Function ? initialValue() : initialValue;
			let parsed: unknown;
			try {
				parsed = JSON.parse(value);
			} catch (error) {
				console.error("Error parsing JSON:", error);
				return defaultValue; // Return initialValue if parsing fails
			}

			return parsed as T;
		},
		[options, initialValue],
	);

	// Get from local storage then
	// parse stored json or return initialValue
	const readValue = React.useCallback((): T => {
		const initialValueToUse =
			initialValue instanceof Function ? initialValue() : initialValue;

		// Prevent build error "window is undefined" but keep working
		if (!canUseDOM) {
			return initialValueToUse;
		}

		try {
			const raw = window.localStorage.getItem(key);
			return raw ? deserializer(raw) : initialValueToUse;
		} catch (error) {
			console.warn(`Error reading localStorage key “${key}”:`, error);
			return initialValueToUse;
		}
	}, [initialValue, key, deserializer]);

	const [storedValue, setStoredValue] = React.useState(() => {
		if (initializeWithValue) {
			return readValue();
		}

		return initialValue instanceof Function ? initialValue() : initialValue;
	});

	// Return a wrapped version of useState's setter function that ...
	// ... persists the new value to localStorage.
	const setValue: React.Dispatch<SetStateAction<T>> = useEffectEvent(
		(value) => {
			// Prevent build error "window is undefined" but keeps working
			if (!canUseDOM) {
				console.warn(
					`Tried setting localStorage key “${key}” even though environment is not a client`,
				);
				return;
			}

			try {
				// Allow value to be a function so we have the same API as useState
				const newValue = value instanceof Function ? value(readValue()) : value;

				// Save to local storage
				window.localStorage.setItem(key, serializer(newValue));

				// Save state
				setStoredValue(newValue);

				// We dispatch a custom event so every similar useLocalStorage hook is notified
				window.dispatchEvent(new StorageEvent("local-storage", { key }));
			} catch (error) {
				console.warn(`Error setting localStorage key “${key}”:`, error);
			}
		},
	);

	const removeValue = useEffectEvent(() => {
		// Prevent build error "window is undefined" but keeps working
		if (!canUseDOM) {
			console.warn(
				`Tried removing localStorage key “${key}” even though environment is not a client`,
			);
			return;
		}

		const defaultValue =
			initialValue instanceof Function ? initialValue() : initialValue;

		// Remove the key from local storage
		window.localStorage.removeItem(key);

		// Save state with default value
		setStoredValue(defaultValue);

		// We dispatch a custom event so every similar useLocalStorage hook is notified
		window.dispatchEvent(new StorageEvent("local-storage", { key }));
	});

	React.useEffect(() => {
		setStoredValue(readValue());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [key]);

	const handleStorageChange = React.useCallback<{
		(event: CustomEvent): void;
		(event: StorageEvent): void;
	}>(
		(event: StorageEvent | CustomEvent) => {
			if ((event as StorageEvent).key && (event as StorageEvent).key !== key) {
				return;
			}
			setStoredValue(readValue());
		},
		[key, readValue],
	);

	React.useEffect(() => {
		// Define the listening target

		window.addEventListener("storage", handleStorageChange);
		// @ts-expect-error
		window.addEventListener("local-storage", handleStorageChange);

		// Remove event listener on cleanup
		return () => {
			window.removeEventListener("storage", handleStorageChange);
			// @ts-expect-error
			window.removeEventListener("local-storage", handleStorageChange);
		};
	}, [handleStorageChange]);

	return [storedValue, setValue, removeValue];
}
