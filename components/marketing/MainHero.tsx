import React from 'react';
import NextLink from 'next/link';
import {
  Box,
  Grid,
  Text,
  styled,
  keyframes,
  Container,
  Flex,
  Heading,
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
  width: 400,
  height: 400,
  overflow: 'hidden',
  borderRadius: '$3',

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
    <Section css={{ position: 'relative' }}>
      <Background />
      <Container size="3">
        <Box css={{ mb: '$6' }}>
          <Text
            as="h1"
            css={{
              fontSize: '80px',
              fontWeight: 500,
              lineHeight: '0.85 !important',
              letterSpacing: '-0.07em',
              mb: '$5',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              backgroundImage: 'radial-gradient(circle, $hiContrast, $colors$indigo12)',
              pb: '0.1em', // Otherwise some descenders may be clipped with WebkitBackgroundClip: 'text'
            }}
          >
            Don’t waste
            <br />
            time reinventing
            <br />
            UI components.
          </Text>
          <Box css={{ maxWidth: 580, mb: '$4' }}>
            <Paragraph size="2" as="p">
              Radix Primitives is an accessible component library for building high‑quality design
              systems and web apps in React.
            </Paragraph>
          </Box>
          <Flex justify={{ '@initial': 'start' }} gap="5">
            <NextLink href="/primitives/docs/overview/getting-started" passHref>
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
                visible={iFramesReady}
                tabIndex={-1}
                src="/primitives/iframe/dialog"
                css={{ background: 'linear-gradient(to bottom right, $indigo4, $violet5)' }}
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
                visible={iFramesReady}
                tabIndex={-1}
                src="/primitives/iframe/dropdown-menu"
                css={{ background: 'linear-gradient(to bottom right,  $crimson4, $blue5)' }}
              />
            </IFrameSkeleton>
            <Text as="h3" size="3" css={{ fontWeight: 500, lineHeight: '25px' }}>
              Dropdown Menu
            </Text>
            <Text as="p" size="3" variant="gray" css={{ lineHeight: '23px' }}>
              With submenus, checkable items, collision handling, full keyboard navigation, and
              typeahead support.
            </Text>
          </Box>

          <Box>
            <IFrameSkeleton active={!iFramesReady}>
              <IFrame
                visible={iFramesReady}
                tabIndex={-1}
                src="/primitives/iframe/popover"
                css={{ background: 'linear-gradient(to bottom right, $lime3, $cyan5)' }}
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
                visible={iFramesReady}
                tabIndex={-1}
                src="/primitives/iframe/slider"
                css={{ background: 'linear-gradient(120deg, $gray3, $sky4)' }}
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
                visible={iFramesReady}
                tabIndex={-1}
                src="/primitives/iframe/dialog"
                css={{ background: 'linear-gradient(to bottom right, $indigo4, $violet5)' }}
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

const Background = () => {
  return (
    <Box
      css={{
        position: 'absolute',
        top: '-$7',
        bottom: 0,
        left: 0,
        right: 0,
        bc: '$slate1',
        zIndex: -1,
        overflow: 'hidden',
      }}
    >
      <Box
        css={{
          width: '100vw',
        minWidth: 1500,
        left: '50%',
        transform: 'translateX(-50%)',
          position: 'absolute',
        top: 0,
        bottom: 0,
      }}
    >
      <Box
        css={{
          position: 'absolute',
          top: -800,
          left: -300,
          backgroundImage: 'radial-gradient(circle, white, #FBFCFD00 70%)',
          width: 2000,
          height: 2000,
        }}
      />
      <Box
        css={{
          position: 'absolute',
          top: -800,
          right: -500,
          backgroundImage: 'radial-gradient(circle, $mint3, #FBFCFD00 70%)',
          width: 1500,
          height: 1500,
        }}
      />
      <Box
        css={{
          position: 'absolute',
          top: -200,
          right: -1000,
          backgroundImage: 'radial-gradient(circle, $sky2, #FBFCFD00 70%)',
          width: 1500,
          height: 1500,
        }}
      />
      <Box
        css={{
          position: 'absolute',
          top: 500,
          left: 'calc(50% - 1000px)',
          backgroundImage: 'radial-gradient(circle, $pink3, #FBFCFD00 70%)',
          width: 1200,
          height: 1200,
        }}
      />
      </Box>
    </Box>
  );
};
