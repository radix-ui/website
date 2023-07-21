import React from 'react';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { Flex } from '@radix-ui/themes';

import styles from './SearchBar.module.css';

type SearchBarProps = {
  value: string;
  onValueChange: (value: string) => void;
};

export const SearchBar = ({ value, onValueChange }: SearchBarProps) => {
  return (
    <Flex align="center" justify="center" style={{ borderBottom: '1px solid var(--gray-a6)' }}>
      <span style={{ marginRight: 'var(--space-2)', color: 'var(--gray-11)' }}>
        <MagnifyingGlassIcon />
      </span>

      <input
        autoComplete="off"
        placeholder="Search"
        name="form-field-name"
        value={value}
        className={styles.SearchInput}
        onChange={(event) => onValueChange(event.target.value)}
        autoFocus
      />
    </Flex>
  );
};
