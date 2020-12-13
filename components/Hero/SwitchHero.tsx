import React from 'react';
import { Box, styled, css } from '@modulz/design-system';

const track = css.keyframes({
  '0%': { backgroundColor: 'hsla(0,0%,0%,.35)', },
  '48%': { backgroundColor: 'hsla(0,0%,0%,.35)', },
  '52%': { backgroundColor: 'hsl(252,100%,93%)', },
  '100%': { backgroundColor: 'hsl(252,100%,93%)', },
});

const thumb = css.keyframes({
  '0%': { transform: 'translateX(0)' },
  '48%': { transform: 'translateX(0)' },
  '52%': { transform: 'translateX(21px)' },
  '100%': { transform: 'translateX(21px)' },
});

const click = css.keyframes({
  '0%': { boxShadow: '0 0 0 2px black', transform: 'scale(.5)', opacity: '0' },
  '37%': { boxShadow: '0 0 0 3px black', transform: 'scale(.5)', opacity: '0' },
  '41%': { boxShadow: '0 0 0 2px black', opacity: '1' },
  '45%': { boxShadow: '0 0 0 2px black', transform: 'scale(1)', opacity: '0' },
  '100%': { boxShadow: '0 0 0 2px black', transform: 'scale(.5)', opacity: '0' },
});

const SwitchContainer = () => {
  return (
    <Box
      css={{
        position: 'relative',
        height: 24,
        backgroundColor: 'hsla(0,0%,0%,.35)',
        borderRadius: '9999px',
        flexShrink: 0,
        width: 45,
        display: 'flex',
        animation: `${track} 4000ms infinite`,
        animationTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
        animationDelay: '1000ms',
        animationDirection: 'alternate',
      }}
    >
      <Box
        css={{
          backgroundColor: 'white',
          borderRadius: '50%',
          flexShrink: 0,
          width: 20,
          height: 20,
          mt: 2,
          ml: 2,
          boxShadow: '0 1px 2px rgba(0,0,0,.25)',
          animation: `${thumb} 4000ms infinite`,
          animationTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
          animationDelay: '1000ms',
          animationDirection: 'alternate',
        }}
      ></Box>
      <Box
        css={{
          position: 'absolute',
          bottom: -19,
          right: -12
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
            <g clip-path="url(#clip0)">
              <g filter="url(#filter0_d)">
                <path d="M7.5 23.1865L4.79423 0.5L23.0885 14.1865L13.5442 15.6554L7.5 23.1865Z" fill="black" />
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
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
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
          <Box
            css={{
              position: 'absolute',
              top: -18,
              right: 0,
              bottom: 0,
              left: -18,
              borderRadius: '50%',
              boxShadow: '0 0 0 3px black',
              opacity: '0',
              transform: 'scale(.5)',
              animation: `${click} 4000ms infinite`,
              animationDelay: `1000ms`,
              animationTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          ></Box>
      </Box>
    </Box>
  );
};

export const SwitchHero = () => {
  return <SwitchContainer />;
};

