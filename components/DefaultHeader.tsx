import React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Box, Container, Text, Flex, Link } from '@modulz/design-system';
import { RadixLogo } from '@components/RadixLogo';
import { ThemeToggle } from '@components/ThemeToggle';
import { BoxLink } from '@components/BoxLink';
import { RemoveScroll } from 'react-remove-scroll';
import { ResourcePrimitives, ResourceColors, ResourceIcons, ResourcesPopover } from './Resources';

export const DefaultHeader = () => {
  const router = useRouter();
  const isColors = router.pathname.includes('/colors') || router.pathname.includes('/docs/colors');
  const rootPath = isColors ? '/colors' : '/';
  const docsPath = `/docs/${isColors ? 'colors' : 'primitives'}`;

  return (
    <Box as="header" className={RemoveScroll.classNames.fullWidth}>
      <Container size="4">
        <Flex align="center" justify="between" css={{ height: '$8' }}>
          <NextLink href={rootPath} passHref>
            <BoxLink>
              <RadixLogo label={isColors ? 'Radix Colors homepage' : 'Radix homepage'} />
            </BoxLink>
          </NextLink>

          <Flex align="center" gap={{ '@initial': '4', '@bp2': '5' }}>
            <Box css={{ display: 'none', '@bp1': { display: 'contents' } }}>
              <NextLink href={docsPath} passHref>
                <Link variant={router.pathname.includes(docsPath) ? 'contrast' : 'subtle'}>
                  <Text>Documentation</Text>
                </Link>
              </NextLink>

              {!isColors && (
                <NextLink href="/case-studies" passHref>
                  <Link variant={router.pathname.includes('/case-studies') ? 'contrast' : 'subtle'}>
                    <Text>Case studies</Text>
                  </Link>
                </NextLink>
              )}
            </Box>

            <ResourcesPopover>
              {isColors && <ResourcePrimitives />}
              {isColors === false && <ResourceColors />}
              <ResourceIcons />
            </ResourcesPopover>

            <ThemeToggle />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
