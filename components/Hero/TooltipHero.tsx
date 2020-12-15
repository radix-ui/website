import React from 'react';
import { Box, styled, css, Flex } from '@modulz/design-system';

const tooltip = css.keyframes({
  '0%': { opacity: '0', transform: 'translateY(0)' },
  '30%': { opacity: '0', transform: 'translateY(0)' },
  '35%': { opacity: '1', transform: 'translateY(-3px)' },
  '74.9999%': { opacity: '1', transform: 'translateY(-3px)' },
  '75%': { opacity: '0', transform: 'translateY(0)' },
  '100%': { opacity: '0', transform: 'translateY(0)' },
});

const cursor = css.keyframes({
  '0%': { transform: 'translate(30px, 30px)' },
  '22%': { transform: 'translate(30px, 30px)' },
  '26%': { transform: 'translate(0, 0)' },
  '74%': { transform: 'translate(0, 0)' },
  '78%': { transform: 'translate(30px, 30px)' },
});

const TooltipContainer = () => {
  return (
    <Box css={{ position: 'relative' }}>

      <Box
        css={{
          position: 'absolute',
          top: 18,
          right: 0,
          transform: 'translate(30px, 30px)',
          animation: `${cursor} 6000ms infinite`,
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
          <g clip-path="url(#clip0)">
            <g filter="url(#filter0_d)">
              <path
                d="M7.5 23.1865L4.79423 0.5L23.0885 14.1865L13.5442 15.6554L7.5 23.1865Z"
                fill="black"
              />
              <path
                d="M7.5 23.1865L4.79423 0.5L23.0885 14.1865L13.5442 15.6554L7.5 23.1865Z"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
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
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
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
          <Box css={{ backgroundColor: 'hsl(206,10%,80%)', height: 4, width: '100%' }}></Box>
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
              mr: 2,
              top: -30,
              left: -30,
              animation: `${tooltip} 6000ms infinite`,
              animationTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          >
            <Flex css={{ width: '100%' }}>
              <Box css={{ backgroundColor: 'hsla(0,100%,100%,.9)', height: 2, fs: 0, fg: 2 }}></Box>
              <Box css={{ backgroundColor: 'hsla(0,100%,100%,.9)', height: 2, fs: 0, fg: 3, ml: '$1' }}></Box>
              <Box css={{ backgroundColor: 'hsla(0,100%,100%,.9)', height: 2, fs: 0, fg: 1, ml: '$1' }}></Box>
              <Box css={{ backgroundColor: 'hsla(0,100%,100%,.9)', height: 2, fs: 0, fg: 4, ml: '$1' }}></Box>
            </Flex>
          </Box>
        </Box>
    </Box>
  );
};

export const TooltipHero = () => {
  return <TooltipContainer />;
};
