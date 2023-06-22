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
import { NavHeading, NavItem, NavItemTitle } from './DocsNav';
// import { ResourceColors, ResourceIcons, ResourceStitches } from './Resources';
import { RouteProps, allThemesRoutes, themesRoutes } from '@lib/themesRoutes';
import { Provider } from '@radix-ui/themes';
import { ThemesDocsHeader } from './ThemesDocsHeader';

export function ThemesDocsPage({ children }: { children: React.ReactNode }) {
  const currentPageSlug = useCurrentPageSlug();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <Provider>
      <HeaderWrapper>
        <ThemesDocsHeader
          onMobileMenuButtonClick={() => setIsMobileMenuOpen((prevOpen) => !prevOpen)}
          isMenuActive={isMobileMenuOpen}
        />
      </HeaderWrapper>

      <MainWrapper>
        <NavWrapper isMobileMenuOpen={isMobileMenuOpen}>
          <Box css={{ mt: '$4' }}>
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
