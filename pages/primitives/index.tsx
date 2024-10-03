import * as React from "react";
import { Container, Section } from "@radix-ui/themes";
import { Footer } from "@components/Footer";
import { MobileMenuProvider } from "@components/MobileMenu";
import { TitleAndMetaTags } from "@components/TitleAndMetaTags";
import { AccessibilitySection } from "@components/marketing/AccessibilitySection";
import { AdoptionSection } from "@components/marketing/AdoptionSection";
import { BenefitsSection } from "@components/marketing/BenefitsSection";
import { CaseStudiesSection } from "@components/marketing/CaseStudiesSection";
import { CommunitySection } from "@components/marketing/CommunitySection";
import { ComponentHighlightsSection } from "@components/marketing/ComponentHighlightsSection";
import { DeveloperExperienceSection } from "@components/marketing/DeveloperExperienceSection";
import { FancyBackground } from "@components/marketing/FancyBackground";
import { PrimitivesHero } from "@components/marketing/PrimitivesHero";
import { StatsSection } from "@components/marketing/StatsSection";
import { Box, Separator } from "@radix-ui/themes";
import { PrimitivesHeader } from "@components/PrimitivesHeader";
import { PrimitivesMobileMenu } from "@components/PrimitivesMobileMenu";

export default function PrimitivesHome() {
	return (
		<MobileMenuProvider>
			<PrimitivesMobileMenu />

			<TitleAndMetaTags
				title="Radix Primitives"
				description="Unstyled, accessible, open source React primitives for high-quality web apps and
        design systems."
				image="primitives.png"
			/>
			<Box style={{ height: 0 }}>
				<PrimitivesHeader ghost />
			</Box>
			<FancyBackground>
				<PrimitivesHero />
			</FancyBackground>
			<CaseStudiesSection />
			<Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
				<Separator size="2" />
			</Container>
			<Box overflow="hidden">
				<BenefitsSection />
				<StatsSection />
			</Box>
			<ComponentHighlightsSection />
			<AccessibilitySection />
			<DeveloperExperienceSection />
			<AdoptionSection />
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
	);
}
