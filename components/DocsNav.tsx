import React from 'react';
import NextLink from 'next/link';
import { Text, Heading, Box, Badge } from '@radix-ui/themes';
import { classNames } from '@lib/classNames';
import styles from './DocsNav.module.css';
import { NavWrapper, useCurrentPageSlug } from './DocsPage';

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

export function NavItem({ children, active, ...props }: NavItemProps) {
  return (
    <NavItemWrapper {...props} className={classNames(styles.NavItem, active && styles.active)}>
      {children}
    </NavItemWrapper>
  );
}

export function NavItemTitle({ children }) {
  return <Text size="2">{children}</Text>;
}

interface DocsNavProps {
  routes: {
    label: string;
    pages: {
      title: string;
      slug: string;
      preview?: boolean;
      deprecated?: boolean;
    }[];
  }[];
}

export const DocsNav = ({ routes }: DocsNavProps) => {
  const currentPageSlug = useCurrentPageSlug();

  return (
    <Box pt="4" px="3" pb={{ initial: '5', sm: '9' }}>
      {routes.map((section) => (
        <Box key={section.label} mb="4">
          <NavHeading>{section.label}</NavHeading>

          {section.pages.map((page) => (
            <NavItem key={page.slug} href={`/${page.slug}`} active={currentPageSlug === page.slug}>
              <NavItemTitle>{page.title}</NavItemTitle>
              {page.preview && (
                <Badge color="blue" ml="2">
                  Preview
                </Badge>
              )}
              {page.deprecated && (
                <Badge color="yellow" ml="2">
                  Deprecated
                </Badge>
              )}
            </NavItem>
          ))}
        </Box>
      ))}
    </Box>
  );
};
