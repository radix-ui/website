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

export function ColorTestBalanceLight() {
  return (
    <Box css={{ my: '$5' }}>
      <Grid
        css={{
          gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',
          ai: 'center',
          filter: 'grayscale(1)',
        }}
      >
        <Box></Box>
        <Box css={{ ta: 'center', pb: '$2' }}>
          <Text css={{ fontSize: '$2', color: '$slate11' }}>000</Text>
        </Box>
        <Box css={{ ta: 'center', pb: '$2' }}>
          <Text css={{ fontSize: '$2', color: '$slate11' }}>100</Text>
        </Box>
        <Box css={{ ta: 'center', pb: '$2' }}>
          <Text css={{ fontSize: '$2', color: '$slate11' }}>200</Text>
        </Box>
        <Box css={{ ta: 'center', pb: '$2' }}>
          <Text css={{ fontSize: '$2', color: '$slate11' }}>300</Text>
        </Box>
        <Box css={{ ta: 'center', pb: '$2' }}>
          <Text css={{ fontSize: '$2', color: '$slate11' }}>400</Text>
        </Box>
        <Box css={{ ta: 'center', pb: '$2' }}>
          <Text css={{ fontSize: '$2', color: '$slate11' }}>500</Text>
        </Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Gray</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$gray000' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$gray100' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$gray4' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$gray300' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$gray400' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$gray6' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Mauve</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$mauve000' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$mauve100' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$mauve4' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$mauve300' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$mauve400' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$mauve6' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Slate</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$slate000' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$slate100' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$slate4' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$slate300' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$slate400' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$slate6' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Sage</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$sage000' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sage100' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sage4' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sage300' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sage400' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sage6' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Olive</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$olive000' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$olive100' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$olive4' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$olive300' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$olive400' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$olive6' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Sand</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$sand000' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sand100' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sand4' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sand300' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sand400' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sand6' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Tomato</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$tomato000' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$tomato100' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$tomato4' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$tomato300' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$tomato400' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$tomato6' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Red</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$red000' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$red100' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$red4' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$red300' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$red400' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$red6' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Crimson</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$crimson000' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$crimson100' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$crimson4' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$crimson300' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$crimson400' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$crimson6' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Pink</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$pink000' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$pink100' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$pink4' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$pink300' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$pink400' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$pink6' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Plum</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$plum000' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$plum100' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$plum4' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$plum300' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$plum400' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$plum6' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Purple</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$purple000' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$purple100' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$purple4' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$purple300' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$purple400' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$purple6' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Violet</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$violet000' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$violet100' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$violet4' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$violet300' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$violet400' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$violet6' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Indigo</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$indigo000' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$indigo100' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$indigo4' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$indigo300' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$indigo400' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$indigo6' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Blue</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$blue000' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$blue100' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$blue4' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$blue300' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$blue400' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$blue6' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Sky</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$sky000' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sky100' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sky4' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sky300' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sky400' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sky6' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Cyan</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$cyan000' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$cyan100' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$cyan4' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$cyan300' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$cyan400' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$cyan6' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Teal</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$teal000' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$teal100' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$teal4' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$teal300' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$teal400' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$teal6' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Mint</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$mint000' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$mint100' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$mint4' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$mint300' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$mint400' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$mint6' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Green</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$green000' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$green100' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$green4' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$green300' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$green400' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$green6' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Grass</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$grass000' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$grass100' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$grass4' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$grass300' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$grass400' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$grass6' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Lime</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$lime000' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$lime100' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$lime4' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$lime300' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$lime400' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$lime6' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Yellow</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$yellow000' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$yellow100' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$yellow4' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$yellow300' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$yellow400' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$yellow6' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Amber</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$amber000' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$amber100' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$amber4' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$amber300' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$amber400' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$amber6' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Orange</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$orange000' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$orange100' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$orange4' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$orange300' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$orange400' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$orange6' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Brown</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$brown000' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$brown100' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$brown4' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$brown300' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$brown400' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$brown6' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Bronze</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$bronze000' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$bronze100' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$bronze4' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$bronze300' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$bronze400' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$bronze6' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Gold</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$gold000' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$gold100' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$gold4' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$gold300' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$gold400' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$gold6' }}></Box>
      </Grid>
    </Box>
  );
}
