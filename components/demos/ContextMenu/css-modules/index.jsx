import React from 'react';
import * as ContextMenu from '@radix-ui/react-context-menu';
import { DotFilledIcon, CheckIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import styles from './styles.module.css';

const ContextMenuDemo = () => {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
  const [urlsChecked, setUrlsChecked] = React.useState(false);
  const [person, setPerson] = React.useState('pedro');

  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger className={styles.Trigger}>Right-click here.</ContextMenu.Trigger>
      <ContextMenu.Portal>
        <ContextMenu.Content className={styles.Content} sideOffset={5} align="end">
          <ContextMenu.Item className={styles.Item}>
            Back <div className={styles.RightSlot}>⌘+[</div>
          </ContextMenu.Item>
          <ContextMenu.Item className={styles.Item} disabled>
            Forward <div className={styles.RightSlot}>⌘+]</div>
          </ContextMenu.Item>
          <ContextMenu.Item className={styles.Item}>
            Reload <div className={styles.RightSlot}>⌘+R</div>
          </ContextMenu.Item>
          <ContextMenu.Sub>
            <ContextMenu.SubTrigger className={styles.SubTrigger}>
              More Tools
              <div className={styles.RightSlot}>
                <ChevronRightIcon />
              </div>
            </ContextMenu.SubTrigger>
            <ContextMenu.Portal>
              <ContextMenu.SubContent className={styles.SubContent} sideOffset={2} alignOffset={-5}>
                <ContextMenu.Item className={styles.Item}>
                  Save Page As… <div className={styles.RightSlot}>⌘+S</div>
                </ContextMenu.Item>
                <ContextMenu.Item className={styles.Item}>Create Shortcut…</ContextMenu.Item>
                <ContextMenu.Item className={styles.Item}>Name Window…</ContextMenu.Item>
                <ContextMenu.Separator className={styles.Separator} />
                <ContextMenu.Item className={styles.Item}>Developer Tools</ContextMenu.Item>
              </ContextMenu.SubContent>
            </ContextMenu.Portal>
          </ContextMenu.Sub>

          <ContextMenu.Separator className={styles.Separator} />

          <ContextMenu.CheckboxItem
            className={styles.CheckboxItem}
            checked={bookmarksChecked}
            onCheckedChange={setBookmarksChecked}
          >
            <ContextMenu.ItemIndicator className={styles.ItemIndicator}>
              <CheckIcon />
            </ContextMenu.ItemIndicator>
            Show Bookmarks <div className={styles.RightSlot}>⌘+B</div>
          </ContextMenu.CheckboxItem>
          <ContextMenu.CheckboxItem
            className={styles.CheckboxItem}
            checked={urlsChecked}
            onCheckedChange={setUrlsChecked}
          >
            <ContextMenu.ItemIndicator className={styles.ItemIndicator}>
              <CheckIcon />
            </ContextMenu.ItemIndicator>
            Show Full URLs
          </ContextMenu.CheckboxItem>

          <ContextMenu.Separator className={styles.Separator} />

          <ContextMenu.Label className={styles.Label}>People</ContextMenu.Label>
          <ContextMenu.RadioGroup value={person} onValueChange={setPerson}>
            <ContextMenu.RadioItem className={styles.RadioItem} value="pedro">
              <ContextMenu.ItemIndicator className={styles.ItemIndicator}>
                <DotFilledIcon />
              </ContextMenu.ItemIndicator>
              Pedro Duarte
            </ContextMenu.RadioItem>
            <ContextMenu.RadioItem className={styles.RadioItem} value="colm">
              <ContextMenu.ItemIndicator className={styles.ItemIndicator}>
                <DotFilledIcon />
              </ContextMenu.ItemIndicator>
              Colm Tuite
            </ContextMenu.RadioItem>
          </ContextMenu.RadioGroup>
        </ContextMenu.Content>
      </ContextMenu.Portal>
    </ContextMenu.Root>
  );
};

export default ContextMenuDemo;
