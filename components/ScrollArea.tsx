import React from 'react';
import { Box, styled } from '@modulz/design-system';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

type ScrollAreaProps = React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Viewport> & {
  css?: any;
  disabled?: boolean;
};
const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Viewport>,
  ScrollAreaProps
>((props, forwardedRef) => {
  const { disabled = false, ...scrollAreaProps } = props;

  if (disabled) {
    return <Box {...scrollAreaProps} css={{ overflow: 'hidden', ...scrollAreaProps.css }} />;
  }

  return (
    <ScrollAreaRoot>
      <ScrollAreaViewport {...scrollAreaProps} ref={forwardedRef} />
      <ScrollAreaScrollbar orientation="vertical">
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
      <ScrollAreaScrollbar orientation="horizontal">
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
    </ScrollAreaRoot>
  );
});

const SCROLLBAR_SIZE = 8;

const ScrollAreaRoot = styled(ScrollAreaPrimitive.Root, {
  width: '100%',
  height: '100%',
});

const ScrollAreaViewport = styled(ScrollAreaPrimitive.Viewport, {
  width: '100%',
  height: '100%',
  borderRadius: 'inherit',
});

const ScrollAreaScrollbar = styled(ScrollAreaPrimitive.Scrollbar, {
  display: 'flex',
  // ensures no selection
  userSelect: 'none',
  // disable browser handling of all panning and zooming gestures on touch devices
  touchAction: 'none',
  padding: 2,
  '&[data-orientation="vertical"]': { width: SCROLLBAR_SIZE },
  '&[data-orientation="horizontal"]': {
    flexDirection: 'column',
    height: SCROLLBAR_SIZE,
  },
});

const ScrollAreaThumb = styled(ScrollAreaPrimitive.Thumb, {
  flex: 1,
  background: '$mauve7',
  borderRadius: SCROLLBAR_SIZE,
  zIndex: 1,
  // increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html
  position: 'relative',
  '@media (hover: none)': {
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
  },
});

export { ScrollArea };
