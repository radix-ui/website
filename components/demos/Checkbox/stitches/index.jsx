import React from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { styled } from '@modulz/design-system';
import { violet, blackA } from '@radix-ui/colors';
import { CheckIcon } from '@radix-ui/react-icons';

const CheckboxDemo = () => (
  <form>
    <Flex css={{ alignItems: 'center' }}>
      <CheckboxRoot defaultChecked id="c1">
        <CheckboxIndicator>
          <CheckIcon />
        </CheckboxIndicator>
      </CheckboxRoot>
      <Label css={{ paddingLeft: 15 }} htmlFor="c1">
        Accept terms and conditions.
      </Label>
    </Flex>
  </form>
);

const CheckboxRoot = styled(Checkbox.Root, {
  all: 'unset',
  backgroundColor: 'white',
  width: 25,
  height: 25,
  borderRadius: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  '&:hover': { backgroundColor: violet.violet3 },
  '&:focus': { boxShadow: `0 0 0 2px black` },
});

const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: violet.violet11,
});

const Label = styled('label', {
  color: 'white',
  fontSize: 15,
  lineHeight: 1,
  userSelect: 'none',
});

const Flex = styled('div', { display: 'flex' });

export default CheckboxDemo;
