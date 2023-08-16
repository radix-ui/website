import React from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';
import { darkTheme, DesignSystemProvider } from '@modulz/design-system';
import { Theme } from '@radix-ui/themes';
import { PrimitivesDocsPage } from '@components/PrimitivesDocsPage';
import { ColorsDocsPage } from '@components/ColorsDocsPage';
import { useAnalytics } from '@lib/analytics';
import { CssLibPreferenceProvider } from '@components/CssLibPreference';
import { ThemesDocsPage } from '@components/ThemesDocsPage';
import { SyntaxSchemeProvider } from '@components/Pre';
import '@radix-ui/themes/styles.css';
import './styles.css';

function Pages({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if (router.pathname.startsWith('/primitives/docs')) {
    return (
      <Theme accentColor="blue" grayColor="slate" className="radix-themes-custom-fonts">
        <SyntaxSchemeProvider scheme="blue">
          <PrimitivesDocsPage>
            <Component {...pageProps} />
          </PrimitivesDocsPage>
        </SyntaxSchemeProvider>
      </Theme>
    );
  }

  if (router.pathname.startsWith('/primitives')) {
    return (
      <Theme accentColor="blue" grayColor="slate" className="radix-themes-custom-fonts">
        <SyntaxSchemeProvider scheme="blue">
          <Component {...pageProps} />
        </SyntaxSchemeProvider>
      </Theme>
    );
  }

  if (router.pathname.startsWith('/colors/docs')) {
    return (
      <Theme accentColor="pink" grayColor="gray" className="radix-themes-custom-fonts">
        <SyntaxSchemeProvider scheme="pink">
          <ColorsDocsPage>
            <Component {...pageProps} />
          </ColorsDocsPage>
        </SyntaxSchemeProvider>
      </Theme>
    );
  }

  if (router.pathname.startsWith('/colors')) {
    return (
      <Theme accentColor="pink" grayColor="gray" className="radix-themes-custom-fonts">
        <Component {...pageProps} />
      </Theme>
    );
  }

  if (router.pathname.startsWith('/themes/docs')) {
    return (
      <Theme accentColor="indigo" className="radix-themes-custom-fonts">
        <SyntaxSchemeProvider scheme="indigo">
          <ThemesDocsPage>
            <Component {...pageProps} />
          </ThemesDocsPage>
        </SyntaxSchemeProvider>
      </Theme>
    );
  }

  if (router.pathname.startsWith('/themes/playground')) {
    return (
      <Theme accentColor="indigo">
        <Component {...pageProps} />
      </Theme>
    );
  }

  if (router.pathname.startsWith('/themes')) {
    return (
      <Theme accentColor="indigo" className="radix-themes-custom-fonts">
        <Component {...pageProps} />
      </Theme>
    );
  }

  if (router.pathname.startsWith('/icons')) {
    return (
      <Theme accentColor="teal" grayColor="slate" className="radix-themes-custom-fonts">
        <SyntaxSchemeProvider scheme="teal">
          <Component {...pageProps} />
        </SyntaxSchemeProvider>
      </Theme>
    );
  }

  return (
    <Theme accentColor="indigo" className="radix-themes-custom-fonts">
      <SyntaxSchemeProvider scheme="indigo">
        <Component {...pageProps} />
      </SyntaxSchemeProvider>
    </Theme>
  );
}

function App(props: AppProps) {
  useAnalytics();

  return (
    <DesignSystemProvider>
      <CssLibPreferenceProvider>
        <ThemeProvider
          disableTransitionOnChange
          attribute="class"
          value={{ light: 'light-theme', dark: darkTheme.className }}
          defaultTheme="system"
          // @ts-ignore
          children={<Pages {...props} />}
        />
      </CssLibPreferenceProvider>
    </DesignSystemProvider>
  );
}

export default App;
