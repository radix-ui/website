import React from 'react';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import { Box, styled, theme as DStheme } from '@modulz/design-system';

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
        color: colors.$gray500,
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
        color: colors.$purple900,
      },
    },
    {
      types: ['punctuation', 'operator'],
      style: {
        color: colors.$gray900,
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
        color: colors.$red900,
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
        color: colors.$orange900,
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

const demoCode = `const Button = styled('button', {
  // Edit the code!

  backgroundColor: 'hsl(206,100%,50%)',
  borderRadius: '9999px',
  color: 'white',
  fontSize: '17px',
  fontWeight: 500,
  paddingTop: '10px',
  paddingBottom: '10px',
  paddingLeft: '16px',
  paddingRight: '16px',
  textDecoration: 'none',
  appearance: 'none',
  transition: 'all 200ms ease',
  margin: '0px 8px',

  ':hover': {
    boxShadow: '0 5px 15px rgba(0, 0, 0, .12)',
    transform: 'translateY(-2px)',
  },

  variants: {
    color: {
      white: {
        backgroundColor: 'transparent',
        color: 'hsl(206,10%,44%)',
        ':hover': {
          backgroundColor: 'white',
          color: 'hsl(206,10%,5%)',
        },
      },
    }
  }
});

render(
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Button as="a" href="/docs/installation">Documentation</Button>
    <Button color="white" as="a" href="https://github.com/modulz/stitches">GitHub</Button>
  </div>
);`;

export const liveEditorStyle: React.CSSProperties = {
  fontSize: 'var(--fontSizes-2)',
  fontFamily: 'var(--fonts-mono)',
  fontWeight: 400,
  lineHeight: 1.5,
  backgroundColor: 'transparent',
};

const StyledLivePreview = (props) => (
  <Box css={{ pb: '$9' }}>
    <LivePreview {...props} />
  </Box>
);

export function HeroCodeDemo() {
  const liveProviderProps = {
    theme: theme as any,
    code: demoCode,
    scope: {
      styled,
    },
    noInline: true,
  };

  return (
    <LiveProvider {...liveProviderProps}>
      <StyledLivePreview />
      <Box
        css={{
          p: '$1',
          borderRadius: '$2',
          // bc: '$gray100',
          boxShadow: '0 0 0 1px $gray500',
          textarea: { outline: '0' },
          ':focus-within': {
            boxShadow: '0 0 0 3px $blue500',
          },
          'textarea::selection': {
            backgroundColor: 'hsla(208, 10%, 65%,1)',
          },
        }}
      >
        <LiveEditor style={liveEditorStyle} />
        <LiveError
          style={{
            fontFamily: 'var(--fonts-normal)',
            fontSize: 'var(--fontSizes-3)',
            padding: 'var(--space-2)',
            overflowX: 'auto',
            color: 'white',
            backgroundColor: 'var(--colors-$red900)',
          }}
        />
      </Box>
    </LiveProvider>
  );
}
