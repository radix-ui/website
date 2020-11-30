import NextLink from 'next/link';
import { Box, Flex, Container, Separator, Grid, Text, Link } from '@modulz/design-system';
import { RadixLogo } from '../components/RadixLogo';
import { TitleAndMetaTags } from '../components/TitleAndMetaTags';

export default function Home() {
  return (
    <Box>
      <TitleAndMetaTags />
      <Box as="header" css={{ py: '$4', px: '$4', mb: '$7' }}>
        <NextLink href="/" passHref>
          <Box
            as="a"
            css={{
              color: '$hiContrast',
              display: 'inline-flex',
              ':focus': {
                boxShadow: 'none',
              },
            }}
          >
            <span
              style={{
                position: 'absolute',
                width: 1,
                height: 1,
                padding: 0,
                margin: -1,
                overflow: 'hidden',
                clip: 'rect(0, 0, 0, 0)',
                whiteSpace: 'nowrap',
                border: 0,
              }}
            >
              Stitches homepage
            </span>
            <RadixLogo />
          </Box>
        </NextLink>
      </Box>
      <Container size="3" css={{ textAlign: 'center', mb: '$4' }}>
        <Text
          size={{ initial: '8', bp2: '9' }}
          css={{ fontWeight: 500, lineHeight: '35px', bp2: { lineHeight: '55px' } }}
        >
          Radix UI — Suite Max Pro II X
        </Text>
      </Container>

      <Container size="2" css={{ textAlign: 'center' }}>
        <Text
          as="h2"
          size={{ initial: '5', bp2: '6' }}
          css={{
            color: '$gray800',
            textAlign: 'center',
            lineHeight: '25px',
            bp2: { lineHeight: '30px' },
          }}
        >
          Everything UI for developers, designers and all creative minds. From tokens to fully
          fledged page layouts. From low-level accessible components to Stripe like buttons.
        </Text>
      </Container>

      <Flex css={{ justifyContent: 'center', my: '$9' }}>
        <Separator size="2" css={{ flexShrink: 0, width: '45px' }} />
      </Flex>

      <Container size="2" css={{ textAlign: 'center' }}>
        <Text as="h2" size={{ initial: '6', bp2: '7' }} css={{ mb: '$4', fontWeight: 500 }}>
          Products
        </Text>
        <Text as="h3" size={{ initial: '5', bp2: '6' }} css={{ color: '$gray800', mb: '$4' }}>
          Everything a UI needs.
        </Text>
      </Container>

      <Container size={{ initial: '2', bp2: '3' }} css={{ my: '$8' }}>
        <Grid
          css={{
            gap: '$6',
            gridTemplateColumns: '1fr',
            bp2: {
              gap: '$7',
              gridTemplateColumns: '1fr 1fr',
            },
          }}
        >
          <Box>
            <Text size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
              Themes
            </Text>
            <Text
              as="p"
              size={{ initial: '4', bp2: '4' }}
              css={{ lineHeight: '30px', color: '$gray800' }}
            >
              Browse an extensive collection of themes, including dark mode. Fully tested and
              interoperable with Radix Components.
            </Text>
          </Box>

          <Box>
            <Text size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
              Design System
            </Text>
            <Text
              as="p"
              size={{ initial: '4', bp2: '4' }}
              css={{ lineHeight: '30px', color: '$gray800' }}
            >
              An off-the-shelf set of components. Built with Radix Primitives and Stitches.
            </Text>
            <NextLink passHref href="/design-system">
              <Link>Learn more</Link>
            </NextLink>
          </Box>

          <Box>
            <Text size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
              Primitives
            </Text>

            <Text
              as="p"
              size={{ initial: '4', bp2: '4' }}
              css={{ lineHeight: '30px', color: '$gray800' }}
            >
              Low-level, accessible and unstyled React Components. The foundation of our Design
              System.
            </Text>
            <NextLink passHref href="/primitives">
              <Link>Learn more</Link>
            </NextLink>
          </Box>

          <Box>
            <Text size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
              Components
            </Text>

            <Text
              as="p"
              size={{ initial: '4', bp2: '4' }}
              css={{ lineHeight: '30px', color: '$gray800' }}
            >
              A collection of one-offs components, built with Radix Primitives. Browse and pick the
              ones you need.
            </Text>
          </Box>

          <Box>
            <Text size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
              Icons
            </Text>

            <Text
              as="p"
              size={{ initial: '4', bp2: '4' }}
              css={{ lineHeight: '30px', color: '$gray800' }}
            >
              An ever-growing library of crisp icons. Currently more than 300 to choose from.
              Available in different sizes.
            </Text>
          </Box>

          <Box>
            <Text size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
              Typography
            </Text>

            <Text
              as="p"
              size={{ initial: '4', bp2: '4' }}
              css={{ lineHeight: '30px', color: '$gray800' }}
            >
              Tokens for beautiful typography. Includes different font faces, as well as line
              heights, letter spacings and font weights.
            </Text>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}
