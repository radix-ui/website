import React from 'react';
import { Box, styled, css } from '@modulz/design-system';

const menuitem = css.keyframes({
  '0%': { transform: 'translateY(0)' },
  '4.9999%': { transform: 'translateY(0)' },
  '5%': { transform: 'translateY(20px)' },
  '9.9999%': { transform: 'translateY(20px)' },
  '10%': { transform: 'translateY(40px)' },
  '14.9999%': { transform: 'translateY(40px)' },
  '15%': { transform: 'translateY(60px)' },
  '19.9999%': { transform: 'translateY(60px)' },

  '49.9999%': { transform: 'translateY(60px)' },

  '50%': { transform: 'translateY(40px)' },
  '54.9999%': { transform: 'translateY(40px)' },
  '55%': { transform: 'translateY(20px)' },
  '59.9999%': { transform: 'translateY(20px)' },
  '60%': { transform: 'translateY(0)' },
  '99.9999%': { transform: 'translateY(0)' },
});

const ContextMenuContainer = () => {
  return (
    <Box
      css={{
        position: 'relative',
        backgroundColor: 'white',
        borderRadius: '5px',
        width: 120,
        py: '$1',
        boxShadow:
          'hsla(252, 4%, 9%, 0.35) 0px 10px 38px -10px, hsla(252, 4%, 9%, 0.2) 0px 10px 20px -15px',
      }}
    >
      <Box
        css={{
          position: 'relative',
          zIndex: '1',
          backgroundColor: '$gray800',
          height: 4,
          width: '25%',
          mt: 8,
          mb: 16,
          mx: '$4',
        }}
      ></Box>
      <Box
        css={{
          position: 'relative',
          zIndex: '1',
          backgroundColor: '$gray800',
          height: 4,
          width: '50%',
          mb: 16,
          mx: '$4',
        }}
      ></Box>
      <Box
        css={{
          position: 'relative',
          zIndex: '1',
          backgroundColor: '$gray800',
          height: 4,
          width: '25%',
          mb: 16,
          mx: '$4',
        }}
      ></Box>
      <Box
        css={{
          position: 'relative',
          zIndex: '1',
          backgroundColor: '$gray800',
          height: 4,
          width: '50%',
          mb: 16,
          mx: '$4',
        }}
      ></Box>
      <Box
        css={{
          position: 'relative',
          zIndex: '1',
          backgroundColor: '$gray800',
          height: 4,
          width: '25%',
          mb: 8,
          mx: '$4',
        }}
      ></Box>
      <Box
        css={{
          position: 'absolute',
          top: 5,
          left: 0,
          right: 0,
          zIndex: '0',
          height: 20,
          backgroundColor: '$gray500',
          display: 'flex',
          alignItems: 'center',
          px: '$3',
          animation: `${menuitem} 5000ms infinite`,
          animationDelay: '1000ms',
        }}
      ></Box>
      <Box
        css={{
          position: 'absolute',
          top: 0,
          left: -9,
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
    </Box>
  );
};

export const ContextMenuHero = () => {
  return <ContextMenuContainer />;
};
