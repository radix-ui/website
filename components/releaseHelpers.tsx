import React from 'react';
import { Flex, Heading, Badge, Link, Text } from '@modulz/design-system';

export function PackageRelease({
  major,
  name,
  version,
  preview,
}: {
  id: string;
  major?: boolean;
  name: string;
  version?: string;
  preview?: boolean;
}) {
  return (
    <Flex align="center" gap="1" css={{ mt: '$5', mb: '$2', '& + ul': { mt: '0' } }}>
      <Heading size="1" css={{ mr: 2 }}>
        {name}
      </Heading>
      {version && (
        <Badge size="1" variant={major ? 'yellow' : 'gray'}>
          {version}
        </Badge>
      )}
      {major && (
        <Text size="1" variant="gray">
          Major
        </Text>
      )}
      {preview && (
        <Text size="1" variant="gray">
          Preview
        </Text>
      )}
    </Flex>
  );
}

export function PRLink({ id }: { id: number | number[] }) {
  const ids = Array.isArray(id) ? id : [id];
  return (
    <Text variant="gray" css={{ display: 'inline', fontSize: '$2' }}>
      –{' '}
      {ids.map((id, i, arr) => (
        <React.Fragment key={id}>
          <Link
            variant="subtle"
            href={`https://github.com/radix-ui/primitives/pull/${id}`}
            target="_blank"
            rel="noopener"
          >
            #{id}
          </Link>
          {i < arr.length - 1 ? ' ' : null}
        </React.Fragment>
      ))}
    </Text>
  );
}
