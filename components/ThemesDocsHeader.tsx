import React from 'react';
import NextLink from 'next/link';
import { Box, Container, Flex, IconButton, Tooltip } from '@modulz/design-system';
import { RadixLogo } from '@components/RadixLogo';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { ThemeToggle } from '@components/ThemeToggle';
import { BoxLink } from '@components/BoxLink';
import { RemoveScroll } from 'react-remove-scroll';
import { PrimitivesDocsSearch } from '@components/PrimitivesDocsSearch';

type PrimitivesDocsHeaderProps = {
  onMobileMenuButtonClick?: () => void;
  isMenuActive?: boolean;
};

export const ThemesDocsHeader = (props: PrimitivesDocsHeaderProps) => {
  const { onMobileMenuButtonClick, isMenuActive } = props;
  return (
    <Box
      as="header"
      className={RemoveScroll.classNames.fullWidth}
      css={{
        position: 'relative',
        '@bp2': { pl: '250px' },
        '@media (min-width: 1440px)': { pr: '250px' },
      }}
    >
      <Container size="3" css={{ maxWidth: '780px' }}>
        <Flex align="center" justify="between" css={{ height: '$8' }}>
          <NextLink href="/" passHref>
            <BoxLink css={{ position: 'absolute', left: '$5' }}>
              <RadixLogo label="Radix homepage" />
            </BoxLink>
          </NextLink>

          <Flex css={{ position: 'absolute', right: '$5', gap: '$2' }}>
            <ThemeToggle />
            <Tooltip content="Menu">
              <IconButton
                onClick={onMobileMenuButtonClick}
                css={{ '@bp2': { display: 'none' } }}
                state={isMenuActive ? 'active' : undefined}
              >
                <HamburgerMenuIcon />
              </IconButton>
            </Tooltip>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
