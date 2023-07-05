import React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Box, Flex, Link } from '@radix-ui/themes';
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
    <Box asChild px="5">
      <header className={RemoveScroll.classNames.fullWidth}>
        <Flex align="center" justify="between" height="9">
          <NextLink href={rootPath} passHref>
            <BoxLink>
              <RadixLogo label={isColors ? 'Radix Colors homepage' : 'Radix homepage'} />
            </BoxLink>
          </NextLink>

          <Flex align="center" gap="5">
            <Flex gap="5" display={{ initial: 'none', sm: 'flex' }} align="center">
              <NextLink href={docsPath} passHref>
                <Link highContrast={router.pathname.includes(docsPath)} size="2" color="gray">
                  Documentation
                </Link>
              </NextLink>

              {!isColors && (
                <NextLink href="/case-studies" passHref>
                  <Link
                    highContrast={router.pathname.includes('/case-studies')}
                    color="gray"
                    size="2"
                  >
                    Case studies
                  </Link>
                </NextLink>
              )}
            </Flex>

            <ResourcesPopover>
              {isColors && <ResourcePrimitives />}
              {isColors === false && <ResourceColors />}
              <ResourceIcons />
            </ResourcesPopover>

            <ThemeToggle />
          </Flex>
        </Flex>
      </header>
    </Box>
  );
};
