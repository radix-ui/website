import * as React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { createAutocomplete } from '@algolia/autocomplete-core';
import { parseAlgoliaHitSnippet } from '@algolia/autocomplete-preset-algolia';
import {
  MagnifyingGlassIcon,
  Cross2Icon,
  ExclamationTriangleIcon,
  CaretRightIcon,
} from '@radix-ui/react-icons';
import Link from 'next/link';
import { Box, TextField, Panel, IconButton, Tooltip, Text, styled } from '@modulz/design-system';
import { DismissableLayer } from '@radix-ui/react-dismissable-layer';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

import type {
  AutocompleteState as InternalAutocompleteState,
  AutocompleteApi as InternalAutocompleteApi,
} from '@algolia/autocomplete-core';
import type { Hit } from '@algolia/client-search';

const APP_ID = 'VXVOLU3YVQ';
const API_KEY = '13f199c3bdc37a5a17ab03d8760d03ae';
const INDEX_NAME = 'development_docs';

const searchClient = algoliasearch(APP_ID, API_KEY);

const SNIPPET_LENGTH = 15;
const SUPPORTED_LEVELS = ['lvl0', 'lvl1', 'lvl2', 'lvl3', 'lvl4'] as const;
type LevelContentType = typeof SUPPORTED_LEVELS[number];
type ContentType = LevelContentType | 'content';
type SearchItem = Hit<{
  type: ContentType;
  url: string;
  hierarchy: {
    lvl0: string;
    lvl1: string;
    lvl2: string | null;
    lvl3: string | null;
    lvl4: string | null;
  };
  content: string | null;
}>;
type AutocompleteState = InternalAutocompleteState<SearchItem>;
type AutocompleteApi = InternalAutocompleteApi<
  SearchItem,
  React.BaseSyntheticEvent,
  React.MouseEvent,
  React.KeyboardEvent
>;

const SLASH_COMMAND_MESSAGE = 'Press Slash to start searching';

