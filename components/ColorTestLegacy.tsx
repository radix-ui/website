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
    <Box>
      <Box css={{ my: '$5' }}>
        <Grid
          css={{
            gridTemplateColumns: 'repeat(6, minmax(0, 1fr))',
            ai: 'center',
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

      <Box>
        <Text size="6" as="h4" css={{ fontWeight: 500, lineHeight: '27px', mt: '$8', mb: '$1' }}>
          Warm & cool hues
        </Text>
        <Paragraph css={{ mb: '$7' }}>
          There are 8 warm hues and 8 cool hues. All <Code>800</Code> colors should be balanced
          optically, especially if they are adjacent on the spectrum.
        </Paragraph>
      </Box>

      <Box>
        <Grid
          css={{
            gridTemplateColumns: 'repeat(9, minmax(0, 1fr))',
            gap: 2,
            ai: 'center',
          }}
        >
          <Flex css={{ ai: 'center', jc: 'center', height: 100 }}>
            <Text size="3" css={{ color: '$slate900' }}>
              Warm
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$yellow800',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$orange800',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$gold800',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$brown800',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$bronze800',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$red800',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$crimson800',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$pink800',
            }}
          ></Flex>
          <Flex css={{ ai: 'center', jc: 'center', height: 100 }}>
            <Text size="3" css={{ color: '$slate900' }}>
              Cool
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$purple800',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$violet800',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$indigo800',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$blue800',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$cyan800',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$teal800',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$green800',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$lime800',
            }}
          ></Flex>
        </Grid>
      </Box>

      <Box>
        <Paragraph css={{ my: '$7' }}>
          All <Code>200</Code> colors should be balanced optically, especially if they are adjacent
          on the spectrum.
        </Paragraph>
      </Box>

      <Box>
        <Grid
          css={{
            gridTemplateColumns: 'repeat(9, minmax(0, 1fr))',
            gap: 2,
            ai: 'center',
          }}
        >
          <Flex css={{ ai: 'center', jc: 'center', height: 100 }}>
            <Text size="3" css={{ color: '$slate900' }}>
              Warm
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$yellow200',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$orange200',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$gold200',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$brown200',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$bronze200',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$red200',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$crimson200',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$pink200',
            }}
          ></Flex>
          <Flex css={{ ai: 'center', jc: 'center', height: 100 }}>
            <Text size="3" css={{ color: '$slate900' }}>
              Cool
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$purple200',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$violet200',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$indigo200',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$blue200',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$cyan200',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$teal200',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$green200',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$lime200',
            }}
          ></Flex>
        </Grid>
      </Box>

      <Box>
        <Text size="6" as="h4" css={{ fontWeight: 500, lineHeight: '27px', mt: '$8', mb: '$1' }}>
          Lines
        </Text>
        <Paragraph css={{ mb: '$7' }}>
          The <Code>500</Code> line should be very subtle, but visible on all backgrounds.
        </Paragraph>
      </Box>

      <Box>
        <Flex css={{ position: 'relative' }}>
          <Box
            css={{
              fb: '0',
              fg: '1',
              height: 160,
              backgroundColor: '$loContrast',
            }}
          ></Box>
          <Box css={{ fb: '0', fg: '1', height: 160, backgroundColor: '$slate100' }}></Box>
          <Box css={{ fb: '0', fg: '1', height: 160, backgroundColor: '$slate200' }}></Box>
          <Box css={{ fb: '0', fg: '1', height: 160, backgroundColor: '$slate300' }}></Box>
          <Box css={{ fb: '0', fg: '1', height: 160, backgroundColor: '$slate400' }}></Box>
          <Box
            css={{
              position: 'absolute',
              top: '50%',
              left: '0',
              width: '100%',
              height: 1,
              backgroundColor: '$slate500',
            }}
          ></Box>
        </Flex>
      </Box>

      <Box>
        <Paragraph css={{ my: '$7' }}>
          These <Code>500</Code> lines should have a nice constrast against the <Code>100</Code>{' '}
          background. Make sure the borders don't look too harsh or vibrant.
        </Paragraph>
      </Box>

      <Box>
        <Grid
          css={{
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: '$7',
            ai: 'center',
          }}
        >
          <Box
            css={{
              p: '$3',
              borderRadius: '$3',
              backgroundColor: '$red100',
              border: '1px solid $red500',
            }}
          >
            <Text size="3" as="p" css={{ color: '$red900', lineHeight: '23px' }}>
              Warning: obsessing over color is a terrible idea. Chill down ffs.
            </Text>
          </Box>
          <Box
            css={{
              p: '$3',
              borderRadius: '$3',
              backgroundColor: '$crimson100',
              border: '1px solid $red500',
            }}
          >
            <Text size="3" as="p" css={{ color: '$crimson900', lineHeight: '23px' }}>
              Warning: obsessing over color is a terrible idea. Chill down ffs.
            </Text>
          </Box>
          <Box
            css={{
              p: '$3',
              borderRadius: '$3',
              backgroundColor: '$pink100',
              border: '1px solid $pink500',
            }}
          >
            <Text size="3" as="p" css={{ color: '$pink900', lineHeight: '23px' }}>
              Warning: obsessing over color is a terrible idea. Chill down ffs.
            </Text>
          </Box>
          <Box
            css={{
              p: '$3',
              borderRadius: '$3',
              backgroundColor: '$purple100',
              border: '1px solid $purple500',
            }}
          >
            <Text size="3" as="p" css={{ color: '$purple900', lineHeight: '23px' }}>
              Warning: obsessing over color is a terrible idea. Chill down ffs.
            </Text>
          </Box>
          <Box
            css={{
              p: '$3',
              borderRadius: '$3',
              backgroundColor: '$violet100',
              border: '1px solid $violet500',
            }}
          >
            <Text size="3" as="p" css={{ color: '$violet900', lineHeight: '23px' }}>
              Warning: obsessing over color is a terrible idea. Chill down ffs.
            </Text>
          </Box>
          <Box
            css={{
              p: '$3',
              borderRadius: '$3',
              backgroundColor: '$indigo100',
              border: '1px solid $indigo500',
            }}
          >
            <Text size="3" as="p" css={{ color: '$indigo900', lineHeight: '23px' }}>
              Warning: obsessing over color is a terrible idea. Chill down ffs.
            </Text>
          </Box>
          <Box
            css={{
              p: '$3',
              borderRadius: '$3',
              backgroundColor: '$blue100',
              border: '1px solid $blue500',
            }}
          >
            <Text size="3" as="p" css={{ color: '$blue900', lineHeight: '23px' }}>
              Warning: obsessing over color is a terrible idea. Chill down ffs.
            </Text>
          </Box>
          <Box
            css={{
              p: '$3',
              borderRadius: '$3',
              backgroundColor: '$cyan100',
              border: '1px solid $cyan500',
            }}
          >
            <Text size="3" as="p" css={{ color: '$cyan900', lineHeight: '23px' }}>
              Warning: obsessing over color is a terrible idea. Chill down ffs.
            </Text>
          </Box>
          <Box
            css={{
              p: '$3',
              borderRadius: '$3',
              backgroundColor: '$teal100',
              border: '1px solid $teal500',
            }}
          >
            <Text size="3" as="p" css={{ color: '$teal900', lineHeight: '23px' }}>
              Warning: obsessing over color is a terrible idea. Chill down ffs.
            </Text>
          </Box>
          <Box
            css={{
              p: '$3',
              borderRadius: '$3',
              backgroundColor: '$green100',
              border: '1px solid $green500',
            }}
          >
            <Text size="3" as="p" css={{ color: '$green900', lineHeight: '23px' }}>
              Warning: obsessing over color is a terrible idea. Chill down ffs.
            </Text>
          </Box>
          <Box
            css={{
              p: '$3',
              borderRadius: '$3',
              backgroundColor: '$lime100',
              border: '1px solid $lime500',
            }}
          >
            <Text size="3" as="p" css={{ color: '$lime900', lineHeight: '23px' }}>
              Warning: obsessing over color is a terrible idea. Chill down ffs.
            </Text>
          </Box>
          <Box
            css={{
              p: '$3',
              borderRadius: '$3',
              backgroundColor: '$yellow100',
              border: '1px solid $yellow500',
            }}
          >
            <Text size="3" as="p" css={{ color: '$yellow900', lineHeight: '23px' }}>
              Warning: obsessing over color is a terrible idea. Chill down ffs.
            </Text>
          </Box>
          <Box
            css={{
              p: '$3',
              borderRadius: '$3',
              backgroundColor: '$orange100',
              border: '1px solid $orange500',
            }}
          >
            <Text size="3" as="p" css={{ color: '$orange900', lineHeight: '23px' }}>
              Warning: obsessing over color is a terrible idea. Chill down ffs.
            </Text>
          </Box>
          <Box
            css={{
              p: '$3',
              borderRadius: '$3',
              backgroundColor: '$bronze100',
              border: '1px solid $bronze500',
            }}
          >
            <Text size="3" as="p" css={{ color: '$bronze900', lineHeight: '23px' }}>
              Warning: obsessing over color is a terrible idea. Chill down ffs.
            </Text>
          </Box>
          <Box
            css={{
              p: '$3',
              borderRadius: '$3',
              backgroundColor: '$gold100',
              border: '1px solid $gold500',
            }}
          >
            <Text size="3" as="p" css={{ color: '$gold900', lineHeight: '23px' }}>
              Warning: obsessing over color is a terrible idea. Chill down ffs.
            </Text>
          </Box>
        </Grid>
      </Box>

      <Box css={{ backgroundColor: '$red800', height: '100vh', p: '$9', mt: '$9' }}>
        <Heading size="4" css={{ color: 'white' }}>
          This should look good and pass contrast ratio.
        </Heading>
      </Box>
    </Box>
  );
}
