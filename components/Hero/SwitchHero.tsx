import React from 'react';
import { Box, styled, css } from '@modulz/design-system';

const track = css.keyframes({
  '0%': { backgroundColor: 'hsla(0,0%,0%,.35)', },
  '43%': { backgroundColor: 'hsla(0,0%,0%,.35)', },
  '47%': { backgroundColor: 'hsl(252,100%,93%)', },
  '100%': { backgroundColor: 'hsl(252,100%,93%)', },
});

const thumb = css.keyframes({
  '0%': { transform: 'translateX(0)' },
  '43%': { transform: 'translateX(0)' },
  '47%': { transform: 'translateX(21px)' },
  '100%': { transform: 'translateX(21px)' },
});

const SwitchContainer = () => {
  return (
    <Box
      css={{
        position: 'relative',
        height: 24,
        backgroundColor: 'hsla(0,0%,0%,.35)',
        borderRadius: '9999px',
        flexShrink: 0,
        width: 45,
        display: 'flex',
        overflow: 'hidden',
        animation: `${track} 4000ms infinite`,
        animationTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
        animationDelay: '1000ms',
        animationDirection: 'alternate',
      }}
    >
      <Box
        css={{
          backgroundColor: 'white',
          borderRadius: '50%',
          flexShrink: 0,
          width: 20,
          height: 20,
          mt: 2,
          ml: 2,
          boxShadow: '0 1px 2px rgba(0,0,0,.25)',
          animation: `${thumb} 4000ms infinite`,
          animationTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
          animationDelay: '1000ms',
          animationDirection: 'alternate',
        }}
      ></Box>
    </Box>
  );
};

export const SwitchHero = () => {
  return <SwitchContainer />;
};

