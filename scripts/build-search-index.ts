/**
 * Builds the self-hosted search index for the Primitives docs.
 *
 * This replaces the Algolia DocSearch crawler. It enumerates the docs pages,
 * fetches their rendered HTML from a running server, and extracts hierarchical
 * records (lvl1–lvl4 headings + content) using the same `data-algolia-*` DOM
 * contract the DocSearch scraper relied on. The output is a flat array of
 * records written to `public/search-index.json`, which the client loads and
 * feeds into an in-browser search engine.
 *
 * Usage:
 *   1. Start a server that renders the docs (e.g. `pnpm dev`, or
 *      `pnpm build && pnpm start`).
 *   2. Run `pnpm build:search` (optionally with SEARCH_INDEX_BASE_URL set).
 */
import fs from "node:fs";
import path from "node:path";
import { globSync } from "glob";
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import { select, matches } from "hast-util-select";
import { toString as hastToString } from "hast-util-to-string";
import type { Root, Element, ElementContent } from "hast";

const SUPPORTED_LEVELS = ["lvl0", "lvl1", "lvl2", "lvl3", "lvl4"] as const;
type LevelContentType = (typeof SUPPORTED_LEVELS)[number];
type ContentType = LevelContentType | "content";

interface SearchRecord {
	objectID: string;
	type: ContentType;
	url: string;
	hierarchy: {
		lvl0: string;
		lvl1: string | null;
		lvl2: string | null;
		lvl3: string | null;
		lvl4: string | null;
	};
	content: string | null;
	title?: string;
}

// Sections to index, mapped to their `lvl0` group label (these mirror the
// hidden `[data-algolia-lvl0]` markers rendered by each route).
const SECTIONS = [
	{ dir: "overview", lvl0: "Overview" },
	{ dir: "components", lvl0: "Components" },
	{ dir: "utilities", lvl0: "Utilities" },
	{ dir: "guides", lvl0: "Guides" },
] as const;

// Pages excluded from indexing (mirrors `stop_urls` in the old Algolia config).
const STOP_SLUGS = new Set(["primitives/docs/overview/releases"]);

const DATA_PATH = path.join(process.cwd(), "data");
const OUTPUT_PATH = path.join(process.cwd(), "public", "search-index.json");
const BASE_URL = (
	process.env.SEARCH_INDEX_BASE_URL ?? "http://localhost:3000"
).replace(/\/$/, "");

const HEADING_TAGS: Record<string, LevelContentType> = {
	h1: "lvl1",
	h2: "lvl2",
	h3: "lvl3",
	h4: "lvl4",
};
const CONTENT_TAGS = new Set(["p", "li"]);

function getSlugsForSection(dir: string): string[] {
	const sectionPath = path.join(DATA_PATH, "primitives", "docs", dir);
	return globSync(`${sectionPath}/**/*.mdx`)
		.map((filePath) =>
			filePath.slice(DATA_PATH.length + 1).replace(/\.mdx$/, ""),
		)
		.filter((slug) => !STOP_SLUGS.has(slug))
		.sort();
}

function normalizeWhitespace(value: string): string {
	return value.replace(/\s+/g, " ").trim();
}

function isExcluded(node: Element): boolean {
	return matches("[data-algolia-exclude]", node);
}

/**
 * Walks the page-scope subtree in document order, invoking `visit` for each
 * heading (h1–h4) and content (p, li) element. Excluded subtrees are skipped,
 * and we do not descend into headings/content nodes to avoid double-counting
 * nested list items.
 */
function walkInDocumentOrder(
	node: Element | Root,
	visit: (element: Element) => void,
): void {
	const children = (node.children ?? []) as ElementContent[];
	for (const child of children) {
		if (child.type !== "element") continue;
		if (isExcluded(child)) continue;

		const tag = child.tagName;
		if (tag in HEADING_TAGS || CONTENT_TAGS.has(tag)) {
			visit(child);
			// Leaf for indexing purposes — don't descend further.
			continue;
		}

		walkInDocumentOrder(child, visit);
	}
}

