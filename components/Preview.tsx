import { Box, theme } from '@modulz/design-system';

export const Preview = ({ css, ...props }) => (
  <Box
    className={`${theme}`}
    {...props}
    data-preview
    css={{
      margin: 0,
      backgroundColor: '$violet2',
      boxShadow: 'inset 0 0 0 1px $colors$mauve4',
      borderTopLeftRadius: '$3',
      borderTopRightRadius: '$3',
      padding: '$3',
      position: 'relative',
      mt: '$5',
      ...css,
    }}
  />
);
