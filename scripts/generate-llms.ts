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
const LLMS_OUTPUT_PATH = path.join(PUBLIC_PATH, "llms-output");
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
function getFileInfo(filePath: string): { title: string; description: string; slug: string; filename: string } {
	const source = fs.readFileSync(filePath, "utf8");
	const { data } = matter(source);
	const slug = filePath.replace(`${DATA_PATH}/`, "").replace(".mdx", "");
	const filename = path.basename(filePath, ".mdx");
	return {
		title: data.metaTitle || data.name || filename,
		description: data.metaDescription || "",
		slug,
		filename,
	};
}

// Process a single MDX file
async function processMdxFile(filePath: string): Promise<string> {
	const source = fs.readFileSync(filePath, "utf8");
	const { data, content } = matter(source);

	const markdown = await mdxToMarkdown(content);
	const title = data.metaTitle || data.name || path.basename(filePath, ".mdx");
	const description = data.metaDescription || "";

	let output = `# ${title}\n\n`;
	if (description) {
		output += `${description}\n\n`;
	}
	output += markdown.trim();

	return output;
}

// Process all files in a directory and write individual files
async function processDirectory(dirPath: string, outputSubDir: string): Promise<void> {
	const fullPath = path.join(DATA_PATH, dirPath);
	const files = globSync(`${fullPath}/*.mdx`).sort();

	for (const file of files) {
		const fileName = path.basename(file, ".mdx");
		console.log(`  Processing ${fileName}...`);
		try {
			const content = await processMdxFile(file);
			const outputPath = path.join(outputSubDir, `${fileName}.md`);
			writeOutput(outputPath, content, true);
		} catch (e) {
			console.error(`  Error processing ${fileName}:`, e);
		}
	}
}

// Generate documentation for each product
async function generatePrimitives(): Promise<void> {
	console.log("\n=== Generating Radix Primitives ===\n");

	await processDirectory("primitives/docs/overview", "primitives");
	await processDirectory("primitives/docs/guides", "primitives");
	await processDirectory("primitives/docs/components", "primitives");
	await processDirectory("primitives/docs/utilities", "primitives");
}

async function generateThemes(): Promise<void> {
	console.log("\n=== Generating Radix Themes ===\n");

	await processDirectory("themes/docs/overview", "themes");
	await processDirectory("themes/docs/theme", "themes");
	await processDirectory("themes/docs/components", "themes");
}

async function generateColors(): Promise<void> {
	console.log("\n=== Generating Radix Colors ===\n");

	await processDirectory("colors/docs/overview", "colors");
	await processDirectory("colors/docs/palette-composition", "colors");
}

// Generate llms.txt index
function generateIndex(): string {
	console.log("\n=== Generating Index ===\n");

	// Convert title to anchor-friendly format
	function titleToAnchor(title: string): string {
		return title
			.toLowerCase()
			.replace(/[^\w\s-]/g, "") // Remove special chars except spaces and hyphens
			.replace(/\s+/g, "-") // Replace spaces with hyphens
			.replace(/-+/g, "-"); // Replace multiple hyphens with single
	}

	function formatLink(filePath: string, outputDir: string): string {
		const info = getFileInfo(filePath);
		const desc = info.description ? `: ${info.description}` : "";
		return `- [${info.title}](/llms-output/${outputDir}/${info.filename}.md)${desc}`;
	}

	function processDir(dirPath: string, outputDir: string): string {
		const files = globSync(`${DATA_PATH}/${dirPath}/*.mdx`).sort();
		return files.map((file) => formatLink(file, outputDir)).join("\n");
	}

	return `# Radix UI

> Radix UI is an open-source React component library for building high-quality, accessible design systems and web apps.

## Radix Primitives

Unstyled, accessible React components for building high-quality design systems and web applications.

### Overview
${processDir("primitives/docs/overview", "primitives")}

### Guides
${processDir("primitives/docs/guides", "primitives")}

### Components
${processDir("primitives/docs/components", "primitives")}

### Utilities
${processDir("primitives/docs/utilities", "primitives")}

## Radix Themes

A styled component library built on Radix Primitives with a beautiful default theme.

### Overview
${processDir("themes/docs/overview", "themes")}

### Theme Configuration
${processDir("themes/docs/theme", "themes")}

### Components
${processDir("themes/docs/components", "themes")}

## Radix Colors

A gorgeous, accessible color system for designing beautiful websites and apps.

### Overview
${processDir("colors/docs/overview", "colors")}

### Palette Composition
${processDir("colors/docs/palette-composition", "colors")}
`;
}

// Write output file
function writeOutput(filename: string, content: string, useOutputDir = false) {
	const outputPath = useOutputDir
		? path.join(LLMS_OUTPUT_PATH, filename)
		: path.join(PUBLIC_PATH, filename);

	// Ensure directory exists
	const dir = path.dirname(outputPath);
	if (!fs.existsSync(dir)) {
		fs.mkdirSync(dir, { recursive: true });
	}

	fs.writeFileSync(outputPath, content.trim());
	const size = (fs.statSync(outputPath).size / 1024).toFixed(2);
	console.log(`Generated: ${outputPath} (${size} KB)`);
}

// Main
async function main() {
	console.log("Radix UI LLMs Documentation Generator\n");

	await generatePrimitives();
	await generateThemes();
	await generateColors();

	// Index
	console.log("\n=== Generating Index ===\n");
	const index = generateIndex();
	writeOutput("llms.txt", index);

	console.log("\nDone!");
}

main().catch(console.error);
