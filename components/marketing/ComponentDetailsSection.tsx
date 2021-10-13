import {
  Section,
  Container,
  Heading,
  Link,
  Avatar,
  Flex,
  Button,
  Paragraph,
  Separator,
  Box,
  Grid,
  Text,
  styled,
  AspectRatio,
} from '@modulz/design-system';
import React from 'react';
import { MarketingCaption } from './MarketingCaption';
import { CheckIcon, ChevronDownIcon } from '@radix-ui/react-icons';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

const InlineDropdownTrigger = styled(DropdownMenuPrimitive.Trigger, {
  all: 'unset',
  alignItems: 'center',
  boxSizing: 'border-box',
  display: 'inline-flex',
  WebkitTapHighlightColor: 'transparent',

  px: 7,
  pt: 0,
  pb: 2,
  mr: 2,
  bc: '$slate3',
  border: '1px solid $slate5',
  borderRadius: '$3',

  '@hover': {
    '&:hover': {
      bc: '$slate4',
      borderColor: '$slate6',
    },
    '&:focus': {
      bc: '$tealA3',
      borderColor: '$teal9',
      boxShadow: '0 0 0 1px $colors$teal9',
    },
  },
});

const ThickCaretDown = (props: React.ComponentProps<'svg'>) => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.5 6.5L7.5 10.25L11.5 6.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const InlineDropdownArrow = styled(DropdownMenuPrimitive.Arrow, {
  fill: '$loContrast',
});

const InlineDropdownContent = styled(DropdownMenuPrimitive.Content, {
  bc: '$loContrast',
  boxShadow: '0px 5px 30px -5px $colors$shadowDark',
  p: '$1',
  br: '$3',
});

const InlineDropdownRadioItem = styled(DropdownMenuPrimitive.RadioItem, {
  display: 'flex',
  ai: 'center',
  fontFamily: '$untitled',
  fontSize: '$5',
  letterSpacing: '-0.01em',
  height: '$6',
  px: '$2',
  br: '$2',
  cursor: 'default',
  '@hover': {
    '&:hover': {
      bc: '$slate3',
      outline: 0,
    },
  },
  '&:focus': {
    bc: '$slate3',
    outline: 0,
  },
  '&[data-state="checked"]': {
    display: 'none',
  },
});

type Components =
  | 'dropdown'
  | 'dialog'
  | 'popover'
  | 'slider'
  | 'scroll area'
  | 'hover card'
  | 'tooltip';

