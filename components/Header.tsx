import NextLink from 'next/link';
import { Box, Title, Flex, Heading, Subtitle, Link, Text } from '@modulz/design-system';
import { ThemeToggle } from '@components/ThemeToggle';
import { RadixLogo } from '@components/RadixLogo';

export function Header() {
  return (
    <Flex
      as="header"
      css={{
        py: '$4',
        px: '$4',
        jc: 'space-between',
        position: 'relative',
        zIndex: '1',
      }}
    >
      <NextLink href="/" passHref>
        <Box
          as="a"
          css={{
            color: '$hiContrast',
            display: 'inline-flex',
            '&:focus': {
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
      <Flex as="nav" css={{ ai: 'center' }}>
        <NextLink href="/primitives/docs" passHref>
          <Link variant="subtle" css={{ mr: '$5', '@bp2': { mr: '$7' } }}>
            <Text>Docs</Text>
          </Link>
        </NextLink>
        <NextLink href="/blog" passHref>
          <Link variant="subtle" css={{ mr: '$5', '@bp2': { mr: '$7' } }}>
            <Text>Blog</Text>
          </Link>
        </NextLink>
        <Link
          href="https://github.com/radix-ui"
          variant="subtle"
          css={{
            mr: '$5',
            display: 'none',
            '@bp1': { display: 'block' },
            '@bp2': { mr: '$7' },
          }}
        >
          <Text>GitHub</Text>
        </Link>
        <Link
          href="https://discord.com/invite/7Xb99uG"
          variant="subtle"
          css={{ mr: '$5', '@bp2': { mr: '$7' } }}
        >
          <Text>Discord</Text>
        </Link>
        <ThemeToggle />
      </Flex>
    </Flex>
  );
}
