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
          <Flex css={{ ai: 'center', jc: 'center', height: 35, backgroundColor: '$mauve4' }}>
            <Text css={{ color: '$mauve11' }}>Mauve</Text>
          </Flex>
        </Grid>
        <Grid
          css={{
            gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',
            ai: 'center',
            gap: 2,
          }}
        >
          <Flex css={{ ai: 'center', jc: 'center', height: 35, backgroundColor: '$tomato10' }}>
            <Text css={{ color: 'white' }}>Tomato</Text>
          </Flex>
          <Flex css={{ ai: 'center', jc: 'center', height: 35, backgroundColor: '$red10' }}>
            <Text css={{ color: 'white' }}>Red</Text>
          </Flex>
          <Flex css={{ ai: 'center', jc: 'center', height: 35, backgroundColor: '$crimson10' }}>
            <Text css={{ color: 'white' }}>Crimson</Text>
          </Flex>
          <Flex css={{ ai: 'center', jc: 'center', height: 35, backgroundColor: '$pink10' }}>
            <Text css={{ color: 'white' }}>Pink</Text>
          </Flex>
          <Flex css={{ ai: 'center', jc: 'center', height: 35, backgroundColor: '$plum10' }}>
            <Text css={{ color: 'white' }}>Plum</Text>
          </Flex>
          <Flex css={{ ai: 'center', jc: 'center', height: 35, backgroundColor: '$purple10' }}>
            <Text css={{ color: 'white' }}>Purple</Text>
          </Flex>
          <Flex css={{ ai: 'center', jc: 'center', height: 35, backgroundColor: '$violet10' }}>
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
          <Flex css={{ ai: 'center', jc: 'center', height: 35, backgroundColor: '$slate4' }}>
            <Text css={{ color: '$slate11' }}>Slate</Text>
          </Flex>
        </Grid>
        <Grid
          css={{
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            ai: 'center',
            gap: 2,
          }}
        >
          <Flex css={{ ai: 'center', jc: 'center', height: 35, backgroundColor: '$indigo10' }}>
            <Text css={{ color: 'white' }}>Indigo</Text>
          </Flex>
          <Flex css={{ ai: 'center', jc: 'center', height: 35, backgroundColor: '$blue10' }}>
            <Text css={{ color: 'white' }}>Blue</Text>
          </Flex>
          <Flex css={{ ai: 'center', jc: 'center', height: 35, backgroundColor: '$sky10' }}>
            <Text css={{ color: 'black' }}>Sky</Text>
          </Flex>
          <Flex css={{ ai: 'center', jc: 'center', height: 35, backgroundColor: '$cyan10' }}>
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
          <Flex css={{ ai: 'center', jc: 'center', height: 35, backgroundColor: '$sage4' }}>
            <Text css={{ color: '$sage11' }}>Sage</Text>
          </Flex>
        </Grid>
        <Grid
          css={{
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            ai: 'center',
            gap: 2,
          }}
        >
          <Flex css={{ ai: 'center', jc: 'center', height: 35, backgroundColor: '$teal10' }}>
            <Text css={{ color: 'white' }}>Teal</Text>
          </Flex>
          <Flex css={{ ai: 'center', jc: 'center', height: 35, backgroundColor: '$mint10' }}>
            <Text css={{ color: 'black' }}>Mint</Text>
          </Flex>
          <Flex css={{ ai: 'center', jc: 'center', height: 35, backgroundColor: '$green10' }}>
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
          <Flex css={{ ai: 'center', jc: 'center', height: 35, backgroundColor: '$olive4' }}>
            <Text css={{ color: '$olive11' }}>Olive</Text>
          </Flex>
        </Grid>
        <Grid
          css={{
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            ai: 'center',
            gap: 2,
          }}
        >
          <Flex css={{ ai: 'center', jc: 'center', height: 35, backgroundColor: '$grass10' }}>
            <Text css={{ color: 'white' }}>Grass</Text>
          </Flex>
          <Flex css={{ ai: 'center', jc: 'center', height: 35, backgroundColor: '$lime10' }}>
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
          <Flex css={{ ai: 'center', jc: 'center', height: 35, backgroundColor: '$sand4' }}>
            <Text css={{ color: '$sand11' }}>Sand</Text>
          </Flex>
        </Grid>
        <Grid
          css={{
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            ai: 'center',
            gap: 2,
          }}
        >
          <Flex css={{ ai: 'center', jc: 'center', height: 35, backgroundColor: '$yellow10' }}>
            <Text css={{ color: 'black' }}>Yellow</Text>
          </Flex>
          <Flex css={{ ai: 'center', jc: 'center', height: 35, backgroundColor: '$amber10' }}>
            <Text css={{ color: 'black' }}>Amber</Text>
          </Flex>
          <Flex css={{ ai: 'center', jc: 'center', height: 35, backgroundColor: '$orange10' }}>
            <Text css={{ color: 'white' }}>Orange</Text>
          </Flex>
          <Flex css={{ ai: 'center', jc: 'center', height: 35, backgroundColor: '$brown10' }}>
            <Text css={{ color: 'white' }}>Brown</Text>
          </Flex>
        </Grid>
      </Box>
    </Box>
  );
}
