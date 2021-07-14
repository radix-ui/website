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
const Box = styled('div', {});
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
  <Box>
    <Label htmlFor="firstName">First name</Label>
    <Input type="text" id="firstName" value="Pedro Duarte" css={{ marginLeft: 15 }} />
  </Box>
);

export default LabelDemo;
