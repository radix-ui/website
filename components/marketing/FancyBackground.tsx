import React from 'react';
import { Box } from '@modulz/design-system';

export const FancyBackground: React.FC = ({ children }) => {
  return (
    <Box css={{ position: 'relative', zIndex: 0 }}>
      <Box
        css={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          bc: '$slate1',
          zIndex: -1,
          overflow: 'hidden',
        }}
      >
        <Box
          css={{
            width: '100vw',
            minWidth: 1500,
            left: '50%',
            transform: 'translateX(-50%)',
            position: 'absolute',
            top: 0,
            bottom: 0,
          }}
        >
          <Box
            css={{
              position: 'absolute',
              top: -800,
              left: -300,
              backgroundImage: 'radial-gradient(circle, $purple2, #FBFCFD00 70%)',
              width: 2000,
              height: 2000,
            }}
          />
          <Box
            css={{
              position: 'absolute',
              top: -300,
              right: -300,
              backgroundImage: 'radial-gradient(circle, $mint4, #FBFCFD00 70%)',
              width: 1200,
              height: 1200,
            }}
          />
          <Box
            css={{
              position: 'absolute',
              top: -200,
              right: -1000,
              backgroundImage: 'radial-gradient(circle, $sky2, #FBFCFD00 70%)',
              width: 1500,
              height: 1500,
            }}
          />
          <Box
            css={{
              position: 'absolute',
              top: 600,
              left: 'calc(50% - 1000px)',
              backgroundImage: 'radial-gradient(circle, $pink3, #FBFCFD00 70%)',
              width: 800,
              height: 800,
            }}
          />
        </Box>
      </Box>
      {children}
    </Box>
  );
};
