import React from 'react';
import { useRouter } from 'next/router';
import { Box, Separator } from '@modulz/design-system';
import { NavHeading } from './NavHeading';
import { NavItem, NavItemBadge } from './NavItem';
import { overviewPages, componentsPages, utilitiesPages } from '../utils/primitives';

export function PrimitivesNav() {
  const router = useRouter();

  return (
    <Box>
      <NavHeading>Primitives</NavHeading>
      <Separator css={{ width: '100%', height: '1px', mt: '$2', mb: '$4' }} />
      <Box css={{ mb: '$4' }}>
        <NavHeading>Overview</NavHeading>
        {overviewPages.map((page) => (
          <NavItem
            key={page.id}
            href={`/${page.id}`}
            active={router.pathname === `/${page.id}`}>
            {page.title}
          </NavItem>
        ))}
      </Box>

      <Box css={{ mb: '$4' }}>
        <NavHeading>Components</NavHeading>
        {componentsPages.map((page) => (
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
        {utilitiesPages.map((page) => (
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
        <NavHeading>Products</NavHeading>
        <NavItem href="/design-system/docs">Design System</NavItem>
        <NavItem href="/icons/docs">Icons</NavItem>
      </Box>
    </Box>
  );
}
