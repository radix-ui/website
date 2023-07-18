import { Link } from '@radix-ui/themes';
import { Header, HeaderProps } from './Header';
import { useRouter } from 'next/router';

export const ColorsHeader = (props: HeaderProps) => {
  const router = useRouter();

  return (
    <Header {...props}>
      <Link
        size="2"
        color="gray"
        href="/docs/colors"
        highContrast={router.pathname.includes('/docs/colors')}
      >
        Documentation
      </Link>
    </Header>
  );
};
