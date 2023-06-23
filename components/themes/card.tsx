import classNames from 'classnames';
import * as React from 'react';
import styles from './card.module.css';

interface CardOwnProps {
  ghost?: boolean;
  size?: '1' | '2' | '3' | '4';
}

interface CardProps extends React.ComponentPropsWithoutRef<'div'>, CardOwnProps {}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, ghost, size = '1', ...props }, forwardedRef) => (
    <div
      ref={forwardedRef}
      className={classNames(className, styles.Card, {
        [styles.solid]: !ghost,
        [styles['size-1']]: size === '1',
        [styles['size-2']]: size === '2',
        [styles['size-3']]: size === '3',
        [styles['size-4']]: size === '4',
      })}
      {...props}
    >
      <div className={styles.CardInner}>{children}</div>
    </div>
  )
);

Card.displayName = 'Card';
