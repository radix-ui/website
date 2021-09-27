import { styled } from '@modulz/design-system';

export const MarketingButton = styled('button', {
  all: 'unset',
  alignItems: 'center',
  boxSizing: 'border-box',
  userSelect: 'none',
  display: 'inline-flex',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',

  // Custom
  height: '$6',
  px: '$3',
  fontFamily: '$untitled',
  fontWeight: 500,
  borderRadius: '$1',
  fontSize: '$2',
  lineHeight: '$sizes$6',

  '&:disabled': {
    bc: '$slate2',
    boxShadow: 'inset 0 0 0 1px $colors$slate7',
    color: '$slate8',
    pointerEvents: 'none',
  },

  '&[href]': {
    cursor: 'pointer',
  },

  variants: {
    variant: {
      gray: {
        bc: '$slateA3',
        color: '$hiContrast',
        '@hover': {
          '&:hover': {
            bc: '$slateA4',
          },
        },
        '&:active': {
          bc: '$slateA5',
        },
        '&:focus-visible': {
          bc: '$tealA3',
          boxShadow: '0 0 0 2px $colors$teal9',
        },
      },
      contrast: {
        bc: '$hiContrast',
        color: '$loContrast',
        '@hover': {
          '&:hover': {
            bc: '$teal12',
          },
        },
        '&:active': {
          bc: '$teal11',
        },
        '&:focus-visible': {
          boxShadow: '0 0 0 2px $colors$teal9',
        },
      },
    },
    gap: {
      1: {
        gap: '$1',
      },
      2: {
        gap: '$2',
      },
      3: {
        gap: '$3',
      },
      4: {
        gap: '$4',
      },
      5: {
        gap: '$5',
      },
    },
  },
  defaultVariants: {
    variant: 'contrast',
  },
});
