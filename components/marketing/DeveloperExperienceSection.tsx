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
  Separator,
} from '@modulz/design-system';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { MarketingCaption } from './MarketingCaption';
import { MarketingButton } from './MarketingButton';
import { CodeDemo } from './CodeDemo';

enum Highlights {
  Unstyled = '1-20',
  Composable = '22-34',
  Customizable = '35-43',
  Consistent = '43, 47',
}

export const DeveloperExperienceSection = () => {
  const [activeHighlight, setActiveHighlight] = React.useState<Highlights>(Highlights.Unstyled);

  return (
    <Section css={{ background: 'linear-gradient(to bottom right, $sky3, $cyan4, $blue6)' }}>
      <Container size="3">
        <Grid css={{ gridTemplateColumns: '420px 1fr', gridGap: '$9' }}>
          <Box>
            <MarketingCaption css={{ mb: '$1' }}>Developer experience to love</MarketingCaption>
            <Heading as="h2" size="3" css={{ mb: '$4' }}>
              Open, thought-out API
            </Heading>

            <Box css={{ maxWidth: 420 }}>
              <Paragraph css={{ mb: '$5' }}>
                One of our main goals is to provide the best possible developer experience. Radix
                Primitives provides a fully-typed API. All components share a similar API, creating
                a consistent and predictable experience.
              </Paragraph>
            </Box>

            <Flex gap="1" direction="column" css={{ mx: '-$3' }}>
              <BlendedCard
                as="button"
                onMouseDown={() => setActiveHighlight(Highlights.Unstyled)}
                onClick={() => setActiveHighlight(Highlights.Unstyled)}
                variant={activeHighlight === Highlights.Unstyled ? 'active' : 'ghost'}
              >
                <Box css={{ p: '$3' }}>
                  <Text size="3" css={{ fontWeight: 500, lineHeight: 1.5 }}>
                    Unstyled
                  </Text>
                  <Text size="3" css={{ lineHeight: 1.5, color: '$slateA11' }}>
                    No need to override styles, no specificity wars.
                  </Text>
                </Box>
              </BlendedCard>

              <BlendedCard
                as="button"
                onMouseDown={() => setActiveHighlight(Highlights.Composable)}
                onClick={() => setActiveHighlight(Highlights.Composable)}
                variant={activeHighlight === Highlights.Composable ? 'active' : 'ghost'}
              >
                <Box css={{ p: '$3' }}>
                  <Text size="3" css={{ fontWeight: 500, lineHeight: 1.5 }}>
                    Composable
                  </Text>
                  <Text size="3" css={{ lineHeight: 1.5, color: '$slateA11' }}>
                    Granular access to each component part.
                  </Text>
                </Box>
              </BlendedCard>

              <BlendedCard
                as="button"
                onMouseDown={() => setActiveHighlight(Highlights.Customizable)}
                onClick={() => setActiveHighlight(Highlights.Customizable)}
                variant={activeHighlight === Highlights.Customizable ? 'active' : 'ghost'}
              >
                <Box css={{ p: '$3' }}>
                  <Text size="3" css={{ fontWeight: 500, lineHeight: 1.5 }}>
                    Customizable
                  </Text>
                  <Text size="3" css={{ lineHeight: 1.5, color: '$slateA11' }}>
                    Configure behavior, control focus, add event listeners.
                  </Text>
                </Box>
              </BlendedCard>

              <BlendedCard
                as="button"
                onMouseDown={() => setActiveHighlight(Highlights.Consistent)}
                onClick={() => setActiveHighlight(Highlights.Consistent)}
                variant={activeHighlight === Highlights.Consistent ? 'active' : 'ghost'}
              >
                <Box css={{ p: '$3' }}>
                  <Text size="3" css={{ fontWeight: 500, lineHeight: 1.5 }}>
                    Consistent
                  </Text>
                  <Text size="3" css={{ lineHeight: 1.5, color: '$slateA11' }}>
                    Components with similar functionality share similar API.
                  </Text>
                </Box>
              </BlendedCard>
            </Flex>
          </Box>

          <CodeWindow css={{ height: 640 }}>
            <CodeDemo
              language="jsx"
              line={activeHighlight}
              value={code}
              data-invert-line-highlight="false"
              css={{
                padding: 0,
                userSelect: 'auto',
                $$background: 'transparent',
                $$text: '$colors$cyan12',
                $$outline: 'none',
                $$syntax1: '$colors$purple11',
                // $$syntax2: '$colors$cyan11',
                $$syntax2: '$colors$cyan11',
                $$syntax3: '$colors$crimson11',
                $$syntax4: '$$text',
                $$comment: '$colors$slateA11',
                $$removed: '$colors$crimson11',
                $$added: '$colors$teal11',
                $$fadedLines: '$colors$slateA8',
                maxHeight: 700,
              }}
            />
          </CodeWindow>
        </Grid>
      </Container>
    </Section>
  );
};

