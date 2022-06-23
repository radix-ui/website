import React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import {
  Box,
  Container,
  Text,
  Badge,
  Flex,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Separator,
  Link,
  Heading,
  styled,
} from '@modulz/design-system';
import { RadixLogo } from '@components/RadixLogo';
import { PlusIcon, MixIcon, StitchesLogoIcon } from '@radix-ui/react-icons';
import { ThemeToggle } from '@components/ThemeToggle';
import { BoxLink } from '@components/BoxLink';
import { RadixLogoIcon } from './RadixLogoIcon';
import { RemoveScroll } from 'react-remove-scroll';
import { Search } from '@components/Search';

export const Header = () => {
  const router = useRouter();
  const isColors = router.pathname.includes('/colors') || router.pathname.includes('/docs/colors');

  return (
    <Box as="header" className={RemoveScroll.classNames.fullWidth}>
      <Container size="4">
        <Flex align="center" justify="between" css={{ height: '$8' }}>
          <NextLink href={isColors ? '/colors' : '/'} passHref>
            <BoxLink>
              <RadixLogo label={isColors ? 'Radix Colors homepage' : 'Radix homepage'} />
            </BoxLink>
          </NextLink>

          <Flex
            align="center"
            gap={{ '@initial': 4, '@bp2': 5 }}
            // Baseline align with the logo
            css={{ mb: -2 }}
          >
            <Box css={{ display: 'none', '@bp1': { display: 'contents' } }}>
              {isColors && (
                <NextLink href="/docs/colors" passHref>
                  <Link variant={router.pathname.includes('/docs/colors') ? 'contrast' : 'subtle'}>
                    <Text>Documentation</Text>
                  </Link>
                </NextLink>
              )}
              {isColors === false && (
                <>
                  <NextLink href="/docs/primitives" passHref>
                    <Link
                      variant={router.pathname.includes('/docs/primitives') ? 'contrast' : 'subtle'}
                    >
                      <Text>Documentation</Text>
                    </Link>
                  </NextLink>
                  <NextLink href="/case-studies" passHref>
                    <Link
                      variant={router.pathname.includes('/case-studies') ? 'contrast' : 'subtle'}
                    >
                      <Text>Case studies</Text>
                    </Link>
                  </NextLink>
                </>
              )}
            </Box>

            <Popover>
              <PopoverTrigger asChild>
                <Link
                  variant="subtle"
                  as="button"
                  css={{
                    bc: 'transparent',
                    cursor: 'pointer',
                    appearance: 'none',
                    fontFamily: '$untitled',
                    border: 0,
                    p: 0,
                    m: 0,
                    mr: '-$1',
                  }}
                >
                  <Text css={{ display: 'flex', gap: '$1', ai: 'center' }}>
                    Resources
                    <PlusIcon />
                  </Text>
                </Link>
              </PopoverTrigger>
              <PopoverContent hideArrow sideOffset={15} align="end" alignOffset={-15}>
                <Box css={{ p: '$1' }}>
                  {isColors && (
                    <NextLink href="/" passHref>
                      <HighlightLink>
                        <Flex gap="3">
                          <RadixLogoIcon
                            width="25"
                            height="25"
                            style={{ flex: 'none', marginTop: 2 }}
                          />
                          <Box>
                            <Text
                              size="3"
                              as="h3"
                              css={{ fontWeight: 500, lineHeight: 1.5, letterSpacing: '-0.02em' }}
                            >
                              Primitives
                            </Text>
                            <Text size="2" as="p" variant="gray" css={{ lineHeight: 1.4 }}>
                              Acessible components for design systems and web apps.
                            </Text>
                          </Box>
                        </Flex>
                      </HighlightLink>
                    </NextLink>
                  )}

                  <HighlightLink href="https://stitches.dev">
                    <Flex gap="3">
                      <StitchesLogoIcon
                        width="25"
                        height="25"
                        style={{ flex: 'none', marginTop: 2 }}
                      />
                      <Box>
                        <Text
                          size="3"
                          as="h3"
                          css={{ fontWeight: 500, lineHeight: 1.5, letterSpacing: '-0.02em' }}
                        >
                          Stitches
                        </Text>
                        <Text size="2" as="p" variant="gray" css={{ lineHeight: 1.4 }}>
                          CSS-in-JS with best-in-class developer experience.
                        </Text>
                      </Box>
                    </Flex>
                  </HighlightLink>

                  {isColors === false && (
                    <NextLink href="/colors" passHref>
                      <HighlightLink>
                        <Flex gap="3">
                          <svg
                            width="25"
                            height="25"
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ flex: 'none', marginTop: 2 }}
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M1.75391 14.9998C1.75391 7.68444 7.6842 1.75415 14.9996 1.75415C22.3149 1.75415 28.2452 7.68444 28.2452 14.9998C28.2452 22.3151 22.3149 28.2455 14.9996 28.2455C7.6842 28.2455 1.75391 22.3151 1.75391 14.9998ZM7.56191 6.4319C9.3655 4.86489 11.6687 3.85795 14.2008 3.68183V13.0708L7.56191 6.4319ZM6.43062 7.56335C4.8644 9.36653 3.85792 11.6689 3.68166 14.2H13.0673L6.43062 7.56335ZM13.0673 15.8H3.68169C3.85806 18.3311 4.8646 20.6334 6.43085 22.4365L13.0673 15.8ZM7.56217 23.5679C9.36572 25.1348 11.6688 26.1417 14.2008 26.3178V16.9293L7.56217 23.5679ZM15.8008 16.9335V26.3176C18.3313 26.1411 20.6332 25.1347 22.436 23.5687L15.8008 16.9335ZM23.5675 22.4375C25.1342 20.6342 26.1411 18.3315 26.3174 15.8H16.9301L23.5675 22.4375ZM16.9301 14.2H26.3175C26.1412 11.6685 25.1344 9.36574 23.5677 7.56242L16.9301 14.2ZM22.4363 6.43109C20.6334 4.86504 18.3314 3.85856 15.8008 3.682V13.0666L22.4363 6.43109Z"
                              fill="currentcolor"
                            />
                          </svg>
                          <Box>
                            <Text
                              size="3"
                              as="h3"
                              css={{ fontWeight: 500, lineHeight: 1.5, letterSpacing: '-0.02em' }}
                            >
                              Colors
                            </Text>
                            <Text size="2" as="p" variant="gray" css={{ lineHeight: 1.4 }}>
                              Beautiful, thought-out palettes with auto dark mode.
                            </Text>
                          </Box>
                        </Flex>
                      </HighlightLink>
                    </NextLink>
                  )}

                  <HighlightLink href="https://icons.radix-ui.com">
                    <Flex gap="3">
                      <MixIcon width="25" height="25" style={{ flex: 'none', marginTop: 2 }} />
                      <Box>
                        <Text
                          size="3"
                          as="h3"
                          css={{ fontWeight: 500, lineHeight: 1.5, letterSpacing: '-0.02em' }}
                        >
                          Icons
                        </Text>
                        <Text size="2" as="p" variant="gray" css={{ lineHeight: 1.4 }}>
                          A crisp set of 15×15 icons, balanced and consistent.
                        </Text>
                      </Box>
                    </Flex>
                  </HighlightLink>
                </Box>
              </PopoverContent>
            </Popover>

            <Search />

            <ThemeToggle />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

const HighlightLink = styled('a', {
  display: 'block',
  color: '$hiContrast',
  textDecoration: 'none',
  outline: 0,
  p: '$2',
  br: '$2',
  '@hover': {
    '&:hover': {
      bc: '$slateA3',
    },
  },
  '&:focus': {
    boxShadow: '0 0 0 2px $colors$slateA8',
  },
  '&:focus:not(:focus-visible)': {
    boxShadow: 'none',
  },
});
