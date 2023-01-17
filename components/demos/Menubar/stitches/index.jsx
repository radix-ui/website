import React from 'react';
import * as Menubar from '@radix-ui/react-menubar';
import { styled } from '@modulz/design-system';
import { blackA, violet, mauve } from '@radix-ui/colors';
import { CheckIcon, ChevronRightIcon, DotFilledIcon } from '@radix-ui/react-icons';

const RADIO_ITEMS = ['Andy', 'Benoît', 'Luis'];
const CHECK_ITEMS = ['Always Show Bookmarks Bar', 'Always Show Full URLs'];

const MenubarDemo = () => {
  const [checkedSelection, setCheckedSelection] = React.useState([CHECK_ITEMS[1]]);
  const [radioSelection, setRadioSelection] = React.useState(RADIO_ITEMS[2]);

  return (
    <MenubarRoot>
      <Menubar.Menu>
        <MenubarTrigger>File</MenubarTrigger>
        <Menubar.Portal>
          <MenubarContent align="start" sideOffset={5} alignOffset={-3}>
            <MenubarItem>
              New Tab <RightSlot>⌘ T</RightSlot>
            </MenubarItem>
            <MenubarItem>
              New Window <RightSlot>⌘ N</RightSlot>
            </MenubarItem>
            <MenubarItem disabled> New Incognito Window</MenubarItem>
            <MenubarSeparator />
            <Menubar.SubMenu>
              <MenubarSubTrigger>
                Share
                <RightSlot>
                  <ChevronRightIcon />
                </RightSlot>
              </MenubarSubTrigger>
              <Menubar.Portal>
                <MenubarSubContent alignOffset={-5}>
                  <MenubarItem>Email Link</MenubarItem>
                  <MenubarItem>Messages</MenubarItem>
                  <MenubarItem>Notes</MenubarItem>
                </MenubarSubContent>
              </Menubar.Portal>
            </Menubar.SubMenu>
            <MenubarSeparator />
            <MenubarItem>
              Print… <RightSlot>⌘ P</RightSlot>
            </MenubarItem>
          </MenubarContent>
        </Menubar.Portal>
      </Menubar.Menu>

      <Menubar.Menu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <Menubar.Portal>
          <MenubarContent align="start" sideOffset={5} alignOffset={-3}>
            <MenubarItem>
              Undo <RightSlot>⌘ Z</RightSlot>
            </MenubarItem>
            <MenubarItem>
              Redo <RightSlot>⇧ ⌘ Z</RightSlot>
            </MenubarItem>
            <MenubarSeparator />
            <Menubar.SubMenu>
              <MenubarSubTrigger>
                Find
                <RightSlot>
                  <ChevronRightIcon />
                </RightSlot>
              </MenubarSubTrigger>

              <Menubar.Portal>
                <MenubarSubContent alignOffset={-5}>
                  <MenubarItem>Search the web…</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Find…</MenubarItem>
                  <MenubarItem>Find Next</MenubarItem>
                  <MenubarItem>Find Previous</MenubarItem>
                </MenubarSubContent>
              </Menubar.Portal>
            </Menubar.SubMenu>
            <MenubarSeparator />
            <MenubarItem>Cut</MenubarItem>
            <MenubarItem>Copy</MenubarItem>
            <MenubarItem>Paste</MenubarItem>
          </MenubarContent>
        </Menubar.Portal>
      </Menubar.Menu>

      <Menubar.Menu>
        <MenubarTrigger>View</MenubarTrigger>
        <Menubar.Portal>
          <MenubarContent align="start" sideOffset={5} alignOffset={-14}>
            {CHECK_ITEMS.map((item) => (
              <MenubarCheckboxItem
                key={item}
                checked={checkedSelection.includes(item)}
                variant="inset"
                onCheckedChange={() =>
                  setCheckedSelection((current) =>
                    current.includes(item)
                      ? current.filter((el) => el !== item)
                      : current.concat(item)
                  )
                }
              >
                <MenubarItemIndicator>
                  <CheckIcon />
                </MenubarItemIndicator>
                {item}
              </MenubarCheckboxItem>
            ))}
            <MenubarSeparator />
            <MenubarItem variant="inset">
              Reload <RightSlot>⌘ R</RightSlot>
            </MenubarItem>
            <MenubarItem variant="inset" disabled>
              Force Reload <RightSlot>⇧ ⌘ R</RightSlot>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem variant="inset">Toggle Fullscreen</MenubarItem>
            <MenubarSeparator />
            <MenubarItem variant="inset">Hide Sidebar</MenubarItem>
          </MenubarContent>
        </Menubar.Portal>
      </Menubar.Menu>

      <Menubar.Menu>
        <MenubarTrigger>Profiles</MenubarTrigger>
        <Menubar.Portal>
          <MenubarContent align="start" sideOffset={5} alignOffset={-14}>
            <Menubar.RadioGroup value={radioSelection} onValueChange={setRadioSelection}>
              {RADIO_ITEMS.map((item) => (
                <MenubarRadioItem key={item} value={item} variant="inset">
                  <MenubarItemIndicator>
                    <DotFilledIcon />
                  </MenubarItemIndicator>
                  {item}
                </MenubarRadioItem>
              ))}
              <MenubarSeparator />
              <MenubarItem variant="inset">Edit…</MenubarItem>
              <MenubarSeparator />
              <MenubarItem variant="inset">Add Profile…</MenubarItem>
            </Menubar.RadioGroup>
          </MenubarContent>
        </Menubar.Portal>
      </Menubar.Menu>
    </MenubarRoot>
  );
};

