import React from 'react';
import { useRouter } from 'next/router';
import { Box, Separator } from '@modulz/design-system';
import { NavHeading } from './NavHeading';
import { NavItem, NavItemBadge } from './NavItem';
import { NavList } from './NavList';
import { overviewPages, componentsPages, utilitiesPages } from '../utils/primitives';

export function PrimitivesNav() {
  const router = useRouter();

  return (
    <Box css={{ mt: '$1' }}>
      <NavHeading as={'p' as any}>Primitives</NavHeading>
      <Box css={{ mt: '$2', mb: '$4' }} as="nav" aria-labelledby="site-nav-overview">
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
              href={`/${removeVersionFromId(page.id)}`}
              active={router.pathname.includes(page.id)}
              disabled={page.status === 'soon'}
            >
              {page.title} {Boolean(page.status) && <NavItemBadge status={page.status} />}
            </NavItem>
          ))}
        </NavList>
      </Box>

      <Box css={{ mb: '$4' }} as="nav" aria-labelledby="site-nav-utilities">
        <NavHeading id="site-nav-utilities">Utilities</NavHeading>
        <NavList>
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
        </NavList>
      </Box>
    </Box>
  );
}

// Package IDs always have the version at the end
// of the URL, as they can be released independently
// so in this case it's safe to remove the last part of the array
const removeVersionFromId = (id) => {
  const rootPathArray = id.split('/');
  rootPathArray.pop();
  return rootPathArray.join('/');
};
