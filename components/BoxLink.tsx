import { styled } from '@modulz/design-system';

export const BoxLink = styled('a', {
  display: 'block',
  color: '$hiContrast',
  textDecoration: 'none',
  outline: 0,
  p: '$1',
  m: '-$1',
  br: '$1',
  '&:focus-visible': {
    boxShadow: '0 0 0 2px $colors$blue8',
  },
});
