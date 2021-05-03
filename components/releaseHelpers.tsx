import React from 'react';
import { Paragraph, Badge, Link, Text } from '@modulz/design-system';

export function PackageRelease({ name, version }: { id: string; name: string; version: string }) {
  return (
    <Paragraph css={{ fontWeight: '500' }}>
      {name}{' '}
      <Badge size="1" variant="blue" css={{ ml: '$1', fontFamily: '$mono' }}>
        {version}
      </Badge>
    </Paragraph>
  );
}

export function PRLink({ id }: { id: number | number[] }) {
  const ids = Array.isArray(id) ? id : [id];
  return (
    <Text css={{ display: 'inline', fontSize: '$2' }}>
      –{' '}
      {ids.map((id, i, arr) => (
        <React.Fragment key={id}>
          <Link
            variant="subtle"
            href={`https://github.com/radix-ui/primitives/pull/${id}`}
            target="_blank"
            rel="noopener"
            css={{ fontFamily: '$mono' }}
          >
            #{id}
          </Link>
          {i < arr.length - 1 ? ' ' : null}
        </React.Fragment>
      ))}
    </Text>
  );
}
