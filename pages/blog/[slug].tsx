import React from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import { Box, Container } from '@modulz/design-system';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import { MDXProvider, components } from '@components/MDXComponents';
import { getAllFrontmatter, getMdxBySlug } from '@lib/mdx';
import { Color } from '@components/Color';

import type { Frontmatter } from 'types/frontmatter';

type Doc = {
  frontmatter: Frontmatter;
  code: any;
};

export default function BlogPage({ frontmatter, code }: Doc) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <>
      <TitleAndMetaTags
        title={`${frontmatter.metaTitle} — Radix UI`}
        description={frontmatter.metaDescription}
        image={frontmatter.metaImage}
      />

      <Box
        css={{
          py: '$5',

          '@bp2': { pt: '$8', pb: '$9', pl: '250px' },
          '@bp3': { pr: '250px' },
        }}
      >
        <Container size="3" css={{ maxWidth: '780px', position: 'relative' }}>
          <MDXProvider frontmatter={frontmatter}>
            <Component components={{ ...components, Color } as any} />
          </MDXProvider>
        </Container>
      </Box>
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

export async function getStaticProps(context) {
  const { frontmatter, code } = await getMdxBySlug('blog/', context.params.slug);
  return { props: { frontmatter, code } };
}
