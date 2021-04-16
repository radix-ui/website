import React from 'react';
import NextLink from 'next/link';
import { Box, Link } from '@modulz/design-system';

export function OldVersionNote({ name, href }) {
  return (
    <Box
      as="aside"
      css={{
        mt: '-$5',
        mb: '$5',
        mx: '-$5',
        py: '$2',
        px: '$5',
        bc: '$yellow100',
        boxShadow: '0 0 0 1px $colors$yellow400',

        '@bp2': {
          position: 'absolute',
          top: '-$8',
          left: '$5',
          right: '$5',
          m: 0,
          px: '$3',
          borderBottomRightRadius: '$3',
          borderBottomLeftRadius: '$3',
        },
        '@bp4': {
          px: '$8',
          mx: '-$6',
          left: '-$1',
          right: '-$1',
        },
        '& p': {
          fontSize: '$3',
          color: '$yellow900',
          lineHeight: '21px',
          margin: 0,
        },
      }}
    >
      <p>
        A newer version of{' '}
        <Box as="span" css={{ fontWeight: 500 }}>
          {name}
        </Box>{' '}
        is available.{' '}
        <NextLink href={href} passHref>
          <Link variant="blue">Learn more</Link>
        </NextLink>
        .
      </p>
    </Box>
  );
}
