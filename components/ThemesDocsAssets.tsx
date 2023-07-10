import { Box, Flex, Grid, Text, Theme } from '@radix-ui/themes';

function Swatch({
  color,
  children,
  invert,
}: {
  color: string;
  children: React.ReactNode;
  invert?: boolean;
}) {
  return (
    <Flex
      align="center"
      justify="center"
      style={{
        height: 50,
        backgroundColor: `var(--${color.toLowerCase()}-10)`,
        borderRadius: 'var(--radius-2)',
        color: invert ? 'black' : 'white',
      }}
    >
      <Text weight="bold" highContrast>
        {children}
      </Text>
    </Flex>
  );
}

export function ThemesAccentRegulars() {
  return (
    <Grid
      style={{ gridTemplateColumns: 'repeat(5, minmax(0, 1fr))' }}
      align="center"
      gap="2"
      my="5"
    >
      <Swatch color="tomato">Tomato</Swatch>
      <Swatch color="red">Red</Swatch>
      <Swatch color="crimson">Crimson</Swatch>
      <Swatch color="pink">Pink</Swatch>
      <Swatch color="plum">Plum</Swatch>
      <Swatch color="purple">Purple</Swatch>
      <Swatch color="violet">Violet</Swatch>
      <Swatch color="indigo">Indigo</Swatch>
      <Swatch color="blue">Blue</Swatch>
      <Swatch color="cyan">Cyan</Swatch>
      <Swatch color="teal">Teal</Swatch>
      <Swatch color="green">Green</Swatch>
      <Swatch color="grass">Grass</Swatch>
      <Swatch color="orange">Orange</Swatch>
      <Swatch color="brown">Brown</Swatch>
    </Grid>
  );
}

export function ThemesAccentBrights() {
  return (
    <Grid
      style={{ gridTemplateColumns: 'repeat(5, minmax(0, 1fr))' }}
      align="center"
      gap="2"
      my="5"
    >
      <Swatch color="sky" invert>
        Sky
      </Swatch>
      <Swatch color="mint" invert>
        Mint
      </Swatch>
      <Swatch color="lime" invert>
        Lime
      </Swatch>
      <Swatch color="yellow" invert>
        Yellow
      </Swatch>
      <Swatch color="amber" invert>
        Amber
      </Swatch>
    </Grid>
  );
}

export function ThemesAccentMetals() {
  return (
    <Grid
      style={{ gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' }}
      align="center"
      gap="2"
      my="5"
    >
      <Swatch color="bronze">Bronze</Swatch>
      <Swatch color="gold">Gold</Swatch>
    </Grid>
  );
}

export function ThemesAccentGray() {
  return (
    <Box my="5">
      <Swatch color="slate">Gray (Slate)</Swatch>
    </Box>
  );
}

export function ThemesGray() {
  return (
    <Grid
      style={{ gridTemplateColumns: 'repeat(6, minmax(0, 1fr))' }}
      align="center"
      gap="2"
      my="5"
    >
      <Theme applyBackgroundColor={false} grayScale="gray">
        <Swatch color="gray">Pure</Swatch>
      </Theme>
      <Swatch color="mauve">Mauve</Swatch>
      <Swatch color="slate">Slate</Swatch>
      <Swatch color="sage">Sage</Swatch>
      <Swatch color="olive">Olive</Swatch>
      <Swatch color="sand">Sand</Swatch>
    </Grid>
  );
}

export function ThemesThemeAnatomy() {
  return (
    <Flex
      style={{
        backgroundColor: 'var(--gray-a6)',
        borderRadius: 'var(--radius-4)',
        position: 'relative',
      }}
      align="center"
      justify="center"
      my="7"
      p="7"
    >
      <Flex
        align="center"
        justify="end"
        style={{
          backgroundColor: 'var(--gray-11)',
          width: 200,
          height: 2,
          position: 'absolute',
          top: '30%',
          left: 100,
        }}
      >
        <Box
          style={{ borderRadius: '100%', backgroundColor: 'var(--gray-11)' }}
          width="2"
          height="2"
        />
      </Flex>

      <Flex
        align="center"
        justify="start"
        style={{
          backgroundColor: 'var(--gray-11)',
          width: 200,
          height: 2,
          position: 'absolute',
          bottom: '30%',
          right: 100,
        }}
      >
        <Box
          style={{ borderRadius: '100%', backgroundColor: 'var(--gray-11)' }}
          width="2"
          height="2"
        />
      </Flex>

      <Flex
        align="center"
        justify="center"
        style={{
          backgroundColor: 'var(--color-panel)',
          borderRadius: 'var(--radius-4)',
          width: '100%',
          maxWidth: 300,
          height: 300,
          boxShadow: 'var(--shadow-3)',
        }}
        p="5"
      >
        <Text color="gray">Annotated theme UI</Text>
      </Flex>
    </Flex>
  );
}

export function ThemesTextFeel() {
  return (
    <Flex
      style={{
        backgroundColor: 'var(--gray-a6)',
        borderRadius: 'var(--radius-4)',
      }}
      align="center"
      justify="center"
      my="7"
      p="7"
    >
      <Grid columns="2" style={{ width: '100%', height: 300 }} gap="6">
        <Flex
          align="center"
          justify="center"
          style={{
            backgroundColor: 'var(--color-panel)',
            borderRadius: 'var(--radius-4)',
            boxShadow: 'var(--shadow-3)',
          }}
          p="5"
        >
          <Text color="gray">"auto" example</Text>
        </Flex>

        <Flex
          align="center"
          justify="center"
          style={{
            backgroundColor: 'var(--color-panel)',
            borderRadius: 'var(--radius-4)',
            boxShadow: 'var(--shadow-3)',
          }}
          p="5"
        >
          <Text color="gray">"accent" example</Text>
        </Flex>
      </Grid>
    </Flex>
  );
}

export function ThemesAppearance() {
  return (
    <Flex
      style={{
        backgroundColor: 'var(--gray-a6)',
        borderRadius: 'var(--radius-4)',
      }}
      align="center"
      justify="center"
      my="7"
      p="7"
    >
      <Grid
        columns="2"
        style={{ width: '100%', height: 300, borderRadius: 'var(--radius-4)', overflow: 'hidden' }}
      >
        <Theme asChild>
          <Flex
            align="center"
            justify="center"
            style={{
              backgroundColor: 'var(--color-panel)',
            }}
            p="5"
          >
            <Text color="gray">light mode</Text>
          </Flex>
        </Theme>

        <Theme asChild appearance="dark">
          <Flex
            align="center"
            justify="center"
            style={{
              backgroundColor: 'var(--color-panel)',
            }}
            p="5"
          >
            <Text color="gray">dark mode</Text>
          </Flex>
        </Theme>
      </Grid>
    </Flex>
  );
}
