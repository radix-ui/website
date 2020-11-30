import { Box, Button, Text, theme as DStheme, darkThemeClass } from '@modulz/design-system';
import React, { useState } from 'react';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import { useClipboard } from '../utils/useClipboard';
import { styled, css } from '@modulz/design-system';

const { colors } = DStheme;

const theme: any = {
  plain: {
    color: 'var(--colors-hiContrast)',
    backgroundColor: 'var(--colors-loContrast)',
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: colors.$gray600,
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
        color: colors.$purple600,
      },
    },
    {
      types: ['punctuation', 'operator'],
      style: {
        color: colors.$gray600,
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
        'property',
        'regex',
        'inserted',
      ],
      style: {
        color: colors.$red600,
      },
    },
    {
      types: ['atrule', 'keyword', 'attr-name', 'selector'],
      style: {
        color: colors.$blue600,
      },
    },
    {
      types: ['function', 'deleted', 'tag'],
      style: {
        color: colors.$yellow600,
      },
    },
    {
      types: ['function-variable'],
      style: {
        color: colors.$green600,
      },
    },
    {
      types: ['tag', 'selector', 'keyword'],
      style: {
        color: colors.$blue600,
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
      p: '$3',
      boxShadow: `0 0 0 1px ${colors.$gray300}`,
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
      p: '$1',
      borderTopLeftRadius: live ? '0' : '$2',
      borderTopRightRadius: live ? '0' : '$2',
      borderBottomLeftRadius: '$2',
      borderBottomRightRadius: '$2',
      marginTop: '1px',
      boxShadow: `0 0 0 1px ${colors.$gray300}`,
      textarea: { outline: 0 },
      'textarea::selection': {
        backgroundColor: 'hsla(208, 10%, 65%,1)',
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
      top: '$1',
      zIndex: '$1',
      right: '$1',
    }}
    {...props}
  />
);

export function CodeBlock({ className, live, manual, render, children, ...props }) {
  const [editorCode, setEditorCode] = useState(children.trim());

  const language = className && className.replace(/language-/, '');
  const { hasCopied, onCopy } = useClipboard(editorCode);

  const liveProviderProps = {
    theme,
    language,
    code: editorCode,
    scope: {
      styled,
      css,
      darkTheme: darkThemeClass,
    },
    noInline: manual,
    ...props,
  };

  const onChange = (newCode) => setEditorCode(newCode.trim());

  if (language === 'jsx' && live === true) {
    return (
      <LiveProvider {...liveProviderProps}>
        <StyledLivePreview live={live} />
        <Box
          css={{
            position: 'relative',
            zIndex: 1,
          }}
        >
          <CodeContainer live={live}>
            <LiveEditor onChange={onChange} style={liveEditorStyle} />
          </CodeContainer>
          <CopyButton onClick={onCopy}>{hasCopied ? 'Copied' : 'Copy'}</CopyButton>
          <Text
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
              color: '$gray600',
              letterSpacing: '.1em',
              fontSize: '11px',
            }}
          >
            Live example
          </Text>
        </Box>
        <LiveError
          style={{
            fontFamily: DStheme.fonts.$untitled,
            fontSize: DStheme.fontSizes.$3,
            padding: DStheme.space.$2,
            overflowX: 'auto',
            color: 'white',
            backgroundColor: colors.$red600,
          }}
        />
      </LiveProvider>
    );
  }

  if (render) {
    return (
      <LiveProvider {...liveProviderProps}>
        <StyledLivePreview />
      </LiveProvider>
    );
  }

  return (
    <Box
      css={{
        position: 'relative',
        zIndex: 1,
      }}
    >
      <LiveProvider disabled {...liveProviderProps}>
        <CodeContainer live={live}>
          <LiveEditor style={liveEditorStyle} />
        </CodeContainer>
        <CopyButton onClick={onCopy}>{hasCopied ? 'Copied' : 'Copy'}</CopyButton>
      </LiveProvider>
    </Box>
  );
}

CodeBlock.defaultProps = {
  mountStylesheet: false,
};
