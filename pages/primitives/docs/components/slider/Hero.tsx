import React from 'react';
import { Box, styled, css } from '@modulz/design-system';

const anim = css.keyframes({
  '0%': { transform: 'translateX(100px)' },
  '50%': { transform: 'translateX(150px)' },
  '100%': { transform: 'translateX(50px)' },
});

const HeroSkeleton = () => {
  return (
    <Box
      css={{
        height: '2px',
        backgroundColor: 'white',
        borderRadius: '9999px',
        flexShrink: 0,
        width: '200px',
        display: 'flex',
      }}
    >
      <Box
        css={{
          backgroundColor: 'white',
          borderRadius: '50%',
          flexShrink: 0,
          width: '24px',
          height: '24px',
          marginTop: -11,
          marginLeft: -12,
          transform: 'translateX(100px)',
          // animation: `${anim} 1000ms infinite`,
          animationDelay: '500ms',
        }}
      ></Box>
    </Box>
  );
};

export const Hero = () => {
  return <HeroSkeleton />;
};

