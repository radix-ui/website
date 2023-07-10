import React from 'react';
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
  darkTheme,
} from '@modulz/design-system';
import { MarketingCaption } from './MarketingCaption';
import { CodeDemo } from './CodeDemo';

enum Highlights {
  Unstyled = '1-18',
  Composable = '20-37',
  Customizable = '39-55',
  Consistent = '57-74',
}

export const DeveloperExperienceSection = () => {
  const [activeHighlight, setActiveHighlight] = React.useState<Highlights>(Highlights.Unstyled);

  return (
    <Section
      css={{
        overflow: 'hidden',
        backgroundColor: '$sky6',
        background: `
          radial-gradient(ellipse at 100% 100%, hsl(254 100% 6% / 0.07), $violetA1, transparent),
          linear-gradient(to bottom right, $mint2, $indigo2, $pink3, $cyan3)
        `,
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
                  gridTemplateColumns: 'repeat(4, max-content) 1px',
                  gridTemplateRows: '410px auto',
                }}
              >
                <CodeWindow className={darkTheme}>
                  <StyledCodeDemo
                    value={code.unstyled}
                    language="jsx"
                    style={{ padding: 'var(--space-2)' }}
                  />
                </CodeWindow>
                <Box>
                  <Text as="h3" size="3" css={{ fontWeight: 500, lineHeight: 1.5 }}>
                    Unstyled
                  </Text>
                  <Text as="p" size="3" css={{ lineHeight: 1.5, color: '$slateA11' }}>
                    No need to override styles, no specificity wars.
                  </Text>
                </Box>

                <CodeWindow className={darkTheme}>
                  <StyledCodeDemo
                    value={code.composable}
                    language="jsx"
                    style={{ padding: 'var(--space-2)' }}
                  />
                </CodeWindow>
                <Box>
                  <Text as="h3" size="3" css={{ fontWeight: 500, lineHeight: 1.5 }}>
                    Composable
                  </Text>
                  <Text as="p" size="3" css={{ lineHeight: 1.5, color: '$slateA11' }}>
                    Granular access to each component part.
                  </Text>
                </Box>

                <CodeWindow className={darkTheme}>
                  <StyledCodeDemo
                    value={code.customizable}
                    language="jsx"
                    style={{ padding: 'var(--space-2)' }}
                  />
                </CodeWindow>
                <Box>
                  <Text as="h3" size="3" css={{ fontWeight: 500, lineHeight: 1.5 }}>
                    Customizable
                  </Text>
                  <Text as="p" size="3" css={{ lineHeight: 1.5, color: '$slateA11' }}>
                    Configure behavior, control focus, add event listeners.
                  </Text>
                </Box>

                <CodeWindow className={darkTheme}>
                  <StyledCodeDemo
                    value={code.consistent}
                    language="jsx"
                    style={{ padding: 'var(--space-2)' }}
                  />
                </CodeWindow>
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
            <CodeWindow
              withChrome
              className={darkTheme}
              css={{ position: 'absolute', inset: 0, overflow: 'hidden' }}
            >
              <StyledCodeDemo
                language="jsx"
                value={allCode}
                line={activeHighlight}
                data-invert-line-highlight="false"
                style={{
                  padding: 0,
                  height: '100%',
                  userSelect: 'auto',
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
  ({ style, ...props }, forwardedRef) => (
    <CodeDemo
      ref={forwardedRef}
      data-invert-line-highlight="false"
      style={
        {
          padding: 0,
          height: '100%',
          userSelect: 'auto',
          fontSize: 13,
          '---background': 'transparent',
          '---text': 'var(--cyan-12)',
          '---outline': 'none',
          '---syntax1': 'var(--purple-11)',
          // $$syntax2: '$colors$cyan11',
          '---syntax2': 'var(--cyan-11)',
          '---syntax3': 'var(--crimson-11)',
          '---syntax4': 'var(---text)',
          '---comment': 'var(--slate-a11)',
          '---removed': 'var(--crimson-11)',
          '---added': 'var(--teal-11)',
          '---fadedLines': 'var(--slate-a8)',
          boxShadow: 'none',
          ...style,
        } as React.CSSProperties
      }
      {...props}
    />
  )
);

const CodeWindow = styled('div', {
  $$bgColor: '$colors$sky1',
  [`&.${darkTheme}`]: {
    $$bgColor: '$colors$sky2',
  },
  [`.${darkTheme} &.${darkTheme}`]: {
    $$bgColor: '$colors$violet1',
  },

  position: 'relative',
  bc: '$$bgColor',
  br: '$4',

  variants: {
    withChrome: {
      true: {
        px: '$2',
        pt: '$6',
        pb: '$2',
        boxShadow: '0 50px 100px -50px hsl(254 100% 6% / 0.7)',
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
          content: '"DeploymentDetail.jsx"',
        },
      },
    },
  },
});

const BlendedCard = styled(Card, {
  $$shadowColor: '$colors$skyA12',
  $$bgColor: '$colors$plum1',
  [`.${darkTheme} &`]: {
    $$shadowColor: '$colors$blackA12',
    $$bgColor: '$colors$whiteA4',
  },

  cursor: 'default',
  position: 'relative',
  zIndex: 1,
  willChange: 'transform',
  backgroundColor: '$$bgColor',
  '&::before': {
    boxShadow: '0 0 0 1px $colors$blackA3',
  },

  // Fix a bug when hovering at card edges would cause the card to jitter because of transform
  '@hover': {
    '&:hover::after': {
      content: '',
      inset: -3,
      position: 'absolute',
    },
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
        '&:focus:not(:focus-visible)': {
          boxShadow: 'none',
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
        '&:focus:not(:focus-visible)': {
          boxShadow: 'none',
        },
      },
    },
  },
});

const code = {
  unstyled: `// Add styles with your preferred CSS technology
const TooltipContent = styled(Tooltip.Content, {
  backgroundColor: 'black',
  borderRadius: '3px',
  padding: '5px'
});

const PopoverContent = styled(Popover.Content, {
  backgroundColor: 'white',
  boxShadow: '0 2px 10px -3px rgb(0 0 0 / 20%)',
  borderRadius: '3px',
});

const DialogContent = styled(Dialog.Content, {
  backgroundColor: 'white',
  boxShadow: '0 3px 15px -4px rgb(0 0 0 / 30%)',
  borderRadius: '5px',
});`,

  composable: `// Compose a custom Tooltip component
export const StatusTooltip = ({ state, label }) => {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <Text>
          <Status variant={state} />
        </Text>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <TooltipContent>
          <Tooltip.Arrow />
          {label}
        </TooltipContent>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
};`,

  customizable: `// Compose a Popover with custom focus and positioning
export const DeploymentPopover = ({ children }) => {
  const popoverCloseButton = React.useRef(null);
  return (
    <Popover.Root>
      <Popover.Trigger>View deployment</Popover.Trigger>
      <Popover.Portal>
        <PopoverContent
          align="start"
          collisionPadding={10}
          onOpenAutoFocus={(event) => {
            // Focus the close button when popover opens
            popoverCloseButton.current?.focus();
            event.preventDefault();
          }}
        >
          {children}
          <Popover.Close ref={popoverCloseButton}>
            Close
          </Popover.Close>
        </PopoverContent>
      </Popover.Portal>
    </Popover.Root>
  );
};`,

  consistent: `// Compose a Dialog with custom focus management
export const InfoDialog = ({ children }) => {
  const dialogCloseButton = React.useRef(null);
  return (
    <Dialog.Root>
      <Dialog.Trigger>View details</Dialog.Trigger>
      <Dialog.Overlay />
      <Dialog.Portal>
        <DialogContent
          onOpenAutoFocus={(event) => {
            // Focus the close button when dialog opens
            dialogCloseButton.current?.focus();
            event.preventDefault();
          }}
        >
          {children}
          <Dialog.Close ref={dialogCloseButton}>
            Close
          </Dialog.Close>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};`,
};

const allCode = [code.unstyled, code.composable, code.customizable, code.consistent].join('\n\n');
