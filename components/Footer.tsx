import React from 'react';
import NextLink from 'next/link';
import { Box, Grid, Text, Flex, Link, Heading } from '@radix-ui/themes';
import { RadixLogo } from './RadixLogo';
import { useRouter } from 'next/router';
import { BoxLink } from './BoxLink';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import styles from './Footer.module.css';

export const Footer = () => {
  const router = useRouter();
  const isColors = router.pathname.includes('/colors');

  return (
    <Grid asChild pb="9" gapX="7" gapY="3" className={styles.Footer}>
      <footer>
        <Flex align="start" direction="column" className={styles.RadixLogo} mb="5">
          <NextLink href={isColors ? '/colors' : '/'} passHref>
            <BoxLink>
              <RadixLogo label={isColors ? 'Radix Colors homepage' : 'Radix homepage'} />
            </BoxLink>
          </NextLink>
          <Box pr="8" mt="5">
            <Heading
              as="h6"
              size="2"
              style={{
                lineHeight: '20px',
                color: 'var(--gray-10)',
                fontWeight: 'inherit',
              }}
            >
              A project by{' '}
              <Link color="gray" href="https://workos.com">
                WorkOS
              </Link>
              .
            </Heading>
          </Box>
        </Flex>
        <Box>
          <Heading as="h6" size="3">
            Products
          </Heading>
          <ul>
            <li>
              <Text as="p" size="2" mt="3">
                <NextLink href="/" passHref>
                  <Link color="gray">Themes</Link>
                </NextLink>
              </Text>
            </li>
            <li>
              <Text as="p" size="2" mt="3">
                <NextLink href="/primitives" passHref>
                  <Link color="gray">Primitives</Link>
                </NextLink>
              </Text>
            </li>
            <li>
              <Text as="p" size="2" mt="3">
                <NextLink href="/colors" passHref>
                  <Link color="gray">Colors</Link>
                </NextLink>
              </Text>
            </li>
            <li>
              <Text as="p" size="2" mt="3">
                <NextLink href="/icons" passHref>
                  <Link color="gray">Icons</Link>
                </NextLink>
              </Text>
            </li>
          </ul>
        </Box>
        {isColors === false && (
          <Box>
            <Heading as="h6" size="3">
              Docs
            </Heading>
            <ul>
              <li>
                <Text as="p" size="2" mt="3">
                  <NextLink href="/primitives/docs/overview/introduction" passHref>
                    <Link color="gray">Introduction</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="2" mt="3">
                  <NextLink href="/primitives/docs/guides/styling" passHref>
                    <Link color="gray">Styling</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="2" mt="3">
                  <NextLink href="/primitives/docs/overview/accessibility" passHref>
                    <Link color="gray">Accessibility</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="2" mt="3">
                  <NextLink href="/primitives/docs/overview/releases" passHref>
                    <Link color="gray">Releases</Link>
                  </NextLink>
                </Text>
              </li>
            </ul>
          </Box>
        )}
        {isColors && (
          <Box>
            <Heading as="h6" size="3">
              Docs
            </Heading>
            <ul>
              <li>
                <Text as="p" size="2" mt="3">
                  <NextLink href="/colors/docs/overview/installation" passHref>
                    <Link color="gray">Installation</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="2" mt="3">
                  <NextLink href="/colors/docs/palette-composition/scales" passHref>
                    <Link color="gray">Scales</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="2" mt="3">
                  <NextLink href="/colors/docs/palette-composition/composing-a-palette" passHref>
                    <Link color="gray">Palette composition</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="2" mt="3">
                  <NextLink
                    href="/colors/docs/palette-composition/understanding-the-scale"
                    passHref
                  >
                    <Link color="gray">Understanding the scale</Link>
                  </NextLink>
                </Text>
              </li>
            </ul>
          </Box>
        )}
        <Box>
          <Heading as="h6" size="3">
            Community
          </Heading>
          <ul>
            <li>
              <Text as="p" size="2" mt="3">
                <Link
                  href="https://github.com/radix-ui"
                  color="gray"
                  target="_blank"
                  style={{ display: 'inline-flex', alignItems: 'center' }}
                >
                  GitHub
                  <Flex asChild ml="2" style={{ color: 'var(--gray-8)' }}>
                    <ArrowTopRightIcon />
                  </Flex>
                </Link>
              </Text>
            </li>
            <li>
              <Text as="p" size="2" mt="3">
                <Link
                  href="https://twitter.com/radix_ui"
                  color="gray"
                  target="_blank"
                  style={{ display: 'inline-flex', alignItems: 'center' }}
                >
                  Twitter
                  <Flex asChild ml="2" style={{ color: 'var(--gray-8)' }}>
                    <ArrowTopRightIcon />
                  </Flex>
                </Link>
              </Text>
            </li>
            <li>
              <Text as="p" size="2" mt="3">
                <Link
                  href="https://discord.com/invite/7Xb99uG"
                  color="gray"
                  target="_blank"
                  style={{ display: 'inline-flex', alignItems: 'center' }}
                >
                  Discord
                  <Flex asChild ml="2" style={{ color: 'var(--gray-8)' }}>
                    <ArrowTopRightIcon />
                  </Flex>
                </Link>
              </Text>
            </li>
          </ul>
        </Box>
      </footer>
    </Grid>
  );
};
