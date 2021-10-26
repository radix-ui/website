import React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { Flex, Text, styled, Grid, TextField, Box } from '@modulz/design-system';
import { DemoButton } from '@components/marketing/DemoButton';
import { DemoIconButton } from '@components/marketing/DemoIconButton';
import { Cross2Icon } from '@radix-ui/react-icons';

const PopoverContent = styled(PopoverPrimitive.Content, {
  position: 'relative',
  width: 200,
  bc: '$loContrast',
  br: '$2',
  py: 10,
  px: 10,
  boxShadow: '0px 5px 30px -5px rgba(0, 0, 0, 0.1)',

  '& ::selection': {
    backgroundColor: '$blueA5',
  },
});

const PopoverArrow = styled(PopoverPrimitive.Arrow, {
  fill: '$loContrast',
});

export function MainHeroPopover() {
  // We prevent the initial auto focus because it's a demo rather than a real UI,
  // so the parent page focus is not stolen.
  const initialAutoFocusPrevented = React.useRef(false);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [open, setOpen] = React.useState(true);

  return (
    <PopoverPrimitive.Root modal={false} open={open} onOpenChange={setOpen}>
      <PopoverPrimitive.Trigger asChild>
        <DemoButton css={{ mb: 120 }}>Dimensions</DemoButton>
      </PopoverPrimitive.Trigger>

      <Box
        css={{
          // Position it manually because iOS Safari is buggy
          // with transforms and horizontal scroll containers
          '[data-radix-popper-content-wrapper]': {
            left: '50% !important',
            transform: 'translate(-50%, 155px) !important',
          },
        }}
      >
        <PopoverContent
          ref={contentRef}
          portalled={false}
          side="bottom"
          sideOffset={5}
          avoidCollisions={false}
          onInteractOutside={(event) => event.preventDefault()}
          onEscapeKeyDown={(event) => {
            event.preventDefault();
            if (event.target instanceof HTMLElement && contentRef.current?.contains(event.target)) {
              setOpen(false);
            }
          }}
          onOpenAutoFocus={(event) => {
            // We prevent the initial auto focus because it's a demo rather than a real UI,
            // so that the parent page focus is not stolen.
            if (initialAutoFocusPrevented.current === false) {
              event.preventDefault();
              initialAutoFocusPrevented.current = true;
            } else {
              // There's a brutal scroll shift bug with iOS Safari that we need to investigate.
              // Cancelling input focus on open until we figure it out. Not related to the small input font size.
              if (
                /^((?!chrome|android).)*safari/i.test(navigator.userAgent) &&
                navigator.maxTouchPoints > 0
              ) {
                event.preventDefault();
              }
            }
          }}
        >
          <PopoverArrow />

          <Text as="h2" size="3" css={{ fontWeight: '500', mb: '$2', lineHeight: 1.2 }}>
            Dimensions
          </Text>

          <Grid
            align="center"
            css={{ gridTemplateColumns: 'auto 100px', columnGap: '$5', rowGap: '$1' }}
          >
            <Text size="1">Width</Text>
            <TextField defaultValue="100%" />
            <Text size="1">Height</Text>
            <TextField defaultValue="20vh" />
            <Text size="1">Margin</Text>
            <TextField defaultValue="0" />
            <Text size="1">Padding</Text>
            <TextField defaultValue="10%" />
          </Grid>

          <PopoverPrimitive.Close asChild>
            <DemoIconButton>
              <Cross2Icon />
            </DemoIconButton>
          </PopoverPrimitive.Close>
        </PopoverContent>
      </Box>
    </PopoverPrimitive.Root>
  );
}
