import React from 'react';
import NextLink from 'next/link';
import {
  Section,
  Container,
  Heading,
  Link,
  Paragraph,
  Box,
  Grid,
  Text,
} from '@modulz/design-system';

export default function ColorsHome() {
  return (
    <Box css={{ py: '$4', mt: '$4' }}>
      <Section
        size={{
          '@initial': '2',
          '@bp1': '3',
        }}
        css={{
          pt: '$3',
          '@bp2': {
            pt: '$6',
          },
        }}
      >
        <Container size="3">
          <Heading
            size="4"
            css={{
              mb: '$3',
              '@bp1': {
                pr: 100,
              },
              '@bp2': {
                ta: 'center',
                px: 180,
              },
              '@bp3': {
                px: 200,
              },
            }}
          >
            Colors Title
          </Heading>
          <Paragraph
            size="2"
            as="p"
            css={{
              mb: '$6',
              '@bp2': {
                mx: 230,
                ta: 'center',
                mb: '$7',
              },
            }}
          >
            Colors description
          </Paragraph>
          <NextLink href="/docs/colors" passHref>
            <Link variant="blue">Documentation</Link>
          </NextLink>
        </Container>
      </Section>

      <Container size="3" css={{ py: '$7' }}>
        <Grid
          css={{
            gridTemplateColumns: 'repeat(11, minmax(0, 1fr))',
            gap: 2,
            ai: 'center',
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
          <Box css={{ ta: 'center', pb: '$2' }}>
            <Text css={{ fontSize: '$2', color: '$slate11' }}>7</Text>
          </Box>
          <Box css={{ ta: 'center', pb: '$2' }}>
            <Text css={{ fontSize: '$2', color: '$slate11' }}>8</Text>
          </Box>
          <Box css={{ ta: 'center', pb: '$2' }}>
            <Text css={{ fontSize: '$2', color: '$slate11' }}>9</Text>
          </Box>
          <Box css={{ ta: 'center', pb: '$2' }}>
            <Text css={{ fontSize: '$2', color: '$slate11' }}>10</Text>
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
          <Box css={{ height: 35, backgroundColor: '$gray7' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gray8' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gray9' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gray10' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gray11' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gray12' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Mauve</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$mauve1' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$mauve2' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$mauve3' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$mauve4' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$mauve5' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$mauve6' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$mauve7' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$mauve8' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$mauve9' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$mauve10' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$mauve11' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$mauve12' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Slate</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$slate1' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$slate2' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$slate3' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$slate4' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$slate5' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$slate6' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$slate7' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$slate8' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$slate9' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$slate10' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$slate11' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$slate12' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Sand</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$sand1' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$sand2' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$sand3' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$sand4' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$sand5' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$sand6' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$sand7' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$sand8' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$sand9' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$sand10' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$sand11' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$sand12' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Red</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$red1' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$red2' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$red3' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$red4' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$red5' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$red6' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$red7' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$red8' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$red9' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$red10' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$red11' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$red12' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Crimson</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$crimson1' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$crimson2' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$crimson3' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$crimson4' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$crimson5' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$crimson6' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$crimson7' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$crimson8' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$crimson9' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$crimson10' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$crimson11' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$crimson12' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Pink</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$pink1' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$pink2' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$pink3' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$pink4' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$pink5' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$pink6' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$pink7' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$pink8' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$pink9' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$pink10' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$pink11' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$pink12' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Purple</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$purple1' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$purple2' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$purple3' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$purple4' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$purple5' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$purple6' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$purple7' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$purple8' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$purple9' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$purple10' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$purple11' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$purple12' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Violet</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$violet1' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$violet2' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$violet3' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$violet4' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$violet5' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$violet6' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$violet7' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$violet8' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$violet9' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$violet10' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$violet11' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$violet12' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Indigo</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$indigo1' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$indigo2' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$indigo3' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$indigo4' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$indigo5' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$indigo6' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$indigo7' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$indigo8' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$indigo9' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$indigo10' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$indigo11' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$indigo12' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Blue</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$blue1' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$blue2' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$blue3' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$blue4' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$blue5' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$blue6' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$blue7' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$blue8' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$blue9' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$blue10' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$blue11' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$blue12' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Cyan</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$cyan1' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$cyan2' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$cyan3' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$cyan4' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$cyan5' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$cyan6' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$cyan7' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$cyan8' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$cyan9' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$cyan10' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$cyan11' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$cyan12' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Teal</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$teal1' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$teal2' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$teal3' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$teal4' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$teal5' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$teal6' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$teal7' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$teal8' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$teal9' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$teal10' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$teal11' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$teal12' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Green</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$green1' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$green2' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$green3' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$green4' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$green5' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$green6' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$green7' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$green8' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$green9' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$green10' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$green11' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$green12' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Lime</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$lime1' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$lime2' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$lime3' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$lime4' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$lime5' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$lime6' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$lime7' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$lime8' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$lime9' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$lime10' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$lime11' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$lime12' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Yellow</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$yellow1' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$yellow2' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$yellow3' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$yellow4' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$yellow5' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$yellow6' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$yellow7' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$yellow8' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$yellow9' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$yellow10' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$yellow11' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$yellow12' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Orange</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$orange1' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$orange2' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$orange3' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$orange4' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$orange5' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$orange6' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$orange7' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$orange8' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$orange9' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$orange10' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$orange11' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$orange12' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Gold</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$gold1' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gold2' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gold3' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gold4' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gold5' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gold6' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gold7' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gold8' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gold9' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gold10' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gold11' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gold12' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Brown</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$brown1' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$brown2' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$brown3' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$brown4' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$brown5' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$brown6' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$brown7' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$brown8' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$brown9' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$brown10' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$brown11' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$brown12' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Bronze</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$bronze1' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$bronze2' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$bronze3' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$bronze4' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$bronze5' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$bronze6' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$bronze7' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$bronze8' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$bronze9' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$bronze10' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$bronze11' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$bronze12' }}></Box>
        </Grid>
      </Container>
    </Box>
  );
}
