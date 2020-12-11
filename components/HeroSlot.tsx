import React from 'react';
import { Portal } from '@interop-ui/react-portal';

export const HeroContext = React.createContext<React.RefObject<HTMLDivElement>>({} as any);

export function HeroSlot({ children }) {
  const heroSlotRef = React.useContext(HeroContext);

  return typeof document !== 'undefined' ? (
    <Portal containerRef={heroSlotRef}>
      <div
        style={{
          height: 300,
          background:
            'linear-gradient(330deg, rgba(2,0,36,1) 0%, hsl(272,53%,50%) 0%, hsl(226,68%,56%) 100%)',
          marginLeft: -65,
          marginRight: -65,
          marginBottom: 45,
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
        }}
      >
        {children}
      </div>
    </Portal>
  ) : null;
}
