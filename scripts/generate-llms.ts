import fs from "fs";
import path from "path";
import { globSync } from "glob";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMdx from "remark-mdx";
import remarkStringify from "remark-stringify";
import { visit } from "unist-util-visit";
import type { Node, Parent } from "unist";

const ROOT_PATH = process.cwd();
const DATA_PATH = path.join(ROOT_PATH, "data");
const PUBLIC_PATH = path.join(ROOT_PATH, "public");
const BASE_URL = "https://www.radix-ui.com";

// MDX node types
interface MdxJsxElement extends Node {
	type: "mdxJsxFlowElement" | "mdxJsxTextElement";
	name: string | null;
	attributes: Array<{
		type: string;
		name: string;
		value: unknown;
	}>;
	children: Node[];
}

// Remove MDX/JSX elements from AST, keeping only markdown content
function removeMdxElements() {
	return (tree: Node) => {
		visit(tree, (node, index, parent) => {
			if (!parent || index === undefined) return;

			// Remove MDX JSX elements (components like <PropsTable />, <Description>, etc.)
			if (node.type === "mdxJsxFlowElement" || node.type === "mdxJsxTextElement") {
				const mdxNode = node as MdxJsxElement;

				// Keep content from <Description> tags
				if (mdxNode.name === "Description" && mdxNode.children.length > 0) {
					(parent as Parent).children.splice(index, 1, ...mdxNode.children);
					return index;
				}

				// Remove all other JSX elements
				(parent as Parent).children.splice(index, 1);
				return index;
			}

			// Remove MDX ESM (import/export statements)
			if (node.type === "mdxjsEsm") {
				(parent as Parent).children.splice(index, 1);
				return index;
			}

			// Remove MDX expressions like {variable}
			if (node.type === "mdxFlowExpression" || node.type === "mdxTextExpression") {
				(parent as Parent).children.splice(index, 1);
				return index;
			}
		});
	};
}

// Process MDX content to clean markdown
async function mdxToMarkdown(content: string): Promise<string> {
	const processor = unified()
		.use(remarkParse)
		.use(remarkMdx)
		.use(removeMdxElements)
		.use(remarkStringify, {
			bullet: "-",
			emphasis: "_",
			strong: "*",
			fence: "`",
		});

	const result = await processor.process(content);
	// Remove double underscores used for highlighting in source files
	// e.g., __className__ -> className, __--radix-popover-trigger-width__ -> --radix-popover-trigger-width
	const cleaned = String(result).replace(/__([^_\s]+)__/g, "$1");
	return cleaned;
}

// Get file metadata from frontmatter
function getFileInfo(filePath: string): { title: string; description: string; slug: string } {
	const source = fs.readFileSync(filePath, "utf8");
	const { data } = matter(source);
	const slug = filePath.replace(`${DATA_PATH}/`, "").replace(".mdx", "");
	return {
		title: data.metaTitle || data.name || path.basename(filePath, ".mdx"),
		description: data.metaDescription || "",
		slug,
	};
}

// Process a single MDX file
async function processMdxFile(filePath: string): Promise<string> {
	const source = fs.readFileSync(filePath, "utf8");
	const { data, content } = matter(source);

	const markdown = await mdxToMarkdown(content);
	const title = data.metaTitle || data.name || path.basename(filePath, ".mdx");
	const description = data.metaDescription || "";

	let output = `## ${title}\n\n`;
	if (description) {
		output += `${description}\n\n`;
	}
	output += markdown.trim();

	return output;
}

// Process all files in a directory
async function processDirectory(dirPath: string, sectionTitle: string): Promise<string> {
	const fullPath = path.join(DATA_PATH, dirPath);
	const files = globSync(`${fullPath}/*.mdx`).sort();

	let output = `# ${sectionTitle}\n\n`;

	for (const file of files) {
		const fileName = path.basename(file, ".mdx");
		console.log(`  Processing ${fileName}...`);
		try {
			const content = await processMdxFile(file);
			output += content + "\n\n---\n\n";
		} catch (e) {
			console.error(`  Error processing ${fileName}:`, e);
		}
	}

	return output;
}

