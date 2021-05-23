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
          <NextLink href="/colors/docs/getting-started/installation" passHref>
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
          <Box css={{ height: 35, backgroundColor: '$gray100' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gray200' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gray300' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gray400' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gray500' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gray600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gray700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gray800' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gray900' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gray1000' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Quartz</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$quartz100' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$quartz200' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$quartz300' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$quartz400' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$quartz500' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$quartz600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$quartz700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$quartz800' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$quartz900' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$quartz1000' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Slate</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$slate100' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$slate200' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$slate300' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$slate400' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$slate500' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$slate600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$slate700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$slate800' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$slate900' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$slate1000' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Sand</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$sand100' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$sand200' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$sand300' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$sand400' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$sand500' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$sand600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$sand700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$sand800' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$sand900' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$sand1000' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Red</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$red100' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$red200' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$red300' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$red400' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$red500' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$red600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$red700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$red800' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$red900' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$red1000' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Crimson</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$crimson100' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$crimson200' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$crimson300' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$crimson400' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$crimson500' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$crimson600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$crimson700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$crimson800' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$crimson900' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$crimson1000' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Pink</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$pink100' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$pink200' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$pink300' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$pink400' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$pink500' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$pink600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$pink700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$pink800' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$pink900' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$pink1000' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Purple</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$purple100' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$purple200' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$purple300' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$purple400' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$purple500' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$purple600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$purple700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$purple800' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$purple900' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$purple1000' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Violet</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$violet100' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$violet200' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$violet300' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$violet400' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$violet500' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$violet600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$violet700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$violet800' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$violet900' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$violet1000' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Indigo</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$indigo100' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$indigo200' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$indigo300' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$indigo400' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$indigo500' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$indigo600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$indigo700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$indigo800' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$indigo900' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$indigo1000' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Blue</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$blue100' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$blue200' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$blue300' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$blue400' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$blue500' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$blue600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$blue700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$blue800' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$blue900' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$blue1000' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Cyan</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$cyan100' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$cyan200' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$cyan300' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$cyan400' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$cyan500' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$cyan600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$cyan700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$cyan800' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$cyan900' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$cyan1000' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Teal</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$teal100' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$teal200' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$teal300' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$teal400' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$teal500' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$teal600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$teal700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$teal800' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$teal900' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$teal1000' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Green</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$green100' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$green200' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$green300' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$green400' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$green500' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$green600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$green700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$green800' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$green900' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$green1000' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Lime</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$lime100' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$lime200' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$lime300' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$lime400' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$lime500' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$lime600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$lime700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$lime800' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$lime900' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$lime1000' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Yellow</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$yellow100' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$yellow200' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$yellow300' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$yellow400' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$yellow500' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$yellow600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$yellow700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$yellow800' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$yellow900' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$yellow1000' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Orange</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$orange100' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$orange200' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$orange300' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$orange400' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$orange500' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$orange600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$orange700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$orange800' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$orange900' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$orange1000' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Gold</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$gold100' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gold200' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gold300' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gold400' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gold500' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gold600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gold700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gold800' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gold900' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gold1000' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Brown</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$brown100' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$brown200' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$brown300' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$brown400' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$brown500' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$brown600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$brown700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$brown800' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$brown900' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$brown1000' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Bronze</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$bronze100' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$bronze200' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$bronze300' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$bronze400' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$bronze500' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$bronze600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$bronze700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$bronze800' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$bronze900' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$bronze1000' }}></Box>
        </Grid>
      </Container>
    </Box>
  );
}
