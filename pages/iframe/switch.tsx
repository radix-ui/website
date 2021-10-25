import React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { darkTheme, Flex, globalCss, styled } from '@modulz/design-system';

const StyledSwitch = styled(SwitchPrimitive.Root, {
  all: 'unset',
  width: 42,
  height: 25,
  backgroundColor: '$slateA5',
  borderRadius: '9999px',
  position: 'relative',
  transition: 'background-color 100ms, box-shadow 100ms',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  '&[data-state="checked"]': {
    backgroundColor: '$indigo9',
  },
  '&:focus': {
    boxShadow: `0 0 0 2px $colors$slateA8`,
  },
  '&[data-state="checked"]:focus': {
    boxShadow: `0 0 0 2px $colors$indigoA8`,
  },
  '&:focus:not(:focus-visible)': {
    boxShadow: 'none',
  },
});

const StyledThumb = styled(SwitchPrimitive.Thumb, {
  display: 'block',
  width: 21,
  height: 21,
  backgroundColor: 'white',
  borderRadius: '9999px',
  boxShadow: `0 2px 2px $colors$blackA7`,
  transition: 'transform 100ms',
  transform: 'translateX(2px)',
  willChange: 'transform',
  '&[data-state="checked"]': { transform: 'translateX(19px)' },
});

const Switch = StyledSwitch;
const SwitchThumb = StyledThumb;

export default function SwitchDemo() {
  // Let upstream document know that we are ready
  React.useEffect(() => {
    requestAnimationFrame(() => window.top.postMessage({ key: 'switch' }, '*'));
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
      <form>
        <Flex css={{ alignItems: 'center' }}>
          <Switch defaultChecked id="s1" aria-label="Demo switch">
            <SwitchThumb />
          </Switch>
        </Flex>
      </form>
    </Flex>
  );
}
