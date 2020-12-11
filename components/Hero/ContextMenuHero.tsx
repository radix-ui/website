import React from 'react';
import { Box, styled, css } from '@modulz/design-system';

const Skeleton = styled('div', {
  width: '130px',
  borderRadius: '6px',
  backgroundColor: 'white',
});

const Item = styled('div', {
  height: 25,
  borderRadius: '3px',
  m: 5,
  backgroundColor: 'gainsboro',
  variants: {
    active: {
      true: {
        backgroundColor: 'mediumvioletred',
      },
    },
  },
});

const Separator = styled('div', {
  height: 1,
  backgroundColor: 'gainsboro',
  m: 5,
});

export function ContextMenuHero() {
  return (
    <Skeleton>
      <Item />
      <Item active />
      <Item />
      <Separator />
      <Item />
      <Item />
    </Skeleton>
  );
}
