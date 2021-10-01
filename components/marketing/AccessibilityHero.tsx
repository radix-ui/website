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

// TODO check that all paragraphs are P tags

type MockDropdownState = 'closed' | 'item1' | 'item2' | 'item3' | 'item4';

type AnimationKeyframe = {
  key: string;
  typeahead: string;
  dropdown: MockDropdownState;
  animateSpeaker: boolean;
  screenreader?: JSX.Element;
  duration: number;
};

const animationState: Array<AnimationKeyframe> = [
  {
    key: '',
    typeahead: '',
    dropdown: 'closed',
    animateSpeaker: false,
    screenreader: (
      <span>
        Navigation, menu <span style={{ whiteSpace: 'nowrap' }}>pop-up</span>, button
      </span>
    ),
    duration: 1000,
  },
  {
    key: ' ',
    typeahead: '',
    dropdown: 'item1',
    animateSpeaker: true,
    screenreader: (
      <span>
        Show Minimap, ticked, <span style={{ whiteSpace: 'nowrap' }}>menu item</span>
      </span>
    ),
    duration: 2000,
  },
  {
    key: 'g',
    typeahead: 'g',
    dropdown: 'item2',
    animateSpeaker: true,
    screenreader: (
      <span>
        Go to Symbol, <span style={{ whiteSpace: 'nowrap' }}>menu item</span>
      </span>
    ),
    duration: 900,
  },
  {
    key: 'o',
    typeahead: 'go',
    dropdown: 'item2',
    animateSpeaker: false,
    screenreader: (
      <span>
        Go to Symbol, <span style={{ whiteSpace: 'nowrap' }}>menu item</span>
      </span>
    ),
    duration: 180,
  },
  {
    key: ' ',
    typeahead: 'go ',
    dropdown: 'item2',
    animateSpeaker: false,
    screenreader: (
      <span>
        Go to Symbol, <span style={{ whiteSpace: 'nowrap' }}>menu item</span>
      </span>
    ),
    duration: 180,
  },
  {
    key: 't',
    typeahead: 'go t',
    dropdown: 'item2',
    animateSpeaker: false,
    screenreader: (
      <span>
        Go to Symbol, <span style={{ whiteSpace: 'nowrap' }}>menu item</span>
      </span>
    ),
    duration: 180,
  },
  {
    key: 'o',
    typeahead: 'go to',
    dropdown: 'item2',
    animateSpeaker: false,
    screenreader: (
      <span>
        Go to Symbol, <span style={{ whiteSpace: 'nowrap' }}>menu item</span>
      </span>
    ),
    duration: 180,
  },
  {
    key: ' ',
    typeahead: 'go to ',
    dropdown: 'item2',
    animateSpeaker: false,
    screenreader: (
      <span>
        Go to Symbol, <span style={{ whiteSpace: 'nowrap' }}>menu item</span>
      </span>
    ),
    duration: 180,
  },
  {
    key: 'r',
    typeahead: 'go to r',
    dropdown: 'item4',
    animateSpeaker: true,
    screenreader: (
      <span>
        Go to References, <span style={{ whiteSpace: 'nowrap' }}>menu item</span>
      </span>
    ),
    duration: 3000,
  },
  {
    key: ' ',
    typeahead: '',
    dropdown: 'closed',
    animateSpeaker: true,
    screenreader: (
      <span>
        Navigation, menu <span style={{ whiteSpace: 'nowrap' }}>pop-up</span>, button
      </span>
    ),
    duration: 1000,
  },
];

