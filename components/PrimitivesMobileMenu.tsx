import * as React from 'react';
import { primitivesRoutes } from '@lib/primitivesRoutes';
import { Box, ScrollArea } from '@radix-ui/themes';
import { DocsNav } from './DocsNav';
import { MobileMenu } from './MobileMenu';
import { PrimitivesHeader } from './PrimitivesHeader';
import { PrimitivesSearchMobile } from './PrimitivesSearchMobile';

export const PrimitivesMobileMenu = () => {
  const [mobileSearchOpen, setMobileSearchOpen] = React.useState(false);

  return (
    <MobileMenu>
      <PrimitivesHeader />
      <ScrollArea scrollbars="vertical">
        <Box pt="4" px="4" pb="9" style={{ maxWidth: '100vw' }}>
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
                  ],
                },
                ...primitivesRoutes,
              ]}
            />
          )}
        </Box>
      </ScrollArea>
    </MobileMenu>
  );
};
