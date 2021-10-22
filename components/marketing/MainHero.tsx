import React from 'react';
import NextLink from 'next/link';
import {
  Box,
  Grid,
  Text,
  styled,
  darkTheme,
  Container,
  Flex,
  Paragraph,
  Section,
  Button,
} from '@modulz/design-system';
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import { MarketingButton } from './MarketingButton';
import {
  Carousel,
  CarouselSlideList,
  CarouselSlide,
  CarouselNext,
  CarouselPrevious,
} from './Carousel';

const IFrameSkeleton = styled('div', {
  borderRadius: '$3',
  mb: '$2',

  variants: {
    active: {
      true: {
        bc: '$slateA4',
      },
    },
  },
});

const IFrame = styled('iframe', {
  display: 'block',
  border: 0,
  width: 300,
  height: 400,
  overflow: 'hidden',
  borderRadius: '$3',

  '@bp1': {
    width: 400,
  },

  variants: {
    visible: {
      true: {
        opacity: 1,
      },
      false: {
        opacity: 0,
      },
    },
  },
});

// TODO test safari
// TODO test focus visible
// TODO check with screen reader
// TODO review section spacing
export const MainHero = () => {
  // We synchronise the visibility of the first few iframes as they are loaded
  const [iFramesReady, setIFramesReady] = React.useState(false);
  const iFrameStates = React.useRef({
    dialog: 'loading',
    'dropdown-menu': 'loading',
    popover: 'loading',
    slider: 'loading',
  });

  React.useEffect(() => {
    const iFrameListener = (event: MessageEvent) => {
      if (event.data.name in iFrameStates.current) {
        iFrameStates.current[event.data.name] = 'ready';
        if (Object.values(iFrameStates.current).every((state) => state === 'ready')) {
          setIFramesReady(true);
        }
      }
    };
    addEventListener('message', iFrameListener);
    return () => removeEventListener('message', iFrameListener);
  }, []);

  return (
    <Section css={{ overflow: 'hidden' }}>
      <Container size="3">
        <Box css={{ mb: '$6' }}>
          <Text
            as="h1"
            size={{ '@initial': 8, '@bp1': 9 }}
            css={{
              color: 'transparent',
              WebkitBackgroundClip: 'text',
              backgroundImage: 'radial-gradient(circle, $hiContrast, $colors$indigo12)',
              pb: '0.1em', // Otherwise some descenders may be clipped with WebkitBackgroundClip: 'text'
              mb: '$3',

              fontWeight: 500,
              fontSize: 'min(max($8, 11.5vw), $9)',
              letterSpacing: 'max(min(-0.055em, -0.66vw), -0.07em)',

              '@bp2': {
                fontSize: '80px',
                lineHeight: '0.85',
                mb: '$5',
              },
            }}
          >
            Don’t waste
            <br />
            time reinventing
            <br />
            UI components.
          </Text>
          <Box css={{ maxWidth: 500, mb: '$4' }}>
            <Paragraph size="2" as="p">
              Unstyled, acessible components for building high‑quality design systems and web apps
              in React.
            </Paragraph>
          </Box>
          <Flex justify={{ '@initial': 'start' }} gap="5">
            <NextLink href="/docs/primitives/overview/getting-started" passHref>
              <MarketingButton as="a" icon={ArrowRightIcon}>
                Install Primitives
              </MarketingButton>
            </NextLink>
          </Flex>
        </Box>
      </Container>
      <Box css={{ position: 'relative' }}>
        <Carousel>
          <CarouselSlideList
            css={{
              display: 'grid',
              gridAutoFlow: 'column',
              gap: '$5',

              ox: 'auto',
              oy: 'hidden',
              py: '$1',
              WebkitoverflowScrolling: 'touch',

              // calculate the left and right padding to apply to the scrolling list
              // so that the carousel starts aligned with the container component
              // the "1145" and "$5" values comes from the <Container /> component
              '$$scroll-padding': 'max($space$5, calc((100vw - 1145px) / 2 + $space$5))',
              scrollPadding: '0 $$scroll-padding 0 $$scroll-padding',
              px: '$$scroll-padding',

              // hide scrollbar
              MsOverflowStyle: 'none',
              scrollbarWidth: 'none',

              '&::-webkit-scrollbar': {
                display: 'none',
              },
            }}
          >
            <CarouselSlide>
              <IFrameSkeleton active={!iFramesReady}>
                <IFrame
                  data-demo-iframe
                  visible={iFramesReady}
                  tabIndex={-1}
                  src="/iframe/dialog"
                  css={{
                    background: 'linear-gradient(to bottom right, $indigo4, $violet5)',
                    [`.${darkTheme} &`]: {
                      background: 'linear-gradient(to bottom right, $indigo2, $plum3)',
                    },
                  }}
                />
              </IFrameSkeleton>
              <Text as="h3" size="3" css={{ fontWeight: 500, lineHeight: '25px' }}>
                Dialog
              </Text>
              <Text as="p" size="3" variant="gray" css={{ lineHeight: '23px' }}>
                With modal and non-modal modes, fine-grained focus&nbsp;control, accessible to
                screen readers.
              </Text>
            </CarouselSlide>

            <CarouselSlide>
              <IFrameSkeleton active={!iFramesReady}>
                <IFrame
                  data-demo-iframe
                  visible={iFramesReady}
                  tabIndex={-1}
                  src="/iframe/dropdown-menu"
                  css={{
                    background: 'linear-gradient(to bottom right,  $crimson4, $blue5)',
                    [`.${darkTheme} &`]: {
                      background: 'linear-gradient(to bottom right,  $crimson3, $blue3)',
                    },
                  }}
                />
              </IFrameSkeleton>
              <Text as="h3" size="3" css={{ fontWeight: 500, lineHeight: '25px' }}>
                Dropdown Menu
              </Text>
              <Text as="p" size="3" variant="gray" css={{ lineHeight: '23px' }}>
                With submenus, checkable items, collision handling, full keyboard navigation, and
                typeahead support.
              </Text>
            </CarouselSlide>

            <CarouselSlide>
              <IFrameSkeleton active={!iFramesReady}>
                <IFrame
                  data-demo-iframe
                  visible={iFramesReady}
                  tabIndex={-1}
                  src="/iframe/popover"
                  css={{
                    background: 'linear-gradient(to bottom right, $lime3, $cyan5)',
                    [`.${darkTheme} &`]: {
                      background: 'linear-gradient(to bottom right, $mint3, $sand2)',
                    },
                  }}
                />
              </IFrameSkeleton>
              <Text as="h3" size="3" css={{ fontWeight: 500, lineHeight: '25px' }}>
                Popover
              </Text>
              <Text as="p" size="3" variant="gray" css={{ lineHeight: '23px' }}>
                With fine-grained focus control, collision handling, origin-aware and
                collision-aware animations.
              </Text>
            </CarouselSlide>

            <CarouselSlide>
              <IFrameSkeleton active={!iFramesReady}>
                <IFrame
                  data-demo-iframe
                  visible={iFramesReady}
                  tabIndex={-1}
                  src="/iframe/slider"
                  css={{
                    background: 'linear-gradient(120deg, $gray3, $sky4)',
                    [`.${darkTheme} &`]: {
                      background: 'linear-gradient(120deg, $mauve4, $sky4)',
                    },
                  }}
                />
              </IFrameSkeleton>
              <Text as="h3" size="3" css={{ fontWeight: 500, lineHeight: '25px' }}>
                Slider
              </Text>
              <Text as="p" size="3" variant="gray" css={{ lineHeight: '23px' }}>
                Supports keyboard and touch input, step interval, multiple thumbs for value ranges,
                and RTL direction.
              </Text>
            </CarouselSlide>

            <CarouselSlide>
              <IFrameSkeleton active={!iFramesReady}>
                <IFrame
                  data-demo-iframe
                  visible={iFramesReady}
                  tabIndex={-1}
                  src="/iframe/dialog"
                  css={{
                    background: 'linear-gradient(to bottom right, $indigo4, $violet5)',
                    [`.${darkTheme} &`]: {
                      background: 'linear-gradient(to bottom right, $indigo4, $violet5)',
                    },
                  }}
                />
              </IFrameSkeleton>
              <Text as="h3" size="3" css={{ fontWeight: 500, lineHeight: '25px' }}>
                Tooltip
              </Text>
              <Text as="p" size="3" variant="gray" css={{ lineHeight: '23px' }}>
                Opens when the trigger is focused or hovered, supports custom timings and
                positioning, handles collisions.
              </Text>
            </CarouselSlide>
          </CarouselSlideList>

          <Box
            css={{
              position: 'absolute',
              top: '50%',
              left: '15px',
              transform: 'translateY(-50%)',
            }}
          >
            <CarouselPrevious
              as={Button}
              css={{
                width: '$7',
                height: '$7',
                borderRadius: '$round',
                backgroundColor: '$loContrast',
                boxShadow:
                  '$colors$shadowLight 0px 5px 25px -5px, $colors$shadowDark 0px 5px 15px -10px',
                willChange: 'transform',
                transition: 'all 100ms ease',
                '&:hover': {
                  boxShadow:
                    '$colors$shadowLight 0px 10px 35px -5px, $colors$shadowDark 0px 10px 20px -5px',
                  transform: 'translateY(-2px)',
                },
                '&:focus': {
                  boxShadow:
                    '0 0 0 1px $colors$slate700, inset 0 0 0 1px $colors$slate700, $colors$shadowLight 0px 5px 25px -5px, $colors$shadowDark 0px 5px 15px -10px',
                },
                '&:active': {
                  transform: 'none',
                  transition: 'none',
                },
                '&:disabled': {
                  opacity: 0,
                },
                '@media (hover: none) and (pointer: coarse)': {
                  display: 'none',
                },
              }}
            >
              <ArrowLeftIcon />
            </CarouselPrevious>
          </Box>
          <Box
            css={{
              position: 'absolute',
              top: '50%',
              right: '15px',
              transform: 'translateY(-50%)',
            }}
          >
            <CarouselNext
              as={Button}
              css={{
                width: '$7',
                height: '$7',
                borderRadius: '$round',
                backgroundColor: '$loContrast',
                boxShadow:
                  '$colors$shadowLight 0px 5px 25px -5px, $colors$shadowDark 0px 5px 15px -10px',
                willChange: 'transform',
                transition: 'all 100ms ease',
                '&:hover': {
                  boxShadow:
                    '$colors$shadowLight 0px 10px 35px -5px, $colors$shadowDark 0px 10px 20px -5px',
                  transform: 'translateY(-2px)',
                },
                '&:focus': {
                  boxShadow:
                    '0 0 0 1px $colors$slate700, inset 0 0 0 1px $colors$slate700, $colors$shadowLight 0px 5px 25px -5px, $colors$shadowDark 0px 5px 15px -10px',
                },
                '&:active': {
                  transform: 'none',
                  transition: 'none',
                },
                '&:disabled': {
                  opacity: 0,
                },
                '@media (hover: none) and (pointer: coarse)': {
                  display: 'none',
                },
              }}
            >
              <ArrowRightIcon />
            </CarouselNext>
          </Box>
        </Carousel>
      </Box>
    </Section>
  );
};
