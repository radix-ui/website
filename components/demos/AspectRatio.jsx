import React from 'react';
import { styled } from '@modulz/design-system';
import { blackA } from '@radix-ui/colors';
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';

// Exports
const AspectRatio = AspectRatioPrimitive;

// Your app...
const Box = styled('div', {});
const Img = styled('img', {
  objectFit: 'cover',
  width: '100%',
  height: '100%',
  objectPosition: 'center 30%',
});

const AspectRatioDemo = () => (
  <Box
    css={{
      width: 300,
      borderRadius: 6,
      overflow: 'hidden',
      boxShadow: `0 2px 10px ${blackA.blackA7}`,
    }}
  >
    <AspectRatio.Root ratio={16 / 9}>
      <Img
        src="https://images.unsplash.com/photo-1623695727630-4b31fa99b836?w=300&dpr=2&q=80"
        alt="Moon"
      />
    </AspectRatio.Root>
  </Box>
);

export default AspectRatioDemo;
