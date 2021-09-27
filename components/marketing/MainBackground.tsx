import React from 'react';

import { Box } from '@modulz/design-system';

export const MainBackground = () => {
  return (
    <Box
      css={{
        position: 'absolute',
        bc: '$slate1',
        zIndex: -1,
        width: '100vw',
        overflow: 'hidden',
        minWidth: 1500,
        left: '50%',
        transform: 'translateX(-50%)',
        top: 0,
        bottom: 0,
      }}
    >
      <Box
        css={{
          position: 'absolute',
          top: -200,
          right: -1000,
          backgroundImage: 'radial-gradient(circle, $amberA2, #FBFCFD00 70%)',
          width: 1500,
          height: 1500,
        }}
      />
      <Box
        css={{
          position: 'absolute',
          top: 400,
          left: -400,
          backgroundImage: 'radial-gradient(circle, $plumA2, #FBFCFD00 70%)',
          width: 1200,
          height: 1200,
        }}
      />
    </Box>
  );
};
