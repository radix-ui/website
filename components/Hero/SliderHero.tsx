import React from 'react';
import { Box, keyframes } from '@modulz/design-system';

const anim = keyframes({
  '20%': { transform: 'translateX(100px)' },
  '40%': { transform: 'translateX(42px)' },
  '60%': { transform: 'translateX(70px)' },
});

const scale = keyframes({
  '20%': { transform: 'ScaleX(.75)' },
  '40%': { transform: 'ScaleX(.25)' },
  '60%': { transform: 'ScaleX(.5)' },
});

const HeroSkeleton = () => {
  return (
    <Box
      css={{
        position: 'relative',
        height: '2px',
        backgroundColor: 'hsla(0,0%,0%,.35)',
        borderRadius: '9999px',
        flexShrink: 0,
        width: 140,
        display: 'flex',
      }}
    >
      <Box
        css={{
          position: 'absolute',
          height: '2px',
          backgroundColor: 'white',
          borderRadius: '9999px',
          flexShrink: 0,
          width: 140,
          transform: 'ScaleX(.5)',
          transformOrigin: 'left',
          animation: `${scale} 5000ms infinite`,
          animationTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
          animationDelay: '1000ms',
        }}
      ></Box>
      <Box
        css={{
          backgroundColor: 'white',
          borderRadius: '50%',
          flexShrink: 0,
          width: 16,
          height: 16,
          marginTop: -7,
          marginLeft: -8,
          transform: 'translateX(70px)',
          animation: `${anim} 5000ms infinite`,
          animationTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
          animationDelay: '1000ms',
        }}
      ></Box>
    </Box>
  );
};

export const SliderHero = () => {
  return <HeroSkeleton />;
};
