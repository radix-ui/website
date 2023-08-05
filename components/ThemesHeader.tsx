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
        href="/themes/components"
        highContrast={router.pathname.includes('/themes/components')}
      >
        Components
      </Link>
      <Link
        size="2"
        color="gray"
        href="/themes/docs/overview/getting-started"
        highContrast={router.pathname.includes('/themes/docs')}
      >
        Documentation
      </Link>
    </Header>
  );
};
