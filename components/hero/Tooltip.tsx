import React from 'react';
import { theme, styled, keyframes, Text, Box, Switch, Flex, Link } from '@modulz/design-system';
import * as Tooltip from '@radix-ui/react-tooltip';
import { PlusIcon } from '@radix-ui/react-icons';
import { HeroContainer } from '@components/HeroContainer';

const scaleIn = keyframes({
  '0%': { opacity: 0, transform: 'scale(0)' },
  '100%': { opacity: 1, transform: 'scale(1)' },
});

const StyledButton = styled(Tooltip.Trigger, {
  all: 'unset',
  borderRadius: '$round',
  padding: '$2',
  width: '$4',
  height: '$4',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '$3',
  backgroundColor: theme.colors.violet3.value,
  color: theme.colors.violet10.value,

  '&:hover': {
    backgroundColor: theme.colors.violet4.value,
  },
  '&:focus': {
    boxShadow: `0 0 0 2px ${theme.colors.violet8.value}`,
  },
});

const StyledContent = styled(Tooltip.Content, {
  borderRadius: '$2',
  padding: '$2 $3',
  fontSize: '$3',
  lineHeight: '19px',
  color: 'white',
  backgroundColor: theme.colors.violet9.value,
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',

  transformOrigin: 'var(--radix-tooltip-content-transform-origin)',
  animation: `${scaleIn} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
});

const StyledArrow = styled(Tooltip.Arrow, {
  fill: theme.colors.violet9.value,
});

export const TooltipHero = () => {
  return (
    <HeroContainer css={{ py: '$9' }}>
      <Tooltip.Root>
        <StyledButton>
          <PlusIcon />
        </StyledButton>
        <StyledContent sideOffset={5}>
          Add to library.
          <StyledArrow />
        </StyledContent>
      </Tooltip.Root>
    </HeroContainer>
  );
};
