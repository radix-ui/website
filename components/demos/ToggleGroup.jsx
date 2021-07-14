import React from 'react';
import { styled } from '@modulz/design-system';
import { violet, blackA } from '@radix-ui/colors';
import { TextAlignLeftIcon, TextAlignCenterIcon, TextAlignRightIcon } from '@radix-ui/react-icons';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';

const StyledToggleGroup = styled(ToggleGroupPrimitive.Root, {
  display: 'flex',
});

const StyledItem = styled(ToggleGroupPrimitive.Item, {
  all: 'unset',
  backgroundColor: 'white',
  height: 35,
  width: 35,
  borderRadius: 4,
  display: 'flex',
  fontSize: 15,
  lineHeight: 1,
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  marginLeft: 5,
  '&:first-child': { marginLeft: 0 },
  '&:hover': { backgroundColor: violet.violet3 },
  '&[data-state=on]': { backgroundColor: blackA.blackA10, color: 'white', boxShadow: 'none' },
  '&:focus': { boxShadow: `0 0 0 2px black` },
});

// Exports
const ToggleGroup = StyledToggleGroup;
const ToggleGroupItem = StyledItem;

// Your app...
const ToggleGroupDemo = () => (
  <ToggleGroup type="single">
    <ToggleGroupItem value="left">
      <TextAlignLeftIcon />
    </ToggleGroupItem>
    <ToggleGroupItem value="center">
      <TextAlignCenterIcon />
    </ToggleGroupItem>
    <ToggleGroupItem value="right">
      <TextAlignRightIcon />
    </ToggleGroupItem>
  </ToggleGroup>
);

export default ToggleGroupDemo;
