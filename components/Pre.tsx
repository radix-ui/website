import { classNames } from '@lib/classNames';
import styles from './Pre.module.css';

import * as React from 'react';
import { Box } from '@radix-ui/themes';

type PreProps = React.ComponentPropsWithoutRef<typeof Box> & React.ComponentPropsWithoutRef<'pre'>;

export const Pre = React.forwardRef<HTMLPreElement, PreProps>(function Pre(
  { className, children, ...props },
  forwardedRef
) {
  return (
    <Box asChild {...props}>
      <pre ref={forwardedRef} className={classNames(styles.Pre, className)}>
        {children}
      </pre>
    </Box>
  );
});
