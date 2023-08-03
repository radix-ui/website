import * as React from 'react';
import { Box, Flex, ScrollArea } from '@radix-ui/themes';
import { PageWrapper, ContentWrapper, Pagination, EditPageLink } from '@components/DocsPage';
import { PrimitivesDocsHeader } from '@components/PrimitivesDocsHeader';
import { allPrimitivesRoutes, primitivesRoutes } from '@lib/primitivesRoutes';
import { DocsNav } from './DocsNav';
import { MobileMenu, MobileMenuProvider } from './MobileMenu';
import { SideNav } from './SideNav';
import { PrimitivesSearchMobile } from './PrimitivesSearchMobile';
import { PrimitivesSearchDesktop } from './PrimitivesSearchDesktop';

export function PrimitivesDocsPage({ children }: { children: React.ReactNode }) {
  const [mobileSearchOpen, setMobileSearchOpen] = React.useState(false);

  return (
    <MobileMenuProvider>
      <PrimitivesDocsHeader />

      <MobileMenu>
        <PrimitivesDocsHeader />
        <ScrollArea scrollbars="vertical">
          <Box pt="4" px="4" pb="9" style={{ maxWidth: '100vw' }}>
            <Box mb="4">
              <PrimitivesSearchMobile
                onSearchShow={() => setMobileSearchOpen(true)}
                onSearchHide={() => setMobileSearchOpen(false)}
              />
            </Box>

            {!mobileSearchOpen && <DocsNav routes={primitivesRoutes} />}
          </Box>
        </ScrollArea>
      </MobileMenu>

      <Box position="relative">
        <SideNav>
          <Box pt="4" px="4" pb="9">
            <Box mb="4">
              <PrimitivesSearchDesktop />
            </Box>

            <DocsNav routes={primitivesRoutes} />
          </Box>
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
