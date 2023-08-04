import React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { styled } from '@stitches/react';

const StyledSwitch = styled(SwitchPrimitive.Root, {
  all: 'unset',
  width: 42,
  height: 25,
  backgroundColor: 'var(--gray-a5)',
  borderRadius: '9999px',
  position: 'relative',
  transition: 'background-color 100ms, box-shadow 100ms',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  '&[data-state="checked"]': {
    backgroundColor: '#2C333B',
  },
  ':where(.dark-theme) &': {
    boxShadow: '0 0 0 1px var(--gray-a8)',
  },
  ':where(.dark-theme) &[data-state="checked"]': {
    backgroundColor: '#141417',
    boxShadow: '0 0 0 1px var(--gray-a6)',
  },
  '&:focus-visible': {
    boxShadow: `0 0 0 2px var(--accent-a8)`,
  },
});

const StyledThumb = styled(SwitchPrimitive.Thumb, {
  display: 'block',
  width: 21,
  height: 21,
  backgroundColor: 'white',
  borderRadius: '9999px',
  boxShadow: `0 2px 2px var(--black-a7)`,
  transition: 'transform 100ms',
  transform: 'translateX(2px)',
  willChange: 'transform',
  '&[data-state="checked"]': { transform: 'translateX(19px)' },
});

const Switch = StyledSwitch;
const SwitchThumb = StyledThumb;

export function PrimitivesHeroSwitch() {
  return (
    <Switch defaultChecked aria-label="Demo switch">
      <SwitchThumb />
    </Switch>
  );
}
