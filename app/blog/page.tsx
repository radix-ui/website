import * as React from "react";
import {
	Box,
	Card,
	Container,
	Flex,
	Grid,
	Heading,
	Inset,
	Link,
	Section,
	Separator,
	Text,
} from "@radix-ui/themes";
import { getAllFrontmatter } from "@utils/mdx";
import NextLink from "next/link";
import { CommunitySection } from "@components/marketing/CommunitySection";
import { Footer } from "@components/Footer";
import { baseMetadata } from "@utils/metadata";
import type { Metadata, Route } from "next";

const description =
	"Stay in the loop with the latest Radix news, straight from the team.";

export const metadata: Metadata = {
	...baseMetadata,
	title: "Blog – Radix UI",
	description,
	openGraph: {
		images: ["https://radix-ui.com/social/themes.png"],
	},
};

export default function RadixBlog() {
	const frontmatters = getAllFrontmatter("blog");

	return (
		<>
			<Section size={{ initial: "2", md: "4" }}>
				<Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
					<Box mb="7">
						<Heading size="8" mb="2">
							Latest updates
						</Heading>

						<Text size="4" color="gray" as="p">
							{description}
						</Text>
					</Box>
					<Flex direction="column">
						{frontmatters.map(
							({
								metaTitle,
								metaDescription,
								slug,
								metaImage,
								publishedAt,
							}) => (
								<Card size="3" variant="classic" asChild key={slug}>
									<NextLink href={`/${slug}` as Route}>
										<Grid columns={{ initial: "1", sm: "2" }} width="100%">
											<Inset
												clip="padding-box"
												side={{ initial: "top", sm: "left" }}
												pb={{ initial: "current", sm: "0" }}
												pr={{ initial: "0", sm: "current" }}
											>
												<img
													src={metaImage}
													alt={metaTitle}
													style={{
														display: "block",
														objectFit: "cover",
														objectPosition: "left top",
														height: "100%",
														width: "100%",
														backgroundColor: "var(--gray-3)",
														boxShadow: "0 0 0 1px var(--gray-3)",
													}}
												/>
											</Inset>
											<Flex justify="between" direction="column">
												<Box>
													<Text
														color="gray"
														mb="1"
														as="p"
														size="2"
														wrap="balance"
													>
														{publishedAt}
													</Text>
													<Heading size="6" mb="3" wrap="balance">
														{metaTitle}
													</Heading>
													<Text as="p" mb="5" color="gray">
														{metaDescription}
													</Text>
												</Box>
												<Link asChild>
													<Box>Read more →</Box>
												</Link>
											</Flex>
										</Grid>
									</NextLink>
								</Card>
							),
						)}
					</Flex>
				</Container>
			</Section>

			<Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
				<Separator size="2" />
			</Container>
			<Section size={{ initial: "2", md: "4" }}>
				<Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
					<CommunitySection />
				</Container>
			</Section>
			<Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
				<Separator size="2" />
				<Section size={{ initial: "2", md: "4" }} pb="0">
					<Footer />
				</Section>
			</Container>
		</>
	);
}
