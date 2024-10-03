import React from "react";
import { getMDXComponent } from "mdx-bundler/client";
import NextLink from "next/link";
import { Box, Flex, Link, Text, Heading } from "@radix-ui/themes";
import { TitleAndMetaTags } from "@components/TitleAndMetaTags";
import { MDXProvider } from "@components/MDXComponents";
import { ThemesMDXComponents } from "@components/ThemesMDXComponents";
import { getAllFrontmatter, getMdxBySlug } from "@utils/mdx";
import { QuickNav } from "@components/QuickNav";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

import type { Frontmatter } from "types/frontmatter";
import { GetStaticPropsContext } from "next";

type Doc = {
	frontmatter: Frontmatter;
	code: string;
};

export default function GuidesDoc({ frontmatter, code }: Doc) {
	const Component = React.useMemo(() => getMDXComponent(code), [code]);
	const componentName = frontmatter.metaTitle.replace(/\s+/g, "");

	return (
		<>
			<div data-algolia-lvl0 style={{ display: "none" }}>
				Components
			</div>

			<TitleAndMetaTags
				title={`${frontmatter.metaTitle} – Radix Themes`}
				description={frontmatter.metaDescription}
				image="themes.png"
			/>

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

					{hasPlaygroundExample(frontmatter.slug) && (
						<NextLink
							passHref
							legacyBehavior
							href={`/themes/playground#${frontmatter.slug}`}
						>
							<Link size="3">View in Playground</Link>
						</NextLink>
					)}
				</Flex>
			</Box>

			<MDXProvider frontmatter={frontmatter}>
				<Component components={ThemesMDXComponents as any} />
			</MDXProvider>

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

export async function getStaticPaths() {
	const frontmatters = getAllFrontmatter("themes/docs/components");

	return {
		paths: frontmatters.map((frontmatter) => ({
			params: { slug: frontmatter.slug.replace("themes/docs/components/", "") },
		})),
		fallback: false,
	};
}

export async function getStaticProps(
	context: GetStaticPropsContext<{ slug: string }>,
) {
	const { frontmatter, code } = await getMdxBySlug(
		"themes/docs/components/",
		context.params!.slug,
	);
	return { props: { frontmatter, code } };
}
