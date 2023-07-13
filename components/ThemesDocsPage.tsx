import * as React from 'react';
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
import { NavHeading, NavItem, NavItemTitle } from './DocsNav';
import { RouteProps, allThemesRoutes, themesRoutes } from '@lib/themesRoutes';
import { ThemesDocsHeader } from './ThemesDocsHeader';
import { ResourceColors, ResourceIcons, ResourcePrimitives } from './Resources';

export function ThemesDocsPage({ children }: { children: React.ReactNode }) {
  const currentPageSlug = useCurrentPageSlug();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <>
      <HeaderWrapper>
        <ThemesDocsHeader
          onMobileMenuButtonClick={() => setIsMobileMenuOpen((prevOpen) => !prevOpen)}
          isMenuActive={isMobileMenuOpen}
        />
      </HeaderWrapper>

      <MainWrapper>
        <NavWrapper isMobileMenuOpen={isMobileMenuOpen}>
          <Box mt="5">
            {themesRoutes.map((section: RouteProps) => (
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

            <Box mt="8">
              <NavHeading>Resources</NavHeading>
              <Box px="2">
                <ResourcePrimitives />
                <ResourceColors />
                <ResourceIcons />
              </Box>
            </Box>
          </Box>
        </NavWrapper>

        <PageWrapper>
          <ContentWrapper data-algolia-page-scope>{children}</ContentWrapper>
          <Pagination allRoutes={allThemesRoutes} />
          <EditPageLink />
        </PageWrapper>
      </MainWrapper>
    </>
  );
}
