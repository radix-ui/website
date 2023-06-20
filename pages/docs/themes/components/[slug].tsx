import React from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import { Box, Flex, Link, Text } from '@modulz/design-system';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import { MDXProvider, components } from '@components/MDXComponents';
import { getAllFrontmatter, getMdxBySlug } from '@lib/mdx';
import { RemoveScroll } from 'react-remove-scroll';
import { QuickNav } from '@components/QuickNav';
import * as DS from '@modulz/design-system';

import type { Frontmatter } from 'types/frontmatter';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';

type Doc = {
  frontmatter: Frontmatter;
  code: string;
};

export default function GuidesDoc({ frontmatter, code }: Doc) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

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

      <DS.Text
        as="h1"
        size="8"
        css={{ scrollMarginTop: '$9', fontWeight: 500, mb: '$2', lineHeight: '40px' }}
      >
        {frontmatter.metaTitle}
      </DS.Text>

      <Box css={{ mt: '$2', mb: '$7' }}>
        <DS.Paragraph size="2" as="p">
          {frontmatter.metaDescription}
        </DS.Paragraph>

        <Flex gap="5" css={{ mt: '$5', pb: '$5', mb: '$5', borderBottom: '1px solid $gray6' }}>
          <Link variant="blue" target="_blank">
            <Flex css={{ display: 'inline-flex', position: 'relative' }}>
              <Text size="3" css={{ display: 'inline', lineHeight: '15px' }}>
                View source
              </Text>
              <Box as="span" css={{ ml: '$1', color: '$gray9' }}>
                <ArrowTopRightIcon />
              </Box>
            </Flex>
          </Link>
          <Link variant="blue" target="_blank">
            <Flex css={{ display: 'inline-flex', position: 'relative' }}>
              <Text size="3" css={{ display: 'inline', lineHeight: '15px' }}>
                Report an issue
              </Text>
              <Box as="span" css={{ ml: '$1', color: '$gray9' }}>
                <ArrowTopRightIcon />
              </Box>
            </Flex>
          </Link>
        </Flex>
      </Box>

      <MDXProvider frontmatter={frontmatter}>
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
      </Box>
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
