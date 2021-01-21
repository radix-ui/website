import React from 'react';
import { useRouter } from 'next/router';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import { Box, Button, Text, theme as DStheme, styled, css } from '@modulz/design-system';
import * as RadixIcons from '@radix-ui/react-icons';
import { useClipboard } from '../utils/useClipboard';
import * as DS from '@modulz/design-system';
import * as Primitives from './Primitives';

const { colors } = DStheme;

const theme: any = {
  plain: {
    color: 'var(--colors-hiContrast)',
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: colors.$gray800,
        fontStyle: 'italic',
      },
    },
    {
      types: ['namespace'],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ['string', 'attr-value'],
      style: {
        color: colors.$turquoise900,
      },
    },
    {
      types: ['punctuation', 'operator'],
      style: {
        color: colors.$gray800,
      },
    },
    {
      types: [
        'entity',
        'url',
        'symbol',
        'number',
        'boolean',
        'variable',
        'constant',
        'regex',
        'inserted',
      ],
      style: {
        color: colors.$red900,
      },
    },
    {
      types: ['property'],
      style: {
        color: colors.$gold900,
      },
    },
    {
      types: ['atrule', 'keyword', 'attr-name', 'selector'],
      style: {
        color: colors.$blue900,
      },
    },
    {
      types: ['function', 'deleted', 'tag'],
      style: {
        color: colors.$bronze900,
      },
    },
    {
      types: ['function-variable'],
      style: {
        color: colors.$green900,
      },
    },
    {
      types: ['tag', 'selector', 'keyword'],
      style: {
        color: colors.$blue900,
      },
    },
  ],
};

export const liveEditorStyle: React.CSSProperties = {
  fontSize: 'var(--fontSizes-2)',
  fontFamily: 'var(--fonts-mono)',
  fontWeight: 400,
  lineHeight: 1.5,
};

const StyledLivePreview = ({ live, ...props }: { live?: boolean }) => (
  <Box
    css={{
      // TODO: consider sticky, needs more exploration
      // position: 'sticky',
      // top: 0,
      // backgroundColor: 'white',
      // zIndex: 3,
      overflow: 'hidden',
      p: '$4',
      boxShadow: `inset 0 0 0 1px $gray500`,
      borderTopLeftRadius: '$2',
      borderTopRightRadius: '$2',
      borderBottomLeftRadius: live ? '0' : '$2',
      borderBottomRightRadius: live ? '0' : '$2',
    }}
  >
    <LivePreview {...props} />
  </Box>
);

const CodeContainer = ({ live, children }: { live?: boolean; children: React.ReactNode }) => (
  <Box
    css={{
      p: '$4',
      backgroundColor: 'var(--colors-gray100)',
      borderTopLeftRadius: live ? '0' : '$2',
      borderTopRightRadius: live ? '0' : '$2',
      borderBottomLeftRadius: '$2',
      borderBottomRightRadius: '$2',
      marginTop: -1,
      boxShadow: `inset 0 0 0 1px ${colors.$gray500}`,
      textarea: { outline: 0 },
      'textarea::selection': {
        backgroundColor: 'hsla(208, 100%, 97%,1)',
      },
    }}
    children={children}
  />
);

const CopyButton = (props: any) => (
  <Button
    variant="ghost"
    css={{
      fontFamily: '$untitled',
      position: 'absolute',
      top: '$2',
      zIndex: '$2',
      right: '$2',
      display: 'none',
      bp1: { display: 'inline' },
    }}
    {...props}
  />
);

