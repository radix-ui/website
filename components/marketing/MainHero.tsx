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
} from '@modulz/design-system';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { MarketingButton } from './MarketingButton';

const IFrame = styled('iframe', {
  border: 0,
  width: 400,
  height: 400,
  overflow: 'hidden',
  borderRadius: '$3',
  mb: '$2',
});

// TODO test safari
// TODO test focus visible
// TODO check with screen reader
// TODO review section spacing
export const MainHero = () => {
  return (
    <Section>
      <Container size="3">
        <Box css={{ mb: '$6' }}>
          <Heading size="4" css={{ mb: '$5', lineHeight: '1.05 !important' }}>
            Unstyled, accessible UI components with&nbsp;incredible developer experience
          </Heading>
          <Box css={{ maxWidth: 660, mb: '$4' }}>
            <Paragraph size="2" as="p">
              Radix Primitives is an open-source UI component library for building high-quality,
              accessible design systems and web apps in React.
            </Paragraph>
          </Box>
          <Flex justify={{ '@initial': 'start' }} gap="5">
            <NextLink href="/primitives/overview/getting-started" passHref>
              <MarketingButton as="a" gap="1">
                Install Primitives
                <ArrowRightIcon />
              </MarketingButton>
            </NextLink>
          </Flex>
        </Box>
        <Grid gap="5" css={{ gridAutoFlow: 'column' }}>
          <Box>
            <IFrame
              tabIndex={-1}
              allowTransparency={true}
              src="/primitives/iframe/dialog"
              css={{ background: 'linear-gradient(to bottom right, $indigo4, $violet5)' }}
            />
            <Text size="4" css={{ fontWeight: 500, lineHeight: '20px', mb: '$1' }}>
              Dialog
            </Text>
            <Text size="3" variant="gray" css={{ lineHeight: '23px' }}>
              With modal and non-modal modes, fine-grained focus&nbsp;control, accessible to screen
              readers.
            </Text>
          </Box>

          <Box>
            <IFrame
              tabIndex={-1}
              allowTransparency={true}
              src="/primitives/iframe/dropdown-menu"
              css={{ background: 'linear-gradient(to bottom right,  $crimson4, $blue5)' }}
            />
            <Text size="4" css={{ fontWeight: 500, lineHeight: '20px', mb: '$1' }}>
              Dropdown Menu
            </Text>
            <Text size="3" variant="gray" css={{ lineHeight: '23px' }}>
              With submenus, checkable items, collision handling, full keyboard navigation, and
              typeahead support.
            </Text>
          </Box>

          <Box>
            <IFrame
              tabIndex={-1}
              allowTransparency={true}
              src="/primitives/iframe/popover"
              css={{ background: 'linear-gradient(to bottom right, $lime3, $cyan5)' }}
            />
            <Text size="4" css={{ fontWeight: 500, lineHeight: '20px', mb: '$1' }}>
              Popover
            </Text>
            <Text size="3" variant="gray" css={{ lineHeight: '23px' }}>
              With fine-grained focus control, collision handling, origin-aware and collision-aware
              animations.
            </Text>
          </Box>

          <Box>
            <IFrame
              tabIndex={-1}
              allowTransparency={true}
              src="/primitives/iframe/slider"
              css={{ background: 'linear-gradient(120deg, $gray3, $sky4)' }}
            />
            <Text size="4" css={{ fontWeight: 500, lineHeight: '20px', mb: '$1' }}>
              Slider
            </Text>
            <Text size="3" variant="gray" css={{ lineHeight: '23px' }}>
              Supports keyboard and touch input, step interval, multiple thumbs for value ranges,
              and RTL direction.
            </Text>
          </Box>

          <Box>
            <IFrame
              tabIndex={-1}
              allowTransparency={true}
              src="/primitives/iframe/dialog"
              css={{ background: 'linear-gradient(to bottom right, $indigo4, $violet5)' }}
            />
            <Text size="4" css={{ fontWeight: 500, lineHeight: '20px', mb: '$1' }}>
              Tooltip
            </Text>
            <Text size="3" variant="gray" css={{ lineHeight: '23px' }}>
              Opens when the trigger is focused or hovered, supports custom timings and positioning,
              handles collisions.
            </Text>
          </Box>
        </Grid>
      </Container>
    </Section>
  );
};
