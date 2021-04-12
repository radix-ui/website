import React from 'react';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import { Text, Box, Subheading, Link, Skeleton, styled } from '@modulz/design-system';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import { components } from '@components/MDXComponents';
import { getAllFrontmatter, getDocBySlug } from '@lib/mdx';
import rehypeHighlightCode from '@lib/rehype-highlight-code';
import remarkAutolinkHeadings from 'remark-autolink-headings';
import remarkSlug from 'remark-slug';
import { RemoveScroll } from 'react-remove-scroll';
import { ScrollArea } from '@components/ScrollArea';
import { QuickNav } from '@components/QuickNav';

import type { PrimitivesFrontmatter } from 'types/primitives';
import type { MdxRemote } from 'next-mdx-remote/types';

type Doc = {
  frontmatter: PrimitivesFrontmatter;
  source: MdxRemote.Source;
};

export default function Doc({ frontmatter, source }: Doc) {
  const content = hydrate(source, { components });

  return (
    <>
      <TitleAndMetaTags
        title={`${frontmatter.title} — Radix UI`}
        description={frontmatter.description}
        poster={frontmatter.poster}
      />

      <Text as="h1" size="8" css={{ fontWeight: 500, mb: '$2', lineHeight: '40px' }}>
        {frontmatter.title}
      </Text>

      <Text
        role="doc-subtitle"
        as="p"
        size="6"
        css={{ mt: '$2', mb: '$4', color: '$slate900', lineHeight: '30px' }}
      >
        {frontmatter.description}
      </Text>

      <Box>{content}</Box>

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
            width: '250px',
            flexShrink: 0,
            zIndex: 1,
            position: 'fixed',
            right: '$2',
            top: '$5',
            order: 1,
            height: 'calc(100vh - (var(--space-8) + var(--space-5)))',
          },
        }}
      >
        <QuickNav content={content} />
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

  const mdxContent = await renderToString(content, {
    components,
    mdxOptions: {
      remarkPlugins: [remarkAutolinkHeadings, remarkSlug],
      rehypePlugins: [rehypeHighlightCode],
    },
  });

  return { props: { frontmatter, source: mdxContent } };
}
