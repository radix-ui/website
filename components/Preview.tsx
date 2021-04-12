import { Box } from '@modulz/design-system';

export const Preview = ({ css, ...props }) => (
  <Box
    {...props}
    data-preview
    css={{
      margin: 0,
      boxShadow: '0 0 0 1px $colors$slate500',
      borderTopLeftRadius: '$3',
      borderTopRightRadius: '$3',
      padding: '$3',
      position: 'relative',
      ...css,
    }}
  />
);
