import * as React from 'react';
import NextLink from 'next/link';
import { Callout, Link, Text } from '@radix-ui/themes';

export function OldVersionNote({ name, href }: { name: string; href: string }) {
  return (
    <Callout.Root color="yellow" mt={{ initial: '-3', md: '-8' }} mb="6">
      <Callout.Text>
        A newer version of <Text weight="bold">{name}</Text> is available.{' '}
        <NextLink href={href} passHref legacyBehavior>
          <Link>Learn more</Link>
        </NextLink>
      </Callout.Text>
    </Callout.Root>
  );
}
