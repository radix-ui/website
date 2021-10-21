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
import { Header } from '@components/Header';
import { MarketingCaption } from '@components/marketing/MarketingCaption';
import { CaseStudyLogo, CaseStudyLogoVariant } from '@components/marketing/CaseStudyLogo';
import { Footer } from '@components/Footer';

// TODO meta image?

type CaseStudyPage = {
  frontmatter: {
    slug: string;
    metaTitle: string;
    metaDescription: string;
    author: string;
    authorAvatarUrl: string;
    authorPosition: string;
    productsUsed: string;
    companyAbout: string;
    companyUrl: string;
    companyFounded: string;
    companyLogoVariant: CaseStudyLogoVariant;
    companyLogoWidth: string;
  };
  code: string;
};

export default function CaseStudy({ frontmatter, code }: CaseStudyPage) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <>
      <TitleAndMetaTags
        title={`${frontmatter.metaTitle} — Radix UI`}
        description={frontmatter.metaDescription}
        // image={frontmatter.metaImage}
      />

      <Header />

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
              <MarketingCaption as="a" href="/case-studies" css={{ mb: '$1' }}>
                Case study
              </MarketingCaption>
              <MDXProvider frontmatter={frontmatter}>
                <Component components={components as any} />
              </MDXProvider>
              <Flex align="center" gap="2" css={{ mt: '$7' }}>
                <Avatar size="5" src={frontmatter.authorAvatarUrl} aria-describedby="person2" />
                <Box>
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
                    svg: { width: '100%' },
                  }}
                >
                  <a
                    target="_blank"
                    href={frontmatter.companyUrl}
                    style={{
                      display: 'inline-block',
                      width: frontmatter.companyLogoWidth,
                      maxWidth: '380px',
                      color: 'inherit',
                    }}
                  >
                    <CaseStudyLogo variant={frontmatter.companyLogoVariant} />
                  </a>
                </Box>
                <Box css={{ mb: '$5' }}>
                  <Paragraph as="h4" css={{ fontWeight: 500 }}>
                    About
                  </Paragraph>
                  <Paragraph css={{ mb: '$1' }}>{frontmatter.companyAbout}</Paragraph>
                  <Paragraph>
                    <Link target="_blank" href={`https://${frontmatter.companyUrl}`}>
                      {frontmatter.companyUrl}
                    </Link>
                  </Paragraph>
                </Box>
                <Box css={{ mb: '$5' }}>
                  <Paragraph as="h4" css={{ fontWeight: 500 }}>
                    Founded
                  </Paragraph>
                  <Paragraph>{frontmatter.companyFounded}</Paragraph>
                </Box>
                <Box css={{ mb: '$5' }}>
                  <Paragraph as="h4" css={{ fontWeight: 500 }}>
                    Products
                  </Paragraph>
                  {frontmatter.productsUsed.split(', ').map((product) => {
                    if (product === 'Primitives') {
                      return (
                        <Paragraph key={product}>
                          <NextLink href="/primitives" passHref>
                            <Link>Primitives</Link>
                          </NextLink>
                        </Paragraph>
                      );
                    }
                    if (product === 'Colors') {
                      return (
                        <Paragraph key={product}>
                          <NextLink href="/colors" passHref>
                            <Link>Colors</Link>
                          </NextLink>
                        </Paragraph>
                      );
                    }
                    if (product === 'Stitches') {
                      return (
                        <Paragraph key={product}>
                          <Link href="https://stitches.dev">Stitches</Link>
                        </Paragraph>
                      );
                    }
                    if (product === 'Icons') {
                      return (
                        <Paragraph key={product}>
                          <Link href="https://icons.modulz.app">Icons</Link>
                        </Paragraph>
                      );
                    }
                    return null;
                  })}
                </Box>
                <Separator size="2" css={{ my: '$7' }} />
                <Box>
                  <Paragraph as="h4" css={{ fontWeight: 500 }}>
                    Next case study
                  </Paragraph>
                  <Paragraph>Vercel</Paragraph>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Section>

        <Footer />
      </Container>
    </>
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
  return { props: { frontmatter, code } };
}
