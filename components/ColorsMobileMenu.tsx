import { colorsRoutes } from '@lib/colorsRoutes';
import { Box, ScrollArea } from '@radix-ui/themes';
import { ColorsHeader } from './ColorsHeader';
import { DocsNav } from './DocsNav';
import { MobileMenu } from './MobileMenu';

export const ColorsMobileMenu = () => (
  <MobileMenu>
    <ColorsHeader />
    <ScrollArea>
      <Box pt="4" px="4" pb="9">
        <DocsNav
          routes={[
            {
              pages: [
                {
                  title: 'Homepage',
                  slug: 'colors',
                },
              ],
            },
            ...colorsRoutes,
          ]}
        />
      </Box>
    </ScrollArea>
  </MobileMenu>
);
