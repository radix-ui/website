import * as React from 'react';
import { Box, Text, Grid, Flex } from '@radix-ui/themes';

const steps = ['7', '8', '9', '10', '11', '12'];

const groupedColors = [
  ['gray', 'mauve', 'slate', 'sage', 'olive', 'sand'],
  [
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
    'bronze',
    'gold',
  ],
  ['sky', 'mint', 'lime', 'yellow', 'amber'],
];

export function ColorTestSaturationDark() {
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
