import { classNames } from '@lib/classNames';
import styles from './Pre.module.css';

import * as React from 'react';
import { Box } from '@radix-ui/themes';

import { createContext } from '@radix-ui/react-context';

const [SyntaxSchemeProvider, useSyntaxSchemeContext] = createContext<{
  scheme: 'indigo' | 'pink' | 'teal' | 'blue' | 'red';
}>('SyntaxScheme');

type PreProps = React.ComponentPropsWithoutRef<typeof Box> & React.ComponentPropsWithoutRef<'pre'>;

const Pre = React.forwardRef<HTMLPreElement, PreProps>(function Pre(
  { className, children, ...props },
  forwardedRef
) {
  const { scheme } = useSyntaxSchemeContext('Pre');

  return (
    <Box asChild {...props}>
      <pre ref={forwardedRef} className={classNames(styles.Pre, styles[scheme], className)}>
        {children}
      </pre>
    </Box>
  );
});

export { Pre, SyntaxSchemeProvider };
