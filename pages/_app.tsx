import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import useDarkMode from 'use-dark-mode';
import { Box, darkThemeClass } from '@modulz/design-system';
import { Footer } from '../components/Footer';
import { ThemeToggle } from '../components/ThemeToggle';
import { DocsPage } from '../components/DocsPage';
import { BlogPage } from '../components/BlogPage';
import { useAnalytics } from '../utils/analytics';
import { scrollToUrlHash } from '../utils/scrollToUrlHash';

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const darkMode = useDarkMode(undefined, {
    classNameDark: darkThemeClass,
    classNameLight: 'theme-default',
  });

  useAnalytics();

  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // An ugly, terrible and sad hack to scroll the page to the
  // anchor location when present. The reason this stopped working is
  // due to the dark theme hack. :facepalm:
  React.useEffect(() => {
    if (mounted) {
      scrollToUrlHash(router.asPath);
    }
  }, [mounted]);

  const isDocs = router.pathname.includes('/docs');
  const isBlog = router.pathname.includes('/blog/');

  // Dark theme hack to prevent flash
  // prevents ssr flash for mismatched dark mode
  // https://brianlovin.com/overthought/adding-dark-mode-with-next-js
  if (!mounted) {
    return (
      <div style={{ visibility: 'hidden' }}>
        <Component {...pageProps} />
      </div>
    );
  }

  return (
    <>
      <Box
        css={{
          position: 'absolute',
          top: '$5',
          right: '$3',
          zIndex: '$2',
          bp2: {
            position: 'fixed',
            top: '$3',
            right: '$3',
          },
        }}
      >
        <ThemeToggle toggleTheme={() => darkMode.toggle()} />
      </Box>

      {isDocs ? (
        <DocsPage>
          <Component {...pageProps} />
        </DocsPage>
      ) : isBlog ? (
        <BlogPage>
          <Component {...pageProps} />
        </BlogPage>
      ) : (
        <Component {...pageProps} />
      )}
      {!isDocs && <Footer />}
    </>
  );
}

export default App;
