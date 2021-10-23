import React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-dialog';
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

const TooltipContent = styled(TooltipPrimitive.Content, {
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

export default function TooltipDemo() {
  setGlobalStyles();

  // We prevent the initial auto focus because it's a demo rather than a real UI,
  // so the parent page focus is not stolen.
  const initialAutoFocusPrevented = React.useRef(false);

  // Let upstream document know that we are ready
  React.useEffect(() => {
    window.top.postMessage({ key: 'tooltip' }, '*');
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
      <TooltipPrimitive.Root modal={false} defaultOpen>
        <TooltipPrimitive.Trigger asChild>
          <DemoButton css={{ mb: 120 }}>Open Tooltip</DemoButton>
        </TooltipPrimitive.Trigger>

        <TooltipContent
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
          <TooltipPrimitive.Title asChild>
            <Text as="h2" size="4" css={{ fontWeight: '500', mb: '$2', lineHeight: 1.2 }}>
              Tooltip
            </Text>
          </TooltipPrimitive.Title>

          <Text size="2" css={{ lineHeight: 1.5, mb: '$2' }}>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </Text>

          <TooltipPrimitive.Close asChild>
            <DemoIconButton>
              <Cross2Icon />
            </DemoIconButton>
          </TooltipPrimitive.Close>

          <Flex justify="end" gap="2">
            <TooltipPrimitive.Close asChild>
              <DemoButton variant="gray">OK</DemoButton>
            </TooltipPrimitive.Close>

            <TooltipPrimitive.Close asChild>
              <DemoButton variant="gray">Cancel</DemoButton>
            </TooltipPrimitive.Close>
          </Flex>
        </TooltipContent>
      </TooltipPrimitive.Root>
    </Flex>
  );
}
