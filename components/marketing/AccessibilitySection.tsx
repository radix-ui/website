import { Box, Card, Flex, Grid, Heading, Text, keyframes, styled } from '@modulz/design-system';
import { Container, Section } from '@radix-ui/themes';
import {
  CaretDownIcon,
  CaretLeftIcon,
  CheckCircledIcon,
  CheckIcon,
  CodeIcon,
  EyeClosedIcon,
  InputIcon,
} from '@radix-ui/react-icons';
import React from 'react';
import { MarketingCaption } from './MarketingCaption';

type SequenceType = 'screenReader' | 'keyboardNavigation' | 'typeahead' | 'rtl';
type MockDropdownState =
  | 'closed'
  | 'item1'
  | 'item2'
  | 'item3'
  | 'item4'
  | 'item1-submenu'
  | 'item2-submenu'
  | 'item3-submenu';

type AnimationKeyframe = {
  key?: string;
  typeahead?: string;
  dropdown: MockDropdownState;
  duration: number;
};

// Note that for all animations the first keyframe is skipped on the second and subsequent
// iterations so that how animation ends is easy to connect with how it starts.

const animations: Record<SequenceType, AnimationKeyframe[]> = {
  screenReader: [
    {
      dropdown: 'item1',
      duration: 3000,
    },
    {
      dropdown: 'item2',
      duration: 1200,
    },
    {
      dropdown: 'item3',
      duration: 1200,
    },
    {
      dropdown: 'item4',
      duration: 1200,
    },
    {
      dropdown: 'item1',
      duration: 2000,
    },
  ],
  keyboardNavigation: [
    {
      key: '',
      dropdown: 'item1',
      duration: 2400,
    },
    {
      key: 'down',
      dropdown: 'item2',
      duration: 400,
    },
    {
      key: 'down',
      dropdown: 'item3',
      duration: 400,
    },
    {
      key: 'down',
      dropdown: 'item4',
      duration: 1200,
    },
    {
      key: 'up',
      dropdown: 'item3',
      duration: 400,
    },
    {
      key: 'up',
      dropdown: 'item2',
      duration: 1200,
    },
    {
      key: 'return',
      dropdown: 'closed',
      duration: 2000,
    },
    {
      key: 'return',
      dropdown: 'item1',
      duration: 2000,
    },
  ],
  typeahead: [
    {
      key: '',
      typeahead: '',
      dropdown: 'item1',
      duration: 2400,
    },
    {
      key: 'g',
      typeahead: 'g',
      dropdown: 'item2',
      duration: 700,
    },
    {
      key: 'o',
      typeahead: 'go',
      dropdown: 'item2',
      duration: 180,
    },
    {
      key: ' ',
      typeahead: 'go ',
      dropdown: 'item2',
      duration: 300,
    },
    {
      key: 't',
      typeahead: 'go t',
      dropdown: 'item2',
      duration: 180,
    },
    {
      key: 'o',
      typeahead: 'go to',
      dropdown: 'item2',
      duration: 180,
    },
    {
      key: ' ',
      typeahead: 'go to ',
      dropdown: 'item2',
      duration: 300,
    },
    {
      key: 'r',
      typeahead: 'go to r',
      dropdown: 'item4',
      duration: 1600,
    },
    {
      key: 's',
      typeahead: 's',
      dropdown: 'item1',
      duration: 180,
    },
    {
      key: 'h',
      typeahead: 'sh',
      dropdown: 'item1',
      duration: 180,
    },
    {
      key: 'o',
      typeahead: 'sho',
      dropdown: 'item1',
      duration: 180,
    },
    {
      key: 'w',
      typeahead: 'show',
      dropdown: 'item1',
      duration: 2400,
    },
  ],

  rtl: [
    {
      key: '',
      dropdown: 'item1',
      duration: 2400,
    },
    {
      key: 'left',
      dropdown: 'item1-submenu',
      duration: 1200,
    },
    {
      key: 'right',
      dropdown: 'item1',
      duration: 400,
    },
    {
      key: 'down',
      dropdown: 'item2',
      duration: 400,
    },
    {
      key: 'left',
      dropdown: 'item2-submenu',
      duration: 1200,
    },
    {
      key: 'right',
      dropdown: 'item2',
      duration: 400,
    },
    {
      key: 'down',
      dropdown: 'item3',
      duration: 400,
    },
    {
      key: 'left',
      dropdown: 'item3-submenu',
      duration: 1200,
    },
    {
      key: 'right',
      dropdown: 'item3',
      duration: 400,
    },
    {
      key: 'down',
      dropdown: 'item4',
      duration: 800,
    },
    {
      key: 'down',
      dropdown: 'item1',
      duration: 1200,
    },
  ],
};

