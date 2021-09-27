import React from 'react';
import NextLink from 'next/link';
import {
  Box,
  Grid,
  Text,
  styled,
  Container,
  Flex,
  Heading,
  Paragraph,
  Section,
  Card,
  Avatar,
  Separator,
} from '@modulz/design-system';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { MarketingCaption } from './MarketingCaption';
import { MarketingButton } from './MarketingButton';

export const DeveloperExperienceHero = () => {
  return (
    <Section
      css={{
        background: 'linear-gradient(to bottom right, $sky3, $cyan4, $blue6)',

        // TODO temp style
        minHeight: 900,
      }}
    >
      <Container size="3">
        <Box css={{ mb: '$7' }}>
          <MarketingCaption css={{ mb: '$1' }}>Developer experience to love</MarketingCaption>
          <Heading as="h2" size="3" css={{ mb: '$4' }}>
            Open, thought-out API
          </Heading>

          <Box css={{ maxWidth: 420 }}>
            <Paragraph css={{ mb: '$5' }}>
              One of our main goals is to provide the best possible developer experience. Radix
              Primitives provides a fully-typed API. All components share a similar API, creating a
              consistent and predictable experience.
            </Paragraph>
          </Box>
        </Box>
      </Container>
    </Section>
  );
};
