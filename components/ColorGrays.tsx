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

export function ColorGrays() {
  return (
    <Box css={{ my: '$5' }}>
      <Grid
        css={{
          gridTemplateColumns: 'repeat(6, minmax(0, 1fr))',
          ai: 'center',
          gap: 2,
        }}
      >
        <Flex css={{ ai: 'center', jc: 'center', height: 35, backgroundColor: '$gray800' }}>
          <Text css={{ color: 'white' }}>Gray</Text>
        </Flex>
        <Flex css={{ ai: 'center', jc: 'center', height: 35, backgroundColor: '$quartz800' }}>
          <Text css={{ color: 'white' }}>Mauve</Text>
        </Flex>
        <Flex css={{ ai: 'center', jc: 'center', height: 35, backgroundColor: '$slate800' }}>
          <Text css={{ color: 'white' }}>Slate</Text>
        </Flex>
        <Flex css={{ ai: 'center', jc: 'center', height: 35, backgroundColor: '$sage800' }}>
          <Text css={{ color: 'white' }}>Sage</Text>
        </Flex>
        <Flex css={{ ai: 'center', jc: 'center', height: 35, backgroundColor: '$olive800' }}>
          <Text css={{ color: 'white' }}>Olive</Text>
        </Flex>
        <Flex css={{ ai: 'center', jc: 'center', height: 35, backgroundColor: '$sand800' }}>
          <Text css={{ color: 'white' }}>Sand</Text>
        </Flex>
      </Grid>
    </Box>
  );
}
