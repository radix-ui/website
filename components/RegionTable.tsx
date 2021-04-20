import React from 'react';
import { Box } from '@modulz/design-system';

export function RegionTable({
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  ...props
}) {
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
        },
      }}
    >
      <Box as="table" {...props} />
    </Box>
  );
}
