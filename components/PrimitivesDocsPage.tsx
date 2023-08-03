import * as React from 'react';
import { Box, Flex, ScrollArea } from '@radix-ui/themes';
import { DocsPagination } from '@components/DocsPagination';
import { PrimitivesDocsHeader } from '@components/PrimitivesDocsHeader';
import { allPrimitivesRoutes, primitivesRoutes } from '@lib/primitivesRoutes';
import { DocsNav } from './DocsNav';
import { MobileMenu, MobileMenuProvider } from './MobileMenu';
import { SideNav } from './SideNav';
import { PrimitivesSearchMobile } from './PrimitivesSearchMobile';
import { PrimitivesSearchDesktop } from './PrimitivesSearchDesktop';
import { DocsPageWrapper } from './DocsPageWrapper';
import { EditPageLink } from './EditPageLink';

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

      <Flex>
        <SideNav>
          <Box pt="4" px="4" pb="9">
            <Box mb="4">
              <PrimitivesSearchDesktop />
            </Box>

            <DocsNav routes={primitivesRoutes} />
          </Box>
        </SideNav>

        <DocsPageWrapper>
          <Box data-algolia-page-scope>{children}</Box>
          <DocsPagination allRoutes={allPrimitivesRoutes} />
          <EditPageLink />
        </DocsPageWrapper>
      </Flex>
    </MobileMenuProvider>
  );
}
