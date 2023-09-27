import React from 'react';
import NextLink from 'next/link';
import { Box, Text, Grid, Heading, Container, Section, Separator, Flex } from '@radix-ui/themes';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import { Footer } from '@components/Footer';
import { ColorsHeader } from '@components/ColorsHeader';
import { MobileMenuProvider } from '@components/MobileMenu';
import { ColorsMarketingButton } from '@components/ColorsMarketingButton';
import { SerifHeading } from '@components/SerifHeading';
import { ColorsMobileMenu } from '@components/ColorsMobileMenu';
import {
  DesktopIcon,
  EyeOpenIcon,
  Half2Icon,
  InputIcon,
  MoonIcon,
  TransparencyGridIcon,
} from '@radix-ui/react-icons';

export default function ColorsHome() {
  return (
    <MobileMenuProvider>
      <ColorsMobileMenu />

      <Box
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          height: 480,
          opacity: 0.6,
          background: 'linear-gradient(to bottom, var(--crimson-4), var(--amber-2), transparent)',
        }}
      />

      <ColorsHeader ghost />

      <Box mx={{ initial: '5', xs: '6', sm: '7', md: '9' }} position="relative">
        <TitleAndMetaTags
          title="Colors – Radix UI"
          description="An open-source color system for designing beautiful, accessible websites and apps."
          image="colors.png"
        />
        <Section size={{ initial: '2', md: '3' }}>
          <Container>
            <SerifHeading mb="3" style={{ maxWidth: 720 }}>
              A gorgeous, accessible color system for user interfaces
            </SerifHeading>

            <Box style={{ maxWidth: 500 }}>
              <Text size="5" as="p" mb="6" color="gray">
                Comprehensive color system for designing beautiful, accessible websites and apps.
              </Text>
            </Box>

            <NextLink href="/colors/docs/overview/installation" passHref legacyBehavior>
              <ColorsMarketingButton asChild size={{ initial: '3', xs: '4' }}>
                <a>
                  Get started
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentcolor"
                    style={{ opacity: 1, marginRight: -3 }}
                  >
                    <path d="M6.39205 11.6023L5.36932 10.5909L8.92045 7.03977H0V5.5625H8.92045L5.36932 2.01705L6.39205 1L11.6932 6.30114L6.39205 11.6023Z" />
                  </svg>
                </a>
              </ColorsMarketingButton>
            </NextLink>
          </Container>
        </Section>

        <Container>
          <Text size="2" color="gray">
            <Grid
              align="center"
              columns={{
                initial: 'repeat(12, minmax(0px, 1fr))',
                sm: 'minmax(64px, 1fr) repeat(12, minmax(0px, 1fr))',
              }}
              style={{ gap: 2, whiteSpace: 'nowrap' }}
            >
              <Box display={{ initial: 'none', sm: 'block' }} />
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

              <Box display={{ initial: 'none', sm: 'block' }}>
                <Text>Gray</Text>
              </Box>

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

              <Box display={{ initial: 'none', sm: 'block' }}>
                <Text>Mauve</Text>
              </Box>

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

              <Box display={{ initial: 'none', sm: 'block' }}>
                <Text>Slate</Text>
              </Box>

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

              <Box display={{ initial: 'none', sm: 'block' }}>
                <Text>Sage</Text>
              </Box>

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

              <Box display={{ initial: 'none', sm: 'block' }}>
                <Text>Olive</Text>
              </Box>

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

              <Box display={{ initial: 'none', sm: 'block' }}>
                <Text>Sand</Text>
              </Box>

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

              <Box display={{ initial: 'none', sm: 'block' }}>
                <Text>Tomato</Text>
              </Box>

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

              <Box display={{ initial: 'none', sm: 'block' }}>
                <Text>Red</Text>
              </Box>

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

              <Box display={{ initial: 'none', sm: 'block' }}>
                <Text>Ruby</Text>
              </Box>

              <Box style={{ height: 35, backgroundColor: 'var(--ruby-1)' }} />
              <Box style={{ height: 35, backgroundColor: 'var(--ruby-2)' }} />
              <Box style={{ height: 35, backgroundColor: 'var(--ruby-3)' }} />
              <Box style={{ height: 35, backgroundColor: 'var(--ruby-4)' }} />
              <Box style={{ height: 35, backgroundColor: 'var(--ruby-5)' }} />
              <Box style={{ height: 35, backgroundColor: 'var(--ruby-6)' }} />
              <Box style={{ height: 35, backgroundColor: 'var(--ruby-7)' }} />
              <Box style={{ height: 35, backgroundColor: 'var(--ruby-8)' }} />
              <Box style={{ height: 35, backgroundColor: 'var(--ruby-9)' }} />
              <Box style={{ height: 35, backgroundColor: 'var(--ruby-10)' }} />
              <Box style={{ height: 35, backgroundColor: 'var(--ruby-11)' }} />
              <Box style={{ height: 35, backgroundColor: 'var(--ruby-12)' }} />

              <Box display={{ initial: 'none', sm: 'block' }}>
                <Text>Crimson</Text>
              </Box>

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

              <Box display={{ initial: 'none', sm: 'block' }}>
                <Text>Pink</Text>
              </Box>

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

              <Box display={{ initial: 'none', sm: 'block' }}>
                <Text>Plum</Text>
              </Box>

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

              <Box display={{ initial: 'none', sm: 'block' }}>
                <Text>Purple</Text>
              </Box>

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

              <Box display={{ initial: 'none', sm: 'block' }}>
                <Text>Violet</Text>
              </Box>

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

              <Box display={{ initial: 'none', sm: 'block' }}>
                <Text>Iris</Text>
              </Box>

              <Box style={{ height: 35, backgroundColor: 'var(--iris-1)' }} />
              <Box style={{ height: 35, backgroundColor: 'var(--iris-2)' }} />
              <Box style={{ height: 35, backgroundColor: 'var(--iris-3)' }} />
              <Box style={{ height: 35, backgroundColor: 'var(--iris-4)' }} />
              <Box style={{ height: 35, backgroundColor: 'var(--iris-5)' }} />
              <Box style={{ height: 35, backgroundColor: 'var(--iris-6)' }} />
              <Box style={{ height: 35, backgroundColor: 'var(--iris-7)' }} />
              <Box style={{ height: 35, backgroundColor: 'var(--iris-8)' }} />
              <Box style={{ height: 35, backgroundColor: 'var(--iris-9)' }} />
              <Box style={{ height: 35, backgroundColor: 'var(--iris-10)' }} />
              <Box style={{ height: 35, backgroundColor: 'var(--iris-11)' }} />
              <Box style={{ height: 35, backgroundColor: 'var(--iris-12)' }} />

              <Box display={{ initial: 'none', sm: 'block' }}>
                <Text>Indigo</Text>
              </Box>

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

              <Box display={{ initial: 'none', sm: 'block' }}>
                <Text>Blue</Text>
              </Box>

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

              <Box display={{ initial: 'none', sm: 'block' }}>
                <Text>Cyan</Text>
              </Box>

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

              <Box display={{ initial: 'none', sm: 'block' }}>
                <Text>Teal</Text>
              </Box>

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

              <Box display={{ initial: 'none', sm: 'block' }}>
                <Text>Jade</Text>
              </Box>

              <Box style={{ height: 35, backgroundColor: 'var(--jade-1)' }} />
              <Box style={{ height: 35, backgroundColor: 'var(--jade-2)' }} />
              <Box style={{ height: 35, backgroundColor: 'var(--jade-3)' }} />
              <Box style={{ height: 35, backgroundColor: 'var(--jade-4)' }} />
              <Box style={{ height: 35, backgroundColor: 'var(--jade-5)' }} />
              <Box style={{ height: 35, backgroundColor: 'var(--jade-6)' }} />
              <Box style={{ height: 35, backgroundColor: 'var(--jade-7)' }} />
              <Box style={{ height: 35, backgroundColor: 'var(--jade-8)' }} />
              <Box style={{ height: 35, backgroundColor: 'var(--jade-9)' }} />
              <Box style={{ height: 35, backgroundColor: 'var(--jade-10)' }} />
              <Box style={{ height: 35, backgroundColor: 'var(--jade-11)' }} />
              <Box style={{ height: 35, backgroundColor: 'var(--jade-12)' }} />

              <Box display={{ initial: 'none', sm: 'block' }}>
                <Text>Green</Text>
              </Box>

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

              <Box display={{ initial: 'none', sm: 'block' }}>
                <Text>Grass</Text>
              </Box>

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

              <Box display={{ initial: 'none', sm: 'block' }}>
                <Text>Bronze</Text>
              </Box>

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

              <Box display={{ initial: 'none', sm: 'block' }}>
                <Text>Gold</Text>
              </Box>

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

              <Box display={{ initial: 'none', sm: 'block' }}>
                <Text>Brown</Text>
              </Box>

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

              <Box display={{ initial: 'none', sm: 'block' }}>
                <Text>Orange</Text>
              </Box>

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

              <Box display={{ initial: 'none', sm: 'block' }}>
                <Text>Amber</Text>
              </Box>

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

              <Box display={{ initial: 'none', sm: 'block' }}>
                <Text>Yellow</Text>
              </Box>

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

              <Box display={{ initial: 'none', sm: 'block' }}>
                <Text>Lime</Text>
              </Box>

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

              <Box display={{ initial: 'none', sm: 'block' }}>
                <Text>Mint</Text>
              </Box>

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

              <Box display={{ initial: 'none', sm: 'block' }}>
                <Text>Sky</Text>
              </Box>

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

        <Section size={{ initial: '2', md: '3' }}>
          <Container>
            <Grid columns={{ sm: '3' }} gap={{ initial: '7', sm: '6', md: '9' }}>
              <Box style={{ maxWidth: 540 }}>
                <Flex mb="3">
                  <EyeOpenIcon width="30" height="30" />
                </Flex>
                <Heading size="4" as="h3" mb="2">
                  Accessibility made easy
                </Heading>
                <Text as="p" size="3">
                  Text colors are guaranteed to pass target contrast ratios against the
                  corresponding background colors.
                </Text>
              </Box>
              <Box style={{ maxWidth: 540 }}>
                <Flex mb="3">
                  <MoonIcon width="30" height="30" />
                </Flex>
                <Heading size="4" as="h3" mb="2">
                  Automatic dark mode
                </Heading>
                <Text as="p" size="3">
                  Switching to dark theme is as simple as applying a class to a container. Dark mode
                  Just Works™.
                </Text>
              </Box>
              <Box style={{ maxWidth: 540 }}>
                <Flex mb="3">
                  <TransparencyGridIcon width="30" height="30" />
                </Flex>
                <Heading size="4" as="h3" mb="2">
                  Transparent variants
                </Heading>
                <Text as="p" size="3">
                  Each scale has a matching transparent variant, which is handy for UI components
                  that need to blend into colored backgrounds.
                </Text>
              </Box>
              <Box style={{ maxWidth: 540 }}>
                <Flex mb="3">
                  <Half2Icon width="30" height="30" />
                </Flex>
                <Heading size="4" as="h3" mb="2">
                  APCA text contrast
                </Heading>
                <Text as="p" size="3">
                  Contrast targets are based on the modern APCA contrast algorithm, which accurately
                  predicts how human vision perceives text.
                </Text>
              </Box>
              <Box style={{ maxWidth: 540 }}>
                <Flex mb="3">
                  <DesktopIcon width="30" height="30" />
                </Flex>
                <Heading size="4" as="h3" mb="2">
                  P3 color gamut support
                </Heading>
                <Text as="p" size="3">
                  Accounts for the blending differences in the wide gamut color spaces and enables
                  the brightest yellows and reds possible.
                </Text>
              </Box>
              <Box style={{ maxWidth: 540 }}>
                <Flex mb="3">
                  <InputIcon width="30" height="30" />
                </Flex>
                <Heading size="4" as="h3" mb="2">
                  Designed for user interfaces
                </Heading>
                <Text as="p" size="3">
                  Each step is designed with a specific use case in mind, such as backgrounds, hover
                  states, borders, overlays, or text.
                </Text>
              </Box>
            </Grid>
          </Container>
        </Section>
      </Box>

      <Container mx={{ initial: '5', xs: '6', sm: '7', md: '9' }}>
        <Separator size="2" />
        <Section size={{ initial: '2', md: '3' }} pb="0">
          <Footer />
        </Section>
      </Container>
    </MobileMenuProvider>
  );
}
