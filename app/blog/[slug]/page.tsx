import { getAllFrontmatter } from "@utils/mdx";
import { getMdxBySlug } from "@utils/mdx";
import { MdxContent } from "@components/mdx-content";
import { Box, Flex, Text } from "@radix-ui/themes";
import { EditPageLink } from "@components/edit-page-link";
import { DocsPageWrapper } from "@components/docs-page-wrapper";
import { QuickNav } from "@components/quick-nav";
import { baseMetadata } from "@utils/metadata";
import type { Metadata } from "next";

interface PageProps {
	params: Promise<{ slug: string }>;
}

export async function generateMetadata({
	params,
}: PageProps): Promise<Metadata> {
	const { slug } = await params;
	const { frontmatter } = await getMdxBySlug(BLOG_BASE, slug);
	return {
		...baseMetadata,
		title: `${frontmatter.metaTitle} – Radix UI`,
		description: frontmatter.metaDescription,
		openGraph: frontmatter.metaImage
			? { images: [frontmatter.metaImage] }
			: undefined,
	};
}

export default async function BlogPost({ params }: PageProps) {
	const { slug } = await params;
	const { frontmatter, code } = await getMdxBySlug(BLOG_BASE, slug);
	return (
		<>
			<Flex>
				<Box width="250px" />
				<DocsPageWrapper>
					<Box data-search-page-scope>
						<Text color="gray" size="3" mb="3" as="div" trim="start">
							{frontmatter.publishedAt}
						</Text>

						<MdxContent code={code} frontmatter={frontmatter} scope="themes" />
					</Box>

					<EditPageLink />
				</DocsPageWrapper>
			</Flex>

			<QuickNav key={frontmatter.slug} title="In this article" />
		</>
	);
}

export const dynamicParams = false;

const BLOG_BASE = "blog";

export function generateStaticParams() {
	const frontmatters = getAllFrontmatter(BLOG_BASE);
	return frontmatters.map((frontmatter) => ({
		slug: frontmatter.slug.replace("blog/", ""),
	}));
}
