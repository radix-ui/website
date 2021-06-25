import React from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';
import { global, darkTheme, DesignSystemProvider } from '@modulz/design-system';
import { Footer } from '@components/Footer';
import { PrimitivesPage } from '@components/PrimitivesPage';
import { DesignSystemPage } from '@components/DesignSystemPage';
import { ColorsPage } from '@components/ColorsPage';
import { useAnalytics } from '@lib/analytics';
import { scrollToUrlHash } from '@lib/scrollToUrlHash';

const globalStyles = global({
  body: {
    margin: 0,
    backgroundColor: '$loContrast',
    fontFamily: '$untitled',
  },

  'h1, h2, h3, h4, h5': { fontWeight: 500 },

  'body, button': {
    fontFamily: '$untitled',
  },

  svg: { display: 'block' },

  'pre, code': { margin: 0, fontFamily: '$mono' },

  '::selection': {
    backgroundColor: '$violet5',
  },

  '#__next': {
    position: 'relative',
    zIndex: 0,
  },
});

function App({ Component, pageProps }: AppProps) {
  globalStyles();
  useAnalytics();
  const router = useRouter();

  React.useEffect(() => {
    scrollToUrlHash(router.asPath);
  }, []);

  const isPrimitivesDocs = router.pathname.includes('/docs/primitives');
  const isDesignSystemDocs = router.pathname.includes('/docs/design-system');
  const isColorsDocs = router.pathname.includes('/docs/colors');
  const shouldShowFooter = !isPrimitivesDocs || !isDesignSystemDocs || !isColorsDocs;

  return (
    <DesignSystemProvider>
      <ThemeProvider
        disableTransitionOnChange
        attribute="class"
        value={{ light: 'light-theme', dark: darkTheme.toString() }}
        defaultTheme="system"
      >
        {isPrimitivesDocs ? (
          <PrimitivesPage>
            <Component {...pageProps} />
          </PrimitivesPage>
        ) : isDesignSystemDocs ? (
          <DesignSystemPage>
            <Component {...pageProps} />
          </DesignSystemPage>
        ) : isColorsDocs ? (
          <ColorsPage>
            <Component {...pageProps} />
          </ColorsPage>
        ) : (
          <Component {...pageProps} />
        )}
        {!shouldShowFooter && <Footer />}
      </ThemeProvider>
    </DesignSystemProvider>
  );
}

export default App;
