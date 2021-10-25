import { styled } from '@modulz/design-system';

export const LogoLink = styled('a', {
  display: 'block',
  outline: 0,
  color: '$hiContrast',
  position: 'relative',

  '@hover': {
    color: '$slate9',
    transition: '120ms color',
    '&:hover': {
      color: '$hiContrast',
    },
  },

  '&:focus': {
    zIndex: 1,
    color: '$hiContrast',
    boxShadow: '0 0 0 2px $colors$blue8',
  },
  '&:focus:not(:focus-visible)': {
    boxShadow: 'none',
  },

  variants: {
    variant: {
      normal: {
        m: '-$1',
        p: '$1',
        br: '$1',
      },
      box: {
        boxShadow: '0 0 0 1px $colors$slate6',
        '&::before': {
          content: '',
          zIndex: 1,
          position: 'absolute',
          pointerEvents: 'none',
          transition: '120ms opacity',
          inset: 0,
          opacity: 0,
          boxShadow: '0 0 0 1px $colors$slate8',
        },
        '&:hover::before': {
          opacity: 1,
        },
        '&:focus::before': {
          boxShadow: '0 0 0 1px $colors$slate8',
        },
        '&:focus:not(:focus-visible)::before': {
          opacity: 1,
        },
      },
    },
  },
  defaultVariants: {
    variant: 'normal',
  },
});
