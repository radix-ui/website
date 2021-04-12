import React from 'react';
import { styled } from '@modulz/design-system';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

const StyledAccordion = styled(Accordion.Root, {
  borderTop: '1px solid gainsboro',
});

const StyledItem = styled(Accordion.Item, {
  borderBottom: '1px solid gainsboro',
});

const StyledHeader = styled(Accordion.Header, {
  margin: 0,
  display: 'flex',
});

const StyledButton = styled(Accordion.Button, {
  backgroundColor: 'transparent',
  border: 'none',
  padding: 10,
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const StyledPanel = styled(Accordion.Panel, {
  padding: 10,
});

const AccordionChevron = styled(ChevronDownIcon, {
  transition: 'transform 300ms',

  '[data-state=open] &': {
    transform: 'rotate(180deg)',
  },
});

export const BasicAccordion = ({ showChevrons, preventClose, initialValue = null, ...props }) => {
  const [value, setValue] = React.useState(initialValue);

  return (
    <StyledAccordion
      type="single"
      {...props}
      value={value}
      onValueChange={(newValue) => {
        console.log('on value change', newValue);
        if (preventClose && newValue === undefined) {
          return;
        }
        setValue(newValue);
      }}
    >
      <StyledItem value="item-1">
        <StyledHeader>
          <StyledButton>Item 1 {showChevrons && <AccordionChevron aria-hidden />}</StyledButton>
        </StyledHeader>
        <StyledPanel>Here goes the content for the accordion item 1.</StyledPanel>
      </StyledItem>

      <StyledItem value="item-2">
        <StyledHeader>
          <StyledButton>Item 2 {showChevrons && <AccordionChevron aria-hidden />}</StyledButton>
        </StyledHeader>
        <StyledPanel>Here goes the content for the accordion item 2.</StyledPanel>
      </StyledItem>

      <StyledItem value="item-3">
        <StyledHeader>
          <StyledButton>Item 3 {showChevrons && <AccordionChevron aria-hidden />}</StyledButton>
        </StyledHeader>
        <StyledPanel>Here goes the content for the accordion item 3.</StyledPanel>
      </StyledItem>
    </StyledAccordion>
  );
};
