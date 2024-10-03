import React from 'react';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { Flex, Separator } from '@radix-ui/themes';
// @ts-expect-error
import AutosizeInput from 'react-input-autosize';

import styles from './SearchBar.module.css';

type SearchBarProps = {
  value: string;
  onValueChange: (value: string) => void;
};

export const SearchBar = ({ value, onValueChange }: SearchBarProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  return (
    <>
      <Flex
        align="center"
        justify="center"
        gap="2"
        onClick={() => {
          inputRef.current?.focus();
          inputRef.current?.select();
        }}
      >
        <MagnifyingGlassIcon
          style={{ color: 'var(--gray-a11)', marginRight: 'calc(-1 * var(--space-5))' }}
        />

        <AutosizeInput
          ref={inputRef}
          autoComplete="off"
          placeholder="Search"
          name="form-field-name"
          value={value}
          className={styles.SearchBarInput}
          onChange={(event: any) => onValueChange(event.target.value)}
        />
      </Flex>

      <Separator size="4" />
    </>
  );
};
