import React from 'react';
import { Box, keyframes } from '@modulz/design-system';

const scrollarea = keyframes({
  '0%': { transform: 'translateY(0)' },
  '20%': { transform: 'translateY(0)' },
  '40%': { transform: 'translateY(-150px)' },
  '60%': { transform: 'translateY(-150px)' },
  '80%': { transform: 'translateY(0)' },
  '100%': { transform: 'translateY(0)' },
});

const scrollbar = keyframes({
  '0%': { transform: 'translateY(0)' },
  '20%': { transform: 'translateY(0)' },
  '40%': { transform: 'translateY(50px)' },
  '60%': { transform: 'translateY(50px)' },
  '80%': { transform: 'translateY(0)' },
  '100%': { transform: 'translateY(0)' },
});

const cursor = keyframes({
  '0%': { transform: 'translateY(0)' },
  '20%': { transform: 'translateY(0)' },
  '40%': { transform: 'translateY(50px)' },
  '60%': { transform: 'translateY(50px)' },
  '80%': { transform: 'translateY(0)' },
  '100%': { transform: 'translateY(0)' },
});

const ScrollAreaContainer = () => {
  return (
    // Container
    <Box
      css={{
        position: 'relative',
      }}
    >
      <Box
        css={{
          position: 'relative',
          backgroundColor: 'white',
          borderRadius: '5px',
          width: 200,
          p: '$3',
          boxShadow:
            'hsla(252, 4%, 9%, 0.35) 0px 10px 38px -10px, hsla(252, 4%, 9%, 0.2) 0px 10px 20px -15px',
          height: 100,
          overflow: 'hidden',
        }}
      >
        <Box
          css={{
            animation: `${scrollarea} 8000ms infinite`,
          }}
        >
          <Box
            css={{
              position: 'relative',
              zIndex: '1',
              backgroundColor: 'hsl(206,10%,70%)',
              height: 12,
              width: '45%',
              mb: 12,
            }}
          ></Box>
          <Box
            css={{
              position: 'relative',
              zIndex: '1',
              backgroundColor: 'hsl(206,10%,70%)',
              height: 4,
              width: '90%',
              mb: 12,
            }}
          ></Box>
          <Box
            css={{
              position: 'relative',
              zIndex: '1',
              backgroundColor: 'hsl(206,10%,70%)',
              height: 4,
              width: '70%',
              mb: 12,
            }}
          ></Box>
          <Box
            css={{
              position: 'relative',
              zIndex: '1',
              backgroundColor: 'hsl(206,10%,70%)',
              height: 4,
              width: '90%',
              mb: 12,
            }}
          ></Box>
          <Box
            css={{
              position: 'relative',
              zIndex: '1',
              backgroundColor: 'hsl(206,10%,70%)',
              height: 4,
              width: '70%',
              mb: 12,
            }}
          ></Box>
          <Box
            css={{
              position: 'relative',
              zIndex: '1',
              backgroundColor: 'hsl(206,10%,70%)',
              height: 4,
              width: '90%',
              mb: 12,
            }}
          ></Box>
          <Box
            css={{
              position: 'relative',
              zIndex: '1',
              backgroundColor: 'hsl(206,10%,70%)',
              height: 4,
              width: '70%',
              mb: 12,
            }}
          ></Box>
          <Box
            css={{
              position: 'relative',
              zIndex: '1',
              backgroundColor: 'hsl(206,10%,70%)',
              height: 4,
              width: '90%',
              mb: 12,
            }}
          ></Box>
          <Box
            css={{
              position: 'relative',
              zIndex: '1',
              backgroundColor: 'hsl(206,10%,70%)',
              height: 4,
              width: '70%',
              mb: 12,
            }}
          ></Box>
          <Box
            css={{
              position: 'relative',
              zIndex: '1',
              backgroundColor: 'hsl(206,10%,70%)',
              height: 4,
              width: '90%',
              mb: 12,
            }}
          ></Box>
          <Box
            css={{
              position: 'relative',
              zIndex: '1',
              backgroundColor: 'hsl(206,10%,70%)',
              height: 4,
              width: '70%',
              mb: 12,
            }}
          ></Box>
          <Box
            css={{
              position: 'relative',
              zIndex: '1',
              backgroundColor: 'hsl(206,10%,70%)',
              height: 4,
              width: '90%',
              mb: 12,
            }}
          ></Box>
          <Box
            css={{
              position: 'relative',
              zIndex: '1',
              backgroundColor: 'hsl(206,10%,70%)',
              height: 4,
              width: '70%',
              mb: 12,
            }}
          ></Box>
          <Box
            css={{
              position: 'relative',
              zIndex: '1',
              backgroundColor: 'hsl(206,10%,70%)',
              height: 4,
              width: '90%',
              mb: 12,
            }}
          ></Box>
          <Box
            css={{
              position: 'relative',
              zIndex: '1',
              backgroundColor: 'hsl(206,10%,70%)',
              height: 4,
              width: '70%',
              mb: 12,
            }}
          ></Box>
        </Box>
      </Box>

      <Box
        css={{
          position: 'absolute',
          backgroundColor: 'hsl(206,10%,70%)',
          height: 35,
          width: 5,
          top: 5,
          right: 5,
          borderRadius: '9999px',
          animation: `${scrollbar} 8000ms infinite`,
        }}
      ></Box>

      <Box
        css={{
          position: 'absolute',
          top: 25,
          right: -13,
          transform: 'translate(30px, 30px)',
          animation: `${cursor} 8000ms infinite`,
          //   animationTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
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
    </Box>
  );
};

export const ScrollAreaHero = () => {
  return <ScrollAreaContainer />;
};
