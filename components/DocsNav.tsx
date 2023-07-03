import React from 'react';
import NextLink from 'next/link';
import { Text, Heading, Box } from '@radix-ui/themes';
import { classNames } from '@lib/classNames';
import styles from './DocsNav.module.css';

export function NavHeading({ children, ...props }: { children: React.ReactNode }) {
  return (
    <Box py="2" px="3">
      <Heading asChild size="2" {...props}>
        <h4>{children}</h4>
      </Heading>
    </Box>
  );
}

type NavItemProps = {
  children: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  href: string;
  className?: string;
};

export const NavItemWrapper = React.forwardRef<any, NavItemProps>(function DocsNav(
  { active, disabled, href, ...props },
  forwardedRef
) {
  const isExternal = href.startsWith('http');
  if (disabled) {
    return <span {...props} ref={forwardedRef} />;
  } else if (isExternal) {
    return <a href={href} target="_blank" rel="noopener" {...props} ref={forwardedRef} />;
  }
  return (
    <NextLink passHref href={href}>
      <a {...props} />
    </NextLink>
  );
});

export function NavItem({ children, ...props }: NavItemProps) {
  return (
    <NavItemWrapper {...props} className={classNames(styles.NavItem)}>
      {children}
    </NavItemWrapper>
  );
}

export function NavItemTitle({ children }) {
  return (
    <Text asChild size="2">
      <span>{children}</span>
    </Text>
  );
}
