import React from 'react';
import NextLink from 'next/link';
import {
  Section,
  Container,
  Heading,
  Link,
  Avatar,
  Flex,
  Button,
  Paragraph,
  Separator,
  Box,
  Grid,
  Text,
} from '@modulz/design-system';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import { MainHero } from '@components/marketing/MainHero';
import { ComponentDetails } from '@components/marketing/ComponentDetails';
import { CaseStudiesHero } from '@components/marketing/CaseStudiesHero';
import { MainBackground } from '@components/marketing/MainBackground';
import { BenefitsHero } from '@components/marketing/BenefitsHero';
import { DeveloperObjectionsHero } from '@components/marketing/DeveloperObjectionsHero';
import { DeveloperExperienceHero } from '@components/marketing/DeveloperExperienceHero';
import { CommunityLinks } from '@components/marketing/CommunityLinks';
import { ProductsLinks } from '@components/marketing/ProductsLinks';

export default function PrimitivesHome() {
  return (
    <Box css={{ width: '100vw', overflowX: 'hidden' }}>
      <TitleAndMetaTags
        title="Primitives — Radix UI"
        description="An open-source React component library for building high-quality, accessible design systems and web apps."
        // TODO meta image
        image="colors.png"
      />

      <MainBackground />
      <MainHero />
      <CaseStudiesHero />
      <BenefitsHero />
      <ComponentDetails />
      <DeveloperExperienceHero />
      <DeveloperObjectionsHero />
      <CommunityLinks />
      <ProductsLinks />
    </Box>
  );
}
