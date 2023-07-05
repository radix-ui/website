import * as React from 'react';
import styles from './BoxLink.module.css';
import { classNames } from '@lib/classNames';

interface BoxLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {}

export const BoxLink = React.forwardRef<HTMLAnchorElement, BoxLinkProps>(function BoxLink(
  { className, ...props },
  forwardedRef
) {
  return <a ref={forwardedRef} className={classNames(styles.BoxLink, className)} {...props} />;
});
