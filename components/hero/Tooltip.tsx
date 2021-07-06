import React from 'react';
import { styled, keyframes } from '@modulz/design-system';
import { PlusIcon } from '@radix-ui/react-icons';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { HeroContainer } from '@components/HeroContainer';

const scaleIn = keyframes({
  '0%': { opacity: 0, transform: 'scale(0)' },
  '100%': { opacity: 1, transform: 'scale(1)' },
});

const StyledContent = styled(TooltipPrimitive.Content, {
  borderRadius: '$2',
  padding: '$2 $3',
  fontSize: '$3',
  lineHeight: '19px',
  color: 'white',
  backgroundColor: '$violetA12',
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
  transformOrigin: 'var(--radix-tooltip-content-transform-origin)',
  animation: `${scaleIn} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
});

const StyledArrow = styled(TooltipPrimitive.Arrow, {
  fill: '$violetA12',
});

export const Tooltip = TooltipPrimitive.Root;
export const TooltipTrigger = TooltipPrimitive.Trigger;
export const TooltipContent = StyledContent;

const Button = styled('button', {
  all: 'unset',
  borderRadius: '$round',
  padding: '$2',
  width: '$4',
  height: '$4',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '$3',
  backgroundColor: '$violetA8',
  color: '$violet1',
  '&:hover': { backgroundColor: '$violetA9' },
  '&:focus': { boxShadow: `0 0 0 2px $colors$violet8` },
});

export const TooltipHero = () => {
  return (
    <HeroContainer css={{ py: '$9' }}>
      <Tooltip>
        <TooltipTrigger as={Button}>
          <PlusIcon />
        </TooltipTrigger>
        <StyledContent sideOffset={5}>
          Add to library.
          <StyledArrow />
        </StyledContent>
      </Tooltip>
    </HeroContainer>
  );
};
