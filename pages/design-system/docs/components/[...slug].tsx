import React from 'react';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import { Box } from '@modulz/design-system';
import remarkAutolinkHeadings from 'remark-autolink-headings';
import remarkSlug from 'remark-slug';
import { RemoveScroll } from 'react-remove-scroll';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import { components, createProvider } from '@components/MDXComponents';
import { QuickNav } from '@components/QuickNav';
import { OldVersionNote } from '@components/OldVersionNote';
import { getAllFrontmatter, getAllVersionsFromPath, getDocBySlug } from '@lib/mdx';
import rehypeHighlightCode from '@lib/rehype-highlight-code';

import type { PrimitivesFrontmatter } from 'types/primitives';
import type { MdxRemote } from 'next-mdx-remote/types';

type Doc = {
  frontmatter: PrimitivesFrontmatter;
  source: MdxRemote.Source;
};

export default function DesignSystemDoc({ frontmatter, source }: Doc) {
  const content = hydrate(source, { components, provider: createProvider(frontmatter) });

  return (
    <>
      <TitleAndMetaTags
        title={`${frontmatter.metaTitle} — Radix UI`}
        description={frontmatter.metaDescription}
        image={frontmatter.metaImage}
      />

      {frontmatter.version !== frontmatter.versions?.[0] && (
        <OldVersionNote
          name={frontmatter.metaTitle}
          href={`/design-system/docs/components/${frontmatter.slug.replace(
            frontmatter.version,
            ''
          )}`}
        />
      )}

      {content}

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
        <QuickNav content={content} />
      </Box>
    </>
  );
}

export async function getStaticPaths() {
  const frontmatters = getAllFrontmatter('design-system/docs/components');

  return {
    paths: frontmatters.map((frontmatter) => ({
      params: { slug: frontmatter.slug.replace('design-system/docs/components/', '').split('/') },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { frontmatter, content } = getDocBySlug(
    'design-system/docs/components',
    context.params.slug.join('/')
  );

  const [componentName, componentVersion] = context.params.slug;

  const extendedFrontmatter = {
    ...frontmatter,
    version: componentVersion,
    versions: getAllVersionsFromPath(`design-system/docs/components/${componentName}`),
  };

  const mdxContent = await renderToString(content, {
    components,
    provider: createProvider(extendedFrontmatter),
    mdxOptions: {
      remarkPlugins: [remarkAutolinkHeadings, remarkSlug],
      rehypePlugins: [rehypeHighlightCode],
    },
  });

  return {
    props: {
      frontmatter: extendedFrontmatter,
      source: mdxContent,
    },
  };
}
