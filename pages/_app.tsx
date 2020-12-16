import React from 'react';
import { AppProps } from 'next/app';
import { RemoveScroll } from 'react-remove-scroll';
import { useRouter } from 'next/router';
import useDarkMode from 'use-dark-mode';
import { Box, darkThemeClass } from '@modulz/design-system';
import { Footer } from '../components/Footer';
import { ThemeToggle } from '../components/ThemeToggle';
import { DocsPage } from '../components/DocsPage';
import { BlogPage } from '../components/BlogPage';
import { useAnalytics } from '../utils/analytics';
import { scrollToUrlHash } from '../utils/scrollToUrlHash';
import { useMatchMedia } from '../utils/useMatchMedia';

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

  // https://github.com/radix-ui/website/issues/71
  // Breakpoint value not exposed directly, got it from https://github.com/modulz/design-system/blob/master/stitches.config.ts#L420
  // TODO: Remove this when we come up with a better solution for react-remove-scroll in primitives
  const isBp2 = useMatchMedia('screen and (min-width: 900px)');
  const positionFixedPatchClassName = isBp2 ? RemoveScroll.classNames.zeroRight : undefined;

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
        className={positionFixedPatchClassName}
        css={{
          position: 'absolute',
          top: '$5',
          right: '$3',
          zIndex: '$2',
          bp2: {
            position: 'fixed',
            top: '$3',
            right: 0,
            paddingRight: '$3',
          },
        }}
      >
        <ThemeToggle toggleTheme={() => darkMode.toggle()} isDarkMode={darkMode.value} />
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
