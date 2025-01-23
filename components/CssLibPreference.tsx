"use client";
import * as React from "react";
import { useLayoutEffect } from "radix-ui/internal";
import { DEFAULT_CSS_LIB, SUPPORTED_CSS_LIBS } from "@utils/constants";
import type { CssLib } from "@utils/constants";

const LOCAL_STORAGE_KEY = "@radix-ui/css-lib";

type CssLibPreferenceContextValue = {
	preferredCssLib: CssLib;
	setPreferredCssLib: (lib: CssLib) => void;
};

const CssLibPreferenceContext =
	React.createContext<CssLibPreferenceContextValue | null>(null);

const CssLibPreferenceProvider: React.FC<{ children?: React.ReactNode }> = ({
	children,
}) => {
	const [preferredCssLib, setPreferredCssLib] =
		React.useState<CssLib>(DEFAULT_CSS_LIB);

	const savePreferredCssLib = React.useCallback((lib: unknown) => {
		if (isValidCssLib(lib)) {
			setPreferredCssLib(lib);
			setLocalStorageCssLib(lib);
		} else {
			setPreferredCssLib(DEFAULT_CSS_LIB);
			setLocalStorageCssLib(DEFAULT_CSS_LIB);
		}
	}, []);

	useLayoutEffect(() => {
		const localStorageCssLib = window.localStorage.getItem(LOCAL_STORAGE_KEY);
		savePreferredCssLib(localStorageCssLib);
	}, [savePreferredCssLib]);

	const contextValue = React.useMemo(
		() => ({
			preferredCssLib: preferredCssLib,
			setPreferredCssLib: savePreferredCssLib,
		}),
		[preferredCssLib, savePreferredCssLib],
	);

	return (
		<CssLibPreferenceContext.Provider value={contextValue}>
			{children}
		</CssLibPreferenceContext.Provider>
	);
};

const useCssLibPreference = () => {
	const context = React.useContext(CssLibPreferenceContext);
	if (!context) {
		throw new TypeError(
			"`useCssLibPreference` must be called from within a `CssLibPreferenceProvider`.",
		);
	}
	const { preferredCssLib, setPreferredCssLib } = context;
	return [preferredCssLib, setPreferredCssLib] as const;
};

function setLocalStorageCssLib(lib: CssLib) {
	window.localStorage.setItem(LOCAL_STORAGE_KEY, lib);
}

const isValidCssLib = (lib: unknown): lib is CssLib =>
	SUPPORTED_CSS_LIBS.includes(lib as CssLib);

export { CssLibPreferenceProvider, useCssLibPreference, isValidCssLib };
