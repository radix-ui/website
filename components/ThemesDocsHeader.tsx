import React from 'react';
import NextLink from 'next/link';
import { Box, Flex, IconButton, Tooltip } from '@radix-ui/themes';
import { RadixLogo } from '@components/RadixLogo';
import { Cross1Icon, HamburgerMenuIcon, MixerHorizontalIcon } from '@radix-ui/react-icons';
import { ThemeToggle } from '@components/ThemeToggle';
import { BoxLink } from '@components/BoxLink';
import { RemoveScroll } from 'react-remove-scroll';
import { classNames } from '@lib/classNames';
import { ThemesPanelContext } from '@components/ThemesPanel';
import styles from './ThemesDocsHeader.module.css';

type PrimitivesDocsHeaderProps = {
  onMobileMenuButtonClick?: () => void;
  isMenuActive?: boolean;
};

export const ThemesDocsHeader = (props: PrimitivesDocsHeaderProps) => {
  const { onMobileMenuButtonClick, isMenuActive } = props;
  const { open, onOpenChange } = React.useContext(ThemesPanelContext);
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

            <Flex align="center" gap="4" position="absolute" right="0" mr="5">
              <Tooltip content="Tweak theme">
                <IconButton
                  size="3"
                  onClick={() => onOpenChange(!open)}
                  variant="ghost"
                  color={open ? undefined : 'gray'}
                  data-state={open ? 'open' : 'closed'}
                >
                  <MixerHorizontalIcon />
                </IconButton>
              </Tooltip>

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
    </Box>
  );
};
