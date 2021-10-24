import React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Text, Flex, styled, globalCss, darkTheme, keyframes } from '@modulz/design-system';
import { ChevronDownIcon } from '@radix-ui/react-icons';

const setGlobalStyles = globalCss({
  body: {
    bc: 'transparent',
    [`.${darkTheme} &`]: {
      bc: 'transparent',
    },
  },
});

export const RadioCardGroup = styled(RadioGroupPrimitive.Root, {
  display: 'flex',
  flexDirection: 'column',
  width: '60%',
  bc: '$loContrast',
  br: '$3',
  boxShadow: '0px 5px 30px -5px rgba(0, 0, 0, 0.1), 0 1px 3px -1px rgba(0, 0, 0, 0.2)',
});

const StyledRadioButton = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '$round',
  width: 20,
  height: 20,
  boxShadow: 'inset 0 0 0 1px $colors$slate8',
  flexShrink: 0,
  mr: '$3',
});

const StyledRadioIndicator = styled('div', {
  width: 10,
  height: 10,
  borderRadius: '$round',
  backgroundColor: '$indigo9',
  transform: 'scale(0)',
});

const StyledRadio = styled(RadioGroupPrimitive.Item, {
  all: 'unset',
  boxSizing: 'border-box',
  userSelect: 'none',
  bc: '$loContrast',
  display: 'flex',
  alignItems: 'center',
  p: '$3',
  '&:first-child': {
    btlr: '$3',
    btrr: '$3',
  },
  '&:last-child': {
    bblr: '$3',
    bbrr: '$3',
  },
  '& + &': {
    boxShadow: 'inset 0 1px $colors$slate5',
  },
  '@hover': {
    '&:hover': {
      bc: '$slate2',
    },
  },
  '&[data-state="checked"]': {
    zIndex: 1,
    bc: '$slate2',
    [`& ${StyledRadioIndicator}`]: {
      transform: 'scale(1)',
    },
  },
  '&:focus-visible[data-state="checked"]': {
    boxShadow: '0 0 0 2px $colors$indigo8',
  },
});

export default function RadioGroupDemo() {
  setGlobalStyles();

  // Let upstream document know that we are ready
  React.useEffect(() => {
    requestAnimationFrame(() => window.top.postMessage({ key: 'radio-group' }, '*'));
  });

  return (
    <Flex
      css={{
        ai: 'center',
        jc: 'center',
        position: 'relative',
        height: '100vh',
        width: '100vw',
      }}
    >
      <RadioCardGroup defaultValue="1">
        <StyledRadio value="1">
          <StyledRadioButton>
            <StyledRadioIndicator />
          </StyledRadioButton>
          <Text size="2" css={{ fontVariantNumeric: 'normal' }}>
            Radio Item 1
          </Text>
        </StyledRadio>
        <StyledRadio value="2">
          <StyledRadioButton>
            <StyledRadioIndicator />
          </StyledRadioButton>
          <Text size="2" css={{ fontVariantNumeric: 'normal' }}>
            Radio Item 2
          </Text>
        </StyledRadio>
        <StyledRadio value="3">
          <StyledRadioButton>
            <StyledRadioIndicator />
          </StyledRadioButton>
          <Text size="2" css={{ fontVariantNumeric: 'normal' }}>
            Radio Item 3
          </Text>
        </StyledRadio>
      </RadioCardGroup>
    </Flex>
  );
}
