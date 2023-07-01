import React from 'react';
import { Box } from '@radix-ui/themes';
import styles from './RegionTable.module.css';

export function RegionTable({
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  ...props
}) {
  return (
    <Box
      role="region"
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      tabIndex={0}
      position="relative"
      className={styles.RegionTable}
    >
      <Box asChild {...props}>
        <table children={props.children} />
      </Box>
    </Box>
  );
}
