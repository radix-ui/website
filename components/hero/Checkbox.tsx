import React from 'react';
import { styled } from '@modulz/design-system';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { HeroContainer } from '@components/HeroContainer';
import { CheckIcon } from '@radix-ui/react-icons';

import type * as Polymorphic from '@radix-ui/react-polymorphic';

const StyledCheckbox = styled(CheckboxPrimitive.Root, {
  appearance: 'none',
  border: 'none',
  padding: 0,
  backgroundColor: '$colors$violetA9',
  color: '$violet1',
  width: '$7',
  height: '$7',
  borderRadius: '$2',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&:hover': { backgroundColor: '$violetA10' },
  '&:active': { backgroundColor: '$violetA11' },
  '&:focus': {
    outline: 'none',
    boxShadow: 'inset 0 0 0 1px $colors$violet7, 0 0 0 1px $colors$violet7',
  },
});

const StyledCheckIon = styled(CheckIcon, {
  width: '$5',
  height: '$5',
});

type CheckboxOwnProps = Polymorphic.OwnProps<typeof CheckboxPrimitive.Root>;
type CheckboxComponent = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof CheckboxPrimitive.Root>,
  CheckboxOwnProps
>;

export const Checkbox = React.forwardRef((props, forwardedRef) => (
  <StyledCheckbox {...props} ref={forwardedRef}>
    <CheckboxPrimitive.Indicator>
      <StyledCheckIon as={CheckIcon} />
    </CheckboxPrimitive.Indicator>
  </StyledCheckbox>
)) as CheckboxComponent;

export const CheckboxHero = () => (
  <HeroContainer>
    <Checkbox defaultChecked />
  </HeroContainer>
);
