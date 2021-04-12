import React from 'react';
import { Box } from '@modulz/design-system';

export function NavList({ children }) {
  return (
    <Box as="ul" css={{ p: 0, m: 0, listStyle: 'none' }}>
      {children}
    </Box>
  );
}
