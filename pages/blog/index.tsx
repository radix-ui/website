import NextLink from 'next/link';
import {
  Box,
  Container,
  Text,
  Title,
  Subtitle,
  Heading,
  Flex,
  Link,
  Badge,
  Section,
} from '@modulz/design-system';
import { RadixLogo } from '../../components/RadixLogo';
import { blogPosts } from '../../utils/blogPosts';
import { parseISO, format } from 'date-fns';
import { authors } from '../../data/authors';
import { TitleAndMetaTags } from '../../components/TitleAndMetaTags';

export default function Home() {
  return (
    <Box>
      <TitleAndMetaTags title="Blog — Radix" description="More about what we're up to." />
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
            <RadixLogo label="Radix Homepage" />
          </Box>
        </NextLink>
      </Box>
      <Container size="3" css={{ textAlign: 'center', mb: '$4' }}>
        <Title css={{ mb: '$4' }}>Blog</Title>
        <Subtitle>More about what we're up to.</Subtitle>
      </Container>

      <Section size="3">
        <Container size="2">
          {blogPosts.map((frontMatter, index) => (
            <Box
              key={frontMatter.title}
              css={{
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <Box css={{ mb: '$7' }}>
                <NextLink href={`/${frontMatter.id}`} passHref>
                  <Link variant="contrast">
                    <Heading>{frontMatter.title}</Heading>
                  </Link>
                </NextLink>
                <Flex css={{ mt: '$3', alignItems: 'center' }}>
                  <Text as="time" size="2" css={{ color: '$gray900' }}>
                    {format(parseISO(frontMatter.publishedAt), 'MMMM yyyy')}
                  </Text>
                  <Text size="2" css={{ color: '$gray900' }}>
                    &nbsp;by {authors[frontMatter.by].name}
                  </Text>
                  {frontMatter.type === 'changelog' && <Badge css={{ ml: '$2' }}>Changelog</Badge>}
                </Flex>
              </Box>
            </Box>
          ))}
        </Container>
      </Section>
    </Box>
  );
}
