import NextLink from 'next/link';
import { Box, Flex, Container, Separator, Grid, Text, Code, Link } from '@modulz/design-system';
import { RadixLogo } from '../../components/RadixLogo';
import { TitleAndMetaTags } from '../../components/TitleAndMetaTags';

export default function PrimitivesHome() {
  return (
    <Box>
      <TitleAndMetaTags />
      <Box as="header" css={{ py: '$4', px: '$4', mb: '$7' }}>
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
              Stitches homepage
            </span>
            <RadixLogo />
          </Box>
        </NextLink>
      </Box>
      <Container size="3" css={{ textAlign: 'center', mb: '$4' }}>
        <Text
          size={{ initial: '8', bp2: '9' }}
          css={{ fontWeight: 500, lineHeight: '35px', bp2: { lineHeight: '55px' } }}
        >
          Radix Primitives
        </Text>
      </Container>

      <Container size="2" css={{ textAlign: 'center', mb: '$4' }}>
        <Text
          as="h2"
          size={{ initial: '5', bp2: '6' }}
          css={{
            color: '$gray800',
            textAlign: 'center',
            lineHeight: '25px',
            bp2: { lineHeight: '30px' },
          }}
        >
          Low-level, accessible and unstyled React Components. The foundation of our Design System.
        </Text>
      </Container>

      <Container size="2" css={{ textAlign: 'center' }}>
        <NextLink passHref href="/design-system/docs">
          <Link>Read the docs</Link>
        </NextLink>
      </Container>

      <Flex css={{ justifyContent: 'center', my: '$9' }}>
        <Separator size="2" css={{ flexShrink: 0, width: '45px' }} />
      </Flex>
    </Box>
  );
}
