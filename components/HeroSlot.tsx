import React from 'react';
import { Box, styled, css } from '@modulz/design-system';
import { Portal } from '@interop-ui/react-portal';

export const HeroContext = React.createContext<React.RefObject<HTMLDivElement>>({} as any);

export function HeroSlot({ children }) {
  const heroSlotRef = React.useContext(HeroContext);

  return (
    <Portal containerRef={heroSlotRef}>
      <Box
        css={{
          marginBottom: 45,
          bp4: {
            marginLeft: -65,
            marginRight: -65,
          },
        }}
      >
        <Box
          css={{
            height: 0,
            overflow: 'hidden',
            // paddingTop: 'calc(591.44px / 1127.34px * 100%)',
            paddingTop: '40%',
            position: 'relative',

            background: 'linear-gradient(330deg, hsl(272,53%,50%) 0%, hsl(226,68%,56%) 100%)',
          }}
        >
          <Box
            css={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex',
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </Portal>
  );
}