export function CodeBlock({
  className,
  live,
  manual,
  render,
  compact,
  children,
  addFragment,
  primitives,
  ...props
}) {
  const [editorCode, setEditorCode] = React.useState(children.trim());
  const [isOpen, setIsOpen] = React.useState(compact ? false : true);
  const router = useRouter();

  const [_, productType] = router.pathname.split('/');

  // components to be provided to the code blocks
  let components = {};

  // if the codeblock passes in `primitives`, use it
  if (primitives) {
    components = Primitives;
  }
  // otherwise derive it from URL
  else {
    components =
      productType === 'design-system' ? DS : productType === 'primitives' ? Primitives : {};
  }

  const language = className && className.replace(/language-/, '');
  const { hasCopied, onCopy } = useClipboard(editorCode);
  const liveProviderProps = {
    theme,
    language,
    code: editorCode,
    transformCode: (rawCode) => {
      const code = rawCode
        // remove imports
        .replace(/((^|)import[^;]+[; ]+)+/gi, '')
        // replace `export default => {*};` with `render(() => {*});`
        .replace(/export default \(\) => {((.|\n)*)};/, 'render(() => {$1});')
        // replace `export default => (*);` with `render(*);`
        .replace(/export default \(\) => \(((.|\n)*)\);/, 'render($1);')
        // replace `export default => *;` with `render(*);`
        .replace(/export default \(\) => ((.|\n)*);/, 'render($1);');

      return addFragment ? `<>${code}</>` : code;
    },
    scope: {
      React,
      ...components,
      ...RadixIcons,
      styled,
      css,
      // Always expose the the following
      Button: DS.Button,
      IconButton: DS.IconButton,
    },
    noInline: manual,
    ...props,
  };
  const onChange = (newCode) => setEditorCode(newCode.trim());

  // Eventually I suspect we'll move away from `react-live` since we no longer
  // include live-editable code blocks. In the mean time, this effect will
  // remove the underlying hidden `textarea` completely and return semantics to
  // the `pre` tag so that code blocks are properly exposed to AT.
  const containerRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const pre = containerRef.current?.querySelector('pre');
    const textarea = containerRef.current?.querySelector('textarea');
    if (pre) {
      pre.removeAttribute('aria-hidden');
      pre.style.pointerEvents = 'auto';
    }
    if (textarea) {
      textarea.parentNode.removeChild(textarea);
    }
  }, []);

  if (language === 'jsx' && live === true) {
    return (
      <LiveProvider {...liveProviderProps}>
        <StyledLivePreview live={live} />
        {compact && (
          <Box
            css={{
              textAlign: 'right',
              p: '$2',
              borderBottomLeftRadius: isOpen ? '0' : '$2',
              borderBottomRightRadius: isOpen ? '0' : '$2',
              boxShadow: 'inset 0 0 0 1px $gray500',
              mt: '-1px',
            }}
          >
            <Button onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'Hide' : 'Show'} code</Button>
          </Box>
        )}
        <Box
          ref={containerRef}
          css={{
            position: 'relative',
            zIndex: 1,
            display: isOpen ? 'block' : 'none',
          }}
        >
          <CodeContainer live={live}>
            <LiveEditor
              onChange={onChange}
              style={liveEditorStyle}
              {...{ padding: 0 }}
              // Code blocks are no longer "live"
              // TODO: Refactor this whole file :D
              disabled
            />
          </CodeContainer>
          <CopyButton onClick={onCopy}>{hasCopied ? 'Copied' : 'Copy'}</CopyButton>
          {/* <Text
            as="span"
            size="1"
            css={{
              fontFamily: '$untitled',
              textTransform: 'uppercase',
              position: 'absolute',
              width: '100%',
              top: '$2',
              zIndex: 0,
              textAlign: 'center',
              pointerEvents: 'none',
              color: '$gray900',
              letterSpacing: '.1em',
              fontSize: '11px',
            }}
          >
            Live example
          </Text> */}
        </Box>
        <LiveError
          style={{
            fontFamily: DStheme.fonts.$mono,
            fontSize: DStheme.fontSizes.$2,
            borderBottomLeftRadius: DStheme.radii.$2,
            borderBottomRightRadius: DStheme.radii.$2,
            boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.1)',
            padding: DStheme.space.$2,
            overflowX: 'auto',
            color: colors.$red900,
            backgroundColor: colors.$red100,
            marginTop: -3,
            position: 'relative',
            zIndex: 1,
            display: 'block',
            lineHeight: '20px',
          }}
        />
      </LiveProvider>
    );
  }

  if (render) {
    return (
      <Box ref={containerRef}>
        <LiveProvider {...liveProviderProps}>
          <StyledLivePreview />
        </LiveProvider>
      </Box>
    );
  }

  return (
    <Box
      css={{
        position: 'relative',
        zIndex: 1,
        mb: '$3',
      }}
      ref={containerRef}
    >
      <LiveProvider disabled {...liveProviderProps}>
        <CodeContainer live={live}>
          <LiveEditor style={liveEditorStyle} {...{ padding: 0 }} />
        </CodeContainer>
        <CopyButton onClick={onCopy}>{hasCopied ? 'Copied' : 'Copy'}</CopyButton>
      </LiveProvider>
    </Box>
  );
}

CodeBlock.defaultProps = {
  mountStylesheet: false,
};
