import React from 'react';
import { Text } from '@modulz/design-system';

export function NavHeading({ css, ...props }: React.ComponentProps<typeof Text>) {
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
