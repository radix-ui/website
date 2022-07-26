import React from 'react';
import type { DocSearchHit } from './types';

interface SnippetProps {
  hit: DocSearchHit;
  attribute: string;
  tagName?: string;
  [prop: string]: unknown;
}

export function Snippet({ hit, attribute, tagName = 'span', ...rest }: SnippetProps) {
  return React.createElement(tagName, {
    ...rest,
    dangerouslySetInnerHTML: {
      __html:
        getPropertyByPath(hit, `_snippetResult.${attribute}.value`) ||
        getPropertyByPath(hit, attribute),
    },
  });
}
function getPropertyByPath(object: Record<string, any>, path: string): any {
  const parts = path.split('.');

  return parts.reduce((prev, current) => {
    if (prev?.[current]) return prev[current];
    return null;
  }, object);
}
