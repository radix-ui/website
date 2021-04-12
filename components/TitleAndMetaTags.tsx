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
  url = 'https://radix-ui.com',
  pathname,
  title = 'Radix UI',
  description = 'Everything you need to build a design system, website or web app.',
  poster,
}: TitleAndMetaTagsProps) {
  const router = useRouter();

  const image = `${url}/social/${poster || 'default.png'}`;
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
    </Head>
  );
}
