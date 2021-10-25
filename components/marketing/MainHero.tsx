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
    // We'll sync loading states for the first few iframes that might be in viewport
    dialog: 'loading',
    dropdown: 'loading',
    popover: 'loading',
    slider: 'loading',
    'scroll-area': 'loading',
  });

  console.log(...Object.values(demoStates));

  const allDemosReady = Object.values(demoStates).every((state) => state === 'ready');

  // Listen to iframes that are ready and update the states accordingly
  React.useEffect(() => {
    console.log('setting up iframe message listener');
    const listener = (event: MessageEvent) => {
      if (event.data.key in demoStates) {
        console.log(`${event.data.key} ready`);
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
            Why waste
            <br />
            time reinventing
            <br />
            UI components<span style={{ fontSize: '90%' }}>?</span>
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
              gridAutoColumns: 'min-content',
              ox: 'auto',
              oy: 'hidden',
              py: '$1',
              WebkitoverflowScrolling: 'touch',

              // calculate the left padding to apply to the scrolling list
              // so that the carousel starts aligned with the container component
              // the "1145" and "$5" values comes from the <Container /> component
              '$$scroll-padding': 'max($space$5, calc((100% - 1145px) / 2 + $space$5))',
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
                    background: 'linear-gradient(120deg, $indigo6, $crimson5)',
                    [`.${darkTheme} &`]: {
                      background: 'linear-gradient(120deg, $indigo4, $plum3)',
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
                    background: 'linear-gradient(120deg,  $crimson5, $blue5)',
                    [`.${darkTheme} &`]: {
                      background: 'linear-gradient(120deg,  $plum3, $blue3)',
                    },
                  }}
                />
              </IFrameSkeleton>
              <Text as="h3" size="3" css={{ fontWeight: 500, lineHeight: '25px' }}>
                Dropdown Menu
              </Text>
              <Text as="p" size="3" variant="gray" css={{ lineHeight: '23px' }}>
                With submenus, checkable items, collision handling, arrow key navigation, and
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
                    background: 'linear-gradient(120deg, $blue5, $lime3)',
                    [`.${darkTheme} &`]: {
                      background: 'linear-gradient(120deg, $blue3, $sand6)',
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
                    background: 'linear-gradient(120deg, $lime3, $pink4)',
                    [`.${darkTheme} &`]: {
                      background: 'linear-gradient(120deg, $sand6, $pink3)',
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
              <IFrameSkeleton active={!allDemosReady}>
                <IFrame
                  data-demo-iframe
                  visible={allDemosReady}
                  tabIndex={-1}
                  src="/iframe/scroll-area"
                  css={{
                    background: 'linear-gradient(120deg, $pink4, $gold5)',
                    [`.${darkTheme} &`]: {
                      background: 'linear-gradient(120deg, $pink3, $gold4)',
                    },
                  }}
                />
              </IFrameSkeleton>
              <Text as="h3" size="3" css={{ fontWeight: 500, lineHeight: '25px' }}>
                Scroll Area
              </Text>
              <Text as="p" size="3" variant="gray" css={{ lineHeight: '23px' }}>
                Supports custom cross-browser styling while maintaining the browser's native scroll
                behavior.
              </Text>
            </CarouselSlide>

            <CarouselSlide>
              <IFrameSkeleton active={!allDemosReady}>
                <IFrame
                  data-demo-iframe
                  visible={allDemosReady}
                  tabIndex={-1}
                  src="/iframe/tabs"
                  css={{
                    background: 'linear-gradient(120deg, $gold5, $tomato5)',
                    [`.${darkTheme} &`]: {
                      background: 'linear-gradient(120deg, $gold4, $crimson4)',
                    },
                  }}
                />
              </IFrameSkeleton>
              <Text as="h3" size="3" css={{ fontWeight: 500, lineHeight: '25px' }}>
                Tabs
              </Text>
              <Text as="p" size="3" variant="gray" css={{ lineHeight: '23px' }}>
                Supports arrow key navigation, horizontal/vertical orientation, controlled or
                uncontrolled.
              </Text>
            </CarouselSlide>

            <CarouselSlide>
              <IFrameSkeleton active={!allDemosReady}>
                <IFrame
                  data-demo-iframe
                  visible={allDemosReady}
                  tabIndex={-1}
                  src="/iframe/accordion"
                  css={{
                    background: 'linear-gradient(120deg, $tomato5, $indigo7)',
                    [`.${darkTheme} &`]: {
                      background: 'linear-gradient(120deg, $crimson4, $indigo5)',
                    },
                  }}
                />
              </IFrameSkeleton>
              <Text as="h3" size="3" css={{ fontWeight: 500, lineHeight: '25px' }}>
                Accordion
              </Text>
              <Text as="p" size="3" variant="gray" css={{ lineHeight: '23px' }}>
                Supports one or multiple items open at the same time, keyboard navigation, collapse
                and expand animation.
              </Text>
            </CarouselSlide>

            <CarouselSlide>
              <IFrameSkeleton active={!allDemosReady}>
                <IFrame
                  data-demo-iframe
                  visible={allDemosReady}
                  tabIndex={-1}
                  src="/iframe/radio-group"
                  css={{
                    background: 'linear-gradient(120deg, $indigo7, $cyan4)',
                    [`.${darkTheme} &`]: {
                      background: 'linear-gradient(120deg, $indigo5, $cyan7)',
                    },
                  }}
                />
              </IFrameSkeleton>
              <Text as="h3" size="3" css={{ fontWeight: 500, lineHeight: '25px' }}>
                Radio Group
              </Text>
              <Text as="p" size="3" variant="gray" css={{ lineHeight: '23px' }}>
                With arrow key navigation, horizontal/vertical orientation support, controlled or
                uncontrolled.
              </Text>
            </CarouselSlide>

            <CarouselSlide>
              <IFrameSkeleton active={!allDemosReady}>
                <IFrame
                  data-demo-iframe
                  visible={allDemosReady}
                  tabIndex={-1}
                  src="/iframe/toggle-group"
                  css={{
                    background: 'linear-gradient(120deg, $cyan4, $mint5)',
                    [`.${darkTheme} &`]: {
                      background: 'linear-gradient(120deg, $cyan7, $mint6)',
                    },
                  }}
                />
              </IFrameSkeleton>
              <Text as="h3" size="3" css={{ fontWeight: 500, lineHeight: '25px' }}>
                Toggle Group
              </Text>
              <Text as="p" size="3" variant="gray" css={{ lineHeight: '23px' }}>
                A set of two-state buttons that can be toggled on or off. Supports single and
                multiple pressed buttons.
              </Text>
            </CarouselSlide>

            <CarouselSlide>
              <IFrameSkeleton active={!allDemosReady}>
                <IFrame
                  data-demo-iframe
                  visible={allDemosReady}
                  tabIndex={-1}
                  src="/iframe/switch"
                  css={{
                    background: 'linear-gradient(120deg, $mint5, $red3)',
                    [`.${darkTheme} &`]: {
                      background: 'linear-gradient(120deg, $mint6, $plum4)',
                    },
                  }}
                />
              </IFrameSkeleton>
              <Text as="h3" size="3" css={{ fontWeight: 500, lineHeight: '25px' }}>
                Switch
              </Text>
              <Text as="p" size="3" variant="gray" css={{ lineHeight: '23px' }}>
                Allows the user to toggle between checked and not checked.
              </Text>
            </CarouselSlide>
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
  willChange: 'transform, box-shadow, opacity',
  transition: 'all 100ms',

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
    transition: 'opacity 100ms',
  },
  '&:disabled': {
    opacity: 0,
  },
  '@media (hover: none) and (pointer: coarse)': {
    display: 'none',
  },
});
