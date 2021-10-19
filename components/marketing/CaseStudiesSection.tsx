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
  Section,
  Card,
  Avatar,
  Link,
} from '@modulz/design-system';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { MarketingButton } from './MarketingButton';
import { MarketingCaption } from './MarketingCaption';
import { Root as AccessibleIcon } from '@radix-ui/react-accessible-icon';
import { CaseStudyLogo } from './CaseStudyLogo';

export const CaseStudiesSection = () => {
  return (
    <Section>
      <Container size="3">
        <Box css={{ mb: '$5' }}>
          <MarketingCaption css={{ mb: '$1' }}>Case studies</MarketingCaption>
          <Heading as="h2" size="3" css={{ maxWidth: 500 }}>
            World-class teams use Radix to power their products
          </Heading>
        </Box>

        <Grid columns={{ '@bp2': 2 }} gap="5" css={{ mb: '$6' }}>
          <Card variant="interactive" as="a" href="/primitives/case-studies/vercel">
            <Box css={{ p: '$5' }}>
              <Box css={{ mb: '$4' }}>
                <AccessibleIcon label="Vercel Logo">
                  <CaseStudyLogo variant="Vercel" />
                </AccessibleIcon>
              </Box>
              <TestimonialText css={{ mb: '$4' }}>
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
          <Card variant="interactive" as="a" href="/primitives/case-studies/codesandbox">
            <Box css={{ p: '$5' }}>
              <Box css={{ mb: '$4' }}>
                <AccessibleIcon label="CodeSandbox Logo">
                  <CaseStudyLogo variant="CodeSandbox (Wide)" />
                </AccessibleIcon>
              </Box>
              <TestimonialText css={{ mb: '$4' }}>
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

        <Text variant="gray" css={{ mb: '$3' }}>
          <Link
            href="/primitives/case-studies"
            variant="subtle"
            css={{ display: 'inline-flex', alignItems: 'center' }}
          >
            And dozens more companies
            <ArrowRightIcon />
          </Link>
        </Text>
      </Container>

      <Container
        size="3"
        css={{
          position: 'relative',
          overflowX: 'scroll',
          overflowY: 'hidden',
          WebkitOverflowScrolling: 'touch',
          MsOverflowStyle: 'none',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        <Grid flow="column" align="center" justify="start" gap="6">
          <NextLink href="/primitives/case-studies/graphcms" passHref>
            <LogoLink css={{ mb: -8 }}>
              <AccessibleIcon label="GraphCMS Logo">
                <CaseStudyLogo variant="GraphCMS" width="129" />
              </AccessibleIcon>
            </LogoLink>
          </NextLink>

          <NextLink href="/primitives/case-studies/livepeer" passHref>
            <LogoLink css={{ mb: -6 }}>
              <AccessibleIcon label="Livepeer Logo">
                <CaseStudyLogo variant="Livepeer" width="86" />
              </AccessibleIcon>
            </LogoLink>
          </NextLink>

          <NextLink href="/primitives/case-studies/atom-learning" passHref>
            <LogoLink css={{ mb: 4 }}>
              <AccessibleIcon label="Atom Learning Logo">
                <CaseStudyLogo variant="Atom Learning" width="86" />
              </AccessibleIcon>
            </LogoLink>
          </NextLink>

          <NextLink href="/primitives/case-studies/placemark" passHref>
            <LogoLink css={{ mb: -2 }}>
              <AccessibleIcon label="Placemark Logo">
                <CaseStudyLogo variant="Placemark" width="121" />
              </AccessibleIcon>
            </LogoLink>
          </NextLink>

          <NextLink href="/primitives/case-studies/supabase" passHref>
            <LogoLink css={{ mb: -8 }}>
              <AccessibleIcon label="Supabase Logo">
                <CaseStudyLogo variant="Supabase" width="140" />
              </AccessibleIcon>
            </LogoLink>
          </NextLink>

          <NextLink href="/primitives/case-studies/magnetis" passHref>
            <LogoLink css={{ mb: -12 }}>
              <AccessibleIcon label="Magnetis Logo">
                <CaseStudyLogo variant="Magnetis" width="111" />
              </AccessibleIcon>
            </LogoLink>
          </NextLink>

          <NextLink href="/primitives/case-studies/university-of-amsterdam" passHref>
            <LogoLink css={{ mt: 7 }}>
              <AccessibleIcon label="University of Amsterdam Logo">
                <CaseStudyLogo variant="University of Amsterdam" width="152" />
              </AccessibleIcon>
            </LogoLink>
          </NextLink>

          {/* Horizontal scroll spacer */}
          <Box css={{ width: 1, height: 1 }} />
        </Grid>
      </Container>
    </Section>
  );
};

const LogoLink = styled('a', {
  display: 'block',
  color: '$hiContrast',
  '@hover': {
    color: '$slate9',
    transition: '120ms color',
    '&:hover': {
      color: '$hiContrast',
    },
  },
});

const TestimonialText = styled(
  Text,
  {
    lineHeight: 1.6,
    letterSpacing: '-0.01em',
    textIndent: '-0.577em',
    fontVariantNumeric: 'normal',
    hyphens: 'auto',
    '&::before': { content: '“', mr: '0.07em' },
    '&::after': { content: '”', ml: '0.07em' },
  },
  {
    defaultVariants: {
      size: 4,
    },
  }
);
