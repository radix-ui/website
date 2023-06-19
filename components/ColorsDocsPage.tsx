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
import { ColorsDocsHeader } from '@components/ColorsDocsHeader';
//
import { allColorsRoutes, colorsRoutes } from '@lib/colorsRoutes';
import { NavHeading, NavItem, NavItemTitle } from './DocsNav';
import { ResourceIcons, ResourcePrimitives } from './Resources';

export function ColorsDocsPage({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const currentPageSlug = useCurrentPageSlug();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleRouteChange = () => setIsMobileMenuOpen(false);
    router.events.on('routeChangeStart', handleRouteChange);
    return () => router.events.off('routeChangeStart', handleRouteChange);
  }, []);

  return (
    <>
      <HeaderWrapper>
        <ColorsDocsHeader
          onMobileMenuButtonClick={() => setIsMobileMenuOpen((prevOpen) => !prevOpen)}
          isMenuActive={isMobileMenuOpen}
        />
      </HeaderWrapper>

      <MainWrapper>
        <NavWrapper isMobileMenuOpen={isMobileMenuOpen}>
          <Box css={{ mt: '$4' }}>
            {colorsRoutes.map((section) => (
              <Box key={section.label} css={{ mb: '$4' }}>
                <NavHeading>{section.label}</NavHeading>

                {section.pages.map((page) => (
                  <NavItem
                    key={page.slug}
                    href={`/${page.slug}`}
                    disabled={page.draft}
                    active={currentPageSlug === page.slug}
                  >
                    <NavItemTitle>{page.title}</NavItemTitle>
                    {page.draft && <Badge css={{ ml: '$2' }}>Coming soon</Badge>}
                  </NavItem>
                ))}
              </Box>
            ))}

            <Box css={{ mt: '$8', '@bp2': { display: 'none' } }}>
              <NavHeading>Resources</NavHeading>
              <Box css={{ px: '$2' }}>
                <ResourcePrimitives />
                <ResourceIcons />
              </Box>
            </Box>
          </Box>
        </NavWrapper>

        <PageWrapper>
          <ContentWrapper>{children}</ContentWrapper>
          <Pagination allRoutes={allColorsRoutes} />
          <EditPageLink />
        </PageWrapper>
      </MainWrapper>
    </>
  );
}
