import React from 'react';
import NextLink from 'next/link';
import {
  Box,
  Grid,
  Text,
  styled,
  Container,
  Flex,
  Heading,
  Paragraph,
  Section,
  Card,
  Avatar,
  keyframes,
} from '@modulz/design-system';
import {
  CheckCircledIcon,
  CheckIcon,
  ChevronDownIcon,
  EyeClosedIcon,
  InputIcon,
} from '@radix-ui/react-icons';
import { MarketingCaption } from './MarketingCaption';

type MockDropdownState = 'closed' | 'item1' | 'item2' | 'item3' | 'item4';

type AnimationKeyframe = {
  key: string;
  typeahead: string;
  dropdown: MockDropdownState;
  animateSpeaker: boolean;
  duration: number;
};

const animationStates: Array<AnimationKeyframe> = [
  {
    key: '',
    typeahead: '',
    dropdown: 'item1',
    animateSpeaker: true,
    duration: 1000,
  },
  {
    key: '',
    typeahead: '',
    dropdown: 'item1',
    animateSpeaker: true,
    duration: 1500,
  },
  {
    key: 'g',
    typeahead: 'g',
    dropdown: 'item2',
    animateSpeaker: true,
    duration: 700,
  },
  {
    key: 'o',
    typeahead: 'go',
    dropdown: 'item2',
    animateSpeaker: false,
    duration: 180,
  },
  {
    key: ' ',
    typeahead: 'go ',
    dropdown: 'item2',
    animateSpeaker: false,
    duration: 300,
  },
  {
    key: 't',
    typeahead: 'go t',
    dropdown: 'item2',
    animateSpeaker: false,
    duration: 180,
  },
  {
    key: 'o',
    typeahead: 'go to',
    dropdown: 'item2',
    animateSpeaker: false,
    duration: 180,
  },
  {
    key: ' ',
    typeahead: 'go to ',
    dropdown: 'item2',
    animateSpeaker: false,
    duration: 300,
  },
  {
    key: 'r',
    typeahead: 'go to r',
    dropdown: 'item4',
    animateSpeaker: true,
    duration: 1500,
  },
  {
    key: ' ',
    typeahead: '',
    dropdown: 'closed',
    animateSpeaker: true,
    duration: 1500,
  },
  {
    key: ' ',
    typeahead: '',
    dropdown: 'item1',
    animateSpeaker: true,
    duration: 200,
  },
];

