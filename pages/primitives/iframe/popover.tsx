import React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { Flex, Text, styled, Grid, TextField } from '@modulz/design-system';
import { DemoButton } from '@components/marketing/DemoButton';
import { DemoIconButton } from '@components/marketing/DemoIconButton';

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
  // We prevent the initial auto focus because it's a demo rather than a real UI,
  // so the parent page focus is not stolen.
  const initialAutoFocusPrevented = React.useRef(false);

  return (
    <Flex
      css={{
        ai: 'center',
        jc: 'center',
        position: 'relative',
        height: '100vh',
        width: '100vw',
        background: 'linear-gradient(to bottom right, $colors$lime3, $colors$cyan5)',
      }}
    >
      <PopoverPrimitive.Root modal={false} defaultOpen>
        <PopoverPrimitive.Trigger asChild>
          <DemoButton css={{ mb: 120 }}>Dimensions</DemoButton>
        </PopoverPrimitive.Trigger>

        <PopoverContent
          side="bottom"
          sideOffset={5}
          avoidCollisions={false}
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
            Popover
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
              <svg width="11" height="11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.52087 2.18681C9.71613 1.99154 9.71613 1.67496 9.52087 1.4797C9.32561 1.28444 9.00903 1.28444 8.81376 1.4797L5.50065 4.79281L2.18754 1.4797C1.99228 1.28444 1.67569 1.28444 1.48043 1.4797C1.28517 1.67496 1.28517 1.99154 1.48043 2.18681L4.79354 5.49992L1.48043 8.81303C1.28517 9.00829 1.28517 9.32488 1.48043 9.52014C1.67569 9.7154 1.99228 9.7154 2.18754 9.52014L5.50065 6.20703L8.81376 9.52014C9.00903 9.7154 9.32561 9.7154 9.52087 9.52014C9.71613 9.32488 9.71613 9.00829 9.52087 8.81303L6.20776 5.49992L9.52087 2.18681Z"
                  fill="#11181C"
                />
              </svg>
            </DemoIconButton>
          </PopoverPrimitive.Close>
        </PopoverContent>
      </PopoverPrimitive.Root>
    </Flex>
  );
}
