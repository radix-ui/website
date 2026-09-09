/**
 * Converts a rendered page (HTML) into Markdown. Extracted from the former
 * `/api/markdown` route handler so scripts/build-markdown.ts can run the same
 * conversion at build time over the static export.
 */
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeRemark from "rehype-remark";
import remarkStringify from "remark-stringify";
import remarkGfm from "remark-gfm";
import { select, selectAll } from "hast-util-select";
import type { Root, Element } from "hast";

export async function convertHtmlToMarkdown(html: string): Promise<string> {
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
		// Try to find the main content area marked with data-search-page-scope
		const mainContent = select("[data-search-page-scope]", tree) as Element | undefined;

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
		const excluded = selectAll("[data-search-exclude]", tree);
		for (const node of excluded) {
			removeNode(tree, node);
		}

		// Remove hidden category labels (e.g., "Components", "Guides")
		const hiddenLabels = selectAll("[data-search-lvl0]", tree);
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
