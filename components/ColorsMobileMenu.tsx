import { colorsRoutes } from '@lib/colorsRoutes';
import { Box, ScrollArea } from '@radix-ui/themes';
import { ColorsHeader } from './ColorsHeader';
import { DocsNav } from './DocsNav';
import { MobileMenu } from './MobileMenu';
import { GitHubLogoIcon } from '@radix-ui/react-icons';

export const ColorsMobileMenu = () => (
  <MobileMenu>
    <ColorsHeader />
    <ScrollArea>
      <Box pt="4" px="3" pb="9">
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
            {
              label: 'Resources',
              pages: [
                {
                  title: 'GitHub',
                  slug: 'https://github.com/radix-ui/colors',
                  icon: <GitHubLogoIcon />,
                },
              ],
            },
          ]}
        />
      </Box>
    </ScrollArea>
  </MobileMenu>
);
