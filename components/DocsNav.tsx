import React from 'react';
import NextLink from 'next/link';
import { Text, Box } from '@modulz/design-system';

export function NavHeading({ children, ...props }: { children: React.ReactNode }) {
  return (
    <Text
      as="h4"
      size="3"
      css={{ fontWeight: 500, px: '$3', py: '$2', color: 'var(--color-text, $hiContrast)' }}
      {...props}
    >
      {children}
    </Text>
  );
}

type NavItemProps = {
  children: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  href: string;
};

export function NavItem({ children, active, disabled, href, ...props }: NavItemProps) {
  const isExternal = href.startsWith('http');

  return (
    <Box
      as={isExternal || disabled ? 'span' : (NextLink as any)}
      {...(isExternal || disabled ? {} : { href, passHref: true })}
    >
      <Box
        {...props}
        {...(isExternal ? { href, target: '_blank' } : {})}
        as={disabled ? 'div' : 'a'}
        css={{
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none',
          color: disabled ? 'var(--gray-10, $gray10)' : 'var(--gray-12, $hiContrast)',
          py: '$2',
          px: '$3',
          backgroundColor: active ? 'var(--accent-5, $violet5)' : 'transparent',
          borderRadius: 9999,
          userSelect: 'none',
          minHeight: '$6',
          transition: 'background-color 50ms linear',
          ...(disabled ? { pointerEvents: 'none' } : {}),
          '&:not(:last-of-type)': {
            mb: 1,
          },
          '&:hover': {
            backgroundColor: active ? 'var(--accent-5, $violet5)' : 'var(--accent-4, $violet4)',
          },
          '&:focus': {
            outline: 'none',
            boxShadow: 'inset 0 0 0 1px var(--accent-7, $colors$violet7)',
          },
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export function NavItemTitle({ children }) {
  return (
    <Text size="2" css={{ color: 'inherit', lineHeight: '1' }}>
      {children}
    </Text>
  );
}