// TODO think how to label the animation for AT
export const AccessibilityHero = () => {
  const keyframeRef = React.useRef(0);
  const iterationRef = React.useRef(0);
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout>>();
  const containerRef = React.useRef<HTMLDivElement>(null);
  const intersectingRef = React.useRef(false);

  const [keyframe, setKeyframe] = React.useState(0);
  const [isIntersecting, setIsIntersecting] = React.useState(false);

  const showMockScreenReader = iterationRef.current > 0 || keyframe > 3;
  const showMockKeyboard = iterationRef.current > 0 || keyframe > 0;

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Intersection flag is disabled once less than 10% of the container is visible in the viewport,
        // and enabled once more than 90% of the container is visible in the viewport.
        const newIsIntersecting = entry.intersectionRatio > (intersectingRef.current ? 0.1 : 0.9);

        if (newIsIntersecting === false) {
          iterationRef.current = 0;
          keyframeRef.current = 0;
          clearTimeout(timeoutRef.current);
          setKeyframe(0);
        }

        intersectingRef.current = newIsIntersecting;
        setIsIntersecting(newIsIntersecting);
      },
      { threshold: [0.1, 0.9] }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    const updateKeyframe = () => {
      // Increment keyframe counter, or loop when last keyframe is reached
      keyframeRef.current =
        keyframeRef.current < animationStates.length - 1 ? keyframeRef.current + 1 : 0;

      // Increment iteration counter when starting keyframe is reached
      if (keyframeRef.current === 0) {
        iterationRef.current++;
      }

      setKeyframe(keyframeRef.current);

      // If visible in the viewport request animation frame when next keyframe is due
      if (intersectingRef.current) {
        timeoutRef.current = setTimeout(
          () => requestAnimationFrame(() => updateKeyframe()),
          animationStates[keyframeRef.current].duration
        );
      }
    };

    // Start the animation in 1s once the container is visible in the viewport
    if (isIntersecting) {
      timeoutRef.current = setTimeout(() => requestAnimationFrame(() => updateKeyframe()), 1000);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [isIntersecting]);

  return (
    <Section
      css={{
        background: 'linear-gradient(to bottom, $mauve2, $loContrast)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        css={{
          position: 'absolute',
          width: 1550,
          height: 680,
          bottom: -300,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <Box
          css={{
            width: 520,
            height: 520,
            left: 55,
            position: 'absolute',
            border: '10px solid $colors$orangeA3',
            transform: 'rotate(-15deg)',
          }}
        />
        <Triangle
          css={{
            color: '$skyA3',
            position: 'absolute',
            left: 535,
            top: 65,
            transform: 'rotate(135deg)',
          }}
        />
        <Box
          css={{
            position: 'absolute',
            top: -55,
            left: 935,
            width: 610,
            height: 610,
            br: '$round',
            border: '10px solid $colors$pinkA3',
          }}
        />
      </Box>

      <Container size="3" css={{ position: 'relative' }}>
        <Box css={{ mb: '$5' }}>
          <MarketingCaption css={{ mb: '$1' }}>Supports assistive technology</MarketingCaption>
          <Heading as="h2" size="3">
            Your work can be accessible to everyone
          </Heading>
        </Box>

        <Box
          ref={containerRef}
          css={{
            br: '$4',
            bc: '$slateA3',
            height: 320,
            p: '$5',
            mb: '$5',
            boxShadow: '0 0 1px $colors$slateA9',
            backdropFilter: 'blur(8px)',
          }}
        >
          <Grid
            columns="3"
            css={{
              width: '100%',
              height: '100%',
              br: '$3',
              overflow: 'hidden',
              boxShadow: '0 0 1px $colors$slateA7',
              '& > *': {
                gridTemplateRows: 'auto 1fr',
                p: '$3',
              },
            }}
          >
            <Grid
              css={{
                bc: showMockKeyboard ? '$mauve1' : '$mauve2',
                transition: 'background-color 300ms',
              }}
            >
              <Flex
                align="center"
                gap="1"
                css={{
                  color: '$slate11',
                  mb: '$1',
                  position: 'relative',
                  opacity: showMockKeyboard ? 1 : 0.6,
                  transition: 'opacity 300ms',
                }}
              >
                <Text variant="gray" size="2">
                  Keyboard input
                </Text>
                <KeyboardIcon />

                <MockTypeaheadOutput
                  visible={showMockKeyboard}
                  css={{ position: 'absolute', top: -4, right: 0 }}
                >
                  {animationStates[keyframe].typeahead}
                </MockTypeaheadOutput>
              </Flex>
              <Flex
                align="center"
                justify="center"
                css={{
                  opacity: showMockKeyboard ? 1 : 0,
                  transition: 'opacity 300ms',
                }}
              >
                {/* Adding React key so that the mock keyboards animates correctly on repeat key presses */}
                <MockKeyboard key={keyframe} currentKey={animationStates[keyframe].key} />
              </Flex>
            </Grid>

            <Grid
              css={{
                bc: '$mauve1',
                boxShadow: showMockKeyboard ? '-1px 0 $colors$grayA4' : 'none',
                transition: 'box-shadow 300ms',
              }}
            >
              <Flex align="center" gap="1" css={{ color: '$slate11', mb: '$1' }}>
                <Text variant="gray" size="2">
                  Radix component
                </Text>
                <TransformIcon />
              </Flex>
              <Flex align="center" justify="center">
                <MockDropdown state={animationStates[keyframe].dropdown} />
              </Flex>
            </Grid>

            <Grid
              css={{
                bc: showMockScreenReader ? '$mauve1' : '$mauve2',
                boxShadow: showMockScreenReader ? 'inset 1px 0 $colors$grayA4' : 'none',
                transition: 'background-color 300ms, box-shadow 300ms',
              }}
            >
              <Flex
                align="center"
                gap="1"
                css={{
                  color: '$slate11',
                  mb: '$1',
                  opacity: showMockScreenReader ? 1 : 0.6,
                  transition: 'opacity 300ms',
                }}
              >
                <Text variant="gray" size="2">
                  Screen reader
                </Text>
                <AccessibilityIcon />
              </Flex>
              <Flex direction="column" justify="between" css={{ pt: '$3' }}>
                <MockScreenReader
                  css={{
                    opacity: showMockScreenReader ? 1 : 0,
                    transition: 'opacity 300ms',
                  }}
                >
                  <ScreenReaderOutput dropdownState={animationStates[keyframe].dropdown} />
                </MockScreenReader>
                <SpeakerIcon
                  faded={showMockScreenReader === false}
                  animating={showMockScreenReader && animationStates[keyframe].animateSpeaker}
                />
              </Flex>
            </Grid>
          </Grid>
        </Box>

        <Grid columns="4" gap="3">
          <GlassCard>
            <Box css={{ p: '$3' }}>
              <Box css={{ mb: '$3' }}>
                <CheckCircledIcon width="30" height="30" />
              </Box>
              <Heading as="h3" css={{ mb: '$2' }}>
                WAI-ARIA compliant
              </Heading>
              <Text css={{ lineHeight: 1.5 }} as="p">
                Radix Primitives follow the WAI-ARIA guidelines, implementing correct semantics and
                behaviors for our components.
              </Text>
            </Box>
          </GlassCard>

          <GlassCard>
            <Box css={{ p: '$3' }}>
              <Box css={{ mb: '$3' }}>
                <KeyboardIcon width="30" height="30" />
              </Box>
              <Heading as="h3" css={{ mb: '$2' }}>
                Keyboard navigation
              </Heading>
              <Text css={{ lineHeight: 1.5 }} as="p">
                Primitives provide full keyboard support for components where users expect to use a
                keyboard or other input devices.
              </Text>
            </Box>
          </GlassCard>

          <GlassCard>
            <Box css={{ p: '$3' }}>
              <Box css={{ mb: '$3' }}>
                <InputIcon width="30" height="30" />
              </Box>
              <Heading as="h3" css={{ mb: '$2' }}>
                Focus management
              </Heading>
              <Text css={{ lineHeight: 1.5 }} as="p">
                Out of the box, Primitives provide sensible focus management defaults, which can be
                further customized in your code.
              </Text>
            </Box>
          </GlassCard>

          <GlassCard>
            <Box css={{ p: '$3' }}>
              <Box css={{ mb: '$3' }}>
                <EyeClosedIcon width="30" height="30" />
              </Box>
              <Heading as="h3" css={{ mb: '$2' }}>
                Screen reader tested
              </Heading>
              <Text css={{ lineHeight: 1.5 }} as="p">
                We test Primitives with common assistive technologies, looking out for practical
                issues that people may experience.
              </Text>
            </Box>
          </GlassCard>
        </Grid>
      </Container>
    </Section>
  );
};

const ScreenReaderOutput = ({ dropdownState }: { dropdownState: MockDropdownState }) => {
  if (dropdownState === 'closed') {
    return (
      <span>
        Navigation, menu <span style={{ whiteSpace: 'nowrap' }}>pop-up</span>, button
      </span>
    );
  }
  if (dropdownState === 'item1') {
    return (
      <span>
        Show Minimap, ticked, <span style={{ whiteSpace: 'nowrap' }}>menu item</span>
      </span>
    );
  }
  if (dropdownState === 'item2') {
    return (
      <span>
        Go to Symbol, <span style={{ whiteSpace: 'nowrap' }}>menu item</span>
      </span>
    );
  }
  if (dropdownState === 'item4') {
    return (
      <span>
        Go to References, <span style={{ whiteSpace: 'nowrap' }}>menu item</span>
      </span>
    );
  }
  return null;
};

const MockDropdownSeparator = styled('div', {
  height: 1,
  ml: 30,
  mr: 10,
  my: 5,
  bc: '$mauve5',
});

const MockDropdown = ({ state }: { state: MockDropdownState }) => {
  return (
    <Box css={{ mt: '$1' }}>
      <MockDropdownButton focused={state === 'closed'}>
        Navigation <ChevronDownIcon />
      </MockDropdownButton>
      <MockDropdownContent open={state !== 'closed'}>
        <MockDropdownCheckboxItem checked focused={state === 'item1'}>
          Show Minimap
        </MockDropdownCheckboxItem>
        <MockDropdownSeparator />
        <MockDropdownItem focused={state === 'item2'}>Go to Symbol</MockDropdownItem>
        <MockDropdownItem focused={state === 'item3'}>Go to Definition</MockDropdownItem>
        <MockDropdownItem focused={state === 'item4'}>Go to References</MockDropdownItem>
      </MockDropdownContent>
    </Box>
  );
};

const MockScreenReader = ({ css, ...props }: React.ComponentProps<typeof Heading>) => {
  return (
    <Heading
      size="3"
      as="span"
      css={{
        color: 'transparent',
        WebkitBackgroundClip: 'text',
        userSelect: 'none',
        backgroundImage: 'linear-gradient(to bottom right, #4F4B59, #545685)',
        ...css,
      }}
      {...props}
    />
  );
};

const MockTypeaheadOutput = styled(Text, {
  display: 'inline-block',
  px: '$1',
  br: '$1',
  pb: 2,
  bc: '$indigo4',
  border: '1px solid $colors$indigo6',
  transition: 'opacity 300ms',
  lineHeight: '18px',
  whiteSpace: 'pre',
  '&:empty': {
    display: 'none',
  },
  variants: {
    size: {}, // Including as a workaround for TS bugs with defaultVariants
    variant: {
      contrast: {
        color: '$indigo12',
      },
    },
    visible: {
      false: {
        opacity: 0,
      },
    },
  },
  defaultVariants: {
    visible: true,
    variant: 'contrast',
    size: '2',
  },
});

const MockKeyboard = ({ currentKey }: { currentKey?: string }) => {
  return (
    <Flex direction="column" align="center" gap="2">
      <Grid gap="1" flow="column" justify="start">
        <Key pressed={currentKey === 'q'}>Q</Key>
        <Key pressed={currentKey === 'w'}>W</Key>
        <Key pressed={currentKey === 'e'}>E</Key>
        <Key pressed={currentKey === 'r'}>R</Key>
        <Key pressed={currentKey === 't'}>T</Key>
        <Key pressed={currentKey === 'y'}>Y</Key>
        <Key pressed={currentKey === 'u'}>U</Key>
        <Key pressed={currentKey === 'i'}>I</Key>
        <Key pressed={currentKey === 'o'}>O</Key>
        <Key pressed={currentKey === 'p'}>P</Key>
      </Grid>
      <Grid gap="1" flow="column" justify="start">
        <Key pressed={currentKey === 'a'}>A</Key>
        <Key pressed={currentKey === 's'}>S</Key>
        <Key pressed={currentKey === 'd'}>D</Key>
        <Key pressed={currentKey === 'f'}>F</Key>
        <Key pressed={currentKey === 'g'}>G</Key>
        <Key pressed={currentKey === 'h'}>H</Key>
        <Key pressed={currentKey === 'j'}>J</Key>
        <Key pressed={currentKey === 'k'}>K</Key>
        <Key pressed={currentKey === 'l'}>L</Key>
      </Grid>
      <Grid gap="1" flow="column" justify="start">
        <Key pressed={currentKey === 'z'}>Z</Key>
        <Key pressed={currentKey === 'x'}>X</Key>
        <Key pressed={currentKey === 'c'}>C</Key>
        <Key pressed={currentKey === 'v'}>V</Key>
        <Key pressed={currentKey === 'b'}>B</Key>
        <Key pressed={currentKey === 'n'}>N</Key>
        <Key pressed={currentKey === 'm'}>M</Key>
      </Grid>
      <Key pressed={currentKey === ' '} css={{ width: 150 }} />
    </Flex>
  );
};

const keyPressAnimation = keyframes({
  from: {
    bc: '$slate5',
    boxShadow: '0 0 0 1px $colors$slate5',
  },
});

const Key = styled(Text, {
  display: 'flex',
  bc: '$panel',
  ai: 'center',
  jc: 'center',
  br: 5,
  width: 26,
  height: 34,
  lineHeight: '34px',
  boxShadow: '0 0 0 1px $colors$slate7, 0 2px $colors$slate7',
  userSelect: 'none',
  variants: {
    size: {}, // Including as a workaround for TS bugs with defaultVariants
    variant: {}, // Including as a workaround for TS bugs with defaultVariants
    pressed: {
      true: {
        animation: `${keyPressAnimation} 120ms`,
        animationTimingFunction: 'steps(1, end)',
      },
    },
  },
  defaultVariants: {
    size: '3',
    variant: 'gray',
  },
});

const MockDropdownButton = styled(Box, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  br: 7,
  height: 35,
  lineHeight: '35px',
  mb: '$1',
  px: '$2',
  color: '$hiContrast',
  fontFamily: '$untitled',
  fontSize: '$2',
  userSelect: 'none',
  transitionDuration: '150ms',
  transitionProperty: 'box-shadow',
  variants: {
    focused: {
      true: {
        boxShadow: 'inset 0 0 0 1px $colors$indigo8, 0 0 0 1px $colors$indigo8',
        transition: 'none',
      },
      false: {
        boxShadow: 'inset 0 0 0 1px #FFFFFF00, 0 0 0 3px #FFFFFF00',
        bc: '$mauve4',
      },
    },
  },
});

