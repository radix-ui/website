import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { getCssString } from '@modulz/design-system';
import { renderSnippet } from '@lib/analytics';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssString() }} />
          <script dangerouslySetInnerHTML={{ __html: renderSnippet() }} />
          <link rel="icon" href="/favicon.png" />
          <link rel="stylesheet" href="https://develop.modulz.app/fonts/fonts.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
