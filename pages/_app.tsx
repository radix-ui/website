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
      const [_, hashLocation] = router.asPath.split('#');
      if (hashLocation) {
        const anchor = document.querySelector(`#${hashLocation}`);
        if (!anchor) {
          return;
        }
        const scrollMargin = 20;
        const distanceToScroll =
          window.pageYOffset + anchor.getBoundingClientRect().top - scrollMargin;

        window.scrollTo(0, distanceToScroll);
      }
    }
  }, [mounted]);

  const isDocs = router.pathname.includes('/docs');
  // const isDocs = false; // TODO: update logic
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
      <Head>
        <link rel="icon" href="/favicon.png" />
        <link rel="stylesheet" href="https://develop.modulz.app/fonts/fonts.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style
          dangerouslySetInnerHTML={{
            __html: `
body {
  margin: 0;
  background-color: var(--colors-loContrast);
}

body, button {
  font-family: var(--fonts-untitled);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

svg {
  display: block;
}

pre {
  margin: 0;
  font-family: var(--fonts-mono)
}

::selection {
  background-color: var(--colors-blue600);
  color: white;
}
        `,
          }}
        />
      </Head>

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
