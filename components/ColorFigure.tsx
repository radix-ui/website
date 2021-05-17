import {
  Box,
  Text,
  Section,
  Container,
  Grid,
  Code,
  Heading,
  Flex,
  Paragraph,
} from '@modulz/design-system';

export function ColorFigure() {
  return (
    <Section size="3">
      <Box>
        <Box css={{ height: 35, backgroundColor: '$hiContrast' }}></Box>
        <Text css={{ color: '$hiContrast' }}>fewfwefwefw</Text>
        <Box css={{ height: 35, backgroundColor: '$canvas' }}></Box>
      </Box>

      <Box css={{ py: '$7' }}>
        <Grid
          css={{
            gridTemplateColumns: 'repeat(11, minmax(0, 1fr))',
            gap: 2,
            ai: 'center',
          }}
        >
          <Box></Box>
          <Box css={{ ta: 'center', pb: '$2' }}>
            <Text css={{ fontSize: '$2', color: '$slate900' }}>100</Text>
          </Box>
          <Box css={{ ta: 'center', pb: '$2' }}>
            <Text css={{ fontSize: '$2', color: '$slate900' }}>200</Text>
          </Box>
          <Box css={{ ta: 'center', pb: '$2' }}>
            <Text css={{ fontSize: '$2', color: '$slate900' }}>300</Text>
          </Box>
          <Box css={{ ta: 'center', pb: '$2' }}>
            <Text css={{ fontSize: '$2', color: '$slate900' }}>400</Text>
          </Box>
          <Box css={{ ta: 'center', pb: '$2' }}>
            <Text css={{ fontSize: '$2', color: '$slate900' }}>500</Text>
          </Box>
          <Box css={{ ta: 'center', pb: '$2' }}>
            <Text css={{ fontSize: '$2', color: '$slate900' }}>600</Text>
          </Box>
          <Box css={{ ta: 'center', pb: '$2' }}>
            <Text css={{ fontSize: '$2', color: '$slate900' }}>700</Text>
          </Box>
          <Box css={{ ta: 'center', pb: '$2' }}>
            <Text css={{ fontSize: '$2', color: '$slate900' }}>800</Text>
          </Box>
          <Box css={{ ta: 'center', pb: '$2' }}>
            <Text css={{ fontSize: '$2', color: '$slate900' }}>900</Text>
          </Box>
          <Box css={{ ta: 'center', pb: '$2' }}>
            <Text css={{ fontSize: '$2', color: '$slate900' }}>1000</Text>
          </Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Gray</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$gray100' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gray200' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gray300' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gray400' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gray500' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gray600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gray700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gray800' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gray900' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gray1000' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Quartz</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$quartz100' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$quartz200' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$quartz300' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$quartz400' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$quartz500' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$quartz600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$quartz700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$quartz800' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$quartz900' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$quartz1000' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Slate</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$slate100' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$slate200' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$slate300' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$slate400' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$slate500' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$slate600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$slate700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$slate800' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$slate900' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$slate1000' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Violet</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$violet100' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$violet200' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$violet300' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$violet400' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$violet500' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$violet600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$violet700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$violet800' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$violet900' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$violet1000' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Blue</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$blue100' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$blue200' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$blue300' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$blue400' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$blue500' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$blue600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$blue700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$blue800' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$blue900' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$blue1000' }}></Box>
        </Grid>
      </Box>
    </Section>
  );
}
