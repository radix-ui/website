import React from 'react';
import { styled, keyframes } from '@modulz/design-system';
import { PlusIcon } from '@radix-ui/react-icons';
import { violet, violetA } from '@radix-ui/colors';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

const show = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const StyledContent = styled(TooltipPrimitive.Content, {
  borderRadius: 4,
  padding: '10px 15px',
  fontSize: 15,
  lineHeight: 1,
  color: violet.violet11,
  backgroundColor: 'white',
  animation: `${show} 100ms linear`,
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
});

const StyledArrow = styled(TooltipPrimitive.Arrow, {
  fill: 'white',
});

// Exports
export const Tooltip = TooltipPrimitive.Root;
export const TooltipTrigger = TooltipPrimitive.Trigger;
export const TooltipContent = StyledContent;

// Your app...
const Button = styled('button', {
  all: 'unset',
  borderRadius: '100%',
  width: 45,
  height: 45,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 15,
  lineHeight: 1,
  backgroundColor: violetA.violetA9,
  color: violet.violet1,
  '&:hover': { backgroundColor: violetA.violetA10 },
  '&:active': { backgroundColor: violetA.violetA11 },
  '&:focus': { boxShadow: `0 0 0 2px ${violet.violet7}` },
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
