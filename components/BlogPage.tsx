import * as React from 'react';
import NextLink from 'next/link';
import { Box, Container } from '@modulz/design-system';
import { RadixLogo } from './RadixLogo';

function BlogPage({ children }: { children: React.ReactNode }) {
  return (
    <Box>
      <Box as="header" css={{ py: '$4', px: '$4', mb: '$4' }}>
        <NextLink href="/" passHref>
          <Box
            as="a"
            css={{
              color: '$hiContrast',
              display: 'inline-flex',
              ':focus': {
                boxShadow: 'none',
              },
            }}
          >
            <RadixLogo label="Radix Homepage" />
          </Box>
        </NextLink>
      </Box>

      <Box css={{ pb: '$9' }}>
        <Container size="2">{children}</Container>
      </Box>
    </Box>
  );
}

export { BlogPage };
