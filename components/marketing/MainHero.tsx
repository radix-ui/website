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
              With modal and non-modal modes, fine-grained focus&nbsp;control, accessible to screen
              readers.
            </Text>
          </Box>

          <Box>
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
              With submenus, checkable items, collision handling, full keyboard navigation, and
              typeahead support.
            </Text>
          </Box>

          <Box>
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
              With fine-grained focus control, collision handling, origin-aware and collision-aware
              animations.
            </Text>
          </Box>

          <Box>
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
          </Box>

          <Box>
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
              Opens when the trigger is focused or hovered, supports custom timings and positioning,
              handles collisions.
            </Text>
          </Box>
        </Grid>
      </Container>
    </Section>
  );
};
