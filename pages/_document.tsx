import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from '@utils/stitches';
import { renderSnippet, gtagUrl } from '@utils/analytics';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
          <link
            rel="preload"
            href="/fonts/AdobeTextPro-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/soehne-mono-web-buch.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="https://cdn.workos.com/fonts/untitled-sans-regular-v2.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="https://cdn.workos.com/fonts/untitled-sans-medium-v2.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <style
            dangerouslySetInnerHTML={{
              __html: `
@font-face {
  font-family: 'Adobe Text Pro';
  font-weight: 400;
  font-display: swap;
  src: url(/fonts/AdobeTextPro-Regular.woff2) format('woff2');
}

@font-face {
  font-family: 'Untitled Sans';
  font-weight: 400;
  font-display: swap;
  src: url('https://cdn.workos.com/fonts/untitled-sans-regular-v2.woff2') format('woff2');
}

@font-face {
  font-family: 'Untitled Sans';
  font-weight: 500;
  font-display: swap;
  src: url('https://cdn.workos.com/fonts/untitled-sans-medium-v2.woff2') format('woff2');
}

@font-face {
  font-family: 'Untitled Sans';
  font-weight: 700;
  font-display: swap;
  src: url('https://cdn.workos.com/fonts/untitled-sans-medium-v2.woff2') format('woff2');
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
