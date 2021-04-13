import React from 'react';
import { styled, Box, keyframes, Flex } from '@modulz/design-system';
import * as AlertDialog from '@radix-ui/react-alert-dialog';

const StyledOverlay = styled(AlertDialog.Overlay, {
  backgroundColor: 'rgba(0, 0, 0, .15)',
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
});

const StyledContent = styled(AlertDialog.Content, {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 360,
  backgroundColor: 'white',
  borderRadius: 6,
  padding: 20,
});

export const AlertDialogDemo = () => (
  <AlertDialog.Root>
    <AlertDialog.Trigger>Open</AlertDialog.Trigger>
    <StyledOverlay />
    <StyledContent>
      <AlertDialog.Title>Alert title</AlertDialog.Title>
      <AlertDialog.Description>Alert description.</AlertDialog.Description>
      <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
      <AlertDialog.Action>Accept</AlertDialog.Action>
    </StyledContent>
  </AlertDialog.Root>
);

const dialog = keyframes({
  '20%': { transform: 'scale(.92) translate(-50%, -50%)', opacity: '0' },
  '22%': { transform: 'scale(1) translate(-50%, -50%)', opacity: '1' },
  '78%': { transform: 'scale(1) translate(-50%, -50%)', opacity: '1' },
  '80%': { transform: 'scale(.92) translate(-50%, -50%)', opacity: '0' },
});

const click = keyframes({
  '0%': { boxShadow: '0 0 0 2px black', transform: 'scale(.5)', opacity: '0' },
  '14%': { boxShadow: '0 0 0 3px black', transform: 'scale(.5)', opacity: '0' },
  '16%': { boxShadow: '0 0 0 2px black', opacity: '1' },
  '18%': { boxShadow: '0 0 0 2px black', transform: 'scale(1)', opacity: '0' },
  '100%': { boxShadow: '0 0 0 2px black', transform: 'scale(.5)', opacity: '0' },
});

export const AlertDialogHero = () => {
  return (
    <Box>
      <Box
        css={{
          position: 'relative',
          backgroundColor: 'white',
          borderRadius: '5px',
          height: 25,
          width: 65,
          px: '$2',
          mb: 2,
          display: 'inline-flex',
          alignItems: 'center',
        }}
      >
        <Box
          css={{
            position: 'absolute',
            bottom: -15,
            right: -10,
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
              animation: `${click} 8000ms infinite`,
              animationDelay: `1000ms`,
              animationTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          ></Box>
        </Box>
      </Box>
      <Box
        css={{
          position: 'absolute',
          backgroundColor: 'white',
          borderRadius: '5px',
          width: 250,
          p: '$3',
          top: '50%',
          left: '50%',
          boxShadow:
            'hsla(252, 4%, 9%, 0.35) 0px 10px 38px -10px, hsla(252, 4%, 9%, 0.2) 0px 10px 20px -15px',
          transform: 'scale(.9) translate(-50%, -50%)',
          opacity: '0',
          animation: `${dialog} 8000ms infinite`,
          animationDelay: `1000ms`,
          animationTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
          transformOrigin: 'left',
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
            width: '60%',
            mb: 12,
          }}
        ></Box>
        <Box
          css={{
            position: 'relative',
            zIndex: '1',
            backgroundColor: 'hsl(206,10%,70%)',
            height: 4,
            width: '30%',
            mb: 12,
          }}
        ></Box>
        <Flex
          css={{
            justifyContent: 'flex-end',
            mt: '$4',
          }}
        >
          <Box
            css={{
              backgroundColor: 'hsl(206,10%,70%)',
              borderRadius: '5px',
              height: 25,
              width: 65,
              display: 'inline-flex',
              alignItems: 'center',
            }}
          ></Box>
          <Box
            css={{
              backgroundColor: '$blue800',
              borderRadius: '5px',
              height: 25,
              width: 65,
              ml: '$2',
              display: 'inline-flex',
              alignItems: 'center',
            }}
          ></Box>
        </Flex>
      </Box>
    </Box>
  );
};
