import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Flex, Text, styled, keyframes, Box, globalCss, darkTheme } from '@modulz/design-system';
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
  marginTop: '-3vh',
  boxShadow: '0px 5px 30px -5px rgba(0, 0, 0, 0.1)',

  '& ::selection': {
    backgroundColor: '$blueA5',
  },
});

export default function DialogDemo() {
  setGlobalStyles();

  // We prevent the initial auto focus because it's a demo rather than a real UI,
  // so the parent page focus is not stolen.
  const initialAutoFocusPrevented = React.useRef(false);

  // Let upstream document know that we are ready
  React.useEffect(() => {
    window.top.postMessage({ key: 'dialog' }, '*');
  }, []);

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
      <DialogPrimitive.Root modal={false} defaultOpen>
        <DialogPrimitive.Trigger asChild>
          <DemoButton css={{ mb: 120 }}>Open Dialog</DemoButton>
        </DialogPrimitive.Trigger>

        <DialogContent
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
              <Cross2Icon />
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
