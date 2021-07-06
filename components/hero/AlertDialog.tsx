import React from 'react';
import { styled, keyframes, theme } from '@modulz/design-system';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { HeroContainer } from '@components/HeroContainer';

import type * as Polymorphic from '@radix-ui/react-polymorphic';

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});

const StyledOverlay = styled(AlertDialogPrimitive.Overlay, {
  backgroundColor: '$mauveA9',
  position: 'fixed',
  inset: 0,
  '&[data-state=open]': { animation: `${fadeIn} 300ms ease-out` },
  '&[data-state=closed]': { animation: `${fadeOut} 300ms ease-out` },
});

type AlertDialogProps = React.ComponentProps<typeof AlertDialogPrimitive.Root> & {
  children: React.ReactNode;
};

function Root({ children, ...props }: AlertDialogProps) {
  return (
    <AlertDialogPrimitive.Root {...props}>
      <StyledOverlay className={`${theme}`} />
      {children}
    </AlertDialogPrimitive.Root>
  );
}

const StyledContent = styled(AlertDialogPrimitive.Content, {
  backgroundColor: 'white',
  borderRadius: '$3',
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '500px',
  maxHeight: '85vh',
  padding: '$4',
  marginTop: '-5vh',
  '&[data-state=open]': { animation: `${fadeIn} 200ms ease-out` },
  '&[data-state=closed]': { animation: `${fadeOut} 100ms ease-out` },

  '&:focus': { outline: 'none' },
});

const StyledTitle = styled(AlertDialogPrimitive.Title, {
  margin: 0,
  fontFamily: '$untitled',
  fontWeight: 500,
  color: '$mauve12',
  fontSize: '$4',
});

const StyledDescription = styled(AlertDialogPrimitive.Description, {
  margin: '$2 0 $4',
  fontFamily: '$untitled',
  color: '$mauve11',
  fontSize: '$3',
});

const AlertDialog = Root;
const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
const AlertDialogContent = StyledContent;
const AlertDialogTitle = StyledTitle;
const AlertDialogDescription = StyledDescription;
const AlertDialogAction = AlertDialogPrimitive.Action;
const AlertDialogCancel = AlertDialogPrimitive.Cancel;

const Button = styled('button', {
  all: 'unset',
  borderRadius: '$2',
  padding: '$2 $3',
  height: '$4',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '$3',

  variants: {
    variant: {
      violet: {
        backgroundColor: '$violetA8',
        color: '$violet1',
        '&:hover': { backgroundColor: '$violetA9' },
        '&:focus': { boxShadow: `0 0 0 2px $colors$violet8` },
      },
      red: {
        backgroundColor: '$red3',
        color: '$red10',
        '&:hover': { backgroundColor: '$red4' },
        '&:focus': { boxShadow: `0 0 0 2px $colors$red8` },
      },
      ghost: {
        backgroundColor: 'transparent',
        color: '$mauve10',
        '&:hover': { backgroundColor: '$mauve4' },
        '&:focus': { boxShadow: `0 0 0 2px $colors$mauve8` },
      },
    },
  },

  defaultVariants: {
    variant: 'violet',
  },
});

export const AlertDialogHero = () => (
  <HeroContainer css={{ py: '$9' }}>
    <AlertDialog>
      <AlertDialogTrigger as={Button}>Delete account</AlertDialogTrigger>
      <AlertDialogContent className={`${theme}`}>
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete your account and remove your
          data from our servers.
        </AlertDialogDescription>
        <AlertDialogCancel as={Button} variant="ghost" css={{ marginRight: '$2' }}>
          Cancel
        </AlertDialogCancel>
        <AlertDialogAction as={Button} variant="red">
          Yes, delete account
        </AlertDialogAction>
      </AlertDialogContent>
    </AlertDialog>
  </HeroContainer>
);
