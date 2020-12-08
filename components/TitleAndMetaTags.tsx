import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

type TitleAndMetaTagsProps = {
  url?: string;
  pathname?: string;
  title?: string;
  description?: string;
  poster?: string;
};

export function TitleAndMetaTags({
  url = 'https://radixui.com',
  pathname,
  title = 'Radix',
  description = 'The UI Suite',
  poster,
}: TitleAndMetaTagsProps) {
  const router = useRouter();

  const image = poster ? `${url}/${poster}` : `${url}/social.png`;
  const path = pathname || router.pathname;

  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.png" />
      <link rel="stylesheet" href="https://develop.modulz.app/fonts/fonts.css" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta name="description" content={description} />

      <meta property="og:url" content={`${url}${path}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:site" content="@radix_ui" />
      {/* <meta name="twitter:card" content="summary" /> */}
      <meta name="twitter:card" content="summary_large_image" />
      <style
        dangerouslySetInnerHTML={{
          __html: `
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  background-color: var(--colors-loContrast);
  font-family: var(--fonts-untitled);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: hsl(206, 10%, 5%);
  line-height: 1;
}

svg {
  display: block;
  vertical-align: middle;
}

#__next {
  position: relative;
  z-index: 0;
}

img {
  vertical-align: middle;
}

button {
  align-items: center;
  appearance: none;
  background-color: transparent;
  border: none;
  box-sizing: border-box;
  display: inline-flex;
  font: inherit;
  justify-content: center;
  line-height: 1;
  margin: 0;
  outline: none;
  padding: 0;
  text-align: inherit;
  text-decoration: none;
  user-select: none;
  vertical-align: middle;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

img {
  vertical-align: middle;
  max-width: 100%;
}

pre {
  margin: 0;
  font-family: var(--fonts-mono);
  all: unset;
}

::selection {
  background-color: var(--colors-blue500);
}
        `,
        }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `(function() {
                try {
                  var mode = localStorage.getItem('darkMode');
                  if (!mode) return;
                  document.documentElement.setAttribute('data-theme', mode);
                } catch (e) {}
              })()
          `,
        }}
      ></script>
    </Head>
  );
}
