import React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Box, Container, Text, Flex, Link, Tooltip, IconButton } from '@modulz/design-system';
import { RadixLogo } from '@components/RadixLogo';
import { ThemeToggle } from '@components/ThemeToggle';
import { BoxLink } from '@components/BoxLink';
import { RemoveScroll } from 'react-remove-scroll';
import { ResourcePrimitives, ResourceStitches, ResourceIcons, ResourcesPopover } from './Resources';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

type ColorsDocsHeaderProps = {
  onMobileMenuButtonClick?: () => void;
  isMenuActive?: boolean;
};

export const ColorsDocsHeader = (props: ColorsDocsHeaderProps) => {
  const { onMobileMenuButtonClick, isMenuActive } = props;
  const router = useRouter();

  return (
    <Box as="header" className={RemoveScroll.classNames.fullWidth}>
      <Container size="4">
        <Flex align="center" justify="between" css={{ height: '$8' }}>
          <NextLink href="/colors" passHref>
            <BoxLink>
              <RadixLogo label="Radix Colors homepage" />
            </BoxLink>
          </NextLink>

          <Flex align="center" gap="5">
            <Box css={{ display: 'none', '@bp2': { display: 'contents' } }}>
              <NextLink href="/docs/colors" passHref>
                <Link variant={router.pathname.includes('/docs/colors') ? 'contrast' : 'subtle'}>
                  <Text>Documentation</Text>
                </Link>
              </NextLink>

              <ResourcesPopover>
                <ResourcePrimitives />
                <ResourceStitches />
                <ResourceIcons />
              </ResourcesPopover>
            </Box>

            <ThemeToggle />

            <Box css={{ '@bp2': { display: 'none' } }}>
              <Tooltip content="Menu">
                <IconButton
                  onClick={onMobileMenuButtonClick}
                  css={{ '@bp2': { display: 'none' } }}
                  state={isMenuActive ? 'active' : undefined}
                >
                  <HamburgerMenuIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
