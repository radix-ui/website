import { Box, Theme } from '@radix-ui/themes';
import { ExampleThemesEcommerce } from '@components/ExampleThemesEcommerce';
import '@radix-ui/themes/dist/index.css';
import * as React from 'react';

export default function ExamplePage() {
  return (
    <Box asChild p="9">
      <Theme accentScale="gray" grayScale="sage" textColor="auto">
        <ExampleThemesEcommerce />
      </Theme>
    </Box>
  );
}
