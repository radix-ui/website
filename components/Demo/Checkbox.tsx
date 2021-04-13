import React from 'react';
import { styled, Box, keyframes, Flex } from '@modulz/design-system';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon, DividerHorizontalIcon } from '@radix-ui/react-icons';

const StyledCheckbox = styled(Checkbox.Root, {
  appearance: 'none',
  backgroundColor: 'transparent',
  border: 'none',
  padding: 0,
  boxShadow: 'inset 0 0 0 1px gainsboro',
  width: 15,
  height: 15,
  borderRadius: 2,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&:focus': {
    outline: 'none',
    boxShadow: 'inset 0 0 0 1px dodgerblue, 0 0 0 1px dodgerblue',
  },
});

export const CheckboxDemo = () => (
  <StyledCheckbox defaultChecked>
    <Checkbox.Indicator as={CheckIcon} />
  </StyledCheckbox>
);

export const CheckboxIndeterminateDemo = () => {
  const [checked, setChecked] = React.useState<'indeterminate' | boolean>('indeterminate');

  return (
    <>
      <StyledCheckbox
        css={{ mb: '$2' }}
        checked={checked}
        onCheckedChange={(event) => setChecked(event.target.checked)}
      >
        <Checkbox.Indicator>
          {checked === 'indeterminate' && <DividerHorizontalIcon />}
          {checked === true && <CheckIcon />}
        </Checkbox.Indicator>
      </StyledCheckbox>

      <button
        type="button"
        onClick={() =>
          setChecked((prevIsChecked) =>
            prevIsChecked === 'indeterminate' ? false : 'indeterminate'
          )
        }
      >
        Toggle indeterminate
      </button>
    </>
  );
};

const check1 = keyframes({
  '0%': { opacity: '0' },
  '44.9999%': { opacity: '0' },
  '45%': { opacity: '1' },
  '100%': { opacity: '1' },
});

const check2 = keyframes({
  '0%': { opacity: '0' },
  '54.9999%': { opacity: '0' },
  '55%': { opacity: '1' },
  '100%': { opacity: '1' },
});

const cursor = keyframes({
  '0%': { transform: 'translateY(0)' },
  '45%': { transform: 'translateY(0)' },
  '48%': { transform: 'translateY(40px)' },
  '100%': { transform: 'translateY(40px)' },
});

const click = keyframes({
  '0%': { boxShadow: '0 0 0 2px black', transform: 'scale(.5)', opacity: '0' },
  '42%': { boxShadow: '0 0 0 3px black', transform: 'scale(.5)', opacity: '0' },
  '44%': { boxShadow: '0 0 0 2px black', opacity: '1' },
  '46%': { boxShadow: '0 0 0 2px black', transform: 'scale(1)', opacity: '0' },
  '47%': { boxShadow: '0 0 0 2px black', transform: 'scale(.5)', opacity: '0' },

  '52%': { boxShadow: '0 0 0 3px black', transform: 'scale(.5)', opacity: '0' },
  '54%': { boxShadow: '0 0 0 2px black', opacity: '1' },
  '56%': { boxShadow: '0 0 0 2px black', transform: 'scale(1)', opacity: '0' },
});

export const CheckboxHero = () => {
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
            borderRadius: '5px',
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
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
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
            borderRadius: '5px',
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
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
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
