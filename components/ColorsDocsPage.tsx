import * as React from 'react';
import { Box, ScrollArea } from '@radix-ui/themes';
import { PageWrapper, ContentWrapper, Pagination, EditPageLink } from '@components/DocsPage';
import { allColorsRoutes, colorsRoutes } from '@lib/colorsRoutes';
import { ColorsHeader } from './ColorsHeader';
import { DocsNav } from './DocsNav';
import { MobileMenu, MobileMenuProvider } from './MobileMenu';
import { SideNav } from './SideNav';

export function ColorsDocsPage({ children }: { children: React.ReactNode }) {
  return (
    <MobileMenuProvider>
      <ColorsHeader />

      <MobileMenu>
        <ColorsHeader />
        <ScrollArea>
          <DocsNav routes={colorsRoutes} />
        </ScrollArea>
      </MobileMenu>

      <Box position="relative">
        <SideNav>
          <DocsNav routes={colorsRoutes} />
        </SideNav>

        <PageWrapper>
          <ContentWrapper data-algolia-page-scope>{children}</ContentWrapper>
          <Pagination allRoutes={allColorsRoutes} />
          <EditPageLink />
        </PageWrapper>
      </Box>
    </MobileMenuProvider>
  );
}
