import { Link } from '@radix-ui/themes';
import { Header, HeaderProps } from './Header';
import { useRouter } from 'next/router';
import { PrimitivesDocsSearch } from './PrimitivesDocsSearch';

export const PrimitivesDocsHeader = (props: HeaderProps) => {
  const router = useRouter();

  return (
    <Header {...props}>
      <Link
        size="2"
        color="gray"
        href="/docs/primitives"
        highContrast={router.pathname.includes('/docs/primitives')}
      >
        Documentation
      </Link>
      <Link
        size="2"
        color="gray"
        href="/case-studies"
        highContrast={router.pathname.includes('/case-studies')}
      >
        Case studies
      </Link>
    </Header>
  );
};
