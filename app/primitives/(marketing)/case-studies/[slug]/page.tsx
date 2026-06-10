import { BoxLink } from "@components/BoxLink";
import { Footer } from "@components/Footer";
import { MdxContent } from "@components/MdxContent";
import { PrimitivesHeader } from "@components/PrimitivesHeader";
import { PrimitivesMobileMenu } from "@components/PrimitivesMobileMenu";
import {
	CaseStudyLogo,
	CaseStudyLogoVariant,
} from "@components/marketing/CaseStudyLogo";
import { MarketingCaption } from "@components/marketing/MarketingCaption";
import { getAllFrontmatter } from "@utils/mdx";
import { getMdxBySlug } from "@utils/mdx";
import { AccessibleIcon } from "radix-ui";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import {
	Avatar,
	Box,
	Container,
	Flex,
	Grid,
	Heading,
	Link,
	Section,
	Separator,
	Text,
} from "@radix-ui/themes";
import NextLink from "next/link";
import { baseMetadata } from "@utils/metadata";
import type { Metadata, Route } from "next";
import type { Frontmatter } from "types/frontmatter";

interface Doc {
	frontmatter: Frontmatter;
	code: string;
}

interface PageProps {
	params: Promise<{ slug: string }>;
}

export async function generateMetadata({
	params,
}: PageProps): Promise<Metadata> {
	const { slug } = await params;
	const { frontmatter } = await getMdx(slug);
	return {
		...baseMetadata,
		title: `${frontmatter.metaTitle} – Case studies – Radix Primitives`,
		description: frontmatter.metaDescription,
	};
}

export default async function CaseStudy({ params }: PageProps) {
	const { slug } = await params;
	const { frontmatter, code } = await getMdx(slug);

	const frontmatters = getAllFrontmatter(DOCS_BASE);
	const thisIndex = frontmatters.findIndex((data) =>
		data.slug.includes(frontmatter.slug),
	);
	const nextIndex = thisIndex + 1 < frontmatters.length ? thisIndex + 1 : 0;
	const nextCaseStudy = frontmatters[nextIndex];

	const extendedFrontmatter = {
		...frontmatter,
		nextCaseStudyTitle: nextCaseStudy.metaTitle,
		nextCaseStudySlug: nextCaseStudy.slug,
	} as typeof frontmatter & {
		companyAbout: string;
		companyUrl: string;
		companyFounded: string;
		companyLogoVariant: CaseStudyLogoVariant;
		author: string;
		authorAvatarUrl: string;
		authorPosition: string;
		nextCaseStudyTitle: string;
		nextCaseStudySlug: string;
	};

	return (
		<>
			<PrimitivesHeader />
			<PrimitivesMobileMenu />
			<Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
				<Section size={{ initial: "2", md: "4" }}>
					<Grid
						columns={{ md: "1fr 330px", lg: "1fr 380px" }}
						gap={{ md: "9" }}
					>
						<Box>
							<MarketingCaption mb="1">Case study</MarketingCaption>
							<MdxContent
								code={code}
								frontmatter={extendedFrontmatter}
								scope="primitives"
							/>
							<Flex align="center" gap="3" mt="8">
								<Avatar
									size="5"
									src={extendedFrontmatter.authorAvatarUrl}
									aria-label={extendedFrontmatter.author}
									fallback={null as any}
									radius="full"
								/>
								<Box id="author">
									<Text as="p" weight="bold">
										{extendedFrontmatter.author}
									</Text>
									<Text as="p">{extendedFrontmatter.authorPosition}</Text>
								</Box>
							</Flex>
							<Separator size="3" mt={{ initial: "7", md: "9" }} />
						</Box>

						<Box position="relative" pt="7" mt={{ md: "9" }}>
							<Box position="sticky" style={{ top: "var(--space-9)", left: 0 }}>
								<Box mb="6">
									<BoxLink
										target="_blank"
										href={`https://${extendedFrontmatter.companyUrl}`}
										style={{ display: "inline-block", maxWidth: "380px" }}
									>
										<AccessibleIcon.Root
											label={`${extendedFrontmatter.metaTitle} homepage`}
										>
											<CaseStudyLogo
												variant={extendedFrontmatter.companyLogoVariant}
											/>
										</AccessibleIcon.Root>
									</BoxLink>
								</Box>
								<Box mb="5">
									<Heading as="h4" size="3">
										About
									</Heading>
									<Text as="p" mb="1">
										{extendedFrontmatter.companyAbout}
									</Text>

									<Flex align="center" gap="2" asChild>
										<Link
											target="_blank"
											href={`https://${extendedFrontmatter.companyUrl}`}
											highContrast
											color="gray"
										>
											{extendedFrontmatter.companyUrl}
											<ArrowTopRightIcon
												style={{ marginLeft: -1, marginBottom: -2 }}
											/>
										</Link>
									</Flex>
								</Box>
								<Box mb="5">
									<Heading size="3" as="h4">
										Founded
									</Heading>
									<Text as="p">{extendedFrontmatter.companyFounded}</Text>
								</Box>
								<Separator size="2" my="7" />
								<Box mb="5">
									<Text weight="bold" as="p">
										Next case study
									</Text>

									<Link highContrast color="gray" asChild>
										<NextLink
											href={`/${extendedFrontmatter.nextCaseStudySlug}` as Route}
										>
											{extendedFrontmatter.nextCaseStudyTitle}
										</NextLink>
									</Link>
								</Box>
							</Box>
						</Box>
					</Grid>
				</Section>

				<Footer />
			</Container>
		</>
	);
}

export const dynamicParams = false;

const DOCS_BASE = "primitives/case-studies";

export function generateStaticParams() {
	const frontmatters = getAllFrontmatter(DOCS_BASE);
	return frontmatters.map((frontmatter) => ({
		slug: frontmatter.slug.replace(`${DOCS_BASE}/`, ""),
	}));
}

async function getMdx(slug: string) {
	const { frontmatter, code } = await getMdxBySlug(DOCS_BASE, slug);
	return { frontmatter, code } satisfies Doc;
}
