/**
 * Builds the self-hosted search index for the Primitives docs.
 *
 * This replaces the Algolia DocSearch crawler. It reads the MDX source files
 * directly (no running server required) and extracts hierarchical records
 * (lvl1–lvl4 headings + content) that mirror what the DocSearch scraper used to
 * produce from the rendered DOM. The output is a flat array of records written
 * to `public/search-index.json`, which the client loads and feeds into an
 * in-browser search engine (MiniSearch). Runs as a pre-step for both `pnpm dev`
 * and `pnpm build`.
 */
import fs from "node:fs";
import path from "node:path";
import { globSync } from "glob";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkMdx from "remark-mdx";
import { toString as mdastToString } from "mdast-util-to-string";
import GithubSlugger from "github-slugger";

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
}

// Sections to index, mapped to their `lvl0` group label (these mirror the
// hidden `[data-search-lvl0]` markers rendered by each route).
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

const toPosix = (p: string) => p.split(path.sep).join("/");

interface MdNode {
	type: string;
	depth?: number;
	name?: string | null;
	value?: unknown;
	children?: MdNode[];
	attributes?: MdxAttribute[];
}

interface MdxAttribute {
	type: string;
	name?: string;
	value?:
		| string
		| null
		| { type: string; value?: string; data?: { estree?: EstreeNode } };
}

interface EstreeNode {
	type: string;
	value?: unknown;
	expression?: EstreeNode;
	elements?: (EstreeNode | null)[];
	children?: EstreeNode[];
	quasis?: { value?: { cooked?: string | null } }[];
	body?: EstreeNode[];
}

function getSlugsForSection(dir: string): string[] {
	const sectionPath = path.join(DATA_PATH, "primitives", "docs", dir);
	return globSync(`${toPosix(sectionPath)}/**/*.mdx`)
		.map((filePath) =>
			toPosix(path.relative(DATA_PATH, filePath)).replace(/\.mdx$/, ""),
		)
		.filter((slug) => !STOP_SLUGS.has(slug))
		.sort();
}

function normalizeWhitespace(value: string): string {
	return value.replace(/\s+/g, " ").trim();
}

function textOf(node: MdNode): string {
	return normalizeWhitespace(mdastToString(node as never));
}

/**
 * Reads the visible text out of a single estree node, used for `<Highlights>`
 * feature entries. These are usually plain string literals, but some are JSX
 * fragments (e.g. text wrapping an anchor), so we collect JSX text while
 * deliberately skipping attribute values like `href`.
 */
function estreeText(node: EstreeNode | null | undefined): string {
	if (!node || typeof node !== "object") return "";
	switch (node.type) {
		case "Literal":
			return typeof node.value === "string" ? node.value : "";
		case "TemplateLiteral":
			return (node.quasis ?? []).map((q) => q.value?.cooked ?? "").join("");
		case "JSXText":
			return typeof node.value === "string" ? node.value : "";
		case "JSXExpressionContainer":
			return estreeText(node.expression);
		case "JSXFragment":
		case "JSXElement":
			// Only descend into children — never opening-tag attributes.
			return (node.children ?? []).map(estreeText).join("");
		default:
			return "";
	}
}

function getHighlightFeatures(node: MdNode): string[] {
	const attr = (node.attributes ?? []).find(
		(a) => a.type === "mdxJsxAttribute" && a.name === "features",
	);
	const value = attr?.value;
	if (!value || typeof value !== "object") return [];
	const estree = value.data?.estree;
	const expression = estree?.body?.[0]?.expression;
	if (!expression || expression.type !== "ArrayExpression") return [];
	return (expression.elements ?? [])
		.map((el) => normalizeWhitespace(estreeText(el)))
		.filter(Boolean);
}

