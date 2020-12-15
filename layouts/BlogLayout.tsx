import React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { MDXProvider } from '@mdx-js/react';
import { Text, Button, Box, Subtitle, Flex, Separator, Link, Badge } from '@modulz/design-system';
import { ArrowLeftIcon } from '@modulz/radix-icons';
import { parseISO, format } from 'date-fns';
import { FrontMatter } from '../types';
import { TitleAndMetaTags } from '../components/TitleAndMetaTags';
import { getPostById } from '../utils/allPosts';
import { authors } from '../data/authors';
import { MDXComponents } from '../components/MDXComponents';

type LayoutProps = {
  children: React.ReactNode;
  frontMatter: FrontMatter;
};

export default function BlogLayout({ children, frontMatter }: LayoutProps) {
  const router = useRouter();

  const twitterShare = `
		https://twitter.com/intent/tweet?
		text="${frontMatter.title}" by @${
    authors[frontMatter.by].twitter
  } on the @radix_ui blog.&url=https://radix-ui.com${router.route}
		`;

  return (
    <MDXProvider components={MDXComponents}>
      <TitleAndMetaTags title={`${frontMatter.title} — Radix`} poster={frontMatter.poster} />

      <NextLink href="/blog" passHref>
        <Button size="2" as="a" variant="ghost" css={{ color: '$gray900', ml: '-40px', mb: '$6' }}>
          <Box css={{ mr: '$2' }}>
            <ArrowLeftIcon />
          </Box>
          Blog
        </Button>
      </NextLink>

      <Text size="8" css={{ fontWeight: 500, mb: '$2' }}>
        {frontMatter.title}
      </Text>

      <Subtitle css={{ mt: '$2', mb: '$5' }} as={'p' as any} role="doc-subtitle">
        {frontMatter.description}
      </Subtitle>

      <Flex css={{ mb: '$7', alignItems: 'center' }}>
        {/* <Avatar src={authors[frontMatter.by].avatar} mr={2} /> */}
        <Text as="p" size="2" css={{ color: '$gray900', lineHeight: 0, whiteSpace: 'nowrap' }}>
          <Link
            href={`https://twitter.com/${authors[frontMatter.by].twitter}`}
            rel="noopener noreferrer"
            variant="subtle"
          >
            {authors[frontMatter.by].name}
          </Link>
        </Text>
        <Separator orientation="vertical" css={{ mx: '$2' }} />
        <Text as="time" size="2" css={{ color: '$gray900', lineHeight: 0, whiteSpace: 'nowrap' }}>
          {format(parseISO(frontMatter.publishedAt), 'MMMM yyyy')}
        </Text>
        <Flex css={{ alignItems: 'center', display: 'none', bp2: { display: 'flex' } }}>
          <Separator orientation="vertical" css={{ mx: '$2' }} />
          <Text size="2" css={{ color: '$gray900', lineHeight: 0 }}>
            {frontMatter.readingTime.text}
          </Text>
          {frontMatter.type === 'changelog' && (
            <>
              <Separator orientation="vertical" css={{ mx: '$2' }} />
              <Badge>Changelog</Badge>
            </>
          )}
        </Flex>
      </Flex>

      <Box>{children}</Box>

      <Separator size="2" css={{ my: '$8', mx: 'auto' }} />
      <Box css={{ textAlign: 'center' }}>
        <Text as="p" size="4" css={{ lineHeight: 2 }}>
          Share this post on{' '}
          <Link variant="blue" href={twitterShare} target="_blank">
            Twitter
          </Link>
          .
        </Text>
      </Box>

      {Boolean(frontMatter.relatedIds) && (
        <>
          <Separator size="2" css={{ my: '$8', mx: 'auto' }} />
          <Box>
            <Text
              as="h3"
              size="2"
              css={{
                mb: '$3',
                fontWeight: 500,
                textAlign: 'center',
                textTransform: 'uppercase',
              }}
            >
              Related
            </Text>

            <Flex css={{ my: '$4', flexDirection: 'column', gap: '$4' }}>
              {frontMatter.relatedIds.map((relatedPostId) => {
                const post = getPostById(relatedPostId);
                return (
                  <Box
                    as="a"
                    key={post.id}
                    href={`/${post.id}`}
                    css={{
                      textDecoration: 'none',
                      color: 'inherit',
                    }}
                  >
                    <Box>
                      <Text
                        as="h6"
                        size="4"
                        css={{
                          fontWeight: 500,
                          mb: '$1',
                        }}
                      >
                        {post.title}
                      </Text>
                      <Text
                        as="p"
                        size="3"
                        css={{
                          color: '$hiContrast',
                        }}
                      >
                        {post.description}
                      </Text>
                    </Box>
                  </Box>
                );
              })}
            </Flex>
          </Box>
        </>
      )}
    </MDXProvider>
  );
}
