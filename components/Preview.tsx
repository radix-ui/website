import { Box, theme } from '@modulz/design-system';

export const Preview = ({ css, ...props }) => (
  <Box
    {...props}
    className={`${theme}`}
    data-preview
    css={{
      margin: 0,
      backgroundColor: '$violet9',
      borderRadius: '$3',
      padding: '$3',
      position: 'relative',
      mt: '$5',
      ...css,
    }}
  />
);
