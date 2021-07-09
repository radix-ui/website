import React from 'react';
import { Box, theme } from '@modulz/design-system';

export function HeroContainer({ css, children }: { css?: any; children?: React.ReactNode }) {
  return (
    <Box
      // In case any semantic content sneaks through in a hero, let's hide it
      // from the a11y tree since this is a presentational component.
      role="presentation"
      className={`${theme}`}
      css={{
        backgroundImage: 'linear-gradient(330deg, $purple9 0%, $indigo9 100%)',
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        py: '$9',
        borderRadius: '$3',
        ...(css as any),

        '@bp3': { mx: '-$7' },
        '@bp4': { mx: '-$8' },
      }}
    >
      {children}
    </Box>
  );
}
