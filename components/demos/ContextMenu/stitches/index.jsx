import React from 'react';
import * as ContextMenu from '@radix-ui/react-context-menu';
import { styled } from '@stitches/react';
import { violet, mauve } from '@radix-ui/colors';
import { DotFilledIcon, CheckIcon, ChevronRightIcon } from '@radix-ui/react-icons';

const ContextMenuDemo = () => {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
  const [urlsChecked, setUrlsChecked] = React.useState(false);
  const [person, setPerson] = React.useState('pedro');

  return (
    <ContextMenu.Root>
      <ContextMenuTrigger>Right-click here.</ContextMenuTrigger>
      <ContextMenu.Portal>
        <ContextMenuContent sideOffset={5} align="end">
          <ContextMenuItem>
            Back <RightSlot>⌘+[</RightSlot>
          </ContextMenuItem>
          <ContextMenuItem disabled>
            Forward <RightSlot>⌘+]</RightSlot>
          </ContextMenuItem>
          <ContextMenuItem>
            Reload <RightSlot>⌘+R</RightSlot>
          </ContextMenuItem>
          <ContextMenu.Sub>
            <ContextMenuSubTrigger>
              More Tools
              <RightSlot>
                <ChevronRightIcon />
              </RightSlot>
            </ContextMenuSubTrigger>
            <ContextMenu.Portal>
              <ContextMenuSubContent sideOffset={2} alignOffset={-5}>
                <ContextMenuItem>
                  Save Page As… <RightSlot>⌘+S</RightSlot>
                </ContextMenuItem>
                <ContextMenuItem>Create Shortcut…</ContextMenuItem>
                <ContextMenuItem>Name Window…</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>Developer Tools</ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenu.Portal>
          </ContextMenu.Sub>

          <ContextMenuSeparator />

          <ContextMenuCheckboxItem checked={bookmarksChecked} onCheckedChange={setBookmarksChecked}>
            <ContextMenuItemIndicator>
              <CheckIcon />
            </ContextMenuItemIndicator>
            Show Bookmarks <RightSlot>⌘+B</RightSlot>
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem checked={urlsChecked} onCheckedChange={setUrlsChecked}>
            <ContextMenuItemIndicator>
              <CheckIcon />
            </ContextMenuItemIndicator>
            Show Full URLs
          </ContextMenuCheckboxItem>

          <ContextMenuSeparator />

          <ContextMenuLabel>People</ContextMenuLabel>
          <ContextMenu.RadioGroup value={person} onValueChange={setPerson}>
            <ContextMenuRadioItem value="pedro">
              <ContextMenuItemIndicator>
                <DotFilledIcon />
              </ContextMenuItemIndicator>
              Pedro Duarte
            </ContextMenuRadioItem>
            <ContextMenuRadioItem value="colm">
              <ContextMenuItemIndicator>
                <DotFilledIcon />
              </ContextMenuItemIndicator>
              Colm Tuite
            </ContextMenuRadioItem>
          </ContextMenu.RadioGroup>
        </ContextMenuContent>
      </ContextMenu.Portal>
    </ContextMenu.Root>
  );
};

const ContextMenuTrigger = styled(ContextMenu.Trigger, {
  display: 'block',
  border: `2px white dashed`,
  color: 'white',
  borderRadius: 4,
  fontSize: 15,
  userSelect: 'none',
  padding: '45px 0',
  width: 300,
  textAlign: 'center',
});

const contentStyles = {
  minWidth: 220,
  backgroundColor: 'white',
  borderRadius: 6,
  overflow: 'hidden',
  padding: 5,
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
};

const ContextMenuContent = styled(ContextMenu.Content, contentStyles);
const ContextMenuSubContent = styled(ContextMenu.SubContent, contentStyles);

const itemStyles = {
  fontSize: 13,
  lineHeight: 1,
  color: violet.violet11,
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  height: 25,
  padding: '0 5px',
  position: 'relative',
  paddingLeft: 25,
  userSelect: 'none',
  outline: 'none',

  '&[data-disabled]': {
    color: mauve.mauve8,
    pointerEvents: 'none',
  },

  '&[data-highlighted]': {
    backgroundColor: violet.violet9,
    color: violet.violet1,
  },
};

const ContextMenuItem = styled(ContextMenu.Item, itemStyles);
const ContextMenuCheckboxItem = styled(ContextMenu.CheckboxItem, itemStyles);
const ContextMenuRadioItem = styled(ContextMenu.RadioItem, itemStyles);
const ContextMenuSubTrigger = styled(ContextMenu.SubTrigger, {
  '&[data-state="open"]': {
    backgroundColor: violet.violet4,
    color: violet.violet11,
  },
  ...itemStyles,
});

const ContextMenuLabel = styled(ContextMenu.Label, {
  paddingLeft: 25,
  fontSize: 12,
  lineHeight: '25px',
  color: mauve.mauve11,
});

const ContextMenuSeparator = styled(ContextMenu.Separator, {
  height: 1,
  backgroundColor: violet.violet6,
  margin: 5,
});

const ContextMenuItemIndicator = styled(ContextMenu.ItemIndicator, {
  position: 'absolute',
  left: 0,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const RightSlot = styled('div', {
  marginLeft: 'auto',
  paddingLeft: 20,
  color: mauve.mauve11,
  '[data-highlighted] > &': { color: 'white' },
  '[data-disabled] &': { color: mauve.mauve8 },
});

export default ContextMenuDemo;
