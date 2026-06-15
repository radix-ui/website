import NextLink from "next/link";
import { Box, Flex, Link, Text, Heading } from "@radix-ui/themes";
import { getAllFrontmatter } from "@utils/mdx";
import { getMdxBySlug } from "@utils/mdx";
import { MdxContent } from "@components/mdx-content";
import { QuickNav } from "@components/quick-nav";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { baseMetadata } from "@utils/metadata";
import type { Frontmatter } from "types/frontmatter";
import type { Metadata } from "next";

interface PageProps {
	params: Promise<{ slug: string }>;
}

export async function generateMetadata({
	params,
}: PageProps): Promise<Metadata> {
	const { slug } = await params;
	const { frontmatter } = await getMdxBySlug(DOCS_BASE, slug);
	return {
		...baseMetadata,
		title: `${frontmatter.metaTitle} – Radix Themes`,
		description: frontmatter.metaDescription,
	};
}

export default async function ComponentsDoc({ params }: PageProps) {
	const { slug } = await params;
	const { frontmatter, code } = await getMdxBySlug(DOCS_BASE, slug);
	const componentName = frontmatter.metaTitle.replace(/\s+/g, "");

	return (
		<>
			<div data-search-lvl0 style={{ display: "none" }}>
				Components
			</div>
			<Heading
				as="h1"
				size="8"
				mb="2"
				style={{ scrollMarginTop: "var(--space-9)" }}
			>
				{frontmatter.metaTitle}
			</Heading>
			<Box mt="2" mb="7">
				<Text size="4" color="gray" as="p">
					{frontmatter.metaDescription}
				</Text>
				<Flex
					data-md-exclude
					direction={{ initial: "column", xs: "row" }}
					gap={{ initial: "3", xs: "5" }}
					mt="5"
				>
					<Flex asChild display="inline-flex" align="center" gap="2">
						<Link
							size="3"
							target="_blank"
							href={`https://github.com/radix-ui/themes/blob/main/packages/radix-ui-themes/src/${frontmatter.sourcePath}.tsx`}
						>
							View source
							<Box asChild style={{ color: "var(--gray-9)" }}>
								<ArrowTopRightIcon />
							</Box>
						</Link>
					</Flex>
					<Flex asChild display="inline-flex" align="center" gap="2">
						<Link
							size="3"
							target="_blank"
							href={`https://github.com/radix-ui/themes/issues/new?title=[${componentName}] Issue`}
						>
							Report an issue
							<Box asChild style={{ color: "var(--gray-9)" }}>
								<ArrowTopRightIcon />
							</Box>
						</Link>
					</Flex>

					<Flex asChild display="inline-flex" align="center" gap="2">
						<Link size="3" href={`/themes/docs/components/${slug}.md`}>
							View as Markdown
						</Link>
					</Flex>

					{hasPlaygroundExample(frontmatter.slug) && (
						<Link size="3" asChild>
							<NextLink href={`/themes/playground#${frontmatter.slug}`}>
								View in Playground
							</NextLink>
						</Link>
					)}
				</Flex>
			</Box>
			<MdxContent code={code} frontmatter={frontmatter} scope="themes" />
			<QuickNav key={frontmatter.slug} />
		</>
	);
}

function hasPlaygroundExample(slug: Frontmatter["slug"]) {
	if (
		[
			"box",
			"flex",
			"grid",
			"container",
			"section",
			"accessible-icon",
			"portal",
			"reset",
			"slot",
			"theme",
			"visually-hidden",
		].includes(slug)
	)
		return false;
	return true;
}

export const dynamicParams = false;

const DOCS_BASE = "themes/docs/components";

export function generateStaticParams() {
	const frontmatters = getAllFrontmatter(DOCS_BASE);
	return frontmatters.map((frontmatter) => ({
		slug: frontmatter.slug.replace(`${DOCS_BASE}/`, ""),
	}));
}
