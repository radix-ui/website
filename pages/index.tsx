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
  Card,
  Text,
} from '@modulz/design-system';
import { RadixLogo } from '../components/RadixLogo';

export default function Home() {
  return (
    <Box>
      <Section size="2">
        <Container size="2">
          <Heading size="4" css={{ ta: 'center', mb: '$3' }}>
            The foundation for your design system
          </Heading>
          <Paragraph size="2" css={{ ta: 'center', mb: '$7' }}>
            A suite of components, colors, and icons for building high-quality React design systems
            and web apps.
          </Paragraph>
          <Grid columns="2" gap="5" css={{ mx: '-$4' }}>
            <NextLink href="/docs/primitives" passHref>
              <Card as="a" variant="ghost">
                <Box css={{ p: '$4' }}>
                  <Heading css={{ fontWeight: 500, mb: '$2' }}>Primitives</Heading>
                  <Text variant="gray" css={{ lineHeight: '23px' }}>
                    Unstyled UI components with a focus on a11y and developer experience.
                  </Text>
                </Box>
              </Card>
            </NextLink>
            <NextLink href="/colors" passHref>
              <Card as="a" variant="ghost">
                <Box css={{ p: '$4' }}>
                  <Heading css={{ fontWeight: 500, mb: '$2' }}>Colors</Heading>
                  <Text variant="gray" css={{ lineHeight: '23px' }}>
                    A gorgeous, accessible color system.
                  </Text>
                </Box>
              </Card>
            </NextLink>
          </Grid>
        </Container>
      </Section>
    </Box>
  );
}
