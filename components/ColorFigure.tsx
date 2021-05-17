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
    <Box>
      <Flex
        css={{
          gap: 2,
          ai: 'center',
          pb: '$1',
        }}
      >
        <Box css={{ ta: 'center', fg: 5 }}>
          <Text css={{ fontSize: '$2' }}>Backgrounds</Text>
        </Box>
        <Box css={{ ta: 'center', fg: 1 }}>
          <Text css={{ fontSize: '$2' }}>Lines</Text>
        </Box>
        <Box css={{ ta: 'center', fg: 2 }}>
          <Text css={{ fontSize: '$2' }}>Borders</Text>
        </Box>
        <Box css={{ ta: 'center', fg: 1 }}>
          <Text css={{ fontSize: '$2' }}>Solid</Text>
        </Box>
        <Box css={{ ta: 'center', fg: 2 }}>
          <Text css={{ fontSize: '$2' }}>Text</Text>
        </Box>
      </Flex>
      <Grid
        css={{
          gridTemplateColumns: 'repeat(11, minmax(0, 1fr))',
          gap: 2,
          ai: 'center',
          py: '$3',
        }}
      >
        <Flex align="center" justify="center" css={{ height: 35, backgroundColor: '$gray000' }}>
          <Text css={{ fontSize: '$2' }}>000</Text>
        </Flex>
        <Flex align="center" justify="center" css={{ height: 35, backgroundColor: '$gray100' }}>
          <Text css={{ fontSize: '$2' }}>100</Text>
        </Flex>
        <Flex align="center" justify="center" css={{ height: 35, backgroundColor: '$gray200' }}>
          <Text css={{ fontSize: '$2' }}>200</Text>
        </Flex>
        <Flex align="center" justify="center" css={{ height: 35, backgroundColor: '$gray300' }}>
          <Text css={{ fontSize: '$2' }}>300</Text>
        </Flex>
        <Flex align="center" justify="center" css={{ height: 35, backgroundColor: '$gray400' }}>
          <Text css={{ fontSize: '$2' }}>400</Text>
        </Flex>
        <Flex align="center" justify="center" css={{ height: 35, backgroundColor: '$gray500' }}>
          <Text css={{ fontSize: '$2' }}>500</Text>
        </Flex>
        <Flex align="center" justify="center" css={{ height: 35, backgroundColor: '$gray600' }}>
          <Text css={{ fontSize: '$2' }}>600</Text>
        </Flex>
        <Flex align="center" justify="center" css={{ height: 35, backgroundColor: '$gray700' }}>
          <Text css={{ fontSize: '$2' }}>700</Text>
        </Flex>
        <Flex align="center" justify="center" css={{ height: 35, backgroundColor: '$gray800' }}>
          <Text css={{ fontSize: '$2', color: '$loContrast' }}>800</Text>
        </Flex>
        <Flex align="center" justify="center" css={{ height: 35, backgroundColor: '$gray900' }}>
          <Text css={{ fontSize: '$2', color: '$loContrast' }}>900</Text>
        </Flex>
        <Flex align="center" justify="center" css={{ height: 35, backgroundColor: '$gray1000' }}>
          <Text css={{ fontSize: '$2', color: '$loContrast' }}>1000</Text>
        </Flex>
      </Grid>
    </Box>
  );
}