export const ComponentDetailsSection = () => {
  const [component, setComponent] = React.useState<Components>('dropdown');
  return (
    <Section
      css={{
        backgroundImage: 'linear-gradient(to bottom, $slate1, $loContrast)',
        overflow: 'hidden',
      }}
    >
      <Container size="3">
        <Flex
          direction="column"
          align="center"
          css={{
            textAlign: 'center',
            position: 'relative',
            zIndex: 1,
            mb: '$6',
            '@bp3': { mb: 100 },
          }}
        >
          <MarketingCaption css={{ mb: '$1' }}>Case in point</MarketingCaption>
          <DropdownMenuPrimitive.Root>
            <Heading as="h2" size="3" css={{ mb: '$3' }}>
              So you think you can{' '}
              <span style={{ whiteSpace: 'nowrap' }}>
                build a{' '}
                <InlineDropdownTrigger>
                  {component}
                  <ThickCaretDown style={{ marginTop: 2, marginLeft: 5, marginRight: -1 }} />
                </InlineDropdownTrigger>
                ?
              </span>
            </Heading>
            <InlineDropdownContent sideOffset={5}>
              <InlineDropdownArrow />
              <DropdownMenuPrimitive.RadioGroup
                value={component}
                onValueChange={(newValue) => setComponent(newValue as Components)}
              >
                <InlineDropdownRadioItem value="dropdown">dropdown</InlineDropdownRadioItem>
                <InlineDropdownRadioItem value="dialog">dialog</InlineDropdownRadioItem>
                <InlineDropdownRadioItem value="popover">popover</InlineDropdownRadioItem>
                <InlineDropdownRadioItem value="slider">slider</InlineDropdownRadioItem>
                <InlineDropdownRadioItem value="scroll area">scroll area</InlineDropdownRadioItem>
                <InlineDropdownRadioItem value="hover card">hover card</InlineDropdownRadioItem>
                <InlineDropdownRadioItem value="tooltip">tooltip</InlineDropdownRadioItem>
              </DropdownMenuPrimitive.RadioGroup>
            </InlineDropdownContent>
          </DropdownMenuPrimitive.Root>

          <Box css={{ maxWidth: 480 }}>
            {component === 'dropdown' && (
              <Paragraph>
                Here’s ours. 1,000 hours, 6 months, 4 code reviews, and about a million PR comments.
                We agonise over API design, performance and accessibility so you don't need to.
              </Paragraph>
            )}
            {component === 'dialog' && (
              <Paragraph>
                Here’s ours. 2,000 hours, 7 months, 5 code reviews, and about a million PR comments.
                We agonise over API design, performance and accessibility so you don't need to.
              </Paragraph>
            )}
            {component === 'popover' && (
              <Paragraph>
                Here’s ours. 4,000 hours, 9 months, 7 code reviews, and about a million PR comments.
                We agonise over API design, performance and accessibility so you don't need to.
              </Paragraph>
            )}
            {component === 'slider' && (
              <Paragraph>
                Here’s ours. 5,000 hours, 10 months, 8 code reviews, and about a million PR
                comments. We agonise over API design, performance and accessibility so you don't
                need to.
              </Paragraph>
            )}
            {component === 'scroll area' && (
              <Paragraph>
                Here’s ours. 6,000 hours, 11 months, 9 code reviews, and about a million PR
                comments. We agonise over API design, performance and accessibility so you don't
                need to.
              </Paragraph>
            )}
            {component === 'hover card' && (
              <Paragraph>
                Here’s ours. 7,000 hours, 12 months, 10 code reviews, and about a million PR
                comments. We agonise over API design, performance and accessibility so you don't
                need to.
              </Paragraph>
            )}
            {component === 'tooltip' && (
              <Paragraph>
                Here’s ours. 8,000 hours, 13 months, 11 code reviews, and about a million PR
                comments. We agonise over API design, performance and accessibility so you don't
                need to.
              </Paragraph>
            )}
          </Box>
        </Flex>

        <Box css={{ position: 'relative' }}>
          {/* Use guides to position things sanely */}
          {/* <Guides7 /> */}
          {/* <Guides8 /> */}

          <Box css={{ position: 'relative', mb: '$4' }}>
            <Box
              css={{
                position: 'absolute',
                height: '100%',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <Circle
                size={250}
                angle={-45}
                color1="var(--colors-slateA4)"
                color2="var(--colors-indigoA6)"
              />
              <Circle
                size={400}
                angle={20}
                color1="var(--colors-slateA3)"
                color2="var(--colors-indigoA5)"
              />
              <Circle
                size={550}
                angle={35}
                color1="var(--colors-slateA2)"
                color2="var(--colors-indigoA4)"
              />
              <Circle
                size={700}
                angle={-50}
                color1="var(--colors-slateA2)"
                color2="var(--colors-indigoA3)"
              />
              {[850, 1000, 1150, 1300, 1450, 1600, 1750, 1900, 2050, 2200, 2350, 2500].map(
                (size, i) => (
                  <Circle
                    size={size + i * i * 5}
                    angle={-45 + i * 15}
                    color1="var(--colors-slateA2)"
                    color2="var(--colors-indigoA3)"
                    opacity={1 - i * 0.08}
                  />
                )
              )}
            </Box>
            <Flex
              align="center"
              justify="center"
              css={{ position: 'relative', '@bp3': { height: 850 } }}
            >
              <img
                src="/marketing/dropdown-menu.svg"
                alt="A dropdown menu example with a checked item and a submenu"
              />
            </Flex>
          </Box>

          <Box
            css={{
              mx: '-$5',
              pl: '$5',
              pt: '$1',
              position: 'relative',
              overflowX: 'scroll',
              overflowY: 'hidden',
              WebkitOverflowScrolling: 'touch',
              MsOverflowStyle: 'none',
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': {
                display: 'none',
              },
              '@bp1': {
                all: 'unset',
              },
            }}
          >
            <Grid
              gap={{ '@initial': 5, '@bp2': 7 }}
              flow={{ '@initial': 'column', '@bp1': 'row' }}
              justify={{ '@initial': 'start', '@bp1': 'center' }}
              css={{
                gridAutoColumns: 'calc(100vw - 100px)',
                '@bp1': { gridTemplateColumns: '1fr 1fr' },
                '@bp2': { gridTemplateColumns: '315px 315px', ml: '$5' },
                '@bp3': { mb: '$8', '& > *': { position: 'absolute', width: 315 } },
              }}
            >
              {component === 'dropdown' && (
                <>
                  <Box css={{ '@bp3': { top: '-1%', left: '27%' } }}>
                    <Flex gap="2" align="start" css={{ mb: '$1' }}>
                      <FancyCheckMark />
                      <Text
                        as="h3"
                        size="4"
                        css={{ lineHeight: 1.35, fontWeight: 500, letterSpacing: '-0.01em' }}
                      >
                        Full keyboard navigation
                      </Text>
                    </Flex>
                    <Text size="3" variant="gray" css={{ lineHeight: 1.5, ml: '$6' }}>
                      Navigate the menu using arrow keys, Escape, and Enter hotkeys, or even via
                      typeahead.
                    </Text>
                  </Box>

                  <Box css={{ '@bp3': { top: '14%', left: '60%' } }}>
                    <Flex gap="2" align="start" css={{ mb: '$1' }}>
                      <FancyCheckMark />
                      <Text
                        as="h3"
                        size="4"
                        css={{ lineHeight: 1.35, fontWeight: 500, letterSpacing: '-0.01em' }}
                      >
                        Modal and non-modal modes
                      </Text>
                    </Flex>
                    <Text size="3" variant="gray" css={{ lineHeight: 1.5, ml: '$6' }}>
                      Configure whether the dropdown menu allows or blocks outside interactions.
                    </Text>
                  </Box>

                  <Box css={{ '@bp3': { top: '40%', left: '74%' } }}>
                    <Flex gap="2" align="start" css={{ mb: '$1' }}>
                      <FancyCheckMark />
                      <Text
                        as="h3"
                        size="4"
                        css={{ lineHeight: 1.35, fontWeight: 500, letterSpacing: '-0.01em' }}
                      >
                        Supports submenus
                      </Text>
                    </Flex>
                    <Text size="3" variant="gray" css={{ lineHeight: 1.5, ml: '$6' }}>
                      Nest another level of fully functional submenus inside the drodpown menu.
                    </Text>
                  </Box>

                  <Box css={{ '@bp3': { top: '67%', left: '69%' } }}>
                    <Flex gap="2" align="start" css={{ mb: '$1' }}>
                      <FancyCheckMark />
                      <Text
                        as="h3"
                        size="4"
                        css={{ lineHeight: 1.35, fontWeight: 500, letterSpacing: '-0.01em' }}
                      >
                        Supports assistive technology
                      </Text>
                    </Flex>
                    <Text size="3" variant="gray" css={{ lineHeight: 1.5, ml: '$6' }}>
                      Implements correct semantics and behaviors, so it's accessible to people using
                      assistive technology.
                    </Text>
                  </Box>

                  <Box css={{ '@bp3': { top: '94%', left: '39%' } }}>
                    <Flex gap="2" align="start" css={{ mb: '$1' }}>
                      <FancyCheckMark />
                      <Text
                        as="h3"
                        size="4"
                        css={{ lineHeight: 1.35, fontWeight: 500, letterSpacing: '-0.01em' }}
                      >
                        Collision and origin-aware animations
                      </Text>
                    </Flex>
                    <Text size="3" variant="gray" css={{ lineHeight: 1.5, ml: '$6' }}>
                      Create open and close animations that take the dropdown menu’s actual position
                      into account.
                    </Text>
                  </Box>

                  <Box css={{ '@bp3': { top: '76%', left: '8%' } }}>
                    <Flex gap="2" align="start" css={{ mb: '$1' }}>
                      <FancyCheckMark />
                      <Text
                        as="h3"
                        size="4"
                        css={{ lineHeight: 1.35, fontWeight: 500, letterSpacing: '-0.01em' }}
                      >
                        Control alignment and collisions
                      </Text>
                    </Flex>
                    <Text size="3" variant="gray" css={{ lineHeight: 1.5, ml: '$6' }}>
                      Position the menu anywhere relative to the trigger, taking collisions with the
                      screen into account.
                    </Text>
                  </Box>

                  <Box css={{ '@bp3': { top: '49%', left: '-1%' } }}>
                    <Flex gap="2" align="start" css={{ mb: '$1' }}>
                      <FancyCheckMark />
                      <Text
                        as="h3"
                        size="4"
                        css={{ lineHeight: 1.35, fontWeight: 500, letterSpacing: '-0.01em' }}
                      >
                        Fully managed focus
                      </Text>
                    </Flex>
                    <Text size="3" variant="gray" css={{ lineHeight: 1.5, ml: '$6' }}>
                      Granularly control focus behavior when user closes the dropdown menu or
                      focuses an outside element.
                    </Text>
                  </Box>

                  <Box css={{ '@bp3': { top: '19%', left: '4%' } }}>
                    <Flex gap="2" align="start" css={{ mb: '$1' }}>
                      <FancyCheckMark />
                      <Text
                        as="h3"
                        size="4"
                        css={{ lineHeight: 1.35, fontWeight: 500, letterSpacing: '-0.01em' }}
                      >
                        Supports checkable items
                      </Text>
                    </Flex>
                    <Text size="3" variant="gray" css={{ lineHeight: 1.5, ml: '$6' }}>
                      Items can be used to perform actions, as well as act as checkbox or
                      radiobutton controls.
                    </Text>
                  </Box>
                </>
              )}

              {component === 'dialog' && (
                <>
                  <Box css={{ '@bp3': { top: '-1%', left: '29%' } }}>
                    <Flex gap="2" align="start" css={{ mb: '$1' }}>
                      <FancyCheckMark />
                      <Text
                        as="h3"
                        size="4"
                        css={{ lineHeight: 1.35, fontWeight: 500, letterSpacing: '-0.01em' }}
                      >
                        Full keyboard navigation
                      </Text>
                    </Flex>
                    <Text size="3" variant="gray" css={{ lineHeight: 1.5, ml: '$6' }}>
                      The dialog traps focus so you can navigate it with Tab key. Close the dialog
                      with Escape key.
                    </Text>
                  </Box>

                  <Box css={{ '@bp3': { top: '14%', left: '62%' } }}>
                    <Flex gap="2" align="start" css={{ mb: '$1' }}>
                      <FancyCheckMark />
                      <Text
                        as="h3"
                        size="4"
                        css={{ lineHeight: 1.35, fontWeight: 500, letterSpacing: '-0.01em' }}
                      >
                        Modal and non-modal modes
                      </Text>
                    </Flex>
                    <Text size="3" variant="gray" css={{ lineHeight: 1.5, ml: '$6' }}>
                      Configure whether the dialog allows or blocks outside interactions.
                    </Text>
                  </Box>

                  <Box css={{ '@bp3': { top: '40%', left: '76%' } }}>
                    <Flex gap="2" align="start" css={{ mb: '$1' }}>
                      <FancyCheckMark />
                      <Text
                        as="h3"
                        size="4"
                        css={{ lineHeight: 1.35, fontWeight: 500, letterSpacing: '-0.01em' }}
                      >
                        No janky scroll bugs
                      </Text>
                    </Flex>
                    <Text size="3" variant="gray" css={{ lineHeight: 1.5, ml: '$6' }}>
                      Content behind the dialog stays put while document scroll is disabled.
                    </Text>
                  </Box>

                  <Box css={{ '@bp3': { top: '67%', left: '69%' } }}>
                    <Flex gap="2" align="start" css={{ mb: '$1' }}>
                      <FancyCheckMark />
                      <Text
                        as="h3"
                        size="4"
                        css={{ lineHeight: 1.35, fontWeight: 500, letterSpacing: '-0.01em' }}
                      >
                        Supports assistive technology
                      </Text>
                    </Flex>
                    <Text size="3" variant="gray" css={{ lineHeight: 1.5, ml: '$6' }}>
                      Implements correct semantics and behaviors, so it's accessible to people using
                      assistive technology.
                    </Text>
                  </Box>

                  <Box css={{ '@bp3': { top: '94%', left: '41%' } }}>
                    <Flex gap="2" align="start" css={{ mb: '$1' }}>
                      <FancyCheckMark />
                      <Text
                        as="h3"
                        size="4"
                        css={{ lineHeight: 1.35, fontWeight: 500, letterSpacing: '-0.01em' }}
                      >
                        Easy to animate
                      </Text>
                    </Flex>
                    <Text size="3" variant="gray" css={{ lineHeight: 1.5, ml: '$6' }}>
                      Provides control over mounting behavior for managing animations with CSS or
                      animation libraries.
                    </Text>
                  </Box>

                  <Box css={{ '@bp3': { top: '76%', left: '10%' } }}>
                    <Flex gap="2" align="start" css={{ mb: '$1' }}>
                      <FancyCheckMark />
                      <Text
                        as="h3"
                        size="4"
                        css={{ lineHeight: 1.35, fontWeight: 500, letterSpacing: '-0.01em' }}
                      >
                        Nesting just works
                      </Text>
                    </Flex>
                    <Text size="3" variant="gray" css={{ lineHeight: 1.5, ml: '$6' }}>
                      No gotchas if you need to nest another dialog or a component that manages
                      focus behavior.
                    </Text>
                  </Box>

                  <Box css={{ '@bp3': { top: '49%', left: '1%' } }}>
                    <Flex gap="2" align="start" css={{ mb: '$1' }}>
                      <FancyCheckMark />
                      <Text
                        as="h3"
                        size="4"
                        css={{ lineHeight: 1.35, fontWeight: 500, letterSpacing: '-0.01em' }}
                      >
                        Fully managed focus
                      </Text>
                    </Flex>
                    <Text size="3" variant="gray" css={{ lineHeight: 1.5, ml: '$6' }}>
                      Granularly control focus behavior when user opens or closes the dialog.
                    </Text>
                  </Box>
                </>
              )}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Section>
  );
};

const FancyCheckMark = styled(CheckIcon, {
  color: '$teal11',
  backgroundColor: '$cyan4',
  padding: '$1',
  mt: -2,
  width: '$5',
  height: '$5',
  borderRadius: '$round',
  flex: 'none',
});

const Circle = ({
  size,
  color1,
  color2,
  angle = 90,
  opacity = 1,
}: {
  size: number;
  angle?: number;
  color1: string;
  color2: string;
  opacity?: number;
}) => {
  const [id] = React.useState(Math.random().toString());
  return (
    <Box
      css={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        width: size,
        height: size,
        transform: `translate(-50%, -50%) rotate(${angle}deg)`,
        opacity: opacity,
      }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%' }}
      >
        <circle
          cx="50"
          cy="50"
          r="49"
          stroke={`url(#${id})`}
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <defs>
          <linearGradient id={id} gradientUnits="userSpaceOnUse" x1="50" y1="0" x2="50" y2="100">
            <stop style={{ stopColor: color1 }} />
            <stop style={{ stopColor: color2 }} offset="1" />
          </linearGradient>
        </defs>
      </svg>
    </Box>
  );
};

const Guides8 = () => (
  <svg
    width="1100"
    height="1100"
    viewBox="0 0 1100 1100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      position: 'absolute',
      pointerEvents: 'none',
      top: '50%',
      left: '50%',
      opacity: 0.5,
      transform: 'translate(-50%, -50%) rotate(15deg)',
    }}
  >
    <line x1="25" y1="549.5" x2="1075" y2="549.5" stroke="black" />
    <line x1="549.5" y1="1075" x2="549.5" y2="25" stroke="black" />
    <line x1="921.584" y1="179.122" x2="179.122" y2="921.585" stroke="black" />
    <line x1="920.877" y1="921.585" x2="178.415" y2="179.123" stroke="black" />
    <g opacity="0.1">
      <line x1="42.7612" y1="685.397" x2="1056.98" y2="413.637" stroke="black" />
      <line x1="685.398" y1="1057.24" x2="413.638" y2="43.0184" stroke="black" />
      <line x1="812.933" y1="95.5868" x2="287.933" y2="1004.91" stroke="black" />
      <line x1="1004.41" y1="812.933" x2="95.0873" y2="287.933" stroke="black" />
    </g>
    <g opacity="0.1">
      <line x1="43.0181" y1="413.637" x2="1057.24" y2="685.397" stroke="black" />
      <line x1="413.638" y1="1056.98" x2="685.398" y2="42.7596" stroke="black" />
      <line x1="1004.91" y1="287.933" x2="95.5875" y2="812.933" stroke="black" />
      <line x1="812.067" y1="1004.91" x2="287.067" y2="95.5866" stroke="black" />
    </g>
    <circle cx="550" cy="549" r="424.5" stroke="black" />
    <circle cx="550" cy="549" r="424.5" stroke="black" />
    <circle cx="550" cy="549" r="474.5" stroke="black" />
    <circle cx="550" cy="549" r="524.5" stroke="black" />
  </svg>
);

