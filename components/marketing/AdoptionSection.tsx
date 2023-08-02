import React from 'react';
import NextLink from 'next/link';
import { Box, Grid, Text, Heading, Paragraph } from '@modulz/design-system';
import { Button, Container, Section } from '@radix-ui/themes';
import { MarketingCaption } from './MarketingCaption';

export const AdoptionSection = () => {
  return (
    <Section size={{ initial: '2', sm: '3' }}>
      <Container mx="5">
        <Box css={{ mb: '$7' }}>
          <MarketingCaption mb="1">Transition to Radix Primitives</MarketingCaption>
          <Heading as="h2" size="3" css={{ mb: '$5' }}>
            Adoption made easy
          </Heading>
          <NextLink href="/primitives/docs" passHref>
            <Button asChild size={{ initial: '3', xs: '4' }} color="gray" highContrast>
              <a>
                Go to docs
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentcolor"
                  style={{ opacity: 1, marginRight: -3 }}
                >
                  <path d="M6.39205 11.6023L5.36932 10.5909L8.92045 7.03977H0V5.5625H8.92045L5.36932 2.01705L6.39205 1L11.6932 6.30114L6.39205 11.6023Z" />
                </svg>
              </a>
            </Button>
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
