import React from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import { MDXProvider, components } from '@components/MDXComponents';
import { getAllFrontmatter, getMdxBySlug } from '@lib/mdx';
import { QuickNav } from '@components/QuickNav';
import { ColorTestText } from '@components/ColorTestText';
import { ColorTestTextLarge } from '@components/ColorTestTextLarge';
import { ColorTestTextLargeBright } from '@components/ColorTestTextLargeBright';
import { ColorTestBalanceLight } from '@components/ColorTestBalanceLight';
import { ColorTestBalanceDark } from '@components/ColorTestBalanceDark';
import { ColorTestSaturationLight } from '@components/ColorTestSaturationLight';
import { ColorTestSaturationDark } from '@components/ColorTestSaturationDark';

import type { Frontmatter } from 'types/frontmatter';

type Doc = {
  frontmatter: Frontmatter;
  code: any;
};

export default function ColorsTestDoc({ frontmatter, code }: Doc) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <>
      <TitleAndMetaTags
        title={`${frontmatter.metaTitle} – Radix UI`}
        description={frontmatter.metaDescription}
        image="colors.png"
      />

      <MDXProvider frontmatter={frontmatter}>
        <Component
          components={
            {
              ...components,
              ColorTestBalanceLight,
              ColorTestBalanceDark,
              ColorTestSaturationLight,
              ColorTestSaturationDark,
              ColorTestText,
              ColorTestTextLarge,
              ColorTestTextLargeBright,
            } as any
          }
        />
      </MDXProvider>

      <QuickNav key={frontmatter.slug} />
    </>
  );
}

export async function getStaticPaths() {
  const frontmatters = getAllFrontmatter('colors/tests');

  return {
    paths: frontmatters.map((frontmatter) => ({
      params: { slug: frontmatter.slug.replace('colors/tests/', '') },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { frontmatter, code } = await getMdxBySlug('colors/tests/', context.params.slug);
  return { props: { frontmatter, code } };
}
