import { cache } from "react";
import fs from "fs";
import path from "path";
import { globSync } from "glob";
import matter from "gray-matter";
import compareVersions from "compare-versions";
import { bundleMDX } from "mdx-bundler";
import remarkSlug from "remark-slug";
import rehypeHeroCodeBlock from "@utils/rehype-hero-code-block";
import rehypeMetaAttribute from "@utils/rehype-meta-attribute.mjs";
import rehypeHighlightCode from "@utils/rehype-highlight-code.mjs";

import type { Frontmatter } from "types/frontmatter";

const ROOT_PATH = process.cwd();
export const DATA_PATH = path.join(ROOT_PATH, "data");

const toPosix = (p: string) => p.split(path.sep).join("/");

// the front matter and content of all mdx files based on `docsPaths`
export const getAllFrontmatter = (fromPath: string) => {
	const PATH = path.join(DATA_PATH, fromPath);
	const paths = globSync(`${toPosix(PATH)}/**/*.mdx`);

	return paths
		.map((filePath) => {
			const source = fs.readFileSync(path.join(filePath), "utf8");
			const { data, content } = matter(source);

			return {
				...(data as Frontmatter),
				slug: toPosix(path.relative(DATA_PATH, filePath)).replace(/\.mdx$/, ""),
			} as Frontmatter;
		})
		.sort(
			(a, b) =>
				Number(new Date(b.publishedAt!)) - Number(new Date(a.publishedAt!)),
		);
};

export const getMdxBySlug = cache(async (basePath: string, slug: string) => {
	const source = fs.readFileSync(
		path.join(DATA_PATH, basePath, `${slug}.mdx`),
		"utf8",
	);
	const { frontmatter, code } = await bundleMDX({
		source: source,
		mdxOptions(options, frontmatter) {
			options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkSlug];
			options.rehypePlugins = [
				...(options.rehypePlugins ?? []),
				rehypeHeroCodeBlock,
				rehypeMetaAttribute,
				rehypeHighlightCode,
			];

			return options;
		},
	});

	return {
		frontmatter: {
			...(frontmatter as Frontmatter),
			slug,
		} as Frontmatter,
		code,
	};
});

export function getAllVersionsFromPath(fromPath: string) {
	const PATH = path.join(DATA_PATH, fromPath);
	if (!fs.existsSync(PATH)) return [];
	return fs
		.readdirSync(PATH)
		.map((fileName) => fileName.replace(".mdx", ""))
		.sort(compareVersions)
		.reverse();
}
