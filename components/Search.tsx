import React from 'react';
import NextLink from 'next/link';
import { DocSearch } from '@docsearch/react';
import { globalCss, keyframes } from '@modulz/design-system';
import type { InternalDocSearchHit, StoredDocSearchHit } from '@docsearch/react/dist/esm/types';

interface HitProps {
  hit: InternalDocSearchHit | StoredDocSearchHit;
  children: React.ReactNode;
}

function Hit({ hit, children }: HitProps) {
  return (
    <NextLink href={hit.url} passHref>
      <a>{children}</a>
    </NextLink>
  );
}

function Search() {
  return (
    <DocSearch
      appId="36WT60VAD2"
      indexName="radix-ui"
      apiKey="4b0ea81fe7e54fc245b3cffa682046f8"
      disableUserPersonalization
      hitComponent={Hit}
      placeholder="dialog, popover, …"
    />
  );
}

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const searchStyles = globalCss({
  // hide these elements
  '.DocSearch-LoadingIndicator, .DocSearch-Cancel, .DocSearch-Footer': { display: 'none' },

  '.DocSearch--active': {
    overflow: 'hidden !important',
  },

  /**
   * Button
   */
  '.DocSearch-Button': {
    // Reset
    alignItems: 'center',
    appearance: 'none',
    borderWidth: '0',
    boxSizing: 'border-box',
    display: 'inline-flex',
    flexShrink: 0,
    fontFamily: 'inherit',
    fontSize: '14px',
    justifyContent: 'center',
    lineHeight: '1',
    outline: 'none',
    padding: '0',
    textDecoration: 'none',
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent',
    color: '$hiContrast',
    backgroundColor: 'transparent',
    borderRadius: '$1',
    height: '$5',
    width: '$5',
    '&:hover': {
      backgroundColor: '$slateA3',
    },
    '&:active': {
      backgroundColor: '$slateA4',
    },
    '&:focus': {
      boxShadow: 'inset 0 0 0 1px $colors$slateA8, 0 0 0 1px $colors$slateA8',
    },
    '&:disabled': {
      pointerEvents: 'none',
      backgroundColor: 'transparent',
      color: '$slate6',
    },

    mr: '-$2',

    svg: { width: 15, height: 15 },
  },

  '.DocSearch-Button-Placeholder, .DocSearch-Button-Keys': { display: 'none' },

  /**
   * Modal
   */
  '.DocSearch-Container': {
    backgroundColor: 'rgba(0, 0, 0, .15)',
    position: 'fixed',
    left: 0,
    top: 0,
    height: '100vh',
    width: '100vw',
  },

  '.DocSearch-Modal': {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '$panel',
    borderRadius: '$3',
    boxShadow: '$colors$shadowLight 0px 10px 38px -10px, $colors$shadowDark 0px 10px 20px -15px',
    position: 'relative',
    margin: '$9 auto auto',
    maxWidth: 500,
    maxHeight: 'calc(100vh - $9 - $5)',
    padding: '$4',

    a: { textDecoration: 'none' },
  },

  /**
   * Search
   */
  '.DocSearch-SearchBar': {
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
  },

  '.DocSearch-Form': {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '$2',
    backgroundColor: '$loContrast',
    boxShadow: 'inset 0 0 0 1px $colors$slate7',
    margin: '0',
    position: 'relative',
    width: '100%',
    pl: '$2',
    pr: '$1',

    '&:focus-within': {
      boxShadow: 'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8',
      '&:-webkit-autofill': {
        boxShadow:
          'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8, inset 0 0 0 100px $colors$blue3',
      },
    },
  },

  '.DocSearch-MagnifierLabel': {
    '& > svg': { width: '$3', height: '$3' },
  },

  '.DocSearch-Input': {
    // Reset
    appearance: 'none',
    borderWidth: '0',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
    margin: '0',
    outline: 'none',
    padding: '0',
    width: '100%',
    WebkitTapHighlightColor: 'rgba(0,0,0,0)',
    '&::before': {
      boxSizing: 'border-box',
    },
    '&::after': {
      boxSizing: 'border-box',
    },

    // Custom
    flex: 1,
    backgroundColor: 'transparent',
    color: '$hiContrast',
    height: '$6',
    px: '$2',
    fontSize: '$3',
    lineHeight: '$sizes$6',

    '&:-webkit-autofill::first-line': {
      fontFamily: '$untitled',
      color: '$hiContrast',
      fontSize: '$3',
    },

    '&:-webkit-autofill': {
      boxShadow: 'inset 0 0 0 1px $colors$blue6, inset 0 0 0 100px $colors$blue3',
    },

    '&::placeholder': {
      color: '$slate9',
    },

    '&::-webkit-search-cancel-button, &::-webkit-search-decoration, &::-webkit-search-results-button, &::-webkit-search-results-decoration': {
      display: 'none',
    },
  },

  '.DocSearch-Reset': {
    appearance: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderWidth: '0',
    padding: 0,
    '&:hover': {
      backgroundColor: '$slateA3',
    },
    '&:focus': {
      outline: 'none',
      boxShadow: 'inset 0 0 0 1px $colors$slateA8, 0 0 0 1px $colors$slateA8',
    },
    '&:active': {
      backgroundColor: '$slateA4',
    },
    height: '$5',
    width: '$5',
    borderRadius: '50%',

    animation: `${fadeIn} .1s ease-in forwards`,
    cursor: 'pointer',
    right: '0',

    '&[hidden]': { display: 'none' },
    '& > svg': { width: '$3', height: '$3' },
  },

  /**
   * Results
   */
  '.DocSearch-Dropdown': {
    flex: 1,
    overflow: 'auto',
    mr: '-$3',
    pr: '$3',

    ul: {
      display: 'flex',
      flexDirection: 'column',
      gap: '$1',
      listStyle: 'none',
      margin: 0,
      padding: 0,
    },

    '&:not(:empty)': { mt: '$1' },
  },

  '.DocSearch-Hit-source': {
    position: 'sticky',
    top: 0,
    zIndex: 10,

    backgroundColor: '$panel',
    color: '$slate11',
    fontSize: '$1',
    fontWeight: '500',
    my: 0,
    pt: '$3',
    pb: '$1',
  },

  '.DocSearch-Hit': {
    display: 'flex',
    borderRadius: '$1',
    position: 'relative',
    fontSize: '$3',
    backgroundColor: '$slate2',

    a: {
      width: '100%',
      color: 'inherit',
    },

    mark: {
      backgroundColor: 'transparent',
      color: '$blue10',
    },

    '&[aria-selected=true]': {
      backgroundColor: '$blue9',
      color: 'white',

      mark: { color: 'inherit', textDecoration: 'underline' },
    },
  },

  '.DocSearch-Hit-Container': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '$7',
    px: '$1',
  },

  '.DocSearch-Hit-icon, .DocSearch-Hit-action': {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '$5',
    width: '$5',
    color: '$slate9',
    svg: { height: '$3', width: '$3' },

    '[aria-selected=true] &': { color: 'white' },
  },
  '.DocSearch-Hit-action': {
    marginLeft: 'auto',
    '[aria-selected=false] &': { display: 'none' },
  },

  '.DocSearch-Hit-Tree': {
    height: '$7',
    color: '$slate9',
    width: '$5',

    '[aria-selected=true] &': { color: 'white' },
  },

  '.DocSearch-Hit-content-wrapper': {
    // flex: '1 1 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    position: 'relative',

    overflowX: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },

  '.DocSearch-Hit-path': {
    color: '$slate11',
    fontSize: '$1',
    fontWeight: 500,

    '[aria-selected=true] &': { color: 'white' },
  },

  /**
   * No results
   */
  '.DocSearch-NoResults': {
    fontSize: '$3',
    '.DocSearch-Screen-Icon, .DocSearch-NoResults-Prefill-List': { display: 'none' },

    '.DocSearch-Title': {
      my: 0,
      mt: '$1',
      strong: { fontWeight: 500 },
    },
  },

  /**
   * Mobile
   */
  '@media (max-width:750px)': {
    '.DocSearch-Container': { position: 'absolute' },

    '.DocSearch-Modal': {
      borderRadius: '0',
      boxShadow: 'none',
      height: '100%',
      maxHeight: 'calc(var(--docsearch-vh, 1vh)*100)',
      margin: '0',
      maxWidth: '100%',
      width: '100%',
      padding: '$3',
    },

    '.DocSearch-Input': {
      fontSize: '$4',
    },

    '.DocSearch-Dropdown': {
      height: '100%',
      maxHeight: 'calc(var(--docsearch-vh, 1vh)*100 - $3 - $6 - $1 - $3)',
    },

    '.DocSearch-Cancel': {
      all: 'unset',
      WebkitTapHighlightColor: 'rgba(0,0,0,0)',
      display: 'inline-flex',
      flexShrink: 0,
      alignItems: 'center',
      justifyContent: 'center',
      height: '$5',
      px: '$2',
      fontFamily: '$untitled',
      fontSize: '$3',
      fontWeight: 500,
      ml: '$2',
    },

    '.DocSearch-Hit-Tree': { display: 'none' },
  },
});

export { Search, searchStyles };
