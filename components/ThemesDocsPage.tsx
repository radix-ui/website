import * as React from 'react';
import { Box, ScrollArea } from '@radix-ui/themes';
import { PageWrapper, ContentWrapper, Pagination, EditPageLink } from '@components/DocsPage';
import { allThemesRoutes, themesRoutes } from '@lib/themesRoutes';
import { ThemesHeader } from './ThemesHeader';
import { DocsNav } from './DocsNav';
import { MobileMenu, MobileMenuProvider } from './MobileMenu';
import { SideNav } from './SideNav';

export function ThemesDocsPage({ children }: { children: React.ReactNode }) {
  return (
    <MobileMenuProvider>
      <ThemesHeader />

      <MobileMenu>
        <ThemesHeader />
        <ScrollArea>
          <Box pt="4" px="4" pb="9">
            <DocsNav routes={themesRoutes} />
          </Box>
        </ScrollArea>
      </MobileMenu>

      <Box position="relative">
        <SideNav>
          <Box pt="4" px="4" pb="9">
            <DocsNav routes={themesRoutes} />
          </Box>
        </SideNav>

        <PageWrapper>
          <ContentWrapper data-algolia-page-scope>{children}</ContentWrapper>
          <Pagination allRoutes={allThemesRoutes} />
          <EditPageLink />
        </PageWrapper>
      </Box>
    </MobileMenuProvider>
  );
}
