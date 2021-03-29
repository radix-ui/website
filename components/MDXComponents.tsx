import * as React from 'react';
import NextLink from 'next/link';
import * as DS from '@modulz/design-system';
import { Link2Icon } from '@radix-ui/react-icons';
import { CodeBlock } from './CodeBlock';
import { PropsTable } from './PropsTable';
import { KeyboardTable } from './KeyboardTable';
import { HeroSlot } from './HeroSlot';

const LinkHeading = ({
  id,
  children,
  css,
}: {
  id: string;
  children: React.ReactNode;
  css?: any;
}) => (
  <DS.Box>
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
        ':hover svg': {
          opacity: 1,
        },
        ...css,
      }}
    >
      {children}
      <DS.Box as="span" css={{ ml: '$2', color: '$gray900' }}>
        <Link2Icon aria-hidden />
      </DS.Box>
    </DS.Box>
  </DS.Box>
);

export const MDXComponents = {
  h1: (props) => <DS.Title {...props} css={{ mb: '$1', ...props.css }} />,
  h2: ({ children, id, ...props }) => (
    <LinkHeading id={id} css={{ mt: '$6', mb: '$2', ...props.css }}>
      <DS.Heading
        {...props}
        as={'h2' as any}
        id={id}
        data-heading
        style={{ scrollMarginTop: '45px' }}
      >
        {children}
      </DS.Heading>
    </LinkHeading>
  ),
  h3: ({ children, id, ...props }) => (
    <LinkHeading id={id} css={{ mt: '$5', mb: '$1', ...props.css }}>
      <DS.Subheading
        {...props}
        as={'h3' as any}
        id={id}
        data-heading
        style={{ scrollMarginTop: '45px' }}
      >
        {children}
      </DS.Subheading>
    </LinkHeading>
  ),
  // MDX adds a `pre` tag when we use ``` for CodeBlock
  // which causes everything to be wrapped in it.
  pre: (props) => <div>{props.children}</div>,
  code: (props) => (
    <DS.Box css={{ mt: '$3', mb: '$3' }}>
      <CodeBlock {...props} />
    </DS.Box>
  ),
  p: (props) => <DS.Paragraph {...props} css={{ mb: '$3', ...props.css }} as="p" />,
  a: ({ href = '', ...props }) => {
    if (href.startsWith('http')) {
      return (
        <DS.Link
          variant="blue"
          href={href}
          {...props}
          css={{
            fontSize: 'inherit',
            ...props.css,
          }}
          target="_blank"
          rel="noopener"
        />
      );
    }
    if (href.startsWith('#')) {
      return (
        <DS.Link
          {...props}
          variant="blue"
          href={href}
          css={{
            fontSize: 'inherit',
            ...props.css,
          }}
        />
      );
    }
    return (
      <NextLink href={href} passHref>
        <DS.Link
          {...props}
          variant="blue"
          css={{
            fontSize: 'inherit',
            ...props.css,
          }}
        />
      </NextLink>
    );
  },
  hr: (props) => <DS.Separator size="2" {...props} css={{ mt: '$7', mx: 'auto', ...props.css }} />,
  inlineCode: (props) => <DS.Code {...props} />,
  ul: (props) => (
    <DS.Box {...props} css={{ color: '$hiContrast', mb: '$3', ...props.css }} as="ul" />
  ),
  ol: (props) => (
    <DS.Box {...props} css={{ color: '$hiContrast', mb: '$3', ...props.css }} as="ol" />
  ),
  li: (props) => (
    <li>
      <DS.Paragraph {...props} css={{ ...props.css }} />
    </li>
  ),
  strong: (props) => (
    <DS.Text
      {...props}
      css={{ ...props.css, display: 'inline', fontSize: 'inherit', fontWeight: 500 }}
    />
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
  Note: (props) => (
    <DS.Box
      as="aside"
      css={{
        mt: '$6',
        mb: '$3',
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
      {...props}
    />
  ),
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
  HeroSlot,
};
