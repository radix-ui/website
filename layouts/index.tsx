import React from 'react';
import { useRouter } from 'next/router';
import { MDXProvider } from '@mdx-js/react';
import * as DS from '@modulz/design-system';
import { MDXComponents } from '../components/MDXComponents';
import { FrontMatter } from '../types';
import { TitleAndMetaTags } from '../components/TitleAndMetaTags';
import { getPostById } from '../utils/allPosts';

import { Accordion } from '@interop-ui/react-accordion';
import { AlertDialog } from '@interop-ui/react-alert-dialog';
import { Avatar } from '@interop-ui/react-avatar';
import { Checkbox } from '@interop-ui/react-checkbox';
import { Dialog } from '@interop-ui/react-dialog';
import { Popover } from '@interop-ui/react-popover';
import { ProgressBar } from '@interop-ui/react-progress-bar';
import { RadioGroup } from '@interop-ui/react-radio-group';
import { Separator } from '@interop-ui/react-separator';
import { Slider } from '@interop-ui/react-slider';
import { Switch } from '@interop-ui/react-switch';
import { Tabs } from '@interop-ui/react-tabs';
import { ToggleButton } from '@interop-ui/react-toggle-button';
import { Tooltip } from '@interop-ui/react-tooltip';

const Primitives = {
  Accordion,
  AlertDialog,
  Avatar,
  Checkbox,
  Dialog,
  Popover,
  ProgressBar,
  RadioGroup,
  Separator,
  Slider,
  Switch,
  Tabs,
  ToggleButton,
  Tooltip,
};

type LayoutProps = {
  children: React.ReactNode;
  frontMatter: FrontMatter;
};

export default function DocsLayout({ children, frontMatter }: LayoutProps) {
  const router = useRouter();

  const [_, productType] = router.pathname.split('/');
  const components =
    productType === 'design-system' ? DS : productType === 'primitives' ? Primitives : {};

  return (
    <MDXProvider components={{ ...components, ...MDXComponents }}>
      <TitleAndMetaTags title={`${frontMatter.title} — Stitches`} poster={frontMatter.poster} />

      <DS.Text as="h1" size="8" css={{ fontWeight: 500, mb: '$2', lineHeight: '40px' }}>
        {frontMatter.title}
      </DS.Text>

      <DS.Text as="h2" size="6" css={{ mt: '$2', mb: '$4', color: '$gray600', lineHeight: '30px' }}>
        {frontMatter.description}
      </DS.Text>

      <DS.Box>{children}</DS.Box>

      {Boolean(frontMatter.relatedIds) && (
        <>
          <DS.Separator size="2" css={{ my: '$8', mx: 'auto' }} />
          <DS.Box>
            <DS.Text
              as="h3"
              size="2"
              css={{
                mb: '$3',
                fontWeight: 500,
                textAlign: 'center',
                textTransform: 'uppercase',
              }}
            >
              Related
            </DS.Text>

            <DS.Flex css={{ my: '$4', flexDirection: 'column', gap: '$4' }}>
              {frontMatter.relatedIds.map((relatedPostId) => {
                const post = getPostById(relatedPostId);
                return (
                  <DS.Box
                    as="a"
                    key={post.id}
                    href={`/${post.id}`}
                    css={{
                      textDecoration: 'none',
                      color: 'inherit',
                    }}
                  >
                    <DS.Box>
                      <DS.Text
                        as="h6"
                        size="4"
                        css={{
                          fontWeight: 500,
                          mb: '$1',
                        }}
                      >
                        {post.title}
                      </DS.Text>
                      <DS.Text
                        as="p"
                        size="3"
                        css={{
                          color: '$hiContrast',
                        }}
                      >
                        {post.description}
                      </DS.Text>
                    </DS.Box>
                  </DS.Box>
                );
              })}
            </DS.Flex>
          </DS.Box>
        </>
      )}
    </MDXProvider>
  );
}
