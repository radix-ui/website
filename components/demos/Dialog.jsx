import React from 'react';
import { styled, keyframes, theme } from '@modulz/design-system';
import { violet, blackA, mauve, green } from '@radix-ui/colors';
import { Cross2Icon } from '@radix-ui/react-icons';
import * as DialogPrimitive from '@radix-ui/react-dialog';

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});

const StyledOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: blackA.blackA9,
  position: 'fixed',
  inset: 0,
  '&[data-state=open]': { animation: `${fadeIn} 300ms ease-out` },
  '&[data-state=closed]': { animation: `${fadeOut} 300ms ease-out` },
});

function Root({ children, ...props }) {
  return (
    <DialogPrimitive.Root {...props}>
      <StyledOverlay className={`${theme}`} />
      {children}
    </DialogPrimitive.Root>
  );
}

const StyledContent = styled(DialogPrimitive.Content, {
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '450px',
  maxHeight: '85vh',
  padding: 25,
  '&[data-state=open]': { animation: `${fadeIn} 200ms ease-out` },
  '&[data-state=closed]': { animation: `${fadeOut} 100ms ease-out` },
  '&:focus': { outline: 'none' },
});

const StyledTitle = styled(DialogPrimitive.Title, {
  margin: 0,
  fontWeight: 500,
  color: mauve.mauve12,
  fontSize: 17,
});

const StyledDescription = styled(DialogPrimitive.Description, {
  marginBottom: 20,
  color: mauve.mauve11,
  fontSize: 15,
  lineHeight: 1.5,
});

// Exports
const Dialog = Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogContent = StyledContent;
const DialogTitle = StyledTitle;
const DialogDescription = StyledDescription;
const DialogClose = DialogPrimitive.Close;

// Your app...
const Flex = styled('div', { display: 'flex' });
const Box = styled('div', {});

const Button = styled('button', {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 15px',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
  height: 35,

  variants: {
    variant: {
      violet: {
        backgroundColor: 'white',
        color: violet.violet11,
        boxShadow: `0 2px 10px ${blackA.blackA7}`,
        '&:hover': { backgroundColor: mauve.mauve3 },
        '&:focus': { boxShadow: `0 0 0 2px black` },
      },
      green: {
        backgroundColor: green.green4,
        color: green.green11,
        '&:hover': { backgroundColor: green.green5 },
        '&:focus': { boxShadow: `0 0 0 2px ${green.green7}` },
      },
    },
  },

  defaultVariants: {
    variant: 'violet',
  },
});

const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 25,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: violet.violet11,
  position: 'absolute',
  top: 10,
  right: 10,

  '&:hover': { backgroundColor: violet.violet4 },
  '&:focus': { boxShadow: `0 0 0 2px ${violet.violet7}` },
});

const Fieldset = styled('fieldset', {
  all: 'unset',
  display: 'flex',
  gap: 20,
  alignItems: 'center',
  marginBottom: 15,
});

const Label = styled('label', {
  fontSize: 15,
  color: violet.violet11,
  width: 90,
  textAlign: 'right',
});

const Input = styled('input', {
  all: 'unset',
  width: '100%',
  flex: '1',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 10px',
  fontSize: 15,
  lineHeight: 1,
  color: violet.violet11,
  boxShadow: `0 0 0 1px ${violet.violet7}`,
  height: 35,

  '&:focus': { boxShadow: `0 0 0 2px ${violet.violet8}` },
});

const DialogDemo = () => (
  <Dialog>
    <DialogTrigger as={Button} size="large">
      Edit profile
    </DialogTrigger>
    <DialogContent className={`${theme}`}>
      <DialogTitle>Edit profile</DialogTitle>
      <DialogDescription>
        Make changes to your profile here. Click save when you're done.
      </DialogDescription>
      <Fieldset>
        <Label>Name</Label>
        <Input value="Pedro Duarte" />
      </Fieldset>
      <Fieldset>
        <Label>Username</Label>
        <Input value="@peduarte" />
      </Fieldset>
      <Flex css={{ marginTop: 25, justifyContent: 'flex-end' }}>
        <DialogClose as={Button} aria-label="Close" variant="green">
          Save changes
        </DialogClose>
      </Flex>
      <DialogClose as={IconButton}>
        <Cross2Icon />
      </DialogClose>
    </DialogContent>
  </Dialog>
);

export default DialogDemo;