function extractRecords(
	html: string,
	slug: string,
	lvl0: string,
): SearchRecord[] {
	const tree = unified().use(rehypeParse).parse(html) as Root;
	const scope = select("[data-algolia-page-scope]", tree);
	if (!scope) return [];

	const pageUrl = `/${slug}`;
	const records: SearchRecord[] = [];
	const hierarchy: SearchRecord["hierarchy"] = {
		lvl0,
		lvl1: null,
		lvl2: null,
		lvl3: null,
		lvl4: null,
	};
	// Anchor of the nearest preceding heading, used to deep-link content rows.
	let currentAnchor = "";

	const makeUrl = () => `${pageUrl}${currentAnchor ? `#${currentAnchor}` : ""}`;

	walkInDocumentOrder(scope, (element) => {
		const text = normalizeWhitespace(hastToString(element));
		if (!text) return;

		const headingLevel = HEADING_TAGS[element.tagName];
		if (headingLevel) {
			const id = element.properties?.id;
			currentAnchor = typeof id === "string" ? id : "";

			// Set this level and reset everything below it.
			const levelIndex = SUPPORTED_LEVELS.indexOf(headingLevel);
			hierarchy.lvl1 = headingLevel === "lvl1" ? text : hierarchy.lvl1;
			for (let i = 2; i <= 4; i++) {
				const key = `lvl${i}` as LevelContentType;
				if (i === levelIndex) {
					hierarchy[key] = text;
				} else if (i > levelIndex) {
					hierarchy[key] = null!;
				}
			}

			// `min_indexed_level: 1` — only emit once we have an lvl1 context.
			if (hierarchy.lvl1) {
				records.push({
					objectID: `${slug}:${records.length}`,
					type: headingLevel,
					url: makeUrl(),
					hierarchy: { ...hierarchy },
					content: null,
				});
			}
			return;
		}

		// Content row (p / li).
		if (!hierarchy.lvl1) return;
		records.push({
			objectID: `${slug}:${records.length}`,
			type: "content",
			url: makeUrl(),
			hierarchy: { ...hierarchy },
			content: text,
		});
	});

	return records;
}

async function fetchPage(url: string): Promise<string | null> {
	try {
		const response = await fetch(url);
		if (!response.ok) {
			console.warn(`  ✗ ${url} → HTTP ${response.status}`);
			return null;
		}
		return await response.text();
	} catch (error) {
		console.error(
			`\nFailed to fetch ${url}. Is the server running at ${BASE_URL}?\n` +
				`Start one with \`pnpm dev\` (or \`pnpm build && pnpm start\`), or set ` +
				`SEARCH_INDEX_BASE_URL.\n`,
		);
		throw error;
	}
}

async function main() {
	console.log(`Building search index from ${BASE_URL}\n`);

	const allRecords: SearchRecord[] = [];
	const perType: Record<string, number> = {};
	let pageCount = 0;

	for (const { dir, lvl0 } of SECTIONS) {
		const slugs = getSlugsForSection(dir);
		for (const slug of slugs) {
			const html = await fetchPage(`${BASE_URL}/${slug}`);
			if (!html) continue;

			const records = extractRecords(html, slug, lvl0);
			allRecords.push(...records);
			pageCount += 1;
			for (const record of records) {
				perType[record.type] = (perType[record.type] ?? 0) + 1;
			}
			console.log(`  ✓ ${slug} (${records.length} records)`);
		}
	}

	fs.writeFileSync(OUTPUT_PATH, JSON.stringify(allRecords, null, 2));

	console.log(`\nIndexed ${pageCount} pages → ${allRecords.length} records`);
	console.log(
		`Breakdown: ${Object.entries(perType)
			.sort()
			.map(([type, count]) => `${type}=${count}`)
			.join(", ")}`,
	);
	console.log(`Written to ${path.relative(process.cwd(), OUTPUT_PATH)}`);
}

main().catch((error) => {
	console.error(error);
	process.exit(1);
});
