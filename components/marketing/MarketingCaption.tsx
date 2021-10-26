import { styled, Text } from '@modulz/design-system';

export const MarketingCaption = styled(Text, {
  display: 'inline-block',
  fontWeight: 500,
  lineHeight: '20px',

  '&[href]': {
    textDecoration: 'none',
  },

  defaultVariants: {
    size: 3,
    variant: 'teal',
  },
});
