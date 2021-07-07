import React from 'react';
import { styled, Box, keyframes, Flex } from '@modulz/design-system';
import * as Checkbox from '@radix-ui/react-checkbox';
import { HeroContainer } from '@components/HeroContainer';
import { CheckIcon, DividerHorizontalIcon } from '@radix-ui/react-icons';

const StyledCheckbox = styled(Checkbox.Root, {
  appearance: 'none',
  border: 'none',
  padding: 0,
  backgroundColor: '$colors$violetA8',
  width: '$7',
  height: '$7',
  borderRadius: '$4',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&:focus': {
    outline: 'none',
    boxShadow: 'inset 0 0 0 1px $colors$violet5, 0 0 0 1px $colors$violet5',
  },
});

const StyledCheckIon = styled(CheckIcon, {
  width: '$5',
  height: '$5',
});

export const CheckboxHero = () => (
  <HeroContainer>
    <StyledCheckbox defaultChecked>
      <Checkbox.Indicator>
        <StyledCheckIon as={CheckIcon} />
      </Checkbox.Indicator>
    </StyledCheckbox>
  </HeroContainer>
);

export const CheckboxIndeterminateDemo = () => {
  const [checked, setChecked] = React.useState<'indeterminate' | boolean>('indeterminate');

  return (
    <>
      <StyledCheckbox css={{ mb: '$2' }} checked={checked} onCheckedChange={setChecked}>
        <Checkbox.Indicator>
          {checked === 'indeterminate' && <DividerHorizontalIcon />}
          {checked === true && <CheckIcon />}
        </Checkbox.Indicator>
      </StyledCheckbox>

      <button
        type="button"
        onClick={() =>
          setChecked((prevIsChecked) =>
            prevIsChecked === 'indeterminate' ? false : 'indeterminate'
          )
        }
      >
        Toggle indeterminate
      </button>
    </>
  );
};
