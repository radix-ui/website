import React from 'react';
import { styled, keyframes, theme } from '@modulz/design-system';
import { PlusIcon } from '@radix-ui/react-icons';
import { violet, blackA } from '@radix-ui/colors';
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
const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 35,
  width: 35,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: violet.violet11,
  backgroundColor: 'white',
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  '&:hover': { backgroundColor: violet.violet3 },
  '&:focus': { boxShadow: `0 0 0 2px black` },
});

const TooltipDemo = () => {
  return (
    <Tooltip>
      <TooltipTrigger as={IconButton}>
        <PlusIcon />
      </TooltipTrigger>
      <StyledContent sideOffset={5} className={`${theme}`}>
        Add to library.
        <StyledArrow />
      </StyledContent>
    </Tooltip>
  );
};

export default TooltipDemo;
