import React from 'react';
import { Box, styled, css } from '@modulz/design-system';

const anim = css.keyframes({
  '20%': { transform: 'translateX(100px)' },
  '40%': { transform: 'translateX(42px)' },
  '60%': { transform: 'translateX(70px)' },
});

const scale = css.keyframes({
  '0%': { transform: 'ScaleX(0)' },
  '18%': { transform: 'ScaleX(0)' },
  '20%': { transform: 'ScaleX(.25)' },
  '48%': { transform: 'ScaleX(.25)' },
  '50%': { transform: 'ScaleX(.4)' },
  '52%': { transform: 'ScaleX(.5)' },
  '68%': { transform: 'ScaleX(.5)' },
  '70%': { transform: 'ScaleX(.75)' },
  '90%': { transform: 'ScaleX(.75)' },
  '92%': { transform: 'ScaleX(1)' },
  '100%': { transform: 'ScaleX(1)' },
});

const ProgressContainer = () => {
  return (
    <Box
      css={{
        position: 'relative',
        height: 8,
        backgroundColor: 'hsla(0,0%,0%,.35)',
        borderRadius: '9999px',
        flexShrink: 0,
        width: 200,
        display: 'flex',
        overflow: 'hidden',
      }}
    >
      <Box
        css={{
          position: 'absolute',
          height: '100%',
          backgroundColor: 'white',
          flexShrink: 0,
          width: '100%',
          transform: 'ScaleX(0)',
          transformOrigin: 'left',
          animation: `${scale} 9s infinite`,
          animationTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      ></Box>
    </Box>
  );
};

export const ProgressHero = () => {
  return <ProgressContainer />;
};
