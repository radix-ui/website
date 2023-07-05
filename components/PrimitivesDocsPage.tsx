import * as React from 'react';
import { useRouter } from 'next/router';
import { Box, Badge } from '@radix-ui/themes';
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
import { allPrimitivesRoutes, primitivesRoutes, RouteProps } from '@lib/primitivesRoutes';
import { NavHeading, NavItem, NavItemTitle } from './DocsNav';
import { ResourceColors, ResourceIcons } from './Resources';

export function PrimitivesDocsPage({ children }: { children: React.ReactNode }) {
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
    <>
      <HeaderWrapper>
        <PrimitivesDocsHeader
          onMobileMenuButtonClick={() => setIsMobileMenuOpen((prevOpen) => !prevOpen)}
          isMenuActive={isMobileMenuOpen}
        />
      </HeaderWrapper>

      <MainWrapper>
        <NavWrapper isMobileMenuOpen={isMobileMenuOpen}>
          <Box
            position="sticky"
            top="0"
            display={{ sm: 'none' }}
            px="3"
            style={{
              backgroundColor: 'var(--color-background)',
            }}
          >
            <PrimitivesDocsSearch
              variant="mobile"
              onOpenChange={setIsSearchOpen}
              onSelect={() => setIsMobileMenuOpen(false)}
            />
          </Box>

          <Box mt="4" style={{ display: isSearchOpen ? 'none' : undefined }}>
            {primitivesRoutes.map((section: RouteProps) => (
              <Box key={section.label} mb="4">
                <NavHeading>{section.label}</NavHeading>

                {section.pages.map((page) => (
                  <NavItem
                    key={page.slug}
                    href={`/${page.slug}`}
                    active={currentPageSlug === page.slug}
                  >
                    <NavItemTitle>{page.title}</NavItemTitle>
                    {page.preview && (
                      <Badge color="blue" ml="2">
                        Preview
                      </Badge>
                    )}
                    {page.deprecated && (
                      <Badge color="yellow" ml="2">
                        Deprecated
                      </Badge>
                    )}
                  </NavItem>
                ))}
              </Box>
            ))}

            <Box mt="9">
              <NavHeading>Resources</NavHeading>
              <Box px="2">
                <ResourceColors />
                <ResourceIcons />
              </Box>
            </Box>
          </Box>
        </NavWrapper>

        <PageWrapper>
          <ContentWrapper data-algolia-page-scope>{children}</ContentWrapper>
          <Pagination allRoutes={allPrimitivesRoutes} />
          <EditPageLink />
        </PageWrapper>
      </MainWrapper>
    </>
  );
}
