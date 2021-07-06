import React from 'react';
import { styled } from '@modulz/design-system';
import * as Label from '@radix-ui/react-label';
import { useLabelContext } from '@radix-ui/react-label';

const StyledLabel = styled(Label.Root, {
  fontSize: '16px',
  fontFamily: 'system-ui',
});

const Input = styled('input', {});

/* A custom form control you have built */
const CustomCheckbox = () => {
  const id = useLabelContext();
  return <CustomCheckboxPart aria-labelledby={id} tabIndex={0} role="checkbox" />;
};

const CustomCheckboxPart = styled('span', {
  display: 'inline-block',
  verticalAlign: 'middle',
  border: '1px solid black',
  width: 15,
  height: 15,
});

export const LabelDemo = () => <StyledLabel>First name</StyledLabel>;

export const LabelInputDemo = () => (
  <>
    <StyledLabel htmlFor="firstName">First name</StyledLabel>
    <Input type="text" id="firstName" css={{ ml: 10 }} />
  </>
);

export const LabelCheckboxDemo = () => (
  <StyledLabel>
    <CustomCheckbox /> I agree to the terms and conditions
  </StyledLabel>
);
