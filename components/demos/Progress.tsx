import React from 'react';
import { styled, Box, keyframes } from '@modulz/design-system';
import * as Progress from '@radix-ui/react-progress';
import { HeroContainer } from '@components/HeroContainer';

const StyledProgress = styled(Progress.Root, {
  position: 'relative',
  height: 10,
  overflow: 'hidden',
  borderRadius: 5,
  background: 'gainsboro',
});

const StyledIndicator = styled(Progress.Indicator, {
  boxSizing: 'border-box',
  position: 'absolute',
  backgroundColor: 'dodgerblue',
  height: '100%',
});

export const ProgressDemo = () => (
  <StyledProgress value={50}>
    <StyledIndicator style={{ width: '50%' }} />
  </StyledProgress>
);

const scale = keyframes({
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

export const ProgressHero = () => {
  return (
    <HeroContainer>
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
    </HeroContainer>
  );
};
