import React from 'react';
import { styled } from '@modulz/design-system';
import { SearchContent } from './SearchContent';
import { SearchInput } from './SearchInput';
import { AutocompleteProvider, useAutocompleteContext } from './AutocompleteProvider';

const APP_ID = 'VXVOLU3YVQ';
const PUBLIC_SEARCH_KEY = '4195d8b5632cb29f0cd5f4479b9df251';
const INDEX_NAME = 'development_docs';

export function Search() {
  return (
    <AutocompleteProvider appId={APP_ID} publicSearchKey={PUBLIC_SEARCH_KEY} indexName={INDEX_NAME}>
      <SearchImpl />
    </AutocompleteProvider>
  );
}

function SearchImpl() {
  const autocompleteContext = useAutocompleteContext();

  return (
    <StyledContainer {...autocompleteContext.api.getRootProps()}>
      <SearchInput />
      <SearchContent />
    </StyledContainer>
  );
}

const StyledContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$panel',
  borderRadius: '$3',
  position: 'relative',
  width: 600,
});
