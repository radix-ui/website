"use client";
import * as React from "react";
import { ThemeProvider as ThemeProviderBase } from "next-themes";

const THEME_CONTEXT_VALUE = { light: "light-theme", dark: "dark-theme" };
export function ThemeProvider({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProviderBase
			disableTransitionOnChange
			attribute="class"
			value={THEME_CONTEXT_VALUE}
			defaultTheme="system"
		>
			{children}
		</ThemeProviderBase>
	);
}
