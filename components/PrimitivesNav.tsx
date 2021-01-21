import React from 'react';
import { useRouter } from 'next/router';
import { Box, Separator } from '@modulz/design-system';
import { NavHeading } from './NavHeading';
import { NavItem, NavItemBadge } from './NavItem';
import { NavList } from './NavList';
import {
  overviewPages,
  componentsPages,
  utilitiesPages,
  removeVersionFromId,
} from '../utils/primitives';

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
          {componentsPages.map((page) => {
            const idWithoutVersion = removeVersionFromId(page.version, page.id);
            return (
              <NavItem
                key={page.id}
                href={`/${idWithoutVersion}`}
                active={router.pathname.includes(idWithoutVersion)}
                disabled={page.status === 'soon'}
              >
                {page.title} {Boolean(page.status) && <NavItemBadge status={page.status} />}
              </NavItem>
            );
          })}
        </NavList>
      </Box>

      <Box css={{ mb: '$4' }} as="nav" aria-labelledby="site-nav-utilities">
        <NavHeading id="site-nav-utilities">Utilities</NavHeading>
        <NavList>
          {utilitiesPages.map((page) => {
            const idWithoutVersion = removeVersionFromId(page.version, page.id);
            return (
              <NavItem
                key={page.id}
                href={`/${idWithoutVersion}`}
                active={router.pathname.includes(idWithoutVersion)}
                disabled={page.status === 'soon'}
              >
                {page.title} {Boolean(page.status) && <NavItemBadge status={page.status} />}
              </NavItem>
            );
          })}
        </NavList>
      </Box>
    </Box>
  );
}
