import React from 'react';
import { styled } from '@stitches/react';
import { TextAlignCenterIcon, TextAlignLeftIcon, TextAlignRightIcon } from '@radix-ui/react-icons';

import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';

const StyledToggleGroup = styled(ToggleGroupPrimitive.Root, {
  display: 'inline-flex',
  backgroundColor: 'var(--color-panel-solid)',
  borderRadius: 'var(--radius-3)',
  boxShadow: 'var(--shadow-4)',
  margin: 1,
});

const StyledItem = styled(ToggleGroupPrimitive.Item, {
  all: 'unset',
  color: 'var(--gray-a11)',
  height: 35,
  width: 35,
  display: 'flex',
  fontSize: 15,
  lineHeight: 1,
  alignItems: 'center',
  justifyContent: 'center',
  borderRight: '1px solid var(--gray-5)',
  '&:first-child': {
    marginLeft: 0,
    borderTopLeftRadius: 'var(--radius-3)',
    borderBottomLeftRadius: 'var(--radius-3)',
  },
  '&:last-child': {
    borderRight: 0,
    borderTopRightRadius: 'var(--radius-3)',
    borderBottomRightRadius: 'var(--radius-3)',
  },
  '&:hover': {
    backgroundColor: 'var(--gray-a2)',
  },
  '&[data-state=on]': {
    backgroundColor: 'var(--gray-a3)',
    color: 'var(--gray-12)',
  },
  '&:focus-visible': {
    zIndex: 1,
    boxShadow: '0 0 0 2px var(--accent-8)',
  },
});

const ToggleGroup = StyledToggleGroup;
const ToggleGroupItem = StyledItem;

export function PrimitivesHeroToggleGroup() {
  return (
    <ToggleGroup type="single" defaultValue="center" aria-label="Text alignment">
      <ToggleGroupItem value="left" aria-label="Left aligned">
        <TextAlignLeftIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Center aligned">
        <TextAlignCenterIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Right aligned">
        <TextAlignRightIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
