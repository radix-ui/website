import React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { Box, styled } from '@modulz/design-system';
import {
  CaretDownIcon,
  CaretRightIcon,
  CheckIcon,
  GitHubLogoIcon,
  ModulzLogoIcon,
  StitchesLogoIcon,
} from '@radix-ui/react-icons';
import { DemoButton } from '@components/marketing/DemoButton';

const DropdownMenuArrow = styled(DropdownMenuPrimitive.Arrow, {
  fill: '$loContrast',
});

const contentCss = {
  bc: '$loContrast',
  br: '$2',
  p: '$1',
  boxShadow: '0px 5px 30px -5px rgba(0, 0, 0, 0.1), 0 1px 3px -1px rgba(0, 0, 0, 0.2)',
};

const DropdownMenuContent: any = styled(DropdownMenuPrimitive.Content, contentCss);

const DropdownMenuSeparator = styled(DropdownMenuPrimitive.Separator, {
  bc: '$slate4',
  height: 1,
  my: '$1',
  ml: '$5',
  mr: '$1',
});

const itemCss = {
  display: 'flex',
  alignItems: 'center',
  fontFamily: '$untitled',
  fontSize: '$1',
  fontVariantNumeric: 'tabular-nums',
  lineHeight: '1',
  cursor: 'default',
  userSelect: 'none',
  whiteSpace: 'nowrap',
  height: '$5',
  color: '$hiContrast',
  minWidth: 90,
  pl: '$4',
  pr: '$3',
  br: '$1',

  '&[data-state="open"]': {
    backgroundColor: '$slate3',
  },

  // &:active for touch devices
  '&[data-highlighted], &:active': {
    outline: 0,
    backgroundColor: '$indigo9',
    color: 'white',
  },
};

const DropdownMenuItem = styled(DropdownMenuPrimitive.Item, itemCss);
const DropdownMenuCheckboxItem = styled(DropdownMenuPrimitive.CheckboxItem, itemCss);

const DropdownMenuSubTrigger = styled(DropdownMenuPrimitive.SubTrigger, itemCss);
const DropdownMenuSubContent: any = styled(DropdownMenuPrimitive.SubContent, contentCss);

export function MainHeroDropdownMenu() {
  // We prevent the initial auto focus because it's a demo rather than a real UI,
  // so the parent page focus is not stolen.
  const initialAutoFocusPrevented = React.useRef(false);
  const [showToolbar, setShowToolbar] = React.useState(true);
  const [showUrls, setShowUrls] = React.useState(false);
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [open, setOpen] = React.useState(true);

  return (
    <DropdownMenuPrimitive.Root modal={false} open={open} onOpenChange={setOpen}>
      <DropdownMenuPrimitive.Trigger asChild>
        <DemoButton ref={triggerRef} css={{ marginBottom: 120, gap: 3 }}>
          Options <CaretDownIcon style={{ marginRight: -5 }} />
        </DemoButton>
      </DropdownMenuPrimitive.Trigger>

      <Box
        // Position it manually because iOS Safari is buggy
        // with transforms and horizontal scroll containers
        css={{
          '[data-radix-popper-content-wrapper]': {
            left: '50% !important',
            transform: 'translate(-50%, 155px) !important',
          },
        }}
      >
        <DropdownMenuContent
          ref={contentRef}
          sideOffset={5}
          portalled={false}
          avoidCollisions={false}
          onEscapeKeyDown={(event) => {
            event.preventDefault();
            if (event.target instanceof HTMLElement && contentRef.current?.contains(event.target)) {
              setOpen(false);
            }
          }}
          onInteractOutside={(event) => {
            if (event.target !== triggerRef.current) {
              event.preventDefault();
            }
          }}
          onOpenAutoFocus={(event) => {
            // We prevent the initial auto focus because it's a demo rather than a real UI,
            // so the parent page focus is not stolen.
            if (initialAutoFocusPrevented.current === false) {
              event.preventDefault();
              initialAutoFocusPrevented.current = true;
            }
          }}
        >
          <DropdownMenuArrow />
          <DropdownMenuItem>New Tab</DropdownMenuItem>
          <DropdownMenuItem>New Window</DropdownMenuItem>
          <DropdownMenuSeparator />

          <DropdownMenuPrimitive.Sub>
            <DropdownMenuSubTrigger>
              Favorites
              <CaretRightIcon style={{ marginLeft: 'auto', marginRight: -5 }} />
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>
                <GitHubLogoIcon style={{ marginLeft: -15, marginRight: 10 }} />
                GitHub
              </DropdownMenuItem>
              <DropdownMenuItem>
                <StitchesLogoIcon style={{ marginLeft: -15, marginRight: 10 }} />
                Stitches
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ModulzLogoIcon style={{ marginLeft: -15, marginRight: 10 }} />
                Modulz
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPrimitive.Sub>

          <DropdownMenuItem>Downloads</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem checked={showToolbar} onCheckedChange={setShowToolbar}>
            <DropdownMenuPrimitive.ItemIndicator>
              <CheckIcon style={{ marginLeft: -18, marginRight: 0 }} />
            </DropdownMenuPrimitive.ItemIndicator>
            Show Toolbar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={showUrls} onCheckedChange={setShowUrls}>
            <DropdownMenuPrimitive.ItemIndicator>
              <CheckIcon style={{ marginLeft: -18, marginRight: 0 }} />
            </DropdownMenuPrimitive.ItemIndicator>
            Show Full URLs
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </Box>
    </DropdownMenuPrimitive.Root>
  );
}
