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
import { OldVersionNote } from '@components/OldVersionNote';
import { FrontmatterContext } from '@components/FrontmatterContext';
import { getAllFrontmatter, getAllVersionsFromPath, getDocBySlug } from '@lib/mdx';
import rehypeHighlightCode from '@lib/rehype-highlight-code';

import type { PrimitivesFrontmatter } from 'types/primitives';

type Doc = {
  frontmatter: PrimitivesFrontmatter;
  source: string[];
};

export default function UtilitiesDoc({ frontmatter, source }: Doc) {
  const MDXContent = useMDXContent(source, components);

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
          href={`/primitives/docs/components/${frontmatter.slug.replace(frontmatter.version, '')}`}
        />
      )}

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
        <QuickNav key={content} />
      </Box>
    </>
  );
}

export async function getStaticPaths() {
  const frontmatters = getAllFrontmatter('primitives/docs/utilities');

  return {
    paths: frontmatters.map((frontmatter) => ({
      params: { slug: frontmatter.slug.replace('primitives/docs/utilities/', '').split('/') },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { frontmatter, content } = getDocBySlug(
    'primitives/docs/utilities',
    context.params.slug.join('/')
  );

  const [componentName, componentVersion] = context.params.slug;

  const extendedFrontmatter = {
    ...frontmatter,
    version: componentVersion,
    versions: getAllVersionsFromPath(`primitives/docs/utilities/${componentName}`),
  };

  const mdxContent = await createMDXContent(content, {
    components,
    remarkPlugins: [remarkAutolinkHeadings, remarkSlug],
    rehypePlugins: [rehypeHighlightCode],
  });

  return {
    props: {
      frontmatter: extendedFrontmatter,
      source: mdxContent,
    },
  };
}
