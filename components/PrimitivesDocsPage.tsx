import * as React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Box, Flex, Badge, Text, Link, Container } from '@modulz/design-system';
import { Slot } from '@radix-ui/react-slot';
import { RemoveScroll } from 'react-remove-scroll';
import { PrimitivesDocsHeader } from '@components/PrimitivesDocsHeader';
import { PrimitivesDocsSearch } from '@components/PrimitivesDocsSearch';
import { allPrimitivesRoutes, primitivesRoutes, RouteProps } from '@lib/primitivesRoutes';
import { ScrollArea } from './ScrollArea';
import { NavHeading, NavItem } from './DocsNav';
import { ResourceColors, ResourceIcons, ResourceStitches } from './Resources';

export function PrimitivesDocsPage({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleRouteChange = () => setIsMobileMenuOpen(false);
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => router.events.off('routeChangeComplete', handleRouteChange);
  }, []);

  let currentPageSlug;

  const routerSlug = router.query.slug;

  const GITHUB_URL = 'https://github.com';
  const REPO_NAME = 'radix-ui/website';
  let editUrl: string = '';

  if (typeof routerSlug === 'string') {
    currentPageSlug = router.pathname.substr(1).replace('[slug]', routerSlug);
    editUrl = `${GITHUB_URL}/${REPO_NAME}/edit/main/data/${currentPageSlug}.mdx`;
  } else {
    currentPageSlug = router.pathname.substr(1).replace('[...slug]', routerSlug[0]);
    editUrl = `${GITHUB_URL}/${REPO_NAME}/edit/main/data/${currentPageSlug}/${routerSlug[1]}.mdx`;
  }
  editUrl = editUrl.replace('/docs', '');

  const currentPageIndex = allPrimitivesRoutes.findIndex((page) => page.slug === currentPageSlug);
  const previous = allPrimitivesRoutes[currentPageIndex - 1];
  const next = allPrimitivesRoutes[currentPageIndex + 1];

  return (
    <>
      <Box
        css={{
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
        }}
      >
        <PrimitivesDocsHeader
          onMobileMenuButtonClick={() => setIsMobileMenuOpen((prevOpen) => !prevOpen)}
          isMenuActive={isMobileMenuOpen}
        />
      </Box>

      <Box css={{ pt: '$8', position: 'relative', zIndex: 1 }}>
        <Flex css={{ flexDirection: 'column', '@bp2': { flexDirection: 'row' } }}>
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
                <Box css={{ px: '$2' }}>
                  <Box
                    css={{
                      position: 'sticky',
                      top: 0,
                      px: '$3',
                      backgroundColor: '$loContrast',
                      '@bp2': { display: 'none' },
                    }}
                  >
                    <PrimitivesDocsSearch variant="mobile" onOpenChange={setIsSearchOpen} />
                  </Box>

                  <Box css={{ display: isSearchOpen ? 'none' : undefined, mt: '$4' }}>
                    {primitivesRoutes.map((section: RouteProps) => {
                      const isActiveSection = section.pages
                        .map((page) => page.slug)
                        .includes(currentPageSlug);

                      return (
                        <Box key={section.label} css={{ mb: '$4' }}>
                          <NavHeading data-algolia-lvl0={isActiveSection ? '' : undefined}>
                            {section.label}
                          </NavHeading>
                          {section.pages.map((page) => {
                            const isBeta = page.beta;
                            const isDraft = page.draft;
                            const isDeprecated = page.deprecated;
                            return (
                              <NavItem
                                key={page.slug}
                                href={`/${page.slug}`}
                                disabled={isDraft}
                                active={currentPageSlug === page.slug}
                              >
                                <Text size="2" css={{ color: 'inherit', lineHeight: '1' }}>
                                  {page.title}
                                </Text>
                                {isBeta ? (
                                  <Badge css={{ ml: '$2' }} variant="blue">
                                    Beta
                                  </Badge>
                                ) : null}
                                {isDraft ? <Badge css={{ ml: '$2' }}>Coming soon</Badge> : null}
                                {isDeprecated ? (
                                  <Badge variant="yellow" css={{ ml: '$2' }}>
                                    Deprecated
                                  </Badge>
                                ) : null}
                              </NavItem>
                            );
                          })}
                        </Box>
                      );
                    })}

                    <Box css={{ mt: '$8' }}>
                      <NavHeading>Resources</NavHeading>
                      <Box css={{ px: '$2' }}>
                        <ResourceStitches />
                        <ResourceColors />
                        <ResourceIcons />
                      </Box>
                    </Box>

                    <Box css={{ height: '$5', '@bp2': { height: '$8' } }} />
                  </Box>
                </Box>
              </ScrollArea>
            </Box>
          </RemoveScroll>

          <Box
            css={{
              maxWidth: '100%',
              flex: 1,
              py: '$5',
              zIndex: 0,

              '@bp2': { pt: '$8', pb: '$9', pl: '250px' },
              '@media (min-width: 1440px)': { pr: '250px' },
            }}
          >
            <Container
              size="3"
              css={{ maxWidth: '780px', position: 'relative' }}
              data-algolia-page-scope
            >
              {children}
            </Container>

            <Container size="3" css={{ maxWidth: '780px' }}>
              {(previous || next) && (
                <Flex
                  aria-label="Pagination navigation"
                  css={{
                    justifyContent: 'space-between',
                    my: '$9',
                  }}
                >
                  {previous && (
                    <Box>
                      <NextLink href={`/${previous.slug}`} passHref>
                        <Box
                          as="a"
                          aria-label={`Previous page: ${previous.title}`}
                          css={{
                            color: '$blue11',
                            textDecoration: 'none',
                            alignItems: 'center',
                          }}
                        >
                          <Box css={{ mb: '$2' }}>
                            <Text size="3" css={{ color: '$slate11' }}>
                              Previous
                            </Text>
                          </Box>
                          <Text size="5" css={{ color: 'inherit' }}>
                            {previous.title}
                          </Text>
                        </Box>
                      </NextLink>
                    </Box>
                  )}
                  {next && (
                    <Box css={{ ml: 'auto' }}>
                      <NextLink href={`/${next.slug}`} passHref>
                        <Box
                          as="a"
                          aria-label={`Previous page: ${next.title}`}
                          css={{
                            color: '$blue11',
                            textDecoration: 'none',
                            textAlign: 'right',
                          }}
                        >
                          <Box css={{ mb: '$2' }}>
                            <Text size="3" css={{ color: '$slate11' }}>
                              Next
                            </Text>
                          </Box>
                          <Text size="5" css={{ color: 'inherit' }}>
                            {next.title}
                          </Text>
                        </Box>
                      </NextLink>
                    </Box>
                  )}
                </Flex>
              )}
            </Container>
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
          </Box>
        </Flex>
      </Box>
    </>
  );
}
