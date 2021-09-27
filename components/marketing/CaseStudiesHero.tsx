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
} from '@modulz/design-system';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { MarketingButton } from './MarketingButton';
import { MarketingCaption } from './MarketingCaption';

export const CaseStudiesHero = () => {
  return (
    <Section
      css={{
        background: 'linear-gradient(to bottom, $panel, #FFFFFF00)',
        boxShadow: '0 -1px $colors$grayA3',
      }}
    >
      <Container size="3">
        <Box css={{ mb: '$7' }}>
          <MarketingCaption css={{ mb: '$1' }}>Meet our clients</MarketingCaption>
          <Heading as="h2" size="3" css={{ mb: '$4' }}>
            Powering the leading design systems
          </Heading>
          <NextLink href="/primitives/case-studies" passHref>
            <MarketingButton variant="gray" as="a" gap="1">
              Read case studies
              <ArrowRightIcon />
            </MarketingButton>
          </NextLink>
        </Box>

        <Grid columns={{ '@bp2': 2 }} gap="5" css={{ mb: '$6' }}>
          <Card variant="interactive" as="a" href="#">
            <Box css={{ p: '$6' }}>
              <Box css={{ mt: '-$1', mb: '$5' }}>
                <img src="/marketing/logo-vercel.svg" alt="Vercel Logo" />
              </Box>
              <TestimonialText css={{ mb: '$5' }}>
                We’ve been able to focus on building solid user experiences on top of Radix
                Primitives. With UI components, there are just too many angles and rabbit holes to
                cover for product teams that wish to move quickly.
              </TestimonialText>
              <Flex align="center" gap="2">
                <Avatar size="3" src="/marketing/avatar-rauno.jpg" aria-describedby="person1" />
                <Text variant="gray" size="3" id="person1" css={{ lineHeight: 1.5 }}>
                  Rauno Freiberg, Product Engineer at Vercel
                </Text>
              </Flex>
            </Box>
          </Card>
          <Card variant="interactive" as="a" href="#">
            <Box css={{ p: '$6' }}>
              <Box css={{ mt: '-$1', mb: '$5' }}>
                <img src="/marketing/logo-codesandbox.svg" alt="CodeSandbox Logo" />
              </Box>
              <TestimonialText css={{ mb: '$5' }}>
                Radix has significantly improved the A11Y standard in our components. We spend far
                less time discussing and implementing keyboard navigation, focus traps, and
                researching appropriate ARIA techniques for our components.
              </TestimonialText>
              <Flex align="center" gap="2">
                <Avatar size="3" src="/marketing/avatar-generic.jpg" aria-describedby="person2" />
                <Text variant="gray" size="3" id="person2" css={{ lineHeight: 1.5 }}>
                  Jane Doe, Development Lead at CodeSandbox
                </Text>
              </Flex>
            </Box>
          </Card>
        </Grid>

        <Flex align="center" justify="center" wrap="wrap" gap="6">
          {/* Logos are baseline aligned */}
          {/* TODO: link to case studies or company websites */}
          <Flex align="center" justify="center" wrap="wrap" gap="6">
            <img
              src="/marketing/logo-graphcms.svg"
              alt="CodeSandbox Logo"
              style={{ marginTop: 7 }}
            />
            <img src="/marketing/logo-livepeer.svg" alt="Livepeer Logo" style={{ marginTop: 4 }} />
          </Flex>
          <Flex align="center" justify="center" wrap="wrap" gap="6">
            <img
              src="/marketing/logo-atom-learning.svg"
              alt="Atom Learning Logo"
              style={{ marginBottom: 6 }}
            />
            <img src="/marketing/logo-placemark.svg" alt="Placemark Logo" />
          </Flex>
          <img src="/marketing/logo-supabase.svg" alt="Supabase Logo" style={{ marginTop: 6 }} />
          <Flex align="center" justify="center" wrap="wrap" gap="6">
            <img src="/marketing/logo-magnetis.svg" alt="Magnetis Logo" style={{ marginTop: 10 }} />
            <img
              src="/marketing/logo-uni-of-amsterdam.svg"
              alt="University of Amsterdam Logo"
              style={{ marginRight: -15 }}
            />
          </Flex>
        </Flex>
      </Container>
    </Section>
  );
};

const TestimonialText = styled(
  Text,
  {
    lineHeight: 1.6,
    letterSpacing: '-0.01em',
    textIndent: '-0.577em',
    fontVariantNumeric: 'normal',
    '&::before': { content: '“', mr: '0.07em' },
    '&::after': { content: '”', ml: '0.07em' },
  },
  {
    defaultVariants: {
      size: 5,
    },
  }
);
