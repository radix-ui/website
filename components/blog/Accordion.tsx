import React from 'react';
import { styled, Text, Box, Switch, Flex } from '@modulz/design-system';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { Label } from '@radix-ui/react-label';

const StyledAccordion = styled(Accordion.Root, {
  backgroundColor: 'white',
  padding: '$2',
  borderRadius: '$3',
  width: 300,
});

const StyledItem = styled(Accordion.Item, {});

const StyledHeader = styled(Accordion.Header, {
  margin: 0,
  display: 'flex',
});

const StyledButton = styled(Accordion.Button, {
  backgroundColor: '$violet300',
  border: 'none',
  padding: '$2',
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: '$2',
  fontSize: '$3',
  color: '$violet900',
  fontWeight: '500',
  mb: '$2',

  '&:hover': {
    backgroundColor: `$violet400`,
  },

  '&:focus': {
    outline: 'none',
    backgroundColor: `$violet400`,
    boxShadow: '0 0 0 2px $colors$violet800',
  },
});

const StyledPanel = styled(Accordion.Panel, {
  padding: '$2 $2 $4',
  fontSize: '$3',
  color: '$violet900',
});

const AccordionChevron = styled(ChevronDownIcon, {
  transition: 'transform 300ms',
  color: '$violet800',

  '[data-state=open] &': {
    transform: 'rotate(180deg)',
  },
});

export const AccordionDemo = (props) => {
  const [value, setValue] = React.useState<string | string[]>('item-1');

  const [showChevrons, setShowChevrons] = React.useState(false);
  const [allowMultiple, setAllowMultiple] = React.useState(false);
  const [preventClose, setPreventClose] = React.useState(false);

  return (
    <Box
      css={{
        background: 'linear-gradient(330deg, hsl(272,53%,50%) 0%, hsl(226,68%,56%) 100%)',
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        minHeight: 500,
        py: 120,
        mx: '-$5',

        '@bp2': {
          mx: '-$8',
          borderRadius: '$2',
        },
      }}
    >
      <Box
        css={{
          borderRadius: '$1',
          px: '$2',
          position: 'absolute',
          top: '$4',
          right: '$4',
          backgroundColor: '$violet900',
          width: 200,
        }}
      >
        <Flex as="label" css={{ my: '$2', alignItems: 'center' }}>
          <Text size="2" css={{ userSelect: 'none', color: '$violet100', flex: '1' }}>
            Show chevrons
          </Text>
          <Switch
            checked={showChevrons}
            onCheckedChange={(event) => setShowChevrons(event.target.checked)}
          />
        </Flex>
        <Flex as="label" css={{ my: '$2', alignItems: 'center' }}>
          <Text size="2" css={{ userSelect: 'none', color: '$violet100', flex: '1' }}>
            Allow multiple
          </Text>
          <Switch
            checked={allowMultiple}
            onCheckedChange={(event) => {
              setValue(['item-1', 'item-2']);
              setAllowMultiple(event.target.checked);
            }}
          />
        </Flex>
        <Flex as="label" css={{ my: '$2', alignItems: 'center' }}>
          <Text size="2" css={{ userSelect: 'none', color: '$violet100', flex: '1' }}>
            Prevent closing
          </Text>
          <Switch
            checked={preventClose}
            onCheckedChange={(event) => {
              if (value === '' || value.length === 0) {
                setValue('item-1');
              }
              setPreventClose(event.target.checked);
            }}
          />
        </Flex>
      </Box>

      <StyledAccordion
        type={allowMultiple ? 'multiple' : 'single'}
        {...props}
        value={value}
        onValueChange={(newValue) => {
          console.log(preventClose);
          console.log(newValue);
          if (preventClose && (newValue === '' || newValue.length === 0)) {
            return;
          }
          setValue(newValue);
        }}
      >
        <StyledItem value="item-1">
          <StyledHeader>
            <StyledButton>Item 1 {showChevrons && <AccordionChevron aria-hidden />}</StyledButton>
          </StyledHeader>
          <StyledPanel>
            The Radix accordion has been carefully built to ensure you, and your users, have the
            best possible experience.
          </StyledPanel>
        </StyledItem>

        <StyledItem value="item-2">
          <StyledHeader>
            <StyledButton>Item 2 {showChevrons && <AccordionChevron aria-hidden />}</StyledButton>
          </StyledHeader>
          <StyledPanel>
            The Radix accordion has been carefully built to ensure you, and your users, have the
            best possible experience.
          </StyledPanel>
        </StyledItem>

        <StyledItem value="item-3">
          <StyledHeader>
            <StyledButton>Item 3 {showChevrons && <AccordionChevron aria-hidden />}</StyledButton>
          </StyledHeader>
          <StyledPanel>
            The Radix accordion has been carefully built to ensure you, and your users, have the
            best possible experience.
          </StyledPanel>
        </StyledItem>
      </StyledAccordion>
    </Box>
  );
};
