import React from 'react';
import { styled, keyframes, Box, darkTheme } from '@modulz/design-system';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { HeroContainer } from '@components/HeroContainer';

const StyledAccordion = styled(Accordion.Root, {
  borderTop: '1px solid $$borderColor',
});

const StyledItem = styled(Accordion.Item, {
  borderBottom: '1px solid $$borderColor',
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
  color: '$loContrast',
  fontWeight: '500',

  '&:focus': {
    outline: 'none',
    backgroundColor: `$violet900`,
    // background: 'linear-gradient(330deg, hsl(272,53%,50%) 0%, hsl(226,68%,56%) 100%)',
    '.hero &': {
      backgroundColor: 'rgba(255 255 255 / 0.2)',
    },
  },
});

const StyledPanel = styled(Accordion.Panel, {
  padding: '$2 $2 $4',
  fontSize: '$3',
  color: '$loContrast',
});

const AccordionChevron = styled(ChevronDownIcon, {
  transition: 'transform 300ms',
  color: '$loContrast',

  '[data-state=open] &': {
    transform: 'rotate(180deg)',
  },
});

export const AccordionDemo = ({
  isHero,
  showChevrons,
  preventClose,
  initialValue = null,
  ...props
}) => {
  const [value, setValue] = React.useState(initialValue);

  return (
    <Box
      css={{
        $$borderColor: isHero ? '$colors$loContrast' : '$colors$violet900',

        padding: isHero ? '$9 $8' : '$8',
        borderRadius: '$2',
        mb: '$4',
        mx: isHero ? '-$8' : 0,
        background: isHero
          ? 'linear-gradient(330deg, hsl(272,53%,50%) 0%, hsl(226,68%,56%) 100%)'
          : '$violet1000',
      }}
      className={isHero ? 'hero' : darkTheme}
    >
      <StyledAccordion
        type="single"
        {...props}
        value={value}
        onValueChange={(newValue) => {
          if (preventClose && newValue === undefined) {
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
