import React from 'react';
import NextLink from 'next/link';
import {
  Box,
  Grid,
  Text,
  Container,
  Heading,
  Paragraph,
  Section,
  Separator,
} from '@modulz/design-system';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { MarketingCaption } from './MarketingCaption';
import { MarketingButton } from './MarketingButton';

export const AdoptionSection = () => {
  return (
    <Section>
      <Container size="3">
        <Box css={{ mb: '$7' }}>
          <MarketingCaption css={{ mb: '$1' }}>Transition to Radix Primitives</MarketingCaption>
          <Heading as="h2" size="3" css={{ mb: '$4' }}>
            Adoption made easy
          </Heading>
          <NextLink href="/primitives/docs" passHref>
            <MarketingButton as="a" icon={ArrowRightIcon}>
              Go to docs
            </MarketingButton>
          </NextLink>
        </Box>

        <Grid columns={{ '@initial': 1, '@bp1': 2 }} gap={{ '@initial': 4, '@bp1': 7, '@bp2': 9 }}>
          <Box>
            <Text
              as="h3"
              size="6"
              css={{ fontWeight: 500, letterSpacing: '-0.03em', lineHeight: 1.3, mb: '$2' }}
            >
              Incremental adoption
            </Text>
            <Paragraph>
              Each component is its own independently versioned package, so new components can be
              added alongside your existing code. No need to disrupt feature work with a huge
              rewrite{'\u2060'}—you can start small and add more components one by one.
            </Paragraph>
          </Box>

          <Box>
            <Text
              as="h3"
              size="6"
              css={{ fontWeight: 500, letterSpacing: '-0.03em', lineHeight: 1.3, mb: '$2' }}
            >
              Detailed docs and TypeScript support
            </Text>
            <Paragraph>
              Radix documentation contains real-world examples, extensive API references,
              accessibility details, and full TypeScript support. All components share a similar
              API, creating a consistent developer experience. You will love working with Radix
              Primitives.
            </Paragraph>
          </Box>
        </Grid>
      </Container>
    </Section>
  );
};
