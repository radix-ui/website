import React from 'react';
import NextLink from 'next/link';
import { Box, Text } from '@modulz/design-system';

type NavItemProps = { children: React.ReactNode; active?: boolean; href: string };

export function NavItem({ children, active, href, ...props }: NavItemProps) {
  const isExternal = href.startsWith('http');

  return (
    <Box as={isExternal ? 'span' : NextLink} {...(isExternal ? {} : { href, passHref: true })}>
      <Box
        {...props}
        {...(isExternal ? { href, target: '_blank' } : {})}
        as="a"
        css={{
          textDecoration: 'none',
          color: '$hiContrast',
          display: 'block',
          py: '$2',
          px: '$5',
          backgroundColor: active ? '$blue300' : 'transparent',
          userSelect: 'none',
          minHeight: '$6',
          transition: 'background-color 50ms linear',
          ':hover': {
            backgroundColor: active ? '$blue300' : '$blue200',
          },
        }}
      >
        <Text
          size="2"
          css={{
            color: 'inherit',
            lineHeight: '1',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {children}
        </Text>
      </Box>
    </Box>
  );
}
