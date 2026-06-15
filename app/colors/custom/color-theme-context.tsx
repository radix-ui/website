"use client";
import * as React from "react";
import type { generateRadixColors } from "@components/generate-radix-colors";
import type { getColorName } from "./utils";

export const ColorThemeContext = React.createContext<{
	result: ReturnType<typeof generateRadixColors>;
	darkModeResult: ReturnType<typeof generateRadixColors>;
	lightModeResult: ReturnType<typeof generateRadixColors>;
	appearance: "light" | "dark";
	accent: ReturnType<typeof getColorName>;
	accentValue: string;
	grayValue: string;
	bgValue: string;
	setAccentValue: (value: string) => void;
	setGrayValue: (value: string) => void;
	setBgValue: (value: string) => void;
} | null>(null);
ColorThemeContext.displayName = "ColorThemeContext";

export function useColorThemeContext() {
	const context = React.use(ColorThemeContext);
	if (!context) {
		throw new Error(
			"useColorThemeContext must be used within a ColorThemeProvider",
		);
	}
	return context;
}