export function Search() {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const formRef = React.useRef<HTMLFormElement>(null);
  const panelRef = React.useRef<HTMLDivElement>(null);

  const [searchState, setSearchState] = React.useState<AutocompleteState>({
    collections: [],
    completion: null,
    context: {},
    isOpen: false,
    query: '',
    activeItemId: null,
    status: 'idle',
  });

  const autocomplete = React.useMemo(
    () =>
      createAutocomplete<
        SearchItem,
        React.BaseSyntheticEvent,
        React.MouseEvent,
        React.KeyboardEvent
      >({
        placeholder: 'Search Radix Primitives',
        openOnFocus: false,
        debug: false,
        shouldPanelOpen: ({ state }) => Boolean(state.query),
        onStateChange: ({ state }) => setSearchState(state),
        getSources: ({ query, setStatus, state }) => {
          if (!query) return [];
          return searchClient
            .search<SearchItem>([
              {
                indexName: INDEX_NAME,
                query,
                params: {
                  hitsPerPage: 100,
                  attributesToRetrieve: [
                    'type',
                    'url',
                    'hierarchy.lvl0',
                    'hierarchy.lvl1',
                    'hierarchy.lvl2',
                    'hierarchy.lvl3',
                    'hierarchy.lvl4',
                    'content',
                  ],
                  attributesToSnippet: [
                    `hierarchy.lvl0:${SNIPPET_LENGTH}`,
                    `hierarchy.lvl1:${SNIPPET_LENGTH}`,
                    `hierarchy.lvl2:${SNIPPET_LENGTH}`,
                    `hierarchy.lvl3:${SNIPPET_LENGTH}`,
                    `hierarchy.lvl4:${SNIPPET_LENGTH}`,
                    `content:${SNIPPET_LENGTH}`,
                  ],
                  snippetEllipsisText: '…',
                  highlightPreTag: '__aa-highlight__',
                  highlightPostTag: '__/aa-highlight__',
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
              // make sure we scroll back up to the top when new results come in.
              if (state.isOpen) panelRef.current.scrollTop = 0;

              // we only have 1 query, so we  grab the hits from the first result
              const { hits } = results[0];
              const sources = groupBy(hits, (hit) => hit.hierarchy.lvl0);
              return Object.entries(sources)
                .sort(sortSources)
                .map(([lvl0, items]) => {
                  return {
                    sourceId: lvl0,
                    getItemUrl: ({ item }) => item.url,
                    getItems: () => items,
                    // getItems: () => Object.values(groupBy(items, (item) => item.hierarchy.lvl1)),
                  };
                });
            });
        },
      }),
    []
  );

  React.useEffect(() => {
    console.log('setup');
    const handleKeydown = (event: KeyboardEvent) => {
      if (!isEditingContent(event) && event.key === '/') {
        inputRef.current.focus();
        event.preventDefault();
      }
    };
    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, []);

  const { getEnvironmentProps } = autocomplete;
  React.useEffect(() => {
    if (formRef.current && panelRef.current && inputRef.current) {
      const { onTouchStart, onTouchMove } = getEnvironmentProps({
        formElement: formRef.current,
        inputElement: inputRef.current,
        panelElement: panelRef.current,
      });

      window.addEventListener('touchstart', onTouchStart);
      window.addEventListener('touchmove', onTouchMove);

      return () => {
        window.removeEventListener('touchstart', onTouchStart);
        window.removeEventListener('touchmove', onTouchMove);
      };
    }
  }, [getEnvironmentProps, formRef, inputRef, panelRef]);

  return (
    <div {...autocomplete.getRootProps({})}>
      <Box
        ref={formRef}
        {...autocomplete.getFormProps({ inputElement: inputRef.current })}
        as="form"
        css={{ position: 'relative', width: 730 }}
      >
        <Box
          {...autocomplete.getLabelProps({})}
          as="label"
          css={{ position: 'absolute', top: '$2', left: 'calc($3 - 3px)' }}
        >
          <MagnifyingGlassIcon />
          <VisuallyHidden>{SLASH_COMMAND_MESSAGE}.</VisuallyHidden>
        </Box>

        <TextField
          ref={inputRef}
          {...autocomplete.getInputProps({ inputElement: inputRef.current })}
          type="search"
          size="2"
          css={{
            px: '$6',
            backgroundColor: '$gray3',
            boxShadow: 'none',

            '&:focus': {
              boxShadow: 'inset 0px 0px 0px 1px $colors$gray8, 0px 0px 0px 1px $colors$gray8',
            },

            '&[type="search"]': {
              /* clears the 'X' from Internet Explorer */
              '&::-ms-clear, &::-ms-reveal': { display: 'none', width: 0, height: 0 },

              /* clears the 'X' from Chrome */
              [`&::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration`]: {
                display: 'none',
              },
            },
          }}
        />

        <Box css={{ position: 'absolute', top: '$1', right: '$1' }}>
          {searchState.query ? (
            // show the clear button when there's a query in the input
            <Tooltip content="Clear">
              <IconButton type="reset">
                <Cross2Icon />
              </IconButton>
            </Tooltip>
          ) : (
            // show the slash command info when there's no query in the input
            <Tooltip content={SLASH_COMMAND_MESSAGE}>
              <IconButton
                css={{ boxShadow: 'inset 0px 0px 0px 1px $colors$gray6', color: '$gray11' }}
                onClick={() => requestAnimationFrame(() => inputRef.current.focus())}
                // we can take make it unreachable via keyboard as we have the same message for the SR label
                tabIndex={-1}
              >
                <kbd aria-hidden>/</kbd>
              </IconButton>
            </Tooltip>
          )}
        </Box>
      </Box>

      {searchState.isOpen && (
        <DismissableLayer
          asChild
          disableOutsidePointerEvents
          onPointerDownOutside={() => autocomplete.setIsOpen(false)}
        >
          <Panel
            ref={panelRef}
            {...autocomplete.getPanelProps({})}
            css={{
              position: 'absolute',
              mt: '$1',
              width: 730,
              maxHeight: '80vh',
              overflow: 'auto',
              p: '$2',

              // ensure padding when scrolling via keyboard
              scrollPaddingTop: '$2',
              scrollPaddingBottom: '$2',

              // hide native scrollbar
              scrollbarWidth: 'none',
              MsOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
              '&::-webkit-scrollbar': { display: 'none' },

              // bold any highlights
              mark: {
                backgroundColor: 'transparent',
                color: 'inherit',
                fontWeight: '500',
              },
            }}
          >
            <SearchResults searchState={searchState} autocomplete={autocomplete} />
          </Panel>
        </DismissableLayer>
      )}
    </div>
  );
}

type SearchResultsProps = { searchState: AutocompleteState; autocomplete: AutocompleteApi };
const SearchResults = React.memo(
  ({ searchState, autocomplete }: SearchResultsProps) => {
    const hasResults = searchState.collections.some((collection) => collection.items.length > 0);

    if (searchState.status === 'error') {
      return (
        <ItemTitle size="3" css={{ py: '$2' }}>
          <Box
            as="span"
            css={{ ml: 3, mr: 'calc($2 - 3px)', svg: { display: 'inline-block', mt: -1 } }}
          >
            <ExclamationTriangleIcon />
          </Box>
          <mark>Unable to fetch results.</mark> You might want to check your network connection.
        </ItemTitle>
      );
    }

    if (!hasResults) {
      return (
        <ItemTitle size="3" css={{ p: '$2' }}>
          No results for <mark>“{searchState.query}”</mark>
        </ItemTitle>
      );
    }

    return (
      <>
        {searchState.collections.map((collection, index) => (
          <>
            {index > 0 && (
              <Box
                as="hr"
                css={{ my: '$2', border: 'none', height: 1, backgroundColor: '$mauve6' }}
              />
            )}

            <section key={collection.source.sourceId}>
              {collection.items.length > 0 && (
                <Box
                  as="ul"
                  {...autocomplete.getListProps()}
                  css={{
                    listStyle: 'none',
                    m: 0,
                    p: 0,
                    li: {
                      borderRadius: '$1',
                      '&[aria-selected="true"]': { backgroundColor: '$violet3' },
                    },
                  }}
                >
                  {collection.items.map((item) => (
                    <li
                      key={item.objectID}
                      {...autocomplete.getItemProps({ item, source: collection.source })}
                    >
                      <ItemLink item={item} />
                    </li>
                  ))}
                </Box>
              )}
            </section>
          </>
        ))}
      </>
    );
  },
  function areEqual(_prevProps, nextProps) {
    // We don't update the results when Autocomplete is loading or stalled to
    // avoid UI flashes:
    //  - Empty → Results
    //  - NoResults → NoResults with another query
    return nextProps.searchState.status === 'loading' || nextProps.searchState.status === 'stalled';
  }
);

function ItemLink({ item }: { item: SearchItem }) {
  return (
    <Link href={item.url} passHref>
      <Box as="a" css={{ display: 'block', p: '$2', textDecoration: 'none', color: 'inherit' }}>
        <ItemTitle as="p" variant="violet" size="3" css={{ mb: '$1' }}>
          <Highlight
            hit={item}
            attribute={item.type === 'content' ? 'content' : ['hierarchy', item.type]}
          />
        </ItemTitle>
        {/* Adding a semi-colon to insert a break in the speech flow */}
        <VisuallyHidden>; </VisuallyHidden>
        <ItemBreadcrumb item={item} levels={SUPPORTED_LEVELS} />
      </Box>
    </Link>
  );
}

const ItemTitle = styled(Text, {
  lineHeight: '17px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

function ItemBreadcrumb({ item, levels }: { item: SearchItem; levels: typeof SUPPORTED_LEVELS }) {
  const itemLevelIndex = item.type === 'content' ? levels.length - 1 : levels.indexOf(item.type);
  const breadcrumbLevels = levels.slice(0, itemLevelIndex);

  return (
    <Text
      size="1"
      css={{ color: '$mauve11', textTransform: 'lowercase', lineHeight: '15px' }}
      as="p"
    >
      {breadcrumbLevels.map((level, index) => {
        const heading = item.hierarchy[level];
        return heading ? (
          <React.Fragment key={index}>
            {index > 0 ? (
              <Box as="span" css={{ color: '$mauve8', svg: { display: 'inline-block' } }}>
                <CaretRightIcon />
                {/* Adding a comma to insert a natural break in the speech flow */}
                <VisuallyHidden>, </VisuallyHidden>
              </Box>
            ) : null}
            <Highlight hit={item} attribute={['hierarchy', level]} />
          </React.Fragment>
        ) : null;
      })}
    </Text>
  );
}

function Highlight<THit>({ hit, attribute }: { hit: THit; attribute: keyof THit | string[] }) {
  return (
    <>
      {parseAlgoliaHitSnippet<THit>({ hit, attribute }).map(({ value, isHighlighted }, index) =>
        isHighlighted ? <mark key={index}>{value}</mark> : value
      )}
    </>
  );
}

function groupBy<TValue extends Record<string, unknown>>(
  values: TValue[],
  predicate: (value: TValue) => string
): Record<string, TValue[]> {
  return values.reduce<Record<string, TValue[]>>((acc, item) => {
    const key = predicate(item);
    if (!acc.hasOwnProperty(key)) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {});
}

const SOURCES_ORDER = ['Overview', 'Components', 'Utilities'];
type SourceEntry = [string, SearchItem[]];
function sortSources([lvl0_a]: SourceEntry, [lvl0_b]: SourceEntry) {
  return SOURCES_ORDER.indexOf(lvl0_b) < SOURCES_ORDER.indexOf(lvl0_a) ? 1 : -1;
}

function isEditingContent(event: KeyboardEvent) {
  const element = event.target as HTMLElement;
  const tagName = element.tagName;
  return element.isContentEditable || ['INPUT', 'SELECT', 'TEXTAREA'].includes(tagName);
}
