import React from 'react';
import NextLink from 'next/link';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import { Box, Link } from '@modulz/design-system';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import { components, FrontmatterContext, createProvider } from '@components/MDXComponents';
import { getAllFrontmatter, getAllVersionsFromPath, getDocBySlug } from '@lib/mdx';
import rehypeHighlightCode from '@lib/rehype-highlight-code';
import remarkAutolinkHeadings from 'remark-autolink-headings';
import remarkSlug from 'remark-slug';
import { RemoveScroll } from 'react-remove-scroll';
import { QuickNav } from '@components/QuickNav';
import type { PrimitivesFrontmatter } from 'types/primitives';
import type { MdxRemote } from 'next-mdx-remote/types';

type Doc = {
  frontmatter: PrimitivesFrontmatter;
  source: MdxRemote.Source;
};

export default function ComponentsDoc({ frontmatter, source }: Doc) {
  const content = hydrate(source, { components, provider: createProvider(frontmatter) });

  return (
    <>
      <TitleAndMetaTags
        title={`${frontmatter.metaTitle} — Radix UI`}
        description={frontmatter.metaDescription}
        image={frontmatter.metaImage}
      />

      {frontmatter.version !== frontmatter.versions?.[0] && (
        <Box
          as="aside"
          css={{
            my: '$6',
            py: '$2',
            px: '$3',
            bc: '$yellow100',
            border: '1px solid $yellow400',
            borderRadius: '$2',
            '& p': {
              fontSize: '$3',
              color: '$yellow900',
              lineHeight: '21px',
              margin: 0,
            },
          }}
        >
          <p>
            A newer version of{' '}
            <Box as="span" css={{ fontWeight: 500 }}>
              {frontmatter.metaTitle}
            </Box>{' '}
            is available.{' '}
            <NextLink
              href={`/primitives/docs/components/${frontmatter.slug.replace(
                frontmatter.version,
                ''
              )}`}
              passHref
            >
              <Link variant="blue">Learn more</Link>
            </NextLink>
            .
          </p>
        </Box>
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
            width: '250px',
            flexShrink: 0,
            zIndex: 1,
            position: 'fixed',
            right: '0',
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
  const frontmatters = getAllFrontmatter('primitives/docs/components');

  return {
    paths: frontmatters.map((frontmatter) => ({
      params: { slug: frontmatter.slug.replace('primitives/docs/components/', '').split('/') },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { frontmatter, content } = getDocBySlug(
    'primitives/docs/components',
    context.params.slug.join('/')
  );

  const [componentName, componentVersion] = context.params.slug;

  const extendedFrontmatter = {
    ...frontmatter,
    version: componentVersion,
    versions: getAllVersionsFromPath(`primitives/docs/components/${componentName}`),
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
