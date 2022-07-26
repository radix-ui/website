import React from 'react';
import { AutocompleteState } from '@algolia/autocomplete-core';
import { styled } from '@modulz/design-system';
import { ResultsList } from './ResultsList';
import { DocSearchHit } from './types';
import { useAutocompleteContext } from './AutocompleteProvider';
interface ScreenStateProps extends Pick<AutocompleteState<DocSearchHit>, 'status' | 'query'> {
  hasResults: boolean;
}

export function SearchContent() {
  const autocompleteContext = useAutocompleteContext();

  return (
    <StyledContent>
      <SearchContentImpl
        status={autocompleteContext.state.status}
        query={autocompleteContext.state.query}
        hasResults={autocompleteContext.state.collections.some(
          (collection) => collection.items.length > 0
        )}
      />
    </StyledContent>
  );
}

const SearchContentImpl = React.memo(
  ({ status, query, hasResults }: ScreenStateProps) => {
    if (!query) return null;
    if (status === 'error') return <ErrorState />;
    if (!hasResults) return <EmptyState>{query}</EmptyState>;
    return <ResultsList />;
  },
  function areEqual(_prevProps, nextProps) {
    // We don't update the screen when Autocomplete is loading or stalled to
    // avoid UI flashes:
    //  - Empty screen → Results screen
    //  - NoResults screen → NoResults screen with another query
    return nextProps.status === 'loading' || nextProps.status === 'stalled';
  }
);

function ErrorState() {
  return (
    <div>
      <p>Unable to fetch results</p>
      <p>You might want to check your network connection.</p>
    </div>
  );
}

function EmptyState({ children }: { children: React.ReactNode }) {
  return (
    <StyledEmptyTitle>
      No results for "<strong>{children}</strong>"
    </StyledEmptyTitle>
  );
}

const StyledContent = styled('div', {
  position: 'absolute',
  top: '100%',
  backgroundColor: 'white',
  flex: 1,
  overflow: 'auto',
  width: '100%',
  padding: '$5',
  borderRadius: '$2',
  marginTop: '$2',
  boxShadow:
    'var(--colors-shadowLight) 0px 10px 38px -10px, var(--colors-shadowDark) 0px 10px 20px -15px',
});

const StyledEmptyTitle = styled('p', {
  my: 0,
  mt: '$1',
  fontSize: '$3',
  strong: { fontWeight: 500 },
});
