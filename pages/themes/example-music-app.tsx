import { Box, Theme } from '@radix-ui/themes';
import { ExampleThemesMusicApp } from '@components/ExampleThemesMusicApp';
import '@radix-ui/themes/dist/index.css';
import * as React from 'react';

export default function ExamplePage() {
  return (
    <Box asChild p="9">
      <Theme grayScale="slate" accentScale="red" radius="medium" className="radix-themes-example">
        <ExampleThemesMusicApp />
      </Theme>
    </Box>
  );
}
