import { styled } from '@modulz/design-system';

export const LogoLink = styled('a', {
  display: 'flex',
  justifyContent: 'center',
  color: '$hiContrast',
  '@hover': {
    color: '$slate9',
    transition: '120ms color',
    '&:hover': {
      color: '$hiContrast',
    },
  },
});
