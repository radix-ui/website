import React from 'react';
import { Box, Section, Text, Flex, Grid, Heading, Card } from '@radix-ui/themes';
import { MarketingCaption } from './MarketingCaption';
import { CodeDemo } from './CodeDemo';
import { Container, Theme } from '@radix-ui/themes';
import { HiddenScroll } from './HiddenScroll';

enum Highlights {
  Unstyled = '1-18',
  Composable = '20-37',
  Customizable = '39-55',
  Consistent = '57-74',
}

export const DeveloperExperienceSection = () => {
  const [active, setActive] = React.useState<Highlights>(Highlights.Unstyled);

  return (
    <Section
      size={{ initial: '2', sm: '3' }}
      style={{
        overflow: 'hidden',
        backgroundColor: 'var(--sky-6)',
        background: `
          radial-gradient(ellipse at 100% 100%, hsl(254 100% 6% / 0.07), var(--violet-a1), transparent),
          linear-gradient(to bottom right, var(--mint-2), var(--indigo-2), var(--pink-3), var(--cyan-3))
        `,
      }}
    >
      <Container mx={{ initial: '5', xs: '6', sm: '7', md: '9' }}>
        <Grid gap={{ initial: '5', md: '8' }} columns={{ sm: 'auto 1fr' }}>
          <Box style={{ maxWidth: 430 }}>
            <MarketingCaption mb="1">Developer experience to love</MarketingCaption>
            <Heading as="h2" size="7" mb="4">
              Develop with an open, thought‑out API
            </Heading>

            <Text as="p" mb="5" style={{ maxWidth: 500 }}>
              One of our main goals is to provide the best possible developer experience. Radix
              Primitives provides a fully-typed API. All components share a similar API, creating
              a consistent and predictable experience.
            </Text>

            <HiddenScroll display={{ md: 'none' }} pl="5" py="1" mx="-5" style={{ width: '100vw' }}>
              <Grid
                gapX={{ initial: '3', xs: '5' }}
                gapY="3"
                flow="column"
                columns="repeat(4, max-content) 1px"
                rows="430px auto"
              >
                <Theme asChild appearance="dark" hasBackground={false}>
                  <CodeWindow>
                    <StyledCodeDemo value={code.unstyled} language="jsx" />
                  </CodeWindow>
                </Theme>
                <Box>
                  <Heading as="h3" size="3">
                    Unstyled
                  </Heading>
                  <Text as="p" size="3" color="gray">
                    No need to override styles, no specificity wars.
                  </Text>
                </Box>

                <Theme asChild appearance="dark" hasBackground={false}>
                  <CodeWindow>
                    <StyledCodeDemo value={code.composable} language="jsx" />
                  </CodeWindow>
                </Theme>
                <Box>
                  <Heading as="h3" size="3">
                    Composable
                  </Heading>
                  <Text as="p" size="3" color="gray">
                    Granular access to each component part.
                  </Text>
                </Box>

                <Theme asChild appearance="dark" hasBackground={false}>
                  <CodeWindow>
                    <StyledCodeDemo value={code.customizable} language="jsx" />
                  </CodeWindow>
                </Theme>
                <Box>
                  <Heading as="h3" size="3">
                    Customizable
                  </Heading>
                  <Text as="p" size="3" color="gray">
                    Configure behavior, control focus, add event listeners.
                  </Text>
                </Box>

                <Theme asChild appearance="dark" hasBackground={false}>
                  <CodeWindow>
                    <StyledCodeDemo value={code.consistent} language="jsx" />
                  </CodeWindow>
                </Theme>
                <Box>
                  <Heading as="h3" size="3">
                    Consistent
                  </Heading>
                  <Text as="p" size="3" color="gray">
                    Components with similar functionality share similar API.
                  </Text>
                </Box>
                <Box />
              </Grid>
            </HiddenScroll>

            <Flex gap="1" direction="column" ml="-3" display={{ initial: 'none', md: 'flex' }}>
              <Card
                asChild
                onMouseDown={() => setActive(Highlights.Unstyled)}
                onClick={() => setActive(Highlights.Unstyled)}
                variant="ghost"
                style={{
                  margin: 0,
                  backgroundColor: active === Highlights.Unstyled ? 'var(--gray-a3)' : '',
                }}
              >
                <button>
                  <Heading as="h3" size="3">
                    Unstyled
                  </Heading>
                  <Text as="p" size="3" color="gray">
                    No need to override styles, no specificity wars.
                  </Text>
                </button>
              </Card>

              <Card
                asChild
                onMouseDown={() => setActive(Highlights.Composable)}
                onClick={() => setActive(Highlights.Composable)}
                variant="ghost"
                style={{
                  margin: 0,
                  backgroundColor: active === Highlights.Composable ? 'var(--gray-a3)' : '',
                }}
              >
                <button>
                  <Heading as="h3" size="3">
                    Composable
                  </Heading>
                  <Text as="p" size="3" color="gray">
                    Granular access to each component part.
                  </Text>
                </button>
              </Card>

              <Card
                asChild
                onMouseDown={() => setActive(Highlights.Customizable)}
                onClick={() => setActive(Highlights.Customizable)}
                variant="ghost"
                style={{
                  margin: 0,
                  backgroundColor: active === Highlights.Customizable ? 'var(--gray-a3)' : '',
                }}
              >
                <button>
                  <Heading as="h3" size="3">
                    Customizable
                  </Heading>
                  <Text as="p" size="3" color="gray">
                    Configure behavior, control focus, add event listeners.
                  </Text>
                </button>
              </Card>

              <Card
                asChild
                onMouseDown={() => setActive(Highlights.Consistent)}
                onClick={() => setActive(Highlights.Consistent)}
                variant="ghost"
                style={{
                  margin: 0,
                  backgroundColor: active === Highlights.Consistent ? 'var(--gray-a3)' : '',
                }}
              >
                <button>
                  <Heading as="h3" size="3">
                    Consistent
                  </Heading>
                  <Text as="p" size="3" color="gray">
                    Components with similar functionality share similar API.
                  </Text>
                </button>
              </Card>
            </Flex>
          </Box>

          <Box
            display={{ initial: 'none', md: 'block' }}
            position="relative"
            style={{ minWidth: 480, minHeight: 602 }}
          >
            <Theme asChild appearance="dark" hasBackground={false}>
              <CodeWindow
                style={{
                  position: 'absolute',
                  inset: 0,
                  overflow: 'hidden',
                  paddingTop: 'var(--space-6)',
                  boxShadow: '0 50px 100px -50px hsl(254 100% 6% / 0.7)',
                  minHeight: 575,
                }}
              >
                <Box
                  style={{
                    position: 'absolute',
                    top: 10,
                    left: 10,
                    width: 52,
                    height: 12,
                    background: `
                      radial-gradient(circle closest-side at 6px, var(--gray-a7) 90%, #FFFFFF00),
                      radial-gradient(circle closest-side at 24px, var(--gray-a7) 90%, #FFFFFF00),
                      radial-gradient(circle closest-side at 42px, var(--gray-a7) 90%, #FFFFFF00)
                    `,
                  }}
                />

                <Flex position="absolute" justify="center" top="0" left="0" right="0" mt="2">
                  <Text size="1" style={{ color: 'var(--slate-a9)', userSelect: 'none' }}>
                    MyComponent.jsx
                  </Text>
                </Flex>

                <StyledCodeDemo
                  language="jsx"
                  value={allCode}
                  line={active}
                  data-invert-line-highlight="false"
                  style={{
                    height: '100%',
                    userSelect: 'auto',
                  }}
                />
              </CodeWindow>
            </Theme>
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
      showCopyCodeButton={false}
      style={
        {
          height: '100%',
          userSelect: 'auto',
          padding: 'var(--space-3)',
          '--background': 'transparent',
          boxShadow: 'none',
          ...style,
        } as React.CSSProperties
      }
      {...props}
    />
  )
);

const CodeWindow = ({ style, ...props }: React.ComponentPropsWithoutRef<'div'>) => (
  <Box
    className="dark-theme"
    style={{
      position: 'relative',
      maxHeight: '100%',
      borderRadius: 'var(--radius-5)',
      backgroundColor: 'var(--developer-experience-code-window-background)',
      ...style,
    }}
    {...props}
  />
);

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
export const StatusPopover = ({ children }) => {
  const popoverCloseButton = React.useRef(null);
  return (
    <Popover.Root>
      <Popover.Trigger>View status</Popover.Trigger>
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
