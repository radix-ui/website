import * as React from 'react';
import styles from './ColorsMarketingButton.module.css';

export const ColorsMarketingButton = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<'a'>
>((props, forwardedRef) => (
  <a {...props} className={styles.ColorsMarketingButton} ref={forwardedRef} />
));
