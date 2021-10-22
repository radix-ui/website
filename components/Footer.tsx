import React from 'react';
import NextLink from 'next/link';
import { Box, Container, Grid, Text, Flex, Separator, Link } from '@modulz/design-system';
import { RadixLogo } from './RadixLogo';
import { ExternalIcon } from './ExternalIcon';
import { useRouter } from 'next/router';

export const Footer = () => {
  const router = useRouter();
  const isColors = router.pathname.includes('/colors');

  return (
    <Box as="footer" css={{ pb: '$9' }}>
      <Grid
        css={{
          rowGap: '$7',
          columnGap: '$3',
          gridTemplateColumns: 'repeat(2, 1fr)',
          '@bp1': { gridTemplateColumns: 'repeat(3, 1fr)' },
          '@bp2': { gridTemplateColumns: 'repeat(4, 1fr)' },
          '& ul': { listStyle: 'none', margin: '0', padding: '0' },
        }}
      >
        <Flex
          align="start"
          direction="column"
          css={{ gridColumn: '1 / -1', '@bp2': { gridColumn: 'auto' } }}
        >
          <NextLink href="/" passHref>
            <Box
              as="a"
              css={{
                color: '$hiContrast',
                display: 'inline-flex',
                textDecoration: 'none',
                '&:focus': {
                  boxShadow: 'none',
                },
              }}
            >
              <RadixLogo label={isColors ? 'Colors' : 'Radix'} />
            </Box>
          </NextLink>
          <Text
            as="h6"
            size="2"
            css={{
              lineHeight: '20px',
              color: '$gray10',
              pr: '$8',
              mt: '$5',
            }}
          >
            A project by{' '}
            <Link variant="subtle" href="https://modulz.app">
              Modulz
            </Link>
            .
          </Text>
        </Flex>
        <Box>
          <Text as="h6" size="3" css={{ fontWeight: 500, lineHeight: '20px' }}>
            Products
          </Text>
          <ul>
            <li>
              <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                <NextLink href="/" passHref>
                  <Link variant="subtle">Primitives</Link>
                </NextLink>
              </Text>
            </li>
            <li>
              <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                <NextLink href="/colors" passHref>
                  <Link variant="subtle">Colors</Link>
                </NextLink>
              </Text>
            </li>
            <li>
              <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                <Link
                  variant="subtle"
                  href="https://icons.modulz.app/"
                  target="_blank"
                  css={{ display: 'inline-flex', alignItems: 'center' }}
                >
                  Icons
                  <Flex as="span" css={{ ml: '$1', color: '$gray8' }}>
                    <ExternalIcon />
                  </Flex>
                </Link>
              </Text>
            </li>
            <li>
              <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                <Link
                  variant="subtle"
                  href="https://stitches.dev/"
                  target="_blank"
                  css={{ display: 'inline-flex', alignItems: 'center' }}
                >
                  Stitches
                  <Flex as="span" css={{ ml: '$1', color: '$gray8' }}>
                    <ExternalIcon />
                  </Flex>
                </Link>
              </Text>
            </li>
          </ul>
        </Box>
        {isColors === false && (
          <Box>
            <Text as="h6" size="3" css={{ fontWeight: 500, lineHeight: '20px' }}>
              Docs
            </Text>
            <ul>
              <li>
                <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                  <NextLink href="/docs/primitives/overview/introduction" passHref>
                    <Link variant="subtle">Introduction</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                  <NextLink href="/docs/primitives/overview/styling" passHref>
                    <Link variant="subtle">Styling</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                  <NextLink href="/docs/primitives/overview/accessibility" passHref>
                    <Link variant="subtle">Accessibility</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                  <NextLink href="/docs/primitives/overview/releases" passHref>
                    <Link variant="subtle">Releases</Link>
                  </NextLink>
                </Text>
              </li>
            </ul>
          </Box>
        )}
        {isColors && (
          <Box>
            <Text as="h6" size="3" css={{ fontWeight: 500, lineHeight: '20px' }}>
              Docs
            </Text>
            <ul>
              <li>
                <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                  <NextLink href="/docs/colors/getting-started/installation" passHref>
                    <Link variant="subtle">Installation</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                  <NextLink href="/docs/colors/palette-composition/the-scales" passHref>
                    <Link variant="subtle">The scales</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                  <NextLink href="/docs/colors/palette-composition/composing-a-palette" passHref>
                    <Link variant="subtle">Palette composition</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                  <NextLink
                    href="/docs/colors/palette-composition/understanding-the-scale"
                    passHref
                  >
                    <Link variant="subtle">Understanding the scale</Link>
                  </NextLink>
                </Text>
              </li>
            </ul>
          </Box>
        )}
        <Box>
          <Text as="h6" size="3" css={{ fontWeight: 500, lineHeight: '20px' }}>
            Community
          </Text>
          <ul>
            <li>
              <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                <Link
                  href="https://github.com/radix-ui"
                  variant="subtle"
                  target="_blank"
                  css={{ display: 'inline-flex', alignItems: 'center' }}
                >
                  GitHub
                  <Flex as="span" css={{ ml: '$1', color: '$gray8' }}>
                    <ExternalIcon />
                  </Flex>
                </Link>
              </Text>
            </li>
            <li>
              <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                <Link
                  href="https://twitter.com/radix_ui"
                  variant="subtle"
                  target="_blank"
                  css={{ display: 'inline-flex', alignItems: 'center' }}
                >
                  Twitter
                  <Flex as="span" css={{ ml: '$1', color: '$gray8' }}>
                    <ExternalIcon />
                  </Flex>
                </Link>
              </Text>
            </li>
            <li>
              <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                <Link
                  href="https://discord.com/invite/7Xb99uG"
                  variant="subtle"
                  target="_blank"
                  css={{ display: 'inline-flex', alignItems: 'center' }}
                >
                  Discord
                  <Flex as="span" css={{ ml: '$1', color: '$gray8' }}>
                    <ExternalIcon />
                  </Flex>
                </Link>
              </Text>
            </li>
          </ul>
        </Box>
      </Grid>
    </Box>
  );
};
