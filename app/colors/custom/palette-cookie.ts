import Color from "colorjs.io";

export const PALETTE_COOKIE = "colors-custom-palette";

export const PALETTE_MAX_AGE_SECONDS = 60 * 60 * 2;

// The resolved appearance ("light"/"dark") is mirrored to a cookie so the
// server can render the correct theme's input values on the first paint. It's
// a non-sensitive UI hint, so we keep it around long enough that returning
// visitors don't flash.
export const APPEARANCE_COOKIE = "colors-custom-appearance";
export const APPEARANCE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365;

export type Appearance = "light" | "dark";

export function parseAppearanceCookie(
	value: string | undefined,
): Appearance | undefined {
	return value === "light" || value === "dark" ? value : undefined;
}

export function writeAppearanceCookie(appearance: Appearance): void {
	if (typeof document === "undefined") {
		return;
	}
	const secure = location.protocol === "https:" ? "; Secure" : "";
	document.cookie = `${APPEARANCE_COOKIE}=${appearance}; path=/colors/custom; max-age=${APPEARANCE_MAX_AGE_SECONDS}; SameSite=Lax${secure}`;
}

export interface Palette {
	lightAccent: string;
	lightGray: string;
	lightBg: string;
	darkAccent: string;
	darkGray: string;
	darkBg: string;
}

export const defaultPalette: Palette = {
	lightAccent: "#3D63DD",
	lightGray: "#8B8D98",
	lightBg: "#FFFFFF",
	darkAccent: "#3D63DD",
	darkGray: "#8B8D98",
	darkBg: "#111111",
};

// Only accept strings that parse as a real color. This both repairs corrupt
// cookies and prevents a hand-crafted cookie from injecting arbitrary text
// into the server-rendered <style> (the value is later interpolated into CSS).
function sanitizeColor(value: unknown, fallback: string): string {
	if (typeof value !== "string") {
		return fallback;
	}
	try {
		new Color(value);
		return value;
	} catch {
		return fallback;
	}
}

function safeDecode(value: string): string | null {
	try {
		return decodeURIComponent(value);
	} catch {
		return null;
	}
}

function parseJson(value: string): unknown {
	// Next decodes percent-encoding for us, but fall back to manual decoding in
	// case the value arrives still-encoded.
	for (const candidate of [value, safeDecode(value)]) {
		if (candidate === null) {
			continue;
		}
		try {
			return JSON.parse(candidate);
		} catch {
			// try the next candidate
		}
	}
	return null;
}

export function parsePaletteCookie(value: string | undefined): Palette {
	if (!value) {
		return defaultPalette;
	}
	const parsed = parseJson(value);
	if (!parsed || typeof parsed !== "object") {
		return defaultPalette;
	}
	const record = parsed as Partial<Record<keyof Palette, unknown>>;
	return {
		lightAccent: sanitizeColor(record.lightAccent, defaultPalette.lightAccent),
		lightGray: sanitizeColor(record.lightGray, defaultPalette.lightGray),
		lightBg: sanitizeColor(record.lightBg, defaultPalette.lightBg),
		darkAccent: sanitizeColor(record.darkAccent, defaultPalette.darkAccent),
		darkGray: sanitizeColor(record.darkGray, defaultPalette.darkGray),
		darkBg: sanitizeColor(record.darkBg, defaultPalette.darkBg),
	};
}

export function writePaletteCookie(palette: Palette): void {
	if (typeof document === "undefined") {
		return;
	}
	const value = encodeURIComponent(JSON.stringify(palette));
	const secure = location.protocol === "https:" ? "; Secure" : "";
	document.cookie = `${PALETTE_COOKIE}=${value}; path=/colors/custom; max-age=${PALETTE_MAX_AGE_SECONDS}; SameSite=Lax${secure}`;
}
