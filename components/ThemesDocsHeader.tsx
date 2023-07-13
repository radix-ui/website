import React from 'react';
import NextLink from 'next/link';
import { Box, Flex, IconButton, Tooltip } from '@radix-ui/themes';
import { RadixLogo } from '@components/RadixLogo';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { ThemeToggle } from '@components/ThemeToggle';
import { BoxLink } from '@components/BoxLink';
import { RemoveScroll } from 'react-remove-scroll';
import { classNames } from '@lib/classNames';
import styles from './ThemesDocsHeader.module.css';

type PrimitivesDocsHeaderProps = {
  onMobileMenuButtonClick?: () => void;
  isMenuActive?: boolean;
};

export const ThemesDocsHeader = (props: PrimitivesDocsHeaderProps) => {
  const { onMobileMenuButtonClick, isMenuActive } = props;
  return (
    <Box
      asChild
      className={classNames(RemoveScroll.classNames.fullWidth, styles.Header)}
      position="relative"
    >
      <header>
        <Box mx="auto" px="5" style={{ maxWidth: '780px' }}>
          <Flex align="center" justify="between" height="9">
            <NextLink href="/" passHref>
              <BoxLink style={{ position: 'absolute', left: 'var(--space-5)' }}>
                <RadixLogo label="Radix homepage" />
              </BoxLink>
            </NextLink>

            <Box display={{ initial: 'none', md: 'block' }} width="100%">
              {/* <PrimitivesDocsSearch /> */}
            </Box>

            <Flex style={{ position: 'absolute', right: 'var(--space-5)', gap: 'var(--space-2)' }}>
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
    </Box>
  );
};
