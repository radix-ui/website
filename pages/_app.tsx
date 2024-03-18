import React from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';
import { Theme } from '@radix-ui/themes';
import { PrimitivesDocsPage } from '@components/PrimitivesDocsPage';
import { ColorsDocsPage } from '@components/ColorsDocsPage';
import { useAnalytics } from '@utils/analytics';
import { CssLibPreferenceProvider } from '@components/CssLibPreference';
import { ThemesDocsPage } from '@components/ThemesDocsPage';
import { SyntaxSchemeProvider } from '@components/Pre';
import { Favicon } from '@components/Favicon';
import '@radix-ui/themes/styles.css';
import './styles.css';
import './syntax-highlighting.css';

function Pages({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if (router.pathname.startsWith('/primitives/docs')) {
    return (
      <Theme accentColor="blue" grayColor="slate" className="radix-themes-custom-fonts">
        <SyntaxSchemeProvider scheme="blue">
          <PrimitivesDocsPage>
            <Favicon />
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
          <Favicon />
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
            <Favicon />
            <Component {...pageProps} />
          </ColorsDocsPage>
        </SyntaxSchemeProvider>
      </Theme>
    );
  }

  if (router.pathname.startsWith('/colors')) {
    return (
      <Theme accentColor="pink" grayColor="gray" className="radix-themes-custom-fonts">
        <Favicon />
        <Component {...pageProps} />
      </Theme>
    );
  }

  if (router.pathname.startsWith('/themes/docs')) {
    return (
      <Theme accentColor="indigo" className="radix-themes-custom-fonts">
        <SyntaxSchemeProvider scheme="indigo">
          <ThemesDocsPage>
            <Favicon />
            <Component {...pageProps} />
          </ThemesDocsPage>
        </SyntaxSchemeProvider>
      </Theme>
    );
  }

  if (router.pathname.startsWith('/themes/playground')) {
    return (
      <Theme accentColor="indigo">
        <Favicon />
        <Component {...pageProps} />
      </Theme>
    );
  }

  if (router.pathname.startsWith('/themes')) {
    return (
      <Theme accentColor="indigo" className="radix-themes-custom-fonts">
        <Favicon />
        <Component {...pageProps} />
      </Theme>
    );
  }

  if (router.pathname.startsWith('/icons')) {
    return (
      <Theme accentColor="teal" grayColor="slate" className="radix-themes-custom-fonts">
        <SyntaxSchemeProvider scheme="teal">
          <Favicon />
          <Component {...pageProps} />
        </SyntaxSchemeProvider>
      </Theme>
    );
  }

  return (
    <Theme accentColor="indigo" className="radix-themes-custom-fonts">
      <SyntaxSchemeProvider scheme="indigo">
        <Favicon />
        <Component {...pageProps} />
      </SyntaxSchemeProvider>
    </Theme>
  );
}

function App(props: AppProps) {
  useAnalytics();

  return (
    <CssLibPreferenceProvider>
      <ThemeProvider
        disableTransitionOnChange
        attribute="class"
        value={{ light: 'light-theme', dark: 'dark-theme' }}
        defaultTheme="system"
        // @ts-ignore
        children={<Pages {...props} />}
      />
    </CssLibPreferenceProvider>
  );
}

export default App;
