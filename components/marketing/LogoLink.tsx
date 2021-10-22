import { styled } from '@modulz/design-system';

export const LogoLink = styled('a', {
  display: 'block',
  outline: 0,
  color: '$hiContrast',
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
  },

  '&:focus-visible': {
    boxShadow: '0 0 0 2px $colors$blue8',
  },

  variants: {
    targetSize: {
      normal: {},
      increased: {
        m: '-$1',
        p: '$1',
        br: '$1',
      },
    },
  },
  defaultVariants: {
    targetSize: 'increased',
  },
});