const MenubarRoot = styled(Menubar.Root, {
  display: 'flex',
  backgroundColor: 'white',
  padding: 3,
  borderRadius: 6,
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
});

const MenubarTrigger = styled(Menubar.Trigger, {
  all: 'unset',
  padding: '8px 12px',
  outline: 'none',
  userSelect: 'none',
  fontWeight: 500,
  lineHeight: 1,
  borderRadius: 4,
  fontSize: 13,
  color: violet.violet11,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 2,

  '&[data-highlighted], &[data-state="open"]': {
    backgroundColor: violet.violet4,
  },
});

const contentStyles = {
  minWidth: 220,
  backgroundColor: 'white',
  borderRadius: 6,
  padding: 5,
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
};

const MenubarContent = styled(Menubar.Content, contentStyles);
const MenubarSubContent = styled(Menubar.SubContent, contentStyles);

const itemStyles = {
  all: 'unset',
  fontSize: 13,
  lineHeight: 1,
  color: violet.violet11,
  borderRadius: 4,
  display: 'flex',
  alignItems: 'center',
  height: 25,
  padding: '0 10px',
  position: 'relative',
  userSelect: 'none',

  '&[data-disabled]': {
    color: mauve.mauve8,
    pointerEvents: 'none',
  },

  '&[data-highlighted]': {
    backgroundImage: `linear-gradient(135deg, ${violet.violet9} 0%, ${violet.violet10} 100%)`,
    color: violet.violet1,
  },

  variants: {
    variant: {
      inset: {
        paddingLeft: 20,
      },
    },
  },
};

const MenubarItem = styled(Menubar.Item, itemStyles);
const MenubarSubTrigger = styled(Menubar.SubTrigger, {
  '&[data-state="open"]': {
    backgroundColor: violet.violet4,
    color: violet.violet11,
  },
  ...itemStyles,
});

const MenubarCheckboxItem = styled(Menubar.CheckboxItem, itemStyles);
const MenubarRadioItem = styled(Menubar.RadioItem, itemStyles);

const MenubarItemIndicator = styled(Menubar.ItemIndicator, {
  position: 'absolute',
  left: 0,
  width: 20,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const RightSlot = styled('div', {
  marginLeft: 'auto',
  paddingLeft: 20,
  color: mauve.mauve9,
  '[data-highlighted] > &': { color: 'white' },
  '[data-disabled] &': { color: mauve.mauve8 },
});

const MenubarSeparator = styled(Menubar.Separator, {
  height: 1,
  backgroundColor: violet.violet6,
  margin: 5,
});

export default MenubarDemo;
