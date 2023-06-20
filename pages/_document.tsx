import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from '@modulz/design-system';
import { renderSnippet, gtagUrl } from '@lib/analytics';

export default class Document extends NextDocument {
  render() {
    return (
      <Html
        lang="en"
        data-color-scale="violet"
        data-background-feel="natural"
        data-foreground-feel="natural"
        data-gray-scale="natural"
        data-button-radius="medium"
        data-scaling="regular"
      >
        <Head>
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
          <link
            rel="preload"
            href="/fonts/UntitledSansWeb-Regular.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/UntitledSansWeb-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/UntitledSansWeb-Medium.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/UntitledSansWeb-Medium.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/soehne-mono-web-buch.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/soehne-mono-web-buch.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <style
            dangerouslySetInnerHTML={{
              __html: `
@font-face {
  font-family: 'Untitled Sans';
  font-weight: 400;
  font-display: swap;
  src: url(/fonts/UntitledSansWeb-Regular.woff2) format('woff2'), url(/fonts/UntitledSansWeb-Regular.woff) format('woff');
}

@font-face {
  font-family: 'Untitled Sans';
  font-weight: 500;
  font-display: swap;
  src: url(/fonts/UntitledSansWeb-Medium.woff2) format('woff2'), url(/fonts/UntitledSansWeb-Medium.woff) format('woff');
}

@font-face {
  font-family: 'Untitled Sans';
  font-weight: 600;
  font-display: swap;
  src: url(/fonts/UntitledSansWeb-Medium.woff2) format('woff2'), url(/fonts/UntitledSansWeb-Medium.woff) format('woff');
}

@font-face {
  font-family: 'Söhne Mono';
  font-weight: normal;
  font-style: normal;
  font-display: swap;
  src: url('/fonts/soehne-mono-web-buch.woff2') format('woff2'), url('/fonts/soehne-mono-web-buch.woff') format('woff');
}
`,
            }}
          />
          <link rel="icon" href="/favicon.png" />
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
          <script async src={gtagUrl} />
          <script dangerouslySetInnerHTML={{ __html: renderSnippet() }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
