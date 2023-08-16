import { styled } from '@lib/stitches';

export const LogoLink = styled('a', {
  display: 'block',
  outline: 0,
  color: 'var(--gray-12)',
  position: 'relative',

  '@media (hover: hover)': {
    color: 'var(--gray-9)',
    transition: '120ms color',

    '&:hover': {
      color: 'var(--gray-12)',
    },
  },

  '&:focus-visible': {
    zIndex: 1,
    color: 'var(--gray-12)',
    boxShadow: '0 0 0 2px var(--blue-8)',
  },

  variants: {
    variant: {
      normal: {
        margin: 'calc(var(--space-1) * -1)',
        padding: 'var(--space-1)',
        borderRadius: 'var(--radius-2)',
      },
      box: {
        boxShadow: '0 0 0 1px var(--gray-6)',
        '&::before': {
          content: '',
          zIndex: 1,
          position: 'absolute',
          pointerEvents: 'none',
          transition: '120ms opacity',
          inset: 0,
          opacity: 0,
          boxShadow: '0 0 0 1px var(--gray-8)',
        },
        '&:hover::before': {
          opacity: 1,
        },
        '&:focus::before': {
          boxShadow: '0 0 0 1px var(--gray-8)',
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
