import React from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import { MDXProvider, components } from '@components/MDXComponents';
import { getAllFrontmatter, getMdxBySlug } from '@utils/mdx';
import type { Frontmatter } from 'types/frontmatter';
import { ThemesMDXComponents } from '@components/ThemesMDXComponents';
import { MobileMenuProvider } from '@components/MobileMenu';
import { Box, Flex, Link, Section, Separator, Text } from '@radix-ui/themes';
import { EditPageLink } from '@components/EditPageLink';
import { DocsPageWrapper } from '@components/DocsPageWrapper';
import { BlogHeader } from '@components/BlogHeader';
import { BlogMobileMenu } from '@components/BlogMobileMenu';
import { QuickNav } from '@components/QuickNav';
import NextLink from 'next/link';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import { GetStaticPropsContext } from 'next';

type BlogPost = {
  frontmatter: Frontmatter;
  code: string;
};

export default function BlogPost({ frontmatter, code }: BlogPost) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <>
      <TitleAndMetaTags
        title={`${frontmatter.metaTitle} – Radix UI`}
        description={frontmatter.metaDescription}
        image={frontmatter.metaImage}
      />

      <MobileMenuProvider>
        <BlogHeader />
        <BlogMobileMenu />

        <Flex>
          <Box width="250px" />

          <DocsPageWrapper>
            <Box>
              <Text color="gray" size="3" mb="3" as="div" trim="start">
                {frontmatter.publishedAt}
              </Text>

              <MDXProvider frontmatter={frontmatter}>
                <Component components={ThemesMDXComponents as any} />
              </MDXProvider>
            </Box>

            <EditPageLink />
          </DocsPageWrapper>
        </Flex>
      </MobileMenuProvider>

      <QuickNav key={frontmatter.slug} title="In this article" />
    </>
  );
}

export async function getStaticPaths() {
  const frontmatters = getAllFrontmatter('blog');

  return {
    paths: frontmatters.map((frontmatter) => ({
      params: { slug: frontmatter.slug.replace('blog/', '') },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext<{ slug: string }>) {
  const { frontmatter, code } = await getMdxBySlug('blog', context.params!.slug);
  return { props: { frontmatter, code } };
}
