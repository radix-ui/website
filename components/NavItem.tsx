import React from 'react';
import NextLink from 'next/link';
import { Badge, BadgeProps, BadgeVariants, Box, Text } from '@modulz/design-system';
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
    <Box
      as={isExternal || disabled ? 'span' : NextLink}
      {...(isExternal || disabled ? {} : { href, passHref: true })}
    >
      <Box
        {...props}
        {...(isExternal && !disabled ? { href, target: '_blank' } : {})}
        as={disabled ? 'div' : 'a'}
        css={{
          textDecoration: 'none',
          color: disabled ? '$gray700' : '$hiContrast',
          display: 'flex',
          alignItems: 'center',
          py: '$2',
          px: '$5',
          backgroundColor: active ? '$blue400' : 'transparent',
          userSelect: 'none',
          minHeight: '$6',
          transition: 'background-color 25ms linear',
          '&:not(div):hover': {
            backgroundColor: active ? '$blue400' : '$blue200',
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

const badgeStatusToVariant: Record<FrontMatter['status'], BadgeVariants['variant']> = {
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
