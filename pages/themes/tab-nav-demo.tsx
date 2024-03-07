'use client';

import * as React from 'react';
import NextLink from 'next/link';
import { useSearchParams } from 'next/navigation';
import { TabNavRoot, TabNavLink } from '@radix-ui/themes';

const TabNavDemo = React.forwardRef<
  React.ElementRef<typeof TabNavRoot>,
  React.ComponentPropsWithoutRef<typeof TabNavRoot>
>((props, forwardedRef) => {
  const params = useSearchParams();
  const tab = params.get('tab-nav');
  return (
    <TabNavRoot {...props} ref={forwardedRef}>
      <TabNavLink asChild active={tab === 'account' || tab === null}>
        <NextLink href="/themes/playground?tab-nav=account#tab-nav" scroll={false}>
          Account
        </NextLink>
      </TabNavLink>
      <TabNavLink asChild active={tab === 'documents'}>
        <NextLink href="/themes/playground?tab-nav=documents#tab-nav" scroll={false}>
          Documents
        </NextLink>
      </TabNavLink>
    </TabNavRoot>
  );
});
TabNavDemo.displayName = 'TabNavDemo';

export { TabNavDemo };
export default TabNavDemo;
