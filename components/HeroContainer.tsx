import React from 'react';
import { Flex } from '@radix-ui/themes';

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
      style={{
        backgroundImage: 'linear-gradient(330deg, var(--purple-9) 0%, var(--indigo-9) 100%)',
        paddingBlock: 100,
        borderTopLeftRadius: 'var(--br-3)',
        borderTopRightRadius: 'var(--br-3)',
        ...style,
      }}
      {...props}
    >
      {children}
    </Flex>
  );
}
