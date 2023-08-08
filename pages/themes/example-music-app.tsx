import { Box, Theme } from '@radix-ui/themes';
import { ExampleThemesMusicApp } from '@components/ExampleThemesMusicApp';
import * as React from 'react';

export default function ExamplePage() {
  return (
    <Box asChild p="9">
      <Theme grayColor="slate" accentColor="red" radius="medium" className="radix-themes-example">
        <ExampleThemesMusicApp />
      </Theme>
    </Box>
  );
}
