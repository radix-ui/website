import React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { Box, Flex, styled } from '@modulz/design-system';
import {
  CaretDownIcon,
  CaretRightIcon,
  CheckIcon,
  GitHubLogoIcon,
  TwitterLogoIcon,
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

const DropdownMenuContentWrapper = styled('div', {
  // The default `position: fixed` is wobbly when scrolling with Mac touchpads,
  // which is OK when using components for real, but looks awkward in the demos.
  // `position: absolute` stays put as you scroll.
  '& [data-radix-popper-content-wrapper]': {
    position: 'absolute !important',
  },
});

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
  const [showToolbar, setShowToolbar] = React.useState<boolean | 'indeterminate'>(true);
  const [showUrls, setShowUrls] = React.useState<boolean | 'indeterminate'>(false);
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

      <DropdownMenuContentWrapper>
        <DropdownMenuContent
          ref={contentRef}
          sideOffset={5}
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
          onOpenAutoFocus={(event: FocusEvent) => {
            // We prevent the initial auto focus because it's a demo rather than a real UI,
            // so the parent page focus is not stolen.
            event.preventDefault();

            if (initialAutoFocusPrevented.current) {
              // Restore default behaviour, but prevent the focus scroll
              // which happens when content wrapper has `position: absolute`
              setTimeout(() => {
                contentRef.current.focus({ preventScroll: true });
              });
            } else {
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
                <Flex
                  css={{
                    width: 15,
                    height: 15,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: -15,
                    marginRight: 10,
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 25 25"
                    fill="currentcolor"
                  >
                    <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z" />
                    <path d="M12 0H4V8H12V0Z" />
                    <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z" />
                  </svg>
                </Flex>
                Radix
              </DropdownMenuItem>
              <DropdownMenuItem>
                <TwitterLogoIcon style={{ marginLeft: -15, marginRight: 10 }} />
                Twitter
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
      </DropdownMenuContentWrapper>
    </DropdownMenuPrimitive.Root>
  );
}
