import React from 'react';
import NextLink from 'next/link';
import { Text, Heading, Box, Badge } from '@radix-ui/themes';
import { classNames } from '@lib/classNames';
import styles from './DocsNav.module.css';
import { useRouter } from 'next/router';
import { useCurrentPageSlug } from '@lib/useCurrentPageSlug';

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
          <Box py="2" px="3">
            <Heading as="h4" size="2">
              {section.label}
            </Heading>
          </Box>

          {section.pages.map((page) => (
            <DocsNavItem
              key={page.slug}
              href={`/${page.slug}`}
              active={currentPageSlug === page.slug}
            >
              <Text size="2">{page.title}</Text>

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
            </DocsNavItem>
          ))}
        </Box>
      ))}
    </Box>
  );
};

interface DocsNavItemProps {
  children: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  href: string;
  className?: string;
}

const DocsNavItem = ({ active, disabled, href, ...props }: DocsNavItemProps) => {
  const className = classNames(styles.DocsNavItem, active && styles.active);
  const isExternal = href.startsWith('http');

  if (disabled) {
    return <span className={className} {...props} />;
  }

  if (isExternal) {
    return <a className={className} href={href} target="_blank" rel="noopener" {...props} />;
  }

  return (
    <NextLink passHref href={href}>
      <a className={className} {...props} />
    </NextLink>
  );
};
