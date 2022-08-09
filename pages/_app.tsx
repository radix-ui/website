import React from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';
import { globalCss, darkTheme, DesignSystemProvider } from '@modulz/design-system';
import { PrimitivesDocsPage } from '@components/PrimitivesDocsPage';
import { ColorsDocsPage } from '@components/ColorsDocsPage';
import { useAnalytics } from '@lib/analytics';
import Head from 'next/head';

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
  const isIFrame = router.pathname.includes('/iframe');
  const isDocsPage = isPrimitivesDocs || isColorsDocs || isIFrame;

  if (isIFrame) {
    return (
      <DesignSystemProvider>
        <ThemeProvider
          disableTransitionOnChange
          attribute="class"
          value={{ light: 'light-theme', dark: darkTheme.className }}
          defaultTheme="system"
        >
          <Head>
            <style>{`
              body, .${darkTheme.className} body {
                background-color: transparent;
              }
            `}</style>
          </Head>
          <Component {...pageProps} />
        </ThemeProvider>
      </DesignSystemProvider>
    );
  }

  return (
    <DesignSystemProvider>
      <ThemeProvider
        disableTransitionOnChange
        attribute="class"
        value={{ light: 'light-theme', dark: darkTheme.className }}
        defaultTheme="system"
      >
        {isPrimitivesDocs ? (
          <PrimitivesDocsPage>
            <Component {...pageProps} />
          </PrimitivesDocsPage>
        ) : isColorsDocs ? (
          <ColorsDocsPage>
            <Component {...pageProps} />
          </ColorsDocsPage>
        ) : (
          <Component {...pageProps} />
        )}
      </ThemeProvider>
    </DesignSystemProvider>
  );
}

export default App;
