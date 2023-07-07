import React from 'react';
import { Flex } from '@radix-ui/themes';
import styles from './HeroContainer.module.css';

export function HeroContainer({
  children,
  style,
  ...props
}: {
  style?: React.CSSProperties;
  children?: React.ReactNode;
}) {
  return (
    <Flex
      data-algolia-exclude
      // In case any semantic content sneaks through in a hero, let's hide it
      // from the a11y tree since this is a presentational component.
      role="presentation"
      position="relative"
      align="start"
      justify="center"
      mx={{ lg: '-7', xl: '-8' }}
      className={styles.HeroContainer}
      {...props}
    >
      {children}
    </Flex>
  );
}
