// `pnpm test` (Node's test runner via tsx). Pins the legacy redirects to what
// the Vercel deployment answered, and that they cannot swallow real pages.
import assert from "node:assert/strict";
import fs from "node:fs";
import { test } from "node:test";
import { REDIRECT_PATHS, REDIRECT_RULES, resolveRedirect } from "./redirects";

const url = (path: string) => new URL(path, "https://www.radix-ui.com");

const EXPECTED: Array<[string, number, string]> = [
	// static
	["/case-studies", 308, "/primitives/case-studies"],
	["/colors/docs", 308, "/colors/docs/overview/installation"],
	["/colors/docs/tests", 308, "/colors"],
	["/docs/colors/palette-composition/the-scales", 308, "/colors/docs/palette-composition/scales"],
	["/docs/colors/getting-started", 308, "/colors/docs/overview"],
	["/docs/primitives", 307, "/primitives/docs/overview/introduction"],
	["/docs/primitives/utilities/aspect-ratio", 308, "/primitives/docs/components/aspect-ratio"],
	["/docs/primitives/utilities/label", 308, "/primitives/docs/components/label"],
	["/primitives/docs", 307, "/primitives/docs/overview/introduction"],
	["/themes", 307, "/"],
	["/themes/docs", 307, "/themes/docs/overview/getting-started"],
	// dynamic, including the overlapping ones where the specific rule must win
	["/case-studies/vercel", 308, "/primitives/case-studies/vercel"],
	["/colors/docs/tests/foo", 308, "/colors"],
	["/colors/docs/tests/foo/bar", 308, "/colors"],
	["/docs/colors/getting-started/usage", 308, "/colors/docs/overview/usage"],
	["/docs/colors/palette-composition/scales", 308, "/colors/docs/palette-composition/scales"],
	["/docs/colors/a/b/c", 308, "/colors/docs/a/b/c"],
	["/docs/primitives/utilities/aspect-ratio/1.0", 308, "/primitives/docs/components/aspect-ratio"],
	["/docs/primitives/utilities/label/1.0", 308, "/primitives/docs/components/label"],
	["/docs/primitives/components/dialog", 308, "/primitives/docs/components/dialog"],
	["/docs/primitives/utilities/slot", 308, "/primitives/docs/utilities/slot"],
	["/primitives/docs/components/dialog/1.0.5", 308, "/primitives/docs/components/dialog"],
	["/primitives/docs/utilities/slot/1.0.0", 308, "/primitives/docs/utilities/slot"],
];

for (const [from, status, to] of EXPECTED) {
	test(`${from} → ${status} ${to}`, () => {
		assert.deepEqual(resolveRedirect(url(from)), { location: to, status });
	});
}

test("preserves the query string", () => {
	assert.deepEqual(resolveRedirect(url("/case-studies?x=1&y=2")), {
		location: "/primitives/case-studies?x=1&y=2",
		status: 308,
	});
	assert.deepEqual(resolveRedirect(url("/docs/primitives/components/dialog?tab=api")), {
		location: "/primitives/docs/components/dialog?tab=api",
		status: 308,
	});
});

test("ignores a trailing slash on the request", () => {
	assert.deepEqual(resolveRedirect(url("/themes/")), { location: "/", status: 307 });
	assert.deepEqual(resolveRedirect(url("/docs/primitives/components/dialog/")), {
		location: "/primitives/docs/components/dialog",
		status: 308,
	});
});

test("is case-sensitive (run_worker_first patterns are, so this cannot be looser)", () => {
	assert.equal(resolveRedirect(url("/Docs/primitives")), null);
	assert.equal(resolveRedirect(url("/THEMES")), null);
});

test("leaves real pages alone", () => {
	for (const path of [
		"/",
		"/primitives",
		"/primitives/docs/overview/introduction",
		"/primitives/docs/components/dialog",
		"/primitives/docs/utilities/slot",
		"/primitives/case-studies",
		"/primitives/case-studies/vercel",
		"/themes/docs/overview/getting-started",
		"/themes/playground",
		"/colors",
		"/colors/custom",
		"/colors/docs/overview/installation",
		"/colors/docs/palette-composition/scales",
		"/blog",
		"/blog/themes-3",
		"/icons",
		"/docs",
		"/case-studies-archive",
		"/primitives/docs/components/dialog.md",
	]) {
		assert.equal(resolveRedirect(url(path)), null, path);
	}
});

test("a splat needs at least one segment; bare section roots have exact rules", () => {
	// `/docs/colors` is not `/docs/colors/*`; it has its own rule, with or
	// without a trailing slash.
	const installation = { location: "/colors/docs/overview/installation", status: 308 };
	assert.deepEqual(resolveRedirect(url("/docs/colors")), installation);
	assert.deepEqual(resolveRedirect(url("/docs/colors/")), installation);
	assert.deepEqual(resolveRedirect(url("/docs/primitives/")), {
		location: "/primitives/docs/overview/introduction",
		status: 307,
	});
	// No rule for other /docs/* paths: they fall through to the 404 page.
	assert.equal(resolveRedirect(url("/docs/nope")), null);
	assert.equal(resolveRedirect(url("/docs")), null);
});

test("every rule's path is covered by run_worker_first", () => {
	const config = fs.readFileSync(new URL("../wrangler.jsonc", import.meta.url), "utf8");
	for (const prefix of REDIRECT_PATHS) {
		assert.ok(config.includes(`"${prefix}"`), `wrangler.jsonc run_worker_first lacks ${prefix}`);
	}
	const covered = (path: string) =>
		REDIRECT_PATHS.some((prefix) =>
			prefix.endsWith("/*")
				? path === prefix.slice(0, -2) || path.startsWith(prefix.slice(0, -1))
				: path === prefix,
		);
	for (const rule of REDIRECT_RULES) {
		const probe = rule.from.replace("*", "x").replace(/:\w+/g, "x");
		assert.ok(covered(probe), `${rule.from} is not reachable by the Worker`);
	}
});
