'use client';
import * as React from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { handleUrlChange } from '@utils/analytics';

export function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const url = searchParams ? pathname + '?' + searchParams : pathname;
  React.useEffect(() => {
    handleUrlChange(url);
  }, [url]);

  return null;
}
