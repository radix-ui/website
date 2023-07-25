import React from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';
import { globalCss, darkTheme, DesignSystemProvider } from '@modulz/design-system';
import { Theme } from '@radix-ui/themes';
import { PrimitivesDocsPage } from '@components/PrimitivesDocsPage';
import { ColorsDocsPage } from '@components/ColorsDocsPage';
import { useAnalytics } from '@lib/analytics';
import { CssLibPreferenceProvider } from '@components/CssLibPreference';
import { ThemesDocsPage } from '@components/ThemesDocsPage';
import { SyntaxSchemeProvider } from '@components/Pre';

import '@radix-ui/themes/dist/index.css';
import './themes-config.css';

const globalStyles = globalCss({
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },

  body: {
    margin: 0,
    color: 'var(--text-color, $hiContrast)',
    backgroundColor: 'var(--color-background, $loContrast)',
    fontFamily: '$untitled',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    WebkitTextSizeAdjust: '100%',
  },

  svg: {
    display: 'block',
    verticalAlign: 'middle',
    overflow: 'visible',
  },

  'pre, code': { margin: 0, fontFamily: '$mono' },

  '#__next': {
    position: 'relative',
    zIndex: 0,
  },

  'h1, h2, h3, h4, h5': {
    fontWeight: 500,
  },

  ':root': {
    '--quick-nav-display': 'none',
  },

  '@media (min-width: 1440px)': {
    ':root': {
      '--quick-nav-display': 'block',
    },
  },
});

const themeRootStyles = {
  minHeight: '100vh',
};

function Pages({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if (router.pathname.startsWith('/primitives/docs')) {
    return (
      <Theme accentScale="violet" style={themeRootStyles}>
        <SyntaxSchemeProvider scheme="violet">
          <PrimitivesDocsPage>
            <Component {...pageProps} />
          </PrimitivesDocsPage>
        </SyntaxSchemeProvider>
      </Theme>
    );
  }

  if (router.pathname.startsWith('/primitives')) {
    return (
      <Theme accentScale="violet" style={themeRootStyles}>
        <SyntaxSchemeProvider scheme="violet">
          <Component {...pageProps} />
        </SyntaxSchemeProvider>
      </Theme>
    );
  }

  if (router.pathname.includes('/colors/docs')) {
    return (
      <Theme accentScale="pink" style={themeRootStyles}>
        <SyntaxSchemeProvider scheme="pink">
          <ColorsDocsPage>
            <Component {...pageProps} />
          </ColorsDocsPage>
        </SyntaxSchemeProvider>
      </Theme>
    );
  }

  if (router.pathname.includes('/colors')) {
    return (
      <Theme accentScale="pink" style={themeRootStyles}>
        <Component {...pageProps} />
      </Theme>
    );
  }

  if (router.pathname.includes('/themes/docs')) {
    return (
      <Theme accentScale="indigo" style={themeRootStyles}>
        <SyntaxSchemeProvider scheme="indigo">
          <ThemesDocsPage>
            <Component {...pageProps} />
          </ThemesDocsPage>
        </SyntaxSchemeProvider>
      </Theme>
    );
  }

  if (router.pathname.includes('/themes')) {
    return (
      <Theme accentScale="indigo" style={themeRootStyles}>
        <Component {...pageProps} />
      </Theme>
    );
  }

  return (
    <Theme accentScale="indigo" style={themeRootStyles}>
      <SyntaxSchemeProvider scheme="indigo">
        <Component {...pageProps} />
      </SyntaxSchemeProvider>
    </Theme>
  );
}

function App(props: AppProps) {
  globalStyles();
  useAnalytics();

  return (
    <DesignSystemProvider>
      <CssLibPreferenceProvider>
        <ThemeProvider
          disableTransitionOnChange
          attribute="class"
          value={{ light: 'light-theme', dark: darkTheme.className }}
          defaultTheme="system"
        >
          <Pages {...props} />
        </ThemeProvider>
      </CssLibPreferenceProvider>
    </DesignSystemProvider>
  );
}

export default App;
