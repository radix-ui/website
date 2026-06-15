import Color from "colorjs.io";
import { type Palette, defaultPalette } from "./palette-cookie";

// URL query parameters that describe a palette, following the
// `{role}-{appearance}` convention, e.g.
// `/colors/custom?accent-light=3D63DD&accent-dark=E2644B`
const PARAM_TO_FIELD = {
	"accent-light": "lightAccent",
	"accent-dark": "darkAccent",
	"gray-light": "lightGray",
	"gray-dark": "darkGray",
	"bg-light": "lightBg",
	"bg-dark": "darkBg",
} as const satisfies Record<string, keyof Palette>;

const FIELD_TO_PARAM = Object.fromEntries(
	Object.entries(PARAM_TO_FIELD).map(([param, field]) => [field, param]),
) as Record<keyof Palette, string>;

export type SearchParamsLike = URLSearchParams | Record<string, string | string[] | undefined>;

function getParam(params: SearchParamsLike, key: string): string | undefined {
	if (params instanceof URLSearchParams) {
		return params.get(key) ?? undefined;
	}
	const value = params[key];
	return Array.isArray(value) ? value[0] : value;
}

function normalizeColorParam(raw: string): string | null {
	const value = raw.trim();
	if (value === "") {
		return null;
	}
	const candidate = /^[0-9a-fA-F]{3,8}$/.test(value) ? `#${value}` : value;
	try {
		new Color(candidate);
		return candidate;
	} catch {
		return null;
	}
}

function stripHash(value: string): string {
	return value.startsWith("#") ? value.slice(1) : value;
}

export function applyPaletteParams(base: Palette, params: SearchParamsLike): Palette {
	const next = { ...base };
	for (const [param, field] of Object.entries(PARAM_TO_FIELD)) {
		const raw = getParam(params, param);
		if (raw === undefined) {
			continue;
		}
		const normalized = normalizeColorParam(raw);
		if (normalized) {
			next[field] = normalized;
		}
	}
	return next;
}

export function buildPaletteSearchParams(
	palette: Palette,
	existing?: URLSearchParams,
): URLSearchParams {
	const search = new URLSearchParams(existing);
	for (const field of Object.keys(FIELD_TO_PARAM) as (keyof Palette)[]) {
		const param = FIELD_TO_PARAM[field];
		const value = palette[field];
		if (value === defaultPalette[field]) {
			search.delete(param);
		} else {
			search.set(param, stripHash(value));
		}
	}
	return search;
}
