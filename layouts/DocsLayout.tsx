import React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { RemoveScroll } from 'react-remove-scroll';
import { MDXProvider } from '@mdx-js/react';
import {
  Text,
  Box,
  Link,
  Separator,
  Heading,
  Flex,
  Subheading,
  Subtitle,
  Container,
} from '@modulz/design-system';
import { MDXComponents } from '../components/MDXComponents';
import { ExternalIcon } from '../components/ExternalIcon';
import { Select } from '../components/Select';
import { FrontMatter } from '../types';
import { TitleAndMetaTags } from '../components/TitleAndMetaTags';
import { getPostById } from '../utils/allPosts';
import { pages as primitivesPages, removeVersionFromId } from '../utils/primitives';
import { pages as designSystemPages } from '../utils/designSystem';
import { useProductType } from '../utils/useProductType';
import { ScrollArea } from '../components/ScrollArea';
import { CheckIcon } from '@radix-ui/react-icons';
import { HeroContext } from '../components/HeroSlot';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

type LayoutProps = {
  children: React.ReactNode;
  frontMatter: FrontMatter;
};

export default function DocsLayout({ children, frontMatter }: LayoutProps) {
  const router = useRouter();
  const productType = useProductType();
  const heroSlotRef = React.useRef<HTMLDivElement>(null);
  const [, , , categoryType] = router.pathname.split('/');

  let allProductPages: FrontMatter[];
  if (productType === 'primitives') {
    allProductPages = primitivesPages;
  }
  if (productType === 'designSystem') {
    allProductPages = designSystemPages;
  }

  const productPages = allProductPages.filter((p) => p.status !== 'soon');

  const currentPageId = router.pathname.substr(1);
  const currentPageIndex = productPages.findIndex((page) =>
    currentPageId.includes(removeVersionFromId(page.version, page.id))
  );
  const previous = productPages[currentPageIndex - 1];
  const next = productPages[currentPageIndex + 1];

  return (
    <MDXProvider components={MDXComponents}>
      <TitleAndMetaTags
        title={`${frontMatter.title} — Radix UI`}
        description={frontMatter.description}
        poster={frontMatter.poster}
      />

      <ScrollArea>
        <Box
          as="aside"
          // Components that hide the scrollbar (like Dialog) add padding to
          // account for the scrollbar gap to avoid layout jank. This does not
          // work for position: fixed elements. Since we use react-remove-scroll
          // under the hood for those primitives, we can add this helper class
          // provided by that lib to deal with that for the QuickNav.
          // https://github.com/radix-ui/website/issues/64
          // https://github.com/theKashey/react-remove-scroll#positionfixed-elements
          className={RemoveScroll.classNames.zeroRight}
          css={{
            display: 'none',
            bp3: {
              display: 'block',
              width: '250px',
              flexShrink: 0,
              position: 'fixed',
              right: 0,
              order: 1,
              height: 'calc(100vh - (var(--space-8) + var(--space-5)))',
            },
          }}
        >
          <QuickNav />
        </Box>
      </ScrollArea>

      <Container size="2" as="main">
        <Box as="article">
          <Box as="header">
            <Text as="h1" size="8" css={{ fontWeight: 500, mb: '$1', lineHeight: '40px' }}>
              {frontMatter.title}
            </Text>

            <Subtitle css={{ mt: '$2', mb: '$7' }} as={'p' as any} role="doc-subtitle">
              {frontMatter.description}
            </Subtitle>

            {categoryType !== 'overview' && frontMatter.version !== frontMatter.versions?.[0] && (
              <Box
                as="aside"
                css={{
                  my: '$6',
                  py: '$2',
                  px: '$3',
                  bc: '$yellow100',
                  border: '1px solid $yellow400',
                  borderRadius: '$2',
                  '& p': {
                    fontSize: '$3',
                    color: '$yellow900',
                    lineHeight: '21px',
                    margin: 0,
                  },
                }}
              >
                <p>
                  This page contains documentation for an older version of{' '}
                  <Box as="span" css={{ fontWeight: 500 }}>
                    {frontMatter.title}
                  </Box>{' '}
                  ({frontMatter.version}). If you want to view the documentation for the latest
                  version ({frontMatter.versions?.[0]}),{' '}
                  <NextLink
                    href={`/${removeVersionFromId(frontMatter.version, frontMatter.id)}`}
                    passHref
                  >
                    <Link variant="blue">click here</Link>
                  </NextLink>
                  .
                </p>
              </Box>
            )}

            <div ref={heroSlotRef} />
            {categoryType !== 'overview' && (
              <Flex
                css={{
                  fd: 'column',
                  bp1: {
                    fd: 'row',
                  },
                }}
              >
                <Box
                  css={{
                    mb: '$5',
                    bp1: {
                      flex: '1 1 100%',
                      mr: '$5',
                    },
                  }}
                >
                  {Boolean(frontMatter.features) && (
                    <FeatureList>
                      {frontMatter.features.map((feature, i) => (
                        <Feature key={i}>{feature}</Feature>
                      ))}
                    </FeatureList>
                  )}
                </Box>
                <ComponentInfo
                  version={frontMatter.version}
                  versions={frontMatter.versions || []}
                  name={frontMatter.name}
                  aria={frontMatter.aria}
                />
              </Flex>
            )}
          </Box>

          <HeroContext.Provider value={heroSlotRef}>
            <Box>{children}</Box>
          </HeroContext.Provider>
        </Box>

        {Boolean(frontMatter.relatedIds) && (
          <>
            <Separator size="2" css={{ my: '$9', mx: 'auto' }} />
            <Box as="nav" aria-labelledby="site-related-nav-label">
              <Text
                id="site-related-nav-label"
                as="h2"
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
                          as="span"
                          size="4"
                          css={{
                            fontWeight: 500,
                            mb: '$1',
                          }}
                        >
                          {post.title}
                        </Text>
                        <Text
                          as="span"
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
            as="nav"
            aria-labelledby="site-page-nav-label"
            css={{
              justifyContent: 'space-between',
              my: '$9',
            }}
          >
            <VisuallyHidden id="site-page-nav-label" as="h2">
              Page Navigation
            </VisuallyHidden>
            {previous && (
              <Box>
                <NextLink href={`/${removeVersionFromId(previous.version, previous.id)}`} passHref>
                  <Box
                    as="a"
                    aria-label={`Previous page: ${previous.title}`}
                    css={{
                      color: '$blue900',
                      textDecoration: 'none',
                      alignItems: 'center',
                    }}
                    rel="prev"
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
                <NextLink href={`/${removeVersionFromId(next.version, next.id)}`} passHref>
                  <Box
                    as="a"
                    aria-label={`Previous page: ${next.title}`}
                    css={{
                      color: '$blue900',
                      textDecoration: 'none',
                      textAlign: 'right',
                    }}
                    rel="next"
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

      <Container size="2" css={{ my: '$9' }}>
        <Text size="3">
          <Link
            href={`https://github.com/radix-ui/website/edit/main/pages${router.pathname}.mdx`}
            title="Edit this page on GitHub."
            rel="noopener noreferrer"
            target="_blank"
            variant="subtle"
          >
            Edit this page on GitHub.
          </Link>
        </Text>
      </Container>
    </MDXProvider>
  );
}

function QuickNav() {
  const [headings, setHeadings] = React.useState<HTMLHeadingElement[]>([]);

  React.useEffect(() => {
    const headingElements: HTMLHeadingElement[] = Array.from(
      document.querySelectorAll('[data-heading]')
    );

    setHeadings(headingElements);
  }, []);

  if (headings.length === 0) {
    return null;
  }

  // Function to determine the Heading Level based on `nodeName` (H2, H3, etc)
  const getLevel = (nodeName) => {
    const startLevel = 2;
    return Number(nodeName.replace('H', '')) - startLevel;
  };

  return (
    <ScrollArea>
      <Box css={{ px: '$5' }} as="nav" aria-labelledby="site-quick-nav-heading">
        <Subheading css={{ mb: '$3' }} id="site-quick-nav-heading">
          Quick nav
        </Subheading>
        <Box
          as="ul"
          css={{
            listStyleType: 'none',
            p: 0,
            m: 0,
          }}
        >
          {headings.map(({ id, nodeName, innerText }) => {
            return (
              <Box as="li" key={id} css={{ py: '$1' }}>
                <Link
                  variant="subtle"
                  href={`#${id}`}
                  css={{
                    color: '$gray900',
                    display: 'inline-flex',
                    marginLeft: `calc(${getLevel(nodeName)} * 25px)`,
                  }}
                >
                  <Text
                    size="3"
                    css={{
                      color: 'inherit',
                      lineHeight: '23px',
                    }}
                  >
                    {innerText}
                  </Text>
                </Link>
              </Box>
            );
          })}
        </Box>
      </Box>
    </ScrollArea>
  );
}

const ComponentInfo = ({ version, versions, name, aria }) => {
  const router = useRouter();
  return (
    <Box css={{ flex: 0, width: '30%' }} as="nav" aria-labelledby="site-component-info-heading">
      <VisuallyHidden as="h2" id="site-component-info-heading">
        Component Reference Links
      </VisuallyHidden>
      <Separator size="2" css={{ mb: '$4', display: 'block', bp1: { display: 'none' } }} />
      <Flex css={{ mb: '$4', alignItems: 'baseline' }}>
        <Text size="2" css={{ fontWeight: 500, mr: '$1' }}>
          Version:
        </Text>
        <Select value={version} onChange={(e) => router.push(`./${e.target.value}`)}>
          {versions.map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </Select>
      </Flex>
      <Separator size="2" css={{ mb: '$4', display: 'none', bp1: { display: 'block' } }} />
      <Box css={{ mb: '$2' }}>
        <Link
          variant="blue"
          href={`https://github.com/radix-ui/primitives/tree/main/packages/react/${name}/src`}
          target="_blank"
        >
          <Flex css={{ display: 'inline-flex', position: 'relative' }}>
            <Text size="2" css={{ display: 'inline', lineHeight: '15px' }}>
              View source
            </Text>
            <Box as="span" css={{ ml: '$1', color: '$gray700', position: 'absolute', right: -20 }}>
              <ExternalIcon />
            </Box>
          </Flex>
        </Link>
      </Box>
      <Box css={{ mb: '$2' }}>
        <Link
          variant="blue"
          href={`https://www.npmjs.com/package/@radix-ui/react-${name}`}
          target="_blank"
        >
          <Flex css={{ display: 'inline-flex', position: 'relative' }}>
            <Text size="2" css={{ display: 'inline', lineHeight: '15px' }}>
              View on npm
            </Text>
            <Box as="span" css={{ ml: '$1', color: '$gray700', position: 'absolute', right: -20 }}>
              <ExternalIcon />
            </Box>
          </Flex>
        </Link>
      </Box>
      <Box css={{ mb: '$2' }}>
        <Link
          variant="blue"
          href="https://github.com/radix-ui/primitives/issues/new/choose"
          target="_blank"
        >
          <Flex css={{ display: 'inline-flex', position: 'relative' }}>
            <Text size="2" css={{ display: 'inline', lineHeight: '15px' }}>
              Report an issue
            </Text>
            <Box as="span" css={{ ml: '$1', color: '$gray700', position: 'absolute', right: -20 }}>
              <ExternalIcon />
            </Box>
          </Flex>
        </Link>
      </Box>
      {aria && (
        <Box css={{ mb: '$2' }}>
          <Link variant="blue" href={aria} target="_blank">
            <Flex css={{ display: 'inline-flex', position: 'relative' }}>
              <Text size="2" css={{ display: 'inline', lineHeight: '15px' }}>
                ARIA design pattern
              </Text>
              <Box
                as="span"
                css={{ ml: '$1', color: '$gray700', position: 'absolute', right: -20 }}
              >
                <ExternalIcon />
              </Box>
            </Flex>
          </Link>
        </Box>
      )}
    </Box>
  );
};

const FeatureList = ({ children }) => (
  <Box>
    <Heading css={{ mb: '$4' }} as={'h2' as any}>
      Features
    </Heading>
    <Box as="ul" css={{ p: 0, m: 0 }}>
      {children}
    </Box>
  </Box>
);

const Feature = ({ children, ...props }) => (
  <Flex as="li" {...props} css={{ mt: '$2' }}>
    <Box
      css={{
        width: '25px',
        height: '25px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '$green200',
        borderRadius: '50%',
        color: '$green900',
        marginRight: '15px',
        flexShrink: 0,
      }}
    >
      <CheckIcon />
    </Box>
    <Text size="3" css={{ lineHeight: '25px' }}>
      {children}
    </Text>
  </Flex>
);
