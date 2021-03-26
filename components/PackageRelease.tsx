import React from 'react';
import { Paragraph, Badge } from '@modulz/design-system';

export function PackageRelease({ name, version }: { id: string; name: string; version: string }) {
  return (
    <Paragraph css={{ fontWeight: '500' }}>
      {name}{' '}
      <Badge size="1" variant="blue" css={{ ml: '$1' }}>
        {version}
      </Badge>
    </Paragraph>
  );
}
