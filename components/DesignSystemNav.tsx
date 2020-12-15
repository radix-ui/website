import React from 'react';
import { useRouter } from 'next/router';
import { Box, Separator } from '@modulz/design-system';
import { NavHeading } from './NavHeading';
import { NavItem, NavItemBadge } from './NavItem';
import { NavList } from './NavList';
import { overviewPages, componentsPages } from '../utils/designSystem';

export function DesignSystemNav() {
  const router = useRouter();

  return (
    <Box>
      <NavHeading as={'p' as any}>Design System</NavHeading>
      <Separator css={{ width: '100%', height: '1px', mt: '$2', mb: '$4' }} />
      <Box css={{ mb: '$4' }} as="nav" aria-labelledby="site-nav-overview">
        <NavHeading id="site-nav-overview">Overview</NavHeading>
        <NavList>
          {overviewPages.map((page) => (
            <NavItem key={page.id} href={`/${page.id}`} active={router.pathname === `/${page.id}`}>
              {page.title}
            </NavItem>
          ))}
        </NavList>
      </Box>

      <Box css={{ mb: '$4' }} as="nav" aria-labelledby="site-nav-components">
        <NavHeading id="site-nav-components">Components</NavHeading>
        <NavList>
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
        </NavList>
      </Box>

      <Box css={{ mb: '$4' }} as="nav" aria-labelledby="site-nav-products">
        <NavHeading id="site-nav-products">Products</NavHeading>
        <NavList>
          <NavItem href="/primitives/docs">Primitives</NavItem>
          <NavItem href="/icons/docs">Icons</NavItem>
        </NavList>
      </Box>
    </Box>
  );
}
