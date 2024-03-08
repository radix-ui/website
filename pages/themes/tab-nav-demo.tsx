'use client';

import * as React from 'react';
import NextLink from 'next/link';
import { useSearchParams } from 'next/navigation';
import { TabNav } from '@radix-ui/themes';

const TabNavDemo = React.forwardRef<
  React.ElementRef<typeof TabNav.Root>,
  React.ComponentPropsWithoutRef<typeof TabNav.Root>
>((props, forwardedRef) => {
  const params = useSearchParams();
  const tab = params.get('tab-nav');
  return (
    <TabNav.Root {...props} ref={forwardedRef}>
      <TabNav.Link asChild active={tab === 'account' || tab === null}>
        <NextLink href="/themes/playground?tab-nav=account#tab-nav" scroll={false}>
          Account
        </NextLink>
      </TabNav.Link>
      <TabNav.Link asChild active={tab === 'documents'}>
        <NextLink href="/themes/playground?tab-nav=documents#tab-nav" scroll={false}>
          Documents
        </NextLink>
      </TabNav.Link>
    </TabNav.Root>
  );
});
TabNavDemo.displayName = 'TabNavDemo';

export { TabNavDemo };
export default TabNavDemo;
