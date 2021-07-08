import React from 'react';
import { styled, keyframes } from '@modulz/design-system';
import { violet, violetA, mauve } from '@radix-ui/colors';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import * as AccordionPrimitive from '@radix-ui/react-accordion';

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-accordion-content-height)' },
});

const slideUp = keyframes({
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: 0 },
});

const StyledAccordion = styled(AccordionPrimitive.Root, {
  borderRadius: 6,
  width: 300,
});

const StyledItem = styled(AccordionPrimitive.Item, {
  overflow: 'hidden',

  '&:first-child': {
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },

  '&:last-child': {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },

  '&:focus-within': {
    position: 'relative',
    zIndex: 1,
    boxShadow: `0 0 0 2px ${violet.violet7}`,
  },
});

const StyledHeader = styled(AccordionPrimitive.Header, {
  margin: 0,
  display: 'flex',
});

const StyledTrigger = styled(AccordionPrimitive.Trigger, {
  fontFamily: 'inherit',
  backgroundColor: 'transparent',
  border: 'none',
  padding: '10px 15px',
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: '15px',
  color: mauve.mauve11,

  '&[data-state="closed"]': {
    backgroundColor: violetA.violetA9,
    color: violet.violet1,
  },

  '&[data-state="open"]': {
    backgroundColor: violetA.violetA11,
    color: violet.violet1,
  },

  '&:hover': {
    backgroundColor: violetA.violetA10,

    '&[data-state="open"]': {
      // backgroundColor: violetA.violetA12,
    },
  },

  '&:focus': { outline: 'none' },
});

const StyledContent = styled(AccordionPrimitive.Content, {
  overflow: 'hidden',
  fontSize: 15,
  // lineHeight: '19px',
  color: violet.violet5,
  backgroundColor: violetA.violetA11,

  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
});

const StyledContentText = styled('div', {
  padding: '10px 15px 20px',
});

const StyledChevron = styled(ChevronDownIcon, {
  transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',
  color: violet.violet1,
  '[data-state=open] &': { transform: 'rotate(180deg)' },
});

// Exports
export const Accordion = StyledAccordion;
export const AccordionItem = StyledItem;
export const AccordionTrigger = React.forwardRef(({ children, ...props }, forwardedRef) => (
  <StyledHeader>
    <StyledTrigger {...props} ref={forwardedRef}>
      {children}
      <StyledChevron aria-hidden />
    </StyledTrigger>
  </StyledHeader>
));
export const AccordionContent = React.forwardRef(({ children, ...props }, forwardedRef) => (
  <StyledContent {...props} ref={forwardedRef}>
    <StyledContentText>{children}</StyledContentText>
  </StyledContent>
));

// Your app...
export const AccordionDemo = () => (
  <Accordion type="single" defaultValue="item-1" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger>Is it accessible?</AccordionTrigger>
      <AccordionContent>Yes. It adheres to the WAI-ARAI design pattern.</AccordionContent>
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
);

export default AccordionDemo;
