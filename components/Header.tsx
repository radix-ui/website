import React from 'react';
import NextLink from 'next/link';
import { Box, Container, Grid, Text, Flex, Separator, Link } from '@modulz/design-system';
import { RadixLogo } from './RadixLogo';
import { ExternalIcon } from './ExternalIcon';

export const Header = () => {
  return (
    <Box as="header" css={{ pb: '$3' }}>
      <Container size="4">
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
        </Flex>
      </Container>
    </Box>
  );
};
