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

type DemoStates = Record<string, 'loading' | 'ready'>;

export const MainHero = () => {
  const [demoStates, setDemoStates] = React.useState<DemoStates>({
    dialog: 'loading',
    dropdown: 'loading',
    popover: 'loading',
    slider: 'loading',
    // tooltip: 'loading',
  });

  const allDemosReady = Object.values(demoStates).every((state) => state === 'ready');

  // Listen to iframes that are ready and update the states accordingly
  React.useEffect(() => {
    const listener = (event: MessageEvent) => {
      if (event.data.key) {
        setDemoStates((currentState) => ({
          ...currentState,
          [event.data.key]: 'ready',
        }));
      }
    };
    addEventListener('message', listener);
    return () => removeEventListener('message', listener);
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
              // Otherwise some descenders may be clipped with WebkitBackgroundClip: 'text'
              pb: '0.1em',
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
            UI components.
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
              ox: 'auto',
              oy: 'hidden',
              py: '$1',
              WebkitoverflowScrolling: 'touch',

              // calculate the left padding to apply to the scrolling list
              // so that the carousel starts aligned with the container component
              // the "1145" and "$5" values comes from the <Container /> component
              '$$scroll-padding': 'max($space$5, calc((100% - 1145px) / 2 + $space$5))',
              scrollPaddingLeft: '$$scroll-padding',
              pl: '$$scroll-padding',

              // hide scrollbar
              MsOverflowStyle: 'none',
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': {
                display: 'none',
              },

              // Can't have nice grid gap because Safari butchers scroll padding with it
              '& > *': {
                pr: '$5',
              },
            }}
          >
            <CarouselSlide>
              <IFrameSkeleton active={!allDemosReady}>
                <IFrame
                  visible={allDemosReady}
                  tabIndex={-1}
                  data-demo-iframe
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
              <IFrameSkeleton active={!allDemosReady}>
                <IFrame
                  visible={allDemosReady}
                  tabIndex={-1}
                  data-demo-iframe
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
                With submenus, checkable items, collision handling, full keyboard navigation, and
                typeahead support.
              </Text>
            </CarouselSlide>
            <CarouselSlide>
              <IFrameSkeleton active={!allDemosReady}>
                <IFrame
                  visible={allDemosReady}
                  tabIndex={-1}
                  data-demo-iframe
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
              <IFrameSkeleton active={!allDemosReady}>
                <IFrame
                  visible={allDemosReady}
                  tabIndex={-1}
                  data-demo-iframe
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
            {/* <CarouselSlide>
              <IFrameSkeleton active={!allDemosReady}>
                <IFrame
                  data-demo-iframe
                  visible={allDemosReady}
                  tabIndex={-1}
                  // src="/iframe/tooltip"
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
            </CarouselSlide> */}
          </CarouselSlideList>

          <Box
            css={{
              position: 'absolute',
              top: 'calc(50% - $7)',
              left: '15px',
            }}
          >
            <CarouselPrevious as={CarouselArrowButton}>
              <ArrowLeftIcon />
            </CarouselPrevious>
          </Box>
          <Box
            css={{
              position: 'absolute',
              top: 'calc(50% - $7)',
              right: '15px',
            }}
          >
            <CarouselNext as={CarouselArrowButton}>
              <ArrowRightIcon />
            </CarouselNext>
          </Box>
        </Carousel>
      </Box>
    </Section>
  );
};

const CarouselArrowButton = styled('button', {
  unset: 'all',
  outline: 0,
  margin: 0,
  border: 0,
  padding: 0,

  display: 'flex',
  position: 'relative',
  ai: 'center',
  jc: 'center',
  bc: '$panel',
  br: '$round',
  width: '$7',
  height: '$7',
  color: '$hiContrast',

  boxShadow: '$colors$blackA11 0px 2px 12px -5px, $colors$blackA5 0px 1px 3px',
  willChange: 'transform, box-shadow',
  transition: 'all 100ms ease',

  '@hover': {
    '&:hover': {
      boxShadow: '$colors$blackA10 0px 3px 16px -5px, $colors$blackA5 0px 1px 3px',
      transform: 'translateY(-1px)',

      // Fix a bug when hovering at button edges would cause the button to jitter because of transform
      '&::before': {
        content: '',
        inset: -2,
        br: '$round',
        position: 'absolute',
      },
    },
  },
  '&:focus': {
    boxShadow: `
      $colors$blackA10 0px 3px 16px -5px,
      $colors$blackA5 0px 1px 3px,
      $colors$blue8 0 0 0 2px
    `,
    transform: 'translateY(-1px)',
  },
  '&:focus:not(:focus-visible)': {
    boxShadow: '$colors$blackA11 0px 2px 12px -5px, $colors$blackA5 0px 1px 3px',
  },
  '&:active:not(:focus)': {
    boxShadow: '$colors$blackA11 0px 2px 12px -5px, $colors$blackA5 0px 1px 3px',
  },
  '&:active': {
    transform: 'none',
    transitionProperty: 'opacity',
  },
  '&:disabled': {
    opacity: 0,
  },
  '@media (hover: none) and (pointer: coarse)': {
    display: 'none',
  },
});
