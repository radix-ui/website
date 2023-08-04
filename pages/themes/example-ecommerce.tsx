import { Box, Theme } from '@radix-ui/themes';
import { ExampleThemesEcommerce } from '@components/ExampleThemesEcommerce';
import * as React from 'react';

export default function ExamplePage() {
  return (
    <Box asChild p="9">
      <Theme accentScale="gray" grayScale="gray" className="radix-themes-example">
        <ExampleThemesEcommerce />
      </Theme>
    </Box>
  );
}
