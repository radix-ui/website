import React from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import { Box, Flex, Link, Text, Heading } from '@radix-ui/themes';
import { Box as DsBox } from '@modulz/design-system';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import { MDXProvider, components } from '@components/MDXComponents';
import { getAllFrontmatter, getMdxBySlug } from '@lib/mdx';
import { RemoveScroll } from 'react-remove-scroll';
import { QuickNav } from '@components/QuickNav';

import type { Frontmatter } from 'types/frontmatter';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';

type Doc = {
  frontmatter: Frontmatter;
  code: string;
};

export default function GuidesDoc({ frontmatter, code }: Doc) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);
  const fileName = frontmatter.metaTitle.replace(/\s+/g, '-').toLowerCase();
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
          <Link
            target="_blank"
            href={`https://github.com/radix-ui/themes/blob/main/packages/radix-ui-themes/src/components/${fileName}.tsx`}
          >
            <Flex display="inline-flex" align="center" gap="2">
              <Text size="3">View source</Text>
              <Box asChild style={{ color: 'var(--gray-9)' }}>
                <ArrowTopRightIcon />
              </Box>
            </Flex>
          </Link>
          <Link
            target="_blank"
            href={`https://github.com/radix-ui/themes/issues/new?title=[${componentName}] Issue`}
          >
            <Flex display="inline-flex" align="center" gap="2">
              <Text size="3">Report an issue</Text>
              <Box asChild style={{ color: 'var(--gray-9)' }}>
                <ArrowTopRightIcon />
              </Box>
            </Flex>
          </Link>
        </Flex>
      </Box>

      <MDXProvider frontmatter={frontmatter}>
        <Component components={components as any} />
      </MDXProvider>

      <DsBox
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
          '@media (min-width: 1440px)': {
            display: 'block',
            width: 250,
            flexShrink: 0,
            zIndex: 1,
            position: 'fixed',
            top: '$sizes$8',
            right: 0,
            bottom: 0,
          },
        }}
      >
        <QuickNav key={frontmatter.slug} />
      </DsBox>
    </>
  );
}

export async function getStaticPaths() {
  const frontmatters = getAllFrontmatter('themes/components');

  return {
    paths: frontmatters.map((frontmatter) => ({
      params: { slug: frontmatter.slug.replace('themes/components/', '') },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { frontmatter, code } = await getMdxBySlug('themes/components/', context.params.slug);
  return { props: { frontmatter, code } };
}
