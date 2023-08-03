import * as React from 'react';
import { Box, Flex, ScrollArea } from '@radix-ui/themes';
import { DocsPagination } from '@components/DocsPagination';
import { allColorsRoutes, colorsRoutes } from '@lib/colorsRoutes';
import { ColorsHeader } from './ColorsHeader';
import { DocsNav } from './DocsNav';
import { MobileMenu, MobileMenuProvider } from './MobileMenu';
import { SideNav } from './SideNav';
import { DocsPageWrapper } from './DocsPageWrapper';
import { EditPageLink } from './EditPageLink';

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

      <Flex>
        <SideNav>
          <Box pt="4" px="4" pb="9">
            <DocsNav routes={colorsRoutes} />
          </Box>
        </SideNav>

        <DocsPageWrapper>
          <Box data-algolia-page-scope>{children}</Box>
          <DocsPagination allRoutes={allColorsRoutes} />
          <EditPageLink />
        </DocsPageWrapper>
      </Flex>
    </MobileMenuProvider>
  );
}
