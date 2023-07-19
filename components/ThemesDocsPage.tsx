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
      <ThemesHeader ghost />

      <MobileMenu>
        <ThemesHeader />
        <ScrollArea>
          <DocsNav routes={themesRoutes} />
        </ScrollArea>
      </MobileMenu>

      <Box position="relative">
        <SideNav>
          <DocsNav routes={themesRoutes} />
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