const MockDropdownContent = styled(Box, {
  p: '$1',
  br: '$2',
  bc: '$panel',
  willChange: 'transform, opacity',
  transformOrigin: 'top center',
  transitionDuration: '150ms',
  transitionProperty: 'transform, opacity',
  boxShadow: `
    0 0px 1px $colors$blackA8,
    0 2px 4px -1px $colors$blackA5,
    0 6px 15px -7px $colors$blackA8
  `,
  variants: {
    open: {
      true: {
        opacity: 1,
        transform: 'none',
      },
      false: {
        opacity: 0,
        transform: 'scale(0.95)',
      },
    },
  },
  defaultVariants: {
    open: false,
  },
});

const MockDropdownItem = styled(Box, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontFamily: '$untitled',
  fontSize: '$2',
  cursor: 'default',
  userSelect: 'none',
  whiteSpace: 'nowrap',
  height: 30,
  lineHeight: '30px',
  px: 30,
  position: 'relative',
  color: '$hiContrast',
  br: 5,

  variants: {
    focused: {
      true: {
        backgroundColor: '$indigo11',
        color: 'white',
      },
    },
  },
});

const MockDropdownCheckboxItem = ({
  checked,
  children,
  ...props
}: { checked?: boolean } & React.ComponentProps<typeof MockDropdownItem>) => {
  return (
    <MockDropdownItem {...props}>
      {checked && (
        <Flex
          align="center"
          justify="center"
          css={{ position: 'absolute', left: 0, width: 30, height: 30 }}
        >
          <CheckIcon />
        </Flex>
      )}
      {children}
    </MockDropdownItem>
  );
};

