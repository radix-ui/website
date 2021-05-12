import React from 'react';
import { theme, styled, keyframes, Text, Box, Switch, Flex } from '@modulz/design-system';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-accordion-panel-height)' },
});

const slideUp = keyframes({
  from: { height: 'var(--radix-accordion-panel-height)' },
  to: { height: 0 },
});

const StyledAccordion = styled(Accordion.Root, {
  backgroundColor: 'white',
  borderRadius: '$3',
  width: 300,
});

const StyledItem = styled(Accordion.Item, {
  margin: '$2',
  borderRadius: '$2',
  overflow: 'hidden',
  backgroundColor: theme.colors.slate200.value,

  '&[data-state="open"]': {
    backgroundColor: theme.colors.violet200.value,
  },

  '&:hover': {
    backgroundColor: theme.colors.slate400.value,
    '&[data-state="open"]': {
      backgroundColor: theme.colors.violet200.value,
    },
  },

  '&:focus-within': {
    boxShadow: `0 0 0 2px ${theme.colors.violet700.value}`,
  },
});

const StyledHeader = styled(Accordion.Header, {
  margin: 0,
  display: 'flex',
});

const StyledButton = styled(Accordion.Button, {
  backgroundColor: 'transparent',
  border: 'none',
  padding: '$2',
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  fontSize: '$3',
  color: theme.colors.slate1000.value,
  fontWeight: '500',

  '&[data-state="open"]': {
    color: theme.colors.violet900.value,
  },

  '&:focus': {
    outline: 'none',
  },
});

const StyledPanel = styled(Accordion.Panel, {
  overflow: 'hidden',
  fontSize: '$3',
  color: theme.colors.slate1000.value,

  '.with-animation &': {
    '&[data-state="open"]': {
      animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
    },
    '&[data-state="closed"]': {
      animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
    },
  },
});

const AccordionChevron = styled(ChevronDownIcon, {
  transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',
  color: theme.colors.violet800.value,

  '[data-state=open] &': {
    transform: 'rotate(180deg)',
  },
});

export const AccordionDemo = (props) => {
  const [value, setValue] = React.useState<string | string[]>('item-1');

  const [showChevrons, setShowChevrons] = React.useState(false);
  const [allowMultiple, setAllowMultiple] = React.useState(false);
  const [preventClose, setPreventClose] = React.useState(false);
  const [withAnimation, setWithAnimation] = React.useState(true);

  return (
    <Box
      className={withAnimation ? 'with-animation' : ''}
      css={{
        background: 'linear-gradient(330deg, hsl(272,53%,50%) 0%, hsl(226,68%,56%) 100%)',
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        py: '$9',
        mx: '-$5',
        height: 600,

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
          left: '$4',
          backgroundColor: 'rgba(0 0 0 / 0.2)',
          width: 200,
        }}
      >
        <Flex as="label" css={{ my: '$2', alignItems: 'center' }}>
          <Text size="2" css={{ userSelect: 'none', color: 'white', flex: '1' }}>
            Show chevrons
          </Text>
          <Switch
            css={{ border: 'none' }}
            checked={showChevrons}
            onCheckedChange={(event) => setShowChevrons(event.target.checked)}
          />
        </Flex>
        <Flex as="label" css={{ my: '$2', alignItems: 'center' }}>
          <Text size="2" css={{ userSelect: 'none', color: 'white', flex: '1' }}>
            Allow multiple
          </Text>
          <Switch
            css={{ border: 'none' }}
            checked={allowMultiple}
            onCheckedChange={(event) => {
              setValue(['item-1', 'item-2']);
              setAllowMultiple(event.target.checked);
            }}
          />
        </Flex>
        <Flex as="label" css={{ my: '$2', alignItems: 'center' }}>
          <Text size="2" css={{ userSelect: 'none', color: 'white', flex: '1' }}>
            Prevent closing
          </Text>
          <Switch
            css={{ border: 'none' }}
            checked={preventClose}
            onCheckedChange={(event) => {
              if (value === '' || value.length === 0) {
                setValue('item-1');
              }
              setPreventClose(event.target.checked);
            }}
          />
        </Flex>
        <Flex as="label" css={{ my: '$2', alignItems: 'center' }}>
          <Text size="2" css={{ userSelect: 'none', color: 'white', flex: '1' }}>
            With animation
          </Text>
          <Switch
            css={{ border: 'none' }}
            checked={withAnimation}
            onCheckedChange={(event) => {
              setWithAnimation(event.target.checked);
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
            <Box css={{ padding: '0 $2 $2' }}>
              The Radix accordion has been carefully built to ensure you, and your users, have the
              best possible experience.
            </Box>
          </StyledPanel>
        </StyledItem>

        <StyledItem value="item-2">
          <StyledHeader>
            <StyledButton>Item 2 {showChevrons && <AccordionChevron aria-hidden />}</StyledButton>
          </StyledHeader>
          <StyledPanel>
            <Box css={{ padding: '0 $2 $2' }}>
              The Radix accordion has been carefully built to ensure you, and your users, have the
              best possible experience.
            </Box>
          </StyledPanel>
        </StyledItem>

        <StyledItem value="item-3">
          <StyledHeader>
            <StyledButton>Item 3 {showChevrons && <AccordionChevron aria-hidden />}</StyledButton>
          </StyledHeader>
          <StyledPanel>
            <Box css={{ padding: '0 $2 $2' }}>
              The Radix accordion has been carefully built to ensure you, and your users, have the
              best possible experience.
            </Box>
          </StyledPanel>
        </StyledItem>
        <StyledItem value="item-4">
          <StyledHeader>
            <StyledButton>Item 4 {showChevrons && <AccordionChevron aria-hidden />}</StyledButton>
          </StyledHeader>
          <StyledPanel>
            <Box css={{ padding: '0 $2 $2' }}>
              The Radix accordion has been carefully built to ensure you, and your users, have the
              best possible experience.
            </Box>
          </StyledPanel>
        </StyledItem>
      </StyledAccordion>
    </Box>
  );
};
