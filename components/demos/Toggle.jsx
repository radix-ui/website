import React from 'react';
import { styled } from '@modulz/design-system';
import { violet, blackA } from '@radix-ui/colors';
import { FontBoldIcon, FontItalicIcon, StrikethroughIcon } from '@radix-ui/react-icons';
import * as TogglePrimitive from '@radix-ui/react-toggle';

const StyledToggle = styled(TogglePrimitive.Root, {
  all: 'unset',
  backgroundColor: 'white',
  height: 35,
  width: 35,
  borderRadius: 4,
  display: 'flex',
  fontSize: 15,
  lineHeight: 1,
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  '&:hover': { backgroundColor: violet.violet3 },
  '&[data-state=on]': { backgroundColor: blackA.blackA10, color: 'white', boxShadow: 'none' },
  '&:focus': { boxShadow: `0 0 0 2px black` },
});

// Exports
const Toggle = StyledToggle;

// Your app...
const Box = styled('div', {});
const Flex = styled('div', { display: 'flex' });

const ToggleDemo = () => (
  <Flex>
    <Box>
      <Toggle>
        <FontBoldIcon />
      </Toggle>
    </Box>
    <Box css={{ margin: '0 5px' }}>
      <Toggle>
        <FontItalicIcon />
      </Toggle>
    </Box>
    <Box>
      <Toggle>
        <StrikethroughIcon />
      </Toggle>
    </Box>
  </Flex>
);

export default ToggleDemo;
