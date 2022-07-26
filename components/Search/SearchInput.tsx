import React from 'react';
import { styled } from '@modulz/design-system';
import { MagnifyingGlassIcon, Cross2Icon } from '@radix-ui/react-icons';
import { useAutocompleteContext } from './AutocompleteProvider';

const MAX_QUERY_SIZE = 64;

type SearchInputElement = React.ElementRef<typeof StyledInput>;

export function SearchInput() {
  const ref = React.useRef<SearchInputElement | null>(null);
  const autocompleteContext = useAutocompleteContext();

  const { onReset } = autocompleteContext.api.getFormProps({
    inputElement: ref.current,
  });

  return (
    <StyledForm onSubmit={(event) => event.preventDefault()} onReset={onReset}>
      <label {...autocompleteContext.api.getLabelProps()}>
        <StyledMagnifyingGlassIcon />
      </label>

      <StyledInput
        {...autocompleteContext.api.getInputProps({
          inputElement: ref.current,
          maxLength: MAX_QUERY_SIZE,
        })}
        ref={ref}
      />

      <StyledResetButton
        type="reset"
        title="Clear the query"
        aria-label="Clear the query"
        hidden={!autocompleteContext.state.query}
      >
        <Cross2Icon />
      </StyledResetButton>
    </StyledForm>
  );
}

const StyledForm = styled('form', {
  display: 'flex',
  alignItems: 'center',
  borderRadius: '$2',
  backgroundColor: '$loContrast',
  boxShadow: 'inset 0 0 0 1px $colors$slate7',
  margin: '0',
  position: 'relative',
  pl: '$2',
  pr: '$1',

  '&:focus-within': {
    boxShadow: 'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8',
    '&:-webkit-autofill': {
      boxShadow:
        'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8, inset 0 0 0 100px $colors$blue3',
    },
  },
});

const StyledMagnifyingGlassIcon = styled(MagnifyingGlassIcon, {
  width: '$3',
  height: '$3',
});

const StyledInput = styled('input', {
  // Reset
  appearance: 'none',
  borderWidth: '0',
  boxSizing: 'border-box',
  fontFamily: 'inherit',
  margin: '0',
  outline: 'none',
  padding: '0',
  width: '100%',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  // Custom
  flex: 1,
  backgroundColor: 'transparent',
  color: '$hiContrast',
  height: '$6',
  px: '$2',
  fontSize: '$3',
  lineHeight: '$sizes$6',

  '&:-webkit-autofill::first-line': {
    fontFamily: '$untitled',
    color: '$hiContrast',
    fontSize: '$3',
  },

  '&:-webkit-autofill': {
    boxShadow: 'inset 0 0 0 1px $colors$blue6, inset 0 0 0 100px $colors$blue3',
  },

  '&::placeholder': {
    color: '$slate9',
  },

  '&::-webkit-search-cancel-button, &::-webkit-search-decoration, &::-webkit-search-results-button, &::-webkit-search-results-decoration': {
    display: 'none',
  },
});

const StyledResetButton = styled('button', {
  appearance: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'transparent',
  borderWidth: '0',
  padding: 0,
  '&:hover': {
    backgroundColor: '$slateA3',
  },
  '&:focus': {
    outline: 'none',
    boxShadow: 'inset 0 0 0 1px $colors$slateA8, 0 0 0 1px $colors$slateA8',
  },
  '&:active': {
    backgroundColor: '$slateA4',
  },
  height: '$5',
  width: '$5',
  borderRadius: '50%',

  cursor: 'pointer',
  right: '0',

  '&[hidden]': { display: 'none' },
  '& > svg': { width: '$3', height: '$3' },
});
