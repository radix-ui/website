import React from 'react';
import NextLink from 'next/link';
import {
  Section,
  Container,
  Heading,
  Link,
  Flex,
  Button,
  Paragraph,
  Separator,
  Box,
  Grid,
  Text,
} from '@modulz/design-system';
import { ArrowBottomRightIcon, ArrowRightIcon, ExternalLinkIcon } from '@radix-ui/react-icons';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';

export default function ColorsHome() {
  return (
    <Box>
      <Header />

      <Box css={{ py: '$4', mt: '$2' }}>
        <TitleAndMetaTags
          title="Colors — Radix UI"
          description="An open-source color system for designing beautiful, accessible websites and apps."
          image="colors.png"
        />
        <Section
          size={{
            '@initial': '2',
            '@bp1': '3',
          }}
          css={{
            pt: '$3',
            pb: '$7',
            '@bp2': {
              pt: '$6',
              pb: '$8',
            },
          }}
        >
          <Container size="3">
            <Heading size="4" css={{ mb: '$3', '@bp2': { ta: 'center' } }}>
              A gorgeous, accessible <br />
              color system
            </Heading>
            <Paragraph
              size="2"
              as="p"
              css={{
                mb: '$6',
                color: '$sage11',
                '@bp2': {
                  mx: 230,
                  ta: 'center',
                  mb: '$7',
                },
              }}
            >
              An open-source color system for designing beautiful, accessible websites and apps.
            </Paragraph>
            <Flex justify={{ '@initial': 'start', '@bp2': 'center' }} gap="5" css={{ mt: '$7' }}>
              <NextLink href="/docs/colors" passHref>
                <Button
                  as="a"
                  variant="blue"
                  css={{
                    height: '$6',
                    fontSize: '$3',
                    borderRadius: '9999px',
                    px: '$3',
                    bc: 'white',
                    boxShadow:
                      '-15px 0 30px -10px $colors$orangeA7, 0 0 30px -10px $colors$pinkA7, 15px 0 30px -10px $colors$violetA7',
                    cursor: 'pointer',
                    color: 'black',
                    gap: '$2',
                    transition: 'all 200ms ease',
                    '&:hover': {
                      boxShadow:
                        '-15px 0 30px -10px $colors$orangeA8, 0 0 30px -10px $colors$pinkA8, 15px 0 30px -10px $colors$violetA8',
                    },
                    '&:active': {
                      bc: 'white',
                      boxShadow:
                        '-15px 0 20px -10px $colors$orangeA8, 0 0 20px -10px $colors$pinkA8, 15px 0 20px -10px $colors$violetA8',
                    },
                    '&:focus': {
                      boxShadow:
                        '-15px 0 30px -10px $colors$orangeA7, 0 0 30px -10px $colors$pinkA7, 15px 0 30px -10px $colors$violetA7, inset 0 0 0 1px $colors$pinkA7, 0 0 0 1px $colors$pinkA7',
                    },
                  }}
                >
                  Documentation
                  <ArrowRightIcon />
                </Button>
              </NextLink>
              <Button
                as="a"
                variant="blue"
                href="https://github.com/radix-ui/colors"
                target="_blank"
                css={{
                  height: '$6',
                  fontSize: '$3',
                  borderRadius: '9999px',
                  px: '$3',
                  bc: 'transparent',
                  boxShadow: 'none',
                  cursor: 'pointer',
                  color: '$sage11',
                  gap: '$2',
                  '&:hover': {
                    bc: '$sageA5',
                    boxShadow: 'none',
                  },
                  '&:focus': {
                    boxShadow: 'inset 0 0 0 1px $colors$sky7, 0 0 0 1px $colors$sky7',
                  },
                }}
              >
                GitHub
                <ExternalLinkIcon />
              </Button>
            </Flex>

            <Flex justify={{ '@initial': 'start', '@bp2': 'center' }} css={{ mt: '$7' }}>
              <Box css={{ bc: '$slate2', py: '$2', px: '$3', borderRadius: '9999px' }}>
                <Text>
                  Radix Colors is on Product Hunt.{' '}
                  <Link
                    variant="blue"
                    href="https://www.producthunt.com/posts/radix-colors"
                    target="_blank"
                  >
                    Go vote!
                  </Link>
                </Text>
              </Box>
            </Flex>

            {/* <Flex justify="center" css={{ mt: '$8' }}>
            <Box css={{
              width: '75%',
              aspectRatio: '1/1',
              borderRadius: '50%',
              position: 'relative',
              background: 'conic-gradient($colors$red9 0deg 18deg, $colors$crimson9 18deg 36deg, $colors$pink9 36deg 54deg, $colors$plum9 52deg 72deg, $colors$purple9 72deg 90deg, $colors$violet9 90deg 108deg, $colors$indigo9 108deg 126deg, $colors$blue9 126deg 144deg, $colors$sky9 144deg 162deg, $colors$cyan9 162deg 180deg, $colors$mint9 162deg 180deg, $colors$mint9 180deg 198deg)',
            }}>
              <Box css={{ position: 'absolute', width: 2, bc: '$loContrast', top: 0, bottom: 0, left: '50%', ml: -1 }}></Box>
              <Box css={{ position: 'absolute', width: 2, bc: '$loContrast', top: 0, bottom: 0, left: '50%', ml: -1, transform: 'rotate(18deg)' }}></Box>
              <Box css={{ position: 'absolute', width: 2, bc: '$loContrast', top: 0, bottom: 0, left: '50%', ml: -1, transform: 'rotate(36deg)' }}></Box>
              <Box css={{ position: 'absolute', width: 2, bc: '$loContrast', top: 0, bottom: 0, left: '50%', ml: -1, transform: 'rotate(54deg)' }}></Box>
              <Box css={{ position: 'absolute', width: 2, bc: '$loContrast', top: 0, bottom: 0, left: '50%', ml: -1, transform: 'rotate(72deg)' }}></Box>
              <Box css={{ position: 'absolute', width: 2, bc: '$loContrast', top: 0, bottom: 0, left: '50%', ml: -1, transform: 'rotate(90deg)' }}></Box>
              <Box css={{ position: 'absolute', width: 2, bc: '$loContrast', top: 0, bottom: 0, left: '50%', ml: -1, transform: 'rotate(108deg)' }}></Box>
              <Box css={{ position: 'absolute', width: 2, bc: '$loContrast', top: 0, bottom: 0, left: '50%', ml: -1, transform: 'rotate(126deg)' }}></Box>
              <Box css={{ position: 'absolute', width: 2, bc: '$loContrast', top: 0, bottom: 0, left: '50%', ml: -1, transform: 'rotate(144deg)' }}></Box>
              <Box css={{ position: 'absolute', width: 2, bc: '$loContrast', top: 0, bottom: 0, left: '50%', ml: -1, transform: 'rotate(162deg)' }}></Box>
            </Box>
          </Flex> */}
          </Container>
        </Section>

        <Section css={{ pt: 0 }}>
          <Container size="3">
            <Grid
              css={{
                gridTemplateColumns: 'repeat(13, minmax(0, 1fr))',
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
              <Box css={{ ta: 'center', pb: '$2' }}>
                <Text css={{ fontSize: '$2', color: '$slate11' }}>11</Text>
              </Box>
              <Box css={{ ta: 'center', pb: '$2' }}>
                <Text css={{ fontSize: '$2', color: '$slate11' }}>12</Text>
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
                <Text css={{ fontSize: '$2' }}>Sage</Text>
              </Box>
              <Box css={{ height: 35, backgroundColor: '$sage1' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$sage2' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$sage3' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$sage4' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$sage5' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$sage6' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$sage7' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$sage8' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$sage9' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$sage10' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$sage11' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$sage12' }}></Box>

              <Box>
                <Text css={{ fontSize: '$2' }}>Olive</Text>
              </Box>
              <Box css={{ height: 35, backgroundColor: '$olive1' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$olive2' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$olive3' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$olive4' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$olive5' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$olive6' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$olive7' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$olive8' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$olive9' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$olive10' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$olive11' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$olive12' }}></Box>

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

              <Box css={{ height: 35 }}></Box>
              <Box css={{ height: 35 }}></Box>
              <Box css={{ height: 35 }}></Box>
              <Box css={{ height: 35 }}></Box>
              <Box css={{ height: 35 }}></Box>
              <Box css={{ height: 35 }}></Box>
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
              <Box css={{ height: 35, backgroundColor: '$tomato7' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$tomato8' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$tomato9' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$tomato10' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$tomato11' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$tomato12' }}></Box>

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
                <Text css={{ fontSize: '$2' }}>Plum</Text>
              </Box>
              <Box css={{ height: 35, backgroundColor: '$plum1' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$plum2' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$plum3' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$plum4' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$plum5' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$plum6' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$plum7' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$plum8' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$plum9' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$plum10' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$plum11' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$plum12' }}></Box>

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
                <Text css={{ fontSize: '$2' }}>Grass</Text>
              </Box>
              <Box css={{ height: 35, backgroundColor: '$grass1' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$grass2' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$grass3' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$grass4' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$grass5' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$grass6' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$grass7' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$grass8' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$grass9' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$grass10' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$grass11' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$grass12' }}></Box>

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

              <Box css={{ height: 35 }}></Box>
              <Box css={{ height: 35 }}></Box>
              <Box css={{ height: 35 }}></Box>
              <Box css={{ height: 35 }}></Box>
              <Box css={{ height: 35 }}></Box>
              <Box css={{ height: 35 }}></Box>
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
              <Box css={{ height: 35, backgroundColor: '$sky7' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$sky8' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$sky9' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$sky10' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$sky11' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$sky12' }}></Box>

              <Box>
                <Text css={{ fontSize: '$2' }}>Mint</Text>
              </Box>
              <Box css={{ height: 35, backgroundColor: '$mint1' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$mint2' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$mint3' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$mint4' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$mint5' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$mint6' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$mint7' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$mint8' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$mint9' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$mint10' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$mint11' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$mint12' }}></Box>

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
                <Text css={{ fontSize: '$2' }}>Amber</Text>
              </Box>
              <Box css={{ height: 35, backgroundColor: '$amber1' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$amber2' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$amber3' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$amber4' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$amber5' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$amber6' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$amber7' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$amber8' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$amber9' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$amber10' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$amber11' }}></Box>
              <Box css={{ height: 35, backgroundColor: '$amber12' }}></Box>

              <Box css={{ height: 35 }}></Box>
              <Box css={{ height: 35 }}></Box>
              <Box css={{ height: 35 }}></Box>
              <Box css={{ height: 35 }}></Box>
              <Box css={{ height: 35 }}></Box>
              <Box css={{ height: 35 }}></Box>
              <Box css={{ height: 35 }}></Box>
              <Box css={{ height: 35 }}></Box>
              <Box css={{ height: 35 }}></Box>
              <Box css={{ height: 35 }}></Box>
              <Box css={{ height: 35 }}></Box>
              <Box css={{ height: 35 }}></Box>
              <Box css={{ height: 35 }}></Box>

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
        </Section>

        <Flex css={{ justifyContent: 'center' }}>
          <Separator size="2" />
        </Flex>

        <Section
          size={{
            '@initial': '2',
            '@bp1': '3',
          }}
        >
          <Container size="3">
            <Grid columns={{ '@bp2': '3' }} gap="7">
              <Box>
                <Heading size="1">Accessibility made easy</Heading>
                <Text variant="gray" size="3" css={{ lineHeight: '25px', mt: '$2' }}>
                  Each step is designed for a specific use case, with multiple combinations
                  guaranteed to pass WCAG contrast ratio.
                </Text>
              </Box>
              <Box>
                <Heading size="1">Automatic dark mode</Heading>
                <Text variant="gray" size="3" css={{ lineHeight: '25px', mt: '$2' }}>
                  Switching to dark theme is as simple as applying a class to a container. Dark mode
                  Just Works™.
                </Text>
              </Box>
              <Box>
                <Heading size="1">Transparent variants</Heading>
                <Text variant="gray" size="3" css={{ lineHeight: '25px', mt: '$2' }}>
                  Each scale has a matching transparent variant, which is handy for UI components
                  that need to blend into colored backgrounds.
                </Text>
              </Box>
            </Grid>
          </Container>
        </Section>
      </Box>

      <Flex css={{ justifyContent: 'center', mb: '$9' }}>
        <Separator size="2" />
      </Flex>

      <Container size="3">
        <Footer />
      </Container>
    </Box>
  );
}
