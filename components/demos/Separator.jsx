import React from 'react';
import { styled } from '@modulz/design-system';
import { violet } from '@radix-ui/colors';
import * as SeparatorPrimitive from '@radix-ui/react-separator';

const StyledSeparator = styled(SeparatorPrimitive.Root, {
  backgroundColor: violet.violet6,
  '&[data-orientation=horizontal]': { height: 1, width: '100%' },
  '&[data-orientation=vertical]': { height: '100%', width: 1 },
});

// Exports
export const Separator = StyledSeparator;

// Your app...
const Box = styled('div', {});
const Flex = styled('div', { display: 'flex' });
const Text = styled('div', {
  color: 'white',
  fontSize: 15,
  lineHeight: '20px',
});

const SeparatorDemo = () => (
  <Box css={{ width: '100%', maxWidth: 300, margin: '0 15px' }}>
    <Text css={{ fontWeight: 500 }}>Radix Primitives</Text>
    <Text>An open-source UI component library.</Text>
    <Separator css={{ margin: '15px 0' }} />
    <Flex css={{ height: 20, alignItems: 'center' }}>
      <Text>Blog</Text>
      <Separator decorative orientation="vertical" css={{ margin: '0 15px' }} />
      <Text>Docs</Text>
      <Separator decorative orientation="vertical" css={{ margin: '0 15px' }} />
      <Text>Source</Text>
    </Flex>
  </Box>
);

export default SeparatorDemo;
