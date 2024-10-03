import React from 'react';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { TextAlignLeftIcon, TextAlignCenterIcon, TextAlignRightIcon } from '@radix-ui/react-icons';
import styles from './styles.module.css';

const ToggleGroupDemo = () => (
  <ToggleGroup.Root
    className={styles.Group}
    type="single"
    defaultValue="center"
    aria-label="Text alignment"
  >
    <ToggleGroup.Item className={styles.Item} value="left" aria-label="Left aligned">
      <TextAlignLeftIcon />
    </ToggleGroup.Item>
    <ToggleGroup.Item className={styles.Item} value="center" aria-label="Center aligned">
      <TextAlignCenterIcon />
    </ToggleGroup.Item>
    <ToggleGroup.Item className={styles.Item} value="right" aria-label="Right aligned">
      <TextAlignRightIcon />
    </ToggleGroup.Item>
  </ToggleGroup.Root>
);

export default ToggleGroupDemo;
