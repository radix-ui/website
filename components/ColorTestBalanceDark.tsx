import * as React from 'react';
import { Box, Text, Grid, Flex } from '@radix-ui/themes';

const steps = ['7', '8', '9', '10', '11', '12'];
const allColors = [
  'gray',
  'mauve',
  'slate',
  'sage',
  'olive',
  'sand',
  'tomato',
  'red',
  'ruby',
  'crimson',
  'pink',
  'plum',
  'purple',
  'violet',
  'iris',
  'indigo',
  'blue',
  'cyan',
  'teal',
  'jade',
  'green',
  'grass',
  'bronze',
  'gold',
  'brown',
  'orange',
  'amber',
  'yellow',
  'lime',
  'mint',
  'sky',
];

export function ColorTestBalanceDark() {
  return (
    <Box my="5">
      <Grid
        align="center"
        style={{
          gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',
          filter: 'grayscale(1)',
        }}
      >
        <Box></Box>
        {steps.map((step) => (
          <Flex pb="2" justify="center">
            <Text color="gray" size="2">
              {step}
            </Text>
          </Flex>
        ))}

        {allColors.map((color) => (
          <React.Fragment key={color}>
            <Text size="2" style={{ textTransform: 'capitalize' }}>
              {color}
            </Text>
            {steps.map((step) => (
              <Box
                key={step}
                style={{ height: 35, backgroundColor: `var(--${color}-${step})` }}
              ></Box>
            ))}
          </React.Fragment>
        ))}
      </Grid>
    </Box>
  );
}
