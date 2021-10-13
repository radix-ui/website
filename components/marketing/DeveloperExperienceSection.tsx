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
  darkTheme,
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
    <Section
      // className={darkTheme}
      css={{
        background: 'linear-gradient(to bottom right, $sky3, $cyan4, $blue6)',
        [`&.${darkTheme}`]: {
          background: 'linear-gradient(to bottom right, $sky2, $cyan2, $cyan6)',
        },
      }}
    >
      <Container size="3">
        <Grid
          gap={{ '@initial': 5, '@bp3': 8 }}
          css={{ '@bp2': { gridTemplateColumns: 'auto 1fr' } }}
        >
          <Box css={{ '@bp2': { maxWidth: 420 } }}>
            <MarketingCaption css={{ mb: '$1' }}>Developer experience to love</MarketingCaption>
            <Heading as="h2" size="3" css={{ mb: '$4' }}>
              Develop with an open, thought‑out API
            </Heading>

            <Paragraph css={{ mb: '$5', maxWidth: 500 }}>
              One of our main goals is to provide the best possible developer experience. Radix
              Primitives provides a fully-typed API. All components share a similar API, creating
              a consistent and predictable experience.
            </Paragraph>

            <Box
              css={{
                width: '100vw',
                pl: '$5',
                mx: '-$5',
                // Don't cut off box shadows
                py: '$1',
                overflowX: 'scroll',
                overflowY: 'hidden',
                WebkitOverflowScrolling: 'touch',
                MsOverflowStyle: 'none',
                scrollbarWidth: 'none',
                '&::-webkit-scrollbar': {
                  display: 'none',
                },
                '@bp2': {
                  display: 'none',
                },
              }}
            >
              <Grid
                gapX={{
                  '@initial': 3,
                  '@bp1': 5,
                }}
                gapY={3}
                flow="column"
                css={{
                  gridTemplateColumns: 'repeat(4, 1fr) 1px',
                  gridTemplateRows: 'auto auto',
                }}
              >
                <BlendedCard>
                  <StyledCodeDemo value={code1} language="jsx" css={{ p: '$2', height: '100%' }} />
                </BlendedCard>
                <Box>
                  <Text as="h3" size="3" css={{ fontWeight: 500, lineHeight: 1.5 }}>
                    Unstyled
                  </Text>
                  <Text as="p" size="3" css={{ lineHeight: 1.5, color: '$slateA11' }}>
                    No need to override styles, no specificity wars.
                  </Text>
                </Box>

                <BlendedCard>
                  <StyledCodeDemo value={code2} language="jsx" css={{ p: '$2', height: '100%' }} />
                </BlendedCard>
                <Box>
                  <Text as="h3" size="3" css={{ fontWeight: 500, lineHeight: 1.5 }}>
                    Composable
                  </Text>
                  <Text as="p" size="3" css={{ lineHeight: 1.5, color: '$slateA11' }}>
                    Granular access to each component part.
                  </Text>
                </Box>

                <BlendedCard>
                  <StyledCodeDemo value={code3} language="jsx" css={{ p: '$2', height: '100%' }} />
                </BlendedCard>
                <Box>
                  <Text as="h3" size="3" css={{ fontWeight: 500, lineHeight: 1.5 }}>
                    Customizable
                  </Text>
                  <Text as="p" size="3" css={{ lineHeight: 1.5, color: '$slateA11' }}>
                    Configure behavior, control focus, add event listeners.
                  </Text>
                </Box>

                <BlendedCard>
                  <StyledCodeDemo value={code4} language="jsx" css={{ p: '$2', height: '100%' }} />
                </BlendedCard>
                <Box>
                  <Text as="h3" size="3" css={{ fontWeight: 500, lineHeight: 1.5 }}>
                    Consistent
                  </Text>
                  <Text as="p" size="3" css={{ lineHeight: 1.5, color: '$slateA11' }}>
                    Components with similar functionality share similar API.
                  </Text>
                </Box>
                <Box />
              </Grid>
            </Box>

            <Flex
              gap="1"
              direction="column"
              css={{ ml: '-$3', display: 'none', '@bp2': { display: 'flex' } }}
            >
              <BlendedCard
                as="button"
                onMouseDown={() => setActiveHighlight(Highlights.Unstyled)}
                onClick={() => setActiveHighlight(Highlights.Unstyled)}
                variant={activeHighlight === Highlights.Unstyled ? 'active' : 'ghost'}
              >
                <Box css={{ p: '$3' }}>
                  <Text as="h3" size="3" css={{ fontWeight: 500, lineHeight: 1.5 }}>
                    Unstyled
                  </Text>
                  <Text as="p" size="3" css={{ lineHeight: 1.5, color: '$slateA11' }}>
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
                  <Text as="h3" size="3" css={{ fontWeight: 500, lineHeight: 1.5 }}>
                    Composable
                  </Text>
                  <Text as="p" size="3" css={{ lineHeight: 1.5, color: '$slateA11' }}>
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
                  <Text as="h3" size="3" css={{ fontWeight: 500, lineHeight: 1.5 }}>
                    Customizable
                  </Text>
                  <Text as="p" size="3" css={{ lineHeight: 1.5, color: '$slateA11' }}>
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
                  <Text as="h3" size="3" css={{ fontWeight: 500, lineHeight: 1.5 }}>
                    Consistent
                  </Text>
                  <Text as="p" size="3" css={{ lineHeight: 1.5, color: '$slateA11' }}>
                    Components with similar functionality share similar API.
                  </Text>
                </Box>
              </BlendedCard>
            </Flex>
          </Box>

          <Box
            css={{
              position: 'relative',
              minWidth: 480,
              display: 'none',
              '@bp2': { display: 'block' },
            }}
          >
            <CodeWindow css={{ position: 'absolute', inset: 0 }}>
              <StyledCodeDemo
                language="jsx"
                value={code}
                line={activeHighlight}
                data-invert-line-highlight="false"
                css={{
                  padding: 0,
                  height: '100%',
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
                }}
              />
            </CodeWindow>
          </Box>
        </Grid>
      </Container>
    </Section>
  );
};

