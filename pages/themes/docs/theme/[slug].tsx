import React from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import { MDXProvider } from '@components/MDXComponents';
import { getAllFrontmatter, getMdxBySlug } from '@lib/mdx';
import { QuickNav } from '@components/QuickNav';

import type { Frontmatter } from 'types/frontmatter';
import { ThemesMDXComponents } from '@components/ThemesMDXComponents';

type Doc = {
  frontmatter: Frontmatter;
  code: string;
};

export default function ThemingDoc({ frontmatter, code }: Doc) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <>
      <div data-algolia-lvl0 style={{ display: 'none' }}>
        Guides
      </div>

      <TitleAndMetaTags
        title={`${frontmatter.metaTitle} – Radix Themes`}
        description={frontmatter.metaDescription}
        image="themes.png"
      />

      <MDXProvider frontmatter={frontmatter}>
        <Component components={ThemesMDXComponents as any} />
      </MDXProvider>

      <QuickNav key={frontmatter.slug} />
    </>
  );
}

export async function getStaticPaths() {
  const frontmatters = getAllFrontmatter('themes/docs/theme');

  return {
    paths: frontmatters.map((frontmatter) => ({
      params: { slug: frontmatter.slug.replace('themes/docs/theme/', '') },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { frontmatter, code } = await getMdxBySlug('themes/docs/theme/', context.params.slug);
  return { props: { frontmatter, code } };
}
