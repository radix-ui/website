import { Container } from '@modulz/design-system';

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
import { MainHero } from '@components/marketing/MainHero';
import { OtherProductsSection } from '@components/marketing/OtherProductsSection';
import { StatsSection } from '@components/marketing/StatsSection';
import { primitivesRoutes } from '@lib/primitivesRoutes';
import { Box, ScrollArea, Separator } from '@radix-ui/themes';

export default function PrimitivesHome() {
  return (
    <MobileMenuProvider>
      <MobileMenu>
        <PrimitivesHeader />
        <ScrollArea>
          <DocsNav routes={primitivesRoutes} />
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
        <MainHero />
      </FancyBackground>
      <CaseStudiesSection />
      <Container size="3">
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
    </MobileMenuProvider>
  );
}
