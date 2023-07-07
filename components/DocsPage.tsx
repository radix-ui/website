import * as React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { RemoveScroll } from 'react-remove-scroll';
import { Box, Flex, Text, Link, ScrollArea } from '@radix-ui/themes';
import { Slot } from '@radix-ui/react-slot';
import { classNames } from '@lib/classNames';
import styles from './DocsPage.module.css';

function MainWrapper(props) {
  return (
    <Box pt="9" position="relative" style={{ zIndex: 1 }}>
      <Flex {...props} />
    </Box>
  );
}

function NavWrapper({ children, isMobileMenuOpen }) {
  const [isMobileLayout, setIsMobileLayout] = React.useState(false);

  React.useEffect(() => {
    // Match @bp2
    const mediaQueryList = window.matchMedia('(min-width: 768px)');

    const handleChange = () => setIsMobileLayout(!mediaQueryList.matches);
    handleChange();

    mediaQueryList.addEventListener('change', handleChange);
    return () => mediaQueryList.removeEventListener('change', handleChange);
  }, []);

  return (
    <RemoveScroll as={Slot} allowPinchZoom enabled={isMobileLayout && isMobileMenuOpen}>
      <Box
        position="fixed"
        left="0"
        bottom="0"
        style={{
          top: 'var(--space-9)',
          zIndex: 1,
          maxHeight: 'auto',
          overflowX: 'hidden',
          WebkitOverflowScrolling: 'touch',
          backgroundColor: isMobileMenuOpen
            ? 'var(--color-background, $loContrast)'
            : 'transparent',
          display: isMobileMenuOpen ? 'block' : undefined,
          width: isMobileMenuOpen ? '100%' : '250px',
        }}
        display={{ initial: 'none', sm: 'block' }}
      >
        <ScrollArea>
          <Box px="2">{children}</Box>
          <Box height={{ initial: '5', sm: '9' }} />
        </ScrollArea>
      </Box>
    </RemoveScroll>
  );
}

interface PageWrapperProps extends React.ComponentProps<typeof Box> {}

const PageWrapper = React.forwardRef<HTMLDivElement, PageWrapperProps>(function DocsPage(
  { className, ...props },
  forwardedRef
) {
  return (
    <div ref={forwardedRef} {...props} className={classNames(className, styles.PageWrapper)} />
  );
});

function ContentWrapper({ children, ...props }) {
  return (
    <Box
      position="relative"
      px={{ initial: '5', md: '0' }}
      mx="auto"
      style={{ maxWidth: '780px' }}
      {...props}
    >
      {children}
    </Box>
  );
}

function Pagination({ allRoutes }) {
  const currentPageSlug = useCurrentPageSlug();
  const currentPageIndex = allRoutes.findIndex((page) => page.slug === currentPageSlug);
  const previous = allRoutes[currentPageIndex - 1];
  const next = allRoutes[currentPageIndex + 1];

  return (
    <Box mx="auto" px={{ initial: '5', md: '0' }} style={{ maxWidth: '780px' }}>
      {(previous || next) && (
        <Flex aria-label="Pagination navigation" justify="between" my="9">
          {previous && <PaginationLink route={previous} direction="Previous" />}
          {next && (
            <Box style={{ textAlign: 'right', flexGrow: 1 }}>
              <PaginationLink route={next} direction="Next" />
            </Box>
          )}
        </Flex>
      )}
    </Box>
  );
}

interface HeaderWrapperProps extends React.ComponentPropsWithoutRef<typeof Box> {}

const HeaderWrapper = React.forwardRef<HTMLDivElement, HeaderWrapperProps>(function DocsPage(
  { children, className, ...props },
  forwardedRef
) {
  return (
    <Box ref={forwardedRef} {...props} className={classNames(className, styles.HeaderWrapper)}>
      {children}
    </Box>
  );
});

function PaginationLink({ route, direction }) {
  return (
    <NextLink href={`/${route.slug}`} passHref>
      <Flex
        asChild
        display="inline-flex"
        direction="column"
        gap="1"
        aria-label={`${direction} page: ${route.title}`}
        style={{ color: 'var(--accent-11, $blue11)', textDecoration: 'none' }}
      >
        <a>
          <Text size="2" style={{ color: 'var(--gray-11)' }}>
            {direction}
          </Text>
          <Text size="4">{route.title}</Text>
        </a>
      </Flex>
    </NextLink>
  );
}

const DATA_FOLDER_PATH = 'https://github.com/radix-ui/website/edit/main/data';

function EditPageLink() {
  const router = useRouter();
  const routerSlug = router.query.slug;
  let filePath = `${DATA_FOLDER_PATH}/${router.pathname.replace('/docs/', '')}`;
  if (Array.isArray(routerSlug)) {
    filePath = filePath.replace('[...slug]', routerSlug.join('/'));
  } else {
    filePath = filePath.replace('[slug]', routerSlug);
  }
  const editUrl = `${filePath}.mdx`;

  return (
    <Box mx="auto" px={{ initial: '5', md: '0' }} my="9" style={{ maxWidth: '780px' }}>
      <Text size="3">
        <Link
          href={editUrl}
          title="Edit this page on GitHub."
          rel="noopener noreferrer"
          target="_blank"
          color="gray"
          size="2"
        >
          Edit this page on GitHub.
        </Link>
      </Text>
    </Box>
  );
}

function useCurrentPageSlug() {
  const router = useRouter();
  const routerSlug = router.query.slug;
  let currentPageSlug = router.pathname.substring(1);
  if (Array.isArray(routerSlug)) {
    return currentPageSlug.replace('[...slug]', routerSlug[0]);
  }
  return currentPageSlug.replace('[slug]', routerSlug);
}

export {
  HeaderWrapper,
  MainWrapper,
  NavWrapper,
  PageWrapper,
  ContentWrapper,
  Pagination,
  EditPageLink,
  useCurrentPageSlug,
};
