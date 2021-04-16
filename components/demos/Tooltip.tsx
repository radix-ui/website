import React from 'react';
import { styled, Box, keyframes, Flex } from '@modulz/design-system';
import * as Tooltip from '@radix-ui/react-tooltip';
import { BlendingModeIcon } from '@radix-ui/react-icons';
import { HeroContainer } from '@components/HeroContainer';

const StyledContent = styled(Tooltip.Content, {
  borderRadius: 3,
  padding: '5px 10px',
  fontSize: 14,
  backgroundColor: 'gainsboro',
  color: 'black',
});

const StyledArrow = styled(Tooltip.Arrow, {
  fill: 'gainsboro',
});

export const TooltipDemo = ({ disabled, ...props }) => (
  <Tooltip.Root {...props}>
    {disabled ? (
      <Tooltip.Trigger as="span">
        <button type="button" disabled style={{ pointerEvents: 'none' }}>
          <BlendingModeIcon />
        </button>
      </Tooltip.Trigger>
    ) : (
      <Tooltip.Trigger>
        <BlendingModeIcon />
      </Tooltip.Trigger>
    )}

    <StyledContent>
      Blending mode
      <StyledArrow />
    </StyledContent>
  </Tooltip.Root>
);

const tooltip = keyframes({
  '0%': { opacity: '0', transform: 'translateY(0)' },
  '30%': { opacity: '0', transform: 'translateY(0)' },
  '35%': { opacity: '1', transform: 'translateY(-3px)' },
  '74.9999%': { opacity: '1', transform: 'translateY(-3px)' },
  '75%': { opacity: '0', transform: 'translateY(0)' },
  '100%': { opacity: '0', transform: 'translateY(0)' },
});

const cursor = keyframes({
  '0%': { transform: 'translate(30px, 30px)' },
  '22%': { transform: 'translate(30px, 30px)' },
  '26%': { transform: 'translate(0, 0)' },
  '74%': { transform: 'translate(0, 0)' },
  '78%': { transform: 'translate(30px, 30px)' },
});

export const TooltipHero = () => {
  return (
    <HeroContainer>
      <Box css={{ position: 'relative' }}>
        <Box
          css={{
            position: 'absolute',
            top: 18,
            right: 0,
            transform: 'translate(30px, 30px)',
            animation: ` 6000ms infinite`,
            animationTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
            zIndex: '1',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <g clipPath="url(#clip0)">
              <g filter="url(#filter0_d)">
                <path
                  d="M7.5 23.1865L4.79423 0.5L23.0885 14.1865L13.5442 15.6554L7.5 23.1865Z"
                  fill="black"
                />
                <path
                  d="M7.5 23.1865L4.79423 0.5L23.0885 14.1865L13.5442 15.6554L7.5 23.1865Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_d"
                x="-5.68303"
                y="-5.68302"
                width="31.4545"
                height="32.5526"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
              </filter>
              <clipPath id="clip0">
                <rect width="25" height="25" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Box>
        <Box
          css={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            px: '$2',
            height: '$5',
            backgroundColor: 'white',
            borderRadius: '5px',
            width: 60,
            mr: 2,
          }}
        >
          <Box css={{ backgroundColor: 'hsl(206,10%,70%)', height: 4, width: '100%' }}></Box>
          <Box
            css={{
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              px: '$2',
              height: '$4',
              backgroundColor: 'black',
              borderRadius: '5px',
              width: 120,
              top: -25,
              left: -30,
              animation: ` 6000ms infinite`,
              animationTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          >
            <Box
              css={{
                position: 'absolute',
                width: 0,
                height: 0,
                borderLeft: '5px solid transparent',
                borderRight: '5px solid transparent',
                borderTop: '5px solid black',
                bottom: -5,
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            ></Box>
            <Flex css={{ width: '100%' }}>
              <Box css={{ backgroundColor: 'hsl(206,10%,80%)', height: 2, fs: 0, fg: 2 }}></Box>
              <Box
                css={{ backgroundColor: 'hsl(206,10%,80%)', height: 2, fs: 0, fg: 3, ml: '$1' }}
              ></Box>
              <Box
                css={{ backgroundColor: 'hsl(206,10%,80%)', height: 2, fs: 0, fg: 1, ml: '$1' }}
              ></Box>
              <Box
                css={{ backgroundColor: 'hsl(206,10%,80%)', height: 2, fs: 0, fg: 4, ml: '$1' }}
              ></Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </HeroContainer>
  );
};
