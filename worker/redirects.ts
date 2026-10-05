/**
 * Legacy URL redirects, ported from the former `redirects()` in
 * next.config.js (which a static export ignores).
 *
 * They live in Worker code rather than in a `_redirects` file on purpose:
 * several dynamic rules overlap (`/docs/colors/getting-started/*` is also
 * matched by `/docs/colors/*`), and the static-assets `_redirects` evaluation
 * on the Cloudflare edge did not honor file order for such overlapping splat
 * rules, so the broader rule won. Here the first matching rule wins, in the
 * order written, and worker/redirects.test.ts pins every case.
 *
 * Status codes match what Next emitted: 308 for `permanent: true`, 307
 * otherwise. The query string is preserved.
 */

export type RedirectRule = {
	/** Pathname pattern: literal segments, `*` (greedy, at most one, last) or `:name` placeholders. */
	from: string;
	/** Destination pathname; may reference `:splat` and `:name` placeholders. */
	to: string;
	status: 307 | 308;
};

// Most specific first within each family; the matcher returns the first hit.
export const REDIRECT_RULES: readonly RedirectRule[] = [
	// Case studies moved under /primitives.
	{ from: "/case-studies", to: "/primitives/case-studies", status: 308 },
	{ from: "/case-studies/*", to: "/primitives/case-studies/:splat", status: 308 },

	// Section roots.
	{ from: "/primitives/docs", to: "/primitives/docs/overview/introduction", status: 307 },
	{ from: "/themes", to: "/", status: 307 },
	{ from: "/themes/docs", to: "/themes/docs/overview/getting-started", status: 307 },
	{ from: "/colors/docs", to: "/colors/docs/overview/installation", status: 308 },
	{ from: "/colors/docs/tests", to: "/colors", status: 308 },
	{ from: "/colors/docs/tests/*", to: "/colors", status: 308 },

	// Old /docs/<product> URLs.
	{
		from: "/docs/colors/palette-composition/the-scales",
		to: "/colors/docs/palette-composition/scales",
		status: 308,
	},
	{ from: "/docs/colors/getting-started", to: "/colors/docs/overview", status: 308 },
	{ from: "/docs/colors/getting-started/*", to: "/colors/docs/overview/:splat", status: 308 },
	// Vercel sent the bare `/docs/colors` through `/colors/docs/` to the
	// installation page; skip the hop.
	{ from: "/docs/colors", to: "/colors/docs/overview/installation", status: 308 },
	{ from: "/docs/colors/*", to: "/colors/docs/:splat", status: 308 },
	{ from: "/docs/primitives", to: "/primitives/docs/overview/introduction", status: 307 },
	{
		from: "/docs/primitives/utilities/aspect-ratio",
		to: "/primitives/docs/components/aspect-ratio",
		status: 308,
	},
	{
		from: "/docs/primitives/utilities/aspect-ratio/*",
		to: "/primitives/docs/components/aspect-ratio",
		status: 308,
	},
	{
		from: "/docs/primitives/utilities/label",
		to: "/primitives/docs/components/label",
		status: 308,
	},
	{
		from: "/docs/primitives/utilities/label/*",
		to: "/primitives/docs/components/label",
		status: 308,
	},
	{ from: "/docs/primitives/*", to: "/primitives/docs/:splat", status: 308 },

	// Versioned docs URLs from the primitives 1.x era.
	{
		from: "/primitives/docs/components/:slug/:version",
		to: "/primitives/docs/components/:slug",
		status: 308,
	},
	{
		from: "/primitives/docs/utilities/:slug/:version",
		to: "/primitives/docs/utilities/:slug",
		status: 308,
	},
];

/**
 * Path prefixes the Worker must see for the rules above to run
 * (wrangler.jsonc `assets.run_worker_first`). Kept next to the rules so the
 * two cannot drift; the test checks every rule is covered.
 */
export const REDIRECT_PATHS = [
	"/case-studies",
	"/case-studies/*",
	"/colors/docs",
	"/colors/docs/*",
	"/docs/*",
	"/primitives/docs",
	"/primitives/docs/*",
	"/themes",
	"/themes/docs",
	"/themes/docs/*",
];

export type Redirect = { location: string; status: 307 | 308 };

/**
 * Returns the redirect for a request URL, or null when no rule matches.
 * Matching is case-sensitive: `run_worker_first` patterns are, so an
 * upper-cased legacy URL never reaches the Worker anyway (Next's redirects()
 * on Vercel matched case-insensitively; real pages were case-sensitive).
 */
export function resolveRedirect(url: URL): Redirect | null {
	const pathname = url.pathname.replace(/\/+$/, "") || "/";
	for (const rule of REDIRECT_RULES) {
		const params = match(rule.from, pathname);
		if (params) {
			return { location: fill(rule.to, params) + url.search, status: rule.status };
		}
	}
	return null;
}

function match(pattern: string, pathname: string): Record<string, string> | null {
	const patternSegments = pattern.split("/").slice(1);
	const pathSegments = pathname.split("/").slice(1);
	const params: Record<string, string> = {};

	for (let i = 0; i < patternSegments.length; i++) {
		const segment = patternSegments[i];
		if (segment === "*") {
			// Greedy: everything from here on, and there must be something.
			const rest = pathSegments.slice(i);
			if (rest.length === 0 || rest[0] === "") return null;
			params.splat = rest.join("/");
			return params;
		}
		const value = pathSegments[i];
		if (value === undefined || value === "") return null;
		if (segment.startsWith(":")) {
			params[segment.slice(1)] = value;
		} else if (segment !== value) {
			return null;
		}
	}
	return pathSegments.length === patternSegments.length ? params : null;
}

function fill(to: string, params: Record<string, string>): string {
	return to.replace(/:([A-Za-z]\w*)/g, (_, name: string) => params[name] ?? "");
}
