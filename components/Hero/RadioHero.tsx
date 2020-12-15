import React from 'react';
import { Box, styled, css, Flex } from '@modulz/design-system';

const check1 = css.keyframes({
  '0%': { opacity: '0' },
  '44.9999%': { opacity: '0' },
  '45%': { opacity: '1' },
  '100%': { opacity: '1' },
});

const check2 = css.keyframes({
  '0%': { opacity: '0' },
  '54.9999%': { opacity: '0' },
  '55%': { opacity: '1' },
  '100%': { opacity: '1' },
});

const cursor = css.keyframes({
  '0%': { transform: 'translateY(0)' },
  '45%': { transform: 'translateY(0)' },
  '48%': { transform: 'translateY(40px)' },
  '100%': { transform: 'translateY(40px)' },
});

const click = css.keyframes({
  '0%': { boxShadow: '0 0 0 2px black', transform: 'scale(.5)', opacity: '0' },
  '42%': { boxShadow: '0 0 0 3px black', transform: 'scale(.5)', opacity: '0' },
  '44%': { boxShadow: '0 0 0 2px black', opacity: '1' },
  '46%': { boxShadow: '0 0 0 2px black', transform: 'scale(1)', opacity: '0' },
  '47%': { boxShadow: '0 0 0 2px black', transform: 'scale(.5)', opacity: '0' },

  '52%': { boxShadow: '0 0 0 3px black', transform: 'scale(.5)', opacity: '0' },
  '54%': { boxShadow: '0 0 0 2px black', opacity: '1' },
  '56%': { boxShadow: '0 0 0 2px black', transform: 'scale(1)', opacity: '0' },
});

const RadioContainer = () => {
  return (
    <Box>
      <Flex
        css={{
          alignItems: 'center',
          my: '$3',
        }}
      >
        <Box
          css={{
            position: 'relative',
            borderRadius: '50%',
            height: 25,
            width: 25,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'inset 0 0 0 2px white',
            color: 'white',
          }}
        >
          <Box
            css={{
              opacity: '0',
              animation: `${check1} 5000ms infinite`,
              animationDirection: 'alternate',
            }}
          >
            <Box
              css={{
                backgroundColor: 'white',
                borderRadius: '50%',
                height: 11,
                width: 11,
              }}
            ></Box>
          </Box>
          <Box
            css={{
              position: 'absolute',
              bottom: -15,
              right: -10,
              animation: `${cursor} 5000ms infinite`,
              animationDirection: 'alternate',
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
            <Box
              css={{
                position: 'absolute',
                top: -12,
                right: 0,
                bottom: 0,
                left: -12,
                borderRadius: '50%',
                boxShadow: '0 0 0 3px black',
                opacity: '0',
                transform: 'scale(.5)',
                animation: `${click} 5000ms infinite`,
                animationDirection: 'alternate',
                animationTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
              }}
            ></Box>
          </Box>
        </Box>
        <Box
          css={{
            position: 'relative',
            zIndex: '1',
            backgroundColor: 'white',
            height: 3,
            width: 100,
            ml: '$3',
          }}
        ></Box>
      </Flex>
      <Flex
        css={{
          alignItems: 'center',
          my: '$3',
        }}
      >
        <Box
          css={{
            position: 'relative',
            borderRadius: '50%',
            height: 25,
            width: 25,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'inset 0 0 0 2px white',
            color: 'white',
          }}
        >
          <Box
            css={{
              opacity: '0',
              animation: `${check2} 5000ms infinite`,
              animationDirection: 'alternate',
            }}
          >
            <Box
              css={{
                backgroundColor: 'white',
                borderRadius: '50%',
                height: 11,
                width: 11,
              }}
            ></Box>
          </Box>
        </Box>
        <Box
          css={{
            position: 'relative',
            zIndex: '1',
            backgroundColor: 'white',
            height: 3,
            width: 50,
            ml: '$3',
          }}
        ></Box>
      </Flex>
    </Box>
  );
};

export const RadioHero = () => {
  return <RadioContainer />;
};
