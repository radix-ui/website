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

export function ColorGrayPairsComplementary() {
  return (
    <Box>
      <Grid
        css={{
          gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
          ai: 'center',
          gap: 2,
          my: '$5',
        }}
      >
        <Flex css={{ ai: 'center', jc: 'center', height: 65, backgroundColor: '$tomato800' }}>
          <Text css={{ color: 'white' }}>Tomato</Text>
        </Flex>
        <Flex css={{ ai: 'center', jc: 'center', height: 65, backgroundColor: '$red800' }}>
          <Text css={{ color: 'white' }}>Red</Text>
        </Flex>
        <Flex css={{ ai: 'center', jc: 'center', height: 65, backgroundColor: '$crimson800' }}>
          <Text css={{ color: 'white' }}>Crimson</Text>
        </Flex>
        <Flex css={{ ai: 'center', jc: 'center', height: 65, backgroundColor: '$pink800' }}>
          <Text css={{ color: 'white' }}>Pink</Text>
        </Flex>
        <Flex css={{ ai: 'center', jc: 'center', height: 65, backgroundColor: '$plum800' }}>
          <Text css={{ color: 'white' }}>Plum</Text>
        </Flex>
        <Flex css={{ ai: 'center', jc: 'center', height: 65, backgroundColor: '$purple800' }}>
          <Text css={{ color: 'white' }}>Purple</Text>
        </Flex>
        <Flex css={{ ai: 'center', jc: 'center', height: 65, backgroundColor: '$violet800' }}>
          <Text css={{ color: 'white' }}>Violet</Text>
        </Flex>
        <Flex css={{ ai: 'center', jc: 'center', height: 65, backgroundColor: '$indigo800' }}>
          <Text css={{ color: 'white' }}>Indigo</Text>
        </Flex>
        <Flex css={{ ai: 'center', jc: 'center', height: 65, backgroundColor: '$blue800' }}>
          <Text css={{ color: 'white' }}>Blue</Text>
        </Flex>
        <Flex css={{ ai: 'center', jc: 'center', height: 65, backgroundColor: '$cyan800' }}>
          <Text css={{ color: 'white' }}>Cyan</Text>
        </Flex>
        <Flex css={{ ai: 'center', jc: 'center', height: 65, backgroundColor: '$teal800' }}>
          <Text css={{ color: 'white' }}>Teal</Text>
        </Flex>
        <Flex css={{ ai: 'center', jc: 'center', height: 65, backgroundColor: '$green800' }}>
          <Text css={{ color: 'white' }}>Green</Text>
        </Flex>
        <Flex css={{ ai: 'center', jc: 'center', height: 65, backgroundColor: '$grass800' }}>
          <Text css={{ color: 'white' }}>Grass</Text>
        </Flex>
        <Flex css={{ ai: 'center', jc: 'center', height: 65, backgroundColor: '$orange800' }}>
          <Text css={{ color: 'white' }}>Orange</Text>
        </Flex>
        <Flex css={{ ai: 'center', jc: 'center', height: 65, backgroundColor: '$brown800' }}>
          <Text css={{ color: 'white' }}>Brown</Text>
        </Flex>
      </Grid>

      <Paragraph css={{ mb: '$3' }}>5 scales designed for black foreground text.</Paragraph>

      <Grid
        css={{
          gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
          ai: 'center',
          gap: 2,
          my: '$5',
        }}
      >
        <Flex css={{ ai: 'center', jc: 'center', height: 65, backgroundColor: '$sky800' }}>
          <Text css={{ color: 'black' }}>Sky</Text>
        </Flex>
        <Flex css={{ ai: 'center', jc: 'center', height: 65, backgroundColor: '$mint800' }}>
          <Text css={{ color: 'black' }}>Mint</Text>
        </Flex>
        <Flex css={{ ai: 'center', jc: 'center', height: 65, backgroundColor: '$lime800' }}>
          <Text css={{ color: 'black' }}>Lime</Text>
        </Flex>
        <Flex css={{ ai: 'center', jc: 'center', height: 65, backgroundColor: '$yellow800' }}>
          <Text css={{ color: 'black' }}>Yellow</Text>
        </Flex>
        <Flex css={{ ai: 'center', jc: 'center', height: 65, backgroundColor: '$amber800' }}>
          <Text css={{ color: 'black' }}>Amber</Text>
        </Flex>
      </Grid>
    </Box>
  );
}