// Generate documentation for each product
async function generatePrimitives(): Promise<string> {
	console.log("\n=== Generating Radix Primitives ===\n");

	let output = `# Radix Primitives - Complete Documentation

> Radix Primitives is an open-source React component library for building high-quality, accessible design systems and web applications. Components are unstyled, accessible, and customizable.

`;

	output += await processDirectory("primitives/docs/overview", "Overview");
	output += await processDirectory("primitives/docs/guides", "Guides");
	output += await processDirectory("primitives/docs/components", "Components");
	output += await processDirectory("primitives/docs/utilities", "Utilities");

	return output;
}

async function generateThemes(): Promise<string> {
	console.log("\n=== Generating Radix Themes ===\n");

	let output = `# Radix Themes - Complete Documentation

> Radix Themes is a styled component library built on Radix Primitives with a beautiful default theme.

`;

	output += await processDirectory("themes/docs/overview", "Overview");
	output += await processDirectory("themes/docs/theme", "Theme Configuration");
	output += await processDirectory("themes/docs/components", "Components");

	return output;
}

async function generateColors(): Promise<string> {
	console.log("\n=== Generating Radix Colors ===\n");

	let output = `# Radix Colors - Complete Documentation

> Radix Colors is a gorgeous, accessible color system for designing beautiful websites and apps.

`;

	output += await processDirectory("colors/docs/overview", "Overview");
	output += await processDirectory("colors/docs/palette-composition", "Palette Composition");

	return output;
}

// Generate llms.txt index
function generateIndex(): string {
	console.log("\n=== Generating Index ===\n");

	function formatLink(filePath: string): string {
		const info = getFileInfo(filePath);
		const desc = info.description ? `: ${info.description}` : "";
		return `- [${info.title}](${BASE_URL}/${info.slug})${desc}`;
	}

	function processDir(dirPath: string): string {
		const files = globSync(`${DATA_PATH}/${dirPath}/*.mdx`).sort();
		return files.map(formatLink).join("\n");
	}

	return `# Radix UI

> Radix UI is an open-source React component library for building high-quality, accessible design systems and web apps.

For complete documentation in a single file, see:
- [Full Documentation](${BASE_URL}/llms-full.txt): All Radix UI documentation combined
- [Primitives Documentation](${BASE_URL}/llms-primitives.txt): Complete Primitives docs
- [Themes Documentation](${BASE_URL}/llms-themes.txt): Complete Themes docs
- [Colors Documentation](${BASE_URL}/llms-colors.txt): Complete Colors docs

## Radix Primitives

Unstyled, accessible React components for building high-quality design systems and web applications.

### Overview
${processDir("primitives/docs/overview")}

### Guides
${processDir("primitives/docs/guides")}

### Components
${processDir("primitives/docs/components")}

### Utilities
${processDir("primitives/docs/utilities")}

## Radix Themes

A styled component library built on Radix Primitives with a beautiful default theme.

### Overview
${processDir("themes/docs/overview")}

### Theme Configuration
${processDir("themes/docs/theme")}

### Components
${processDir("themes/docs/components")}

## Radix Colors

A gorgeous, accessible color system for designing beautiful websites and apps.

### Overview
${processDir("colors/docs/overview")}

### Palette Composition
${processDir("colors/docs/palette-composition")}
`;
}

// Write output file
function writeOutput(filename: string, content: string) {
	const outputPath = path.join(PUBLIC_PATH, filename);
	fs.writeFileSync(outputPath, content.trim());
	const size = (fs.statSync(outputPath).size / 1024).toFixed(2);
	console.log(`Generated: ${outputPath} (${size} KB)`);
}

// Main
async function main() {
	console.log("Radix UI LLMs Documentation Generator\n");

	const primitives = await generatePrimitives();
	writeOutput("llms-primitives.txt", primitives);

	const themes = await generateThemes();
	writeOutput("llms-themes.txt", themes);

	const colors = await generateColors();
	writeOutput("llms-colors.txt", colors);

	// Combined file
	console.log("\n=== Generating Combined ===");
	const combined = `# Radix UI - Complete Documentation

> Radix UI is an open-source React component library for building high-quality, accessible design systems and web apps.

---

${primitives}

---

${themes}

---

${colors}
`;
	writeOutput("llms-full.txt", combined);

	// Index
	const index = generateIndex();
	writeOutput("llms.txt", index);

	console.log("\nDone!");
}

main().catch(console.error);
