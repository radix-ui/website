import React from 'react';
import { styled, keyframes, theme } from '@modulz/design-system';
import { violet, violetA, red, mauve, mauveA } from '@radix-ui/colors';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});

const StyledOverlay = styled(AlertDialogPrimitive.Overlay, {
  backgroundColor: mauveA.mauveA9,
  position: 'fixed',
  inset: 0,
  '&[data-state=open]': { animation: `${fadeIn} 300ms ease-out` },
  '&[data-state=closed]': { animation: `${fadeOut} 300ms ease-out` },
});

function Root({ children, ...props }) {
  return (
    <AlertDialogPrimitive.Root {...props}>
      <StyledOverlay className={`${theme}`} />
      {children}
    </AlertDialogPrimitive.Root>
  );
}

const StyledContent = styled(AlertDialogPrimitive.Content, {
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
  padding: 20,
  '&[data-state=open]': { animation: `${fadeIn} 200ms ease-out` },
  '&[data-state=closed]': { animation: `${fadeOut} 100ms ease-out` },
  '&:focus': { outline: 'none' },
});

const StyledTitle = styled(AlertDialogPrimitive.Title, {
  margin: 0,
  fontWeight: 500,
  color: mauve.mauve12,
  fontSize: 17,
});

const StyledDescription = styled(AlertDialogPrimitive.Description, {
  margin: '10px 0 20px',
  color: mauve.mauve11,
  fontSize: 15,
});

// Exports
const AlertDialog = Root;
const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
const AlertDialogContent = StyledContent;
const AlertDialogTitle = StyledTitle;
const AlertDialogDescription = StyledDescription;
const AlertDialogAction = AlertDialogPrimitive.Action;
const AlertDialogCancel = AlertDialogPrimitive.Cancel;

// Your app...
const Button = styled('button', {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 20px',
  fontSize: 15,
  lineHeight: 1,

  variants: {
    variant: {
      violet: {
        backgroundColor: violetA.violetA9,
        color: violet.violet1,
        '&:hover': { backgroundColor: violetA.violetA10 },
        '&:active': { backgroundColor: violetA.violetA11 },
        '&:focus': { boxShadow: `0 0 0 2px ${violet.violet7}` },
      },
      red: {
        backgroundColor: red.red3,
        color: red.red11,
        '&:hover': { backgroundColor: red.red4 },
        '&:active': { backgroundColor: red.red5 },
        '&:focus': { boxShadow: `0 0 0 2px ${red.red7}` },
      },
      mauve: {
        backgroundColor: mauve.mauve3,
        color: mauve.mauve11,
        '&:hover': { backgroundColor: mauve.mauve4 },
        '&:active': { backgroundColor: mauve.mauve5 },
        '&:focus': { boxShadow: `0 0 0 2px ${mauve.mauve7}` },
      },
    },
    size: {
      medium: { height: 35 },
      large: { height: 45 },
    },
  },

  defaultVariants: {
    size: 'medium',
    variant: 'violet',
  },
});

const AlertDialogDemo = () => (
  <AlertDialog>
    <AlertDialogTrigger as={Button} size="large">
      Delete account
    </AlertDialogTrigger>
    <AlertDialogContent className={`${theme}`}>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account and remove your data
        from our servers.
      </AlertDialogDescription>
      <AlertDialogCancel as={Button} variant="mauve" css={{ marginRight: '20px' }}>
        Cancel
      </AlertDialogCancel>
      <AlertDialogAction as={Button} variant="red">
        Yes, delete account
      </AlertDialogAction>
    </AlertDialogContent>
  </AlertDialog>
);

export default AlertDialogDemo;
