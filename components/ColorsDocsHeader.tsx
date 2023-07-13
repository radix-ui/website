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
import styles from './ColorsDocsHeader.module.css';

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

          <Flex align="center" gap="4">
            <Flex gap="4" display={{ initial: 'none', sm: 'flex' }} align="center">
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

            <Tooltip content="Menu">
              <IconButton
                size="3"
                variant="ghost"
                color={isMenuActive ? undefined : 'gray'}
                data-state={isMenuActive ? 'open' : 'closed'}
                onClick={onMobileMenuButtonClick}
                className={styles.MobileMenuButton}
              >
                <HamburgerMenuIcon />
              </IconButton>
            </Tooltip>
          </Flex>
        </Flex>
      </Box>
    </header>
  );
};
