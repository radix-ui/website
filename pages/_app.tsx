import React from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import { globalCss, darkTheme, DesignSystemProvider } from '@modulz/design-system';
import { PrimitivesDocsPage } from '@components/PrimitivesDocsPage';
import { ColorsDocsPage } from '@components/ColorsDocsPage';
import { useAnalytics } from '@lib/analytics';
import { CssLibPreferenceProvider } from '@components/CssLibPreference';
import { ThemesDocsPage } from '@components/ThemesDocsPage';
import '@radix-ui/themes/dist/index.css';

const globalStyles = globalCss({
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },

  body: {
    margin: 0,
    color: '$hiContrast',
    backgroundColor: '$loContrast',
    fontFamily: '$untitled',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    WebkitTextSizeAdjust: '100%',

    '.dark-theme &': {
      backgroundColor: '$mauve1',
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

function App({ Component, pageProps }: AppProps) {
  globalStyles();
  useAnalytics();
  const router = useRouter();

  const isPrimitivesDocs = router.pathname.includes('/docs/primitives');
  const isColorsDocs = router.pathname.includes('/docs/colors');
  const isThemesDocs = router.pathname.includes('/docs/themes');

  return (
    <DesignSystemProvider>
      <CssLibPreferenceProvider>
        <ThemeProvider
          disableTransitionOnChange
          attribute="class"
          value={{ light: 'light-theme', dark: darkTheme.className }}
          defaultTheme="system"
        >
          {(() => {
            if (isPrimitivesDocs) {
              return (
                <PrimitivesDocsPage>
                  <Component {...pageProps} />
                </PrimitivesDocsPage>
              );
            }

            if (isColorsDocs) {
              return (
                <ColorsDocsPage>
                  <Component {...pageProps} />
                </ColorsDocsPage>
              );
            }

            if (isThemesDocs) {
              return (
                <ThemesDocsPage>
                  <Component {...pageProps} />
                </ThemesDocsPage>
              );
            }

            return <Component {...pageProps} />;
          })()}
        </ThemeProvider>
      </CssLibPreferenceProvider>
    </DesignSystemProvider>
  );
}

export default App;
