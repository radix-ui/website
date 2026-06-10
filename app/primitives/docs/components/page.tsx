import NextLink from "next/link";
import { Heading, Text, Box, Flex, Link } from "@radix-ui/themes";
import { getAllFrontmatter } from "@utils/mdx";
import { baseMetadata } from "@utils/metadata";
import type { Metadata, Route } from "next";

const description =
	"Unstyled, accessible UI primitives for building high-quality design systems and web apps.";

export const metadata: Metadata = {
	...baseMetadata,
	title: "Components – Radix Primitives",
	description,
};

export default function ComponentsIndex() {
	const components = getAllFrontmatter("primitives/docs/components")
		.filter((fm) => !fm.slug.endsWith("/index"))
		.map((fm) => ({
			slug: fm.slug,
			title: fm.metaTitle,
			description: fm.metaDescription,
		}))
		.sort((a, b) => a.title.localeCompare(b.title));

	return (
		<>
			<div data-algolia-lvl0 style={{ display: "none" }}>
				Components
			</div>
			<Heading as="h1" size="8" mb="2">
				Components
			</Heading>
			<Box mb="7">
				<Text as="p" size="4" color="gray">
					{description}
				</Text>
			</Box>
			<Flex direction="column" gap="4" asChild p="0">
				<ul>
					{components.map((component) => (
						<Box key={component.slug} asChild>
							<li>
								<Link size="3" weight="medium" asChild>
									<NextLink href={`/${component.slug}` as Route}>
										{component.title}
									</NextLink>
								</Link>
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
