import * as React from 'react';
import { Flex, IconButton, Tooltip } from '@radix-ui/themes';
import styles from './Header.module.css';
import { BoxLink } from './BoxLink';
import { ThemeToggle } from './ThemeToggle';
import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useMobileMenuContext } from './MobileMenu';
import { classNames } from '@lib/classNames';
import Head from 'next/head';

export interface HeaderProps {
  children?: React.ReactNode;
  ghost?: boolean;
}

type ScrollState = 'at-top' | 'scrolling-up' | 'scrolling-down';

export const Header = ({ children, ghost }: HeaderProps) => {
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
    <>
      <Head>
        <style>
          {`
            .radix-themes {
              --header-height: var(--space-8);
            }
          `}
        </style>
      </Head>
      <div
        data-scroll-state={scrollState}
        className={classNames(styles.HeaderRoot, ghost ? styles.ghost : '')}
      >
        <div className={styles.HeaderInner}>
          <Flex align="center" position="absolute" top="0" bottom="0" left="0" pl="4">
            <BoxLink href="/">
              <RadixLogo />
            </BoxLink>
          </Flex>

          <Flex
            display={{ initial: 'none', xs: 'flex' }}
            align="center"
            justify="center"
            position="absolute"
            top="0"
            bottom="0"
            style={{ width: 320, left: 'calc(50% - 160px)' }}
          >
            <HeaderProductLink
              href="/themes"
              active={
                router.pathname === '/themes' ||
                router.pathname.startsWith('/themes/') ||
                router.pathname.startsWith('/docs/themes')
              }
            >
              Themes
            </HeaderProductLink>

            <HeaderProductLink
              href="/primitives"
              active={
                router.pathname === '/' ||
                router.pathname === '/primitives' ||
                router.pathname.startsWith('/primitives/') ||
                router.pathname.startsWith('/docs/primitives')
              }
            >
              Primitives
            </HeaderProductLink>

            <HeaderProductLink href="/icons" active={router.pathname === '/icons'}>
              Icons
            </HeaderProductLink>

            <HeaderProductLink
              href="/colors"
              active={
                router.pathname === '/colors' ||
                router.pathname.startsWith('/colors/') ||
                router.pathname.startsWith('/docs/colors')
              }
            >
              Colors
            </HeaderProductLink>
          </Flex>

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
            <ThemeToggle />

            <Tooltip content="Menu">
              <IconButton
                size="3"
                variant="ghost"
                color="gray"
                data-state={mobileMenu.open ? 'open' : 'closed'}
                onClick={() => mobileMenu.setOpen((open) => !open)}
                className={styles.MobileMenuButton}
              >
                {mobileMenu.open ? (
                  <Cross1Icon width="16" height="16" />
                ) : (
                  <HamburgerMenuIcon width="16" height="16" />
                )}
              </IconButton>
            </Tooltip>
          </Flex>
        </div>
      </div>
    </>
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

const RadixLogo = () => (
  <svg
    width="76"
    height="24"
    viewBox="0 0 76 24"
    fill="currentcolor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M43.9022 20.0061H46.4499C46.2647 19.0375 46.17 18.1161 46.17 17.0058V12.3753C46.17 9.25687 44.3893 7.72127 41.1943 7.72127C38.3003 7.72127 36.3324 9.23324 36.0777 11.8083H38.9254C39.0181 10.698 39.8052 9.96561 41.1017 9.96561C42.4446 9.96561 43.3243 10.6743 43.3243 12.1391V12.7061L39.8052 13.1077C37.4206 13.3912 35.5684 14.3834 35.5684 16.7931C35.5684 18.9666 37.2353 20.2659 39.5274 20.2659C41.4027 20.2659 42.9845 19.4863 43.6401 18.1161C43.6689 18.937 43.9022 20.0061 43.9022 20.0061ZM40.3377 18.1634C39.157 18.1634 38.5087 17.5727 38.5087 16.6278C38.5087 15.3757 39.4579 15.0922 40.7082 14.9268L43.3243 14.6197V15.352C43.3243 17.242 41.8658 18.1634 40.3377 18.1634ZM56.2588 20.0061H59.176V3H56.2125V9.96561C55.6569 8.76075 54.3141 7.72127 52.4851 7.72127C49.3058 7.72127 47.099 10.2963 47.099 14.0054C47.099 17.7381 49.3058 20.2896 52.4851 20.2896C54.2678 20.2896 55.68 19.2973 56.2588 18.0925V20.0061ZM56.282 14.218C56.282 16.5569 55.1938 18.0689 53.3185 18.0689C51.3969 18.0689 50.1856 16.486 50.1856 14.0054C50.1856 11.5485 51.3969 9.94198 53.3185 9.94198C55.1938 9.94198 56.282 11.454 56.282 13.7928V14.218ZM60.9066 5.97304H64.0553V3.01996H60.9066V5.97304ZM60.9992 20.0061H63.9627V8.00476H60.9992V20.0061ZM67.6638 20.0061L70.6041 15.8954L73.5212 20.0061H76.9246L72.3636 13.7219L76.5542 8.00476H73.3823L70.7661 11.7138L68.1731 8.00476H64.7697L69.0066 13.8637L64.4919 20.0061H67.6638Z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.9132 20V14.0168H28.7986L32.4513 20H35.7006L31.6894 13.5686C33.5045 12.986 35.0955 11.507 35.0955 9.01961C35.0955 5.7479 32.7994 4 28.9571 4H22V20H24.9132ZM24.9132 6.35294V11.6863H28.821C31.0395 11.6863 32.1599 10.7675 32.1599 9.01961C32.1599 7.27171 30.9395 6.35294 28.621 6.35294H24.9132Z"
    />
    <path d="M7 23C3.13401 23 0 19.6422 0 15.5C0 11.3578 3.13401 8 7 8V23Z" />
    <path d="M7 0H0V7H7V0Z" />
    <path d="M11.5 7C13.433 7 15 5.433 15 3.5C15 1.567 13.433 0 11.5 0C9.56704 0 8 1.567 8 3.5C8 5.433 9.56704 7 11.5 7Z" />
  </svg>
);