export const AccessibilitySection = () => {
  const keyframeRef = React.useRef(0);
  const iterationRef = React.useRef(0);
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout>>();
  const containerRef = React.useRef<HTMLDivElement>(null);
  const intersectingRef = React.useRef(false);
  const playKeypressAnimation = React.useRef(true);
  const [keyframe, setKeyframe] = React.useState(0);
  const [isIntersecting, setIsIntersecting] = React.useState(false);
  const [currentSequence, setCurrentSequence] = React.useState<SequenceType>('screenReader');

  // Fancy function to update the animation state when changing sequence.
  // When user changes sequence, we attempt to pick the new keyframe intelligently
  // so that the animation feels continious, rather than starts from scratch.
  const updateSequence = React.useCallback(
    (newSequence: SequenceType) => {
      if (currentSequence !== newSequence) {
        let desiredDropdownState =
          animations[currentSequence][keyframeRef.current]?.dropdown ?? 'item1';

        // If current sequence is the RTL animation, it might include the submenu state.
        // We need to pick nth dropdown item without the submenu as other animations don't have it.
        if (desiredDropdownState.includes('submenu')) {
          const length = '-submenu'.length * -1;
          desiredDropdownState = desiredDropdownState.slice(0, length) as MockDropdownState;
        }

        let keyframeWithSimilarDropdownState = animations[newSequence].findIndex(
          ({ dropdown }) => dropdown === desiredDropdownState
        );
        const newKeyframe = Math.max(0, keyframeWithSimilarDropdownState);

        // Update all animation state pieces
        keyframeRef.current = newKeyframe;
        setKeyframe(newKeyframe);
        setCurrentSequence(newSequence);
        playKeypressAnimation.current = false;
      }
    },
    [currentSequence, setKeyframe, setCurrentSequence]
  );

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Intersection flag is disabled once less than 10% of the container is visible in the viewport,
        // and enabled once more than 90% of the container is visible in the viewport. Alternatively,
        // it's considered intersecting if the container takes up at least 70% of the viewport height.
        const almostCoversViewport = entry.intersectionRect.height / entry.rootBounds.height > 0.7;
        const newIsIntersecting =
          entry.intersectionRatio > (intersectingRef.current ? 0.1 : 0.9) || almostCoversViewport;

        if (newIsIntersecting !== intersectingRef.current) {
          if (newIsIntersecting === false) {
            iterationRef.current = 0;
            keyframeRef.current = 0;
            clearTimeout(timeoutRef.current);
            setKeyframe(0);
          }

          intersectingRef.current = newIsIntersecting;
          setIsIntersecting(newIsIntersecting);
        }
      },
      { threshold: [0.1, 0.3, 0.5, 0.7, 0.9] }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    clearTimeout(timeoutRef.current);

    const updateKeyframe = () => {
      // Increment keyframe counter, or loop from 1st when last keyframe is reached
      keyframeRef.current =
        keyframeRef.current < animations[currentSequence].length - 1 ? keyframeRef.current + 1 : 1;

      // Increment iteration counter when starting keyframe is reached
      if (keyframeRef.current === 0) {
        iterationRef.current++;
      }

      clearTimeout(timeoutRef.current);
      setKeyframe(keyframeRef.current);

      // If visible in the viewport request animation frame when next keyframe is due
      if (intersectingRef.current) {
        timeoutRef.current = setTimeout(
          () => requestAnimationFrame(() => updateKeyframe()),
          animations[currentSequence][keyframeRef.current].duration
        );
      }
    };

    // Start the animation in 1s once the container is visible in the viewport
    if (isIntersecting) {
      timeoutRef.current = setTimeout(() => requestAnimationFrame(() => updateKeyframe()), 1000);
      playKeypressAnimation.current = true;
    }

    return () => clearTimeout(timeoutRef.current);
  }, [currentSequence, isIntersecting]);

  return (
    <Section
      size={{ initial: '2', md: '3' }}
      style={{
        background: 'linear-gradient(to bottom, $mauve2, $loContrast)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        css={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 500,
          height: 1200,
          bottom: -200,
          '@bp1': {
            width: 1550,
            height: 680,
            bottom: -300,
          },
        }}
      >
        <Box
          css={{
            position: 'absolute',
            border: '10px solid $colors$greenA3',
            transform: 'rotate(-15deg)',
            width: 320,
            height: 320,
            top: 0,
            left: 50,
            '@bp1': {
              width: 520,
              height: 520,
              top: 0,
              left: 55,
            },
          }}
        />
        <Triangle
          css={{
            color: '$blueA3',
            position: 'absolute',
            transform: 'rotate(10deg)',
            width: 420,
            left: 100,
            top: 300,
            '@bp1': {
              transform: 'rotate(135deg)',
              width: 674,
              left: 535,
              top: 65,
            },
          }}
        />
        <Box
          css={{
            position: 'absolute',
            br: '$round',
            border: '10px solid $colors$tomatoA3',
            top: 700,
            left: 0,
            width: 400,
            height: 400,
            '@bp1': {
              top: -55,
              left: 935,
              width: 610,
              height: 610,
            },
          }}
        />
      </Box>

      <Container mx="5" position="relative">
        <Box css={{ mb: '$5' }}>
          <MarketingCaption mb="1">Supports assistive technology</MarketingCaption>
          <Heading as="h2" size="3">
            Accessibility out of the box
          </Heading>
        </Box>

        <Box
          ref={containerRef}
          css={{
            bc: '$mauveA3',
            mb: '$5',
            boxShadow: '0 0 1px var(--gray-a9)',
            backdropFilter: 'blur(8px)',

            // Horizontal spacing is really tight on iPhone SE
            p: 1,
            br: '$3',
            '@media (min-width: 365px)': {
              p: '$3',
              br: '$4',
            },
            '@bp1': {
              p: '$5',
            },
          }}
        >
          <Grid
            css={{
              width: '100%',
              height: '100%',
              br: '$3',
              overflow: 'hidden',
              bc: '$mauve1',
              gridTemplateRows: 'auto',
              gridAutoRows: '270px',
              '& > *:nth-child(2)': {
                boxShadow: '0 1px var(--gray-a4)',
              },
              '@media (min-width: 620px)': {
                gridTemplateColumns: 'repeat(2, minmax(min-content, 1fr))',
                '& > *:nth-child(2)': {
                  boxShadow: '1px 0 var(--gray-a4)',
                },
              },
              '@bp2': {
                gridTemplateRows: '270px',
                gridTemplateColumns: 'repeat(3, minmax(min-content, 1fr))',
                '& > *:nth-child(2)': {
                  boxShadow: '1px 0 var(--gray-a4), -1px 0 var(--gray-a4)',
                },
              },
              '& > *': {
                gridTemplateRows: 'auto 1fr',
                gap: '$1',
              },

              $$subpanel: 'transparent',
              '.dark-theme &': {
                $$subpanel: 'var(--mauve-a2)',
              },
            }}
          >
            <Flex
              align="center"
              justify="center"
              css={{
                py: '$5',
                bc: '$grayA1',
                gridColumn: '1 / -1',
                boxShadow: '0 1px var(--gray-a4)',
                '@bp2': {
                  boxShadow: 'none',
                  gridColumn: '1 / 2',
                },
              }}
            >
              <Flex direction="column" align="start">
                <AnimationStateButton
                  active={currentSequence === 'screenReader'}
                  onClick={() => updateSequence('screenReader')}
                >
                  Screen reader support
                </AnimationStateButton>
                <AnimationStateButton
                  active={currentSequence === 'typeahead'}
                  onClick={() => updateSequence('typeahead')}
                >
                  Typeahead support
                </AnimationStateButton>
                <AnimationStateButton
                  active={currentSequence === 'keyboardNavigation'}
                  onClick={() => updateSequence('keyboardNavigation')}
                >
                  Keyboard navigation
                </AnimationStateButton>
                <AnimationStateButton
                  active={currentSequence === 'rtl'}
                  onClick={() => updateSequence('rtl')}
                >
                  RTL support
                </AnimationStateButton>
              </Flex>
            </Flex>

            {(currentSequence === 'typeahead' ||
              currentSequence === 'keyboardNavigation' ||
              currentSequence === 'rtl') && (
              <Grid css={{ overflow: 'hidden', py: '$3', bc: '$$subpanel' }} role="presentation">
                <Flex
                  align="center"
                  gap="1"
                  css={{ color: '$slate11', px: '$3', position: 'relative' }}
                >
                  <Text variant="gray" size="2">
                    Keyboard input
                  </Text>
                  <KeyboardIcon />

                  {currentSequence === 'typeahead' && (
                    <MockTypeaheadOutput css={{ position: 'absolute', top: -4, right: '$3' }}>
                      {animations[currentSequence][keyframe]?.typeahead}
                    </MockTypeaheadOutput>
                  )}
                </Flex>
                {(currentSequence === 'keyboardNavigation' || currentSequence === 'rtl') && (
                  // 1. React's key prop is needed so that the mock keyboards animates correctly on repeat key press.
                  // 2. We don't animate the key when switching sequence to avoid unneeded motion
                  <Flex
                    align="center"
                    justify="end"
                    css={{ minWidth: 0, mr: '$3', '@bp3': { mr: '$5' } }}
                  >
                    <MockArrowKeyboard
                      key={keyframe}
                      currentKey={
                        playKeypressAnimation.current && animations[currentSequence][keyframe]?.key
                      }
                    />
                  </Flex>
                )}
                {currentSequence === 'typeahead' && (
                  <Flex align="center" justify="center" css={{ '@bp1': { px: '$3' } }}>
                    <MockQwertyKeyboard
                      key={keyframe}
                      currentKey={
                        playKeypressAnimation.current && animations[currentSequence][keyframe]?.key
                      }
                    />
                  </Flex>
                )}
              </Grid>
            )}

            {currentSequence === 'screenReader' && (
              <Grid css={{ py: '$3', bc: '$$subpanel' }} role="presentation">
                <Flex align="center" gap="1" css={{ color: '$slate11', px: '$3' }}>
                  <Text variant="gray" size="2">
                    Screen reader
                  </Text>
                  <AccessibilityIcon />
                </Flex>
                <Flex
                  direction="column"
                  justify="between"
                  css={{ pt: '$3', px: '$3', minHeight: 180 }}
                >
                  <MockScreenReader>
                    <ScreenReaderOutput
                      dropdownState={animations[currentSequence][keyframe]?.dropdown}
                    />
                  </MockScreenReader>
                  <SpeakerIcon />
                </Flex>
              </Grid>
            )}

            <Grid css={{ py: '$3', bc: '$$subpanel' }} role="presentation">
              <Flex align="center" gap="1" css={{ color: '$slate11', px: '$3' }}>
                <Text variant="gray" size="2">
                  Radix component
                </Text>
                <CodeIcon />
              </Flex>
              <Flex align="center" justify="center" css={{ px: '$3' }}>
                {currentSequence !== 'rtl' && (
                  <MockDropdown state={animations[currentSequence][keyframe]?.dropdown} />
                )}
                {currentSequence === 'rtl' && (
                  <MockRtlDropdown state={animations[currentSequence][keyframe]?.dropdown} />
                )}
              </Flex>
            </Grid>
          </Grid>
        </Box>

        <Grid columns={{ '@initial': 1, '@bp1': 2, '@bp2': 4 }} gap="3">
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
  if (dropdownState === 'item3') {
    return (
      <span>
        Go to Definition, <span style={{ whiteSpace: 'nowrap' }}>menu item</span>
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
  bc: 'var(--mauve-a5)',
});

const MockDropdown = ({ state }: { state?: MockDropdownState }) => {
  return (
    <Box css={{ mt: '$1' }}>
      <MockDropdownButton focused={state === 'closed'}>
        Navigation <CaretDownIcon style={{ marginRight: -5 }} />
      </MockDropdownButton>
      <MockDropdownContent animated open={state !== 'closed'}>
        <MockDropdownCheckboxItem indent="1" checked focused={state === 'item1'}>
          Show Minimap
        </MockDropdownCheckboxItem>
        <MockDropdownSeparator />
        <MockDropdownItem indent="1" focused={state === 'item2'}>
          Go to Symbol
        </MockDropdownItem>
        <MockDropdownItem indent="1" focused={state === 'item3'}>
          Go to Definition
        </MockDropdownItem>
        <MockDropdownItem indent="1" focused={state === 'item4'}>
          Go to References
        </MockDropdownItem>
      </MockDropdownContent>
    </Box>
  );
};

const MockRtlDropdown = ({ state }: { state?: MockDropdownState }) => {
  return (
    <Box css={{ mt: '$1', direction: 'rtl' }}>
      <MockDropdownButton focused={state === 'closed'}>
        التنسيق
        <CaretDownIcon style={{ marginLeft: -5 }} />
      </MockDropdownButton>
      <Box css={{ position: 'relative' }}>
        <MockDropdownContent animated open={state !== 'closed'}>
          <MockDropdownItem focused={state === 'item1'} focusWithin={state === 'item1-submenu'}>
            المحاذاة
            <CaretLeftIcon style={{ marginLeft: -5, marginRight: 10 }} />
          </MockDropdownItem>
          <MockDropdownItem focused={state === 'item2'} focusWithin={state === 'item2-submenu'}>
            الخط
            <CaretLeftIcon style={{ marginLeft: -5, marginRight: 10 }} />
          </MockDropdownItem>
          <MockDropdownItem focused={state === 'item3'} focusWithin={state === 'item3-submenu'}>
            المسافة البادئة
            <CaretLeftIcon style={{ marginLeft: -5, marginRight: 10 }} />
          </MockDropdownItem>
          <MockDropdownSeparator css={{ ml: 10 }} />
          <MockDropdownItem focused={state === 'item4'}>أعاد للوضع السابق</MockDropdownItem>
        </MockDropdownContent>

        <MockDropdownContent
          open={state === 'item1-submenu'}
          css={{ position: 'absolute', top: 0, left: 0, transform: 'translateX(-100%)' }}
        >
          <MockDropdownItem focused={state === 'item1-submenu'}>يسار</MockDropdownItem>
          <MockDropdownItem>يمين</MockDropdownItem>
          <MockDropdownItem>وسط</MockDropdownItem>
        </MockDropdownContent>

        <MockDropdownContent
          open={state === 'item2-submenu'}
          css={{
            position: 'absolute',
            top: '$$itemHeight',
            left: 0,
            transform: 'translateX(-100%)',
          }}
        >
          <MockDropdownItem focused={state === 'item2-submenu'}>عريض</MockDropdownItem>
          <MockDropdownItem>مائل</MockDropdownItem>
          <MockDropdownItem>مسطّر</MockDropdownItem>
        </MockDropdownContent>

        <MockDropdownContent
          open={state === 'item3-submenu'}
          css={{
            position: 'absolute',
            top: 'calc($$itemHeight * 2)',
            left: 0,
            transform: 'translateX(-100%)',
          }}
        >
          <MockDropdownItem focused={state === 'item3-submenu'}>زيادة</MockDropdownItem>
          <MockDropdownItem>تقليل</MockDropdownItem>
        </MockDropdownContent>
      </Box>
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
        filter: 'saturate(0.5)',
        backgroundImage: 'linear-gradient(to bottom right, var(--blue-11), var(--gray-12))',
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
  border: '1px solid var(--blue-a6)',
  lineHeight: '18px',
  whiteSpace: 'pre',
  '&:empty': {
    display: 'none',
  },
  '.dark-theme &': {
    bc: '$indigo3',
  },
  variants: {
    size: {}, // Including as a workaround for TS bugs with defaultVariants
    variant: {
      contrast: {
        color: '$indigo12',
        '.dark-theme &': {
          color: '$indigo11',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'contrast',
    size: '2',
  },
});

const MockQwertyKeyboard = ({ currentKey }: { currentKey?: string }) => {
  return (
    <Flex direction="column" align="center" gap="2">
      <Flex gap="1" justify="start">
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
      </Flex>
      <Flex gap="1" justify="start">
        <Key pressed={currentKey === 'a'}>A</Key>
        <Key pressed={currentKey === 's'}>S</Key>
        <Key pressed={currentKey === 'd'}>D</Key>
        <Key pressed={currentKey === 'f'}>F</Key>
        <Key pressed={currentKey === 'g'}>G</Key>
        <Key pressed={currentKey === 'h'}>H</Key>
        <Key pressed={currentKey === 'j'}>J</Key>
        <Key pressed={currentKey === 'k'}>K</Key>
        <Key pressed={currentKey === 'l'}>L</Key>
      </Flex>
      <Flex gap="1" justify="start">
        <Key pressed={currentKey === 'z'}>Z</Key>
        <Key pressed={currentKey === 'x'}>X</Key>
        <Key pressed={currentKey === 'c'}>C</Key>
        <Key pressed={currentKey === 'v'}>V</Key>
        <Key pressed={currentKey === 'b'}>B</Key>
        <Key pressed={currentKey === 'n'}>N</Key>
        <Key pressed={currentKey === 'm'}>M</Key>
      </Flex>
      <Key pressed={currentKey === ' '} css={{ width: 150 }} />
    </Flex>
  );
};

const MockArrowKeyboard = ({ currentKey }: { currentKey?: string }) => {
  return (
    <Flex direction="column" align="end" css={{ gap: 7 }}>
      <Flex justify="start" css={{ gap: 6 }}>
        <Key size="2" />
        <Key size="2" />
        <Key size="2" />
        <Key size="2" />
        <Key size="2" />
        <Key size="2" />
        <Key size="2" />
        <Key size="2" />
        <Key size="2" />
        <Key
          size="2"
          pressed={currentKey === 'return'}
          css={{ width: 80, ai: 'flex-end', jc: 'flex-end' }}
        >
          return
        </Key>
      </Flex>
      <Flex justify="start" css={{ gap: 6 }}>
        <Key size="2" />
        <Key size="2" />
        <Key size="2" />
        <Key size="2" />
        <Key size="2" />
        <Key size="2" />
        <Key size="2" />
        <Key size="2" css={{ width: 102 }} />
      </Flex>
      <Flex justify="start" css={{ gap: 6 }}>
        <Key size="2" css={{ width: 252 }} />
        <Key size="2" css={{ width: 54 }} />
        <Key size="2" />
        <Grid
          css={{
            rowGap: 2,
            columnGap: 6,
            gridTemplateRows: '20px 20px',
            gridTemplateColumns: 'repeat(3, 42px)',
          }}
        >
          <div />
          <Key size="2" pressed={currentKey === 'up'} css={{ bblr: '$1', bbrr: '$1' }}>
            <Box css={{ fontSize: '75%', opacity: 0.8, mb: 1 }}>▲</Box>
          </Key>
          <div />
          <Key size="2" pressed={currentKey === 'left'}>
            <Box css={{ fontSize: '75%', opacity: 0.8, mb: 1 }}>◀</Box>
          </Key>
          <Key size="2" pressed={currentKey === 'down'} css={{ btlr: '$1', btrr: '$1' }}>
            <Box css={{ fontSize: '75%', opacity: 0.8, mb: 1 }}>▼</Box>
          </Key>
          <Key size="2" pressed={currentKey === 'right'}>
            <Box css={{ fontSize: '75%', opacity: 0.8, mb: 1 }}>▶</Box>
          </Key>
        </Grid>
      </Flex>
    </Flex>
  );
};

const keyPressAnimation = keyframes({
  from: {
    bc: '$slate5',
    boxShadow: '0 0 0 1px var(--gray-5)',
  },
});

const Key = styled('span', {
  display: 'flex',
  bc: '$mauve1',
  fontFamily: '$untitled',
  color: '$slate11',
  boxShadow: '0 0 0 1px var(--mauve-a6), 0 2px var(--mauve-a6)',
  userSelect: 'none',
  flex: 'none',
  maxWidth: '100%',
  maxHeight: '100%',
  ai: 'center',
  jc: 'center',

  '.dark-theme &': {
    bc: '$mauve1',
  },

  variants: {
    pressed: {
      true: {
        animation: `${keyPressAnimation} 120ms`,
        animationTimingFunction: 'steps(1, end)',
      },
    },
    size: {
      1: {
        width: 21,
        height: 32,
        br: '$1',
        lineHeight: '30px',
        fontSize: '$3',

        '@bp3': {
          width: 27,
          height: 34,
          br: '$2',
          lineHeight: '34px',
          fontSize: '$3',
        },
      },
      2: {
        p: '$1',
        width: 42,
        height: 42,
        br: '$2',
        fontSize: '$1',
        '.dark-theme &': {
          color: '$slate12',
          textShadow: '0 0 5px var(--gray-a10), 0 0 1px var(--gray-a11)',
        },
      },
    },
  },

  defaultVariants: {
    size: 1,
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
  color: 'var(--gray-12)',
  bc: '$loContrast',
  fontFamily: '$untitled',
  fontSize: '$2',
  userSelect: 'none',
  transitionDuration: '150ms',
  transitionProperty: 'box-shadow',
  variants: {
    focused: {
      true: {
        boxShadow: 'inset 0 0 0 1px var(--blue-a8), 0 0 0 1px var(--blue-a8)',
        transition: 'none',
      },
      false: {
        boxShadow: 'inset 0 0 0 1px var(--gray-5), 0 0 0 3px #FFFFFF00',
        bc: '$mauve1',
      },
    },
  },
});

const MockDropdownContent = styled(Box, {
  $$itemHeight: '30px',

  p: '$1',
  br: '$2',
  bc: '$panel',
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
    animated: {
      true: {
        willChange: 'transform, opacity',
        transformOrigin: 'top center',
        transitionDuration: '150ms',
        transitionProperty: 'transform, opacity',
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
  height: '$$itemHeight',
  lineHeight: '$$itemHeight',
  position: 'relative',
  color: 'var(--gray-12)',
  br: 5,

  variants: {
    indent: {
      0: {
        px: 10,
      },
      1: {
        px: 30,
      },
    },
    focused: {
      true: {
        backgroundColor: 'var(--color-text)',
        color: 'var(--color-background)',
      },
    },
    focusWithin: {
      true: {
        backgroundColor: 'var(--gray-a4)',
      },
    },
  },

  defaultVariants: {
    indent: 0,
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
  bc: 'var(--white-a9)',
  backdropFilter: 'blur(8px)',
  '.dark-theme &': {
    bc: 'var(--white-a2)',
    boxShadow: 'inset 0 0 0 1px var(--white-a4)',
  },
});

const Triangle = (props: React.ComponentProps<typeof Box>) => (
  <Box {...props}>
    <svg
      viewBox="0 0 674 584"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%' }}
    >
      <path
        d="M9.64854 578.265L337.465 10.47L665.282 578.265H9.64854Z"
        vectorEffect="non-scaling-stroke"
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
  animating?: boolean;
};

const SpeakerIcon = ({ animating = true }: SpeakerIconProps) => {
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
    animation: `1600ms ${wave1} linear infinite`,
  },
  '.speaker-line-2': {
    opacity: 0,
    animation: `1600ms ${wave2} linear infinite`,
  },
  '.speaker-line-3': {
    opacity: 0,
    animation: `1600ms ${wave3} linear infinite`,
  },

  variants: {
    animating: {
      false: {
        '&& path': {
          animationPlayState: 'paused',
        },
      },
    },
  },
});

const AnimationStateButton = styled('button', {
  all: 'unset',
  alignItems: 'center',
  boxSizing: 'border-box',
  display: 'inline-flex',
  flexShrink: 0,
  justifyContent: 'center',
  WebkitTapHighlightColor: 'transparent',

  fontSize: '$4',
  fontFamily: 'inherit',
  fontWeight: 500,
  lineHeight: 1,
  letterSpacing: '-0.015em',
  height: '$6',
  px: '$2',
  position: 'relative',
  br: '$2',

  '&:focus-visible': {
    boxShadow: '0 0 0 2px var(--blue-a8)',
  },

  variants: {
    active: {
      true: {
        boxShadow: 'inset 0 0 0 1px var(--blue-a6)',
        color: 'var(--gray-12)',
        backgroundColor: 'var(--blue-a4)',
        cursor: 'default',
      },
      false: {
        color: 'var(--gray-a9)',
        '@hover': {
          '&:hover': {
            color: 'var(--gray-12)',
          },
        },
      },
    },
  },

  defaultVariants: {
    active: false,
  },
});
