import NextLink from 'next/link';
import * as DS from '@modulz/design-system';
import { Link2Icon } from '@modulz/radix-icons';
import { CodeBlock } from './CodeBlock';

const OffsetBox = DS.styled('div', {
  variants: {
    size: {
      wide: {
        bp2: {
          mx: '-50px',
        },
      },
      hero: {
        mx: '-35px',
        bp2: {
          mx: '-90px',
        },
        bp3: {
          mx: '-166px',
        },
      },
    },
  },
});

const LinkHeading = ({ id, ...props }) => (
  <DS.Text {...props} data-heading id={id}>
    <DS.Box
      as="a"
      href={`#${id}`}
      css={{
        fontSize: 'inherit',
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        color: 'inherit',
        svg: { opacity: 0 },
        ':hover svg': { opacity: 1 },
      }}
    >
      <span>{props.children}</span>
      <DS.Box as="span" css={{ ml: '$2', color: '$gray500' }}>
        <Link2Icon />
      </DS.Box>
    </DS.Box>
  </DS.Text>
);

export const MDXComponents = {
  h1: (props) => (
    <DS.Text size="6" {...props} css={{ mb: '$8', fontWeight: 500, ...props.css }} as="h1" />
  ),
  h2: (props) => (
    <DS.Text
      size="6"
      {...props}
      css={{ mt: '$2', mb: '$6', color: '$gray600', lineHeight: '30px', ...props.css }}
      as="h2"
    />
  ),
  h3: (props) => (
    <LinkHeading
      size="7"
      {...props}
      css={{ mt: '$7', mb: '$1', lineHeight: '35px', fontWeight: 500, ...props.css }}
      as="h3"
    />
  ),
  h4: (props) => (
    <LinkHeading
      size="6"
      {...props}
      css={{ mt: '$7', mb: '$1', lineHeight: '25px', fontWeight: 500, ...props.css }}
      as="h4"
    />
  ),
  code: (props) => (
    <DS.Box css={{ my: '$5' }}>
      <CodeBlock {...props} />
    </DS.Box>
  ),
  p: (props) => (
    <DS.Text
      size="4"
      {...props}
      css={{ mb: '$3', lineHeight: '30px', letterSpacing: 0, ...props.css }}
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
      <DS.Text size="4" {...props} css={{ lineHeight: '30px', letterSpacing: 0, ...props.css }} />
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
  Image: ({ children, size, ...props }) => (
    <DS.Box as="figure" css={{ mx: '0', my: '$6' }}>
      <OffsetBox size={size}>
        <DS.Image
          {...props}
          css={{
            maxWidth: '100%',
            verticalAlign: 'middle',
          }}
        />
      </OffsetBox>
      <DS.Text
        as="figcaption"
        size="3"
        css={{
          lineHeight: '23px',
          color: '$gray600',
          mt: '$2',
        }}
      >
        {children}
      </DS.Text>
    </DS.Box>
  ),
  Video: ({
    small,
    large,
    src,
    children = '',
    muted = true,
    autoPlay = true,
    controls,
    size,
    ...props
  }) => (
    <DS.Box as="figure" css={{ mx: '0', my: '$6' }}>
      <OffsetBox size={size}>
        <video
          src={src}
          autoPlay={autoPlay}
          playsInline
          muted={muted}
          controls={controls}
          loop
          style={{ width: '100%', display: 'block' }}
        ></video>
      </OffsetBox>
      <DS.Text
        as="figcaption"
        size="3"
        css={{
          lineHeight: '23px',
          color: '$gray600',
          mt: '$2',
        }}
      >
        {children}
      </DS.Text>
    </DS.Box>
  ),
  blockquote: (props) => (
    <DS.Box
      css={{
        mt: '$6',
        mb: '$5',
        pl: '$4',
        borderLeft: `1px solid ${DS.theme.colors.$gray400}`,
        color: 'orange',
        '& p': {
          fontSize: '$3',
          color: '$gray600',
          lineHeight: '25px',
        },
      }}
      {...props}
    />
  ),
};
