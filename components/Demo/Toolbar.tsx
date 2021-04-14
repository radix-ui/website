import React from 'react';
import { styled } from '@modulz/design-system';
import * as Toolbar from '@radix-ui/react-toolbar';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

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
  ...(itemStyles as any),
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

const StyledMenuContent = styled(DropdownMenu.Content, {
  minWidth: 130,
  backgroundColor: 'white',
  borderRadius: 6,
  padding: 5,
  boxShadow: '0px 5px 15px -5px hsla(206,22%,7%,.15)',
});

const StyledMenuTrigger = styled(DropdownMenu.Trigger, itemStyles as any);

const StyledMenuItem = styled(DropdownMenu.Item, {
  fontSize: 13,
  padding: '5px 10px',
  borderRadius: 3,
  cursor: 'default',
  color: 'black',

  '&:focus': {
    outline: 'none',
    backgroundColor: 'dodgerblue',
    color: 'white',
  },
});

const StyledArrow = styled(DropdownMenu.Arrow, {
  fill: 'white',
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

export const ToolbarExtraDemo = () => (
  <StyledToolbar>
    <StyledButton>Action 1</StyledButton>
    <StyledButton>Action 2</StyledButton>
    <StyledSeparator />
    <DropdownMenu.Root>
      <Toolbar.Button as={StyledMenuTrigger}>Trigger</Toolbar.Button>
      <StyledMenuContent>
        <StyledMenuItem onSelect={() => console.log('cut')}>Cut</StyledMenuItem>
        <StyledMenuItem onSelect={() => console.log('copy')}>Copy</StyledMenuItem>
        <StyledMenuItem onSelect={() => console.log('paste')}>Paste</StyledMenuItem>
        <StyledArrow />
      </StyledMenuContent>
    </DropdownMenu.Root>
  </StyledToolbar>
);
