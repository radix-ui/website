import { getAllFrontmatter } from "@utils/mdx";
import { getMdxBySlug } from "@utils/mdx";
import { MdxContent } from "@components/mdx-content";
import { QuickNav } from "@components/quick-nav";
import { baseMetadata } from "@utils/metadata";
import type { Metadata } from "next";

interface PageProps {
	params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const { slug } = await params;
	const { frontmatter } = await getMdxBySlug(DOCS_BASE, slug);
	return {
		...baseMetadata,
		title: `${frontmatter.metaTitle} – Radix Colors`,
		description: frontmatter.metaDescription,
	};
}

export default async function ColorsPaletteCompositionDoc({ params }: PageProps) {
	const { slug } = await params;
	const { frontmatter, code } = await getMdxBySlug(DOCS_BASE, slug);

	return (
		<>
			<MdxContent code={code} frontmatter={frontmatter} scope="colors-palette" />

			<QuickNav key={frontmatter.slug} />
		</>
	);
}

export const dynamicParams = false;

const DOCS_BASE = "colors/docs/palette-composition";

export function generateStaticParams() {
	return getAllFrontmatter(DOCS_BASE).map((frontmatter) => ({
		slug: frontmatter.slug.replace(`${DOCS_BASE}/`, ""),
	}));
}