const GlassCard = styled(Card, {
  bc: '$whiteA9',
  backdropFilter: 'blur(8px)',
});

const Triangle = (props: React.ComponentProps<typeof Box>) => (
  <Box {...props}>
    <svg
      width="674"
      height="584"
      viewBox="0 0 674 584"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.64854 578.265L337.465 10.47L665.282 578.265H9.64854Z"
        stroke="currentcolor"
        strokeWidth="10"
      />
    </svg>
  </Box>
);

const KeyboardIcon = (props: React.ComponentProps<'svg'>) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.5 4H1.5C1.22386 4 1 4.22386 1 4.5V10.5C1 10.7761 1.22386 11 1.5 11H13.5C13.7761 11 14 10.7761 14 10.5V4.5C14 4.22386 13.7761 4 13.5 4ZM1.5 3C0.671573 3 0 3.67157 0 4.5V10.5C0 11.3284 0.671573 12 1.5 12H13.5C14.3284 12 15 11.3284 15 10.5V4.5C15 3.67157 14.3284 3 13.5 3H1.5ZM2 5H3V6H2V5ZM5 5H4V6H5V5ZM6 5H7V6H6V5ZM9 5H8V6H9V5ZM10 5H11V6H10V5ZM13 5H12V6H13V5ZM11 7H12V8H11V7ZM13 9H12V10H13V9ZM9 7H10V8H9V7ZM8 7H7V8H8V7ZM5 7H6V8H5V7ZM4 7H3V8H4V7ZM2 9H3V10H2V9ZM11 9H4V10H11V9Z"
      fill="currentcolor"
    />
  </svg>
);

