import React from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { styled, keyframes } from '@stitches/react';
import { violet, blackA, red, mauve } from '@radix-ui/colors';

const AlertDialogDemo = () => (
  <AlertDialog.Root>
    <AlertDialog.Trigger asChild>
      <Button>Delete account</Button>
    </AlertDialog.Trigger>
    <AlertDialogContent>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account and remove your data
        from our servers.
      </AlertDialogDescription>
      <Flex css={{ justifyContent: 'flex-end' }}>
        <AlertDialog.Cancel asChild>
          <Button variant="mauve" css={{ marginRight: 25 }}>
            Cancel
          </Button>
        </AlertDialog.Cancel>
        <AlertDialog.Action asChild>
          <Button variant="red">Yes, delete account</Button>
        </AlertDialog.Action>
      </Flex>
    </AlertDialogContent>
  </AlertDialog.Root>
);

const AlertDialogContent = React.forwardRef(({ children, ...props }, forwardedRef) => {
  return (
    <AlertDialog.Portal>
      <StyledOverlay />
      <StyledContent {...props} ref={forwardedRef}>
        {children}
      </StyledContent>
    </AlertDialog.Portal>
  );
});

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

const StyledOverlay = styled(AlertDialog.Overlay, {
  backgroundColor: blackA.blackA9,
  position: 'fixed',
  inset: 0,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
});

const StyledContent = styled(AlertDialog.Content, {
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '500px',
  maxHeight: '85vh',
  padding: 25,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&:focus': { outline: 'none' },
});

const AlertDialogTitle = styled(AlertDialog.Title, {
  margin: 0,
  color: mauve.mauve12,
  fontSize: 17,
  fontWeight: 500,
});

const AlertDialogDescription = styled(AlertDialog.Description, {
  marginBottom: 20,
  color: mauve.mauve11,
  fontSize: 15,
  lineHeight: 1.5,
});

const Flex = styled('div', { display: 'flex' });

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
      red: {
        backgroundColor: red.red4,
        color: red.red11,
        '&:hover': { backgroundColor: red.red5 },
        '&:focus': { boxShadow: `0 0 0 2px ${red.red7}` },
      },
      mauve: {
        backgroundColor: mauve.mauve4,
        color: mauve.mauve11,
        '&:hover': { backgroundColor: mauve.mauve5 },
        '&:focus': { boxShadow: `0 0 0 2px ${mauve.mauve7}` },
      },
    },
  },

  defaultVariants: {
    variant: 'violet',
  },
});

export default AlertDialogDemo;
