import * as React from 'react';
import { Box } from '@radix-ui/themes';
import {
  PageWrapper,
  ContentWrapper,
  Pagination,
  EditPageLink,
  NavWrapper,
} from '@components/DocsPage';
import { allThemesRoutes, themesRoutes } from '@lib/themesRoutes';
import { ThemesHeader } from './ThemesHeader';
import { DocsNav } from './DocsNav';

export function ThemesDocsPage({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    // Match @bp2
    const mediaQueryList = window.matchMedia('(min-width: 1024px)');

    const handleChange = () => {
      setIsMobileMenuOpen((open) => (open ? !mediaQueryList.matches : false));
    };

    handleChange();
    mediaQueryList.addEventListener('change', handleChange);
    return () => mediaQueryList.removeEventListener('change', handleChange);
  }, []);

  return (
    <Box>
      <ThemesHeader
        isMenuActive={isMobileMenuOpen}
        onMobileMenuButtonClick={() => setIsMobileMenuOpen((prevOpen) => !prevOpen)}
      />

      <Box position="relative">
        <NavWrapper isMobileMenuOpen={isMobileMenuOpen}>
          <DocsNav routes={themesRoutes} />
        </NavWrapper>
        <PageWrapper>
          <ContentWrapper data-algolia-page-scope>{children}</ContentWrapper>
          <Pagination allRoutes={allThemesRoutes} />
          <EditPageLink />
        </PageWrapper>
      </Box>
    </Box>
  );
}
