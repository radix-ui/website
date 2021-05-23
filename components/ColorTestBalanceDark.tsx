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
          columnGap: 2,
        }}
      >
        <Box></Box>
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
        <Box css={{ height: 35, backgroundColor: '$gray600' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$gray700' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$gray800' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$gray900' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$gray1000' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Quartz</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$quartz600' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$quartz700' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$quartz800' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$quartz900' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$quartz1000' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Slate</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$slate600' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$slate700' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$slate800' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$slate900' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$slate1000' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Sage</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$sage600' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sage700' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sage800' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sage900' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sage1000' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Olive</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$olive600' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$olive700' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$olive800' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$olive900' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$olive1000' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Sand</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$sand600' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sand700' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sand800' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sand900' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sand1000' }}></Box>

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
        <Box css={{ height: 35, backgroundColor: '$tomato700' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$tomato800' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$tomato900' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$tomato1000' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Red</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$red600' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$red700' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$red800' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$red900' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$red1000' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Crimson</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$crimson600' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$crimson700' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$crimson800' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$crimson900' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$crimson1000' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Pink</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$pink600' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$pink700' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$pink800' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$pink900' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$pink1000' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Plum</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$plum600' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$plum700' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$plum800' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$plum900' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$plum1000' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Purple</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$purple600' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$purple700' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$purple800' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$purple900' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$purple1000' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Violet</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$violet600' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$violet700' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$violet800' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$violet900' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$violet1000' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Indigo</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$indigo600' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$indigo700' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$indigo800' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$indigo900' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$indigo1000' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Blue</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$blue600' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$blue700' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$blue800' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$blue900' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$blue1000' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Cyan</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$cyan600' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$cyan700' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$cyan800' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$cyan900' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$cyan1000' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Teal</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$teal600' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$teal700' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$teal800' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$teal900' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$teal1000' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Green</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$green600' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$green700' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$green800' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$green900' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$green1000' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Grass</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$grass600' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$grass700' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$grass800' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$grass900' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$grass1000' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Orange</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$orange600' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$orange700' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$orange800' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$orange900' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$orange1000' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Brown</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$brown600' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$brown700' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$brown800' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$brown900' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$brown1000' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Bronze</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$bronze600' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$bronze700' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$bronze800' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$bronze900' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$bronze1000' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Gold</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$gold600' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$gold700' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$gold800' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$gold900' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$gold1000' }}></Box>

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
        <Box css={{ height: 35, backgroundColor: '$sky700' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sky800' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sky900' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sky1000' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Mint</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$mint600' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$mint700' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$mint800' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$mint900' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$mint1000' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Lime</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$lime600' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$lime700' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$lime800' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$lime900' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$lime1000' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Yellow</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$yellow600' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$yellow700' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$yellow800' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$yellow900' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$yellow1000' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Amber</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$amber600' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$amber700' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$amber800' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$amber900' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$amber1000' }}></Box>
      </Grid>
    </Box>
  );
}
