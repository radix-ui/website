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
  Separator,
} from '@modulz/design-system';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { MarketingButton } from './MarketingButton';
import { MarketingCaption } from './MarketingCaption';
import { Root as AccessibleIcon } from '@radix-ui/react-accessible-icon';
import { CaseStudyLogo } from './CaseStudyLogo';
import { LogoLink } from './LogoLink';

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
          <Card variant="interactive" as="a" href="/case-studies/vercel">
            <Box css={{ p: '$5' }}>
              <Box css={{ mb: '$4' }}>
                <AccessibleIcon label="Vercel case study">
                  <CaseStudyLogo variant="Vercel" />
                </AccessibleIcon>
              </Box>
              <TestimonialText css={{ mb: '$4' }}>
                We’ve been able to focus on building solid user experiences on top of Radix
                Primitives. With UI components, there are just too many angles and rabbit holes to
                cover for product teams that wish to move quickly.
              </TestimonialText>
              <Flex align="center" gap="2">
                <Avatar
                  size="3"
                  src="/marketing/avatar-rauno-freiberg.jpg"
                  aria-describedby="person1"
                />
                <Text variant="gray" size="3" id="person1" css={{ lineHeight: 1.5 }}>
                  Rauno Freiberg, UI Engineer at Vercel
                </Text>
              </Flex>
            </Box>
          </Card>
          <Card variant="interactive" as="a" href="/case-studies/codesandbox">
            <Box css={{ p: '$5' }}>
              <Box css={{ mb: '$4' }}>
                <AccessibleIcon label="CodeSandbox case study">
                  <CaseStudyLogo variant="CodeSandbox (Wide)" />
                </AccessibleIcon>
              </Box>
              <TestimonialText css={{ mb: '$4' }}>
                Radix has significantly improved the accessibility standard in our components. We
                spend far less time discussing and implementing keyboard navigation, focus traps,
                and researching appropriate ARIA techniques for our components.
              </TestimonialText>
              <Flex align="center" gap="2">
                <Avatar
                  size="3"
                  src="/marketing/avatar-scott-hutcheson.png"
                  aria-describedby="person2"
                />
                <Text variant="gray" size="3" id="person2" css={{ lineHeight: 1.5 }}>
                  Scott Hutcheson, Product Engineer at CodeSandbox
                </Text>
              </Flex>
            </Box>
          </Card>
        </Grid>

        <Text variant="gray" css={{ mb: '$3' }}>
          <NextLink href="/case-studies" passHref>
            <Link variant="subtle" css={{ display: 'inline-flex', alignItems: 'center' }}>
              And dozens more companies
              <ArrowRightIcon />
            </Link>
          </NextLink>
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

          // Add some padding so that logos aren't clipped when focused.
          py: '$3',
          my: '-$3',
        }}
      >
        <Grid flow="column" align="center" justify="start" gap="6">
          {/* <NextLink href="/case-studies/graphcms" passHref>
            <LogoLink css={{ mb: -8 }}>
              <AccessibleIcon label="GraphCMS case study">
                <CaseStudyLogo variant="GraphCMS" width="129" />
              </AccessibleIcon>
            </LogoLink>
          </NextLink> */}

          {/* <NextLink href="/case-studies/livepeer" passHref>
            <LogoLink css={{ mb: -6 }}>
              <AccessibleIcon label="Livepeer case study">
                <CaseStudyLogo variant="Livepeer" width="86" />
              </AccessibleIcon>
            </LogoLink>
          </NextLink> */}

          <NextLink href="/case-studies/acid-tango" passHref>
            <LogoLink css={{ mb: -8 }}>
              <AccessibleIcon label="Acid Tango case study">
                <CaseStudyLogo variant="Acid Tango" width="165" />
              </AccessibleIcon>
            </LogoLink>
          </NextLink>

          <NextLink href="/case-studies/atom-learning" passHref>
            <LogoLink css={{ mb: 4 }}>
              <AccessibleIcon label="Atom Learning case study">
                <CaseStudyLogo variant="Atom Learning" width="86" />
              </AccessibleIcon>
            </LogoLink>
          </NextLink>

          <NextLink href="/case-studies/basedash" passHref>
            <LogoLink css={{ mb: -2 }}>
              <AccessibleIcon label="Basedash case study">
                <CaseStudyLogo variant="Basedash" width="135" />
              </AccessibleIcon>
            </LogoLink>
          </NextLink>

          <NextLink href="/case-studies/basement-studio" passHref>
            <LogoLink css={{ mb: -2 }}>
              <AccessibleIcon label="basement.studio case study">
                <CaseStudyLogo variant="basement.studio" width="120" />
              </AccessibleIcon>
            </LogoLink>
          </NextLink>

          {/* <NextLink href="/case-studies/placemark" passHref>
            <LogoLink css={{ mb: -2 }}>
              <AccessibleIcon label="Placemark case study">
                <CaseStudyLogo variant="Placemark" width="121" />
              </AccessibleIcon>
            </LogoLink>
          </NextLink> */}

          <NextLink href="/case-studies/linear" passHref>
            <LogoLink css={{ mb: -3 }}>
              <AccessibleIcon label="Linear case study">
                <CaseStudyLogo variant="Linear (Wide)" width="105" />
              </AccessibleIcon>
            </LogoLink>
          </NextLink>

          <NextLink href="/case-studies/liveblocks" passHref>
            <LogoLink css={{ mb: -3 }}>
              <AccessibleIcon label="Liveblocks case study">
                <CaseStudyLogo variant="Liveblocks (Wide)" width="125" />
              </AccessibleIcon>
            </LogoLink>
          </NextLink>

          <NextLink href="/case-studies/supabase" passHref>
            <LogoLink css={{ mb: -8 }}>
              <AccessibleIcon label="Supabase case study">
                <CaseStudyLogo variant="Supabase" width="140" />
              </AccessibleIcon>
            </LogoLink>
          </NextLink>

          <NextLink href="/case-studies/university-of-amsterdam" passHref>
            <LogoLink css={{ mt: 7 }}>
              <AccessibleIcon label="University of Amsterdam case study">
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