// TODO think how to label the animation for AT
export const AccessibilityHero = () => {
  const [keyframe, setKeyframe] = React.useState(0);

  React.useEffect(() => {
    let currentKeyframe = keyframe;
    let timeout: ReturnType<typeof setTimeout>;

    const updateKeyframe = () => {
      // Increment keyframe counter, loop when last keyframe is reached
      currentKeyframe = currentKeyframe < animationState.length - 1 ? currentKeyframe + 1 : 0;
      setKeyframe(currentKeyframe);

      // Request animation frame when next keyframe is due
      timeout = setTimeout(
        () => requestAnimationFrame(() => updateKeyframe()),
        animationState[currentKeyframe].duration
      );
    };

    timeout = setTimeout(
      () => requestAnimationFrame(() => updateKeyframe()),
      animationState[currentKeyframe].duration
    );

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Section
      css={{
        background: 'linear-gradient(to bottom, $mauve2, $loContrast)',
        boxShadow: '0 -1px $colors$grayA3',
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
              bc: '$mauve1',
              width: '100%',
              height: '100%',
              br: '$3',
              '& > *': {
                gridTemplateRows: 'auto 1fr',
                p: '$3',
              },
            }}
          >
            <Grid>
              <Flex
                align="center"
                gap="1"
                css={{ color: '$slate11', mb: '$1', position: 'relative' }}
              >
                <Text variant="gray" size="2">
                  Keyboard input
                </Text>
                <KeyboardIcon />

                <Box css={{ position: 'absolute', top: -4, right: 0 }}>
                  <MockTypeaheadOutput>{animationState[keyframe].typeahead}</MockTypeaheadOutput>
                </Box>
              </Flex>
              <Flex align="center" justify="center">
                {/* Adding React key so that the mock keyboards animates correctly on repeat key presses */}
                <MockKeyboard key={keyframe} currentKey={animationState[keyframe].key} />
              </Flex>
            </Grid>
            <Grid css={{ boxShadow: '1px 0 $colors$grayA4, -1px 0 $colors$grayA4' }}>
              <Flex align="center" gap="1" css={{ color: '$slate11', mb: '$1' }}>
                <Text variant="gray" size="2">
                  Radix component
                </Text>
                <TransformIcon />
              </Flex>
              <Flex align="center" justify="center">
                <MockDropdown state={animationState[keyframe].dropdown} />
              </Flex>
            </Grid>
            <Grid>
              <Flex align="center" gap="1" css={{ color: '$slate11', mb: '$1' }}>
                <Text variant="gray" size="2">
                  Screen reader
                </Text>
                <AccessibilityIcon />
              </Flex>
              <Flex direction="column" justify="between" css={{ pt: '$3' }}>
                <MockScreenReader>{animationState[keyframe].screenreader}</MockScreenReader>
                <SpeakerIcon animating={animationState[keyframe].animateSpeaker} />
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
        <MockDropdownItem focused={state === 'item2'}>Go to Symbol</MockDropdownItem>
        <MockDropdownItem focused={state === 'item3'}>Go to Definition</MockDropdownItem>
        <MockDropdownItem focused={state === 'item4'}>Go to References</MockDropdownItem>
      </MockDropdownContent>
    </Box>
  );
};

const MockScreenReader: React.FC = ({ children }) => {
  return (
    <Heading
      size="3"
      as="span"
      css={{
        color: 'transparent',
        WebkitBackgroundClip: 'text',
        userSelect: 'none',
        backgroundImage: 'linear-gradient(to bottom right, #4F4B59, #545685)',
      }}
    >
      {children}
    </Heading>
  );
};

const MockTypeaheadOutput = styled(Text, {
  display: 'inline-block',
  px: '$1',
  br: '$1',
  pb: 2,
  bc: '$indigo3',
  border: '1px solid $colors$indigo5',
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
  },
  defaultVariants: {
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
        animation: `${keyPressAnimation} 100ms`,
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
});

const wave2 = keyframes({
  '0%, 12.5%, 62.5%, 100%': {
    opacity: 0,
  },
  '25%, 50%': {
    opacity: 1,
  },
});

const wave3 = keyframes({
  '0%, 25%, 75%, 100%': {
    opacity: 0,
  },
  '37.5%, 62.5%': {
    opacity: 1,
  },
});

const SpeakerIcon = ({ animating = false }: { animating?: boolean }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const shouldPauseAnimation = React.useRef(animating);

  React.useEffect(() => {
    shouldPauseAnimation.current = !animating;

    if (animating) {
      containerRef.current
        ?.querySelectorAll('path')
        ?.forEach((path) => path.style.removeProperty('animation-play-state'));
    }
  }, [animating]);

  return (
    <Box
      ref={containerRef}
      onAnimationIteration={(event) => {
        if (shouldPauseAnimation.current) {
          containerRef.current
            ?.querySelectorAll('path')
            ?.forEach((path) => (path.style.animationPlayState = 'paused'));
        }
      }}
      css={{
        color: '$slate11',
        '.speaker-icon-line-1': {
          opacity: 0,
          animation: `1500ms ${wave1} linear infinite`,
        },
        '.speaker-icon-line-2': {
          opacity: 0,
          animation: `1500ms ${wave2} linear infinite`,
        },
        '.speaker-icon-line-3': {
          opacity: 0,
          animation: `1500ms ${wave3} linear infinite`,
        },
      }}
    >
      <svg
        width="30"
        height="20"
        viewBox="0 0 30 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.95898 13.9871H5.95703C6.08398 13.9871 6.18164 14.0261 6.25977 14.0945L10.9668 18.3035C11.3477 18.6453 11.6797 18.8308 12.0898 18.8308C12.6562 18.8308 13.0469 18.4109 13.0469 17.8542V2.31714C13.0469 1.7605 12.6562 1.30151 12.0703 1.30151C11.6699 1.30151 11.3867 1.49683 10.9668 1.86792L6.25977 6.09644C6.18164 6.16479 6.08398 6.20386 5.95703 6.20386H2.95898C1.75781 6.20386 1.17188 6.79956 1.17188 8.05933V12.1316C1.17188 13.3914 1.75781 13.9871 2.95898 13.9871ZM2.99805 12.8445C2.55859 12.8445 2.37305 12.6589 2.37305 12.2195V7.97144C2.37305 7.53198 2.55859 7.34644 2.99805 7.34644H6.23047C6.51367 7.34644 6.70898 7.30737 6.95312 7.08276L11.4844 2.9519C11.543 2.90308 11.6016 2.85425 11.6895 2.85425C11.7773 2.85425 11.8359 2.91284 11.8359 3.0105V17.1121C11.8359 17.2097 11.7871 17.2781 11.6895 17.2781C11.6309 17.2781 11.5625 17.2488 11.4844 17.1804L6.95312 13.1082C6.71875 12.8933 6.51367 12.8445 6.23047 12.8445H2.99805Z"
          fill="currentcolor"
        />
        <path
          fillOpacity="0.5"
          className="speaker-icon-line-1"
          d="M17.5984 14.2507C17.8523 14.4363 18.2136 14.3777 18.4285 14.0847C19.1902 13.0788 19.6687 11.6042 19.6687 10.0613C19.6687 8.50853 19.1902 7.05345 18.4285 6.03782C18.2136 5.74485 17.8621 5.68626 17.5984 5.87181C17.2859 6.09642 17.2273 6.46751 17.4714 6.78978C18.0671 7.61009 18.4675 8.80149 18.4675 10.0613C18.4675 11.3308 18.0574 12.532 17.4519 13.3523C17.2273 13.6648 17.2859 14.0261 17.5984 14.2507Z"
          fill="currentcolor"
        />
        <path
          fillOpacity="0.5"
          className="speaker-icon-line-2"
          d="M21.4556 16.8679C21.7486 17.0632 22.1001 16.9851 22.315 16.6921C23.6236 14.9148 24.3658 12.5808 24.3658 10.0613C24.3658 7.54173 23.6431 5.18821 22.315 3.42064C22.1001 3.12767 21.7486 3.05931 21.4556 3.25462C21.1724 3.44993 21.1333 3.81126 21.3482 4.13353C22.4322 5.76439 23.1548 7.8054 23.1548 10.0613C23.1548 12.3171 22.4908 14.407 21.3384 15.9988C21.1236 16.3113 21.1724 16.6726 21.4556 16.8679Z"
          fill="currentcolor"
        />
        <path
          fillOpacity="0.5"
          className="speaker-icon-line-3"
          d="M25.3514 19.5144C25.6248 19.7098 25.9959 19.6316 26.2108 19.3289C28.0076 16.7801 29.0526 13.5574 29.0526 10.0613C29.0526 6.56522 27.9881 3.34257 26.2108 0.793739C25.9959 0.481239 25.6346 0.403114 25.3514 0.598426C25.0682 0.803504 25.0194 1.1746 25.2342 1.49686C26.8162 3.87968 27.8612 6.81913 27.8612 10.0613C27.8612 13.3035 26.9139 16.3406 25.2244 18.6355C25.0096 18.948 25.0584 19.3094 25.3514 19.5144Z"
          fill="currentcolor"
        />
      </svg>
    </Box>
  );
};
