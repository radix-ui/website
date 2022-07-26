import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { createAutocomplete } from '@algolia/autocomplete-core';
import { AutocompleteApi, AutocompleteState, DocSearchHit } from './types';

interface SearchContextValue {
  state: AutocompleteState;
  api: AutocompleteApi;
}

const Context = React.createContext<SearchContextValue>(undefined);

interface AutocompleteProviderProps {
  children: React.ReactNode;
  appId: string;
  publicSearchKey: string;
  indexName: string;
}

function AutocompleteProvider(props: AutocompleteProviderProps) {
  const { children, appId, publicSearchKey, indexName } = props;
  const searchClient = React.useMemo(() => algoliasearch(appId, publicSearchKey), []);
  const [state, setState] = React.useState<AutocompleteState>({
    query: '',
    collections: [],
    completion: null,
    context: {},
    isOpen: false,
    activeItemId: null,
    status: 'idle',
  });

  const autocomplete = React.useMemo(
    () =>
      createAutocomplete<
        DocSearchHit,
        React.FormEvent<HTMLFormElement>,
        React.MouseEvent,
        React.KeyboardEvent
      >({
        id: 'radix-search',
        defaultActiveItemId: 0,
        placeholder: 'Search docs',
        openOnFocus: true,
        initialState: {
          query: '',
          context: {},
        },
        onStateChange(props) {
          setState(props.state);
        },
        getSources({ query, setStatus }) {
          if (!query) return [];
          return searchClient
            .search<DocSearchHit>([
              {
                query,
                indexName,
                params: {
                  attributesToRetrieve: [
                    'hierarchy.lvl0',
                    'hierarchy.lvl1',
                    'hierarchy.lvl2',
                    'hierarchy.lvl3',
                    'hierarchy.lvl4',
                    'content',
                    'type',
                    'url',
                  ],
                  attributesToSnippet: [
                    `hierarchy.lvl1`,
                    `hierarchy.lvl2`,
                    `hierarchy.lvl3`,
                    `hierarchy.lvl4`,
                    `content`,
                  ],
                  snippetEllipsisText: '…',
                  highlightPreTag: '<mark>',
                  highlightPostTag: '</mark>',
                  hitsPerPage: 20,
                },
              },
            ])
            .catch((error) => {
              // The Algolia `RetryError` happens when all the servers have
              // failed, meaning that there's no chance the response comes
              // back. This is the right time to display an error.
              // See https://github.com/algolia/algoliasearch-client-javascript/blob/2ffddf59bc765cd1b664ee0346b28f00229d6e12/packages/transporter/src/errors/createRetryError.ts#L5
              if (error.name === 'RetryError') setStatus('error');
              throw error;
            })
            .then(({ results }) => {
              const { hits } = results[0];
              const sources = groupBy(hits, (hit) => hit.hierarchy.lvl0);
              return Object.values<DocSearchHit[]>(sources).map((items, index) => {
                return {
                  sourceId: `hits${index}`,
                  getItemUrl: ({ item }) => item.url,
                  getItems: () => Object.values(groupBy(items, (item) => item.hierarchy.lvl1)),
                };
              });
            });
        },
      }),
    [searchClient]
  );

  return <Context.Provider value={{ state, api: autocomplete }}>{children}</Context.Provider>;
}

function useAutocompleteContext() {
  return React.useContext(Context);
}

function groupBy<TValue extends Record<string, unknown>>(
  values: TValue[],
  predicate: (value: TValue) => string
): Record<string, TValue[]> {
  return values.reduce<Record<string, TValue[]>>((acc, item) => {
    const key = predicate(item);

    if (!acc.hasOwnProperty(key)) {
      acc[key] = [];
    }

    // We limit each section to show 5 hits maximum.
    // This acts as a frontend alternative to `distinct`.
    if (acc[key].length < 5) {
      acc[key].push(item);
    }

    return acc;
  }, {});
}

export { AutocompleteProvider, useAutocompleteContext };
