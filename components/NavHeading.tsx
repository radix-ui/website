import React from 'react';
import { Text, TextProps } from '@modulz/design-system';

export function NavHeading({ css, ...props }: TextProps) {
  return (
    <Text
      as="h4"
      size="3"
      {...props}
      css={{
        fontWeight: 500,
        px: '$5',
        py: '$2',
        ...(css as any),
      }}
    />
  );
}
