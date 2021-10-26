import React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { styled } from '@modulz/design-system';

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
  backgroundColor: '$grayA6',
  position: 'relative',
  flexGrow: 1,
  borderRadius: '9999px',

  '&[data-orientation="horizontal"]': { height: 4 },
  '&[data-orientation="vertical"]': { width: 4 },
});

const StyledRange = styled(SliderPrimitive.Range, {
  position: 'absolute',
  backgroundColor: '$indigo9',
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
    '0 2px 10px -5px $colors$blackA9, 0 1px 4px -1px $colors$blackA7, 0 0 0 1px $colors$blackA3',
  borderRadius: 10,
  '&:focus': {
    boxShadow:
      '0 2px 10px -5px $colors$blackA9, 0 1px 4px -1px $colors$blackA7, 0 0 0 1px $colors$blackA3, 0 0 0 4px $colors$grayA4',
  },
});

export function MainHeroSlider() {
  return (
    <StyledSlider defaultValue={[50]} max={100} step={1} aria-label="Volume">
      <StyledTrack>
        <StyledRange />
      </StyledTrack>
      <StyledThumb />
    </StyledSlider>
  );
}
