import * as React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Text, Box, Flex, Container, Badge, IconButton, Link } from '@modulz/design-system';
import { HamburgerMenuIcon } from '@modulz/radix-icons';
import { ScrollArea } from '../components/ScrollArea';
import { RadixLogo } from './RadixLogo';
import { pages as primitivesPages } from '../utils/primitives';
import { pages as designSystemPages } from '../utils/designSystem';
import { PrimitivesNav } from './PrimitivesNav';
import { DesignSystemNav } from './DesignSystemNav';

export function DocsPage({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);

  const [_, productType] = router.pathname.split('/');

  const currentPageId = router.pathname.substr(1);

  let productPages;

  if (productType === 'primitives') {
    productPages = primitivesPages;
  }
  if (productType === 'design-system') {
    productPages = designSystemPages;
  }

  const currentPageIndex = productPages.findIndex((page) => page.id === currentPageId);

  const previous = productPages[currentPageIndex - 1];
  const next = productPages[currentPageIndex + 1];

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
        bp2: {
          flexDirection: 'row',
        },
      }}
    >
      <Box
        css={{
          width: '100%',
          maxHeight: 'auto',
          borderBottom: '1px solid',
          borderColor: '$gray300',
          WebkitOverflowScrolling: 'touch',
          overflowX: 'hidden',

          bp2: {
            position: 'fixed',
            top: 0,
            left: 0,
            bottom: 0,
            width: '250px',
            borderRight: '1px solid',
            borderBottom: '0',
            borderColor: '$gray300',
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
                  ':focus': { boxShadow: 'none' },
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
            <Badge size="1" variant="yellow" css={{ ml: '$3' }}>
              Beta
            </Badge>
            <Box css={{ ml: 'auto', mr: '$6', bp2: { display: 'none' } }}>
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
              bp2: {
                display: 'block',
              },
            }}
          >
            {productType === 'primitives' && <PrimitivesNav />}
            {productType === 'design-system' && <DesignSystemNav />}

            <Box css={{ height: '$5', bp2: { height: '$8' } }} />
          </Box>
        </ScrollArea>
      </Box>

      <Box
        css={{
          maxWidth: '100%',
          flex: 1,
          pt: '$8',
          pb: '$9',
          bp2: {
            pl: '250px',
          },
        }}
      >
        <Container size="3" css={{ maxWidth: '780px' }}>
          {children}
        </Container>

        <Container size="3">
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
        </Container>
      </Box>
    </Flex>
  );
}
