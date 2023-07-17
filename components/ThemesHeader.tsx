import { Link } from '@radix-ui/themes';
import { Header, HeaderProps } from './Header';
import { useRouter } from 'next/router';

export const ThemesHeader = (props: HeaderProps) => {
  const router = useRouter();

  return (
    <Header {...props}>
      <Link
        size="2"
        color="gray"
        href="/docs/themes/overview/getting-started"
        highContrast={router.pathname.includes('/docs/themes')}
      >
        Documentation
      </Link>
    </Header>
  );
};
