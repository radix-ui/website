import { styled } from '@stitches/react';

export const PrimitivesHeroButton = styled('button', {
  // Reset
  all: 'unset',
  alignItems: 'center',
  boxSizing: 'border-box',
  userSelect: 'none',
  display: 'inline-flex',
  color: 'var(--color-text)',
  fontSize: 'var(--font-size-1)',
  lineHeight: 1,
  gap: 3,
  margin: 0,
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 'var(--space-2)',
  paddingRight: 'var(--space-2)',
  height: 'var(--space-5)',
  borderRadius: 'var(--radius-2)',

  // For Safari layout shifts when interacting with positioned components
  willChange: 'transform',

  '&:focus': {
    boxShadow: '0 0 0 2px var(--gray-a8)',
  },
  '&:focus:not(:focus-visible)': {
    boxShadow: 'none',
  },

  variants: {
    variant: {
      white: {
        backgroundColor: 'var(--white-a11)',
        '@media (hover: hover)': {
          '&:hover': {
            backgroundColor: 'var(--white-a12)',
          },
        },
        '.dark-theme &': {
          backgroundColor: 'var(--white-a5)',
          '@media (hover: hover)': {
            '&:hover': {
              backgroundColor: 'var(--white-a6)',
            },
          },
        },
      },
      gray: {
        backgroundColor: 'var(--gray-a4)',
        '@media (hover: hover)': {
          '&:hover': {
            backgroundColor: 'var(--gray-a5)',
          },
        },
      },
    },
  },

  defaultVariants: {
    variant: 'white',
  },
});
