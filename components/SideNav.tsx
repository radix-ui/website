import { Box, ScrollArea } from '@radix-ui/themes';

export const SideNav = ({ children }) => (
  <Box
    position="fixed"
    left="0"
    bottom="0"
    display={{ initial: 'none', md: 'block' }}
    style={{
      top: 'var(--space-8)',
      zIndex: 1,
      overflowX: 'hidden',
      width: 250,
    }}
  >
    <ScrollArea>{children}</ScrollArea>
  </Box>
);
