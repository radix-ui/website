import * as React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Box, Flex, Text, Link } from '@radix-ui/themes';
import { classNames } from '@lib/classNames';
import styles from './DocsPage.module.css';
import { useCurrentPageSlug } from '@lib/useCurrentPageSlug';

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
      mx="auto"
      px={{ initial: '0', md: '5' }}
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
    <Box mx="auto" px={{ initial: '0', md: '5' }} style={{ maxWidth: '780px' }}>
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
    <Box mx="auto" px={{ initial: '0', md: '5' }} my="9" style={{ maxWidth: '780px' }}>
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

export { PageWrapper, ContentWrapper, Pagination, EditPageLink };
