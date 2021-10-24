import React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-toggle-group';
import { Text, Flex, styled, globalCss, darkTheme, keyframes } from '@modulz/design-system';
import {
  TextAlignCenterIcon,
  TextAlignJustifyIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
} from '@radix-ui/react-icons';

const setGlobalStyles = globalCss({
  body: {
    bc: 'transparent',
    [`.${darkTheme} &`]: {
      bc: 'transparent',
    },
  },
});

import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';

const StyledToggleGroup = styled(ToggleGroupPrimitive.Root, {
  display: 'inline-flex',
  backgroundColor: '$slate6',
  borderRadius: '$2',
  boxShadow: '0px 5px 30px -5px rgba(0, 0, 0, 0.1), 0 1px 3px -1px rgba(0, 0, 0, 0.2)',
});

const StyledItem = styled(ToggleGroupPrimitive.Item, {
  all: 'unset',
  backgroundColor: 'white',
  color: '$mauve11',
  height: 35,
  width: 35,
  display: 'flex',
  fontSize: 15,
  lineHeight: 1,
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: 1,
  '&:first-child': { marginLeft: 0, borderTopLeftRadius: '$2', borderBottomLeftRadius: '$2' },
  '&:last-child': { borderTopRightRadius: '$2', borderBottomRightRadius: '$2' },
  '&:hover': { backgroundColor: '$mauve2' },
  '&[data-state=on]': { backgroundColor: '$mauve3', color: '$mauve12' },
  '&:focus': {
    zIndex: 1,
    boxShadow: '0 0 0 2px $colors$indigo8',
  },
  '&:focus:not(:focus-visible)': {
    zIndex: 'auto',
    boxShadow: 'none',
  },
});

const ToggleGroup = StyledToggleGroup;
const ToggleGroupItem = StyledItem;

export default function RadioGroupDemo() {
  setGlobalStyles();

  // Let upstream document know that we are ready
  React.useEffect(() => {
    requestAnimationFrame(() => window.top.postMessage({ key: 'toggle-group' }, '*'));
  });

  return (
    <Flex
      css={{
        ai: 'center',
        jc: 'center',
        position: 'relative',
        height: '100vh',
        width: '100vw',
        pb: '3vh',
      }}
    >
      <ToggleGroup type="single" defaultValue="center" aria-label="Text alignment">
        <ToggleGroupItem value="left" aria-label="Left aligned">
          <TextAlignLeftIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Center aligned">
          <TextAlignCenterIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Right aligned">
          <TextAlignRightIcon />
        </ToggleGroupItem>
      </ToggleGroup>
    </Flex>
  );
}
