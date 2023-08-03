import * as React from 'react';
import { Box, Flex, ScrollArea } from '@radix-ui/themes';
import { DocsPagination } from '@components/DocsPagination';
import { allThemesRoutes, themesRoutes } from '@lib/themesRoutes';
import { ThemesHeader } from './ThemesHeader';
import { DocsNav } from './DocsNav';
import { MobileMenu, MobileMenuProvider } from './MobileMenu';
import { SideNav } from './SideNav';
import { DocsPageWrapper } from './DocsPageWrapper';
import { EditPageLink } from './EditPageLink';

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

      <Flex>
        <SideNav>
          <Box pt="4" px="4" pb="9">
            <DocsNav routes={themesRoutes} />
          </Box>
        </SideNav>

        <DocsPageWrapper>
          <Box data-algolia-page-scope>{children}</Box>
          <DocsPagination allRoutes={allThemesRoutes} />
          <EditPageLink />
        </DocsPageWrapper>
      </Flex>
    </MobileMenuProvider>
  );
}
