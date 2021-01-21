import React from 'react';
import { Box, BoxProps, theme as DStheme } from '@modulz/design-system';

export function RegionTable({
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  ...props
}: BoxProps) {
  return (
    <Box
      as="div"
      role="region"
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      tabIndex={0}
      css={{
        position: 'relative',
        overflow: 'auto',
        '&:focus': {
          outline: 0,
          boxShadow: `0 0 0 3px ${DStheme.colors.$gray700}`,
        },
      }}
    >
      <Box as="table" {...props} />
    </Box>
  );
}
