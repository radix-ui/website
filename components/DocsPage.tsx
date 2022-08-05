import * as React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { RemoveScroll } from 'react-remove-scroll';
import { Box, Flex, Text, Link, Container, styled } from '@modulz/design-system';
import { Slot } from '@radix-ui/react-slot';
import { ScrollArea } from '@components/ScrollArea';

const HeaderWrapper = styled(Box, {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  boxShadow: '0 0 0 1px $colors$mauve5',
  zIndex: 2,
  backgroundColor: '$loContrast',

  '.dark-theme &': {
    backgroundColor: '$mauve1',
  },
});

function MainWrapper(props) {
  return (
    <Box css={{ pt: '$8', position: 'relative', zIndex: 1 }}>
      <Flex css={{ flexDirection: 'row' }} {...props} />
    </Box>
  );
}

function NavWrapper({ children, isMobileMenuOpen }) {
  return (
    <RemoveScroll as={Slot} allowPinchZoom enabled={isMobileMenuOpen}>
      <Box
        css={{
          position: 'fixed',
          top: '$sizes$8',
          left: 0,
          bottom: 0,
          zIndex: 1,

          width: '100%',
          maxHeight: 'auto',

          overflowX: 'hidden',
          WebkitOverflowScrolling: 'touch',

          backgroundColor: '$loContrast',

          display: isMobileMenuOpen ? 'block' : 'none',
          '@bp2': { display: 'block', width: '250px' },
        }}
      >
        <ScrollArea>
          <Box css={{ px: '$2' }}>{children}</Box>
          <Box css={{ height: '$5', '@bp2': { height: '$8' } }} />
        </ScrollArea>
      </Box>
    </RemoveScroll>
  );
}

const PageWrapper = styled(Box, {
  maxWidth: '100%',
  flex: 1,
  py: '$5',
  zIndex: 0,

  '@bp2': { pt: '$8', pb: '$9', pl: '250px' },
  '@media (min-width: 1440px)': { pr: '250px' },
});

function ContentWrapper(props) {
  return <Container size="3" css={{ maxWidth: '780px', position: 'relative' }} {...props} />;
}

function Pagination({ allRoutes }) {
  const currentPageSlug = useCurrentPageSlug();
  const currentPageIndex = allRoutes.findIndex((page) => page.slug === currentPageSlug);
  const previous = allRoutes[currentPageIndex - 1];
  const next = allRoutes[currentPageIndex + 1];

  return (
    <Container size="3" css={{ maxWidth: '780px' }}>
      {(previous || next) && (
        <Flex
          aria-label="Pagination navigation"
          css={{ justifyContent: 'space-between', my: '$9' }}
        >
          {previous && <PaginationLink route={previous} direction="Previous" />}
          {next && (
            <Box css={{ textAlign: 'right' }}>
              <PaginationLink route={next} direction="Next" />
            </Box>
          )}
        </Flex>
      )}
    </Container>
  );
}

function PaginationLink({ route, direction }) {
  return (
    <NextLink href={`/${route.slug}`} passHref>
      <Box
        as="a"
        aria-label={`${direction} page: ${route.title}`}
        css={{ color: '$blue11', textDecoration: 'none' }}
      >
        <Box css={{ mb: '$2' }}>
          <Text size="3" css={{ color: '$slate11' }}>
            {direction}
          </Text>
        </Box>
        <Text size="5" css={{ color: 'inherit' }}>
          {route.title}
        </Text>
      </Box>
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
    <Container size="3" css={{ maxWidth: '780px', my: '$9' }}>
      <Text size="3">
        <Link
          href={editUrl}
          title="Edit this page on GitHub."
          rel="noopener noreferrer"
          target="_blank"
          variant="subtle"
        >
          Edit this page on GitHub.
        </Link>
      </Text>
    </Container>
  );
}

function useCurrentPageSlug() {
  return useRouter().asPath.substring(1).split('#')[0];
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
