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

export function ColorGrayPairs() {
  return (
    <Box>
      <Box css={{ my: '$5' }}>
        <Grid
          css={{
            gridTemplateColumns: '1fr',
            ai: 'center',
            mb: 2,
            // gap: 2,
          }}
        >
          <Flex css={{ ai: 'center', jc: 'center', height: 35, backgroundColor: '$quartz200' }}>
            <Text css={{ color: '$quartz900' }}>Mauve</Text>
          </Flex>
        </Grid>
        <Grid
          css={{
            gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',
            ai: 'center',
            gap: 2,
          }}
        >
          <Flex css={{ ai: 'center', jc: 'center', height: 35, backgroundColor: '$tomato800' }}>
            <Text css={{ color: 'white' }}>Tomato</Text>
          </Flex>
          <Flex css={{ ai: 'center', jc: 'center', height: 35, backgroundColor: '$red800' }}>
            <Text css={{ color: 'white' }}>Red</Text>
          </Flex>
          <Flex css={{ ai: 'center', jc: 'center', height: 35, backgroundColor: '$crimson800' }}>
            <Text css={{ color: 'white' }}>Crimson</Text>
          </Flex>
          <Flex css={{ ai: 'center', jc: 'center', height: 35, backgroundColor: '$pink800' }}>
            <Text css={{ color: 'white' }}>Pink</Text>
          </Flex>
          <Flex css={{ ai: 'center', jc: 'center', height: 35, backgroundColor: '$plum800' }}>
            <Text css={{ color: 'white' }}>Plum</Text>
          </Flex>
          <Flex css={{ ai: 'center', jc: 'center', height: 35, backgroundColor: '$purple800' }}>
            <Text css={{ color: 'white' }}>Purple</Text>
          </Flex>
          <Flex css={{ ai: 'center', jc: 'center', height: 35, backgroundColor: '$violet800' }}>
            <Text css={{ color: 'white' }}>Violet</Text>
          </Flex>
        </Grid>
      </Box>

      <Box css={{ my: '$5' }}>
        <Grid
          css={{
            gridTemplateColumns: '1fr',
            ai: 'center',
            mb: 2,
            // gap: 2,
          }}
        >
          <Flex css={{ ai: 'center', jc: 'center', height: 35, backgroundColor: '$slate200' }}>
            <Text css={{ color: '$slate900' }}>Slate</Text>
          </Flex>
        </Grid>
        <Grid
          css={{
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            ai: 'center',
            gap: 2,
          }}
        >
          <Flex css={{ ai: 'center', jc: 'center', height: 35, backgroundColor: '$indigo800' }}>
            <Text css={{ color: 'white' }}>Indigo</Text>
          </Flex>
          <Flex css={{ ai: 'center', jc: 'center', height: 35, backgroundColor: '$blue800' }}>
            <Text css={{ color: 'white' }}>Blue</Text>
          </Flex>
          <Flex css={{ ai: 'center', jc: 'center', height: 35, backgroundColor: '$sky800' }}>
            <Text css={{ color: 'black' }}>Sky</Text>
          </Flex>
          <Flex css={{ ai: 'center', jc: 'center', height: 35, backgroundColor: '$cyan800' }}>
            <Text css={{ color: 'white' }}>Cyan</Text>
          </Flex>
        </Grid>
      </Box>

      <Box css={{ my: '$5' }}>
        <Grid
          css={{
            gridTemplateColumns: '1fr',
            ai: 'center',
            mb: 2,
            // gap: 2,
          }}
        >
          <Flex css={{ ai: 'center', jc: 'center', height: 35, backgroundColor: '$sage200' }}>
            <Text css={{ color: '$sage900' }}>Sage</Text>
          </Flex>
        </Grid>
        <Grid
          css={{
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            ai: 'center',
            gap: 2,
          }}
        >
          <Flex css={{ ai: 'center', jc: 'center', height: 35, backgroundColor: '$teal800' }}>
            <Text css={{ color: 'white' }}>Teal</Text>
          </Flex>
          <Flex css={{ ai: 'center', jc: 'center', height: 35, backgroundColor: '$mint800' }}>
            <Text css={{ color: 'black' }}>Mint</Text>
          </Flex>
          <Flex css={{ ai: 'center', jc: 'center', height: 35, backgroundColor: '$green800' }}>
            <Text css={{ color: 'white' }}>Green</Text>
          </Flex>
        </Grid>
      </Box>

      <Box css={{ my: '$5' }}>
        <Grid
          css={{
            gridTemplateColumns: '1fr',
            ai: 'center',
            mb: 2,
            // gap: 2,
          }}
        >
          <Flex css={{ ai: 'center', jc: 'center', height: 35, backgroundColor: '$olive200' }}>
            <Text css={{ color: '$olive900' }}>Olive</Text>
          </Flex>
        </Grid>
        <Grid
          css={{
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            ai: 'center',
            gap: 2,
          }}
        >
          <Flex css={{ ai: 'center', jc: 'center', height: 35, backgroundColor: '$grass800' }}>
            <Text css={{ color: 'white' }}>Grass</Text>
          </Flex>
          <Flex css={{ ai: 'center', jc: 'center', height: 35, backgroundColor: '$lime800' }}>
            <Text css={{ color: 'black' }}>Lime</Text>
          </Flex>
        </Grid>
      </Box>

      <Box css={{ my: '$5' }}>
        <Grid
          css={{
            gridTemplateColumns: '1fr',
            ai: 'center',
            mb: 2,
            // gap: 2,
          }}
        >
          <Flex css={{ ai: 'center', jc: 'center', height: 35, backgroundColor: '$sand200' }}>
            <Text css={{ color: '$sand900' }}>Sand</Text>
          </Flex>
        </Grid>
        <Grid
          css={{
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            ai: 'center',
            gap: 2,
          }}
        >
          <Flex css={{ ai: 'center', jc: 'center', height: 35, backgroundColor: '$yellow800' }}>
            <Text css={{ color: 'black' }}>Yellow</Text>
          </Flex>
          <Flex css={{ ai: 'center', jc: 'center', height: 35, backgroundColor: '$amber800' }}>
            <Text css={{ color: 'black' }}>Amber</Text>
          </Flex>
          <Flex css={{ ai: 'center', jc: 'center', height: 35, backgroundColor: '$orange800' }}>
            <Text css={{ color: 'white' }}>Orange</Text>
          </Flex>
          <Flex css={{ ai: 'center', jc: 'center', height: 35, backgroundColor: '$brown800' }}>
            <Text css={{ color: 'white' }}>Brown</Text>
          </Flex>
        </Grid>
      </Box>
    </Box>
  );
}
