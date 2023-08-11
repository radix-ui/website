import { Box, Theme } from '@radix-ui/themes';
import { ExampleThemesDashboard } from '@components/ExampleThemesDashboard';
import * as React from 'react';

export default function ExamplePage() {
  return (
    <Box asChild p="9">
      <Theme accentColor="indigo" grayColor="mauve" className="radix-themes-default-fonts">
        <ExampleThemesDashboard />
      </Theme>
    </Box>
  );
}
