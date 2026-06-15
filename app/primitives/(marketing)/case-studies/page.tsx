import { Footer } from "@components/footer";
import { PrimitivesHeader } from "@components/primitives-header";
import { PrimitivesMobileMenu } from "@components/primitives-mobile-menu";
import { CaseStudyLogo } from "@components/marketing/case-study-logo";
import { LogoLink } from "@components/marketing/logo-link";
import { AccessibleIcon } from "radix-ui";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import {
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
import { Metadata } from "next";

export const metadata: Metadata = {
	...baseMetadata,
	title: "Case studies – Radix Primitives",
	description:
		"An open-source React component library for building high-quality, accessible design systems and web apps.",
};

export default function CaseStudy() {
	return (
		<>
			<PrimitivesMobileMenu />
			<PrimitivesHeader />
			<Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
				<Section size={{ initial: "2", md: "4" }}>
					<Flex direction="column" align="center" mb="5">
						<Heading size="8" mb="2" align="center">
							Case studies
						</Heading>
						<Text align="center" size="4" mb="3" as="p" style={{ maxWidth: 480 }} color="gray">
							Learn how teams behind everyone’s favorite products use Radix to save time, boost
							quality, and set the bar for accessibility.
						</Text>
					</Flex>
					<Grid
						gap="1px"
						align="center"
						columns={{ initial: "1", sm: "2", md: "3" }}
						mb="8"
						style={{ placeItems: "stretch", gridAutoRows: "200px" }}
					>
						<LogoLink variant="box" asChild>
							<NextLink href="/primitives/case-studies/acid-tango">
								<AccessibleIcon.Root label="Acid Tango case study">
									<Flex justify="center" height="100%">
										<CaseStudyLogo variant="Acid Tango" />
									</Flex>
								</AccessibleIcon.Root>
							</NextLink>
						</LogoLink>
						<LogoLink variant="box" asChild>
							<NextLink href="/primitives/case-studies/atom-learning">
								<AccessibleIcon.Root label="Atom Learning case study">
									<Flex justify="center" height="100%">
										<CaseStudyLogo variant="Atom Learning" />
									</Flex>
								</AccessibleIcon.Root>
							</NextLink>
						</LogoLink>
						<LogoLink variant="box" asChild>
							<NextLink href="/primitives/case-studies/basedash">
								<AccessibleIcon.Root label="Basedash case study">
									<Flex justify="center" height="100%">
										<CaseStudyLogo variant="Basedash" />
									</Flex>
								</AccessibleIcon.Root>
							</NextLink>
						</LogoLink>
						<LogoLink variant="box" asChild>
							<NextLink href="/primitives/case-studies/basement-studio">
								<AccessibleIcon.Root label="basement.studio case study">
									<Flex justify="center" height="100%">
										<CaseStudyLogo variant="basement.studio" />
									</Flex>
								</AccessibleIcon.Root>
							</NextLink>
						</LogoLink>
						<LogoLink variant="box" asChild>
							<NextLink href="/primitives/case-studies/codesandbox">
								<AccessibleIcon.Root label="CodeSandbox case study">
									<Flex justify="center" height="100%">
										<CaseStudyLogo variant="CodeSandbox" />
									</Flex>
								</AccessibleIcon.Root>
							</NextLink>
						</LogoLink>
						<LogoLink variant="box" asChild>
							<NextLink href="/primitives/case-studies/composer">
								<AccessibleIcon.Root label="Composer case study">
									<Flex justify="center" height="100%">
										<CaseStudyLogo variant="Composer" />
									</Flex>
								</AccessibleIcon.Root>
							</NextLink>
						</LogoLink>
						<LogoLink variant="box" asChild>
							<NextLink href="/primitives/case-studies/compound">
								<AccessibleIcon.Root label="Compound case study">
									<Flex justify="center" height="100%">
										<CaseStudyLogo variant="Compound" />
									</Flex>
								</AccessibleIcon.Root>
							</NextLink>
						</LogoLink>
						<LogoLink variant="box" asChild>
							<NextLink href="/primitives/case-studies/linear">
								<AccessibleIcon.Root label="Linear case study">
									<Flex justify="center" height="100%">
										<CaseStudyLogo variant="Linear" />
									</Flex>
								</AccessibleIcon.Root>
							</NextLink>
						</LogoLink>
						<LogoLink variant="box" asChild>
							<NextLink href="/primitives/case-studies/liveblocks">
								<AccessibleIcon.Root label="Liveblocks case study">
									<Flex justify="center" height="100%">
										<CaseStudyLogo variant="Liveblocks" />
									</Flex>
								</AccessibleIcon.Root>
							</NextLink>
						</LogoLink>
						<LogoLink variant="box" asChild>
							<NextLink href="/primitives/case-studies/magnetis">
								<AccessibleIcon.Root label="Magnetis case study">
									<Flex justify="center" height="100%">
										<CaseStudyLogo variant="Magnetis" />
									</Flex>
								</AccessibleIcon.Root>
							</NextLink>
						</LogoLink>
						<LogoLink variant="box" asChild>
							<NextLink href="/primitives/case-studies/supabase">
								<AccessibleIcon.Root label="Supabase case study">
									<Flex justify="center" height="100%">
										<CaseStudyLogo variant="Supabase" />
									</Flex>
								</AccessibleIcon.Root>
							</NextLink>
						</LogoLink>
						<LogoLink variant="box" asChild>
							<NextLink href="/primitives/case-studies/nodejs">
								<AccessibleIcon.Root label="Node.js case study">
									<Flex justify="center" height="100%">
										<CaseStudyLogo variant="Node.js" />
									</Flex>
								</AccessibleIcon.Root>
							</NextLink>
						</LogoLink>
						<LogoLink variant="box" asChild>
							<NextLink href="/primitives/case-studies/teamflow">
								<AccessibleIcon.Root label="Teamflow case study">
									<Flex justify="center" height="100%">
										<CaseStudyLogo variant="Teamflow" />
									</Flex>
								</AccessibleIcon.Root>
							</NextLink>
						</LogoLink>
						<LogoLink variant="box" asChild>
							<NextLink href="/primitives/case-studies/university-of-amsterdam">
								<AccessibleIcon.Root label="University of Amsterdam case study">
									<Flex justify="center" height="100%">
										<CaseStudyLogo variant="University of Amsterdam" />
									</Flex>
								</AccessibleIcon.Root>
							</NextLink>
						</LogoLink>
						<LogoLink variant="box" asChild>
							<NextLink href="/primitives/case-studies/vercel">
								<AccessibleIcon.Root label="Vercel case study">
									<Flex justify="center" height="100%">
										<CaseStudyLogo variant="Vercel" />
									</Flex>
								</AccessibleIcon.Root>
							</NextLink>
						</LogoLink>
					</Grid>

					<Separator size="2" mb="8" mx="auto" />

					<Box mb="5" mx="auto" maxWidth="480px">
						<Heading mb="2" size="4" as="h2" align="center">
							Do you use Radix at your company?
						</Heading>

						<Text align="center" as="p">
							We’d love to hear how you use Radix Primitives.
							<Flex display="inline-flex" align="center" gap="2" asChild>
								<Link
									href="https://form.typeform.com/to/FxOiONsk"
									target="_blank"
									highContrast
									color="gray"
								>
									Submit your case study
									<ArrowTopRightIcon />
								</Link>
							</Flex>
						</Text>
					</Box>
				</Section>

				<Footer />
			</Container>
		</>
	);
}
