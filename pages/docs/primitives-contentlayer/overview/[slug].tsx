import React from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import { Box } from '@modulz/design-system';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import { MDXProvider, components } from '@components/MDXComponents';
import { RemoveScroll } from 'react-remove-scroll';
import { QuickNav } from '@components/QuickNav';

import type { PrimitiveDoc } from '.contentlayer/types';
import { allPrimitiveDocs } from '.contentlayer/data';

export default function OverviewDoc({ doc }: { doc: PrimitiveDoc }) {
  const Component = React.useMemo(() => getMDXComponent(doc.content.code), [doc.content.code]);

  return (
    <>
      <TitleAndMetaTags
        title={`${doc.metaTitle} — Radix UI`}
        description={doc.metaDescription}
        image={doc.metaImage}
      />

      <MDXProvider frontmatter={doc}>
        <Component components={components as any} />
      </MDXProvider>

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
            top: '$sizes$7',
            right: 0,
            bottom: 0,
          },
        }}
      >
        <QuickNav key={doc.slug} />
      </Box>
    </>
  );
}

export async function getStaticPaths() {
  const slugs = allPrimitiveDocs
    .filter((doc) => doc.slug.includes('/overview/'))
    .map((doc) => doc.slug.replace('primitives/overview/', ''));

  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const doc = allPrimitiveDocs.find(
    (doc) => doc.slug === `primitives/overview/${context.params.slug}`
  );

  return { props: { doc } };
}
