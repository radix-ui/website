import * as React from 'react';
import { useRouter } from 'next/router';
import { Box, Badge } from '@modulz/design-system';
import {
  HeaderWrapper,
  MainWrapper,
  NavWrapper,
  PageWrapper,
  ContentWrapper,
  Pagination,
  EditPageLink,
  useCurrentPageSlug,
} from '@components/DocsPage';
import { PrimitivesDocsHeader } from '@components/PrimitivesDocsHeader';
import { PrimitivesDocsSearch } from '@components/PrimitivesDocsSearch';
import { NavHeading, NavItem, NavItemTitle } from './DocsNav';
// import { ResourceColors, ResourceIcons, ResourceStitches } from './Resources';
import { RouteProps, allThemesRoutes, themesRoutes } from '@lib/themesRoutes';
import { Provider } from '@radix-ui/themes';

export function ThemesDocsPage({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const currentPageSlug = useCurrentPageSlug();
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleRouteChange = () => setIsMobileMenuOpen(false);
    router.events.on('routeChangeStart', handleRouteChange);
    return () => router.events.off('routeChangeStart', handleRouteChange);
  }, []);

  return (
    <Provider>
      <HeaderWrapper>
        <PrimitivesDocsHeader
          onMobileMenuButtonClick={() => setIsMobileMenuOpen((prevOpen) => !prevOpen)}
          isMenuActive={isMobileMenuOpen}
        />
      </HeaderWrapper>

      <MainWrapper>
        <NavWrapper isMobileMenuOpen={isMobileMenuOpen}>
          <Box
            css={{
              position: 'sticky',
              top: 0,
              px: '$3',
              backgroundColor: '$loContrast',
              '@bp2': { display: 'none' },
            }}
          >
            <PrimitivesDocsSearch
              variant="mobile"
              onOpenChange={setIsSearchOpen}
              onSelect={() => setIsMobileMenuOpen(false)}
            />
          </Box>

          <Box css={{ display: isSearchOpen ? 'none' : undefined, mt: '$4' }}>
            {themesRoutes.map((section: RouteProps) => (
              <Box key={section.label} css={{ mb: '$4' }}>
                <NavHeading>{section.label}</NavHeading>

                {section.pages.map((page) => (
                  <NavItem
                    key={page.slug}
                    href={`/${page.slug}`}
                    active={currentPageSlug === page.slug}
                  >
                    <NavItemTitle>{page.title}</NavItemTitle>
                    {page.preview && (
                      <Badge variant="blue" css={{ ml: '$2' }}>
                        Preview
                      </Badge>
                    )}
                    {page.deprecated && (
                      <Badge variant="yellow" css={{ ml: '$2' }}>
                        Deprecated
                      </Badge>
                    )}
                  </NavItem>
                ))}
              </Box>
            ))}

            {/* <Box css={{ mt: '$8' }}>
              <NavHeading>Resources</NavHeading>
              <Box css={{ px: '$2' }}>
                <ResourceStitches />
                <ResourceColors />
                <ResourceIcons />
              </Box>
            </Box> */}
          </Box>
        </NavWrapper>

        <PageWrapper>
          <ContentWrapper data-algolia-page-scope>{children}</ContentWrapper>
          <Pagination allRoutes={allThemesRoutes} />
          <EditPageLink />
        </PageWrapper>
      </MainWrapper>
    </Provider>
  );
}
