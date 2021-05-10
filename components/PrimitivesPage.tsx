import * as React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Box, Flex, Badge, Text, Link, Container, IconButton } from '@modulz/design-system';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { ScrollArea } from './ScrollArea';
import { RadixLogo } from './RadixLogo';
import { ThemeToggle } from '@components/ThemeToggle';
import { allPrimitivesRoutes, primitivesRoutes } from '@lib/primitivesRoutes';
import { NavHeading, NavItem } from './DocNav';

export function PrimitivesPage({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);

  let currentPageSlug;

  const routerSlug = router.query.slug;

  const GITHUB_URL = 'https://github.com';
  const REPO_NAME = 'radix-ui/website';
  let editUrl = `${GITHUB_URL}/${REPO_NAME}/edit/main/data/${currentPageSlug}.mdx`;

  if (typeof routerSlug === 'string') {
    currentPageSlug = router.pathname.substr(1).replace('[slug]', routerSlug);
    editUrl = `${GITHUB_URL}/${REPO_NAME}/edit/main/data/${currentPageSlug}.mdx`;
  } else {
    currentPageSlug = router.pathname.substr(1).replace('[...slug]', routerSlug[0]);
    editUrl = `${GITHUB_URL}/${REPO_NAME}/edit/main/data/${currentPageSlug}/${routerSlug[1]}.mdx`;
  }

  const currentPageIndex = allPrimitivesRoutes.findIndex((page) => page.slug === currentPageSlug);
  const previous = allPrimitivesRoutes[currentPageIndex - 1];
  const next = allPrimitivesRoutes[currentPageIndex + 1];

  React.useEffect(() => {
    const handleRouteChange = () => setIsOpen(false);
    router.events.on('routeChangeStart', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => router.events.off('routeChangeStart', handleRouteChange);
  }, []);

  return (
    <Flex
      css={{
        flexDirection: 'column',
        '@bp2': {
          flexDirection: 'row',
        },
      }}
    >
      <Box
        css={{
          width: '100%',
          maxHeight: 'auto',
          borderBottom: '1px solid',
          borderColor: '$slate500',
          WebkitOverflowScrolling: 'touch',
          overflowX: 'hidden',

          '@bp2': {
            position: 'fixed',
            top: 0,
            left: 0,
            bottom: 0,
            width: '250px',
            borderRight: '1px solid',
            borderBottom: '0',
            borderColor: '$slate500',
          },
        }}
      >
        <ScrollArea>
          <Flex css={{ alignItems: 'center', p: '$4' }}>
            <NextLink href="/" passHref>
              <Box
                as="a"
                css={{
                  color: '$hiContrast',
                  display: 'inline-flex',
                  '&:focus': { boxShadow: 'none' },
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
            <Badge variant="yellow" css={{ ml: '$3' }}>
              Alpha
            </Badge>
            <ThemeToggle css={{ ml: 'auto' }} />
            <Box css={{ ml: '$2', '@bp2': { display: 'none' } }}>
              <IconButton
                variant="ghost"
                onClick={() => setIsOpen(!isOpen)}
                state={isOpen ? 'active' : undefined}
              >
                <HamburgerMenuIcon />
              </IconButton>
            </Box>
          </Flex>

          <Box
            css={{
              display: isOpen ? 'block' : 'none',
              '@bp2': {
                display: 'block',
              },
            }}
          >
            {primitivesRoutes.map((section) => (
              <Box key={section.label} css={{ mb: '$4' }}>
                <NavHeading>{section.label}</NavHeading>
                {section.pages.map((page) => {
                  const isDraft = page.draft;
                  return (
                    <NavItem
                      key={page.slug}
                      href={`/${page.slug}`}
                      disabled={isDraft}
                      active={currentPageSlug === page.slug}
                    >
                      <Text size="2" css={{ color: 'inherit', lineHeight: '1' }}>
                        {page.title}
                      </Text>
                      {isDraft ? <Badge css={{ ml: '$2' }}>Coming soon</Badge> : null}
                    </NavItem>
                  );
                })}
              </Box>
            ))}
            <Box css={{ height: '$5', '@bp2': { height: '$8' } }} />
          </Box>
        </ScrollArea>
      </Box>

      <Box
        css={{
          maxWidth: '100%',
          flex: 1,
          py: '$5',

          '@bp2': { pt: '$8', pb: '$9', pl: '250px' },
          '@bp3': { pr: '250px' },
        }}
      >
        <Container size="3" css={{ maxWidth: '780px', position: 'relative' }}>
          {children}
        </Container>

        <Container size="3" css={{ maxWidth: '780px' }}>
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
                  <NextLink href={`/${previous.slug}`} passHref>
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
                        <Text size="3" css={{ color: '$slate900' }}>
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
                  <NextLink href={`/${next.slug}`} passHref>
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
                        <Text size="3" css={{ color: '$slate900' }}>
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
        <Container size="3" css={{ maxWidth: '780px', my: '$9' }}>
          <Text size="3">
            <Link
              href={editUrl}
              title="Edit this page on GitHub."
              rel="noopener noreferrer"
              target="_blank"
              variant="subtle"
            >
              Edit this page on GitHub.
            </Link>
          </Text>
        </Container>
      </Box>
    </Flex>
  );
}