function extractRecords(
	source: string,
	slug: string,
	lvl0: string,
): SearchRecord[] {
	const { content } = matter(source);
	const tree = unified()
		.use(remarkParse)
		.use(remarkGfm)
		.use(remarkMdx)
		.parse(content) as unknown as MdNode;

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
	// Matches `remark-slug`, which the site uses to generate heading ids.
	const slugger = new GithubSlugger();
	let currentAnchor = "";

	const makeUrl = () => `${pageUrl}${currentAnchor ? `#${currentAnchor}` : ""}`;

	const setHeading = (
		level: Exclude<LevelContentType, "lvl0">,
		text: string,
		anchor: string,
	) => {
		currentAnchor = anchor;
		const levelIndex = SUPPORTED_LEVELS.indexOf(level);
		hierarchy.lvl1 = level === "lvl1" ? text : hierarchy.lvl1;
		for (let i = 2; i <= 4; i++) {
			const key = `lvl${i}` as Exclude<LevelContentType, "lvl0" | "lvl1">;
			if (i === levelIndex) {
				hierarchy[key] = text;
			} else if (i > levelIndex) {
				hierarchy[key] = null;
			}
		}

		// `min_indexed_level: 1` — only emit once we have an lvl1 context.
		if (hierarchy.lvl1) {
			records.push({
				objectID: `${slug}:${records.length}`,
				type: level,
				url: makeUrl(),
				hierarchy: { ...hierarchy },
				content: null,
			});
		}
	};

	const pushContent = (text: string) => {
		if (!hierarchy.lvl1 || !text) return;
		records.push({
			objectID: `${slug}:${records.length}`,
			type: "content",
			url: makeUrl(),
			hierarchy: { ...hierarchy },
			content: text,
		});
	};

	const walk = (nodes: MdNode[]) => {
		for (const node of nodes) {
			switch (node.type) {
				case "heading": {
					const depth = node.depth ?? 0;
					if (depth < 1 || depth > 4) break;
					const text = textOf(node);
					if (text) {
						setHeading(
							`lvl${depth}` as Exclude<LevelContentType, "lvl0">,
							text,
							slugger.slug(text),
						);
					}
					break;
				}
				case "paragraph": {
					pushContent(textOf(node));
					break;
				}
				case "blockquote": {
					walk(node.children ?? []);
					break;
				}
				case "list": {
					for (const item of node.children ?? []) {
						if (item.type !== "listItem") continue;
						const children = item.children ?? [];
						// A list item's own text excludes any nested list, which we
						// recurse into separately so each `<li>` is its own record.
						const own = children.filter((c) => c.type !== "list");
						const nested = children.filter((c) => c.type === "list");
						const text = normalizeWhitespace(own.map(textOf).join(" "));
						pushContent(text);
						if (nested.length) walk(nested);
					}
					break;
				}
				case "mdxJsxFlowElement": {
					if (node.name === "Description") {
						// Renders as a `<p>` summary under the page title.
						pushContent(textOf(node));
					} else if (node.name === "Highlights") {
						// Renders a "Features" section with one `<li>` per feature.
						setHeading("lvl2", "Features", "");
						for (const feature of getHighlightFeatures(node)) {
							pushContent(feature);
						}
					} else {
						walk(node.children ?? []);
					}
					break;
				}
				// Skipped: code blocks, thematic breaks, tables, esm/expressions.
				default:
					break;
			}
		}
	};

	walk(tree.children ?? []);
	return records;
}

function main() {
	const allRecords: SearchRecord[] = [];
	const perType: Record<string, number> = {};
	let pageCount = 0;

	for (const { dir, lvl0 } of SECTIONS) {
		for (const slug of getSlugsForSection(dir)) {
			const source = fs.readFileSync(
				path.join(DATA_PATH, `${slug}.mdx`),
				"utf8",
			);
			const records = extractRecords(source, slug, lvl0);
			allRecords.push(...records);
			pageCount += 1;
			for (const record of records) {
				perType[record.type] = (perType[record.type] ?? 0) + 1;
			}
			console.log(`  ✓ ${slug} (${records.length} records)`);
		}
	}

	fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
	fs.writeFileSync(OUTPUT_PATH, JSON.stringify(allRecords));

	console.log(`\nIndexed ${pageCount} pages → ${allRecords.length} records`);
	console.log(
		`Breakdown: ${Object.entries(perType)
			.sort()
			.map(([type, count]) => `${type}=${count}`)
			.join(", ")}`,
	);
	console.log(`Written to ${path.relative(process.cwd(), OUTPUT_PATH)}`);
}

try {
	main();
} catch (error) {
	console.error(error);
}
