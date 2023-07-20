import * as React from 'react';
import { Box, ScrollArea } from '@radix-ui/themes';
import { PageWrapper, ContentWrapper, Pagination, EditPageLink } from '@components/DocsPage';
import { PrimitivesDocsHeader } from '@components/PrimitivesDocsHeader';
import { allPrimitivesRoutes, primitivesRoutes } from '@lib/primitivesRoutes';
import { DocsNav } from './DocsNav';
import { MobileMenu, MobileMenuProvider } from './MobileMenu';
import { SideNav } from './SideNav';

export function PrimitivesDocsPage({ children }: { children: React.ReactNode }) {
  return (
    <MobileMenuProvider>
      <PrimitivesDocsHeader />

      <MobileMenu>
        <PrimitivesDocsHeader />
        <ScrollArea>
          <DocsNav routes={primitivesRoutes} />
        </ScrollArea>
      </MobileMenu>

      <Box position="relative">
        <SideNav>
          <DocsNav routes={primitivesRoutes} />
        </SideNav>

        <PageWrapper>
          <ContentWrapper data-algolia-page-scope>{children}</ContentWrapper>
          <Pagination allRoutes={allPrimitivesRoutes} />
          <EditPageLink />
        </PageWrapper>
      </Box>
    </MobileMenuProvider>
  );
}
