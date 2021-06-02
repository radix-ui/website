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
          <Box css={{ height: 35, backgroundColor: '$gray700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gray0' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gray11' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gray12' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Mauve</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$mauve600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$mauve700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$mauve0' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$mauve11' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$mauve12' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Slate</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$slate600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$slate700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$slate0' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$slate11' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$slate12' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Sage</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$sage600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$sage700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$sage0' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$sage11' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$sage12' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Olive</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$olive600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$olive700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$olive0' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$olive11' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$olive12' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Sand</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$sand600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$sand700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$sand0' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$sand11' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$sand12' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Tomato</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$tomato600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$tomato700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$tomato0' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$tomato11' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$tomato12' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Red</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$red600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$red700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$red0' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$red11' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$red12' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Crimson</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$crimson600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$crimson700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$crimson0' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$crimson11' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$crimson12' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Pink</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$pink600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$pink700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$pink0' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$pink11' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$pink12' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Plum</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$plum600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$plum700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$plum0' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$plum11' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$plum12' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Purple</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$purple600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$purple700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$purple0' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$purple11' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$purple12' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Violet</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$violet600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$violet700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$violet0' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$violet11' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$violet12' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Indigo</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$indigo600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$indigo700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$indigo0' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$indigo11' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$indigo12' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Blue</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$blue600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$blue700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$blue0' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$blue11' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$blue12' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Cyan</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$cyan600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$cyan700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$cyan0' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$cyan11' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$cyan12' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Teal</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$teal600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$teal700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$teal0' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$teal11' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$teal12' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Green</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$green600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$green700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$green0' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$green11' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$green12' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Orange</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$orange600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$orange700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$orange0' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$orange11' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$orange12' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Brown</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$brown600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$brown700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$brown0' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$brown11' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$brown12' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Bronze</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$bronze600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$bronze700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$bronze0' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$bronze11' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$bronze12' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Gold</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$gold600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gold700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gold0' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gold11' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gold12' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Sky</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$sky600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$sky700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$sky0' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$sky11' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$sky12' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Mint</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$mint600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$mint700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$mint0' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$mint11' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$mint12' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Lime</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$lime600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$lime700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$lime0' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$lime11' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$lime12' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Yellow</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$yellow600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$yellow700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$yellow0' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$yellow11' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$yellow12' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Amber</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$amber600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$amber700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$amber0' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$amber11' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$amber12' }}></Box>
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
            <Text size="3" css={{ color: '$slate11' }}>
              Warm
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$yellow0',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$orange0',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$gold0',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$brown0',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$bronze0',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$red0',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$crimson0',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$pink0',
            }}
          ></Flex>
          <Flex css={{ ai: 'center', jc: 'center', height: 100 }}>
            <Text size="3" css={{ color: '$slate11' }}>
              Cool
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$purple0',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$violet0',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$indigo0',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$blue0',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$cyan0',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$teal0',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$green0',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$lime0',
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
            <Text size="3" css={{ color: '$slate11' }}>
              Warm
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$yellow4',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$orange4',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$gold4',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$brown4',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$bronze4',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$red4',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$crimson4',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$pink4',
            }}
          ></Flex>
          <Flex css={{ ai: 'center', jc: 'center', height: 100 }}>
            <Text size="3" css={{ color: '$slate11' }}>
              Cool
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$purple4',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$violet4',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$indigo4',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$blue4',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$cyan4',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$teal4',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$green4',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$lime4',
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
          <Box css={{ fb: '0', fg: '1', height: 160, backgroundColor: '$slate4' }}></Box>
          <Box css={{ fb: '0', fg: '1', height: 160, backgroundColor: '$slate300' }}></Box>
          <Box css={{ fb: '0', fg: '1', height: 160, backgroundColor: '$slate400' }}></Box>
          <Box
            css={{
              position: 'absolute',
              top: '50%',
              left: '0',
              width: '100%',
              height: 1,
              backgroundColor: '$slate6',
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
              border: '1px solid $red6',
            }}
          >
            <Text size="3" as="p" css={{ color: '$red11', lineHeight: '23px' }}>
              Warning: obsessing over color is a terrible idea. Chill down ffs.
            </Text>
          </Box>
          <Box
            css={{
              p: '$3',
              borderRadius: '$3',
              backgroundColor: '$crimson100',
              border: '1px solid $red6',
            }}
          >
            <Text size="3" as="p" css={{ color: '$crimson11', lineHeight: '23px' }}>
              Warning: obsessing over color is a terrible idea. Chill down ffs.
            </Text>
          </Box>
          <Box
            css={{
              p: '$3',
              borderRadius: '$3',
              backgroundColor: '$pink100',
              border: '1px solid $pink6',
            }}
          >
            <Text size="3" as="p" css={{ color: '$pink11', lineHeight: '23px' }}>
              Warning: obsessing over color is a terrible idea. Chill down ffs.
            </Text>
          </Box>
          <Box
            css={{
              p: '$3',
              borderRadius: '$3',
              backgroundColor: '$purple100',
              border: '1px solid $purple6',
            }}
          >
            <Text size="3" as="p" css={{ color: '$purple11', lineHeight: '23px' }}>
              Warning: obsessing over color is a terrible idea. Chill down ffs.
            </Text>
          </Box>
          <Box
            css={{
              p: '$3',
              borderRadius: '$3',
              backgroundColor: '$violet100',
              border: '1px solid $violet6',
            }}
          >
            <Text size="3" as="p" css={{ color: '$violet11', lineHeight: '23px' }}>
              Warning: obsessing over color is a terrible idea. Chill down ffs.
            </Text>
          </Box>
          <Box
            css={{
              p: '$3',
              borderRadius: '$3',
              backgroundColor: '$indigo100',
              border: '1px solid $indigo6',
            }}
          >
            <Text size="3" as="p" css={{ color: '$indigo11', lineHeight: '23px' }}>
              Warning: obsessing over color is a terrible idea. Chill down ffs.
            </Text>
          </Box>
          <Box
            css={{
              p: '$3',
              borderRadius: '$3',
              backgroundColor: '$blue100',
              border: '1px solid $blue6',
            }}
          >
            <Text size="3" as="p" css={{ color: '$blue11', lineHeight: '23px' }}>
              Warning: obsessing over color is a terrible idea. Chill down ffs.
            </Text>
          </Box>
          <Box
            css={{
              p: '$3',
              borderRadius: '$3',
              backgroundColor: '$cyan100',
              border: '1px solid $cyan6',
            }}
          >
            <Text size="3" as="p" css={{ color: '$cyan11', lineHeight: '23px' }}>
              Warning: obsessing over color is a terrible idea. Chill down ffs.
            </Text>
          </Box>
          <Box
            css={{
              p: '$3',
              borderRadius: '$3',
              backgroundColor: '$teal100',
              border: '1px solid $teal6',
            }}
          >
            <Text size="3" as="p" css={{ color: '$teal11', lineHeight: '23px' }}>
              Warning: obsessing over color is a terrible idea. Chill down ffs.
            </Text>
          </Box>
          <Box
            css={{
              p: '$3',
              borderRadius: '$3',
              backgroundColor: '$green100',
              border: '1px solid $green6',
            }}
          >
            <Text size="3" as="p" css={{ color: '$green11', lineHeight: '23px' }}>
              Warning: obsessing over color is a terrible idea. Chill down ffs.
            </Text>
          </Box>
          <Box
            css={{
              p: '$3',
              borderRadius: '$3',
              backgroundColor: '$lime100',
              border: '1px solid $lime6',
            }}
          >
            <Text size="3" as="p" css={{ color: '$lime11', lineHeight: '23px' }}>
              Warning: obsessing over color is a terrible idea. Chill down ffs.
            </Text>
          </Box>
          <Box
            css={{
              p: '$3',
              borderRadius: '$3',
              backgroundColor: '$yellow100',
              border: '1px solid $yellow6',
            }}
          >
            <Text size="3" as="p" css={{ color: '$yellow11', lineHeight: '23px' }}>
              Warning: obsessing over color is a terrible idea. Chill down ffs.
            </Text>
          </Box>
          <Box
            css={{
              p: '$3',
              borderRadius: '$3',
              backgroundColor: '$orange100',
              border: '1px solid $orange6',
            }}
          >
            <Text size="3" as="p" css={{ color: '$orange11', lineHeight: '23px' }}>
              Warning: obsessing over color is a terrible idea. Chill down ffs.
            </Text>
          </Box>
          <Box
            css={{
              p: '$3',
              borderRadius: '$3',
              backgroundColor: '$bronze100',
              border: '1px solid $bronze6',
            }}
          >
            <Text size="3" as="p" css={{ color: '$bronze11', lineHeight: '23px' }}>
              Warning: obsessing over color is a terrible idea. Chill down ffs.
            </Text>
          </Box>
          <Box
            css={{
              p: '$3',
              borderRadius: '$3',
              backgroundColor: '$gold100',
              border: '1px solid $gold6',
            }}
          >
            <Text size="3" as="p" css={{ color: '$gold11', lineHeight: '23px' }}>
              Warning: obsessing over color is a terrible idea. Chill down ffs.
            </Text>
          </Box>
        </Grid>
      </Box>

      <Box css={{ backgroundColor: '$red0', height: '100vh', p: '$9', mt: '$9' }}>
        <Heading size="4" css={{ color: 'white' }}>
          This should look good and pass contrast ratio.
        </Heading>
      </Box>
    </Box>
  );
}
