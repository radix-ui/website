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

export function ColorTestBalanceDark() {
  return (
    <Box css={{ my: '$5' }}>
      <Grid
        css={{
          gridTemplateColumns: 'repeat(6, minmax(0, 1fr))',
          ai: 'center',
          filter: 'grayscale(1)',
        }}
      >
        <Box></Box>
        <Box css={{ ta: 'center', pb: '$2' }}>
          <Text css={{ fontSize: '$2', color: '$slate11' }}>600</Text>
        </Box>
        <Box css={{ ta: 'center', pb: '$2' }}>
          <Text css={{ fontSize: '$2', color: '$slate11' }}>700</Text>
        </Box>
        <Box css={{ ta: 'center', pb: '$2' }}>
          <Text css={{ fontSize: '$2', color: '$slate11' }}>800</Text>
        </Box>
        <Box css={{ ta: 'center', pb: '$2' }}>
          <Text css={{ fontSize: '$2', color: '$slate11' }}>900</Text>
        </Box>
        <Box css={{ ta: 'center', pb: '$2' }}>
          <Text css={{ fontSize: '$2', color: '$slate11' }}>1000</Text>
        </Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Gray</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$gray600' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$gray9' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$gray10' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$gray11' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$gray12' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Mauve</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$mauve600' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$mauve9' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$mauve10' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$mauve11' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$mauve12' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Slate</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$slate600' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$slate9' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$slate10' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$slate11' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$slate12' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Sage</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$sage600' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sage9' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sage10' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sage11' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sage12' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Olive</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$olive600' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$olive9' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$olive10' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$olive11' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$olive12' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Sand</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$sand600' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sand9' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sand10' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sand11' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sand12' }}></Box>

        <Box css={{ height: 35 }}></Box>
        <Box css={{ height: 35 }}></Box>
        <Box css={{ height: 35 }}></Box>
        <Box css={{ height: 35 }}></Box>
        <Box css={{ height: 35 }}></Box>
        <Box css={{ height: 35 }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Tomato</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$tomato600' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$tomato9' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$tomato10' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$tomato11' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$tomato12' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Red</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$red600' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$red9' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$red10' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$red11' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$red12' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Crimson</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$crimson600' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$crimson9' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$crimson10' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$crimson11' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$crimson12' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Pink</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$pink600' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$pink9' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$pink10' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$pink11' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$pink12' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Plum</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$plum600' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$plum9' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$plum10' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$plum11' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$plum12' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Purple</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$purple600' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$purple9' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$purple10' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$purple11' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$purple12' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Violet</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$violet600' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$violet9' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$violet10' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$violet11' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$violet12' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Indigo</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$indigo600' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$indigo9' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$indigo10' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$indigo11' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$indigo12' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Blue</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$blue600' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$blue9' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$blue10' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$blue11' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$blue12' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Cyan</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$cyan600' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$cyan9' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$cyan10' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$cyan11' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$cyan12' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Teal</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$teal600' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$teal9' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$teal10' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$teal11' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$teal12' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Green</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$green600' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$green9' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$green10' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$green11' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$green12' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Grass</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$grass600' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$grass9' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$grass10' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$grass11' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$grass12' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Orange</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$orange600' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$orange9' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$orange10' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$orange11' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$orange12' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Brown</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$brown600' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$brown9' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$brown10' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$brown11' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$brown12' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Bronze</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$bronze600' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$bronze9' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$bronze10' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$bronze11' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$bronze12' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Gold</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$gold600' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$gold9' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$gold10' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$gold11' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$gold12' }}></Box>

        <Box css={{ height: 35 }}></Box>
        <Box css={{ height: 35 }}></Box>
        <Box css={{ height: 35 }}></Box>
        <Box css={{ height: 35 }}></Box>
        <Box css={{ height: 35 }}></Box>
        <Box css={{ height: 35 }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Sky</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$sky600' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sky9' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sky10' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sky11' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sky12' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Mint</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$mint600' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$mint9' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$mint10' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$mint11' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$mint12' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Lime</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$lime600' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$lime9' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$lime10' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$lime11' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$lime12' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Yellow</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$yellow600' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$yellow9' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$yellow10' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$yellow11' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$yellow12' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Amber</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$amber600' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$amber9' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$amber10' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$amber11' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$amber12' }}></Box>
      </Grid>
    </Box>
  );
}
