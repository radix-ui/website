import { IconsHeader } from '@components/IconsHeader';
import { MobileMenu, MobileMenuProvider } from '@components/MobileMenu';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import { IconsNav } from '@components/icons/IconsNav';
import { IconsHero } from '@components/icons/IconsHero';
import { IconsPanel } from '@components/icons/IconsPanel';
import { iconsRoutes } from '@lib/iconsRoutes';
import { Box, Container, ScrollArea } from '@radix-ui/themes';
import { Menu } from '@components/icons/Menu';

export default function Home() {
  return (
    <MobileMenuProvider>
      <MobileMenu>
        <IconsHeader />
        <ScrollArea>
          <IconsNav routes={iconsRoutes} />
        </ScrollArea>
      </MobileMenu>

      <TitleAndMetaTags
        title="Radix Icons"
        description="A crisp set of 15×15 icons designed by the WorkOS team."
        image="default.png"
      />

      <IconsHeader ghost />

      <IconsHero />
      <Menu />
      <Container mx="5" pb="9">
        <IconsPanel />
      </Container>
    </MobileMenuProvider>
  );
}
