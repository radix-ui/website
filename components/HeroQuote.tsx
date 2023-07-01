import React from 'react';
import { Text } from '@radix-ui/themes';
import styles from './HeroQuote.module.css';

export const HeroQuote = ({ children, ...props }: React.ComponentProps<typeof Text>) => {
  return (
    <Text {...props} size="5" color="gray" asChild className={styles.HeroQuote}>
      <blockquote>{(children as any).props?.children ?? children}</blockquote>
    </Text>
  );
};
