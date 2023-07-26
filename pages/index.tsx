import { Box, ScrollArea, Theme } from '@radix-ui/themes';
import '@radix-ui/themes/dist/index.css';
import * as React from 'react';
import Head from 'next/head';
import { ThemesHeader } from '@components/ThemesHeader';
import { ThemesHero } from '@components/ThemesHero';
import { ExampleThemesDashboard } from '@components/ExampleThemesDashboard';
import { MagicCurtain } from '@components/MagicCurtain';
import { ExampleThemesEcommerce } from '@components/ExampleThemesEcommerce';
import { ExampleThemesMusicApp } from '@components/ExampleThemesMusicApp';
import { ArrowRightIcon, ReaderIcon } from '@radix-ui/react-icons';
import { DocsNav } from '@components/DocsNav';
import { themesRoutes } from '@lib/themesRoutes';
import { MobileMenu, MobileMenuProvider } from '@components/MobileMenu';
import { useTheme } from 'next-themes';

const text = `
  Beautiful, open source components for building modern and maintanable apps. Just import and go.
`;

export default function ThemesHome() {
  const { resolvedTheme } = useTheme();
  const inverted = resolvedTheme === 'dark' ? 'light' : 'dark';

  return (
    <MobileMenuProvider>
      <Head>
        <meta name="theme-color" content="#FDFCFD" />
        <style>{`
          :root, .light-theme {
            --themes-hero-blue-text-color: var(--indigo-12);
            --themes-hero-blue-soft-color: var(--indigo-5);
            --themes-hero-blue-contrast-color: var(--indigo-1);
            --themes-hero-blue-tagline-title-color-1: #87a3ff;
            --themes-hero-blue-tagline-title-color-2: #b8adee;
            --themes-hero-blue-tagline-title-color-3: #aba9fc;
            --themes-hero-blue-tagline-title-color-4: #e787ff;
            --themes-hero-blue-tagline-title-color-1: color(display-p3 0.55 0.64 1 / 1);
            --themes-hero-blue-tagline-title-color-2: #b8adee;
            --themes-hero-blue-tagline-title-color-3: color(display-p3 0.67 0.66 1 / 1);
            --themes-hero-blue-tagline-title-color-4: color(display-p3 0.9 0.55 1 / 1);

            --themes-hero-green-text-color: var(--sage-12);
            --themes-hero-green-soft-color: var(--sky-5);
            --themes-hero-green-contrast-color: var(--sage-1);
            --themes-hero-green-tagline-title-color-1: #00ff71;
            --themes-hero-green-tagline-title-color-2: #00e9d6;
            --themes-hero-green-tagline-title-color-3: #00f9ff;
            --themes-hero-green-tagline-title-color-4: #a3edff;
            --themes-hero-green-tagline-title-color-1: color(display-p3 0 1 0.51);
            --themes-hero-green-tagline-title-color-2: color(display-p3 0.26 0.9 0.84);
            --themes-hero-green-tagline-title-color-3: color(display-p3 0.03 0.96 1);
            --themes-hero-green-tagline-title-color-4: color(display-p3 0.7 0.92 1);

            --themes-hero-red-text-color: var(--mauve-12);
            --themes-hero-red-soft-color: var(--tomato-5);
            --themes-hero-red-contrast-color: var(--mauve-1);
            --themes-hero-red-tagline-title-color-1: #ff0000;
            --themes-hero-red-tagline-title-color-2: #ff8283;
            --themes-hero-red-tagline-title-color-3: #ff9583;
            --themes-hero-red-tagline-title-color-4: #ff9bbd;
            --themes-hero-red-tagline-title-color-1: color(display-p3 1 0.08 0);
            --themes-hero-red-tagline-title-color-2: color(display-p3 1 0.54 0.53);
            --themes-hero-red-tagline-title-color-3: color(display-p3 1 0.61 0.53);
            --themes-hero-red-tagline-title-color-4: color(display-p3 1 0.63 0.74);
          }

          .dark-theme {
            --themes-hero-blue-text-color: var(--indigo-12);
            --themes-hero-blue-soft-color: #27376d;
            --themes-hero-blue-contrast-color: var(--indigo-1);
            --themes-hero-blue-tagline-title-color-1: #acbcff;
            --themes-hero-blue-tagline-title-color-2: #8299f4;
            --themes-hero-blue-tagline-title-color-3: #d971ab;
            --themes-hero-blue-tagline-title-color-4: var(--red-11);
            --themes-hero-blue-tagline-title-color-1: color(display-p3 0.69 0.74 1 / 1);
            --themes-hero-blue-tagline-title-color-2: color(display-p3 0.53 0.6 1 / 1);
            --themes-hero-blue-tagline-title-color-3: #d971ab;
            --themes-hero-blue-tagline-title-color-4: color(display-p3 1 0.43 0.43 / 1);

            --themes-hero-green-text-color: var(--sage-12);
            --themes-hero-green-soft-color: var(--mint-7);
            --themes-hero-green-contrast-color: var(--sage-1);
            --themes-hero-green-tagline-title-color-1: #00ff71;
            --themes-hero-green-tagline-title-color-2: #00e99d;
            --themes-hero-green-tagline-title-color-3: #74f0e6;
            --themes-hero-green-tagline-title-color-4: #00ecff;
            --themes-hero-green-tagline-title-color-1: color(display-p3 0 1 0.51);
            --themes-hero-green-tagline-title-color-2: color(display-p3 0.26 0.9 0.64);
            --themes-hero-green-tagline-title-color-3: color(display-p3 0.58 0.93 0.9);
            --themes-hero-green-tagline-title-color-4: color(display-p3 0.12 0.91 1);

            --themes-hero-red-text-color: var(--pink-12);
            --themes-hero-red-soft-color: #713949;
            --themes-hero-red-contrast-color: var(--pink-1);
            --themes-hero-red-tagline-title-color-1: #ff4b44;
            --themes-hero-red-tagline-title-color-2: #ff82a6;
            --themes-hero-red-tagline-title-color-3: #ff9681;
            --themes-hero-red-tagline-title-color-4: #ff965d;
            --themes-hero-red-tagline-title-color-1: color(display-p3 1 0.36 0.31);
            --themes-hero-red-tagline-title-color-2: color(display-p3 1 0.54 0.65);
            --themes-hero-red-tagline-title-color-3: color(display-p3 1 0.61 0.53);
            --themes-hero-red-tagline-title-color-4: color(display-p3 1 0.61 0.41);
          }
        `}</style>
      </Head>

      <MobileMenu>
        <ThemesHeader />
        <ScrollArea>
          <DocsNav routes={themesRoutes} />
        </ScrollArea>
      </MobileMenu>

      <MagicCurtain.Root>
        <MagicCurtain.Item defaultVisibility="visible-in-front">
          <Theme
            className="radix-themes-example"
            accentScale="indigo"
            grayScale="mauve"
            applyBackgroundColor={false}
          >
            <Box height="0">
              <ThemesHeader />
            </Box>
            <ThemesHero.Root color="blue">
              <ThemesHero.Tagline>
                <ThemesHero.Title>Build faster</ThemesHero.Title>
                <ThemesHero.Text>{text}</ThemesHero.Text>
                <ThemesHero.Actions>
                  <ThemesHero.Button variant="solid" href="/themes/docs/overview/getting-started">
                    Get started
                    <ArrowRightIcon />
                  </ThemesHero.Button>
                  <ThemesHero.Button variant="soft" href="/themes/docs/theme/overview">
                    Read docs
                    <ReaderIcon />
                  </ThemesHero.Button>
                </ThemesHero.Actions>
              </ThemesHero.Tagline>
              <ThemesHero.Showcase>
                <ExampleThemesDashboard />
              </ThemesHero.Showcase>
            </ThemesHero.Root>
          </Theme>
        </MagicCurtain.Item>

        <MagicCurtain.Item>
          <Theme
            className="radix-themes-example"
            accentScale="cyan"
            grayScale="gray"
            textColor="auto"
            appearance={inverted}
            applyBackgroundColor={false}
          >
            <Box height="0">
              <ThemesHeader />
            </Box>
            <ThemesHero.Root color="green">
              <ThemesHero.Tagline>
                <ThemesHero.Title>Build better</ThemesHero.Title>
                <ThemesHero.Text>{text}</ThemesHero.Text>
                <ThemesHero.Actions>
                  <ThemesHero.Button variant="solid" href="/themes/docs/overview/getting-started">
                    Get started
                    <ArrowRightIcon />
                  </ThemesHero.Button>
                  <ThemesHero.Button variant="soft" href="/themes/docs/theme/overview">
                    Read docs
                    <ReaderIcon />
                  </ThemesHero.Button>
                </ThemesHero.Actions>
              </ThemesHero.Tagline>
              <ThemesHero.Showcase>
                <Theme
                  accentScale="gray"
                  applyBackgroundColor={false}
                  className="radix-themes-example"
                >
                  <ExampleThemesEcommerce />
                </Theme>
              </ThemesHero.Showcase>
            </ThemesHero.Root>
          </Theme>
        </MagicCurtain.Item>

        <MagicCurtain.Item>
          <Theme
            className="radix-themes-example"
            accentScale="red"
            grayScale="slate"
            textColor="auto"
            applyBackgroundColor={false}
          >
            <Box height="0">
              <ThemesHeader />
            </Box>
            <ThemesHero.Root color="red">
              <ThemesHero.Tagline>
                <ThemesHero.Title>Build hotter</ThemesHero.Title>
                <ThemesHero.Text>{text}</ThemesHero.Text>
                <ThemesHero.Actions>
                  <ThemesHero.Button variant="solid" href="/themes/docs/overview/getting-started">
                    Get started
                    <ArrowRightIcon />
                  </ThemesHero.Button>
                  <ThemesHero.Button variant="soft" href="/themes/docs/theme/overview">
                    Read docs
                    <ReaderIcon />
                  </ThemesHero.Button>
                </ThemesHero.Actions>
              </ThemesHero.Tagline>
              <ThemesHero.Showcase>
                <ExampleThemesMusicApp />
              </ThemesHero.Showcase>
            </ThemesHero.Root>
          </Theme>
        </MagicCurtain.Item>

        <MagicCurtain.Item>
          <Theme
            className="radix-themes-example"
            accentScale="indigo"
            grayScale="mauve"
            appearance={inverted}
            applyBackgroundColor={false}
          >
            <Box height="0">
              <ThemesHeader />
            </Box>
            <ThemesHero.Root color="blue">
              <ThemesHero.Tagline>
                <ThemesHero.Title>Build nicer</ThemesHero.Title>
                <ThemesHero.Text>{text}</ThemesHero.Text>
                <ThemesHero.Actions>
                  <ThemesHero.Button variant="solid" href="/themes/docs/overview/getting-started">
                    Get started
                    <ArrowRightIcon />
                  </ThemesHero.Button>
                  <ThemesHero.Button variant="soft" href="/themes/docs/theme/overview">
                    Read docs
                    <ReaderIcon />
                  </ThemesHero.Button>
                </ThemesHero.Actions>
              </ThemesHero.Tagline>
              <ThemesHero.Showcase>
                <ExampleThemesDashboard />
              </ThemesHero.Showcase>
            </ThemesHero.Root>
          </Theme>
        </MagicCurtain.Item>

        <MagicCurtain.Item>
          <Theme
            className="radix-themes-example"
            accentScale="cyan"
            grayScale="gray"
            textColor="auto"
            applyBackgroundColor={false}
          >
            <Box height="0">
              <ThemesHeader />
            </Box>
            <ThemesHero.Root color="green">
              <ThemesHero.Tagline>
                <ThemesHero.Title>Build cooler</ThemesHero.Title>
                <ThemesHero.Text>{text}</ThemesHero.Text>
                <ThemesHero.Actions>
                  <ThemesHero.Button variant="solid" href="/themes/docs/overview/getting-started">
                    Get started
                    <ArrowRightIcon />
                  </ThemesHero.Button>
                  <ThemesHero.Button variant="soft" href="/themes/docs/theme/overview">
                    Read docs
                    <ReaderIcon />
                  </ThemesHero.Button>
                </ThemesHero.Actions>
              </ThemesHero.Tagline>
              <ThemesHero.Showcase>
                <Theme
                  accentScale="gray"
                  applyBackgroundColor={false}
                  className="radix-themes-example"
                >
                  <ExampleThemesEcommerce />
                </Theme>
              </ThemesHero.Showcase>
            </ThemesHero.Root>
          </Theme>
        </MagicCurtain.Item>

        <MagicCurtain.Item>
          <Theme
            className="radix-themes-example"
            accentScale="red"
            grayScale="slate"
            textColor="auto"
            appearance={inverted}
            applyBackgroundColor={false}
          >
            <Box height="0">
              <ThemesHeader />
            </Box>
            <ThemesHero.Root color="red">
              <ThemesHero.Tagline>
                <ThemesHero.Title>Build more</ThemesHero.Title>
                <ThemesHero.Text>{text}</ThemesHero.Text>
                <ThemesHero.Actions>
                  <ThemesHero.Button variant="solid" href="/themes/docs/overview/getting-started">
                    Get started
                    <ArrowRightIcon />
                  </ThemesHero.Button>
                  <ThemesHero.Button variant="soft" href="/themes/docs/theme/overview">
                    Read docs
                    <ReaderIcon />
                  </ThemesHero.Button>
                </ThemesHero.Actions>
              </ThemesHero.Tagline>
              <ThemesHero.Showcase>
                <ExampleThemesMusicApp />
              </ThemesHero.Showcase>
            </ThemesHero.Root>
          </Theme>
        </MagicCurtain.Item>
      </MagicCurtain.Root>
    </MobileMenuProvider>
  );
}
