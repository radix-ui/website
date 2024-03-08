import { classNames } from '@lib/classNames';
import styles from './Pre.module.css';

import * as React from 'react';
import { Box, ScrollArea } from '@radix-ui/themes';

import { createContext } from '@radix-ui/react-context';

const [SyntaxSchemeProvider, useSyntaxSchemeContext] = createContext<{
  scheme: 'indigo' | 'pink' | 'teal' | 'blue' | 'red';
}>('SyntaxScheme');

type PreProps = Omit<React.ComponentPropsWithoutRef<typeof Box>, 'asChild' | 'as'> &
  React.ComponentPropsWithoutRef<'pre'>;

const Pre = React.forwardRef<HTMLPreElement, PreProps>(function Pre(
  { className, children, m, mx, my, mt, mr, mb, ml, ...props },
  forwardedRef
) {
  const { scheme } = useSyntaxSchemeContext('Pre');

  return (
    <ScrollArea m={m} mx={mx} my={my} mt={mt} mr={mr} mb={mb} ml={ml}>
      <Box asChild {...props}>
        <pre ref={forwardedRef} className={classNames(styles.Pre, styles[scheme], className)}>
          {children}
        </pre>
      </Box>
    </ScrollArea>
  );
});

export { Pre, SyntaxSchemeProvider };
