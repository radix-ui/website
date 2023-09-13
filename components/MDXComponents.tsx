import * as React from 'react';
import NextLink from 'next/link';
import { Link2Icon } from '@radix-ui/react-icons';
import { PropsTable } from './PropsTable';
import { KeyboardTable } from './KeyboardTable';
import { Highlights } from './Highlights';
import { HeroCodeBlock } from './HeroCodeBlock';
import { CodeBlock } from './CodeBlock';
import { PackageRelease, PRLink } from './releaseHelpers';
import { HeroContainer } from './HeroContainer';
import { HeroQuote } from './HeroQuote';
import { Frontmatter } from 'types/frontmatter';
import { ColorScale, ColorScaleGroup } from './Scale';
import * as Demos from './demos';
import { CssVariablesTable } from './CssVariablesTable';
import { DataAttributesTable } from './DataAttributesTable';
import { PreWithCopyButton } from './PreWithCopyButton';
import { PreWithLivePreview } from './PreWithLivePreview';
import {
  Blockquote,
  Box,
  Flex,
  Code,
  Em,
  Heading,
  Kbd,
  Link,
  Separator,
  Strong,
  Tabs,
  Text,
} from '@radix-ui/themes';
import * as themesComponents from '@radix-ui/themes';
import styles from './MDXComponents.module.css';
import { classNames } from '@lib/classNames';

export const components = {
  ...themesComponents,
  ColorScale,
  ColorScaleGroup,
  Tabs: Tabs.Root,
  TabsList: Tabs.List,
  TabsContent: Tabs.Content,
  TabsTrigger: Tabs.Trigger,
  CodeBlock,
  HeroCodeBlock,
  h1: (props) => (
    <Heading asChild size="8" mb="3">
      <h1 {...props} style={{ scrollMarginTop: 'var(--space-9)' }} />
    </Heading>
  ),
  Description: ({ children, ...props }) => {
    // takes the text even if it's wrapped in `<p>`
    // https://github.com/wooorm/xdm/issues/47
    const childText = typeof children === 'string' ? children : children.props.children;
    return <Text as="p" size="4" mt="2" mb="7" color="gray" children={childText} {...props} />;
  },
  h2: ({ children, id, ...props }) => (
    <Heading
      size="6"
      mt="7"
      mb="2"
      asChild
      {...props}
      id={id}
      style={{ scrollMarginTop: 'var(--space-9)' }}
      data-heading
    >
      <h2>
        <LinkHeading id={id}>{children}</LinkHeading>
      </h2>
    </Heading>
  ),
  h3: ({ children, id, ...props }) => (
    <Heading
      size="5"
      mt="7"
      mb="2"
      asChild
      {...props}
      id={id}
      style={{ scrollMarginTop: 'var(--space-9)' }}
      data-heading
    >
      <h3>
        <LinkHeading id={id}>{children}</LinkHeading>
      </h3>
    </Heading>
  ),
  h4: ({ children, ...props }) => (
    <Heading asChild size="4" mt="6" mb="3" {...props}>
      <h4 children={children} style={{ scrollMarginTop: 'var(--space-9)' }} />
    </Heading>
  ),
  p: (props) => <Text mb="3" as="p" size="3" {...props} />,
  a: ({ href = '', ...props }) => {
    if (href.startsWith('http')) {
      return <Link {...props} href={href} target="_blank" rel="noopener" />;
    }
    return (
      <NextLink href={href} passHref legacyBehavior>
        <Link {...props} />
      </NextLink>
    );
  },
  hr: (props) => <Separator size="2" {...props} my="6" style={{ marginInline: 'auto' }} />,
  ul: ({ children, ...props }) => (
    <Flex direction="column" gap="1" {...props} mb="3" pl="4" asChild>
      <ul children={children} className={styles.List} />
    </Flex>
  ),
  ol: (props) => ({ children, ...props }) => (
    <Box {...props} mb="3" pl="4" asChild>
      <ol children={children} />
    </Box>
  ),
  li: (props) => (
    <li>
      <Text {...props} />
    </li>
  ),
  em: Em,
  strong: Strong,
  img: ({ ...props }) => (
    <Box my="6">
      <img {...props} style={{ maxWidth: '100%', verticalAlign: 'middle' }} />
    </Box>
  ),
  blockquote: Blockquote,
  pre: (props) => {
    if (props.children.props.live) {
      return <PreWithLivePreview scroll={props.children.props.scroll} {...props} />;
    }
    return <PreWithCopyButton {...props} />;
  },
  code: ({ className, line, live, ...props }) => {
    // if it's a codeblock (``` block in markdown), it'll have a className from prism
    const isInlineCode = !className;
    return isInlineCode ? (
      <Code
        className={className}
        {...props}
        style={{
          whiteSpace: 'break-spaces',
        }}
      />
    ) : (
      <code className={className} {...props} data-invert-line-highlight={line !== undefined} />
    );
  },
  Note: ({ children, ...props }) => (
    <Box className={styles.Note} asChild {...props}>
      <aside children={children} />
    </Box>
  ),
  Alert: ({ children, ...props }) => (
    <Box my="6" asChild {...props}>
      <aside children={children} className={styles.Alert}></aside>
    </Box>
  ),
  Highlights,
  Kbd: Kbd,
  Code,
  CssVariablesTable: (props) => (
    <Box mt="2">
      <CssVariablesTable {...props} />
    </Box>
  ),
  DataAttributesTable: (props) => <DataAttributesTable {...props} />,
  PropsTable: (props) => (
    <Box my="4">
      <PropsTable {...props} />
    </Box>
  ),
  TabsCodeBlock: (props) => (
    <Tabs.Root {...props}>
      <Box className={styles.TabsCodeBlock}>{props.children}</Box>
    </Tabs.Root>
  ),
  TabsCodeBlockContent: (props) => (
    <CodeBlock {...props} style={{ boxShadow: 'none', borderRadius: 0 }} />
  ),
  KeyboardTable: (props) => (
    <Box mb="5">
      <KeyboardTable {...props} />
    </Box>
  ),
  PackageRelease,
  PRLink,
  HeroContainer,
  HeroQuote,
  ...Demos,
};

const LinkHeading = ({
  id,
  children,
  className,
  ...props
}: {
  id: string;
  children: React.ReactNode;
} & React.ComponentProps<typeof Link>) => (
  <Link asChild weight="bold" highContrast color="gray" underline="hover" {...props}>
    <a id={id} href={`#${id}`} className={classNames(className, styles.LinkHeading)}>
      {children}

      <Link2Icon aria-hidden />
    </a>
  </Link>
);

export const FrontmatterContext = React.createContext<Frontmatter>({} as any);

// Custom provider for next-mdx-remote
// https://github.com/hashicorp/next-mdx-remote#using-providers
export function MDXProvider(props) {
  const { frontmatter, children } = props;
  return <FrontmatterContext.Provider value={frontmatter}>{children}</FrontmatterContext.Provider>;
}
