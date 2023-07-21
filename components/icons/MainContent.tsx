import React from 'react';
import { SearchBar } from './SearchBar';
import { SearchResults } from './SearchResults';
import { AllIcons } from './AllIcons';
import { Box } from '@radix-ui/themes';

export const MainContent = () => {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <>
      <SearchBar value={searchValue} onValueChange={setSearchValue} />
      <SearchResults value={searchValue} />
      <Box style={{ display: searchValue ? 'none' : 'block' }}>
        <AllIcons />
      </Box>
    </>
  );
};
