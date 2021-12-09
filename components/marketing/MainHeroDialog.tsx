import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Flex, Text, styled, TextField, Grid } from '@modulz/design-system';
import { DemoButton } from '@components/marketing/DemoButton';
import { DemoIconButton } from '@components/marketing/DemoIconButton';
import { Cross2Icon } from '@radix-ui/react-icons';

const DialogContent = styled(DialogPrimitive.Content, {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  bc: '$loContrast',
  br: '$2',
  py: 10,
  px: 10,
  marginTop: -15,
  boxShadow: '0px 5px 30px -5px rgba(0, 0, 0, 0.1)',

  '& ::selection': {
    backgroundColor: '$blueA5',
  },
});

export function MainHeroDialog() {
  // We prevent the initial auto focus because it's a demo rather than a real UI,
  // so the parent page focus is not stolen.
  const initialAutoFocusPrevented = React.useRef(false);

  return (
    <DialogPrimitive.Root modal={false} defaultOpen>
      <DialogPrimitive.Trigger asChild>
        <DemoButton>Edit Profile</DemoButton>
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
            Edit Profile
          </Text>
        </DialogPrimitive.Title>

        <Text size="2" variant="gray" as="p" css={{ lineHeight: 1.5, mb: '$2' }}>
          Make changes to your profile here. Click save when you’re done.
        </Text>

        <Grid
          align="center"
          css={{ gridTemplateColumns: 'auto 1fr', columnGap: '$5', rowGap: '$1', mb: '$2' }}
        >
          <Text size="1">Name</Text>
          <TextField defaultValue="Pedro Duarte" />
          <Text size="1">Username</Text>
          <TextField defaultValue="@peduarte" />
        </Grid>

        <Flex justify="end" gap="2">
          <DialogPrimitive.Close asChild>
            <DemoButton variant="gray">Save</DemoButton>
          </DialogPrimitive.Close>
        </Flex>

        <DialogPrimitive.Close asChild>
          <DemoIconButton>
            <Cross2Icon />
          </DemoIconButton>
        </DialogPrimitive.Close>
      </DialogContent>
    </DialogPrimitive.Root>
  );
}
