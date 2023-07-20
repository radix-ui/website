import React from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import NextLink from 'next/link';
import {
  Avatar,
  Box,
  Container,
  Flex,
  Grid,
  Link,
  Paragraph,
  Section,
  Separator,
} from '@modulz/design-system';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import { MDXProvider, components } from '@components/MDXComponents';
import { getAllFrontmatter, getMdxBySlug } from '@lib/mdx';
import { MarketingCaption } from '@components/marketing/MarketingCaption';
import { CaseStudyLogo, CaseStudyLogoVariant } from '@components/marketing/CaseStudyLogo';
import { Footer } from '@components/Footer';
import { BoxLink } from '@components/BoxLink';
import { Root as AccessibleIcon } from '@radix-ui/react-accessible-icon';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import { PrimitivesHeader } from '@components/PrimitivesHeader';
import { MobileMenuProvider } from '@components/MobileMenu';

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
        image="default.png"
      />

      <PrimitivesHeader />

      <Container size={{ '@initial': 2, '@bp2': 3 }}>
        <Section>
          <Grid
            css={{
              '@bp2': {
                gap: '$9',
                gridTemplateColumns: '1fr 330px',
              },
              '@bp3': {
                gap: 120,
                gridTemplateColumns: '1fr 380px',
              },
            }}
          >
            <Box>
              <MarketingCaption css={{ mb: '$1' }}>Case study</MarketingCaption>
              <MDXProvider frontmatter={frontmatter}>
                <Component components={components as any} />
              </MDXProvider>
              <Flex align="center" gap="3" css={{ mt: '$7' }}>
                <Avatar size="5" src={frontmatter.authorAvatarUrl} aria-describedby="author" />
                <Box id="author">
                  <Paragraph css={{ fontWeight: 500 }}>{frontmatter.author}</Paragraph>
                  <Paragraph>{frontmatter.authorPosition}</Paragraph>
                </Box>
              </Flex>
              <Separator size="2" css={{ mt: '$7', '@bp2': { mt: '$9' } }} />
            </Box>

            <Box css={{ position: 'relative', mt: '$7', '@bp2': { mt: 100 } }}>
              <Box css={{ position: 'sticky', top: '$7', left: 0 }}>
                <Box
                  css={{
                    mb: '$6',
                  }}
                >
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
                <Box css={{ mb: '$5' }}>
                  <Paragraph as="h4" css={{ fontWeight: 500 }}>
                    About
                  </Paragraph>
                  <Paragraph css={{ mb: '$1' }}>{frontmatter.companyAbout}</Paragraph>
                  <Paragraph>
                    <Link
                      target="_blank"
                      href={`https://${frontmatter.companyUrl}`}
                      css={{ display: 'inline-flex' }}
                    >
                      {frontmatter.companyUrl}
                      <ArrowTopRightIcon style={{ marginLeft: -1, marginBottom: -2 }} />
                    </Link>
                  </Paragraph>
                </Box>
                <Box css={{ mb: '$5' }}>
                  <Paragraph as="h4" css={{ fontWeight: 500 }}>
                    Founded
                  </Paragraph>
                  <Paragraph>{frontmatter.companyFounded}</Paragraph>
                </Box>
                <Separator size="2" css={{ my: '$7' }} />
                <Box css={{ mb: '$5' }}>
                  <Paragraph as="span" css={{ fontWeight: 500 }}>
                    Next case study
                  </Paragraph>
                  <Paragraph as="span">
                    <NextLink href={`/${frontmatter.nextCaseStudySlug}`} passHref>
                      <Link>{frontmatter.nextCaseStudyTitle}</Link>
                    </NextLink>
                  </Paragraph>
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
