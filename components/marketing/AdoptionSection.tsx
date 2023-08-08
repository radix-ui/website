import React from 'react';
import NextLink from 'next/link';
import { Box, Button, Container, Grid, Heading, Section, Text } from '@radix-ui/themes';
import { MarketingCaption } from './MarketingCaption';

export const AdoptionSection = () => {
  return (
    <Section size={{ initial: '2', md: '3' }}>
      <Container mx={{ initial: '5', xs: '6', sm: '7', md: '9' }}>
        <Box mb="7">
          <MarketingCaption mb="1">Transition to Radix Primitives</MarketingCaption>
          <Heading as="h2" size="7" mb="5">
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

        <Grid columns={{ initial: '1', xs: '2' }} gap={{ initial: '6', xs: '7', sm: '9' }}>
          <Box>
            <Heading as="h3" size="4" mb="2">
              Incremental adoption
            </Heading>
            <Text as="p" size="3">
              Each component is its own independently versioned package, so new components can be
              added alongside your existing code. No need to disrupt feature work with a huge
              rewrite{'\u2060'}—you can start small and add more components one by one.
            </Text>
          </Box>

          <Box>
            <Heading as="h3" size="4" mb="2">
              Detailed docs and TypeScript support
            </Heading>
            <Text as="p" size="3">
              Radix documentation contains real-world examples, extensive API references,
              accessibility details, and full TypeScript support. All components share a similar
              API, creating a consistent developer experience. You will love working with Radix
              Primitives.
            </Text>
          </Box>
        </Grid>
      </Container>
    </Section>
  );
};
