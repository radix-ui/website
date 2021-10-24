import React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { Flex, Text, styled, Grid, TextField, globalCss, darkTheme } from '@modulz/design-system';
import { DemoButton } from '@components/marketing/DemoButton';
import { DemoIconButton } from '@components/marketing/DemoIconButton';
import { Cross2Icon } from '@radix-ui/react-icons';

const setGlobalStyles = globalCss({
  body: {
    bc: 'transparent',
    [`.${darkTheme} &`]: {
      bc: 'transparent',
    },
  },
});

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

export default function PopoverDemo() {
  setGlobalStyles();

  // We prevent the initial auto focus because it's a demo rather than a real UI,
  // so the parent page focus is not stolen.
  const initialAutoFocusPrevented = React.useRef(false);

  // Let upstream document know that we are ready
  React.useEffect(() => {
    requestAnimationFrame(() => window.top.postMessage({ key: 'popover' }, '*'));
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
      <PopoverPrimitive.Root modal={false} defaultOpen>
        <PopoverPrimitive.Trigger asChild>
          <DemoButton css={{ mb: 120 }}>Popover</DemoButton>
        </PopoverPrimitive.Trigger>

        <PopoverContent
          side="bottom"
          sideOffset={5}
          avoidCollisions={false}
          onInteractOutside={(event) => event.preventDefault()}
          onOpenAutoFocus={(event) => {
            // We prevent the initial auto focus because it's a demo rather than a real UI,
            // so the parent page focus is not stolen.
            if (initialAutoFocusPrevented.current === false) {
              event.preventDefault();
              initialAutoFocusPrevented.current = true;
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
      </PopoverPrimitive.Root>
    </Flex>
  );
}
