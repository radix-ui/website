import * as React from 'react';
import { AccessibleIcon, Flex, IconButton, Tooltip } from '@radix-ui/themes';
import styles from './Header.module.css';
import { BoxLink } from './BoxLink';
import { ThemeToggle } from './ThemeToggle';
import { GitHubLogoIcon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useMobileMenuContext } from './MobileMenu';
import { classNames } from '@lib/classNames';
import { RadixLogo, RadixLogoIcon } from './RadixLogo';

export interface HeaderProps {
  children?: React.ReactNode;
  gitHubLink?: string;
  ghost?: boolean;
}

type ScrollState = 'at-top' | 'scrolling-up' | 'scrolling-down';

export const Header = ({ children, gitHubLink, ghost }: HeaderProps) => {
  const mobileMenu = useMobileMenuContext();
  const router = useRouter();

  const [scrollState, setScrollState] = React.useState<ScrollState>('at-top');

  React.useEffect(() => {
    let previousScrollY = window.scrollY;

    const handleScroll = () => {
      const direction = previousScrollY < window.scrollY ? 'scrolling-down' : 'scrolling-up';
      const state = window.scrollY < 30 ? 'at-top' : direction;
      previousScrollY = window.scrollY;
      setScrollState(state);
    };

    if (ghost) {
      addEventListener('scroll', handleScroll, { passive: true });
    } else {
      removeEventListener('scroll', handleScroll);
    }

    return () => removeEventListener('scroll', handleScroll);
  }, [ghost]);

  return (
    <div
      data-scroll-state={scrollState}
      data-mobile-menu-open={mobileMenu.open}
      className={classNames(styles.HeaderRoot, ghost ? styles.ghost : '')}
    >
      <div className={styles.HeaderInner}>
        <Flex
          display={{ xs: 'none' }}
          align="center"
          position="absolute"
          top="0"
          bottom="0"
          left="0"
          pl="4"
        >
          <NextLink href="/" passHref>
            <BoxLink>
              <AccessibleIcon label="Radix Homepage">
                {mobileMenu.open ? <RadixLogoIcon /> : <RadixLogo />}
              </AccessibleIcon>
            </BoxLink>
          </NextLink>
        </Flex>

        <Flex
          display={{ initial: 'none', xs: 'flex' }}
          align="center"
          position="absolute"
          top="0"
          bottom="0"
          left="0"
          pl="4"
        >
          <NextLink href="/" passHref>
            <BoxLink>
              <AccessibleIcon label="Radix Homepage">
                <RadixLogo />
              </AccessibleIcon>
            </BoxLink>
          </NextLink>
        </Flex>

        <div className={styles.HeaderProductLinksContainer}>
          <HeaderProductLink
            href="/"
            active={router.pathname === '/' || router.pathname.startsWith('/themes')}
          >
            Themes
          </HeaderProductLink>
          <HeaderProductLink href="/primitives" active={router.pathname.startsWith('/primitives')}>
            Primitives
          </HeaderProductLink>
          <HeaderProductLink href="/icons" active={router.pathname.startsWith('/icons')}>
            Icons
          </HeaderProductLink>
          <HeaderProductLink href="/colors" active={router.pathname.startsWith('/colors')}>
            Colors
          </HeaderProductLink>
        </div>

        <Flex
          display={{ initial: 'none', md: 'flex' }}
          align="center"
          gap="5"
          position="absolute"
          top="0"
          bottom="0"
          right="0"
          pr="4"
        >
          {children}

          {gitHubLink && (
            <Tooltip content="View GitHub ">
              <IconButton asChild size="3" variant="ghost" color="gray">
                <a href={gitHubLink} target="_blank">
                  <GitHubLogoIcon width="16" height="16" />
                </a>
              </IconButton>
            </Tooltip>
          )}

          <ThemeToggle />
        </Flex>

        <Flex
          display={{ md: 'none' }}
          align="center"
          gap="4"
          position="absolute"
          top="0"
          bottom="0"
          right="0"
          pr="4"
        >
          <div className={styles.HeaderThemeToggleContainer}>
            <ThemeToggle />
          </div>

          <Tooltip content="Navigation">
            <IconButton
              size="3"
              variant="ghost"
              color="gray"
              data-state={mobileMenu.open ? 'open' : 'closed'}
              onClick={() => mobileMenu.setOpen((open) => !open)}
              className={styles.MobileMenuButton}
            >
              <HamburgerMenuIcon width="16" height="16" />
            </IconButton>
          </Tooltip>
        </Flex>
      </div>
    </div>
  );
};

const HeaderProductLink = ({
  active,
  children,
  href = '',
  ...props
}: React.ComponentPropsWithoutRef<'a'> & { active?: boolean }) => (
  <NextLink href={href}>
    <a data-state={active ? 'active' : 'inactive'} className={styles.HeaderProductLink} {...props}>
      <span className={styles.HeaderProductLinkInner}>{children}</span>
      <span className={styles.HeaderProductLinkInnerHidden}>{children}</span>
    </a>
  </NextLink>
);
