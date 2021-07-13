import React from 'react';
import { styled, keyframes } from '@modulz/design-system';
import { violet, mauve, indigo, blackA } from '@radix-ui/colors';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

const SCROLLBAR_SIZE = 10;

const StyledScrollArea = styled(ScrollAreaPrimitive.Root, {
  width: 300,
  height: 300,
  borderRadius: 4,
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
const Box = styled('div', {});
const Text = styled('div', {
  color: mauve.mauve12,
  marginBottom: 10,
  lineHeight: 1.5,
  variants: {
    size: {
      small: { fontSize: 13 },
      medium: { fontSize: 15 },
      large: { fontSize: 17 },
    },
    bold: {
      true: { fontWeight: 500 },
    },
    faded: {
      true: { color: mauve.mauve11 },
    },
  },
  defaultVariants: {
    size: 'small',
  },
});

const ScrollAreaDemo = () => (
  <ScrollArea>
    <ScrollAreaViewport>
      <Box css={{ background: 'white', padding: 20 }}>
        <Text size="large" bold>
          Scroll Area
        </Text>
        <Text size="medium" faded>
          Augments native scroll functionality for custom, cross-browser styling.
        </Text>
        <Box
          css={{
            width: '100%',
            paddingTop: '50%',
            backgroundColor: violet.violet9,
            borderRadius: 4,
            margin: '20px 0',
          }}
        />
        <Text size="medium" bold>
          Features
        </Text>
        <Box as="ul" css={{ paddingLeft: 20 }}>
          <Text as="li">Scrollbar sits on top of the scrollable content, taking up no space.</Text>
          <Text as="li">
            Scrolling is native; no underlying position movements via CSS transformations.
          </Text>
          <Text as="li">
            Shims pointer behaviors only when interacting with the controls, so keyboard controls
            are unaffected.
          </Text>
          <Text as="li">Supports RTL</Text>
        </Box>
        <Text size="medium" bold css={{ marginTop: 20 }}>
          Accessibility
        </Text>
        <Text>
          In most cases, it's best to rely on native scrolling and work with the customization
          options available in CSS. When that isn't enough, ScrollArea provides additional
          customizability while maintaining the browser's native scroll behavior (as well as
          accessibiliy features, like keyboard scrolling).
        </Text>
        <Text size="medium" bold css={{ marginTop: 20 }}>
          Keyboard Interactions
        </Text>
        <Text>
          Scrolling via keyboard is supported by default because the component relies on native
          scrolling. Specific keyboard interactions may differ between platforms, so we do not
          specify them here or add specific event listeners to handle scrolling via key events.
        </Text>
      </Box>
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
