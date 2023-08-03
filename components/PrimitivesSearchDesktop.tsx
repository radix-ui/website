import * as React from 'react';
import styles from './PrimitivesSearchDesktop.module.css';
import { Cross2Icon, MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { Box, Flex, IconButton, Kbd, ScrollArea, Theme, Tooltip } from '@radix-ui/themes';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { PrimitivesSearch } from './PrimitivesSearch';

export const PrimitivesSearchDesktop = () => {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    const isEditingContent = (event: KeyboardEvent) => {
      const element = event.target as HTMLElement;
      const tagName = element.tagName;
      return element.isContentEditable || ['INPUT', 'SELECT', 'TEXTAREA'].includes(tagName);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isEditingContent(event) && event.key === '/') {
        buttonRef.current.click();
        event.preventDefault();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <DialogPrimitive.Root open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogPrimitive.Trigger asChild>
        <button
          ref={buttonRef}
          aria-label="Search. Press Slash key to search quickly."
          className={styles.PrimitivesSearchDesktopButton}
          onKeyDown={(event) => {
            if (!event.metaKey && !event.ctrlKey && /^[a-z]$/i.test(event.key)) {
              setDialogOpen(true);
            }
          }}
        >
          <MagnifyingGlassIcon />
          Search
          <Tooltip content="Press Slash key to search">
            <Flex ml="auto" my="-2" aria-hidden>
              <Kbd>/</Kbd>
            </Flex>
          </Tooltip>
        </button>
      </DialogPrimitive.Trigger>

      <DialogPrimitive.Portal>
        <Theme>
          <DialogPrimitive.Overlay className={styles.PrimitivesSearchDesktopDialogOverlay}>
            <DialogPrimitive.Content
              onEscapeKeyDown={() => setDialogOpen(false)}
              className={styles.PrimitivesSearchDesktopDialogContent}
            >
              <PrimitivesSearch.Root>
                <Box position="relative">
                  <PrimitivesSearch.Input>
                    <input className={styles.PrimitivesSearchDesktopInput} />
                  </PrimitivesSearch.Input>

                  <Flex
                    position="absolute"
                    align="center"
                    top="0"
                    left="0"
                    height="7"
                    ml="3"
                    style={{ pointerEvents: 'none' }}
                  >
                    <MagnifyingGlassIcon width="18" height="18" color="var(--gray-a11)" />
                  </Flex>

                  <Flex
                    align="center"
                    position="absolute"
                    top="0"
                    bottom="0"
                    right="0"
                    mr="3"
                    style={{ zIndex: 1 }}
                  >
                    <PrimitivesSearch.ClearButton>
                      <IconButton size="2" color="gray" variant="ghost" radius="full">
                        <Cross2Icon width="18" height="18" />
                      </IconButton>
                    </PrimitivesSearch.ClearButton>
                  </Flex>
                </Box>

                <PrimitivesSearch.ResultsPanel>
                  <Box className={styles.PrimitivesSearchDesktopPanel}>
                    <ScrollArea scrollbars="vertical">
                      <Box className={styles.PrimitivesSearchDesktopPanelInner}>
                        <PrimitivesSearch.Results />
                      </Box>
                    </ScrollArea>
                  </Box>
                </PrimitivesSearch.ResultsPanel>
              </PrimitivesSearch.Root>
            </DialogPrimitive.Content>
          </DialogPrimitive.Overlay>
        </Theme>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};
