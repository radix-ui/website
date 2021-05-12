import React from 'react';
import { Box, Text } from '@modulz/design-system';

export const VideoPlaceholder = (props) => {
  return (
    <Box
      css={{
        border: '1px solid',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: '$9',
        mx: '-$5',
        height: 600,

        '@bp2': {
          mx: '-$8',
          borderRadius: '$2',
        },
      }}
    >
      <Text
        size="9"
        css={{
          fontWeight: 500,
          transform: 'rotate(-25deg)',
          background: '-webkit-linear-gradient(330deg, hsl(272,53%,50%) 0%, hsl(226,68%,56%) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          userSelect: 'none',
        }}
      >
        Video placeholder
      </Text>
    </Box>
  );
};
