// @refresh reset
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
} from '@modulz/design-system';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { MarketingButton } from './MarketingButton';

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
    tooltip: 'loading',
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
        <Grid gap="5" css={{ gridAutoFlow: 'column' }}>
          <Box>
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
              With modal and non-modal modes, fine-grained focus&nbsp;control, accessible to screen
              readers.
            </Text>
          </Box>
          <Box>
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
          </Box>
          <Box>
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
              With fine-grained focus control, collision handling, origin-aware and collision-aware
              animations.
            </Text>
          </Box>
          <Box>
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
          </Box>
          <Box>
            <IFrameSkeleton active={!allDemosReady}>
              <IFrame
                data-demo-iframe
                visible={allDemosReady}
                tabIndex={-1}
                src="/iframe/tooltip"
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
              Opens when the trigger is focused or hovered, supports custom timings and positioning,
              handles collisions.
            </Text>
          </Box>
        </Grid>
      </Container>
    </Section>
  );
};
