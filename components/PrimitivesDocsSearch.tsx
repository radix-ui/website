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
import { RemoveScroll } from 'react-remove-scroll';
import Link from 'next/link';
import { Box, TextField, Panel, IconButton, Tooltip, Text, styled } from '@modulz/design-system';
import { DismissableLayer } from '@radix-ui/react-dismissable-layer';
import { Slot } from '@radix-ui/react-slot';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

import type {
  AutocompleteState as InternalAutocompleteState,
  AutocompleteApi as InternalAutocompleteApi,
  AutocompleteSource as InternalAutocompleteSource,
} from '@algolia/autocomplete-core';
import type { Hit } from '@algolia/client-search';

const ALGOLIA_APP_ID = 'VXVOLU3YVQ';
const ALGOLIA_PUBLIC_API_KEY = '9d44395c1b7b172ac84b7e5ab80bf8c5';

const searchClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_PUBLIC_API_KEY);

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
type AutocompleteSource = InternalAutocompleteSource<SearchItem>;

const SLASH_COMMAND_MESSAGE = 'Press Slash to start searching';

type PrimitivesDocsSearchProps = {
  variant?: 'mobile' | 'desktop';
  onOpenChange?: (open: boolean) => void;
  onSelect?: AutocompleteSource['onSelect'];
};

export function PrimitivesDocsSearch(props: PrimitivesDocsSearchProps) {
  const { variant = 'desktop', onOpenChange, onSelect } = props;
  const isMobile = variant === 'mobile';
  const snippetLength = isMobile ? 7 : 15;
  const hitsPerPage = isMobile ? 20 : 50;

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
        // Provide deterministic id to prevent client / server mismatch warning
        id: 'radix-autocomplete',
        placeholder: 'Search Radix Primitives',
        openOnFocus: false,
        debug: false,
        shouldPanelOpen: ({ state }) => Boolean(state.query),
        onStateChange: ({ state }) => {
          setSearchState(state);
          onOpenChange?.(state.isOpen);
        },
        getSources: ({ query, setStatus, state }) => {
          if (!query) return [];
          return searchClient
            .search<SearchItem>([
              {
                indexName: process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME,
                query,
                params: {
                  hitsPerPage,
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
                    `hierarchy.lvl0:${snippetLength}`,
                    `hierarchy.lvl1:${snippetLength}`,
                    `hierarchy.lvl2:${snippetLength}`,
                    `hierarchy.lvl3:${snippetLength}`,
                    `hierarchy.lvl4:${snippetLength}`,
                    `content:${snippetLength}`,
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
                .map(([lvl0, items]) => ({
                  onSelect: (params) => {
                    // dismiss keyboard on mobile
                    if (isMobile) inputRef.current.blur();
                    params.setIsOpen(false);
                    onSelect?.(params);
                  },
                  sourceId: lvl0,
                  getItemUrl: ({ item }) => item.url,
                  getItems: () => items,
                }));
            });
        },
      }),
    []
  );

  // slash command to focus search
  React.useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (!isEditingContent(event) && event.key === '/') {
        inputRef.current.focus();
        event.preventDefault();
      }
    };
    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, []);

  // dismiss mobile keyboard when scrolling
  React.useEffect(() => {
    const onTouchMove = (event: TouchEvent) => {
      const input = inputRef.current;
      if (input === document.activeElement && event.target !== input) input.blur();
    };
    window.addEventListener('touchmove', onTouchMove);
    return () => {
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, []);

  return (
    <Box
      {...autocomplete.getRootProps({})}
      css={{
        // for the panel to be positioned correctly without needing popper
        position: 'relative',

        '@bp2': { mr: '$7' },
        '@media (min-width: 1130px)': { mr: 0 },
      }}
    >
      <Box
        css={
          isMobile
            ? { position: 'sticky', top: 0, pt: '$5', pb: '$2', backgroundColor: '$loContrast' }
            : {}
        }
      >
        <Box
          as="form"
          ref={formRef}
          {...autocomplete.getFormProps({ inputElement: inputRef.current })}
          css={{
            position: 'relative',

            // Allow immediate interaction with input controls when autcomplete is open
            pointerEvents: 'auto',
          }}
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
              // we need at least 16px to prevent iOS safari from zooming in when focusing the input
              fontSize: isMobile ? 16 : undefined,

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

          {searchState.query ? (
            // show the clear button when there's a query in the input
            <Box css={{ position: 'absolute', top: '$1', right: '$1' }}>
              <Tooltip content="Clear">
                <IconButton type="reset">
                  <Cross2Icon />
                </IconButton>
              </Tooltip>
            </Box>
          ) : (
            // show the slash command info when there's no query in the input
            <Box
              css={{
                position: 'absolute',
                top: '$1',
                right: '$1',
                display: 'none',
                '@bp1': { display: 'block' },
              }}
            >
              <Tooltip content={SLASH_COMMAND_MESSAGE}>
                <IconButton
                  css={{ boxShadow: 'inset 0px 0px 0px 1px $colors$gray6', color: '$gray11' }}
                  onClick={() => requestAnimationFrame(() => inputRef.current.focus())}
                  // we can make it unreachable via keyboard as we have the same message for the SR label
                  tabIndex={-1}
                >
                  <kbd aria-hidden>/</kbd>
                </IconButton>
              </Tooltip>
            </Box>
          )}
        </Box>
      </Box>

      {searchState.isOpen && (
        <RemoveScroll as={Slot} allowPinchZoom enabled={!isMobile}>
          <DismissableLayer
            asChild
            disableOutsidePointerEvents={!isMobile}
            onPointerDownOutside={(event) => {
              const target = event.target as HTMLElement;
              const isPointerDownInForm = formRef.current.contains(target);
              if (!isMobile && !isPointerDownInForm) autocomplete.setIsOpen(false);
            }}
          >
            {isMobile ? (
              <Box
                ref={panelRef}
                {...autocomplete.getPanelProps({})}
                css={{
                  py: '$2',
                  // ensure padding when scrolling via keyboard
                  scrollPaddingTop: '$2',
                  scrollPaddingBottom: '$2',
                }}
              >
                <SearchResults searchState={searchState} autocomplete={autocomplete} />
              </Box>
            ) : (
              <Panel
                ref={panelRef}
                {...autocomplete.getPanelProps({})}
                css={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  mt: '$1',
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
                }}
              >
                <SearchResults searchState={searchState} autocomplete={autocomplete} />
              </Panel>
            )}
          </DismissableLayer>
        </RemoveScroll>
      )}
    </Box>
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
          <Mark>Unable to fetch results.</Mark> You might want to check your network connection.
        </ItemTitle>
      );
    }

    if (!hasResults) {
      return (
        <ItemTitle size="3" css={{ p: '$2' }}>
          No results for <Mark>“{searchState.query}”</Mark>
        </ItemTitle>
      );
    }

    return (
      <>
        {searchState.collections.map((collection, index) => (
          <React.Fragment key={collection.source.sourceId}>
            {index > 0 && (
              <Box
                as="hr"
                css={{ my: '$2', border: 'none', height: 1, backgroundColor: '$mauve6' }}
              />
            )}

            <section>
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
                      '&[aria-selected="true"], &:active': { backgroundColor: '$violet3' },
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
          </React.Fragment>
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
        isHighlighted ? <Mark key={index}>{value}</Mark> : value
      )}
    </>
  );
}

const Mark = styled('mark', {
  backgroundColor: 'transparent',
  color: 'inherit',
  fontWeight: '500',
});

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
