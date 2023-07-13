import React from 'react';
import NextLink from 'next/link';
import { Box, Flex, IconButton, Tooltip } from '@radix-ui/themes';
import { RadixLogo } from '@components/RadixLogo';
import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import { ThemeToggle } from '@components/ThemeToggle';
import { BoxLink } from '@components/BoxLink';
import { RemoveScroll } from 'react-remove-scroll';
import { PrimitivesDocsSearch } from '@components/PrimitivesDocsSearch';
import { classNames } from '@lib/classNames';
import styles from './PrimitiveDocsHeader.module.css';

type PrimitivesDocsHeaderProps = {
  onMobileMenuButtonClick?: () => void;
  isMenuActive?: boolean;
};

export const PrimitivesDocsHeader = (props: PrimitivesDocsHeaderProps) => {
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

            <Box className={styles.SearchWrapper} width="100%">
              <PrimitivesDocsSearch />
            </Box>

            <Flex align="center" gap="4" position="absolute" right="0" mr="5">
              <ThemeToggle />

              <Tooltip content="Menu">
                <IconButton
                  size="3"
                  color="gray"
                  variant="ghost"
                  onClick={onMobileMenuButtonClick}
                  className={styles.MobileMenuButton}
                >
                  {isMenuActive ? <Cross1Icon /> : <HamburgerMenuIcon />}
                </IconButton>
              </Tooltip>
            </Flex>
          </Flex>
        </Box>
      </header>
    </Box>
  );
};
