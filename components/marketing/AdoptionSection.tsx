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
            Easy to introduce to your team
          </Heading>
          <NextLink href="/docs/primitives" passHref>
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
              Primitives have been designed for incremental adoption. Each is its own package that’s
              independently versioned, so new components can be added alongside your existing code.
              No need to disrupt feature work with a huge rewrite – you can start small and add more
              primitives one by one.
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
              Real-world examples, extensive API reference, accessibility details, and full
              TypeScript support. All components share a similar API, creating a consistent
              experience. You will love working with Radix Primitives.
            </Paragraph>
          </Box>
        </Grid>
      </Container>
    </Section>
  );
};