const TransformIcon = (props: React.ComponentProps<'svg'>) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.849609 1.74998C0.849609 1.25292 1.25255 0.849976 1.74961 0.849976H3.24961C3.74667 0.849976 4.14961 1.25292 4.14961 1.74998V2.04998H10.8496V1.74998C10.8496 1.25292 11.2526 0.849976 11.7496 0.849976H13.2496C13.7467 0.849976 14.1496 1.25292 14.1496 1.74998V3.24998C14.1496 3.74703 13.7467 4.14998 13.2496 4.14998H12.9496V10.85H13.2496C13.7467 10.85 14.1496 11.2529 14.1496 11.75V13.25C14.1496 13.747 13.7467 14.15 13.2496 14.15H11.7496C11.2526 14.15 10.8496 13.747 10.8496 13.25V12.95H4.14961V13.25C4.14961 13.747 3.74667 14.15 3.24961 14.15H1.74961C1.25255 14.15 0.849609 13.747 0.849609 13.25V11.75C0.849609 11.2529 1.25255 10.85 1.74961 10.85H2.04961V4.14998H1.74961C1.25255 4.14998 0.849609 3.74703 0.849609 3.24998V1.74998ZM2.94961 4.14998V10.85H3.24961C3.74667 10.85 4.14961 11.2529 4.14961 11.75V12.05H10.8496V11.75C10.8496 11.2529 11.2526 10.85 11.7496 10.85H12.0496V4.14998H11.7496C11.2526 4.14998 10.8496 3.74703 10.8496 3.24998V2.94998H4.14961V3.24998C4.14961 3.74703 3.74667 4.14998 3.24961 4.14998H2.94961ZM2.34961 1.74998H1.74961V2.34998V2.64998V3.24998H2.34961H2.64961H3.24961V2.64998V2.34998V1.74998H2.64961H2.34961ZM5.09961 5.99998C5.09961 5.50292 5.50255 5.09998 5.99961 5.09998H6.99961C7.49667 5.09998 7.89961 5.50292 7.89961 5.99998V6.99998C7.89961 7.03591 7.8975 7.07134 7.89341 7.10618C7.92824 7.10208 7.96368 7.09998 7.99961 7.09998H8.99961C9.49667 7.09998 9.89961 7.50292 9.89961 7.99998V8.99998C9.89961 9.49703 9.49667 9.89998 8.99961 9.89998H7.99961C7.50255 9.89998 7.09961 9.49703 7.09961 8.99998V7.99998C7.09961 7.96405 7.10171 7.92861 7.10581 7.89378C7.07098 7.89787 7.03554 7.89998 6.99961 7.89998H5.99961C5.50255 7.89998 5.09961 7.49703 5.09961 6.99998V5.99998ZM6.09961 5.99998H5.99961V6.09998V6.89998V6.99998H6.09961H6.89961H6.99961V6.89998V6.09998V5.99998H6.89961H6.09961ZM7.99961 7.99998H8.09961H8.89961H8.99961V8.09998V8.89998V8.99998H8.89961H8.09961H7.99961V8.89998V8.09998V7.99998ZM2.64961 11.75H2.34961H1.74961V12.35V12.65V13.25H2.34961H2.64961H3.24961V12.65V12.35V11.75H2.64961ZM11.7496 1.74998H12.3496H12.6496H13.2496V2.34998V2.64998V3.24998H12.6496H12.3496H11.7496V2.64998V2.34998V1.74998ZM12.6496 11.75H12.3496H11.7496V12.35V12.65V13.25H12.3496H12.6496H13.2496V12.65V12.35V11.75H12.6496Z"
      fill="currentcolor"
    />
  </svg>
);

