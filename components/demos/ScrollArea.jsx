import React from 'react';
import { styled, Box, keyframes } from '@modulz/design-system';
import { violet, mauve, blackA } from '@radix-ui/colors';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

const SCROLLBAR_SIZE = 10;

const StyledScrollArea = styled(ScrollAreaPrimitive.Root, {
  width: 300,
  height: 200,
  borderRadius: 8,
  overflow: 'hidden',
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
});

const StyledViewport = styled(ScrollAreaPrimitive.Viewport, {
  width: '100%',
  height: '100%',
  borderRadius: 'inherit',
});

const StyledScrollbar = styled(ScrollAreaPrimitive.Scrollbar, {
  display: 'flex',
  // ensures no selection
  userSelect: 'none',
  // disable browser handling of all panning and zooming gestures on touch devices
  touchAction: 'none',
  padding: 2,
  background: blackA.blackA6,
  transition: 'background 160ms ease-out',
  '&:hover': { background: blackA.blackA8 },
  '&[data-orientation="vertical"]': { width: SCROLLBAR_SIZE },
  '&[data-orientation="horizontal"]': {
    flexDirection: 'column',
    height: SCROLLBAR_SIZE,
  },
});

const StyledThumb = styled(ScrollAreaPrimitive.Thumb, {
  flex: 1,
  background: mauve.mauve10,
  borderRadius: SCROLLBAR_SIZE,
  // increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    minWidth: 44,
    minHeight: 44,
  },
});

const StyledCorner = styled(ScrollAreaPrimitive.Corner, {
  background: blackA.blackA8,
});

// Exports
const ScrollArea = StyledScrollArea;
const ScrollAreaViewport = StyledViewport;
const ScrollAreaScrollbar = StyledScrollbar;
const ScrollAreaThumb = StyledThumb;
const ScrollAreaCorner = StyledCorner;

// Your app...
export const Flex = styled('div', { display: 'flex' });

export const Skeleton = styled('div', {
  backgroundColor: violet.violet12,
  position: 'relative',
  overflow: 'hidden',
  flex: '0 0 auto',
  marginBottom: 10,
  variants: {
    variant: {
      avatar: { height: 45, width: 45, borderRadius: '100%' },
      title: { height: 20, borderRadius: '999px' },
      heading: { height: 15, borderRadius: '999px' },
      text: { height: 10, borderRadius: '999px' },
      button: { borderRadius: 4, height: 25, width: 70 },
    },
  },
  defaultVariants: {
    variant: 'text',
  },
});

const FakeCardContent = () => (
  <Flex>
    {Array.from({ length: 4 }, (_, i) => (
      <Flex css={{ paddingRight: 20, margin: '20px 0' }} key={i}>
        <Skeleton variant="avatar" css={{ marginRight: 15 }} />
        <div>
          <Skeleton css={{ width: 80 }} />
          <Skeleton css={{ width: 100 }} />
          <Skeleton variant="button" />
        </div>
      </Flex>
    ))}
  </Flex>
);

const FakeContent = () => (
  <div style={{ backgroundColor: 'white', padding: 20 }}>
    {Array.from({ length: 8 }, (_, i) => (
      <div key={i}>
        <Skeleton variant="title" css={{ width: 100 }} />
        <Skeleton variant="heading" css={{ width: 150 }} />
        <Skeleton css={{ width: 200 }} />
        <Skeleton css={{ width: 200 }} />
        <FakeCardContent />
        <Skeleton css={{ width: 550 }} />
        <Skeleton css={{ width: 450 }} />
        <Skeleton css={{ width: 500 }} />
        <Skeleton css={{ width: 500 }} />
        <FakeCardContent />
      </div>
    ))}
  </div>
);

const ScrollAreaDemo = () => (
  <ScrollArea>
    <ScrollAreaViewport>
      <FakeContent />
    </ScrollAreaViewport>
    <ScrollAreaScrollbar orientation="vertical">
      <ScrollAreaThumb />
    </ScrollAreaScrollbar>
    <ScrollAreaScrollbar orientation="horizontal">
      <ScrollAreaThumb />
    </ScrollAreaScrollbar>
    <ScrollAreaCorner />
  </ScrollArea>
);

export default ScrollAreaDemo;
