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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1;
	font-family: var(--fonts-untitled);
	text-align: inherit;
	font-size: initial;
	color: var(--colors-hiContrast);
}


h1, h2, h3, h4, h5, strong {
	font-weight: 500;
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
