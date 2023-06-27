import React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Box, Container, Text, Flex, Link, DesignSystemProvider } from '@modulz/design-system';

import { ThemeToggle } from '@components/ThemeToggle';
import { BoxLink } from '@components/BoxLink';
import { RemoveScroll } from 'react-remove-scroll';
import { ResourcePrimitives, ResourceColors, ResourceIcons, ResourcesPopover } from './Resources';
import { RadixLogoIcon } from './RadixLogoIcon';

export const ThemesHeader = () => {
  const router = useRouter();

  return (
    <DesignSystemProvider>
      <Box
        as="header"
        className={RemoveScroll.classNames.fullWidth}
        css={{
          zIndex: 1,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          backdropFilter: 'blur(6px)',
          overflow: 'hidden',
          background: '$whiteA12',
          boxShadow: '0 1px $colors$mauveA3 ',
          '.dark-theme &': {
            background: 'rgba(24, 20, 23, 0.8)',
          },
        }}
      >
        <Container size="4">
          <Flex align="center" justify="between" css={{ height: '$8' }}>
            <NextLink href="/themes" passHref>
              <BoxLink>
                <Flex align="center">
                  <RadixLogoIcon style={{ marginRight: 3 }} />
                  <Text style={{ fontWeight: 500, fontSize: 22, letterSpacing: '-0.06em' }}>
                    Radix Themes
                  </Text>
                </Flex>
              </BoxLink>
            </NextLink>

            <Flex align="center" gap={{ '@initial': '4', '@bp2': '5' }}>
              <Box css={{ display: 'none', '@bp1': { display: 'contents' } }}>
                <NextLink href="/docs/themes" passHref>
                  <Link variant={router.pathname.includes('/docs/themes') ? 'contrast' : 'subtle'}>
                    <Text>Documentation</Text>
                  </Link>
                </NextLink>
              </Box>

              <ResourcesPopover>
                <ResourcePrimitives />
                <ResourceColors />
                <ResourceIcons />
              </ResourcesPopover>

              <ThemeToggle />
            </Flex>
          </Flex>
        </Container>
      </Box>
    </DesignSystemProvider>
  );
};
