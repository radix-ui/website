import * as React from 'react';
import NextLink from 'next/link';
import { Box, Link, Text } from '@radix-ui/themes';
import styles from './OldVersionNote.module.css';

export function OldVersionNote({ name, href }) {
  return (
    <Box asChild className={styles.Note} mb="5">
      <aside>
        <Text as="p" size="2" color="yellow">
          A newer version of <Text weight="bold">{name}</Text> is available.{' '}
          <NextLink href={href} passHref legacyBehavior>
            <Link color="blue">Learn more</Link>
          </NextLink>
          .
        </Text>
      </aside>
    </Box>
  );
}
