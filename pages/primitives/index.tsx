import * as React from 'react';
import { Container } from '@radix-ui/themes';
import { Footer } from '@components/Footer';
import { MobileMenuProvider } from '@components/MobileMenu';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import { AccessibilitySection } from '@components/marketing/AccessibilitySection';
import { AdoptionSection } from '@components/marketing/AdoptionSection';
import { BenefitsSection } from '@components/marketing/BenefitsSection';
import { CaseStudiesSection } from '@components/marketing/CaseStudiesSection';
import { CommunitySection } from '@components/marketing/CommunitySection';
import { ComponentHighlightsSection } from '@components/marketing/ComponentHighlightsSection';
import { DeveloperExperienceSection } from '@components/marketing/DeveloperExperienceSection';
import { FancyBackground } from '@components/marketing/FancyBackground';
import { PrimitivesHero } from '@components/marketing/PrimitivesHero';
import { StatsSection } from '@components/marketing/StatsSection';
import { Box, Separator } from '@radix-ui/themes';
import { PrimitivesHeader } from '@components/PrimitivesHeader';
import { PrimitivesMobileMenu } from '@components/PrimitivesMobileMenu';

export default function PrimitivesHome() {
  return (
    <MobileMenuProvider>
      <PrimitivesMobileMenu />

      <TitleAndMetaTags
        title="Primitives – Radix UI"
        description="An open-source React component library for building high-quality, accessible design systems and web apps."
        image="default.png"
      />
      <Box style={{ height: 0 }}>
        <PrimitivesHeader ghost />
      </Box>
      <FancyBackground>
        <PrimitivesHero />
      </FancyBackground>
      <CaseStudiesSection />
      <Container mx={{ initial: '5', xs: '6', sm: '7', md: '9' }}>
        <Separator size="2" />
      </Container>
      <Box style={{ overflow: 'hidden' }}>
        <BenefitsSection />
        <StatsSection />
      </Box>
      <ComponentHighlightsSection />
      <AccessibilitySection />
      <DeveloperExperienceSection />
      <AdoptionSection />
      <Container mx={{ initial: '5', xs: '6', sm: '7', md: '9' }}>
        <Separator size="2" />
      </Container>
      <CommunitySection />
      <Container mx={{ initial: '5', xs: '6', sm: '7', md: '9' }}>
        <Footer />
      </Container>
    </MobileMenuProvider>
  );
}
