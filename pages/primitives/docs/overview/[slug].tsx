import React from 'react';
import useMDXContent from 'next-mdx-thing/useMDXContent';
import createMDXContent from 'next-mdx-thing/createMDXContent';
import { IdProvider } from '@radix-ui/react-id';
import { Box } from '@modulz/design-system';
import remarkAutolinkHeadings from 'remark-autolink-headings';
import remarkSlug from 'remark-slug';
import { RemoveScroll } from 'react-remove-scroll';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import { components } from '@components/MDXComponents';
import { QuickNav } from '@components/QuickNav';
import { FrontmatterContext } from '@components/FrontmatterContext';
import { getAllFrontmatter, getDocBySlug } from '@lib/mdx';
import rehypeHighlightCode from '@lib/rehype-highlight-code';

import type { PrimitivesFrontmatter } from 'types/primitives';

type Doc = {
  frontmatter: PrimitivesFrontmatter;
  source: string[];
};

export default function OverviewDoc({ frontmatter, source }: Doc) {
  const MDXContent = useMDXContent(source, components);
  return (
    <>
      <TitleAndMetaTags
        title={`${frontmatter.metaTitle} — Radix UI`}
        description={frontmatter.metaDescription}
        image={frontmatter.metaImage}
      />

      <IdProvider>
        <FrontmatterContext.Provider value={frontmatter}>
          <MDXContent />
        </FrontmatterContext.Provider>
      </IdProvider>

      <Box
        as="aside"
        // Components that hide the scrollbar (like Dialog) add padding to
        // account for the scrollbar gap to avoid layout jank. This does not
        // work for position: fixed elements. Since we use react-remove-scroll
        // under the hood for those primitives, we can add this helper class
        // provided by that lib to deal with that for the QuickNav.
        // https://github.com/radix-ui/website/issues/64
        // https://github.com/theKashey/react-remove-scroll#positionfixed-elements
        className={RemoveScroll.classNames.zeroRight}
        css={{
          display: 'none',
          '@bp3': {
            display: 'block',
            width: 250,
            flexShrink: 0,
            zIndex: 1,
            position: 'fixed',
            top: 0,
            right: 0,
            bottom: 0,
          },
        }}
      >
        <QuickNav key={frontmatter.slug} />
      </Box>
    </>
  );
}

export async function getStaticPaths() {
  const frontmatters = getAllFrontmatter('primitives/docs/overview');

  return {
    paths: frontmatters.map((frontmatter) => ({
      params: { slug: frontmatter.slug.replace('primitives/docs/overview/', '') },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { frontmatter, content } = getDocBySlug('primitives/docs/overview', context.params.slug);

  const mdxContent = await createMDXContent(content, {
    components,
    remarkPlugins: [remarkAutolinkHeadings, remarkSlug],
    rehypePlugins: [rehypeHighlightCode],
  });

  return { props: { frontmatter, source: mdxContent } };
}
