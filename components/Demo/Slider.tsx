import React from 'react';
import { styled, Box, keyframes } from '@modulz/design-system';
import * as Slider from '@radix-ui/react-slider';

const StyledSlider = styled(Slider.Root, {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  userSelect: 'none',
  touchAction: 'none',

  '&[data-orientation="horizontal"]': {
    height: 16,
  },

  '&[data-orientation="vertical"]': {
    flexDirection: 'column',
    width: 16,
    height: 100,
  },
});

const StyledTrack = styled(Slider.Track, {
  backgroundColor: 'gainsboro',
  position: 'relative',
  flexGrow: 1,

  '&[data-orientation="horizontal"]': { height: 2 },
  '&[data-orientation="vertical"]': { width: 2 },
});

const StyledRange = styled(Slider.Range, {
  position: 'absolute',
  backgroundColor: 'dodgerblue',
  borderRadius: '9999px',
  height: '100%',
});

const StyledThumb = styled(Slider.Thumb, {
  display: 'block',
  width: 16,
  height: 16,
  backgroundColor: 'white',
  border: '1px solid lightgray',
  borderRadius: '20px',
  ':focus': {
    outline: 'none',
    borderColor: 'dodgerblue',
  },
});

export const SliderDemo = ({ defaultValue = [50], ...props }) => (
  <StyledSlider defaultValue={defaultValue} {...props}>
    <StyledTrack>
      <StyledRange />
    </StyledTrack>
    {defaultValue.map((thumb, index) => (
      <StyledThumb key={index} />
    ))}
  </StyledSlider>
);

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

export const SliderHero = () => {
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
