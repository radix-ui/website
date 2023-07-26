import { Box } from '@radix-ui/themes';
import React from 'react';
import { AllIcons } from './AllIcons';
import { SearchBar } from './SearchBar';
import { SearchResults } from './SearchResults';

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
