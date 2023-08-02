import { Box, Text } from '@radix-ui/themes';
import { styled } from '@stitches/react';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

const SCROLLBAR_SIZE = 10;

const StyledScrollArea = styled(ScrollAreaPrimitive.Root, {
  width: 200,
  height: '77%',
  borderRadius: 'var(--radius-3)',
  overflow: 'hidden',
  boxShadow: 'var(--shadow-4)',
});

const StyledViewport = styled(ScrollAreaPrimitive.Viewport, {
  width: '100%',
  height: '100%',
  borderRadius: 'inherit',
  backgroundColor: 'var(--color-panel-solid)',
});

const StyledScrollbar = styled(ScrollAreaPrimitive.Scrollbar, {
  display: 'flex',
  // ensures no selection
  userSelect: 'none',
  // disable browser handling of all panning and zooming gestures on touch devices
  touchAction: 'none',
  padding: 2,
  backgroundColor: 'var(--gray-a3)',
  transition: 'background-color 120ms, opacity 60ms',
  '&:hover': { backgroundColor: 'var(--gray-a4)' },
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
  background: 'var(--gray-a9)',
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

export function PrimitivesHeroScrollArea() {
  return (
    <ScrollArea>
      <ScrollAreaViewport>
        <Box p="4">
          <Text as="div" size="2" weight="bold" trim="start">
            Tags
          </Text>
          {TAGS.map((tag) => (
            <Text
              as="div"
              size="1"
              style={{
                lineHeight: 1.5,
                marginTop: 10,
                paddingTop: 10,
                borderTop: `1px solid var(--gray-a6)`,
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
  );
}
