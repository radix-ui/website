import React from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import { Box, Flex, Link, Text, Heading } from '@radix-ui/themes';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import { MDXProvider, components } from '@components/MDXComponents';
import { getAllFrontmatter, getMdxBySlug } from '@lib/mdx';
import { QuickNav } from '@components/QuickNav';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import * as icons from '@radix-ui/react-icons';

import type { Frontmatter } from 'types/frontmatter';

type Doc = {
  frontmatter: Frontmatter;
  code: string;
};

export default function GuidesDoc({ frontmatter, code }: Doc) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);
  const componentName = frontmatter.metaTitle.replace(/\s+/g, '');

  return (
    <>
      <div data-algolia-lvl0 style={{ display: 'none' }}>
        Components
      </div>

      <TitleAndMetaTags
        title={`${frontmatter.metaTitle} – Radix UI`}
        description={frontmatter.metaDescription}
        image={frontmatter.metaImage}
      />

      <Heading as="h1" size="8" mb="2" style={{ scrollMarginTop: 'var(--space-9)' }}>
        {frontmatter.metaTitle}
      </Heading>

      <Box mt="2" mb="7">
        <Text size="4" color="gray" as="p">
          {frontmatter.metaDescription}
        </Text>

        <Flex gap="5" mt="5">
          <Flex asChild display="inline-flex" align="center" gap="2">
            <Link
              size="3"
              target="_blank"
              href={`https://github.com/radix-ui/themes/blob/main/packages/radix-ui-themes/src/${frontmatter.sourcePath}.tsx`}
            >
              View source
              <Box asChild style={{ color: 'var(--gray-9)' }}>
                <ArrowTopRightIcon />
              </Box>
            </Link>
          </Flex>
          <Flex asChild display="inline-flex" align="center" gap="2">
            <Link
              size="3"
              target="_blank"
              href={`https://github.com/radix-ui/themes/issues/new?title=[${componentName}] Issue`}
            >
              Report an issue
              <Box asChild style={{ color: 'var(--gray-9)' }}>
                <ArrowTopRightIcon />
              </Box>
            </Link>
          </Flex>
        </Flex>
      </Box>

      <MDXProvider frontmatter={frontmatter}>
        <Component components={{ ...components, ...icons } as any} />
      </MDXProvider>

      <QuickNav key={frontmatter.slug} />
    </>
  );
}

export async function getStaticPaths() {
  const frontmatters = getAllFrontmatter('themes/docs/components');

  return {
    paths: frontmatters.map((frontmatter) => ({
      params: { slug: frontmatter.slug.replace('themes/docs/components/', '') },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { frontmatter, code } = await getMdxBySlug('themes/docs/components/', context.params.slug);
  return { props: { frontmatter, code } };
}
