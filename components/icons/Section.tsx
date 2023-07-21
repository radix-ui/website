import * as React from 'react';
import { Box } from '@radix-ui/themes';

import styles from './Section.module.css';

type SectionProps = {
  children?: React.ReactNode;
};

export const Section: React.FunctionComponent = ({ children }: SectionProps) => {
  return <Box className={styles.Section}>{children}</Box>;
};
