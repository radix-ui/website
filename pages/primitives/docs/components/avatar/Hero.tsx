import React from 'react';
import { Box, styled, css } from '@modulz/design-system';

const anim = css.keyframes({
  '0%': { transform: 'scale(1)' },
  '50%': { transform: 'scale(2)' },
  '100%': { transform: 'scale(1)' },
});

const AvatarSkeleton = styled('div', {
  height: '45px',
  width: '45px',
  borderRadius: '999px',
  backgroundColor: 'white',
  animation: `${anim} 1000ms infinite`,
});

export const Hero = () => {
  return <AvatarSkeleton />;
};
