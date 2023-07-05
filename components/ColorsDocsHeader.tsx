import React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Box, Text, Flex, Link, Tooltip, IconButton, Container } from '@radix-ui/themes';
import { RadixLogo } from '@components/RadixLogo';
import { ThemeToggle } from '@components/ThemeToggle';
import { BoxLink } from '@components/BoxLink';
import { RemoveScroll } from 'react-remove-scroll';
import { ResourcePrimitives, ResourceIcons, ResourcesPopover } from './Resources';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

type ColorsDocsHeaderProps = {
  onMobileMenuButtonClick?: () => void;
  isMenuActive?: boolean;
};

export const ColorsDocsHeader = (props: ColorsDocsHeaderProps) => {
  const { onMobileMenuButtonClick, isMenuActive } = props;
  const router = useRouter();

  return (
    <header className={RemoveScroll.classNames.fullWidth}>
      <Box mx="auto" px="5">
        <Flex align="center" justify="between" height="9">
          <NextLink href="/colors" passHref>
            <BoxLink>
              <RadixLogo label="Radix Colors homepage" />
            </BoxLink>
          </NextLink>

          <Flex align="center" gap="5">
            <Flex gap="5" display={{ initial: 'none', sm: 'flex' }} align="center">
              <NextLink href="/docs/colors" passHref>
                <Link color="gray" size="2" highContrast={router.pathname.includes('/docs/colors')}>
                  Documentation
                </Link>
              </NextLink>

              <ResourcesPopover>
                <ResourcePrimitives />
                <ResourceIcons />
              </ResourcesPopover>
            </Flex>

            <ThemeToggle />

            <Box display={{ sm: 'none' }}>
              <Tooltip content="Menu">
                <IconButton
                  size="1"
                  color="gray"
                  variant={isMenuActive ? 'soft' : 'ghost'}
                  onClick={onMobileMenuButtonClick}
                >
                  <HamburgerMenuIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </header>
  );
};
