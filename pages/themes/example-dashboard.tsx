import { Box, Theme } from '@radix-ui/themes';
import { ExampleThemesDashboard } from '@components/ExampleThemesDashboard';
import * as React from 'react';

export default function ExamplePage() {
  return (
    <Box asChild p="9">
      <Theme accentScale="indigo" grayScale="mauve" className="radix-themes-example">
        <ExampleThemesDashboard />
      </Theme>
    </Box>
  );
}
