import { Box, theme } from '@modulz/design-system';

export const Preview = ({ css, ...props }) => (
  <Box
    {...props}
    className={`${theme}`}
    data-preview
    css={{
      backgroundColor: '$purple9',
      position: 'relative',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      py: 100,
      borderRadius: '$3',
      ...(css as any),
    }}
  />
);
