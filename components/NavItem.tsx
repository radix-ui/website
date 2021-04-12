import React from 'react';
import NextLink from 'next/link';
import { Badge, Box, Text } from '@modulz/design-system';
import { FrontMatter } from '../types';

type NavItemProps = {
  children: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  href: string;
};

export function NavItem({ children, active, disabled, href, ...props }: NavItemProps) {
  const isExternal = href.startsWith('http');

  return (
    <Box as="li" css={{ display: 'block' }}>
      <Box
        as={isExternal || disabled ? 'span' : (NextLink as any)}
        {...(isExternal || disabled ? {} : { href, passHref: true })}
      >
        <Box
          {...props}
          {...(isExternal && !disabled ? { href, target: '_blank' } : {})}
          as={disabled ? 'div' : 'a'}
          css={{
            textDecoration: 'none',
            color: disabled ? '$gray800' : '$hiContrast',
            display: 'flex',
            alignItems: 'center',
            py: '$2',
            px: '$5',
            backgroundColor: active ? '$violet400' : 'transparent',
            userSelect: 'none',
            minHeight: '$6',
            transition: 'background-color 25ms linear',
            '&:not(div):hover': {
              backgroundColor: active ? '$violet400' : '$violet200',
            },
            '&:focus': {
              outline: 'none',
              boxShadow: '0 0 0 1px $colors$violet500',
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
    </Box>
  );
}

type BadgeProps = React.ComponentProps<typeof Badge>;

const badgeStatusToVariant: Record<FrontMatter['status'], BadgeProps['variant']> = {
  new: 'green',
  deprecated: 'yellow',
  soon: undefined,
};

const badgeStatusToText: Record<FrontMatter['status'], string> = {
  new: 'New',
  deprecated: 'Deprecated',
  soon: 'Coming soon',
};

type NavItemBadgeProps = BadgeProps & { status?: FrontMatter['status'] };

export const NavItemBadge = ({ status, ...props }: NavItemBadgeProps) => (
  <Badge {...props} variant={badgeStatusToVariant[status]} size="1" css={{ ml: '$2' }}>
    {badgeStatusToText[status]}
  </Badge>
);
