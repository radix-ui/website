import React from 'react';
import NextLink from 'next/link';
import { Box, Container, Grid, Text, Flex, Separator, Link } from '@modulz/design-system';
import { RadixLogo } from './RadixLogo';
import { ExternalIcon } from './ExternalIcon';

export const Footer = () => {
  return (
    <Box as="footer" css={{ pb: '$9' }}>
      <Flex css={{ justifyContent: 'center', mb: '$9' }}>
        <Separator size="2" />
      </Flex>
      <Container size="3">
        <Grid
          css={{
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: '$6',
            '& ul': { listStyle: 'none', margin: '0', padding: '0' },
            '@bp2': {
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '$3',
            },
          }}
        >
          <Flex
            css={{
              alignItems: 'center',
              '@bp2': {
                flexDirection: 'column',
                alignItems: 'start',
              },
            }}
          >
            <NextLink href="/" passHref>
              <Box
                as="a"
                css={{
                  color: '$hiContrast',
                  display: 'inline-flex',
                  '&:focus': {
                    boxShadow: 'none',
                  },
                }}
              >
                <RadixLogo label="Radix Homepage" />
              </Box>
            </NextLink>
            <Text
              as="h6"
              size="2"
              css={{
                lineHeight: '20px',
                ml: '$4',
                color: '$gray10',
                pr: '$8',
                '@bp2': { mt: '$5', ml: '0' },
              }}
            >
              Radix is a project by{' '}
              <Link variant="subtle" href="https://modulz.app">
                Modulz
              </Link>
              .
            </Text>
          </Flex>
          <Box>
            <Text as="h6" size="3" css={{ fontWeight: 500, lineHeight: '20px' }}>
              Primitives
            </Text>
            <ul>
              <li>
                <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                  <NextLink href="/primitives/docs/overview/introduction" passHref>
                    <Link variant="subtle">Introduction</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                  <NextLink href="/primitives/docs/overview/introduction" passHref>
                    <Link variant="subtle">Styling</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                  <NextLink href="/primitives/docs/overview/accessibility" passHref>
                    <Link variant="subtle">Accessibility</Link>
                  </NextLink>
                </Text>
              </li>
            </ul>
          </Box>
          {/* <Box>
            <Text as="h6" size="3" css={{ fontWeight: 500, lineHeight: '20px' }}>
              Docs
            </Text>
            <ul>
              <li>
                <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                  <NextLink href="/docs/introduction" passHref>
                    <Link variant="subtle">Introduction</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                  <NextLink href="/docs/styling" passHref>
                    <Link variant="subtle">Styling</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                  <NextLink href="/docs/variants" passHref>
                    <Link variant="subtle">Variants</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                  <NextLink href="/docs/tokens" passHref>
                    <Link variant="subtle">Configuration</Link>
                  </NextLink>
                </Text>
              </li>
            </ul>
          </Box> */}
          <Box>
            <Text as="h6" size="3" css={{ fontWeight: 500, lineHeight: '20px' }}>
              Community
            </Text>
            <ul>
              <li>
                <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                  <NextLink href="/blog" passHref>
                    <Link variant="subtle">Blog</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                  <Link
                    href="https://github.com/radix-ui"
                    css={{ display: 'inline-flex', alignItems: 'center' }}
                  >
                    GitHub
                    <Flex as="span" css={{ ml: '$1', color: '$gray6' }}>
                      <ExternalIcon />
                    </Flex>
                  </Link>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                  <Link
                    href="https://twitter.com/radix_ui"
                    css={{ display: 'inline-flex', alignItems: 'center' }}
                  >
                    Twitter
                    <Flex as="span" css={{ ml: '$1', color: '$gray6' }}>
                      <ExternalIcon />
                    </Flex>
                  </Link>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                  <Link
                    href="https://discord.com/invite/7Xb99uG"
                    css={{ display: 'inline-flex', alignItems: 'center' }}
                  >
                    Discord
                    <Flex as="span" css={{ ml: '$1', color: '$gray6' }}>
                      <ExternalIcon />
                    </Flex>
                  </Link>
                </Text>
              </li>
            </ul>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};
