import React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Container, Text, Button, Box, Flex, Separator, Link, Badge } from '@modulz/design-system';

import { FrontMatter } from '../types';
import { TitleAndMetaTags } from '../components/TitleAndMetaTags';
import { getPostById } from '../utils/allPosts';

type LayoutProps = {
  children: React.ReactNode;
  frontMatter: FrontMatter;
};

export default function DocsLayout({ children, frontMatter }: LayoutProps) {
  const router = useRouter();

  return (
    <>
      <TitleAndMetaTags title={`${frontMatter.title} — Stitches`} poster={frontMatter.poster} />

      <Text as="h1" size="8" css={{ fontWeight: 500, mb: '$2', lineHeight: '40px' }}>
        {frontMatter.title}
      </Text>

      <Text as="h2" size="6" css={{ mt: '$2', mb: '$4', color: '$gray600', lineHeight: '30px' }}>
        {frontMatter.description}
      </Text>

      <Box>{children}</Box>

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
    </>
  );
}
