import { Box, ScrollArea } from '@radix-ui/themes';

interface SideNavProps {
  children: React.ReactNode;
  borderRight?: boolean;
}

export const SideNav = ({ children, borderRight }: SideNavProps) => (
  <Box display={{ initial: 'none', md: 'block' }} style={{ width: 250, flexShrink: 0 }}>
    <Box
      position="fixed"
      left="0"
      bottom="0"
      style={{
        zIndex: 1,
        top: 'var(--header-height)',
        overflowX: 'hidden',
        width: 'inherit',
      }}
    >
      {borderRight && (
        <Box
          position="absolute"
          style={{ top: 1, bottom: 1, right: 1, width: 1, backgroundColor: 'var(--gray-a4)' }}
        />
      )}
      <ScrollArea>{children}</ScrollArea>
    </Box>
  </Box>
);
