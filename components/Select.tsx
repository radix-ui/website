import React from 'react';
import { Box, Flex, styled } from '@modulz/design-system';
import { ChevronDownIcon } from '@radix-ui/react-icons';

const StyledSelect = styled('select', {
  appearance: 'none',
  border: 'none',
  fontSize: '$2',
  userSelect: 'none',
  backgroundColor: 'transparent',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  fontFamily: '$untitled',
  color: '$hiContrast',
  height: '$5',
  pl: '$1',
  pr: '$5',
  width: 'auto',
  fontVariantNumeric: 'tabular-nums',

  '&:focus': { outline: 'none' },
});

export function Select({ children, ...props }) {
  return (
    <Flex
      css={{
        position: 'relative',
        alignItems: 'center',
        borderRadius: '$1',
        '&:focus-within': { boxShadow: 'inset 0 0 0 1px $gray600' },
        '&:hover': { boxShadow: 'inset 0 0 0 1px $gray600' },
      }}
    >
      <StyledSelect {...props}>{children}</StyledSelect>

      <Box
        css={{
          position: 'absolute',
          right: '$1',
          pointerEvents: 'none',
        }}
      >
        <ChevronDownIcon />
      </Box>
    </Flex>
  );
}
