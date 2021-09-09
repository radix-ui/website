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
import { ArrowBottomRightIcon, ArrowRightIcon, ExternalLinkIcon } from '@radix-ui/react-icons';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';

export default function ColorsHome() {
  return (
    <Box css={{ py: '$4', mt: '$2' }}>
      <TitleAndMetaTags
        title="Colors — Radix UI"
        description="An open-source color system for designing beautiful, accessible websites and apps."
        image="colors.png"
      />
      <Section
        size={{
          '@initial': '2',
          '@bp1': '3',
        }}
        css={{
          pt: '$3',
          pb: '$7',
          '@bp2': {
            pt: '$6',
            pb: '$8',
          },
        }}
      >
        <Container size="3">
          <Heading size="4" css={{ mb: '$3' }}>
            Save time, improve a11y, focus on differentiated product
          </Heading>
          <Paragraph
            size="2"
            as="p"
            css={{
              mb: '$6',
              color: '$sage11',
              '@bp2': {
                mb: '$7',
              },
            }}
          >
            Radix Primitives is an open-source UI component library for building high-quality,
            accessible, React-based design systems and web apps.
          </Paragraph>
          <Flex justify={{ '@initial': 'start' }} gap="5" css={{ mt: '$7' }}>
            <NextLink href="/docs/colors" passHref>
              <Button
                as="a"
                variant="blue"
                css={{
                  height: '$6',
                  fontSize: '$3',
                  borderRadius: '9999px',
                  px: '$3',
                  bc: 'white',
                  boxShadow:
                    '-15px 0 30px -10px $colors$orangeA7, 0 0 30px -10px $colors$pinkA7, 15px 0 30px -10px $colors$violetA7',
                  cursor: 'pointer',
                  color: 'black',
                  gap: '$2',
                  transition: 'all 200ms ease',
                  '&:hover': {
                    boxShadow:
                      '-15px 0 30px -10px $colors$orangeA8, 0 0 30px -10px $colors$pinkA8, 15px 0 30px -10px $colors$violetA8',
                  },
                  '&:active': {
                    bc: 'white',
                    boxShadow:
                      '-15px 0 20px -10px $colors$orangeA8, 0 0 20px -10px $colors$pinkA8, 15px 0 20px -10px $colors$violetA8',
                  },
                  '&:focus': {
                    boxShadow:
                      '-15px 0 30px -10px $colors$orangeA7, 0 0 30px -10px $colors$pinkA7, 15px 0 30px -10px $colors$violetA7, inset 0 0 0 1px $colors$pinkA7, 0 0 0 1px $colors$pinkA7',
                  },
                }}
              >
                Install Primitives
                <ArrowRightIcon />
              </Button>
            </NextLink>
            <Button
              as="a"
              variant="blue"
              href="https://github.com/radix-ui/colors"
              target="_blank"
              css={{
                height: '$6',
                fontSize: '$3',
                borderRadius: '9999px',
                px: '$3',
                bc: 'transparent',
                boxShadow: 'none',
                cursor: 'pointer',
                color: '$sage11',
                gap: '$2',
                '&:hover': {
                  bc: '$sageA5',
                  boxShadow: 'none',
                },
                '&:focus': {
                  boxShadow: 'inset 0 0 0 1px $colors$sky7, 0 0 0 1px $colors$sky7',
                },
              }}
            >
              Read Case Studies
              <ExternalLinkIcon />
            </Button>
          </Flex>

          <Box css={{ py: '$8', bc: '$mint3', mt: '$8' }}>
            <Text size="3">The Primitive examples go sliding across weeeeeeeeeee!</Text>
          </Box>
        </Container>
      </Section>

      <Section
        size={{
          '@initial': '2',
          '@bp1': '3',
        }}
        css={{
          pt: '$3',
          pb: '$7',
          '@bp2': {
            pt: '$6',
            pb: '$8',
          },
        }}
      >
        <Container size="3">
          <Text size="3" as="h2" css={{ mb: '$2', color: '$teal11', fontWeight: 500 }}>
            Robust af
          </Text>
          <Heading size="3" css={{ mb: '$3' }}>
            So, you think you can build a dropdown?
          </Heading>
          <Grid columns="3" gap="7">
            <Box>
              <Heading size="1">WAI-ARIA compliant</Heading>
              <Text size="3" css={{ color: '$slate11' }}>
                Radix Primitives follow the WAI-ARIA guidelines, implementing correct semantics and
                behaviors for our components.
              </Text>
            </Box>
            <Box>
              <Heading size="1">Keyboard navigation</Heading>
              <Text size="3" css={{ color: '$slate11' }}>
                Radix Primitives provide keyboard support for components where users expect to use
                a keyboard or other input devices.
              </Text>
            </Box>
            <Box>
              <Heading size="1">Focus management</Heading>
              <Text size="3" css={{ color: '$slate11' }}>
                Out of the box, Primitives provide sensible focus management defaults, which can be
                further customized in your app.
              </Text>
            </Box>
            <Box>
              <Heading size="1">Screen reader tested</Heading>
              <Text size="3" css={{ color: '$slate11' }}>
                We test Primitives with commonly used assistive technologies, looking out for
                practical issues that AT users may experience.
              </Text>
            </Box>
            <Box>
              <Heading size="1">Accessible labelling</Heading>
              <Text size="3" css={{ color: '$slate11' }}>
                We include abstractions to make labelling custom controls simple, so that all users
                can have equal access to your app.
              </Text>
            </Box>
          </Grid>
        </Container>
      </Section>

      <Section
        size={{
          '@initial': '2',
          '@bp1': '3',
        }}
        css={{
          pt: '$3',
          pb: '$7',
          '@bp2': {
            pt: '$6',
            pb: '$8',
          },
        }}
      >
        <Container size="3">
          <Text size="3" as="h2" css={{ mb: '$2', color: '$teal11', fontWeight: 500 }}>
            Case Studies
          </Text>
          <Heading size="3" css={{ mb: '$3' }}>
            Powering some of the best design systems and products.
          </Heading>
          <Flex justify={{ '@initial': 'start' }} gap="5" css={{ mt: '$7' }}>
            <NextLink href="/docs/colors" passHref>
              <Button
                as="a"
                variant="blue"
                css={{
                  height: '$6',
                  fontSize: '$3',
                  borderRadius: '9999px',
                  px: '$3',
                  bc: 'white',
                  boxShadow:
                    '-15px 0 30px -10px $colors$orangeA7, 0 0 30px -10px $colors$pinkA7, 15px 0 30px -10px $colors$violetA7',
                  cursor: 'pointer',
                  color: 'black',
                  gap: '$2',
                  transition: 'all 200ms ease',
                  '&:hover': {
                    boxShadow:
                      '-15px 0 30px -10px $colors$orangeA8, 0 0 30px -10px $colors$pinkA8, 15px 0 30px -10px $colors$violetA8',
                  },
                  '&:active': {
                    bc: 'white',
                    boxShadow:
                      '-15px 0 20px -10px $colors$orangeA8, 0 0 20px -10px $colors$pinkA8, 15px 0 20px -10px $colors$violetA8',
                  },
                  '&:focus': {
                    boxShadow:
                      '-15px 0 30px -10px $colors$orangeA7, 0 0 30px -10px $colors$pinkA7, 15px 0 30px -10px $colors$violetA7, inset 0 0 0 1px $colors$pinkA7, 0 0 0 1px $colors$pinkA7',
                  },
                }}
              >
                Install Primitives
                <ArrowRightIcon />
              </Button>
            </NextLink>
            <Button
              as="a"
              variant="blue"
              href="https://github.com/radix-ui/colors"
              target="_blank"
              css={{
                height: '$6',
                fontSize: '$3',
                borderRadius: '9999px',
                px: '$3',
                bc: 'transparent',
                boxShadow: 'none',
                cursor: 'pointer',
                color: '$sage11',
                gap: '$2',
                '&:hover': {
                  bc: '$sageA5',
                  boxShadow: 'none',
                },
                '&:focus': {
                  boxShadow: 'inset 0 0 0 1px $colors$sky7, 0 0 0 1px $colors$sky7',
                },
              }}
            >
              Read Case Studies
              <ExternalLinkIcon />
            </Button>
          </Flex>

          <Box
            css={{
              p: '$6',
              bc: '$panel',
              borderRadius: '$4',
              mt: '$8',
              boxShadow: '0 30px 40px -50px $colors$grayA9, 0 15px 60px -35px $colors$grayA9',
            }}
          >
            <Text size="5">
              We've been able to focus on building solid user experiences on top of Radix
              Primitives. With UI components, there are just too many angles and rabbit holes to
              cover for product teams that wish to move quickly.”
            </Text>
            <Flex align="center">
              <Avatar alt="JD" />
              <Text size="3" css={{ color: '$slate11' }}>
                Jane Doe, Engineering Lead at Vercel
              </Text>
            </Flex>
          </Box>
        </Container>
      </Section>

      <Section
        size={{
          '@initial': '2',
          '@bp1': '3',
        }}
        css={{
          pt: '$3',
          pb: '$7',
          '@bp2': {
            pt: '$6',
            pb: '$8',
          },
        }}
      >
        <Container size="2">
          <Flex align="center">
            <Box css={{ p: '$7' }}>
              <Text size="9" css={{ fontWeight: 500 }}>
                450k
              </Text>
              <Text size="3" css={{ color: '$slate11' }}>
                Monthly downloads
              </Text>
            </Box>
            <Separator size="2" orientation="vertical" />
            <Box css={{ p: '$7' }}>
              <Text size="9" css={{ fontWeight: 500 }}>
                1250
              </Text>
              <Text size="3" css={{ color: '$slate11' }}>
                Discord members
              </Text>
            </Box>
            <Separator size="2" orientation="vertical" />
            <Box css={{ p: '$7' }}>
              <Text size="9" css={{ fontWeight: 500 }}>
                1.3k
              </Text>
              <Text size="3" css={{ color: '$slate11' }}>
                Github stars
              </Text>
            </Box>
          </Flex>
        </Container>
      </Section>

      <Section
        size={{
          '@initial': '2',
          '@bp1': '3',
        }}
        css={{
          pt: '$3',
          pb: '$7',
          '@bp2': {
            pt: '$6',
            pb: '$8',
          },
        }}
      >
        <Container size="3">
          <Text size="3" as="h2" css={{ mb: '$2', color: '$teal11', fontWeight: 500 }}>
            Pain Points
          </Text>
          <Heading size="3" css={{ mb: '$3' }}>
            The main pain points
          </Heading>
          <Link variant="blue" href="https://github.com/radix-ui/colors">
            Documentation
          </Link>

          <Grid columns="3" gap="7">
            <Box>
              <Heading size="1">Save time and cost</Heading>
              <Text size="3" css={{ color: '$slate11' }}>
                Primitives are engineered for top performance and a tiny footprint. Shared
                functionality is done with internal utility packages, so common code isn’t
                duplicated in your final bundle.
              </Text>
            </Box>
            <Box>
              <Heading size="1">Focus on differentiated work</Heading>
              <Text size="3" css={{ color: '$slate11' }}>
                New components can be added alongside your existing code. No need to disrupt feature
                work with a huge rewrite – you can start small and add more primitives one by one.
              </Text>
            </Box>
            <Box>
              <Heading size="1">Inaccessible</Heading>
              <Text size="3" css={{ color: '$slate11' }}>
                Real-world examples, extensive API reference, accessibility details, and full
                TypeScript support. All components share a similar API, creating a consistent
                experience. You will love working with Radix Primitives.
              </Text>
            </Box>
          </Grid>
        </Container>
      </Section>

      <Section
        size={{
          '@initial': '2',
          '@bp1': '3',
        }}
        css={{
          pt: '$3',
          pb: '$7',
          '@bp2': {
            pt: '$6',
            pb: '$8',
          },
        }}
      >
        <Container size="3">
          <Text size="3" as="h2" css={{ mb: '$2', color: '$teal11', fontWeight: 500 }}>
            Incremental adoption
          </Text>
          <Heading size="3" css={{ mb: '$3' }}>
            Easy to adopt and introduce to your dev team
          </Heading>
          <Link variant="blue" href="https://github.com/radix-ui/colors">
            Documentation
          </Link>

          <Grid columns="3" gap="7">
            <Box>
              <Heading size="1">Tiny bundles, fast page speed</Heading>
              <Text size="3" css={{ color: '$slate11' }}>
                Primitives are engineered for top performance and a tiny footprint. Shared
                functionality is done with internal utility packages, so common code isn’t
                duplicated in your final bundle.
              </Text>
            </Box>
            <Box>
              <Heading size="1">Easy incremental adoption</Heading>
              <Text size="3" css={{ color: '$slate11' }}>
                New components can be added alongside your existing code. No need to disrupt feature
                work with a huge rewrite – you can start small and add more primitives one by one.
              </Text>
            </Box>
            <Box>
              <Heading size="1">Full docs and TypeScript support</Heading>
              <Text size="3" css={{ color: '$slate11' }}>
                Real-world examples, extensive API reference, accessibility details, and full
                TypeScript support. All components share a similar API, creating a consistent
                experience. You will love working with Radix Primitives.
              </Text>
            </Box>
          </Grid>
        </Container>
      </Section>
    </Box>
  );
}
