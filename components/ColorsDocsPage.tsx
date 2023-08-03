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
          <Box pt="4" px="4" pb="9">
            <DocsNav routes={colorsRoutes} />
          </Box>
        </ScrollArea>
      </MobileMenu>

      <Box position="relative">
        <SideNav>
          <Box pt="4" px="4" pb="9">
            <DocsNav routes={colorsRoutes} />
          </Box>
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
