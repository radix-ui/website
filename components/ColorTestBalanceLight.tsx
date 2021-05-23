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
          <Text css={{ fontSize: '$2', color: '$slate900' }}>000</Text>
        </Box>
        <Box css={{ ta: 'center', pb: '$2' }}>
          <Text css={{ fontSize: '$2', color: '$slate900' }}>100</Text>
        </Box>
        <Box css={{ ta: 'center', pb: '$2' }}>
          <Text css={{ fontSize: '$2', color: '$slate900' }}>200</Text>
        </Box>
        <Box css={{ ta: 'center', pb: '$2' }}>
          <Text css={{ fontSize: '$2', color: '$slate900' }}>300</Text>
        </Box>
        <Box css={{ ta: 'center', pb: '$2' }}>
          <Text css={{ fontSize: '$2', color: '$slate900' }}>400</Text>
        </Box>
        <Box css={{ ta: 'center', pb: '$2' }}>
          <Text css={{ fontSize: '$2', color: '$slate900' }}>500</Text>
        </Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Gray</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$gray000' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$gray100' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$gray200' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$gray300' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$gray400' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$gray500' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Quartz</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$quartz000' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$quartz100' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$quartz200' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$quartz300' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$quartz400' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$quartz500' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Slate</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$slate000' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$slate100' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$slate200' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$slate300' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$slate400' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$slate500' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Sage</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$sage000' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sage100' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sage200' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sage300' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sage400' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sage500' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Olive</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$olive000' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$olive100' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$olive200' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$olive300' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$olive400' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$olive500' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Sand</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$sand000' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sand100' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sand200' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sand300' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sand400' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sand500' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Tomato</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$tomato000' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$tomato100' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$tomato200' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$tomato300' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$tomato400' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$tomato500' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Red</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$red000' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$red100' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$red200' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$red300' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$red400' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$red500' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Crimson</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$crimson000' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$crimson100' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$crimson200' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$crimson300' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$crimson400' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$crimson500' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Pink</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$pink000' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$pink100' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$pink200' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$pink300' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$pink400' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$pink500' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Plum</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$plum000' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$plum100' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$plum200' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$plum300' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$plum400' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$plum500' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Purple</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$purple000' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$purple100' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$purple200' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$purple300' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$purple400' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$purple500' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Violet</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$violet000' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$violet100' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$violet200' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$violet300' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$violet400' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$violet500' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Indigo</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$indigo000' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$indigo100' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$indigo200' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$indigo300' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$indigo400' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$indigo500' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Blue</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$blue000' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$blue100' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$blue200' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$blue300' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$blue400' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$blue500' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Sky</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$sky000' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sky100' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sky200' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sky300' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sky400' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sky500' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Cyan</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$cyan000' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$cyan100' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$cyan200' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$cyan300' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$cyan400' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$cyan500' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Teal</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$teal000' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$teal100' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$teal200' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$teal300' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$teal400' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$teal500' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Mint</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$mint000' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$mint100' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$mint200' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$mint300' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$mint400' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$mint500' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Green</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$green000' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$green100' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$green200' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$green300' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$green400' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$green500' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Grass</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$grass000' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$grass100' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$grass200' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$grass300' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$grass400' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$grass500' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Lime</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$lime000' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$lime100' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$lime200' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$lime300' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$lime400' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$lime500' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Yellow</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$yellow000' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$yellow100' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$yellow200' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$yellow300' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$yellow400' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$yellow500' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Amber</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$amber000' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$amber100' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$amber200' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$amber300' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$amber400' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$amber500' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Orange</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$orange000' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$orange100' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$orange200' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$orange300' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$orange400' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$orange500' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Brown</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$brown000' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$brown100' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$brown200' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$brown300' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$brown400' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$brown500' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Bronze</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$bronze000' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$bronze100' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$bronze200' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$bronze300' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$bronze400' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$bronze500' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Gold</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$gold000' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$gold100' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$gold200' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$gold300' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$gold400' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$gold500' }}></Box>
      </Grid>
    </Box>
  );
}
