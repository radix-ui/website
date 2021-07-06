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

const StyledButton = styled('button', {
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
        backgroundColor: '$violet3',
        color: '$violet10',
        '&:hover': { backgroundColor: '$violet4' },
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

const StyledOverlay = styled(AlertDialogPrimitive.Overlay, {
  backgroundColor: '$slateA9',
  position: 'fixed',
  inset: 0,
  '&[data-state=open]': { animation: `${fadeIn} 300ms ease-out` },
  '&[data-state=closed]': { animation: `${fadeOut} 300ms ease-out` },
});

type AlertDialogProps = React.ComponentProps<typeof AlertDialogPrimitive.Root> & {
  children: React.ReactNode;
};

function AlertDialog({ children, ...props }: AlertDialogProps) {
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
  minWidth: 200,
  maxHeight: '85vh',
  padding: '$4',
  marginTop: '-5vh',

  '&[data-state=open]': { animation: `${fadeIn} 200ms ease-out` },
  '&[data-state=closed]': { animation: `${fadeOut} 100ms ease-out` },

  '&:focus': { outline: 'none' },
});

type AlertDialogContentOwnProps = Polymorphic.OwnProps<typeof AlertDialogPrimitive.Content> & {
  css?: any;
};
type AlertDialogContentComponent = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof AlertDialogPrimitive.Content>,
  AlertDialogContentOwnProps
>;

const AlertDialogContent = React.forwardRef(({ children, ...props }, forwardedRef) => (
  <StyledContent {...props} ref={forwardedRef}>
    {children}
  </StyledContent>
)) as AlertDialogContentComponent;

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

const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
const AlertDialogTitle = StyledTitle;
const AlertDialogDescription = StyledDescription;
const AlertDialogAction = AlertDialogPrimitive.Action;
const AlertDialogCancel = AlertDialogPrimitive.Cancel;

export const AlertDialogHero = () => (
  <HeroContainer css={{ py: '$9' }}>
    <AlertDialog>
      <AlertDialogTrigger as={StyledButton}>Delete account</AlertDialogTrigger>
      <AlertDialogContent className={`${theme}`} css={{ width: '90vw', maxWidth: '500px' }}>
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete your account and remove your
          data from our servers.
        </AlertDialogDescription>
        <AlertDialogCancel as={StyledButton} variant="ghost" css={{ marginRight: '$2' }}>
          Cancel
        </AlertDialogCancel>
        <AlertDialogAction as={StyledButton} variant="red">
          I uderstand, delete account
        </AlertDialogAction>
      </AlertDialogContent>
    </AlertDialog>
  </HeroContainer>
);
