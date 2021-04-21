import React from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';
import { global, darkTheme, DesignSystemProvider } from '@modulz/design-system';
import { Footer } from '@components/Footer';
import { DocsPage } from '@components/DocsPage';
import { DesignSystemPage } from '@components/DesignSystemPage';
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
    backgroundColor: '$violet300',
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

  const isPrimitivesDocs = router.pathname.includes('/primitives/docs');
  const isDesignSystemDocs = router.pathname.includes('/design-system/docs');

  return (
    <DesignSystemProvider>
      <ThemeProvider
        disableTransitionOnChange
        attribute="class"
        value={{ light: 'light-theme', dark: darkTheme.className }}
        defaultTheme="system"
      >
        {isPrimitivesDocs ? (
          <DocsPage>
            <Component {...pageProps} />
          </DocsPage>
        ) : isDesignSystemDocs ? (
          <DesignSystemPage>
            <Component {...pageProps} />
          </DesignSystemPage>
        ) : (
          <Component {...pageProps} />
        )}
        {!isPrimitivesDocs && <Footer />}
      </ThemeProvider>
    </DesignSystemProvider>
  );
}

export default App;
