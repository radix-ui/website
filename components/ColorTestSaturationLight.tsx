import * as React from 'react';
import { Box, Text, Grid, Flex } from '@radix-ui/themes';

const steps = ['1', '2', '3', '4', '5', '6'];

const groupedColors = [
  ['gray', 'mauve', 'slate', 'sage', 'olive', 'sand'],
  [
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
  ],
  ['amber', 'yellow', 'lime', 'mint', 'sky'],
];

export function ColorTestSaturationLight() {
  return (
    <Box my="5">
      <Grid
        align="center"
        style={{
          gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',
          gap: 2,
        }}
      >
        <Box></Box>
        {steps.map((step) => (
          <Flex pb="2" justify="center">
            <Text size="2" color="gray">
              {step}
            </Text>
          </Flex>
        ))}
      </Grid>

      <Flex direction="column" gap="7">
        {groupedColors.map((group, i) => (
          <Grid
            align="center"
            style={{
              gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',
              gap: 2,
            }}
          >
            {group.map((color) => (
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
        ))}
      </Flex>
    </Box>
  );
}
