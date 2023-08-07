import { Link } from '@radix-ui/themes';
import { Header, HeaderProps } from './Header';
import { useRouter } from 'next/router';

export const ColorsHeader = (props: HeaderProps) => {
  const router = useRouter();

  return (
    <Header gitHubLink="https://github.com/radix-ui/colors" {...props}>
      <Link
        size="2"
        color="gray"
        href="/colors/docs"
        highContrast={router.pathname.includes('/colors/docs')}
      >
        Documentation
      </Link>
    </Header>
  );
};
