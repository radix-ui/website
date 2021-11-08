import React from 'react';
import NextLink from 'next/link';
import {
  Box,
  Text,
  styled,
  darkTheme,
  Container,
  Flex,
  Paragraph,
  Section,
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
import { MainHeroPopover } from './MainHeroPopover';
import { MainHeroDropdownMenu } from './MainHeroDropdownMenu';
import { MainHeroSlider } from './MainHeroSlider';
import { MainHeroTabs } from './MainHeroTabs';
import { MainHeroScrollArea } from './MainHeroScrollArea';
import { MainHeroAccordion } from './MainHeroAccordion';
import { MainHeroRadioGroup } from './MainHeroRadioGroup';
import { MainHeroToggleGroup } from './MainHeroToggleGroup';
import { MainHeroSwitch } from './MainHeroSwitch';
import { useComposedRefs } from '@radix-ui/react-compose-refs';

const DemoContainer = styled('div', {
  display: 'flex',
  position: 'relative',
  ai: 'center',
  jc: 'center',
  width: 300,
  height: 400,
  borderRadius: '$3',
  mb: '$2',

  // Content slightly above vertical center feels perfectly centred
  pb: '$3',

  '@bp1': {
    width: 400,
  },
});

const StyledFocusArea = styled('div', {
  outline: 0,
  borderRadius: '$3',
  '&:focus': {
    boxShadow: '0 0 0 2px $colors$blue8',
  },
  '&:focus:not(:focus-visible)': {
    boxShadow: 'none',
  },
});

const FocusArea = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof StyledFocusArea>>(
  ({ children, onKeyDown, ...props }, forwardedRef) => {
    const ownRef = React.useRef<HTMLDivElement>(null);
    const composedRef = useComposedRefs(ownRef, forwardedRef);

    return (
      <StyledFocusArea
        {...props}
        data-focus-area
        ref={composedRef}
        tabIndex={0}
        onKeyDown={(event) => {
          onKeyDown?.(event);

          // Move focus inside the FocusArea when Enter or Spacebar is pressed
          if (
            event.target === event.currentTarget &&
            (event.key === 'Enter' || event.key === ' ')
          ) {
            // We are looking for something obviously focusable
            const tier1 =
              '[role="menu"], [role="dialog"] input, [role="dialog"] button, [tabindex="0"]';
            const tier2 = 'a, button, input, select, textarea';

            // Search for tier 1 and tier 2 elements, prioritising
            const elementToFocus = [
              event.currentTarget.querySelector<HTMLElement>(tier1),
              event.currentTarget.querySelector<HTMLElement>(tier2),
            ].filter((el) => Boolean(el))[0];

            if (elementToFocus) {
              event.preventDefault();
              elementToFocus.focus();
            }
          }

          // Move focus onto the FocusArea when Escape is pressed, unless the focus is currently inside a modal
          if (
            event.key === 'Escape' &&
            event.target instanceof HTMLElement &&
            event.target !== event.currentTarget &&
            event.target.closest('[role="dialog"], [role="menu"]') === null
          ) {
            event.currentTarget.focus();
          }
        }}
      >
        <div data-focus-area-entry />
        {children}
        <div data-focus-area-exit />
      </StyledFocusArea>
    );
  }
);

export const MainHero = () => {
  const lastUsedFocusArea = React.useRef<HTMLElement>(null);
  const isRoving = React.useRef(false);

  React.useEffect(() => {
    lastUsedFocusArea.current = document.querySelector('[data-focus-area]');
  }, []);

  const onFocusAreaFocus = React.useCallback((event: React.FocusEvent<HTMLElement>) => {
    lastUsedFocusArea.current = event.currentTarget;
  }, []);

  // We are implementing a simple roving tab index with some tweaks
  const onFocusAreaKeyDown = React.useCallback((event: React.KeyboardEvent<HTMLElement>) => {
    if (event.target === event.currentTarget) {
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        const allAreas = Array.from(document.querySelectorAll<HTMLElement>('[data-focus-area]'));
        const thisIndex = allAreas.findIndex((el) => el === event.currentTarget);
        const nextIndex = Math.min(thisIndex + 1, allAreas.length - 1);
        const nextDemo = allAreas[nextIndex];
        isRoving.current = true;
        nextDemo.focus();
        lastUsedFocusArea.current = nextDemo;
        isRoving.current = false;
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        const allAreas = Array.from(document.querySelectorAll<HTMLElement>('[data-focus-area]'));
        const thisIndex = allAreas.findIndex((el) => el === event.currentTarget);
        const prevIndex = Math.max(thisIndex - 1, 0); // thisIndex - 1 >= 0 ? thisIndex - 1 : allAreas.length - 1;
        const prevDemo = allAreas[prevIndex];
        isRoving.current = true;
        prevDemo.focus();
        lastUsedFocusArea.current = prevDemo;
        isRoving.current = false;
      }

      // Tab key press moves focus to the next element after the carousel
      if (event.key === 'Tab' && event.shiftKey === false) {
        const selector = 'a, button, input, select, textarea, [data-focus-area-exit]';
        const elements = Array.from(document.querySelectorAll<HTMLElement>(selector)).filter(
          (element) => element.tabIndex !== -1 || element.hasAttribute('data-focus-area-exit')
        );

        // Find last exit guard
        elements.reverse();
        const lastExit = elements.find((el) => el.matches('[data-focus-area-exit]'));
        elements.reverse();
        const lastExitIndex = elements.indexOf(lastExit);
        const nextElement = elements[lastExitIndex + 1];

        if (nextElement) {
          event.preventDefault();
          nextElement.focus();
        }
      }

      // Shift + Tab key press moves focus to the previous element before the carousel
      if (event.key === 'Tab' && event.shiftKey) {
        const selector = 'a, button, input, select, textarea, [data-focus-area-entry]';
        const elements = Array.from(document.querySelectorAll<HTMLElement>(selector)).filter(
          (element) => element.tabIndex !== -1 || element.hasAttribute('data-focus-area-entry')
        );

        // Find first entry guard
        const firstEntry = elements.find((el) => el.matches('[data-focus-area-entry]'));
        const firstEntryIndex = elements.indexOf(firstEntry);
        const prevElement = elements[firstEntryIndex - 1];

        if (prevElement) {
          event.preventDefault();
          prevElement.focus();
        }
      }
    }
  }, []);

  React.useEffect(() => {
    const tabListener = (event: KeyboardEvent) => {
      // Catch that Tab that lands into carousel contents from
      // elsewhere, and redirect focus to the nearest focus area
      if (
        event.key === 'Tab' &&
        event.shiftKey === false &&
        event.target instanceof HTMLElement &&
        !event.target.hasAttribute('data-focus-area')
      ) {
        const selector = 'a, button, input, select, textarea, [data-focus-area-entry]';
        const elements = Array.from(document.querySelectorAll<HTMLElement>(selector)).filter(
          (element) =>
            element.tabIndex !== -1 ||
            element === event.target ||
            element.hasAttribute('data-focus-area-entry')
        );

        // Find first entry guard
        const firstEntryIndex = elements.findIndex((el) =>
          el.hasAttribute('data-focus-area-entry')
        );

        if (elements.indexOf(event.target) + 1 === firstEntryIndex) {
          event.preventDefault();
          lastUsedFocusArea.current?.focus();
        }
      }

      // Catch that Shift + Tab that lands into carousel contents from
      // elsewhere, and redirect focus to the nearest focus area
      if (
        event.key === 'Tab' &&
        event.shiftKey &&
        event.target instanceof HTMLElement &&
        !event.target.hasAttribute('data-focus-area')
      ) {
        const selector = 'a, button, input, select, textarea, [data-focus-area-exit]';
        const elements = Array.from(document.querySelectorAll<HTMLElement>(selector)).filter(
          (element) =>
            element.tabIndex !== -1 ||
            element === event.target ||
            element.hasAttribute('data-focus-area-exit')
        );

        // Find last exit guard
        elements.reverse();
        const lastExit = elements.find((el) => el.hasAttribute('data-focus-area-exit'));
        elements.reverse();
        const lastExitIndex = elements.indexOf(lastExit);

        if (elements.indexOf(event.target) - 1 === lastExitIndex) {
          event.preventDefault();
          lastUsedFocusArea.current?.focus();
        }
      }
    };

    document.addEventListener('keydown', tabListener);
    return () => document.removeEventListener('keydown', tabListener);
  }, []);

  return (
    <Section
      css={{
        paddingTop: '$4',
        // Starting at 850px viewport height, grow the padding top from $5 until it's $9.
        '@media (min-width: 900px) and (min-height: 850px)': {
          paddingTop: 'min($9, calc($5 + 0.35 * (100vh - 850px)))',
        },
      }}
    >
      <Container size="3">
        <Box css={{ mb: '$6' }}>
          <Text
            as="h1"
            size={{ '@initial': 8, '@bp1': 9 }}
            css={{
              color: 'transparent',
              WebkitBackgroundClip: 'text',
              backgroundImage: 'radial-gradient(circle, $hiContrast, $colors$indigo12)',
              // Use padding rather than margin, or otherwise some descenders
              // may be clipped with WebkitBackgroundClip: 'text'
              pb: '$4',
              // Same issue, letters may be clipped horizontally
              px: '$2',
              mx: '-$2',
              fontWeight: 500,
              fontSize: 'min(max($8, 11.2vw), $9)',
              letterSpacing: 'max(min(-0.055em, -0.66vw), -0.07em)',
              '@media (min-width: 900px) and (min-height: 850px)': {
                fontSize: '80px',
                lineHeight: '0.85',
              },
            }}
          >
            Why waste
            <br />
            time reinventing
            <br />
            UI components<span style={{ fontSize: '90%' }}>?</span>
          </Text>
          <Box css={{ maxWidth: 500, mb: '$5' }}>
            <Paragraph size="2" as="p">
              Unstyled, accessible components for building high‑quality design systems and web apps
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
              WebkitOverflowScrolling: 'touch',

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
            {/*
            <CarouselSlide>
              <FocusArea
                aria-label="Dialog component demo"
                onKeyDown={onFocusAreaKeyDown}
                onFocus={onFocusAreaFocus}
              >
                <DemoContainer
                  aria-hidden
                  css={{
                    background: 'linear-gradient(120deg, $indigo6, $crimson5)',
                    [`.${darkTheme} &`]: {
                      background: 'linear-gradient(120deg, $indigo4, $plum3)',
                    },
                  }}
                >
                  <MainHeroDialogDemo />
                </DemoContainer>
                </FocusArea>
                <Text as="h3" size="3" css={{ fontWeight: 500, lineHeight: '25px' }}>
                  Dialog
                </Text>
                <Text as="p" size="3" variant="gray" css={{ lineHeight: '23px' }}>
                  With modal and non-modal modes, fine-grained focus&nbsp;control, accessible to
                  screen readers.
                </Text>

            </CarouselSlide>
            */}

            <CarouselSlide>
              <FocusArea
                aria-label="Dropdown menu component demo"
                onKeyDown={onFocusAreaKeyDown}
                onFocus={onFocusAreaFocus}
              >
                <DemoContainer
                  aria-hidden
                  css={{
                    background: 'linear-gradient(120deg, $indigo6, $crimson5)',
                    [`.${darkTheme} &`]: {
                      background: 'linear-gradient(120deg, $indigo4, $plum3)',
                    },
                  }}
                >
                  <MainHeroDropdownMenu />
                </DemoContainer>
              </FocusArea>
              <Text as="h3" size="3" css={{ fontWeight: 500, lineHeight: '25px' }}>
                Dropdown Menu
              </Text>
              <Text as="p" size="3" variant="gray" css={{ lineHeight: '23px' }}>
                With submenus, checkable items, collision handling, arrow key navigation, and
                typeahead support.
              </Text>
            </CarouselSlide>

            <CarouselSlide>
              <FocusArea
                aria-label="Popover component demo"
                onKeyDown={onFocusAreaKeyDown}
                onFocus={onFocusAreaFocus}
              >
                <DemoContainer
                  aria-hidden
                  css={{
                    background: 'linear-gradient(120deg,  $crimson5, $blue5)',
                    [`.${darkTheme} &`]: {
                      background: 'linear-gradient(120deg,  $plum3, $blue3)',
                    },
                  }}
                >
                  <MainHeroPopover />
                </DemoContainer>
              </FocusArea>
              <Text as="h3" size="3" css={{ fontWeight: 500, lineHeight: '25px' }}>
                Popover
              </Text>
              <Text as="p" size="3" variant="gray" css={{ lineHeight: '23px' }}>
                With fine-grained focus control, collision handling, origin-aware and
                collision-aware animations.
              </Text>
            </CarouselSlide>

            <CarouselSlide>
              <FocusArea
                aria-label="Slider component demo"
                onKeyDown={onFocusAreaKeyDown}
                onFocus={onFocusAreaFocus}
              >
                <DemoContainer
                  aria-hidden
                  css={{
                    background: 'linear-gradient(120deg, $blue5, $lime3)',
                    [`.${darkTheme} &`]: {
                      background: 'linear-gradient(120deg, $blue3, $sand6)',
                    },
                  }}
                >
                  <MainHeroSlider />
                </DemoContainer>
              </FocusArea>
              <Text as="h3" size="3" css={{ fontWeight: 500, lineHeight: '25px' }}>
                Slider
              </Text>
              <Text as="p" size="3" variant="gray" css={{ lineHeight: '23px' }}>
                Supports keyboard and touch input, step interval, multiple thumbs for value ranges,
                and RTL direction.
              </Text>
            </CarouselSlide>

            <CarouselSlide>
              <FocusArea
                aria-label="Scroll area component demo"
                onKeyDown={onFocusAreaKeyDown}
                onFocus={onFocusAreaFocus}
              >
                <DemoContainer
                  aria-hidden
                  css={{
                    background: 'linear-gradient(120deg, $lime3, $pink4)',
                    [`.${darkTheme} &`]: {
                      background: 'linear-gradient(120deg, $sand6, $pink3)',
                    },
                  }}
                >
                  <MainHeroScrollArea />
                </DemoContainer>
              </FocusArea>
              <Text as="h3" size="3" css={{ fontWeight: 500, lineHeight: '25px' }}>
                Scroll Area
              </Text>
              <Text as="p" size="3" variant="gray" css={{ lineHeight: '23px' }}>
                Supports custom cross-browser styling while maintaining the browser's native scroll
                behavior.
              </Text>
            </CarouselSlide>

            <CarouselSlide>
              <FocusArea
                aria-label="Tabs component demo"
                onKeyDown={onFocusAreaKeyDown}
                onFocus={onFocusAreaFocus}
              >
                <DemoContainer
                  aria-hidden
                  css={{
                    background: 'linear-gradient(120deg, $pink4, $gold5)',
                    [`.${darkTheme} &`]: {
                      background: 'linear-gradient(120deg, $pink3, $gold4)',
                    },
                  }}
                >
                  <MainHeroTabs />
                </DemoContainer>
              </FocusArea>
              <Text as="h3" size="3" css={{ fontWeight: 500, lineHeight: '25px' }}>
                Tabs
              </Text>
              <Text as="p" size="3" variant="gray" css={{ lineHeight: '23px' }}>
                Supports arrow key navigation, horizontal/vertical orientation, controlled or
                uncontrolled.
              </Text>
            </CarouselSlide>

            <CarouselSlide>
              <FocusArea
                aria-label="Accordion component demo"
                onKeyDown={onFocusAreaKeyDown}
                onFocus={onFocusAreaFocus}
              >
                <DemoContainer
                  aria-hidden
                  css={{
                    background: 'linear-gradient(120deg, $gold5, $tomato5)',
                    [`.${darkTheme} &`]: {
                      background: 'linear-gradient(120deg, $gold4, $crimson4)',
                    },
                  }}
                >
                  <MainHeroAccordion />
                </DemoContainer>
              </FocusArea>
              <Text as="h3" size="3" css={{ fontWeight: 500, lineHeight: '25px' }}>
                Accordion
              </Text>
              <Text as="p" size="3" variant="gray" css={{ lineHeight: '23px' }}>
                Supports one or multiple items open at the same time, keyboard navigation, collapse
                and expand animation.
              </Text>
            </CarouselSlide>

            <CarouselSlide>
              <FocusArea
                aria-label="Radio group component demo"
                onKeyDown={onFocusAreaKeyDown}
                onFocus={onFocusAreaFocus}
              >
                <DemoContainer
                  aria-hidden
                  css={{
                    background: 'linear-gradient(120deg, $tomato5, $indigo7)',
                    [`.${darkTheme} &`]: {
                      background: 'linear-gradient(120deg, $crimson4, $indigo5)',
                    },
                  }}
                >
                  <MainHeroRadioGroup />
                </DemoContainer>
              </FocusArea>
              <Text as="h3" size="3" css={{ fontWeight: 500, lineHeight: '25px' }}>
                Radio Group
              </Text>
              <Text as="p" size="3" variant="gray" css={{ lineHeight: '23px' }}>
                With arrow key navigation, horizontal/vertical orientation support, controlled or
                uncontrolled.
              </Text>
            </CarouselSlide>

            <CarouselSlide>
              <FocusArea
                aria-label="Toggle group component demo"
                onKeyDown={onFocusAreaKeyDown}
                onFocus={onFocusAreaFocus}
              >
                <DemoContainer
                  aria-hidden
                  css={{
                    background: 'linear-gradient(120deg, $indigo7, $cyan4)',
                    [`.${darkTheme} &`]: {
                      background: 'linear-gradient(120deg, $indigo5, $cyan7)',
                    },
                  }}
                >
                  <MainHeroToggleGroup />
                </DemoContainer>
              </FocusArea>
              <Text as="h3" size="3" css={{ fontWeight: 500, lineHeight: '25px' }}>
                Toggle Group
              </Text>
              <Text as="p" size="3" variant="gray" css={{ lineHeight: '23px' }}>
                A set of two-state buttons that can be toggled on or off. Supports single and
                multiple pressed buttons.
              </Text>
            </CarouselSlide>

            <CarouselSlide>
              <FocusArea
                aria-label="Switch component demo"
                onKeyDown={onFocusAreaKeyDown}
                onFocus={onFocusAreaFocus}
              >
                <DemoContainer
                  aria-hidden
                  css={{
                    background: 'linear-gradient(120deg, $cyan4, $mint5)',
                    [`.${darkTheme} &`]: {
                      background: 'linear-gradient(120deg, $cyan7, $mint6)',
                    },
                  }}
                  // css={{
                  //   background: 'linear-gradient(120deg, $mint5, $red3)',
                  //   [`.${darkTheme} &`]: {
                  //     background: 'linear-gradient(120deg, $mint6, $plum4)',
                  //   },
                  // }}
                >
                  <MainHeroSwitch />
                </DemoContainer>
              </FocusArea>
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
            <CarouselPrevious aria-label="Show next demo" tabIndex={-1} as={CarouselArrowButton}>
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
            <CarouselNext aria-label="Show previous demo" tabIndex={-1} as={CarouselArrowButton}>
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
  zIndex: 1,
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
