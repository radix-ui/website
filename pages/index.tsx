import React from 'react';
import { Box, Container, Separator } from '@modulz/design-system';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import { MainHero } from '@components/marketing/MainHero';
import { ComponentHighlightsSection } from '@components/marketing/ComponentHighlightsSection';
import { CaseStudiesSection } from '@components/marketing/CaseStudiesSection';
import { BenefitsSection } from '@components/marketing/BenefitsSection';
import { AccessibilitySection } from '@components/marketing/AccessibilitySection';
import { DeveloperExperienceSection } from '@components/marketing/DeveloperExperienceSection';
import { AdoptionSection } from '@components/marketing/AdoptionSection';
import { CommunitySection } from '@components/marketing/CommunitySection';
import { OtherProductsSection } from '@components/marketing/OtherProductsSection';
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { FancyBackground } from '@components/marketing/FancyBackground';
import { StatsSection } from '@components/marketing/StatsSection';

export default function PrimitivesHome() {
  return (
    <Box>
      <TitleAndMetaTags
        title="Primitives – Radix UI"
        description="An open-source React component library for building high-quality, accessible design systems and web apps."
        image="default.png"
      />
      <FancyBackground>
        <Header />
        <MainHero />
      </FancyBackground>
      <CaseStudiesSection />
      <Container size="3">
        <Separator size="2" />
      </Container>
      <Box css={{ overflow: 'hidden' }}>
        <BenefitsSection />
        <StatsSection />
      </Box>
      <ComponentHighlightsSection />
      <AccessibilitySection />
      <DeveloperExperienceSection />
      <AdoptionSection />
      <Container size="3">
        <Separator size="2" />
      </Container>
      <CommunitySection />
      <Container size="3">
        <Separator size="2" />
      </Container>
      <OtherProductsSection />
      <Container size="3">
        <Footer />
      </Container>
    </Box>
  );
}
