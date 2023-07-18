import React from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ThemeProvider, useTheme } from 'next-themes';
import { globalCss, darkTheme, DesignSystemProvider } from '@modulz/design-system';
import { Theme } from '@radix-ui/themes';
import { PrimitivesDocsPage } from '@components/PrimitivesDocsPage';
import { ColorsDocsPage } from '@components/ColorsDocsPage';
import { useAnalytics } from '@lib/analytics';
import { CssLibPreferenceProvider } from '@components/CssLibPreference';
import { ThemesDocsPage } from '@components/ThemesDocsPage';
import './radix-themes.css';

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

    '.dark-theme &': {
      backgroundColor: 'var(--color-background, $loContrast)',
    },
  },

  svg: {
    display: 'block',
    verticalAlign: 'middle',
    overflow: 'visible',
  },

  'pre, code': { margin: 0, fontFamily: '$mono' },

  '::selection': {
    backgroundColor: '$violetA5',
    color: '$violet12',
  },

  '#__next': {
    position: 'relative',
    zIndex: 0,
  },

  'h1, h2, h3, h4, h5': { fontWeight: 500 },
});

const themeRootStyles = {
  minHeight: '100vh',
};

function Pages({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isPrimitivesDocs = router.pathname.includes('/docs/primitives');
  const isColorsDocs = router.pathname.includes('/docs/colors');
  const isThemesDocs = router.pathname.includes('/docs/themes');

  const accentScale = (() => {
    if (isPrimitivesDocs || router.pathname.startsWith('/primitives')) {
      return 'violet';
    }

    if (isColorsDocs || router.pathname.startsWith('/colors')) {
      return 'amber';
    }

    return 'indigo';
  })();

  if (isPrimitivesDocs) {
    return (
      <Theme accentScale={accentScale} style={themeRootStyles}>
        <PrimitivesDocsPage>
          <Component {...pageProps} />
        </PrimitivesDocsPage>
      </Theme>
    );
  }

  if (isColorsDocs) {
    return (
      <Theme accentScale={accentScale} style={themeRootStyles}>
        <ColorsDocsPage>
          <Component {...pageProps} />
        </ColorsDocsPage>
      </Theme>
    );
  }

  if (isThemesDocs) {
    return (
      <Theme accentScale={accentScale} style={themeRootStyles}>
        <ThemesDocsPage>
          <Component {...pageProps} />
        </ThemesDocsPage>
      </Theme>
    );
  }

  return (
    <Theme accentScale={accentScale} style={themeRootStyles}>
      <Component {...pageProps} />
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
