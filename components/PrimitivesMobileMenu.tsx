import * as React from 'react';
import { primitivesRoutes } from '@utils/primitivesRoutes';
import { Box, ScrollArea } from '@radix-ui/themes';
import { DocsNav } from './DocsNav';
import { MobileMenu } from './MobileMenu';
import { PrimitivesHeader } from './PrimitivesHeader';
import { PrimitivesSearchMobile } from './PrimitivesSearchMobile';
import { GitHubLogoIcon } from '@radix-ui/react-icons';

export const PrimitivesMobileMenu = () => {
  const [mobileSearchOpen, setMobileSearchOpen] = React.useState(false);

  return (
    <MobileMenu>
      <PrimitivesHeader />
      <ScrollArea scrollbars="vertical">
        <Box pt="4" px="3" pb="9" style={{ maxWidth: '100vw' }}>
          <Box mb="4">
            <PrimitivesSearchMobile
              onSearchShow={() => setMobileSearchOpen(true)}
              onSearchHide={() => setMobileSearchOpen(false)}
            />
          </Box>

          {!mobileSearchOpen && (
            <DocsNav
              routes={[
                {
                  pages: [
                    {
                      title: 'Homepage',
                      slug: 'primitives',
                    },
                    {
                      title: 'Case studies',
                      slug: 'primitives/case-studies',
                    },
                    {
                      title: 'Blog',
                      slug: 'blog',
                    },
                  ],
                },
                ...primitivesRoutes,
                {
                  label: 'Resources',
                  pages: [
                    {
                      title: 'GitHub',
                      slug: 'https://github.com/radix-ui/primitives',
                      icon: <GitHubLogoIcon />,
                    },
                  ],
                },
              ]}
            />
          )}
        </Box>
      </ScrollArea>
    </MobileMenu>
  );
};
