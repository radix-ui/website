import React from 'react';
import NextLink from 'next/link';
import {
  Box,
  Text,
  Grid,
  Heading,
  Container,
  Section,
  Separator,
  Flex,
  ScrollArea,
  Button,
} from '@radix-ui/themes';
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
import { Swatch } from '@components/Swatch';
import Head from 'next/head';
import styles from './index.module.css';
import { ColorUsageRange } from '@components/ColorUsageRange';
import { ColorStepLabel } from '@components/ColorStepLabel';

export default function ColorsHome() {
  return (
    <MobileMenuProvider>
      <ColorsMobileMenu />

      <Head>
        <style>
          {`
            :is(.dark, .dark-theme) :is(body, .radix-themes) {
              --color-background: #0b0b0b;
              --color-panel-solid: var(--gray-1);
            }
          `}
        </style>
      </Head>

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
          title="Radix Colors"
          description="An open-source color system for designing beautiful, accessible websites and apps."
          image="colors.png"
        />
        <Section size={{ initial: '2', md: '4' }}>
          <Container>
            <SerifHeading mb="3" style={{ maxWidth: 720 }}>
              A gorgeous, accessible color system for user interfaces
            </SerifHeading>

            <Box style={{ maxWidth: 500 }}>
              <Text size="5" as="p" mb="6" color="gray">
                Comprehensive color system for designing beautiful, accessible websites and apps.
              </Text>
            </Box>

            <Flex gap="4">
              <ColorsMarketingButton asChild size={{ initial: '3', xs: '4' }}>
                <NextLink href="/colors/docs/overview/installation">
                  Go to docs
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
                </NextLink>
              </ColorsMarketingButton>

              <Button
                highContrast
                variant="soft"
                color="gray"
                size={{ initial: '3', xs: '4' }}
                asChild
              >
                <NextLink href="/colors/custom">Custom palette</NextLink>
              </Button>
            </Flex>
          </Container>
        </Section>
      </Box>

      <ScrollArea mb="-4">
        <Box mx={{ initial: '5', xs: '6', sm: '7', md: '9' }} mb="4">
          <Container style={{ whiteSpace: 'nowrap', minWidth: 880 }}>
            <div className={styles.ColorsHomeGrid}>
              <Box />
              <ColorUsageRange gridColumn="2 / 4">Backgrounds</ColorUsageRange>
              <ColorUsageRange gridColumn="4 / 7">Interactive components</ColorUsageRange>
              <ColorUsageRange gridColumn="7 / 10">Borders and separators</ColorUsageRange>
              <ColorUsageRange gridColumn="10 / 12">Solid colors</ColorUsageRange>
              <ColorUsageRange gridColumn="12 / 14">Accessible text</ColorUsageRange>

              <Box />
              <ColorStepLabel>1</ColorStepLabel>
              <ColorStepLabel>2</ColorStepLabel>
              <ColorStepLabel>3</ColorStepLabel>
              <ColorStepLabel>4</ColorStepLabel>
              <ColorStepLabel>5</ColorStepLabel>
              <ColorStepLabel>6</ColorStepLabel>
              <ColorStepLabel>7</ColorStepLabel>
              <ColorStepLabel>8</ColorStepLabel>
              <ColorStepLabel>9</ColorStepLabel>
              <ColorStepLabel>10</ColorStepLabel>
              <ColorStepLabel>11</ColorStepLabel>
              <ColorStepLabel>12</ColorStepLabel>

              {[
                'gray',
                'mauve',
                'slate',
                'sage',
                'olive',
                'sand',
                'tomato',
                'red',
                'ruby',
                'crimson',
                'pink',
                'plum',
                'purple',
                'violet',
                'iris',
                'indigo',
                'blue',
                'cyan',
                'teal',
                'jade',
                'green',
                'grass',
                'bronze',
                'gold',
                'brown',
                'orange',
                'amber',
                'yellow',
                'lime',
                'mint',
                'sky',
              ].map((scale) => (
                <React.Fragment key={scale}>
                  <Text color="gray" size="2">
                    {scale.charAt(0).toUpperCase() + scale.slice(1)}
                  </Text>
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((step) => (
                    <Swatch key={step} scale={scale} step={step.toString()} />
                  ))}
                </React.Fragment>
              ))}
            </div>

            <Box height="32px" />

            <div className={styles.ColorsHomeGrid}>
              <Box />
              <ColorUsageRange gridColumn="2 / -1">
                Shadows, highlights, and overlays
              </ColorUsageRange>

              <Box />
              {Array.from({ length: 12 }, (_, i) => i + 1).map((step) => (
                <ColorStepLabel key={step}>{step}</ColorStepLabel>
              ))}

              {['black', 'white'].map((scale) => (
                <React.Fragment key={scale}>
                  <Text color="gray" size="2">
                    {scale.charAt(0).toUpperCase() + scale.slice(1)}
                  </Text>
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((step) => (
                    <Swatch key={step} scale={scale} step={step.toString()} />
                  ))}
                </React.Fragment>
              ))}
            </div>
          </Container>
        </Box>
      </ScrollArea>

      <Box mx={{ initial: '5', xs: '6', sm: '7', md: '9' }}>
        <Section size={{ initial: '2', md: '4' }}>
          <Container>
            <Grid columns={{ sm: '3' }} gap={{ initial: '7', sm: '6', md: '9' }}>
              <Box style={{ maxWidth: 540 }}>
                <Flex mb="3">
                  <EyeOpenIcon width="30" height="30" />
                </Flex>
                <Heading size="4" as="h3" mb="2">
                  Accessibility made easy
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
                  Automatic dark mode
                </Heading>
                <Text as="p" size="3">
                  Switching to dark theme is as simple as applying a class to a container. Dark mode
                  Just Works™.
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
                  Each scale has a matching alpha color variant, which is handy for UI components
                  that need to blend into colored backgrounds.
                </Text>
              </Box>
              <Box style={{ maxWidth: 540 }}>
                <Flex mb="3">
                  <Half2Icon width="30" height="30" />
                </Flex>
                <Heading size="4" as="h3" mb="2">
                  APCA text contrast
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
                  Each step is designed with a specific use case in mind, such as backgrounds, hover
                  states, borders, overlays, or text.
                </Text>
              </Box>
            </Grid>
          </Container>
        </Section>
      </Box>

      <Container mx={{ initial: '5', xs: '6', sm: '7', md: '9' }}>
        <Separator size="2" />
        <Section size={{ initial: '2', md: '4' }} pb="0">
          <Footer />
        </Section>
      </Container>
    </MobileMenuProvider>
  );
}
