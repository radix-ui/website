import React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { styled, keyframes } from '@lib/stitches';
import { ChevronDownIcon } from '@radix-ui/react-icons';

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-accordion-content-height)' },
});

const slideUp = keyframes({
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: 0 },
});

const StyledAccordion = styled(AccordionPrimitive.Root, {
  background: 'var(--color-panel-solid)',
  borderRadius: 'var(--radius-4)',
  boxShadow: '0 0 0 1px var(--gray-a3), var(--shadow-4)',
  width: '80%',
});

const StyledItem = styled(AccordionPrimitive.Item, {
  overflow: 'hidden',
  marginTop: 1,
  boxShadow: '0 1px 0 var(--gray-6)',

  '&:first-child': {
    marginTop: 0,
    borderTopLeftRadius: 'var(--radius-4)',
    borderTopRightRadius: 'var(--radius-4)',
  },

  '&:last-child': {
    borderBottomLeftRadius: 'var(--radius-4)',
    borderBottomRightRadius: 'var(--radius-4)',
  },

  '&:focus-within': {
    position: 'relative',
    zIndex: 1,
    boxShadow: '0 0 0 2px var(--accent-8)',
  },
});

const StyledHeader = styled(AccordionPrimitive.Header, {
  all: 'unset',
  display: 'flex',
});

const StyledTrigger = styled(AccordionPrimitive.Trigger, {
  all: 'unset',
  // backgroundColor: 'red',
  padding: '0 20px',
  height: 45,
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontFamily: 'inherit',
  fontSize: 'var(--font-size-2)',
  lineHeight: 1,
  color: 'var(--gray-12)',
  transition: 'box-shadow 300ms',
  '&[data-state="open"]': {
    boxShadow: '0 1px 0 var(--gray-6)',
  },
  '@media (hover: hover)': {
    '&:hover': {
      backgroundColor: 'var(--gray-a2)',
    },
  },
});

const StyledContent = styled(AccordionPrimitive.Content, {
  overflow: 'hidden',
  fontSize: 'var(--font-size-2)',
  color: 'var(--gray-a11)',
  backgroundColor: 'var(--gray-a2)',
  lineHeight: 1.5,
  margin: 1,
  '.dark &, .dark-theme &': {
    backgroundColor: 'var(--color-surface)',
  },

  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards`,
  },
});

const StyledContentText = styled('div', {
  padding: '15px 20px',
});

const StyledChevron = styled(ChevronDownIcon, {
  color: 'var(--gray-a9)',
  transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',
  '[data-state=open] &': { transform: 'rotate(180deg)' },
});

const Accordion = StyledAccordion;
const AccordionItem = StyledItem;

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof AccordionPrimitive.Trigger>
>(({ children, ...props }, forwardedRef) => (
  <StyledHeader>
    <StyledTrigger {...props} ref={forwardedRef}>
      {children}
      <StyledChevron aria-hidden />
    </StyledTrigger>
  </StyledHeader>
));
const AccordionContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof AccordionPrimitive.Content>
>(({ children, ...props }, forwardedRef) => (
  <StyledContent {...props} ref={forwardedRef}>
    <StyledContentText>{children}</StyledContentText>
  </StyledContent>
));

export function PrimitivesHeroAccordion() {
  return (
    <Accordion type="single" defaultValue="item-1" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. The Accordion adheres to the WAI‑ARIA design pattern.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>Is it unstyled?</AccordionTrigger>
        <AccordionContent>
          Yes. The Accordion is unstyled by default, giving you freedom over the look and feel.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>Can it be animated?</AccordionTrigger>
        <AccordionContent>
          Yes! You can animate the Accordion with CSS or JavaScript.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
