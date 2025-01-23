import Color from "colorjs.io";
import { composeRefs } from "radix-ui/internal";
import { TextField } from "@radix-ui/themes";
import styles from "./ColorField.module.css";
import * as React from "react";

interface ColorFieldProps
	extends React.ComponentPropsWithoutRef<typeof TextField.Root> {
	value?: string;
	defaultValue?: string;
	onValueChange?: (value: string) => void;
}

const DEFAULT_COLOR = "000000";

export const ColorField = React.forwardRef<HTMLInputElement, ColorFieldProps>(
	(
		{
			defaultValue = DEFAULT_COLOR,
			disabled,
			onBlur,
			onChange,
			onKeyDownCapture,
			onValueChange,
			placeholder = "Enter a color",
			readOnly,
			size,
			value,
			...props
		},
		forwardedRef,
	) => {
		const inputRef = React.useRef<HTMLInputElement>(null);
		const [inputValue, setInputValue] = React.useState(
			toShortFormat(value ?? defaultValue) ?? DEFAULT_COLOR,
		);

		const committedColorRef = React.useRef(inputValue);
		const preventInputSelectionRef = React.useRef(false);

		const color = React.useMemo(() => {
			const string = toShortFormat(inputValue);
			return string ? string : committedColorRef.current;
		}, [inputValue]);

		// Sync with the incoming value
		useIsomorphicLayoutEffect(() => {
			const string = toShortFormat(value);

			if (string) {
				setInputValue(string);
				committedColorRef.current = string;
			}
		}, [value]);

		return (
			<div
				className={styles.ColorFieldRoot}
				onMouseUp={() => {
					if (preventInputSelectionRef.current) {
						return;
					}

					const inputHasFocus = document.activeElement === inputRef.current;

					if (inputHasFocus && !hasSelection(inputRef.current)) {
						inputRef.current?.select();

						// Don't re-select the input value on next mouse up until blurred
						preventInputSelectionRef.current = true;
					}
				}}
			>
				<TextField.Root
					size={size}
					ref={composeRefs(inputRef, forwardedRef)}
					autoCapitalize="none"
					autoComplete="off"
					autoCorrect="off"
					onBlur={(event) => {
						committedColorRef.current = color;
						preventInputSelectionRef.current = false;
						setInputValue(color);
						onValueChange?.(toCssFormat(color));

						// Firefox doesn't really reset input selection range on blur, and then
						// recovers it on focus, which messes with our selection on mouse up.
						if (navigator.userAgent.toLowerCase().includes("firefox")) {
							inputRef.current?.setSelectionRange(0, 0);
						}

						onBlur?.(event);
					}}
					onChange={(event) => {
						setInputValue(event.currentTarget.value);
						onChange?.(event);
					}}
					onKeyDownCapture={(event) => {
						if (event.key === "Enter") {
							if (committedColorRef.current !== inputValue) {
								committedColorRef.current = color;
								setInputValue(color);
								onValueChange?.(toCssFormat(color));
								setTimeout(() => inputRef.current?.select());

								// Prevent form submission
								// We want the user to see the parsed hex first
								event.preventDefault();
							}
						}

						if (event.key === "Escape") {
							if (committedColorRef.current !== inputValue) {
								setInputValue(committedColorRef.current);
								setTimeout(() => inputRef.current?.select());

								// Prevent dialogs from closing
								// We want the user to see the parsed hex first
								event.stopPropagation();
							}
						}

						onKeyDownCapture?.(event);
					}}
					placeholder={placeholder}
					disabled={disabled}
					readOnly={readOnly}
					type="text"
					value={inputValue}
					variant="surface"
					{...props}
				>
					<TextField.Slot>
						<div className={styles.ColorFieldSwatchWrapper}>
							<input
								disabled={disabled || readOnly}
								className={styles.ColorFieldSwatch}
								onChange={(event) => {
									// Some gymnastics here to make sure that we don't lose the current color space format,
									// e.g. if the user had "lch(45 70.5 286.08)" in the input before, it should stay "lch"
									// after using the native browser’s picker, which always outputs a color formatted as hex.
									const colorSpace = new Color(value!).spaceId;
									const string = toShortFormat(
										new Color(event.currentTarget.value)
											.to(colorSpace)
											.toString(),
									);

									if (string) {
										committedColorRef.current = string;
										setInputValue(string);
										onValueChange?.(toCssFormat(string));
									}

									onChange?.(event);
								}}
								tabIndex={-1}
								type="color"
								// input type="color" accepts 6-digit hex values only
								value={toCssFormat(
									toShortFormat(
										new Color(toCssFormat(color))
											.to("srgb")
											.toString({ format: "hex" }),
									)!,
								)}
							/>
							<div className={styles.ColorFieldSwatchBorder} />
						</div>
					</TextField.Slot>
				</TextField.Root>
			</div>
		);
	},
);

ColorField.displayName = "ColorField";

const hasSelection = (input: HTMLInputElement | null) => {
	if (input) {
		const { selectionStart, selectionEnd } = input;
		return (selectionEnd ?? 0) - (selectionStart ?? 0) > 0;
	}

	return false;
};

const toShortFormat = (value?: string): string | null => {
	if (!value) {
		return null;
	}

	// Make sure `toShortFormat` can parse values it has produced itself.
	value = toCssFormat(value.trim());

	const regexp = /((?:^(?:[0-9]|[a-f]){6})|(?:^(?:[0-9]|[a-f]){1,3}))/i;
	let [hex] = value.replace(/^#/, "").match(regexp) ?? [];

	let color: Color | undefined;

	if (isColorFunction(value)) {
		try {
			color = new Color(value);

			// Convert sRGB color spaces to hex because colorjs.io formats them a bit weird.
			// and since we don’t feel strongly enough about fixing that, hex is better than weird.
			if (["srgb", "hsl", "hwb"].includes(color.spaceId)) {
				return toShortFormat(color.to("srgb").toString({ format: "hex" }));
			}

			const str = color.toString({ precision: 3 });

			// Remove the `color()` function wrapper for brevity
			return str.startsWith("color")
				? str.replace("color(", "").replace(")", "")
				: str;
		} catch {}
	}

	if (!hex) {
		return null;
	}

	switch (hex.length) {
		case 1:
			hex = hex.repeat(6);
			break;
		case 2:
			hex = hex.repeat(3);
			break;
		case 3:
			const [r, g, b] = hex.split("");
			hex = `${r}${r}${g}${g}${b}${b}`;
	}

	return hex.toUpperCase();
};

const toCssFormat = (value: string) => {
	if (isColorFunction(value)) {
		return value.includes("(") ? value : `color(${value})`;
	}

	if (value.startsWith("#")) {
		return value;
	}

	return "#" + value;
};

const isColorFunction = (value: string) => {
	return (
		value.startsWith("a98") ||
		value.startsWith("color") ||
		value.startsWith("display-p3") ||
		value.startsWith("hsl") ||
		value.startsWith("hwb") ||
		value.startsWith("lab") ||
		value.startsWith("lch") ||
		value.startsWith("oklab") ||
		value.startsWith("oklch") ||
		value.startsWith("p3") ||
		value.startsWith("prophoto") ||
		value.startsWith("rec2020") ||
		value.startsWith("rgb") ||
		value.startsWith("srgb") ||
		value.startsWith("xyz")
	);
};

const useIsomorphicLayoutEffect =
	typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;
