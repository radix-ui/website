import React from 'react';
import { Box } from '@modulz/design-system';

export function HeroContainer({ children }) {
  return (
    <Box
      // In case any semantic content sneaks through in a hero, let's hide it
      // from the a11y tree since this is a presentational component.
      role="presentation"
      css={{
        mb: '$7',
        mx: '-$5',
        '@bp2': { mx: 0 },
        '@bp4': { mx: '-$8' },
      }}
    >
      <Box
        css={{
          height: 0,
          overflow: 'hidden',
          paddingTop: '40%',
          position: 'relative',
          background: 'linear-gradient(330deg, hsl(272,53%,50%) 0%, hsl(226,68%,56%) 100%)',
          '@bp2': { borderRadius: '$3' },
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
  );
}
