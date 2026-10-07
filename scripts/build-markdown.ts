/**
 * Writes a Markdown twin next to every page of the static export.
 *
 * On Vercel, `/<page>.md` was rewritten to the `/api/markdown` route handler,
 * which fetched the rendered page and converted it on demand; `proxy.ts` did
 * the same for requests with `Accept: text/markdown`. A static export has no
 * request-time code, so this script runs after `next build`, reads each
 * exported `out/**\/*.html`, applies the identical conversion
 * (scripts/html-to-markdown.ts + oxfmt) and writes `out/**\/*.md`. The
 * Cloudflare Worker (worker/index.ts) serves these files for the `Accept`
 * negotiation; `.md` URLs are plain static assets.
 */
import fs from "node:fs";
import path from "node:path";
import { globSync } from "glob";
import { format } from "oxfmt";
import { convertHtmlToMarkdown } from "./html-to-markdown";

const OUT_DIR = path.join(process.cwd(), "out");

const toPosix = (p: string) => p.split(path.sep).join("/");

// Not pages: Next's not-found documents and the root document (served at `/`;
// the old rewrite never produced Markdown for it either).
const SKIP = new Set(["404.html", "_not-found.html", "index.html"]);

async function main() {
	if (!fs.existsSync(OUT_DIR)) {
		throw new Error(`Static export not found at ${OUT_DIR}. Run \`next build\` first.`);
	}

	const htmlFiles = globSync(`${toPosix(OUT_DIR)}/**/*.html`, {
		ignore: [`${toPosix(OUT_DIR)}/_next/**`],
	})
		.map((filePath) => toPosix(path.relative(OUT_DIR, filePath)))
		.filter((relativePath) => !SKIP.has(relativePath))
		.sort();

	let written = 0;
	for (const relativePath of htmlFiles) {
		const html = fs.readFileSync(path.join(OUT_DIR, relativePath), "utf8");
		const markdown = await convertHtmlToMarkdown(html);
		const { code } = await format("page.md", markdown);
		const target = path.join(OUT_DIR, relativePath.replace(/\.html$/, ".md"));
		fs.writeFileSync(target, code);
		written += 1;
	}

	console.log(`Wrote ${written} Markdown pages to ${path.relative(process.cwd(), OUT_DIR)}/`);
}

main().catch((error) => {
	console.error(error);
	process.exit(1);
});
