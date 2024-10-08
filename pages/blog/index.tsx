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
import { MobileMenuProvider } from "@components/MobileMenu";
import { BlogHeader } from "@components/BlogHeader";
import { BlogMobileMenu } from "@components/BlogMobileMenu";
import { getAllFrontmatter } from "@utils/mdx";
import NextLink from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { CommunitySection } from "@components/marketing/CommunitySection";
import { Footer } from "@components/Footer";
import { Frontmatter } from "types/frontmatter";
import { TitleAndMetaTags } from "@components/TitleAndMetaTags";

type Blog = {
	frontmatters: Frontmatter[];
};

const description =
	"Stay in the loop with the latest Radix news, straight from the team.";

export default function RadixBlog({ frontmatters }: Blog) {
	return (
		<>
			<TitleAndMetaTags
				title="Blog – Radix UI"
				description={description}
				image="themes.png"
			/>

			<MobileMenuProvider>
				<BlogHeader />
				<BlogMobileMenu />

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
										<NextLink href={`/${slug}`}>
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
			</MobileMenuProvider>
		</>
	);
}

export async function getStaticProps() {
	const frontmatters = getAllFrontmatter("blog");

	return { props: { frontmatters } };
}
