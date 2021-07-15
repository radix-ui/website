import React from 'react';
import { styled } from '@modulz/design-system';
import { blackA } from '@radix-ui/colors';
import * as LabelPrimitive from '@radix-ui/react-label';

const StyledLabel = styled(LabelPrimitive.Root, {
  fontSize: 15,
  fontWeight: 500,
  color: 'white',
  userSelect: 'none',
});

// Exports
const Label = StyledLabel;

// Your app...
const Flex = styled('div', { display: 'flex' });
const Input = styled('input', {
  all: 'unset',
  width: 200,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 10px',
  height: 35,
  fontSize: 15,
  lineHeight: 1,
  color: 'white',
  backgroundColor: blackA.blackA5,
  boxShadow: `0 0 0 1px ${blackA.blackA9}`,
  '&:focus': { boxShadow: `0 0 0 2px black` },
});

const LabelDemo = () => (
  <Flex css={{ padding: '0 20px', flexWrap: 'wrap', alignItems: 'center' }}>
    <Label htmlFor="firstName" css={{ lineHeight: '35px', marginRight: 15 }}>
      First name
    </Label>
    <Input type="text" id="firstName" defaultValue="Pedro Duarte" />
  </Flex>
);

export default LabelDemo;
