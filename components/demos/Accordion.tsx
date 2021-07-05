import React from 'react';
import { styled, keyframes, Box, Text, Link, theme } from '@modulz/design-system';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import * as Polymorphic from '@radix-ui/react-polymorphic';

const open = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-accordion-content-height)' },
});

const close = keyframes({
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: 0 },
});

const StyledAccordion = styled(AccordionPrimitive.Root, {
  backgroundColor: 'white',
  borderRadius: '$3',
  width: 320,
  overflow: 'hidden',
});

const StyledItem = styled(AccordionPrimitive.Item, {
  margin: '$2',
  borderRadius: '$2',
  overflow: 'hidden',

  '&:focus-within': {
    '&[data-state="open"]': {
      boxShadow: `0 0 0 2px $colors$violet7`,
    },
    '&[data-state="closed"]': {
      boxShadow: `0 0 0 2px $colors$mauve7`,
    },
  },
});

const StyledHeader = styled(AccordionPrimitive.Header, {
  margin: 0,
  display: 'flex',
});

const StyledTrigger = styled(AccordionPrimitive.Trigger, {
  backgroundColor: 'transparent',
  border: 'none',
  padding: '$2 $3',
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: '$3',
  fontFamily: '$untitled',
  color: '$mauve11',

  '&[data-state="closed"]': {
    backgroundColor: '$mauve3',
  },

  '&[data-state="open"]': {
    backgroundColor: '$violet4',
    color: '$violet11',
  },

  '&:hover': {
    backgroundColor: '$mauve4',
    '&[data-state="open"]': {
      backgroundColor: '$violet4',
    },
  },

  '&:focus': {
    outline: 'none',
  },
});

const StyledContent = styled(AccordionPrimitive.Content, {
  overflow: 'hidden',
  lineHeight: '19px',
  color: '$mauve11',
  backgroundColor: '$violet2',

  '&[data-state="open"]': {
    animation: `${open} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${close} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
});

const StyledContentText = styled(Text, {
  padding: '$2 $3',
});

const StyledChevron = styled(ChevronDownIcon, {
  transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',
  color: '$mauve10',

  '[data-state=open] &': {
    transform: 'rotate(180deg)',
    color: '$violet10',
  },
});

// Exports
export const Accordion = StyledAccordion;
export const AccordionItem = StyledItem;

type AccordionTriggerOwnProps = Polymorphic.OwnProps<typeof AccordionPrimitive.Trigger> & {
  css?: any;
};

type AccordionTriggerComponent = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerOwnProps
>;

export const AccordionTrigger = React.forwardRef(({ children, ...props }, forwardedRef) => (
  <StyledHeader>
    <StyledTrigger {...props} ref={forwardedRef}>
      {children}
      <StyledChevron aria-hidden />
    </StyledTrigger>
  </StyledHeader>
)) as AccordionTriggerComponent;

type AccordionContentOwnProps = Polymorphic.OwnProps<typeof AccordionPrimitive.Content> & {
  css?: any;
};

type AccordionContentComponent = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof AccordionPrimitive.Content>,
  AccordionContentOwnProps
>;

export const AccordionContent = React.forwardRef(({ children, ...props }, forwardedRef) => (
  <StyledContent {...props} ref={forwardedRef}>
    <StyledContentText size="3" css={{ color: 'inherit', lineHeight: 'inherit' }}>
      {children}
    </StyledContentText>
  </StyledContent>
)) as AccordionContentComponent;

export const AccordionHero = (props) => {
  return (
    <Box
      className={`${theme}`}
      css={{
        background: 'linear-gradient(330deg, hsl(272,53%,50%) 0%, hsl(226,68%,56%) 100%)',
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        py: '$8',
        borderTopLeftRadius: '$3',
        borderTopRightRadius: '$3',

        '@bp3': { mx: '-$7' },
        '@bp4': { mx: '-$8' },
      }}
    >
      <Box>
        <Accordion type="single" defaultValue="item-1" {...props}>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the{' '}
              <Link variant="blue" href="https://www.w3.org/TR/wai-aria-practices-1.2/#accordion">
                WAI-ARAI
              </Link>
              design pattern.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Is it unstyled?</AccordionTrigger>
            <AccordionContent>
              Yes. It's unstyled by default, giving you full freedom over the look and feel.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Can it be animated?</AccordionTrigger>
            <AccordionContent>
              Yes! You can animate the Accordion with CSS or JavaScript.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  );
};
