import { styled } from '@lib/stitches';

export const PrimitivesHeroButton = styled('button', {
  // Reset
  all: 'unset',
  alignItems: 'center',
  boxSizing: 'border-box',
  userSelect: 'none',
  display: 'inline-flex',
  color: 'var(--gray-12)',
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

  '&:focus-visible': {
    boxShadow: '0 0 0 2px var(--gray-a8)',
  },

  variants: {
    variant: {
      white: {
        backgroundColor: 'var(--white-a9)',
        '@media (hover: hover)': {
          '&:hover': {
            backgroundColor: 'var(--white-a11)',
          },
        },
        '.dark &, .dark-theme &': {
          backgroundColor: 'var(--white-a3)',
          '@media (hover: hover)': {
            '&:hover': {
              backgroundColor: 'var(--white-a4)',
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
