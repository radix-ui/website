import type { NextRequest } from "next/server";
import { format } from "oxfmt";
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeRemark from "rehype-remark";
import remarkStringify from "remark-stringify";
import remarkGfm from "remark-gfm";
import { select, selectAll } from "hast-util-select";
import type { Root, Element } from "hast";

export async function GET(
	request: NextRequest,
	{ params }: { params: Promise<{ path: string[] }> },
) {
	const { path } = await params;
	const pathSegments = getPathSegments(request, path);
	if (pathSegments.length === 0) {
		return Response.json({ error: "Invalid path" }, { status: 400 });
	}

	const pagePath = "/" + pathSegments.join("/");

	try {
		// Determine the base URL for fetching
		// In development, use the request host; in production, use the configured URL
		const protocol = request.headers.get("x-forwarded-proto") || "http";
		const host = request.headers.get("host");
		const baseUrl = `${protocol}://${host}`;

		// Fetch the rendered HTML page
		const htmlResponse = await fetch(`${baseUrl}${pagePath}`, {
			headers: {
				// Pass along cookies for any auth
				cookie: request.headers.get("cookie") || "",
			},
		});

		if (!htmlResponse.ok) {
			return Response.json({ error: "Page not found" }, { status: 404 });
		}

		const html = await htmlResponse.text();
		const markdown = await convertHtmlToMarkdown(html);
		const { code: formattedMarkdown } = await format("file.md", markdown);

		return new Response(formattedMarkdown, {
			status: 200,
			headers: {
				"Content-Type": "text/markdown; charset=utf-8",
				"X-Content-Type-Options": "nosniff",
				// Aggressive caching: 7 days browser, 30 days CDN, serve stale for 90 days while revalidating
				"Cache-Control":
					"public, max-age=604800, s-maxage=2592000, stale-while-revalidate=7776000",
			},
		});
	} catch (error) {
		console.error("Error converting to markdown:", error);
		return Response.json(
			{ error: "Failed to convert page to markdown" },
			{ status: 500 },
		);
	}
}

// Resolve the requested page path. When this route is reached via a `proxy.ts`
// rewrite (Accept: text/markdown), the catch-all params are populated from the
// rewritten URL. Fall back to parsing the request URL and stripping an optional
// `/api/markdown` prefix to stay correct in every entry path.
function getPathSegments(
	request: NextRequest,
	fromQuery: string[] | undefined,
): string[] {
	if (Array.isArray(fromQuery) && fromQuery.length > 0) {
		return fromQuery;
	}

	const pathOnly = request.nextUrl.pathname;
	const stripped = pathOnly
		.replace(/^\/+/, "")
		.replace(/^api\/markdown\/?/, "");
	return stripped ? stripped.split("/").filter(Boolean) : [];
}

async function convertHtmlToMarkdown(html: string): Promise<string> {
	const result = await unified()
		.use(rehypeParse)
		.use(extractMainContent)
		.use(cleanupHtml)
		.use(rehypeRemark)
		.use(remarkGfm)
		.use(remarkStringify, {
			bullet: "-",
			emphasis: "_",
			strong: "*",
			fence: "`",
			fences: true,
			listItemIndent: "one",
		})
		.process(html);

	return String(result);
}

/**
 * Extract the main content area from the page
 */
function extractMainContent() {
	return (tree: Root) => {
		// Try to find the main content area marked with data-algolia-page-scope
		const mainContent = select("[data-algolia-page-scope]", tree) as
			| Element
			| undefined;

		if (mainContent) {
			// Return a new root with just the main content
			return {
				type: "root" as const,
				children: [mainContent],
			};
		}

		// Fallback: return the original tree
		return tree;
	};
}

/**
 * Clean up the HTML before conversion
 * - Remove elements we don't want in the markdown
 * - Fix code block language annotations
 */
function cleanupHtml() {
	return (tree: Root) => {
		// Remove elements marked as excluded from indexing
		const excluded = selectAll("[data-algolia-exclude]", tree);
		for (const node of excluded) {
			removeNode(tree, node);
		}

		// Remove hidden category labels (e.g., "Components", "Guides")
		const hiddenLabels = selectAll("[data-algolia-lvl0]", tree);
		for (const node of hiddenLabels) {
			removeNode(tree, node);
		}

		// Remove elements marked for markdown exclusion
		const mdExcluded = selectAll("[data-md-exclude]", tree);
		for (const node of mdExcluded) {
			removeNode(tree, node);
		}

		// Remove navigation and footer elements
		const navFooterSelectors = ["nav", "footer"];
		for (const selector of navFooterSelectors) {
			const elements = selectAll(selector, tree);
			for (const node of elements) {
				removeNode(tree, node);
			}
		}

		// Remove buttons that are NOT inside tables (preserve table buttons for accessibility info)
		const buttons = selectAll("button", tree) as Element[];
		for (const button of buttons) {
			// Check if this button is inside a table
			if (!isInsideTable(tree, button)) {
				removeNode(tree, button);
			}
		}

		// Process code blocks - extract language from class
		const codeBlocks = selectAll("pre code", tree) as Element[];
		for (const code of codeBlocks) {
			if (code.properties?.className) {
				const classes = Array.isArray(code.properties.className)
					? code.properties.className
					: [code.properties.className];

				for (const cls of classes) {
					if (typeof cls === "string" && cls.startsWith("language-")) {
						const lang = cls.replace("language-", "");
						code.properties.dataLanguage = lang;
					}
				}
			}
		}

		return tree;
	};
}

/**
 * Check if an element is inside a table
 */
function isInsideTable(tree: Root | Element, target: Element): boolean {
	const tables = selectAll("table", tree) as Element[];
	for (const table of tables) {
		if (containsNode(table, target)) {
			return true;
		}
	}
	return false;
}

/**
 * Check if a node contains another node
 */
function containsNode(parent: Element, target: Element): boolean {
	if (parent === target) return true;
	if (parent.children) {
		for (const child of parent.children) {
			if (child.type === "element" && containsNode(child as Element, target)) {
				return true;
			}
		}
	}
	return false;
}

/**
 * Remove a node from the tree
 */
function removeNode(tree: Root | Element, nodeToRemove: Element): void {
	const visit = (node: Root | Element): boolean => {
		if ("children" in node && Array.isArray(node.children)) {
			const index = node.children.indexOf(nodeToRemove as any);
			if (index !== -1) {
				node.children.splice(index, 1);
				return true;
			}
			for (const child of node.children) {
				if (child.type === "element") {
					if (visit(child as Element)) {
						return true;
					}
				}
			}
		}
		return false;
	};
	visit(tree);
}
