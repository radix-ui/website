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

export function ColorTestSaturationLight() {
  return (
    <Box css={{ my: '$5' }}>
      <Grid
        css={{
          gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',
          ai: 'center',
          gap: 2,
        }}
      >
        <Box></Box>
        <Box css={{ ta: 'center', pb: '$2' }}>
          <Text css={{ fontSize: '$2', color: '$slate11' }}>1</Text>
        </Box>
        <Box css={{ ta: 'center', pb: '$2' }}>
          <Text css={{ fontSize: '$2', color: '$slate11' }}>2</Text>
        </Box>
        <Box css={{ ta: 'center', pb: '$2' }}>
          <Text css={{ fontSize: '$2', color: '$slate11' }}>3</Text>
        </Box>
        <Box css={{ ta: 'center', pb: '$2' }}>
          <Text css={{ fontSize: '$2', color: '$slate11' }}>4</Text>
        </Box>
        <Box css={{ ta: 'center', pb: '$2' }}>
          <Text css={{ fontSize: '$2', color: '$slate11' }}>5</Text>
        </Box>
        <Box css={{ ta: 'center', pb: '$2' }}>
          <Text css={{ fontSize: '$2', color: '$slate11' }}>6</Text>
        </Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Gray</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$gray1' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$gray2' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$gray3' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$gray4' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$gray5' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$gray6' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Mauve</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$mauve1' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$mauve2' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$mauve3' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$mauve4' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$mauve5' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$mauve6' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Slate</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$slate1' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$slate2' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$slate3' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$slate4' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$slate5' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$slate6' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Sage</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$sage1' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sage2' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sage3' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sage4' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sage5' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sage6' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Olive</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$olive1' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$olive2' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$olive3' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$olive4' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$olive5' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$olive6' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Sand</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$sand1' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sand2' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sand3' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sand4' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sand5' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sand6' }}></Box>

        <Box css={{ height: 35 }}></Box>
        <Box css={{ height: 35 }}></Box>
        <Box css={{ height: 35 }}></Box>
        <Box css={{ height: 35 }}></Box>
        <Box css={{ height: 35 }}></Box>
        <Box css={{ height: 35 }}></Box>
        <Box css={{ height: 35 }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Tomato</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$tomato1' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$tomato2' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$tomato3' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$tomato4' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$tomato5' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$tomato6' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Red</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$red1' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$red2' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$red3' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$red4' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$red5' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$red6' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Crimson</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$crimson1' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$crimson2' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$crimson3' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$crimson4' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$crimson5' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$crimson6' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Pink</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$pink1' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$pink2' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$pink3' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$pink4' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$pink5' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$pink6' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Plum</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$plum1' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$plum2' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$plum3' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$plum4' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$plum5' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$plum6' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Purple</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$purple1' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$purple2' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$purple3' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$purple4' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$purple5' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$purple6' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Violet</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$violet1' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$violet2' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$violet3' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$violet4' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$violet5' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$violet6' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Indigo</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$indigo1' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$indigo2' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$indigo3' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$indigo4' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$indigo5' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$indigo6' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Blue</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$blue1' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$blue2' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$blue3' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$blue4' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$blue5' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$blue6' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Cyan</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$cyan1' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$cyan2' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$cyan3' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$cyan4' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$cyan5' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$cyan6' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Teal</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$teal1' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$teal2' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$teal3' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$teal4' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$teal5' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$teal6' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Green</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$green1' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$green2' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$green3' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$green4' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$green5' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$green6' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Grass</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$grass1' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$grass2' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$grass3' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$grass4' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$grass5' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$grass6' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Orange</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$orange1' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$orange2' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$orange3' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$orange4' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$orange5' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$orange6' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Brown</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$brown1' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$brown2' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$brown3' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$brown4' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$brown5' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$brown6' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Bronze</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$bronze1' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$bronze2' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$bronze3' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$bronze4' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$bronze5' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$bronze6' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Gold</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$gold1' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$gold2' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$gold3' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$gold4' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$gold5' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$gold6' }}></Box>

        <Box css={{ height: 35 }}></Box>
        <Box css={{ height: 35 }}></Box>
        <Box css={{ height: 35 }}></Box>
        <Box css={{ height: 35 }}></Box>
        <Box css={{ height: 35 }}></Box>
        <Box css={{ height: 35 }}></Box>
        <Box css={{ height: 35 }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Sky</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$sky1' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sky2' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sky3' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sky4' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sky5' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sky6' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Mint</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$mint1' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$mint2' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$mint3' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$mint4' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$mint5' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$mint6' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Lime</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$lime1' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$lime2' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$lime3' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$lime4' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$lime5' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$lime6' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Yellow</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$yellow1' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$yellow2' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$yellow3' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$yellow4' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$yellow5' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$yellow6' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Amber</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$amber1' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$amber2' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$amber3' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$amber4' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$amber5' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$amber6' }}></Box>
      </Grid>
    </Box>
  );
}
