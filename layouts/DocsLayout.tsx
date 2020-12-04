import React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { MDXProvider } from '@mdx-js/react';
import { Text, Box, Link, Separator, Heading, Flex } from '@modulz/design-system';
import { MDXComponents } from '../components/MDXComponents';
import { FrontMatter } from '../types';
import { TitleAndMetaTags } from '../components/TitleAndMetaTags';
import { getPostById } from '../utils/allPosts';
import { pages as primitivesPages } from '../utils/primitives';
import { pages as designSystemPages } from '../utils/designSystem';
import { useProductType } from '../utils/useProductType';
import { ScrollArea } from '../components/ScrollArea';

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

      <Flex css={{ maxWidth: '1145px', mx: 'auto' }}>
        <Box
          css={{
            display: 'none',
            bp3: {
              display: 'block',
              width: '230px',
              flexShrink: 0,
              order: 1,
              position: 'sticky',
              top: '$8',
              maxHeight: 'calc(100vh - (var(--space-8) + var(--space-5)))',
            },
          }}
        >
          <QuickNav />
        </Box>
        <Box css={{ flex: '1 1 100%', px: '$5' }}>
          <Text as="h1" size="8" css={{ fontWeight: 500, mb: '$2', lineHeight: '40px' }}>
            {frontMatter.title}
          </Text>

          <Text
            as="h2"
            size="6"
            css={{ mt: '$2', mb: '$4', color: '$gray600', lineHeight: '30px' }}
          >
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
                        color: '$blue600',
                        textDecoration: 'none',
                        alignItems: 'center',
                      }}
                    >
                      <Box css={{ mb: '$2' }}>
                        <Text size="3" css={{ color: '$gray600' }}>
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
                        color: '$blue600',
                        textDecoration: 'none',
                        textAlign: 'right',
                      }}
                    >
                      <Box css={{ mb: '$2' }}>
                        <Text size="3" css={{ color: '$gray600' }}>
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
        </Box>
      </Flex>
    </MDXProvider>
  );
}

type Heading = {
  text: string;
  level: number;
  id: string;
  top: number;
};

function QuickNav() {
  const [headings, setHeadings] = React.useState<Heading[]>([]);
  const [activeHeading, setActiveHeading] = React.useState<string | undefined>(undefined);

  React.useEffect(() => {
    const headingElements: HTMLHeadingElement[] = Array.from(
      document.querySelectorAll('[data-heading]')
    );
    const headings = headingElements.map((heading) => ({
      text: heading.innerText,
      level: Number(heading.nodeName.replace('H', '')) - 2,
      id: heading.id,
      top: heading.getBoundingClientRect().top,
    }));
    setHeadings(headings);
  }, []);

  React.useEffect(() => {
    if (headings.length === 0) return;

    function onScroll() {
      let y = window.pageYOffset;
      let windowHeight = window.innerHeight;
      let sortedHeadings = headings.concat([]).sort((a, b) => a.top - b.top);

      if (y <= 0) {
        setActiveHeading(sortedHeadings[0].id);
        return;
      }
      if (y + windowHeight >= document.body.scrollHeight) {
        setActiveHeading(sortedHeadings[sortedHeadings.length - 1].id);
        return;
      }
      const middle = y + windowHeight / 2;
      let current = sortedHeadings[0].id;
      for (let i = 0; i < sortedHeadings.length; i++) {
        if (middle >= sortedHeadings[i].top) {
          current = sortedHeadings[i].id;
        }
      }
      setActiveHeading(current);
    }

    window.addEventListener('scroll', onScroll, {
      capture: true,
      passive: true,
    });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll, true);
  }, [headings]);

  if (headings.length === 0) {
    return null;
  }

  return (
    <ScrollArea>
      <Box>
        <Text size="2" css={{ fontWeight: '500', mb: '$3' }}>
          Quick nav
        </Text>
        {headings.map(({ id, level, text }) => (
          <Text
            as="div"
            size="3"
            key={id}
            css={{ marginLeft: `calc(${level} * 10px)`, lineHeight: '20px', mt: '$2' }}
          >
            <Link
              variant="subtle"
              href={`#${id}`}
              css={{
                color: activeHeading === id ? '$hiContrast' : 'inherit',
                fontWeight: activeHeading === id ? 500 : 400,
              }}
            >
              {text}
            </Link>
          </Text>
        ))}
      </Box>
    </ScrollArea>
  );
}
