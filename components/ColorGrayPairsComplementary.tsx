import { Box, Text, Grid, Flex } from '@radix-ui/themes';

const whiteBgColors = [
  'tomato',
  'red',
  'crimson',
  'pink',
  'plum',
  'purple',
  'violet',
  'indigo',
  'blue',
  'cyan',
  'teal',
  'green',
  'grass',
  'orange',
  'brown',
];

const blackBgColors = ['sky', 'mint', 'lime', 'yellow', 'amber'];

export function ColorGrayPairsComplementary() {
  return (
    <Box>
      <Grid
        align="center"
        my="5"
        style={{
          gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
          gap: 2,
        }}
      >
        {whiteBgColors.map((color) => (
          <Flex
            key={color}
            align="center"
            justify="center"
            style={{ height: 65, backgroundColor: `var(--${color}-10)` }}
          >
            <Text size="2" style={{ color: 'white', textTransform: 'capitalize' }}>
              {color}
            </Text>
          </Flex>
        ))}
      </Grid>

      <Text mb="3">5 scales designed for black foreground text.</Text>

      <Grid
        align="center"
        my="5"
        style={{
          gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
          gap: 2,
        }}
      >
        {blackBgColors.map((color) => (
          <Flex
            key={color}
            align="center"
            justify="center"
            style={{ height: 65, backgroundColor: `var(--${color}-10)` }}
          >
            <Text size="2" style={{ color: 'black', textTransform: 'capitalize' }}>
              {color}
            </Text>
          </Flex>
        ))}
      </Grid>
    </Box>
  );
}
