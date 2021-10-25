import React from 'react';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import { Text, Flex, styled, globalCss, darkTheme, keyframes, Box } from '@modulz/design-system';

const setGlobalStyles = globalCss({
  body: {
    bc: 'transparent',
    [`.${darkTheme} &`]: {
      bc: 'transparent',
    },
  },
});

const SCROLLBAR_SIZE = 10;

const StyledScrollArea = styled(ScrollAreaPrimitive.Root, {
  width: 200,
  height: '77%',
  borderRadius: '$3',
  overflow: 'hidden',
  boxShadow: '0px 5px 30px -5px rgba(0, 0, 0, 0.1), 0 1px 3px -1px rgba(0, 0, 0, 0.2)',
});

const StyledViewport = styled(ScrollAreaPrimitive.Viewport, {
  width: '100%',
  height: '100%',
  borderRadius: 'inherit',
  bc: '$loContrast',
});

const StyledScrollbar = styled(ScrollAreaPrimitive.Scrollbar, {
  display: 'flex',
  // ensures no selection
  userSelect: 'none',
  // disable browser handling of all panning and zooming gestures on touch devices
  touchAction: 'none',
  padding: 2,
  backgroundColor: '$slateA3',
  transition: 'background-color 120ms, opacity 60ms',
  '&:hover': { backgroundColor: '$slateA4' },
  '&[data-orientation="vertical"]': { width: SCROLLBAR_SIZE },
  '&[data-orientation="horizontal"]': {
    flexDirection: 'column',
    height: SCROLLBAR_SIZE,
  },
  '&[data-state="hidden"]': {
    transitionDuration: '120ms, 240ms',
    opacity: 0,
  },
});

const StyledThumb = styled(ScrollAreaPrimitive.Thumb, {
  flex: 1,
  background: '$slateA9',
  transition: 'background-color 120ms',
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
  [`.${StyledScrollbar.className}:hover &`]: {
    background: '$slateA11',
  },
});

const StyledCorner = styled(ScrollAreaPrimitive.Corner, {
  background: '$blackA8',
});

const ScrollArea = StyledScrollArea;
const ScrollAreaViewport = StyledViewport;
const ScrollAreaScrollbar = StyledScrollbar;
const ScrollAreaThumb = StyledThumb;
const ScrollAreaCorner = StyledCorner;

const TAGS = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);

export default function ScrollAreaDemo() {
  setGlobalStyles();

  // Let upstream document know that we are ready
  React.useEffect(() => {
    requestAnimationFrame(() => window.top.postMessage({ key: 'scroll-area' }, '*'));
  });

  return (
    <Flex
      css={{
        ai: 'center',
        jc: 'center',
        position: 'relative',
        height: '100vh',
        width: '100vw',
      }}
    >
      <ScrollArea>
        <ScrollAreaViewport>
          <Box css={{ padding: '15px 20px' }}>
            <Text size="2" css={{ lineHeight: 1.5, fontWeight: 500 }}>
              Tags
            </Text>
            {TAGS.map((tag) => (
              <Text
                size="1"
                css={{
                  lineHeight: 1.5,
                  marginTop: 10,
                  paddingTop: 10,
                  borderTop: `1px solid $slate6`,
                }}
                key={tag}
              >
                {tag}
              </Text>
            ))}
          </Box>
        </ScrollAreaViewport>
        <ScrollAreaScrollbar forceMount orientation="vertical">
          <ScrollAreaThumb />
        </ScrollAreaScrollbar>
        <ScrollAreaScrollbar orientation="horizontal">
          <ScrollAreaThumb />
        </ScrollAreaScrollbar>
        <ScrollAreaCorner />
      </ScrollArea>
    </Flex>
  );
}
