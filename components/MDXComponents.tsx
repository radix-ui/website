import NextLink from 'next/link';
import * as DS from '@modulz/design-system';
import { Link2Icon } from '@modulz/radix-icons';
import { CodeBlock } from './CodeBlock';
import { PropsTable } from './PropsTable';

const LinkHeading = ({ id, ...props }) => (
  <DS.Text {...props} data-heading id={id}>
    <DS.Box
      as="a"
      href={`#${id}`}
      css={{
        textDecoration: 'none',
        color: 'inherit',
        display: 'inline-flex',
        alignItems: 'center',
        mt: '$4', mb: '$1',
        svg: { opacity: 0 },
        ':hover svg': { opacity: 1 },
      }}
    >
      {props.children}
      <DS.Box as="span" css={{ ml: '$2', color: '$gray900' }}>
        <Link2Icon />
      </DS.Box>
    </DS.Box>
  </DS.Text>
);

export const MDXComponents = {
  h1: (props) => (
    <DS.Title {...props} css={{ mb: '$1', ...props.css }} as="h1" />
  ),
  h2: (props) => (
    <DS.Subtitle
      {...props}
      css={{ mt: '$2', mb: '$6', ...props.css }}
      as="h2"
    />
  ),
  h3: (props) => (
    <LinkHeading
      {...props}
      css={{ mt: '$7', mb: '$1', ...props.css }}
    >
      <DS.Heading {...props} as="h3" />
    </LinkHeading>
  ),
  h4: (props) => (
    <LinkHeading
      {...props}
      css={{ mt: '$7', mb: '$1', ...props.css }}
    >
      <DS.Subheading {...props} as="h4" />
    </LinkHeading>
  ),
  code: (props) => (
    <DS.Box css={{ my: '$5' }}>
      <CodeBlock {...props} />
    </DS.Box>
  ),
  p: (props) => (
    <DS.Paragraph
      {...props}
      css={{ mb: '$3', ...props.css }}
      as="p"
    />
  ),
  a: ({ href = '', ...props }) => {
    if (href.startsWith('/')) {
      return (
        <NextLink href={href} passHref>
          <DS.Link
            {...props}
            css={{
              color: 'inherit',
              fontSize: 'inherit',
              ...props.css,
            }}
          />
        </NextLink>
      );
    }
    if (href.startsWith('#')) {
      return (
        <DS.Link
          {...props}
          href={href}
          css={{
            color: 'inherit',
            fontSize: 'inherit',
            ...props.css,
          }}
        />
      );
    }
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
  },
  hr: (props) => <DS.Separator size="2" {...props} css={{ my: '$6', mx: 'auto', ...props.css }} />,
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
    <DS.Text {...props} css={{ ...props.css, fontSize: 'inherit', fontWeight: 500 }} />
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
  PropsTable: (props) => (
    <DS.Box css={{ mb: '$5' }}>
      <PropsTable {...props} />
    </DS.Box>
  ),
};
