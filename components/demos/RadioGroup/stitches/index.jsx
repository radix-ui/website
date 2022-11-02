import React from 'react';
import * as RadioGroup from '@radix-ui/react-radio-group';
import { styled } from '@stitches/react';
import { violet, blackA } from '@radix-ui/colors';

const RadioGroupDemo = () => (
  <form>
    <RadioGroupRoot defaultValue="default" aria-label="View density">
      <Flex css={{ alignItems: 'center' }}>
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </Flex>
      <Flex css={{ alignItems: 'center' }}>
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </Flex>
      <Flex css={{ alignItems: 'center' }}>
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </Flex>
    </RadioGroupRoot>
  </form>
);

const RadioGroupRoot = styled(RadioGroup.Root, {
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
});

const RadioGroupItem = React.forwardRef((props, forwardedRef) => {
  return (
    <StyledItem {...props} ref={forwardedRef}>
      <StyledIndicator />
    </StyledItem>
  );
});

const StyledItem = styled(RadioGroup.Item, {
  all: 'unset',
  backgroundColor: 'white',
  width: 25,
  height: 25,
  borderRadius: '100%',
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  '&:hover': { backgroundColor: violet.violet3 },
  '&:focus': { boxShadow: `0 0 0 2px black` },
});

const StyledIndicator = styled(RadioGroup.Indicator, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  position: 'relative',
  '&::after': {
    content: '""',
    display: 'block',
    width: 11,
    height: 11,
    borderRadius: '50%',
    backgroundColor: violet.violet11,
  },
});

const Flex = styled('div', { display: 'flex' });

const Label = styled('label', {
  color: 'white',
  fontSize: 15,
  lineHeight: 1,
  userSelect: 'none',
  paddingLeft: 15,
});

export default RadioGroupDemo;
