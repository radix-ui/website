import * as React from 'react';
import NextLink from 'next/link';
import * as DS from '@modulz/design-system';
import { Link2Icon } from '@radix-ui/react-icons';
import { IdProvider } from '@radix-ui/react-id';
import { PropsTable } from './PropsTable';
import { KeyboardTable } from './KeyboardTable';
import { Preview } from './Preview';
import { Highlights } from './Highlights';
import { DocCodeBlock } from './DocCodeBlock';
import { PackageRelease, PRLink } from './releaseHelpers';
import * as gettingStartedDemos from './demos/GettingStarted';
import * as accessibleIconDemos from './demos/AccessibleIcon';
import * as aspectRatioDemos from './demos/AspectRatio';
import * as accordionDemos from './demos/Accordion';
import * as alertDialogDemos from './demos/AlertDialog';
import * as avatarDemos from './demos/Avatar';
import * as checkboxDemos from './demos/Checkbox';
import * as collapsibleDemos from './demos/Collapsible';
import * as contextMenuDemos from './demos/ContextMenu';
import * as dialogDemos from './demos/Dialog';
import * as dropdownMenuDemos from './demos/DropdownMenu';
import * as labelDemos from './demos/Label';
import * as popoverDemos from './demos/Popover';
import * as progressDemos from './demos/Progress';
import * as radioGroupDemos from './demos/RadioGroup';
import * as scrollAreaDemos from './demos/ScrollArea';
import * as separatorDemos from './demos/Separator';
import * as sliderDemos from './demos/Slider';
import * as switchDemos from './demos/Switch';
import * as tabsDemos from './demos/Tabs';
import * as toggleDemos from './demos/Toggle';
import * as toggleGroupDemos from './demos/ToggleGroup';
import * as toolbarDemos from './demos/Toolbar';
import * as tooltipDemos from './demos/Tooltip';
import { Frontmatter } from 'types/frontmatter';

