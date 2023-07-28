import React from 'react';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { Flex, Separator } from '@radix-ui/themes';
import AutosizeInput from 'react-input-autosize';

import styles from './SearchBar.module.css';

type SearchBarProps = {
  value: string;
  onValueChange: (value: string) => void;
};

export const SearchBar = ({ value, onValueChange }: SearchBarProps) => {
  return (
    <>
      <Flex align="center" justify="center" gap="2">
        <MagnifyingGlassIcon style={{ color: 'var(--gray-11)' }} />

        <AutosizeInput
          autoComplete="off"
          placeholder="Search"
          name="form-field-name"
          value={value}
          className={styles.SearchBarInput}
          onChange={(event) => onValueChange(event.target.value)}
          autoFocus
        />
      </Flex>

      <Separator size="4" />
    </>
  );
};
