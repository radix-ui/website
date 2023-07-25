import React from 'react';
import NextLink from 'next/link';
import { Box, Text, Grid, Heading, Container, Flex, Separator, Section } from '@radix-ui/themes';
import { Button } from '@modulz/design-system';
import { ArrowRightIcon, ExternalLinkIcon } from '@radix-ui/react-icons';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import { Footer } from '@components/Footer';
import { ColorsHeader } from '@components/ColorsHeader';
import { MobileMenu, MobileMenuProvider } from '@components/MobileMenu';
import { colorsRoutes } from '@lib/colorsRoutes';
import { DocsNav } from '@components/DocsNav';
import { ScrollArea } from '@radix-ui/themes';
import { ColorsMarketingButton } from '@components/ColorsMarketingButton';

export default function ColorsHome() {
  return (
    <MobileMenuProvider>
      <MobileMenu>
        <ColorsHeader />
        <ScrollArea>
          <DocsNav routes={colorsRoutes} />
        </ScrollArea>
      </MobileMenu>

      <ColorsHeader ghost />

      <Box px="5">
        <TitleAndMetaTags
          title="Colors – Radix UI"
          description="An open-source color system for designing beautiful, accessible websites and apps."
          image="colors.png"
        />
        <Section size="2">
          <Heading
            mb="3"
            align={{ xs: 'center' }}
            style={{
              fontSize: 'max(48px, min(60px, 15vw))',
              letterSpacing: 'var(--letter-spacing-9)',
              lineHeight: 1,
            }}
          >
            A gorgeous, accessible
            <br />
            color system
          </Heading>

          <Box mx="auto" style={{ maxWidth: 500 }}>
            <Text size="6" as="p" mb="6" color="gray" align={{ xs: 'center' }}>
              An open-source color system for designing beautiful, accessible websites and apps.
            </Text>
          </Box>

          <Container size="3">
            <Flex align="center" wrap="wrap" justify={{ xs: 'center' }} gap="5">
              <NextLink href="/colors/docs" passHref>
                <ColorsMarketingButton>
                  Get started
                  <ArrowRightIcon width="16" height="16" style={{ marginTop: 1 }} />
                </ColorsMarketingButton>
              </NextLink>
            </Flex>
          </Container>
        </Section>

        <Section size="2">
          <Container size="3">
            <Text size="2" color="gray">
              <Grid
                align="center"
                columns="minmax(64px, 1fr) repeat(12, minmax(0px, 1fr))"
                style={{ gap: 2 }}
              >
                <Box />
                <Text align="center" mb="2">
                  1
                </Text>
                <Text align="center" mb="2">
                  2
                </Text>
                <Text align="center" mb="2">
                  3
                </Text>
                <Text align="center" mb="2">
                  4
                </Text>
                <Text align="center" mb="2">
                  5
                </Text>
                <Text align="center" mb="2">
                  6
                </Text>
                <Text align="center" mb="2">
                  7
                </Text>
                <Text align="center" mb="2">
                  8
                </Text>
                <Text align="center" mb="2">
                  9
                </Text>
                <Text align="center" mb="2">
                  10
                </Text>
                <Text align="center" mb="2">
                  11
                </Text>
                <Text align="center" mb="2">
                  12
                </Text>

                <Text>Gray</Text>
                <Box style={{ height: 35, backgroundColor: 'var(--gray-1)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--gray-2)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--gray-3)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--gray-4)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--gray-5)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--gray-6)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--gray-7)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--gray-8)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--gray-9)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--gray-10)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--gray-11)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--gray-12)' }} />

                <Text>Mauve</Text>
                <Box style={{ height: 35, backgroundColor: 'var(--mauve-1)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--mauve-2)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--mauve-3)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--mauve-4)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--mauve-5)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--mauve-6)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--mauve-7)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--mauve-8)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--mauve-9)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--mauve-10)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--mauve-11)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--mauve-12)' }} />

                <Text>Slate</Text>
                <Box style={{ height: 35, backgroundColor: 'var(--slate-1)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--slate-2)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--slate-3)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--slate-4)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--slate-5)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--slate-6)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--slate-7)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--slate-8)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--slate-9)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--slate-10)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--slate-11)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--slate-12)' }} />

                <Text>Sage</Text>
                <Box style={{ height: 35, backgroundColor: 'var(--sage-1)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--sage-2)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--sage-3)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--sage-4)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--sage-5)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--sage-6)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--sage-7)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--sage-8)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--sage-9)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--sage-10)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--sage-11)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--sage-12)' }} />

                <Text>Olive</Text>
                <Box style={{ height: 35, backgroundColor: 'var(--olive-1)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--olive-2)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--olive-3)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--olive-4)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--olive-5)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--olive-6)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--olive-7)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--olive-8)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--olive-9)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--olive-10)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--olive-11)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--olive-12)' }} />

                <Text>Sand</Text>
                <Box style={{ height: 35, backgroundColor: 'var(--sand-1)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--sand-2)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--sand-3)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--sand-4)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--sand-5)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--sand-6)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--sand-7)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--sand-8)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--sand-9)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--sand-10)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--sand-11)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--sand-12)' }} />

                <Text>Orange</Text>
                <Box style={{ height: 35, backgroundColor: 'var(--orange-1)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--orange-2)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--orange-3)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--orange-4)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--orange-5)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--orange-6)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--orange-7)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--orange-8)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--orange-9)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--orange-10)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--orange-11)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--orange-12)' }} />

                <Text>Tomato</Text>
                <Box style={{ height: 35, backgroundColor: 'var(--tomato-1)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--tomato-2)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--tomato-3)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--tomato-4)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--tomato-5)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--tomato-6)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--tomato-7)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--tomato-8)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--tomato-9)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--tomato-10)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--tomato-11)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--tomato-12)' }} />

                <Text>Red</Text>
                <Box style={{ height: 35, backgroundColor: 'var(--red-1)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--red-2)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--red-3)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--red-4)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--red-5)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--red-6)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--red-7)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--red-8)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--red-9)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--red-10)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--red-11)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--red-12)' }} />

                <Text>Crimson</Text>
                <Box style={{ height: 35, backgroundColor: 'var(--crimson-1)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--crimson-2)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--crimson-3)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--crimson-4)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--crimson-5)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--crimson-6)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--crimson-7)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--crimson-8)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--crimson-9)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--crimson-10)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--crimson-11)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--crimson-12)' }} />

                <Text>Pink</Text>
                <Box style={{ height: 35, backgroundColor: 'var(--pink-1)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--pink-2)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--pink-3)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--pink-4)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--pink-5)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--pink-6)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--pink-7)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--pink-8)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--pink-9)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--pink-10)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--pink-11)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--pink-12)' }} />

                <Text>Plum</Text>
                <Box style={{ height: 35, backgroundColor: 'var(--plum-1)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--plum-2)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--plum-3)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--plum-4)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--plum-5)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--plum-6)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--plum-7)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--plum-8)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--plum-9)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--plum-10)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--plum-11)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--plum-12)' }} />

                <Text>Purple</Text>
                <Box style={{ height: 35, backgroundColor: 'var(--purple-1)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--purple-2)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--purple-3)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--purple-4)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--purple-5)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--purple-6)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--purple-7)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--purple-8)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--purple-9)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--purple-10)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--purple-11)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--purple-12)' }} />

                <Text>Violet</Text>
                <Box style={{ height: 35, backgroundColor: 'var(--violet-1)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--violet-2)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--violet-3)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--violet-4)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--violet-5)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--violet-6)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--violet-7)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--violet-8)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--violet-9)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--violet-10)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--violet-11)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--violet-12)' }} />

                <Text>Indigo</Text>
                <Box style={{ height: 35, backgroundColor: 'var(--indigo-1)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--indigo-2)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--indigo-3)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--indigo-4)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--indigo-5)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--indigo-6)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--indigo-7)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--indigo-8)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--indigo-9)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--indigo-10)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--indigo-11)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--indigo-12)' }} />

                <Text>Blue</Text>
                <Box style={{ height: 35, backgroundColor: 'var(--blue-1)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--blue-2)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--blue-3)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--blue-4)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--blue-5)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--blue-6)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--blue-7)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--blue-8)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--blue-9)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--blue-10)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--blue-11)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--blue-12)' }} />

                <Text>Cyan</Text>
                <Box style={{ height: 35, backgroundColor: 'var(--cyan-1)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--cyan-2)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--cyan-3)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--cyan-4)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--cyan-5)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--cyan-6)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--cyan-7)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--cyan-8)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--cyan-9)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--cyan-10)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--cyan-11)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--cyan-12)' }} />

                <Text>Teal</Text>
                <Box style={{ height: 35, backgroundColor: 'var(--teal-1)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--teal-2)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--teal-3)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--teal-4)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--teal-5)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--teal-6)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--teal-7)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--teal-8)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--teal-9)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--teal-10)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--teal-11)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--teal-12)' }} />

                <Text>Green</Text>
                <Box style={{ height: 35, backgroundColor: 'var(--green-1)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--green-2)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--green-3)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--green-4)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--green-5)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--green-6)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--green-7)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--green-8)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--green-9)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--green-10)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--green-11)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--green-12)' }} />

                <Text>Grass</Text>
                <Box style={{ height: 35, backgroundColor: 'var(--grass-1)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--grass-2)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--grass-3)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--grass-4)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--grass-5)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--grass-6)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--grass-7)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--grass-8)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--grass-9)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--grass-10)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--grass-11)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--grass-12)' }} />

                <Text>Brown</Text>
                <Box style={{ height: 35, backgroundColor: 'var(--brown-1)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--brown-2)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--brown-3)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--brown-4)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--brown-5)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--brown-6)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--brown-7)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--brown-8)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--brown-9)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--brown-10)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--brown-11)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--brown-12)' }} />

                <Text>Gold</Text>
                <Box style={{ height: 35, backgroundColor: 'var(--gold-1)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--gold-2)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--gold-3)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--gold-4)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--gold-5)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--gold-6)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--gold-7)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--gold-8)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--gold-9)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--gold-10)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--gold-11)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--gold-12)' }} />

                <Text>Bronze</Text>
                <Box style={{ height: 35, backgroundColor: 'var(--bronze-1)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--bronze-2)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--bronze-3)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--bronze-4)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--bronze-5)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--bronze-6)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--bronze-7)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--bronze-8)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--bronze-9)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--bronze-10)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--bronze-11)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--bronze-12)' }} />

                <Text>Amber</Text>
                <Box style={{ height: 35, backgroundColor: 'var(--amber-1)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--amber-2)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--amber-3)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--amber-4)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--amber-5)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--amber-6)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--amber-7)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--amber-8)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--amber-9)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--amber-10)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--amber-11)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--amber-12)' }} />

                <Text>Yellow</Text>
                <Box style={{ height: 35, backgroundColor: 'var(--yellow-1)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--yellow-2)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--yellow-3)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--yellow-4)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--yellow-5)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--yellow-6)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--yellow-7)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--yellow-8)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--yellow-9)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--yellow-10)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--yellow-11)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--yellow-12)' }} />

                <Text>Lime</Text>
                <Box style={{ height: 35, backgroundColor: 'var(--lime-1)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--lime-2)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--lime-3)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--lime-4)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--lime-5)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--lime-6)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--lime-7)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--lime-8)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--lime-9)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--lime-10)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--lime-11)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--lime-12)' }} />

                <Text>Mint</Text>
                <Box style={{ height: 35, backgroundColor: 'var(--mint-1)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--mint-2)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--mint-3)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--mint-4)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--mint-5)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--mint-6)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--mint-7)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--mint-8)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--mint-9)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--mint-10)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--mint-11)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--mint-12)' }} />

                <Text>Sky</Text>
                <Box style={{ height: 35, backgroundColor: 'var(--sky-1)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--sky-2)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--sky-3)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--sky-4)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--sky-5)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--sky-6)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--sky-7)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--sky-8)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--sky-9)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--sky-10)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--sky-11)' }} />
                <Box style={{ height: 35, backgroundColor: 'var(--sky-12)' }} />
              </Grid>
            </Text>
          </Container>
        </Section>

        <Flex justify="center">
          <Separator size="2" />
        </Flex>

        <Section size="2">
          <Container size="3">
            <Grid columns={{ sm: '3' }} gap="7">
              <Box>
                <Heading size="5" as="h3">
                  Accessibility made easy
                </Heading>
                <Text as="p" color="gray" size="3" mt="2">
                  Each step is designed for a specific use case, with multiple combinations
                  guaranteed to pass WCAG contrast ratio.
                </Text>
              </Box>
              <Box>
                <Heading size="5" as="h3">
                  Automatic dark mode
                </Heading>
                <Text as="p" color="gray" size="3" mt="2">
                  Switching to dark theme is as simple as applying a class to a container. Dark mode
                  Just Works™.
                </Text>
              </Box>
              <Box>
                <Heading size="5" as="h3">
                  Transparent variants
                </Heading>
                <Text as="p" color="gray" size="3" mt="2">
                  Each scale has a matching transparent variant, which is handy for UI components
                  that need to blend into colored backgrounds.
                </Text>
              </Box>
            </Grid>
          </Container>
        </Section>
      </Box>

      <Flex justify="center" mb="9">
        <Separator size="2" />
      </Flex>

      <Container size="3">
        <Footer />
      </Container>
    </MobileMenuProvider>
  );
}