const StyledCodeDemo = React.forwardRef<HTMLPreElement, React.ComponentProps<typeof CodeDemo>>(
  ({ css, ...props }, forwardedRef) => (
    <CodeDemo
      ref={forwardedRef}
      data-invert-line-highlight="false"
      css={{
        padding: 0,
        height: '100%',
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
        ...css,
      }}
      {...props}
    />
  )
);

const CodeWindow = styled('div', {
  $$bgColor: '$colors$sky1',
  [`.${darkTheme} &`]: {
    $$bgColor: '$colors$whiteA4',
  },

  position: 'relative',
  px: '$2',
  // py: '$2',
  pt: '$6',
  pb: '$2',
  bc: '$$bgColor',
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
    radial-gradient(circle closest-side at 6px, $slateA7 90%, #FFFFFF00),
    radial-gradient(circle closest-side at 24px, $slateA7 90%, #FFFFFF00),
    radial-gradient(circle closest-side at 42px, $slateA7 90%, #FFFFFF00)
    `,
  },
  '&::after': {
    position: 'absolute',
    top: 8,
    left: 0,
    right: 0,
    fontFamily: '$untitled',
    fontSize: '$1',
    textAlign: 'center',
    color: '$slate9',
    content: '"ActiveDeploymentPopover.jsx"',
  },
});

const BlendedCard = styled(Card, {
  $$shadowColor: '$colors$skyA12',
  $$bgColor: '$colors$sky1',
  [`.${darkTheme} &`]: {
    $$shadowColor: '$colors$blackA12',
    $$bgColor: '$colors$whiteA4',
  },

  cursor: 'default',
  willChange: 'transform',
  backgroundColor: '$$bgColor',
  '&:before': {
    boxShadow: '0 0 0 1px $colors$blackA3',
  },

  variants: {
    variant: {
      active: {
        '&::before': {
          boxShadow: '0px 4px 16px -12px $$shadowColor',
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
          boxShadow: '0px 4px 16px -12px $$shadowColor',
        },
        '@hover': {
          '&:hover': {
            backgroundColor: '$$bgColor',
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

const code1 = `// Add styles with your preferred CSS technology
const TooltipContent = styled(Tooltip.Content, {
  backgroundColor: 'black',
  borderRadius: '3px',
  padding: '5px'
});

const PopoverContent = styled(Popover.Content, {
  backgroundColor: 'white',
  boxShadow: '0 2px 10px -3px rgb(0 0 0 / 20%)',
  borderRadius: '3px',
  padding: '5px'
});

const DialogContent = styled(Dialog.Content, {
  backgroundColor: 'white',
  boxShadow: '0 3px 15px -4px rgb(0 0 0 / 30%)',
  borderRadius: '5px',
  padding: '20px'
});
`;

const code2 = `// Compose a custom Tooltip
export const StatusTooltip = ({ state, text, ...props }) => (
  <Tooltip.Root>
    <Tooltip.Trigger asChild>
      <Status variant={state} />
    </Tooltip.Trigger>
    <TooltipContent {...props}>
      <Tooltip.Arrow />
      {text}
    </TooltipContent>
  </Tooltip.Root>
);
`;

const code3 = `// Compose a custom Popover and Dialog
export const ActiveDeployment = () => {
  const popoverCloseButton = React.useRef(null);
  const dialogCloseButton = React.useRef(null);

  return (
    <Popover.Root>
      <Popover.Trigger>View deployment</Popover.Trigger>
      <PopoverContent
        side="top"
        sideOffset={5}
        onOpenAutoFocus={(event) => {
          // Focus the close button when popover opens
          event.preventDefault();
          popoverCloseButton.current?.focus();
        }}
      >
`;

const code4 = `<PopoverContent
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
    <DialogContent
      onOpenAutoFocus={(event) => {
        // Focus the close button when dialog opens
        event.preventDefault();
        dialogCloseButton.current?.focus();
      }}
    >
`;

const code = `// Add styles with your preferred CSS technology
const TooltipContent = styled(Tooltip.Content, {
  backgroundColor: 'black',
  borderRadius: '3px',
  padding: '5px'
});

const PopoverContent = styled(Popover.Content, {
  backgroundColor: 'white',
  boxShadow: '0 2px 10px -3px rgb(0 0 0 / 20%)',
  borderRadius: '3px',
  padding: '5px'
});

const DialogContent = styled(Dialog.Content, {
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
    <TooltipContent {...props}>
      <Tooltip.Arrow />
      {text}
    </TooltipContent>
  </Tooltip.Root>
);

// Compose a custom Popover and Dialog
export const ActiveDeployment = () => {
  const popoverCloseButton = React.useRef(null);
  const dialogCloseButton = React.useRef(null);

  return (
    <Popover.Root>
      <Popover.Trigger>View deployment</Popover.Trigger>
      <PopoverContent
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
          <DialogContent
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
          </DialogContent>
        </Dialog.Root>

        <Popover.Close ref={popoverCloseButton}>
          Close
        </Popover.Close>
      </PopoverContent>
    </Popover.Root>
  );
};
`;
