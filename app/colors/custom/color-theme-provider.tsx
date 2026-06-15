"use client";
import { generateRadixColors } from "@components/generate-radix-colors";
import { useTheme } from "next-themes";
import * as React from "react";
import { ColorThemeContext } from "./color-theme-context";
import {
	type Appearance,
	type Palette,
	writeAppearanceCookie,
	writePaletteCookie,
} from "./palette-cookie";
import { buildPaletteSearchParams } from "./palette-url";
import { getColorName } from "./utils";
import { useIsHydrated } from "@utils/use-is-hydrated";

export function ColorThemeProvider({
	initialPalette,
	initialAppearance,
	children,
}: {
	initialPalette: Palette;
	initialAppearance?: Appearance;
	children: React.ReactNode;
}) {
	const { resolvedTheme } = useTheme();
	const isHydrated = useIsHydrated();
	const [palette, setPalette] = React.useState(initialPalette);

	// Which theme's values to show in the inputs. Next themes only knows the
	// resolved theme on the client, so before hydration we trust the appearance
	// cookie, ensuring the SSR markup and the first client render agree. After
	// hydration we follow Next Themes.
	const isDark = isHydrated ? resolvedTheme === "dark" : initialAppearance === "dark";

	// Mirror the resolved appearance into a cookie so the next SSR render starts
	// with the correct theme already selected.
	React.useEffect(() => {
		if (resolvedTheme === "light" || resolvedTheme === "dark") {
			writeAppearanceCookie(resolvedTheme);
		}
	}, [resolvedTheme]);

	const updatePalette = React.useCallback((patch: Partial<Palette>) => {
		setPalette((prev) => {
			const next = { ...prev, ...patch };
			writePaletteCookie(next);
			return next;
		});
	}, []);

	// Keep the URL in sync with the palette so the page is always shareable and
	// survives a reload. We use history.replaceState rather than the Next router
	// to avoid a server round-trip and re-render — the client already holds the
	// authoritative state, the URL is just a reflection of it.
	React.useEffect(() => {
		const current = new URLSearchParams(window.location.search);
		const next = buildPaletteSearchParams(palette, current);
		const nextSearch = next.toString();
		if (nextSearch === current.toString()) {
			return;
		}
		const url =
			window.location.pathname + (nextSearch ? `?${nextSearch}` : "") + window.location.hash;
		window.history.replaceState(window.history.state, "", url);
	}, [palette]);

	const setAccentValue = React.useCallback(
		(value: string) => updatePalette(isDark ? { darkAccent: value } : { lightAccent: value }),
		[isDark, updatePalette],
	);
	const setGrayValue = React.useCallback(
		(value: string) => updatePalette(isDark ? { darkGray: value } : { lightGray: value }),
		[isDark, updatePalette],
	);
	const setBgValue = React.useCallback(
		(value: string) => updatePalette(isDark ? { darkBg: value } : { lightBg: value }),
		[isDark, updatePalette],
	);

	const accentValue = isDark ? palette.darkAccent : palette.lightAccent;
	const grayValue = isDark ? palette.darkGray : palette.lightGray;
	const bgValue = isDark ? palette.darkBg : palette.lightBg;

	const { result, darkModeResult, lightModeResult } = React.useMemo(() => {
		const darkModeResult = generateRadixColors({
			appearance: "dark",
			accent: palette.darkAccent,
			gray: palette.darkGray,
			background: palette.darkBg,
		});

		const lightModeResult = generateRadixColors({
			appearance: "light",
			accent: palette.lightAccent,
			gray: palette.lightGray,
			background: palette.lightBg,
		});

		return {
			result: isDark ? darkModeResult : lightModeResult,
			darkModeResult,
			lightModeResult,
		};
	}, [isDark, palette]);

	// The accent name must match the one `getNewPreviewStyles` emits the scales
	// under (always derived from the light palette). It feeds both
	// `data-accent-color` and the swatch CSS variables (`var(--{accent}-N)`), so
	// it has to stay theme-independent and identical on the server and client,
	// otherwise the swatches point at variables the injected styles never define.
	const accent = getColorName(lightModeResult.accentScale[8]);

	return (
		<ColorThemeContext
			value={{
				result,
				darkModeResult,
				lightModeResult,
				appearance: isDark ? "dark" : "light",
				accent,
				accentValue,
				grayValue,
				bgValue,
				setAccentValue,
				setGrayValue,
				setBgValue,
			}}
		>
			{children}
		</ColorThemeContext>
	);
}