const Guides7 = () => (
  <svg
    width="1486"
    height="1486"
    viewBox="0 0 1486 1486"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      position: 'absolute',
      pointerEvents: 'none',
      top: '50%',
      left: '50%',
      opacity: 0.5,
      transform: 'translate(-50%, -50%) rotate(15deg)',
    }}
  >
    <line x1="480.068" y1="288.587" x2="742.568" y2="743.25" stroke="black" />
    <line x1="934.403" y1="254.974" x2="742.884" y2="742.955" stroke="black" />
    <line x1="1243.96" y1="589.232" x2="743.213" y2="743.69" stroke="black" />
    <line x1="1175.63" y1="1039.66" x2="741.852" y2="743.913" stroke="black" />
    <line x1="780.869" y1="1267.07" x2="742.502" y2="743.036" stroke="black" />
    <line x1="356.941" y1="1100.22" x2="741.793" y2="743.133" stroke="black" />
    <line x1="223.073" y1="664.758" x2="742.209" y2="743.006" stroke="black" />
    <g opacity="0.1">
      <line x1="371.416" y1="372.123" x2="742.647" y2="743.354" stroke="black" />
      <line x1="801.571" y1="222.065" x2="742.877" y2="742.987" stroke="black" />
      <line x1="1187.09" y1="464.814" x2="743.385" y2="743.612" stroke="black" />
      <line x1="1237.66" y1="917.575" x2="742.127" y2="744.18" stroke="black" />
      <line x1="915.217" y1="1239.41" x2="742.528" y2="743.165" stroke="black" />
      <line x1="462.553" y1="1187.97" x2="741.87" y2="743.442" stroke="black" />
      <line x1="220.538" y1="801.992" x2="742.237" y2="743.211" stroke="black" />
    </g>
    <g opacity="0.1">
      <line x1="606.637" y1="236.019" x2="742.517" y2="743.13" stroke="black" />
      <line x1="1054.19" y1="321.143" x2="742.9" y2="742.928" stroke="black" />
      <line x1="1266.69" y1="724.13" x2="743.028" y2="743.723" stroke="black" />
      <line x1="1084.11" y1="1141.52" x2="741.655" y2="743.586" stroke="black" />
      <line x1="643.939" y1="1259.01" x2="742.508" y2="742.907" stroke="black" />
      <line x1="277.639" y1="988.134" x2="741.8" y2="742.817" stroke="black" />
      <line x1="261.04" y1="532.858" x2="742.235" y2="742.801" stroke="black" />
    </g>
    <circle cx="743" cy="743" r="424.5" transform="rotate(60 743 743)" stroke="black" />
    <circle cx="743" cy="743" r="424.5" transform="rotate(60 743 743)" stroke="black" />
    <circle cx="742.999" cy="743" r="474.5" transform="rotate(60 742.999 743)" stroke="black" />
    <circle cx="743" cy="743" r="524.5" transform="rotate(45 743 743)" stroke="black" />
  </svg>
);
