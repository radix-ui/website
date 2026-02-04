import * as React from "react";
import NextLink from "next/link";
import { Heading, Text, Box, Flex, Link } from "@radix-ui/themes";
import { TitleAndMetaTags } from "@components/TitleAndMetaTags";
import { getAllFrontmatter } from "@utils/mdx";
import type { Frontmatter } from "types/frontmatter";

type ComponentItem = {
	slug: string;
	title: string;
	description: string;
};

type Props = {
	components: ComponentItem[];
};

export default function ComponentsIndex({ components }: Props) {
	return (
		<>
			<div data-algolia-lvl0 style={{ display: "none" }}>
				Components
			</div>

			<TitleAndMetaTags
				title="Components – Radix Themes"
				description="A comprehensive library of React components for building beautiful, accessible user interfaces."
				image="themes.png"
			/>

			<Heading as="h1" size="8" mb="2">
				Components
			</Heading>

			<Box mb="7">
				<Text as="p" size="4" color="gray">
					A comprehensive library of React components for building beautiful,
					accessible user interfaces.
				</Text>
			</Box>

			<Flex direction="column" gap="4" asChild p="0">
				<ul>
					{components.map((component) => (
						<Box key={component.slug} asChild>
							<li>
								<NextLink href={`/${component.slug}`} passHref legacyBehavior>
									<Link size="3" weight="medium">
										{component.title}
									</Link>
								</NextLink>
								<Text as="p" size="2" color="gray">
									{component.description}
								</Text>
							</li>
						</Box>
					))}
				</ul>
			</Flex>
		</>
	);
}

export async function getStaticProps() {
	const frontmatters = getAllFrontmatter("themes/docs/components");

	const components = frontmatters
		.filter((fm) => !fm.slug.endsWith("/index"))
		.map((fm) => ({
			slug: fm.slug,
			title: fm.metaTitle,
			description: fm.metaDescription,
		}))
		.sort((a, b) => a.title.localeCompare(b.title));

	return { props: { components } };
}