export const components = {
  ...DS,
  h1: (props) => (
    <DS.Text {...props} as="h1" size="8" css={{ fontWeight: 500, mb: '$2', lineHeight: '40px' }} />
  ),
  Description: ({ children, ...props }) => {
    const childText = typeof children === 'string' ? children : children.props.children;
    return <DS.Subtitle {...props} as="p" css={{ mt: '$2', mb: '$7' }} children={childText} />;
  },
  h2: ({ children, id, ...props }) => (
    <LinkHeading id={id} css={{ mt: '$7', mb: '$2' }}>
      <DS.Heading
        {...props}
        id={id}
        css={{
          scrollMarginTop: '$6',
        }}
        as={'h2' as any}
        data-heading
      >
        {children}
      </DS.Heading>
    </LinkHeading>
  ),
  h3: ({ children, id, ...props }) => (
    <LinkHeading id={id} css={{ mt: '$7', mb: '$1' }}>
      <DS.Subheading
        {...props}
        id={id}
        css={{ scrollMarginTop: '$6' }}
        as={'h3' as any}
        data-heading
      >
        {children}
      </DS.Subheading>
    </LinkHeading>
  ),
  h4: (props) => (
    <DS.Text as="h4" {...props} size="4" css={{ mb: '$3', lineHeight: '27px', fontWeight: 500 }} />
  ),
  p: (props) => <DS.Paragraph {...props} css={{ mb: '$3' }} as="p" />,
  a: ({ href = '', ...props }) => {
    if (href.startsWith('http')) {
      return (
        <DS.Link
          {...props}
          variant="blue"
          href={href}
          css={{ fontSize: 'inherit' }}
          target="_blank"
          rel="noopener"
        />
      );
    }
    return (
      <NextLink href={href} passHref>
        <DS.Link {...props} css={{ color: 'inherit', fontSize: 'inherit' }} />
      </NextLink>
    );
  },
  hr: (props) => <DS.Separator size="2" {...props} css={{ my: '$6', mx: 'auto' }} />,
  ul: (props) => <DS.Box {...props} css={{ color: '$hiContrast', mb: '$3' }} as="ul" />,
  ol: (props) => <DS.Box {...props} css={{ color: '$hiContrast', mb: '$3' }} as="ol" />,
  li: (props) => (
    <li>
      <DS.Text size="4" {...props} css={{ lineHeight: '30px', letterSpacing: 0 }} />
    </li>
  ),
  strong: (props) => (
    <DS.Text {...props} css={{ display: 'inline', fontSize: 'inherit', fontWeight: 500 }} />
  ),
  img: ({ ...props }) => (
    <DS.Box css={{ my: '$6' }}>
      <DS.Box
        as="img"
        {...props}
        css={{ maxWidth: '100%', verticalAlign: 'middle', ...props.css }}
      />
    </DS.Box>
  ),
  blockquote: (props) => (
    <DS.Box
      css={{
        mt: '$6',
        mb: '$5',
        pl: '$4',
        borderLeft: `1px solid $gray400`,
        color: 'orange',
        '& p': {
          fontSize: '$3',
          color: '$gray900',
          lineHeight: '25px',
        },
      }}
      {...props}
    />
  ),
  pre: ({ children }) => <>{children}</>,
  code: ({ className, collapsed, ...props }) => {
    const isInlineCode = !className;
    return isInlineCode ? (
      <DS.Code {...props} />
    ) : (
      <DocCodeBlock className={className} collapsed={collapsed !== undefined} {...(props as any)} />
    );
  },
  Note: (props) => (
    <DS.Box
      as="aside"
      css={{
        mt: '$6',
        mb: '$3',
        py: '$2',
        px: '$3',
        bc: '$blue100',
        border: '1px solid $blue500',
        borderRadius: '$3',
        '& p': {
          fontSize: '$3',
          color: '$slate900',
          lineHeight: '21px',
          margin: 0,
        },
      }}
      {...props}
    />
  ),
  Highlights,
  Kbd: DS.Kbd,
  Code: DS.Code,
  PropsTable: (props) => (
    <DS.Box css={{ mb: '$5' }}>
      <PropsTable {...props} />
    </DS.Box>
  ),
  KeyboardTable: (props) => (
    <DS.Box css={{ mb: '$5' }}>
      <KeyboardTable {...props} />
    </DS.Box>
  ),
  Preview,
  PackageRelease,
  PRLink,
  ...accessibleIconDemos,
  ...aspectRatioDemos,
  ...gettingStartedDemos,
  ...accordionDemos,
  ...alertDialogDemos,
  ...avatarDemos,
  ...checkboxDemos,
  ...collapsibleDemos,
  ...contextMenuDemos,
  ...dialogDemos,
  ...dropdownMenuDemos,
  ...labelDemos,
  ...popoverDemos,
  ...progressDemos,
  ...radioGroupDemos,
  ...scrollAreaDemos,
  ...separatorDemos,
  ...sliderDemos,
  ...switchDemos,
  ...tabsDemos,
  ...toggleDemos,
  ...toggleGroupDemos,
  ...toolbarDemos,
  ...tooltipDemos,
};

const LinkHeading = ({
  id,
  children,
  css,
}: {
  id: string;
  children: React.ReactNode;
  css?: any;
}) => (
  <DS.Box css={{ ...css }}>
    <DS.Box
      as="a"
      href={`#${id}`}
      // used by `scrollToUrlHash`
      // not using the `id` attribute for that because we may get ids that start with a number
      // and that is not a valid css selector
      data-id={id}
      css={{
        textDecoration: 'none',
        color: 'inherit',
        display: 'inline-flex',
        alignItems: 'center',
        svg: {
          opacity: 0,
        },
        '&:hover svg': {
          opacity: 1,
        },
      }}
    >
      {children}
      <DS.Box as="span" css={{ ml: '$2', color: '$slate800' }}>
        <Link2Icon aria-hidden />
      </DS.Box>
    </DS.Box>
  </DS.Box>
);

export const FrontmatterContext = React.createContext<Frontmatter>({} as any);

// Custom provider for next-mdx-remote
// https://github.com/hashicorp/next-mdx-remote#using-providers
export function MDXProvider(props) {
  const { frontmatter, children } = props;
  return (
    <IdProvider>
      <FrontmatterContext.Provider value={frontmatter}>{children}</FrontmatterContext.Provider>
    </IdProvider>
  );
}
