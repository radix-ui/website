import React from 'react';
import * as Toolbar from '@radix-ui/react-toolbar';
import { styled } from '@stitches/react';
import { violet, blackA, mauve } from '@radix-ui/colors';
import {
  StrikethroughIcon,
  TextAlignLeftIcon,
  TextAlignCenterIcon,
  TextAlignRightIcon,
  FontBoldIcon,
  FontItalicIcon,
} from '@radix-ui/react-icons';

const ToolbarDemo = () => (
  <ToolbarRoot aria-label="Formatting options">
    <ToolbarToggleGroup type="multiple" aria-label="Text formatting">
      <ToolbarToggleItem value="bold" aria-label="Bold">
        <FontBoldIcon />
      </ToolbarToggleItem>
      <ToolbarToggleItem value="italic" aria-label="Italic">
        <FontItalicIcon />
      </ToolbarToggleItem>
      <ToolbarToggleItem value="strikethrough" aria-label="Strike through">
        <StrikethroughIcon />
      </ToolbarToggleItem>
    </ToolbarToggleGroup>
    <ToolbarSeparator />
    <ToolbarToggleGroup type="single" defaultValue="center" aria-label="Text alignment">
      <ToolbarToggleItem value="left" aria-label="Left aligned">
        <TextAlignLeftIcon />
      </ToolbarToggleItem>
      <ToolbarToggleItem value="center" aria-label="Center aligned">
        <TextAlignCenterIcon />
      </ToolbarToggleItem>
      <ToolbarToggleItem value="right" aria-label="Right aligned">
        <TextAlignRightIcon />
      </ToolbarToggleItem>
    </ToolbarToggleGroup>
    <ToolbarSeparator />
    <ToolbarLink href="#" target="_blank" css={{ marginRight: 10 }}>
      Edited 2 hours ago
    </ToolbarLink>
    <ToolbarButton css={{ marginLeft: 'auto' }}>Share</ToolbarButton>
  </ToolbarRoot>
);

const ToolbarRoot = styled(Toolbar.Root, {
  display: 'flex',
  padding: 10,
  width: '100%',
  minWidth: 'max-content',
  borderRadius: 6,
  backgroundColor: 'white',
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
});

const itemStyles = {
  all: 'unset',
  flex: '0 0 auto',
  color: mauve.mauve11,
  height: 25,
  padding: '0 5px',
  borderRadius: 4,
  display: 'inline-flex',
  fontSize: 13,
  lineHeight: 1,
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': { backgroundColor: violet.violet3, color: violet.violet11 },
  '&:focus': { position: 'relative', boxShadow: `0 0 0 2px ${violet.violet7}` },
};

const ToolbarToggleGroup = styled(Toolbar.ToggleGroup, {
  display: 'inline-flex',
  borderRadius: 4,
});

const ToolbarToggleItem = styled(Toolbar.ToggleItem, {
  ...itemStyles,
  boxShadow: 0,
  backgroundColor: 'white',
  marginLeft: 2,
  '&:first-child': { marginLeft: 0 },
  '&[data-state=on]': { backgroundColor: violet.violet5, color: violet.violet11 },
});

const ToolbarSeparator = styled(Toolbar.Separator, {
  width: 1,
  backgroundColor: mauve.mauve6,
  margin: '0 10px',
});

const ToolbarLink = styled(
  Toolbar.Link,
  {
    ...itemStyles,
    backgroundColor: 'transparent',
    color: mauve.mauve11,
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  { '&:hover': { backgroundColor: 'transparent', cursor: 'pointer' } }
);

const ToolbarButton = styled(
  Toolbar.Button,
  {
    ...itemStyles,
    paddingLeft: 10,
    paddingRight: 10,
    color: 'white',
    backgroundColor: violet.violet9,
  },
  { '&:hover': { backgroundColor: violet.violet10 } }
);

export default ToolbarDemo;
