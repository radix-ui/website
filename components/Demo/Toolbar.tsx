import React from 'react';
import { styled } from '@modulz/design-system';

import * as Toolbar from '@radix-ui/react-toolbar';

const StyledToolbar = styled(Toolbar.Root, {
  display: 'flex',
});

const itemStyles = {
  appearance: 'none',
  backgroundColor: 'transparent',
  border: 'none',
  padding: '5px 10px',
  margin: '0 1px',
  boxShadow: 'inset 0 0 0 1px gainsboro',
  overflow: 'hidden',
  borderRadius: 3,
  fontSize: 13,

  '&:focus': {
    outline: 'none',
    boxShadow: 'inset 0 0 0 1px dodgerblue, 0 0 0 1px dodgerblue',
  },
};

const StyledButton = styled(Toolbar.Button, itemStyles as any);

const StyledLink = styled(Toolbar.Link, {
  ...itemStyles,
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const StyledSeparator = styled(Toolbar.Separator, {
  width: 1,
  margin: 5,
  backgroundColor: 'gainsboro',
});

const StyledToggleItem = styled(Toolbar.ToggleItem, {
  ...(itemStyles as any),
  '&[data-state=on]': {
    backgroundColor: 'gainsboro',
  },
});

export const ToolbarDemo = () => (
  <StyledToolbar>
    <StyledButton>Action 1</StyledButton>
    <StyledButton>Action 2</StyledButton>
    <StyledSeparator />
    <StyledLink href="https://modulz.app" target="_blank">
      Link
    </StyledLink>
    <StyledSeparator />
    <Toolbar.ToggleGroup type="single" defaultValue="center">
      <StyledToggleItem value="left">Left</StyledToggleItem>
      <StyledToggleItem value="center">Center</StyledToggleItem>
      <StyledToggleItem value="right">Right</StyledToggleItem>
    </Toolbar.ToggleGroup>
  </StyledToolbar>
);
