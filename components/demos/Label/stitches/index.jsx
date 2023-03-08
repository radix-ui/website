import React from 'react';
import * as Label from '@radix-ui/react-label';
import { styled } from '@modulz/design-system';
import { blackA } from '@radix-ui/colors';

const LabelDemo = () => (
  <Flex css={{ padding: '0 20px', flexWrap: 'wrap', gap: 15, alignItems: 'center' }}>
    <LabelRoot htmlFor="firstName">First name</LabelRoot>
    <Input type="text" id="firstName" defaultValue="Pedro Duarte" />
  </Flex>
);

const LabelRoot = styled(Label.Root, {
  fontSize: 15,
  fontWeight: 500,
  lineHeight: '35px',
  color: 'white',
});

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
  '&::selection': { backgroundColor: blackA.blackA9, color: 'white' },
});

const Flex = styled('div', { display: 'flex' });

export default LabelDemo;
