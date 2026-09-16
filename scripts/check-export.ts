/**
 * Sanity checks on the static export before it is deployed. Each check guards
 * something the hosting setup (wrangler.jsonc, worker/index.ts) relies on and
 * that a future change could silently break without failing `next build`.
 */
import fs from "node:fs";
import path from "node:path";
import { globSync } from "glob";

const OUT_DIR = path.join(process.cwd(), "out");

const toPosix = (p: string) => p.split(path.sep).join("/");

// Paths for which worker/index.ts negotiates Markdown (wrangler.jsonc
// `assets.run_worker_first`); every HTML page below them needs a `.md` twin.
const MARKDOWN_PREFIXES = ["primitives/docs/", "themes/docs/", "colors/docs/", "blog/"];

const REQUIRED_FILES = [
	// Home page.
	"index.html",
	// Served by `not_found_handling: "404-page"`.
	"404.html",
	// Ported from next.config.js `headers()`, which the export ignores.
	"_headers",
	// Loaded by the client-side docs search (components/primitives-search.tsx).
	"search-index.json",
	// The former proxy.ts / API route must not have come back as server code;
	// a couple of representative pages and their Markdown twins.
	"primitives/docs/components/dialog.html",
	"primitives/docs/components/dialog.md",
	"icons.html",
];

const errors: string[] = [];

for (const file of REQUIRED_FILES) {
	if (!fs.existsSync(path.join(OUT_DIR, file))) {
		errors.push(`missing out/${file}`);
	}
}

const htmlFiles = globSync(`${toPosix(OUT_DIR)}/**/*.html`, {
	ignore: [`${toPosix(OUT_DIR)}/_next/**`],
}).map((filePath) => toPosix(path.relative(OUT_DIR, filePath)));

for (const relativePath of htmlFiles) {
	if (!MARKDOWN_PREFIXES.some((prefix) => relativePath.startsWith(prefix))) continue;
	const markdownPath = relativePath.replace(/\.html$/, ".md");
	if (!fs.existsSync(path.join(OUT_DIR, markdownPath))) {
		errors.push(`missing Markdown twin out/${markdownPath}`);
	}
}

// Redirects are Worker code (worker/redirects.ts), not a `_redirects` file:
// the platform did not honor file order for overlapping dynamic rules. A
// `_redirects` file reappearing would be evaluated by the platform *before*
// the Worker for the paths it lists, silently taking precedence.
if (fs.existsSync(path.join(OUT_DIR, "_redirects"))) {
	errors.push("out/_redirects exists; redirects belong in worker/redirects.ts (see its header)");
}

if (errors.length > 0) {
	console.error("Static export check failed:");
	for (const error of errors) console.error(`  - ${error}`);
	process.exit(1);
}

console.log(`Static export check passed (${htmlFiles.length} pages).`);
