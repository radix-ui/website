import { Box } from '@radix-ui/themes';
import * as React from 'react';
import { AllIcons } from './AllIcons';
import { SearchBar } from './SearchBar';
import { SearchResults } from './SearchResults';

export const MainContent = () => {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <>
      <SearchBar value={searchValue} onValueChange={setSearchValue} />
      <SearchResults value={searchValue} />
      <Box px={{ initial: '3', sm: '6' }} style={{ display: searchValue ? 'none' : 'block' }}>
        <AllIcons />
      </Box>
    </>
  );
};
