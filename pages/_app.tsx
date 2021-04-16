import React from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';
import { global, darkTheme, DesignSystemProvider } from '@modulz/design-system';
import { Footer } from '@components/Footer';
import { DocsPage } from '@components/DocsPage';
import { useAnalytics } from '@lib/analytics';
import { scrollToUrlHash } from '@lib/scrollToUrlHash';

const globalStyles = global({
  html: {
    overflowX: 'hidden',
  },

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
});

function App({ Component, pageProps }: AppProps) {
  globalStyles();
  useAnalytics();
  const router = useRouter();

  React.useEffect(() => {
    scrollToUrlHash(router.asPath);
  }, []);

  const isDocs = router.pathname.includes('/docs');

  return (
    <DesignSystemProvider>
      <ThemeProvider
        disableTransitionOnChange
        attribute="class"
        value={{ light: 'light-theme', dark: darkTheme.className }}
        defaultTheme="system"
      >
        {isDocs ? (
          <DocsPage>
            <Component {...pageProps} />
          </DocsPage>
        ) : (
          <Component {...pageProps} />
        )}
        {!isDocs && <Footer />}
      </ThemeProvider>
    </DesignSystemProvider>
  );
}

export default App;
