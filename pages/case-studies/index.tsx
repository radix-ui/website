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

export default function CaseStudy() {
  return (
    <>
      <TitleAndMetaTags
        title={'Case studies'}
        // TODO meta
        // description={frontmatter.metaDescription}
        // image={frontmatter.metaImage}
      />

      <Header />

      <Container size={{ '@initial': 2, '@bp2': 3 }}>
        <Section>
          <Flex direction="column" align="center" css={{ textAlign: 'center', mb: '$7' }}>
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
            columns="3"
            css={{
              gap: '1px',
              placeItems: 'stretch',
              gridAutoRows: '200px',
              '& > *': {
                boxShadow: '0 0 0 1px $colors$slate6',
              },
            }}
          >
            <NextLink href="/case-studies/atom-learning" passHref>
              <LogoLink>
                <Flex justify="center" css={{ height: '100%' }}>
                  <CaseStudyLogo variant="Atom Learning" />
                </Flex>
              </LogoLink>
            </NextLink>
            <NextLink href="/case-studies/codesandbox" passHref>
              <LogoLink>
                <Flex justify="center" css={{ height: '100%' }}>
                  <CaseStudyLogo variant="CodeSandbox (Wide)" />
                </Flex>
              </LogoLink>
            </NextLink>
            <NextLink href="/case-studies/graphcms" passHref>
              <LogoLink>
                <Flex justify="center" css={{ height: '100%' }}>
                  <CaseStudyLogo variant="GraphCMS" />
                </Flex>
              </LogoLink>
            </NextLink>
            <NextLink href="/case-studies/livepeer" passHref>
              <LogoLink>
                <Flex justify="center" css={{ height: '100%' }}>
                  <CaseStudyLogo variant="Livepeer" />
                </Flex>
              </LogoLink>
            </NextLink>
            <NextLink href="/case-studies/magnetis" passHref>
              <LogoLink>
                <Flex justify="center" css={{ height: '100%' }}>
                  <CaseStudyLogo variant="Magnetis" />
                </Flex>
              </LogoLink>
            </NextLink>
            <NextLink href="/case-studies/placemark" passHref>
              <LogoLink>
                <Flex justify="center" css={{ height: '100%' }}>
                  <CaseStudyLogo variant="Placemark" />
                </Flex>
              </LogoLink>
            </NextLink>
            <NextLink href="/case-studies/supabase" passHref>
              <LogoLink>
                <Flex justify="center" css={{ height: '100%' }}>
                  <CaseStudyLogo variant="Supabase" />
                </Flex>
              </LogoLink>
            </NextLink>
            <NextLink href="/case-studies/university-of-amsterdam" passHref>
              <LogoLink>
                <Flex justify="center" css={{ height: '100%' }}>
                  <CaseStudyLogo variant="University of Amsterdam" />
                </Flex>
              </LogoLink>
            </NextLink>
            <NextLink href="/case-studies/vercel" passHref>
              <LogoLink>
                <Flex justify="center" css={{ height: '100%' }}>
                  <CaseStudyLogo variant="Vercel" />
                </Flex>
              </LogoLink>
            </NextLink>
          </Grid>
        </Section>

        <Footer />
      </Container>
    </>
  );
}
