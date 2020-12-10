import NextLink from 'next/link';
import {
  Box,
  Flex,
  Container,
  Subheading,
  Section,
  Paragraph,
  Separator,
  Grid,
  Card,
  Title,
  Subtitle,
  Text,
  Link,
} from '@modulz/design-system';
import { RadixLogo } from '../components/RadixLogo';
import { TitleAndMetaTags } from '../components/TitleAndMetaTags';

export default function Home() {
  return (
    <Box>
      <TitleAndMetaTags />
      <Box as="header" css={{ py: '$4', px: '$4' }}>
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
            <span
              style={{
                position: 'absolute',
                width: 1,
                height: 1,
                padding: 0,
                margin: -1,
                overflow: 'hidden',
                clip: 'rect(0, 0, 0, 0)',
                whiteSpace: 'nowrap',
                border: 0,
              }}
            >
              Radix homepage
            </span>
            <RadixLogo />
          </Box>
        </NextLink>
      </Box>

      <Section size="3" css={{ pt: '$6' }}>
        <Container size="3" css={{ textAlign: 'center' }}>
          <Title css={{ mb: '$4' }}>Everything you need to build a design system, website or web app.</Title>
        </Container>

        <Container size="2" css={{ textAlign: 'center' }}>
          <Subtitle>
            Components, colors, icons, templates, and an extensive design system. Free and
            open-source.
          </Subtitle>
          <Flex css={{ jc: 'center', mt: '$7' }}>
            <NextLink href="/blog" passHref>
              <Link variant="blue">
                <Text size="6">
                  View documentation
                </Text>
              </Link>
            </NextLink>
          </Flex>
        </Container>
      </Section>

      <Flex css={{ justifyContent: 'center', }}>
        <Separator size="2" css={{ flexShrink: 0, width: '45px' }} />
      </Flex>

      <Section size="3">
        <Container size="2" css={{ textAlign: 'center' }}>
          <Text as="h2" size={{ initial: '6', bp2: '7' }} css={{ mb: '$4', fontWeight: 500 }}>
            Products
          </Text>
          <Text as="h3" size={{ initial: '5', bp2: '6' }} css={{ color: '$gray900', mb: '$4' }}>
            Everything a UI needs.
          </Text>
        </Container>

        <Container size={{ initial: '2', bp2: '2' }} css={{ my: '$8' }}>
          <Grid
            css={{
              gap: '$6',
              gridTemplateColumns: '1fr',
              bp2: {
                gap: '$7',
                gridTemplateColumns: '1fr 1fr',
              },
            }}
          >
            <NextLink passHref href="/design-system">
              <Card as="a" variant="ghost" css={{ p: '$5' }}>
                <Subheading size="5" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
                  Design System
                </Subheading>
                <Paragraph css={{ color: '$gray900' }}>
                  An off-the-shelf set of components. Built with Radix Primitives and Stitches.
                </Paragraph>
              </Card>
            </NextLink>

            <NextLink passHref href="/primitives">
              <Card as="a" variant="ghost" css={{ p: '$5' }}>
                <Subheading size="5" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
                  Primitives
                </Subheading>
                <Paragraph css={{ color: '$gray900' }}>
                Low-level, accessible and unstyled React Components. The foundation of our Design
                System.
                </Paragraph>
              </Card>
            </NextLink>

            <Card as="a" variant="ghost" href="#" css={{ p: '$5' }}>
              <Subheading size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
                Color
              </Subheading>
              <Paragraph css={{ color: '$gray900' }}>
                Browse an extensive collection of themes, including dark mode. Fully tested and
                interoperable with Radix Components.
              </Paragraph>
            </Card>

            <NextLink passHref href="/primitives">
              <Card as="a" variant="ghost" css={{ p: '$5' }}>
                <Subheading size="5" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
                  Reset
                </Subheading>
                <Paragraph css={{ color: '$gray900' }}>
                Low-level, accessible and unstyled React Components. The foundation of our Design
                System.
                </Paragraph>
              </Card>
            </NextLink>

            <NextLink passHref href="/primitives">
              <Card as="a" variant="ghost" css={{ p: '$5' }}>
                <Subheading size="5" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
                  Tenplates
                </Subheading>
                <Paragraph css={{ color: '$gray900' }}>
                Low-level, accessible and unstyled React Components. The foundation of our Design
                System.
                </Paragraph>
              </Card>
            </NextLink>

            <Card as="a" variant="ghost" href="#" css={{ p: '$5' }}>
              <Subheading size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
                Icons
              </Subheading>

              <Text
                as="p"
                size={{ initial: '4', bp2: '4' }}
                css={{ lineHeight: '25px', color: '$gray900' }}
              >
                An ever-growing library of crisp icons. Currently more than 300 to choose from.
                Available in different sizes.
              </Text>
            </Card>
          </Grid>
        </Container>
      </Section>
    </Box>
  );
}
