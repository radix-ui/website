import { styled, Code as DSCode } from '@modulz/design-system';

export const Code = styled(DSCode, {
  variants: {
    variant: {
      violet: {
        bc: 'var(--accent-3, $violet3)',
        color: 'var(--accent-11, $violet11)',
      },
      gray: {
        bc: '$gray4',
        color: '$gray11',
      },
    },
  },
});
