import React from 'react';
import NextLink from 'next/link';
import { Text, Heading, Box, Badge, Flex } from '@radix-ui/themes';
import { classNames } from '@lib/classNames';
import styles from './DocsNav.module.css';
import { useCurrentPageSlug } from '@lib/useCurrentPageSlug';

interface DocsNavProps {
  routes: {
    label?: string;
    pages: {
      title: string;
      slug: string;
      icon?: React.ReactNode;
      preview?: boolean;
      deprecated?: boolean;
    }[];
  }[];
}

export const DocsNav = ({ routes }: DocsNavProps) => {
  const currentPageSlug = useCurrentPageSlug();

  return (
    <Box>
      {routes.map((section, i) => (
        <Box key={section.label ?? i} mb="4">
          {section.label && (
            <Box py="2" px="3">
              <Heading as="h4" size={{ initial: '3', md: '2' }}>
                {section.label}
              </Heading>
            </Box>
          )}

          {section.pages.map((page) => (
            <DocsNavItem
              key={page.slug}
              href={page.slug}
              active={currentPageSlug === page.slug}
            >
              <Flex gap="2" align="center">
                {page.icon}
                <Text size={{ initial: '3', md: '2' }}>{page.title}</Text>
              </Flex>

              {page.preview && (
                <Badge ml="2" color="blue" radius="full">
                  Preview
                </Badge>
              )}

              {page.deprecated && (
                <Badge ml="2" color="yellow" radius="full">
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
    <NextLink passHref legacyBehavior href={`/${href}`}>
      <a className={className} {...props} />
    </NextLink>
  );
};
