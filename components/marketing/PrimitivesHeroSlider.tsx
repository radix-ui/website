import React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { styled } from '@lib/stitches';

const StyledSlider = styled(SliderPrimitive.Root, {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  userSelect: 'none',
  touchAction: 'none',
  width: 200,

  '&[data-orientation="horizontal"]': {
    height: 20,
  },

  '&[data-orientation="vertical"]': {
    flexDirection: 'column',
    width: 20,
    height: 100,
  },
});

const StyledTrack = styled(SliderPrimitive.Track, {
  backgroundColor: 'var(--gray-a6)',
  position: 'relative',
  flexGrow: 1,
  borderRadius: '9999px',

  '&[data-orientation="horizontal"]': { height: 4 },
  '&[data-orientation="vertical"]': { width: 4 },
});

const StyledRange = styled(SliderPrimitive.Range, {
  position: 'absolute',
  backgroundColor: 'var(--gray-a12)',
  borderRadius: '9999px',
  height: '100%',
});

const StyledThumb = styled(SliderPrimitive.Thumb, {
  all: 'unset',
  display: 'block',
  width: 20,
  height: 20,
  backgroundColor: 'white',
  boxShadow:
    '0 2px 10px -5px var(--black-a9), 0 1px 4px -1px var(--black-a7), 0 0 0 1px var(--black-a3)',
  borderRadius: 10,
  '&:focus-visible': {
    boxShadow:
      '0 2px 10px -5px var(--black-a9), 0 1px 4px -1px var(--black-a7), 0 0 0 1px var(--black-a3), 0 0 0 4px var(--gray-a4)',
  },
});

export function PrimitivesHeroSlider() {
  return (
    <StyledSlider defaultValue={[50]} max={100} step={1} aria-label="Volume">
      <StyledTrack>
        <StyledRange />
      </StyledTrack>
      <StyledThumb />
    </StyledSlider>
  );
}
