import { BoxLink } from '@components/BoxLink';
import { Footer } from '@components/Footer';
import { MDXProvider, components } from '@components/MDXComponents';
import { MobileMenuProvider } from '@components/MobileMenu';
import { PrimitivesHeader } from '@components/PrimitivesHeader';
import { PrimitivesMobileMenu } from '@components/PrimitivesMobileMenu';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import { CaseStudyLogo, CaseStudyLogoVariant } from '@components/marketing/CaseStudyLogo';
import { MarketingCaption } from '@components/marketing/MarketingCaption';
import { getAllFrontmatter, getMdxBySlug } from '@lib/mdx';
import { Root as AccessibleIcon } from '@radix-ui/react-accessible-icon';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import {
  Avatar,
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Link,
  Section,
  Separator,
  Text,
} from '@radix-ui/themes';
import { getMDXComponent } from 'mdx-bundler/client';
import NextLink from 'next/link';
import React from 'react';

type CaseStudyPage = {
  frontmatter: {
    slug: string;
    metaTitle: string;
    metaDescription: string;
    author: string;
    authorAvatarUrl: string;
    authorPosition: string;

    companyAbout: string;
    companyUrl: string;
    companyFounded: string;
    companyLogoVariant: CaseStudyLogoVariant;
    companyLogoWidth: string;
    nextCaseStudyTitle: string;
    nextCaseStudySlug: string;
  };
  code: string;
};

export default function CaseStudy({ frontmatter, code }: CaseStudyPage) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <MobileMenuProvider>
      <TitleAndMetaTags
        title={`${frontmatter.metaTitle} – Case studies – Radix UI`}
        description={frontmatter.metaDescription}
        image="primitives.png"
      />

      <PrimitivesHeader />
      <PrimitivesMobileMenu />

      <Container mx={{ initial: '5', xs: '6', sm: '7', md: '9' }}>
        <Section size={{ initial: '2', md: '3' }}>
          <Grid columns={{ md: '1fr 330px', lg: '1fr 380px' }} gap={{ md: '9' }}>
            <Box>
              <MarketingCaption mb="1">Case study</MarketingCaption>
              <MDXProvider frontmatter={frontmatter}>
                <Component components={components as any} />
              </MDXProvider>
              <Flex align="center" gap="3" mt="7">
                <Avatar
                  size="5"
                  src={frontmatter.authorAvatarUrl}
                  aria-describedby="author"
                  fallback={null}
                  radius="full"
                />
                <Box id="author">
                  <Text as="p" weight="medium">
                    {frontmatter.author}
                  </Text>
                  <Text as="p">{frontmatter.authorPosition}</Text>
                </Box>
              </Flex>
              <Separator size="3" mt={{ initial: '7', md: '9' }} />
            </Box>

            <Box position="relative" pt="7" mt={{ md: '9' }}>
              <Box position="sticky" style={{ top: 'var(--space-9)', left: 0 }}>
                <Box mb="6">
                  <BoxLink
                    target="_blank"
                    href={`https://${frontmatter.companyUrl}`}
                    style={{
                      display: 'inline-block',
                      width: frontmatter.companyLogoWidth ?? 'auto',
                      maxWidth: '380px',
                    }}
                  >
                    <AccessibleIcon label={`${frontmatter.metaTitle} homepage`}>
                      <CaseStudyLogo variant={frontmatter.companyLogoVariant} />
                    </AccessibleIcon>
                  </BoxLink>
                </Box>
                <Box mb="5">
                  <Heading as="h4" size="4">
                    About
                  </Heading>
                  <Text as="p" mb="1">
                    {frontmatter.companyAbout}
                  </Text>

                  <Flex align="center" gap="2" asChild>
                    <Link
                      target="_blank"
                      href={`https://${frontmatter.companyUrl}`}
                      highContrast
                      color="gray"
                    >
                      {frontmatter.companyUrl}
                      <ArrowTopRightIcon style={{ marginLeft: -1, marginBottom: -2 }} />
                    </Link>
                  </Flex>
                </Box>
                <Box mb="5">
                  <Heading size="4" as="h4">
                    Founded
                  </Heading>
                  <Text as="p">{frontmatter.companyFounded}</Text>
                </Box>
                <Separator size="2" my="7" />
                <Box mb="5">
                  <Text weight="medium" as="p">
                    Next case study
                  </Text>

                  <NextLink href={`/${frontmatter.nextCaseStudySlug}`} passHref>
                    <Link highContrast color="gray">
                      {frontmatter.nextCaseStudyTitle}
                    </Link>
                  </NextLink>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Section>

        <Footer />
      </Container>
    </MobileMenuProvider>
  );
}

export async function getStaticPaths() {
  const frontmatters = getAllFrontmatter('primitives/case-studies');

  return {
    paths: frontmatters.map((frontmatter) => ({
      params: { slug: frontmatter.slug.replace('primitives/case-studies/', '') },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { frontmatter, code } = await getMdxBySlug('primitives/case-studies/', context.params.slug);
  const frontmatters = getAllFrontmatter('primitives/case-studies');
  const thisIndex = frontmatters.findIndex((data) => data.slug.includes(frontmatter.slug));
  const nextIndex = thisIndex + 1 < frontmatters.length ? thisIndex + 1 : 0;
  const nextCaseStudy = frontmatters[nextIndex];
  (frontmatter as any).nextCaseStudyTitle = nextCaseStudy.metaTitle;
  (frontmatter as any).nextCaseStudySlug = nextCaseStudy.slug;
  return { props: { frontmatter, code } };
}
