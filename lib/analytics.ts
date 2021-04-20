import React from 'react';
import { Router } from 'next/router';
import * as snippet from '@segment/snippet';

type WindowWithAnalytics = Window &
  typeof globalThis & {
    analytics: any;
  };

export const useAnalytics = () => {
  React.useEffect(() => {
    const handleRouteChange = (url) => {
      if (process.env.NODE_ENV === 'production') {
        // We need to wrap it in a rAF to ensure the correct data is sent to Segment
        // https://github.com/zeit/next.js/issues/6025
        requestAnimationFrame(() => (window as WindowWithAnalytics).analytics.page(url));
      }
    };
    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => Router.events.off('routeChangeComplete', handleRouteChange);
  }, []);
};

export function renderSnippet() {
  if (process.env.NODE_ENV === 'production') {
    return snippet.min({ apiKey: process.env.SEGMENT_WRITE_KEY, page: true });
  }
}
