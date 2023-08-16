import { Text } from '@radix-ui/themes';
import { styled } from '@lib/stitches';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

export const RadioCardGroup = styled(RadioGroupPrimitive.Root, {
  display: 'flex',
  flexDirection: 'column',
  width: '60%',
  backgroundColor: 'var(--color-panel-solid)',
  borderRadius: 'var(--radius-4)',
  boxShadow: 'var(--shadow-4)',
});

const StyledRadioButton = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '100%',
  width: 20,
  height: 20,
  boxShadow: 'inset 0 0 0 1px var(--gray-8)',
  backgroundColor: 'var(--color-surface)',
  flexShrink: 0,
  marginRight: 'var(--space-3)',
});

const StyledRadioIndicator = styled('div', {
  width: 10,
  height: 10,
  borderRadius: '100%',
  backgroundColor: 'var(--gray-12)',
  transform: 'scale(0)',
});

const StyledRadio = styled(RadioGroupPrimitive.Item, {
  all: 'unset',
  boxSizing: 'border-box',
  userSelect: 'none',
  display: 'flex',
  alignItems: 'center',
  padding: 'var(--space-3)',
  '&:first-child': {
    borderTopLeftRadius: 'var(--radius-4)',
    borderTopRightRadius: 'var(--radius-4)',
  },
  '&:last-child': {
    borderBottomLeftRadius: 'var(--radius-4)',
    borderBottomRightRadius: 'var(--radius-4)',
  },
  '& + &': {
    boxShadow: 'inset 0 1px var(--gray-5)',
  },
  '@hover': {
    '&:hover': {
      backgroundColor: 'var(--gray-a2)',
    },
  },
  '&[data-state="checked"]': {
    zIndex: 1,
    backgroundColor: 'var(--gray-a2)',
    [`& ${StyledRadioIndicator}`]: {
      transform: 'scale(1)',
    },
  },
  '&:focus-visible[data-state="checked"]': {
    boxShadow: '0 0 0 2px var(--accent-8)',
  },
});

export function PrimitivesHeroRadioGroup() {
  return (
    <RadioCardGroup defaultValue="1">
      <StyledRadio value="1">
        <StyledRadioButton>
          <StyledRadioIndicator />
        </StyledRadioButton>
        <Text size="2">Indigo Blue</Text>
      </StyledRadio>
      <StyledRadio value="2">
        <StyledRadioButton>
          <StyledRadioIndicator />
        </StyledRadioButton>
        <Text size="2">Taupe Brown</Text>
      </StyledRadio>
      <StyledRadio value="3">
        <StyledRadioButton>
          <StyledRadioIndicator />
        </StyledRadioButton>
        <Text size="2">Slate Gray</Text>
      </StyledRadio>
    </RadioCardGroup>
  );
}