const AccessibilityIcon = (props: React.ComponentProps<'svg'>) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.876953 7.49984C0.876953 3.84216 3.8421 0.877014 7.49978 0.877014C11.1574 0.877014 14.1226 3.84216 14.1226 7.49984C14.1226 11.1575 11.1574 14.1227 7.49978 14.1227C3.8421 14.1227 0.876953 11.1575 0.876953 7.49984ZM7.49978 1.82701C4.36677 1.82701 1.82695 4.36683 1.82695 7.49984C1.82695 10.6328 4.36677 13.1727 7.49978 13.1727C10.6328 13.1727 13.1726 10.6328 13.1726 7.49984C13.1726 4.36683 10.6328 1.82701 7.49978 1.82701ZM7.12433 9.00001C7.06969 9.12735 6.33141 11.9592 6.33141 11.9592C6.25994 12.226 5.98577 12.3843 5.71903 12.3128C5.4523 12.2413 5.29401 11.9672 5.36548 11.7004C5.36548 11.7004 6.24637 8.87268 6.24637 8.27007V6.80099L4.28739 6.27608C4.02065 6.20461 3.86236 5.93045 3.93383 5.66371C4.0053 5.39698 4.27947 5.23869 4.5462 5.31016C4.5462 5.31016 6.20018 5.87268 6.84555 5.87268H8.15481C8.80018 5.87268 10.4532 5.31042 10.4532 5.31042C10.7199 5.23895 10.9941 5.39724 11.0656 5.66397C11.137 5.93071 10.9787 6.20487 10.712 6.27635L8.74637 6.80303V8.27007C8.74637 8.87268 9.62638 11.6971 9.62638 11.6971C9.69785 11.9639 9.53956 12.238 9.27283 12.3095C9.00609 12.381 8.73193 12.2227 8.66046 11.956C8.66046 11.956 7.91969 9.12735 7.86841 9.00001C7.81969 8.87268 7.64981 8.87268 7.64981 8.87268H7.34293C7.34293 8.87268 7.16969 8.87268 7.12433 9.00001ZM7.50018 5.12007C8.1215 5.12007 8.62518 4.61639 8.62518 3.99507C8.62518 3.37375 8.1215 2.87007 7.50018 2.87007C6.87886 2.87007 6.37518 3.37375 6.37518 3.99507C6.37518 4.61639 6.87886 5.12007 7.50018 5.12007Z"
      fill="currentcolor"
    />
  </svg>
);

