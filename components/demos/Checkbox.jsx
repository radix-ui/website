import React from 'react';
import { styled, keyframes } from '@modulz/design-system';
import { violet, violetA } from '@radix-ui/colors';
import { CheckIcon } from '@radix-ui/react-icons';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

const scaleIn = keyframes({
  '0%': { transform: 'scale(0)' },
  '100%': { transform: 'scale(1)' },
});

const StyledCheckbox = styled(CheckboxPrimitive.Root, {
  all: 'unset',
  backgroundColor: violetA.violetA9,
  color: violet.violet1,
  width: 45,
  height: 45,
  borderRadius: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&:hover': { backgroundColor: violetA.violetA10 },
  '&:active': { backgroundColor: violetA.violetA11 },
  '&:focus': { boxShadow: `0 0 0 2px ${violet.violet7}` },
});

const StyledCheckIon = styled(CheckIcon, {
  width: 20,
  height: 20,
  animation: `${scaleIn} 100ms cubic-bezier(0.87, 0, 0.13, 1)`,
});

export const Checkbox = React.forwardRef((props, forwardedRef) => (
  <StyledCheckbox {...props} ref={forwardedRef}>
    <CheckboxPrimitive.Indicator>
      <StyledCheckIon as={CheckIcon} />
    </CheckboxPrimitive.Indicator>
  </StyledCheckbox>
));

const CheckboxDemo = () => <Checkbox defaultChecked />;

export default CheckboxDemo;
