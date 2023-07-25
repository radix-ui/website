import * as React from 'react';
import styles from './ColorsMarketingButton.module.css';

export const ColorsMarketingButton = (props: React.ComponentPropsWithoutRef<'a'>) => (
  <a {...props} className={styles.ColorsMarketingButton} />
);
