import { themesRoutes } from '@lib/themesRoutes';
import { Box, ScrollArea } from '@radix-ui/themes';
import { ThemesHeader } from './ThemesHeader';
import { DocsNav } from './DocsNav';
import { MobileMenu } from './MobileMenu';

export const ThemesMobileMenu = () => (
  <MobileMenu>
    <ThemesHeader />
    <ScrollArea>
      <Box pt="4" px="4" pb="9">
        <DocsNav
          routes={[
            {
              pages: [
                {
                  title: 'Homepage',
                  slug: '',
                },
              ],
            },
            ...themesRoutes,
          ]}
        />
      </Box>
    </ScrollArea>
  </MobileMenu>
);
