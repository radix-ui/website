import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Flex, Text, styled, keyframes, Box } from '@modulz/design-system';
import { DemoButton } from '@components/marketing/DemoButton';
import { DemoIconButton } from '@components/marketing/DemoIconButton';

const DialogContent = styled(DialogPrimitive.Content, {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bc: '$loContrast',
  br: '$2',
  py: 10,
  px: 10,
  marginTop: '-5vh',
  boxShadow: '0px 5px 30px -5px rgba(0, 0, 0, 0.1)',

  '& ::selection': {
    backgroundColor: '$blueA5',
  },
});

export default function DialogDemo() {
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
        background: 'linear-gradient(to bottom right, $colors$indigo4, $colors$violet5)',
      }}
    >
      <DialogPrimitive.Root modal={false} defaultOpen>
        <DialogPrimitive.Trigger asChild>
          <DemoButton css={{ mb: 120 }}>Open Dialog</DemoButton>
        </DialogPrimitive.Trigger>

        <DialogContent
          onOpenAutoFocus={(event) => {
            // We prevent the initial auto focus because it's a demo rather than a real UI,
            // so the parent page focus is not stolen.
            if (initialAutoFocusPrevented.current === false) {
              event.preventDefault();
              initialAutoFocusPrevented.current = true;
            }
          }}
        >
          <DialogPrimitive.Title asChild>
            <Text as="h2" size="4" css={{ fontWeight: '500', mb: '$2', lineHeight: 1.2 }}>
              Dialog
            </Text>
          </DialogPrimitive.Title>

          <Text size="2" css={{ lineHeight: 1.5, mb: '$2' }}>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </Text>

          <DialogPrimitive.Close asChild>
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
          </DialogPrimitive.Close>

          <Flex justify="end" gap="2">
            <DialogPrimitive.Close asChild>
              <DemoButton variant="gray">OK</DemoButton>
            </DialogPrimitive.Close>

            <DialogPrimitive.Close asChild>
              <DemoButton variant="gray">Cancel</DemoButton>
            </DialogPrimitive.Close>
          </Flex>
        </DialogContent>
      </DialogPrimitive.Root>
    </Flex>
  );
}