const wave1 = keyframes({
  '0%, 50%, 100%': {
    opacity: 0,
  },
  '12.5%, 37.5%': {
    opacity: 1,
  },
  '75%': {
    transform: 'scale(1.1) translateX(1px)',
  },
});

const wave2 = keyframes({
  '0%, 12.5%, 62.5%, 100%': {
    opacity: 0,
  },
  '25%, 50%': {
    opacity: 1,
  },
  '87.5%': {
    transform: 'scale(1.1) translateX(1px)',
  },
});

const wave3 = keyframes({
  '0%, 25%, 75%, 100%': {
    opacity: 0,
  },
  '37.5%, 62.5%': {
    opacity: 1,
  },
  '100%': {
    transform: 'scale(1.1) translateX(1px)',
  },
});

type SpeakerIconProps = {
  faded?: boolean;
  animating?: boolean;
};

const SpeakerIcon = ({ faded = false, animating = false }: SpeakerIconProps) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const shouldPauseAnimation = React.useRef(animating);
  const [currentlyAnimating, setCurrentlyAnimating] = React.useState(animating);

  React.useEffect(() => {
    shouldPauseAnimation.current = !animating;

    if (animating) {
      setCurrentlyAnimating(true);
    }
  }, [animating]);

  return (
    <SpeakerIconWrapper
      ref={containerRef}
      faded={faded}
      animating={currentlyAnimating}
      onAnimationIteration={() => {
        // Check whether we need to pause the animation whenever an iteration is done
        if (shouldPauseAnimation.current) {
          setCurrentlyAnimating(false);
        }
      }}
    >
      <svg
        width="40"
        height="30"
        viewBox="0 0 40 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.95898 18.9871H5.95703C6.08398 18.9871 6.18164 19.0261 6.25977 19.0945L10.9668 23.3035C11.3477 23.6453 11.6797 23.8308 12.0898 23.8308C12.6562 23.8308 13.0469 23.4109 13.0469 22.8542V7.31714C13.0469 6.7605 12.6562 6.30151 12.0703 6.30151C11.6699 6.30151 11.3867 6.49683 10.9668 6.86792L6.25977 11.0964C6.18164 11.1648 6.08398 11.2039 5.95703 11.2039H2.95898C1.75781 11.2039 1.17188 11.7996 1.17188 13.0593V17.1316C1.17188 18.3914 1.75781 18.9871 2.95898 18.9871ZM2.99805 17.8445C2.55859 17.8445 2.37305 17.6589 2.37305 17.2195V12.9714C2.37305 12.532 2.55859 12.3464 2.99805 12.3464H6.23047C6.51367 12.3464 6.70898 12.3074 6.95312 12.0828L11.4844 7.9519C11.543 7.90308 11.6016 7.85425 11.6895 7.85425C11.7773 7.85425 11.8359 7.91284 11.8359 8.0105V22.1121C11.8359 22.2097 11.7871 22.2781 11.6895 22.2781C11.6309 22.2781 11.5625 22.2488 11.4844 22.1804L6.95312 18.1082C6.71875 17.8933 6.51367 17.8445 6.23047 17.8445H2.99805Z"
          fill="currentcolor"
        />
        <path
          fillOpacity="0.5"
          className="speaker-line-1"
          d="M17.5984 19.2507C17.8523 19.4363 18.2136 19.3777 18.4285 19.0847C19.1902 18.0788 19.6687 16.6042 19.6687 15.0613C19.6687 13.5085 19.1902 12.0534 18.4285 11.0378C18.2136 10.7449 17.8621 10.6863 17.5984 10.8718C17.2859 11.0964 17.2273 11.4675 17.4714 11.7898C18.0671 12.6101 18.4675 13.8015 18.4675 15.0613C18.4675 16.3308 18.0574 17.532 17.4519 18.3523C17.2273 18.6648 17.2859 19.0261 17.5984 19.2507Z"
          fill="currentcolor"
        />
        <path
          fillOpacity="0.5"
          className="speaker-line-2"
          d="M21.4556 21.8679C21.7486 22.0632 22.1001 21.9851 22.315 21.6921C23.6236 19.9148 24.3658 17.5808 24.3658 15.0613C24.3658 12.5417 23.6431 10.1882 22.315 8.42064C22.1001 8.12767 21.7486 8.05931 21.4556 8.25462C21.1724 8.44993 21.1333 8.81126 21.3482 9.13353C22.4322 10.7644 23.1548 12.8054 23.1548 15.0613C23.1548 17.3171 22.4908 19.407 21.3384 20.9988C21.1236 21.3113 21.1724 21.6726 21.4556 21.8679Z"
          fill="currentcolor"
        />
        <path
          fillOpacity="0.5"
          className="speaker-line-3"
          d="M25.3514 24.5144C25.6248 24.7098 25.9959 24.6316 26.2108 24.3289C28.0076 21.7801 29.0526 18.5574 29.0526 15.0613C29.0526 11.5652 27.9881 8.34257 26.2108 5.79374C25.9959 5.48124 25.6346 5.40311 25.3514 5.59843C25.0682 5.8035 25.0194 6.1746 25.2342 6.49686C26.8162 8.87968 27.8612 11.8191 27.8612 15.0613C27.8612 18.3035 26.9139 21.3406 25.2244 23.6355C25.0096 23.948 25.0584 24.3094 25.3514 24.5144Z"
          fill="currentcolor"
        />
      </svg>
    </SpeakerIconWrapper>
  );
};

const SpeakerIconWrapper = styled('div', {
  color: '$slate11',

  '&& path': {
    transformOrigin: 'left center',
  },
  '.speaker-line-1': {
    opacity: 0,
    animation: `1500ms ${wave1} linear infinite`,
  },
  '.speaker-line-2': {
    opacity: 0,
    animation: `1500ms ${wave2} linear infinite`,
  },
  '.speaker-line-3': {
    opacity: 0,
    animation: `1500ms ${wave3} linear infinite`,
  },

  variants: {
    faded: {
      true: {
        opacity: 0.4,
      },
    },
    animating: {
      false: {
        '&& path': {
          animationPlayState: 'paused',
        },
      },
    },
  },
});
