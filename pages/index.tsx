import React from 'react';
import NextLink from 'next/link';
import {
  Section,
  Link,
  Container,
  Heading,
  Paragraph,
  Box,
  Grid,
  Text,
} from '@modulz/design-system';

export default function Home() {
  return (
    <Box>
      oh hi hello
      <NextLink href="/primitives/docs/overview/introduction" passHref>
        <Link variant="blue">Primitives</Link>
      </NextLink>
      <NextLink href="/colors" passHref>
        <Link variant="blue">Colors</Link>
      </NextLink>
    </Box>
  );
}
