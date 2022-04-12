import React from 'react';
import NextLink from 'next/link';
import {
  Avatar,
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Link,
  Paragraph,
  Text,
  Section,
  Separator,
} from '@modulz/design-system';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import { Header } from '@components/Header';
import { CaseStudyLogo } from '@components/marketing/CaseStudyLogo';
import { Footer } from '@components/Footer';
import { LogoLink } from '@components/marketing/LogoLink';
import { Root as AccessibleIcon } from '@radix-ui/react-accessible-icon';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';

export default function CaseStudy() {
  return (
    <>
      <TitleAndMetaTags
        title="Case studies — Radix UI"
        description="An open-source React component library for building high-quality, accessible design systems and web apps."
        image="default.png"
      />

      <Header />

      <Container size={{ '@initial': 2, '@bp2': 3 }}>
        <Section>
          <Flex direction="column" align="center" css={{ textAlign: 'center', mb: '$5' }}>
            <Heading size="3" css={{ mb: '$2' }}>
              Case studies
            </Heading>
            <Paragraph size="2" css={{ maxWidth: 480, mb: '$3' }}>
              Learn how teams behind everyone’s favorite products use Radix to save time, boost
              quality, and set the bar for accessibility.
            </Paragraph>
          </Flex>
          <Grid
            align="center"
            columns={{ '@initial': 1, '@bp1': 2, '@bp2': 3 }}
            css={{ gap: 1, placeItems: 'stretch', gridAutoRows: '200px', mb: '$8' }}
          >
            <NextLink href="/case-studies/acid-tango" passHref>
              <LogoLink variant="box">
                <AccessibleIcon label="Acid Tango case study">
                  <Flex justify="center" css={{ height: '100%' }}>
                    <CaseStudyLogo variant="Acid Tango" />
                  </Flex>
                </AccessibleIcon>
              </LogoLink>
            </NextLink>
            <NextLink href="/case-studies/atom-learning" passHref>
              <LogoLink variant="box">
                <AccessibleIcon label="Atom Learning case study">
                  <Flex justify="center" css={{ height: '100%' }}>
                    <CaseStudyLogo variant="Atom Learning" />
                  </Flex>
                </AccessibleIcon>
              </LogoLink>
            </NextLink>
            <NextLink href="/case-studies/basedash" passHref>
              <LogoLink variant="box">
                <AccessibleIcon label="Basedash case study">
                  <Flex justify="center" css={{ height: '100%' }}>
                    <CaseStudyLogo variant="Basedash" />
                  </Flex>
                </AccessibleIcon>
              </LogoLink>
            </NextLink>
            <NextLink href="/case-studies/basement-studio" passHref>
              <LogoLink variant="box">
                <AccessibleIcon label="basement.studio case study">
                  <Flex justify="center" css={{ height: '100%' }}>
                    <CaseStudyLogo variant="basement.studio" />
                  </Flex>
                </AccessibleIcon>
              </LogoLink>
            </NextLink>
            <NextLink href="/case-studies/codesandbox" passHref>
              <LogoLink variant="box">
                <AccessibleIcon label="CodeSandbox case study">
                  <Flex justify="center" css={{ height: '100%' }}>
                    <CaseStudyLogo variant="CodeSandbox (Wide)" />
                  </Flex>
                </AccessibleIcon>
              </LogoLink>
            </NextLink>
            <NextLink href="/case-studies/linear" passHref>
              <LogoLink variant="box">
                <AccessibleIcon label="Linear case study">
                  <Flex justify="center" css={{ height: '100%' }}>
                    <CaseStudyLogo variant="Linear (Wide)" width="100" />
                  </Flex>
                </AccessibleIcon>
              </LogoLink>
            </NextLink>
            {/* <NextLink href="/case-studies/graphcms" passHref>
              <LogoLink variant="box">
              <AccessibleIcon label="GraphCMS case study">
              <Flex justify="center" css={{ height: '100%' }}>
              <CaseStudyLogo variant="GraphCMS" />
              </Flex>
              </AccessibleIcon>
              </LogoLink>
            </NextLink> */}
            {/* <NextLink href="/case-studies/livepeer" passHref>
              <LogoLink variant="box">
              <AccessibleIcon label="Livepeer case study">
              <Flex justify="center" css={{ height: '100%' }}>
              <CaseStudyLogo variant="Livepeer" />
              </Flex>
              </AccessibleIcon>
              </LogoLink>
            </NextLink> */}
            <NextLink href="/case-studies/magnetis" passHref>
              <LogoLink variant="box">
                <AccessibleIcon label="Magnetis case study">
                  <Flex justify="center" css={{ height: '100%' }}>
                    <CaseStudyLogo variant="Magnetis" />
                  </Flex>
                </AccessibleIcon>
              </LogoLink>
            </NextLink>
            {/* <NextLink href="/case-studies/placemark" passHref>
              <LogoLink variant="box">
              <AccessibleIcon label="Placemark case study">
              <Flex justify="center" css={{ height: '100%' }}>
              <CaseStudyLogo variant="Placemark" />
              </Flex>
              </AccessibleIcon>
              </LogoLink>
            </NextLink> */}
            <NextLink href="/case-studies/supabase" passHref>
              <LogoLink variant="box">
                <AccessibleIcon label="Supabase case study">
                  <Flex justify="center" css={{ height: '100%' }}>
                    <CaseStudyLogo variant="Supabase" />
                  </Flex>
                </AccessibleIcon>
              </LogoLink>
            </NextLink>
            <NextLink href="/case-studies/university-of-amsterdam" passHref>
              <LogoLink variant="box">
                <AccessibleIcon label="University of Amsterdam case study">
                  <Flex justify="center" css={{ height: '100%' }}>
                    <CaseStudyLogo variant="University of Amsterdam" />
                  </Flex>
                </AccessibleIcon>
              </LogoLink>
            </NextLink>
            <NextLink href="/case-studies/vercel" passHref>
              <LogoLink variant="box">
                <AccessibleIcon label="Vercel case study">
                  <Flex justify="center" css={{ height: '100%' }}>
                    <CaseStudyLogo variant="Vercel" />
                  </Flex>
                </AccessibleIcon>
              </LogoLink>
            </NextLink>
          </Grid>

          <Separator size="2" css={{ mb: '$8', mx: 'auto' }} />

          <Box css={{ ta: 'center', maxWidth: 480, mb: '$5', mx: 'auto' }}>
            <Heading size="1" as="h2" css={{ mb: '$2' }}>
              Do you use Radix at your company?
            </Heading>

            <Paragraph css={{ ta: 'center' }}>
              We’d love to hear how you use Radix or Stitches.{' '}
              <Link
                href="https://modulz.typeform.com/to/wplAbXHK"
                target="_blank"
                css={{ display: 'inline-flex' }}
              >
                Submit your case study
                <ArrowTopRightIcon style={{ marginLeft: -1, marginBottom: -2 }} />
              </Link>
            </Paragraph>
          </Box>
        </Section>

        <Footer />
      </Container>
    </>
  );
}
