import { styled } from '@modulz/design-system';

export const LogoLink = styled('a', {
  display: 'block',
  color: '$hiContrast',
  '@hover': {
    color: '$slate9',
    transition: '120ms color',
    '&:hover': {
      color: '$hiContrast',
    },
  },
});
