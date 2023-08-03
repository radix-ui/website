import * as React from 'react';
import { Container } from '@radix-ui/themes';
import { DocsNav } from '@components/DocsNav';
import { Footer } from '@components/Footer';
import { MobileMenu, MobileMenuProvider } from '@components/MobileMenu';
import { PrimitivesHeader } from '@components/PrimitivesHeader';
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
import { primitivesRoutes } from '@lib/primitivesRoutes';
import { Box, ScrollArea, Separator } from '@radix-ui/themes';
import { PrimitivesDocsHeader } from '@components/PrimitivesDocsHeader';
import { PrimitivesSearchMobile } from '@components/PrimitivesSearchMobile';

export default function PrimitivesHome() {
  const [mobileSearchOpen, setMobileSearchOpen] = React.useState(false);
  return (
    <MobileMenuProvider>
      <MobileMenu>
        <PrimitivesDocsHeader />
        <ScrollArea scrollbars="vertical">
          <Box pt="4" px="4" pb="9" style={{ maxWidth: '100vw' }}>
            <Box mb="4">
              <PrimitivesSearchMobile
                onSearchShow={() => setMobileSearchOpen(true)}
                onSearchHide={() => setMobileSearchOpen(false)}
              />
            </Box>

            {!mobileSearchOpen && <DocsNav routes={primitivesRoutes} />}
          </Box>
        </ScrollArea>
      </MobileMenu>

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
