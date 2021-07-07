import React from 'react';
import { styled, keyframes } from '@modulz/design-system';
import { PlusIcon } from '@radix-ui/react-icons';
import { violet, violetA } from '@radix-ui/colors';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

const scaleIn = keyframes({
  '0%': { opacity: 0, transform: 'scale(0)' },
  '100%': { opacity: 1, transform: 'scale(1)' },
});

const StyledContent = styled(TooltipPrimitive.Content, {
  borderRadius: '4px',
  padding: '10px 15px',
  fontSize: '15px',
  lineHeight: '1',
  color: 'white',
  backgroundColor: violetA.violetA12,
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
  transformOrigin: 'var(--radix-tooltip-content-transform-origin)',
  animation: `${scaleIn} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
});

const StyledArrow = styled(TooltipPrimitive.Arrow, {
  fill: violetA.violetA12,
});

// Exports
export const Tooltip = TooltipPrimitive.Root;
export const TooltipTrigger = TooltipPrimitive.Trigger;
export const TooltipContent = StyledContent;

// On your app...
const Button = styled('button', {
  all: 'unset',
  borderRadius: '100%',
  width: 45,
  height: 45,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 15,
  backgroundColor: violetA.violetA9,
  color: violet.violet1,
  '&:hover': { backgroundColor: violetA.violetA10 },
  '&:active': { backgroundColor: violetA.violetA11 },
  '&:focus': { boxShadow: `0 0 0 2px ${violetA.violetA7}` },
});

const Icon = styled(PlusIcon, {
  width: 20,
  height: 20,
});

const TooltipDemo = () => {
  return (
    <Tooltip>
      <TooltipTrigger as={Button}>
        <Icon />
      </TooltipTrigger>
      <StyledContent sideOffset={5}>
        Add to library.
        <StyledArrow />
      </StyledContent>
    </Tooltip>
  );
};

export default TooltipDemo;
