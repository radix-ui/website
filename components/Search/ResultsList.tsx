import React from 'react';
import { styled } from '@modulz/design-system';
import NextLink from 'next/link';
import { Snippet } from './Snippet';
import type { AutocompleteCollection, DocSearchHit } from './types';
import { SourceIcon } from './SourceIcon';
import { useAutocompleteContext } from './AutocompleteProvider';

export function ResultsList() {
  const autocompleteContext = useAutocompleteContext();

  return (
    <StyledContainer>
      {autocompleteContext.state.collections.map((collection) => {
        const hasItems = collection.items.length > 0;
        const title = collection.items[0].hierarchy.lvl0;

        return hasItems ? (
          <section key={collection.source.sourceId}>
            <StyledResultGroupTitle>{title}</StyledResultGroupTitle>

            <StyledResultList {...autocompleteContext.api.getListProps()}>
              {collection.items.map((item) => {
                return (
                  <ResultItem
                    key={[title, item.objectID].join(':')}
                    item={item}
                    source={collection.source}
                  />
                );
              })}
            </StyledResultList>
          </section>
        ) : null;
      })}
    </StyledContainer>
  );
}

interface ResultItemProps {
  item: DocSearchHit;
  source: AutocompleteCollection['source'];
}

function ResultItem({ item, source }: ResultItemProps) {
  const autocompleteContext = useAutocompleteContext();

  return (
    <StyledResult
      {...autocompleteContext.api.getItemProps({
        item,
        source,
      })}
    >
      <NextLink href={item.url} passHref>
        <StyledResultAnchor>
          <StyledResultIcon>
            <SourceIcon type={item.type} />
          </StyledResultIcon>

          {item.hierarchy[item.type] && item.type === 'lvl1' && (
            <StyledResultContentWrapper>
              <Snippet hit={item} attribute="hierarchy.lvl1" />
              {item.content && <StyledResultHitPath hit={item} attribute="content" />}
            </StyledResultContentWrapper>
          )}

          {item.hierarchy[item.type] && ['lvl2', 'lvl3', 'lvl4'].includes(item.type) && (
            <StyledResultContentWrapper>
              <Snippet hit={item} attribute={`hierarchy.${item.type}`} />
              <StyledResultHitPath hit={item} attribute="hierarchy.lvl1" />
            </StyledResultContentWrapper>
          )}

          {item.type === 'content' && (
            <StyledResultContentWrapper>
              <Snippet hit={item} attribute="content" />
              <StyledResultHitPath hit={item} attribute="hierarchy.lvl1" />
            </StyledResultContentWrapper>
          )}
        </StyledResultAnchor>
      </NextLink>
    </StyledResult>
  );
}

const StyledContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$5',
});

const StyledResultList = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
  listStyle: 'none',
  margin: 0,
  padding: 0,
});

const StyledResult = styled('li', {
  position: 'relative',
  display: 'flex',
  borderRadius: '$1',
  fontSize: '$3',
  backgroundColor: '$slate2',

  mark: {
    backgroundColor: 'transparent',
    color: '$blue10',
    fontWeight: 500,
  },

  '&[aria-selected=true]': {
    backgroundColor: '$blue9',
    color: 'white',

    mark: { color: 'inherit', textDecoration: 'underline' },
  },
});

const StyledResultIcon = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '$5',
  width: '$5',
  color: '$slate9',
  svg: { height: '$3', width: '$3' },

  '[aria-selected=true] &': { color: 'white' },
});

const StyledResultAnchor = styled('a', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  height: '$7',
  px: '$1',
  width: '100%',
  color: 'inherit',
  textDecoration: 'none',
});

const StyledResultContentWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  position: 'relative',

  overflowX: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
});

const StyledResultHitPath = styled(Snippet, {
  color: '$slate11',
  fontSize: '$1',
  fontWeight: 500,

  '[aria-selected=true] &': { color: 'white' },
});

const StyledResultGroupTitle = styled('div', {
  position: 'sticky',
  top: 0,
  zIndex: 10,

  backgroundColor: '$panel',
  color: '$slate11',
  fontSize: '$1',
  fontWeight: '500',
  my: 0,
  pb: '$2',
});
