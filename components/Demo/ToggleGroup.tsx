import React from 'react';
import { styled } from '@modulz/design-system';
import * as ToggleGroup from '@radix-ui/react-toggle-group';

const StyledItem = styled(ToggleGroup.Item, {
  appearance: 'none',
  backgroundColor: 'transparent',
  border: 'none',
  padding: '5px 10px',
  margin: '0 1px',
  boxShadow: 'inset 0 0 0 1px gainsboro',
  overflow: 'hidden',
  borderRadius: 3,

  '&:focus': {
    outline: 'none',
    boxShadow: 'inset 0 0 0 1px dodgerblue, 0 0 0 1px dodgerblue',
  },

  '&[data-state=on]': {
    backgroundColor: 'gainsboro',
  },
});

export const ToggleGroupDemo = () => (
  <ToggleGroup.Root type="single">
    <StyledItem value="left">Left</StyledItem>
    <StyledItem value="center">Center</StyledItem>
    <StyledItem value="right">Right</StyledItem>
  </ToggleGroup.Root>
);
