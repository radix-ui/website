import React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { MDXProvider } from '@mdx-js/react';
import { Text, Box, Separator, Flex, Subtitle, Container } from '@modulz/design-system';
import { MDXComponents } from '../components/MDXComponents';
import { FrontMatter } from '../types';
import { TitleAndMetaTags } from '../components/TitleAndMetaTags';
import { getPostById } from '../utils/allPosts';
import { pages as primitivesPages } from '../utils/primitives';
import { pages as designSystemPages } from '../utils/designSystem';
import { useProductType } from '../utils/useProductType';

type LayoutProps = {
  children: React.ReactNode;
  frontMatter: FrontMatter;
};

export default function DocsLayout({ children, frontMatter }: LayoutProps) {
  const router = useRouter();
  const productType = useProductType();

  let productPages;
  if (productType === 'primitives') {
    productPages = primitivesPages;
  }
  if (productType === 'designSystem') {
    productPages = designSystemPages;
  }

  const currentPageId = router.pathname.substr(1);
  const currentPageIndex = productPages.findIndex((page) => page.id === currentPageId);
  const previous = productPages[currentPageIndex - 1];
  const next = productPages[currentPageIndex + 1];

  return (
    <MDXProvider components={MDXComponents}>
      <TitleAndMetaTags title={`${frontMatter.title} — Radix UI`} poster={frontMatter.poster} />

      <Container size="2">
        <Text as="h1" size="8" css={{ fontWeight: 500, mb: '$1', lineHeight: '40px' }}>
          {frontMatter.title}
        </Text>

        <Subtitle css={{ mt: '$2' }}>{frontMatter.description}</Subtitle>

        <Box>{children}</Box>

        {Boolean(frontMatter.relatedIds) && (
          <>
            <Separator size="2" css={{ my: '$9', mx: 'auto' }} />
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

        <Separator size="2" css={{ my: '$9', mx: 'auto' }} />

        {(previous || next) && (
          <Flex
            aria-label="Pagination navigation"
            css={{
              justifyContent: 'space-between',
              my: '$9',
            }}
          >
            {previous && (
              <Box>
                <NextLink href={`/${previous.id}`} passHref>
                  <Box
                    as="a"
                    aria-label={`Previous page: ${previous.title}`}
                    css={{
                      color: '$blue900',
                      textDecoration: 'none',
                      alignItems: 'center',
                    }}
                  >
                    <Box css={{ mb: '$2' }}>
                      <Text size="3" css={{ color: '$gray900' }}>
                        Previous
                      </Text>
                    </Box>
                    <Text size="5" css={{ color: 'inherit' }}>
                      {previous.title}
                    </Text>
                  </Box>
                </NextLink>
              </Box>
            )}
            {next && (
              <Box css={{ ml: 'auto' }}>
                <NextLink href={`/${next.id}`} passHref>
                  <Box
                    as="a"
                    aria-label={`Previous page: ${next.title}`}
                    css={{
                      color: '$blue900',
                      textDecoration: 'none',
                      textAlign: 'right',
                    }}
                  >
                    <Box css={{ mb: '$2' }}>
                      <Text size="3" css={{ color: '$gray900' }}>
                        Next
                      </Text>
                    </Box>
                    <Text size="5" css={{ color: 'inherit' }}>
                      {next.title}
                    </Text>
                  </Box>
                </NextLink>
              </Box>
            )}
          </Flex>
        )}
      </Container>
    </MDXProvider>
  );
}
