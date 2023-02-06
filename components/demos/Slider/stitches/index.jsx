import React from 'react';
import * as Slider from '@radix-ui/react-slider';
import { styled } from '@modulz/design-system';
import { violet, blackA } from '@radix-ui/colors';

const SliderDemo = () => (
  <form>
    <SliderRoot defaultValue={[50]} max={100} step={1} aria-label="Volume">
      <SliderTrack>
        <SliderRange />
      </SliderTrack>
      <SliderThumb />
    </SliderRoot>
  </form>
);

const SliderRoot = styled(Slider.Root, {
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

const SliderTrack = styled(Slider.Track, {
  backgroundColor: blackA.blackA10,
  position: 'relative',
  flexGrow: 1,
  borderRadius: '9999px',

  '&[data-orientation="horizontal"]': { height: 3 },
  '&[data-orientation="vertical"]': { width: 3 },
});

const SliderRange = styled(Slider.Range, {
  position: 'absolute',
  backgroundColor: 'white',
  borderRadius: '9999px',

  '&[data-orientation="horizontal"]': { height: '100%' },
  '&[data-orientation="vertical"]': { width: '100%' },
});

const SliderThumb = styled(Slider.Thumb, {
  display: 'block',
  width: 20,
  height: 20,
  backgroundColor: 'white',
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  borderRadius: 10,
  '&:hover': { backgroundColor: violet.violet3 },
  '&:focus': { outline: 'none', boxShadow: `0 0 0 5px ${blackA.blackA8}` },
});

export default SliderDemo;
