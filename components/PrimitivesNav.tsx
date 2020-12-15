import React from 'react';
import { useRouter } from 'next/router';
import { Box, Separator } from '@modulz/design-system';
import { NavHeading } from './NavHeading';
import { NavItem, NavItemBadge } from './NavItem';
import { utilitiesPages, getPagesByNavGroup } from '../utils/primitives';

export function PrimitivesNav() {
  const router = useRouter();

  return (
    <Box css={{ mt: '$1' }}>
      <NavHeading>Primitives</NavHeading>
      <Box css={{ mt: '$2', mb: '$4' }}>
        <NavHeading>Overview</NavHeading>
        {getPagesByNavGroup('overview').map((page) => (
          <NavItem key={page.id} href={`/${page.id}`} active={router.pathname === `/${page.id}`}>
            {page.title}
          </NavItem>
        ))}
      </Box>

      <Box css={{ mb: '$4' }}>
        <NavHeading>Components</NavHeading>
        {getPagesByNavGroup('components').map((page) => (
          <NavItem
            key={page.id}
            href={`/${page.id}`}
            active={router.pathname === `/${page.id}`}
            disabled={page.status === 'soon'}
          >
            {page.title} {Boolean(page.status) && <NavItemBadge status={page.status} />}
          </NavItem>
        ))}
      </Box>

      <Box css={{ mb: '$4' }}>
        <NavHeading>Utilities</NavHeading>
        {getPagesByNavGroup('utilities').map((page) => (
          <NavItem
            key={page.id}
            href={`/${page.id}`}
            active={router.pathname === `/${page.id}`}
            disabled={page.status === 'soon'}
          >
            {page.title} {Boolean(page.status) && <NavItemBadge status={page.status} />}
          </NavItem>
        ))}
      </Box>
    </Box>
  );
}