const CodeWindow = styled('div', {
  position: 'relative',
  px: '$2',
  pt: '$6',
  pb: '$2',
  bc: '$sky1',
  br: '$4',
  overflow: 'hidden',
  boxShadow: `
    0 0 1px $colors$blackA8,
    0 30px 40px -50px $colors$blackA8,
    0 15px 60px -40px $colors$blackA9
  `,
  '&::before': {
    position: 'absolute',
    top: 10,
    left: 10,
    width: 52,
    height: 12,
    content: '""',
    background: `
      radial-gradient(circle closest-side at 6px, $sageA7 90%, #FFFFFF00),
      radial-gradient(circle closest-side at 24px, $sageA7 90%, #FFFFFF00),
      radial-gradient(circle closest-side at 42px, $sageA7 90%, #FFFFFF00)
    `,
  },
});

const BlendedCard = styled(Card, {
  cursor: 'default',
  willChange: 'transform',
  variants: {
    variant: {
      active: {
        backgroundColor: '$sky1',
        '&::before': {
          boxShadow: '0px 4px 16px -12px $colors$skyA12',
        },
        '&:active': {
          transition: 'transform 150ms cubic-bezier(0.22, 1, 0.36, 1)',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$teal8, 0 0 0 1px $colors$teal8',
        },
        '&:focus:not(:focus-visible)': {
          boxShadow: 'none',
        },
        '&:focus-visible': {
          boxShadow: 'inset 0 0 0 1px $colors$teal8, 0 0 0 1px $colors$teal8',
        },
      },
      ghost: {
        '&::before': {
          boxShadow: '0px 4px 16px -12px $colors$skyA12',
        },
        '@hover': {
          '&:hover': {
            backgroundColor: '$sky1',
          },
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$teal8, 0 0 0 1px $colors$teal8',
        },
        '&:focus:not(:focus-visible)': {
          boxShadow: 'none',
        },
        '&:focus-visible': {
          boxShadow: 'inset 0 0 0 1px $colors$teal8, 0 0 0 1px $colors$teal8',
        },
      },
    },
  },
});

const code = `// Add styles with your preferred CSS technology
const StyledTooltipContent = styled(Tooltip.Content, {
  backgroundColor: 'black',
  borderRadius: '3px',
  padding: '5px'
});

const StyledPopoverContent = styled(Popover.Content, {
  backgroundColor: 'white',
  boxShadow: '0 2px 10px -3px rgb(0 0 0 / 20%)',
  borderRadius: '3px',
  padding: '5px'
});

const StyledDialogContent = styled(Dialog.Content, {
  backgroundColor: 'white',
  boxShadow: '0 3px 15px -4px rgb(0 0 0 / 30%)',
  borderRadius: '5px',
  padding: '20px'
});

// Compose a custom Tooltip
export const StatusTooltip = ({ state, text, ...props }) => (
  <Tooltip.Root>
    <Tooltip.Trigger asChild>
      <Status variant={state} />
    </Tooltip.Trigger>
    <StyledTooltipContent {...props}>
      <Tooltip.Arrow />
      {text}
    </StyledTooltipContent>
  </Tooltip.Root>
);

// Compose a custom Popover and Dialog
export const ActiveDeployment = () => {
  const popoverCloseButton = React.useRef(null);
  const dialogCloseButton = React.useRef(null);

  return (
    <Popover.Root>
      <Popover.Trigger>View deployment</Popover.Trigger>
      <StyledPopoverContent
        side="top"
        sideOffset={5}
        onOpenAutoFocus={(event) => {
          // Focus the close button when popover opens
          event.preventDefault();
          popoverCloseButton.current?.focus();
        }}
      >
        <Dialog.Root>
          <Dialog.Trigger>Manage deployment</Dialog.Trigger>
          <Dialog.Overlay />
          <StyledDialogContent
            onOpenAutoFocus={(event) => {
              // Focus the close button when dialog opens
              event.preventDefault();
              dialogCloseButton.current?.focus();
            }}
          >
            <Button>Promote to Production</Button>
            <Button>Redeploy</Button>
            <Button>Copy URL</Button>
            <Dialog.Close ref={dialogCloseButton}>
              Close
            </Dialog.Close>
          </StyledDialogContent>
        </Dialog.Root>

        <Popover.Close ref={popoverCloseButton}>
          Close
        </Popover.Close>
      </StyledPopoverContent>
    </Popover.Root>
  );
};
`;
