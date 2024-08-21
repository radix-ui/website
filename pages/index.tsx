import { Box, Flex, Theme, Text, Button, Section, Link, Badge } from '@radix-ui/themes';
import * as React from 'react';
import NextLink from 'next/link';
import { ThemesHeader } from '@components/ThemesHeader';
import { ExampleThemesDashboard } from '@components/ExampleThemesDashboard';
import { MagicCurtain } from '@components/MagicCurtain';
import { ExampleThemesEcommerce } from '@components/ExampleThemesEcommerce';
import { ExampleThemesMusicApp } from '@components/ExampleThemesMusicApp';
import { MobileMenuProvider } from '@components/MobileMenu';
import { useTheme } from 'next-themes';
import { SerifHeading } from '@components/SerifHeading';
import { ThemesHeroLayout } from '@components/ThemesHeroLayout';
import { ThemesMobileMenu } from '@components/ThemesMobileMenu';
import { ArrowRightIcon, GridIcon } from '@radix-ui/react-icons';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import { CodeBlock } from '@components/CodeBlock';

export default function ThemesHome() {
  const { resolvedTheme } = useTheme();
  const inverted = resolvedTheme === 'dark' ? 'light' : 'dark';

  return (
    <MobileMenuProvider>
      <TitleAndMetaTags
        title="Radix UI"
        description="Components, icons, and colors for building high‑quality, accessible UI. Free and open-source."
        image="themes.png"
      />

      <ThemesMobileMenu />

      <MagicCurtain.Root>
        <MagicCurtain.Item defaultVisibility="visible">
          <Theme hasBackground accentColor="indigo" grayColor="slate">
            <Box height="0">
              <ThemesHeader ghost />
            </Box>

            <ThemesHeroLayout.Root>
              <ThemesHeroLayout.Background>
                <BackgroundImage style={indigoBackgroundImageStyle} id="1" />
              </ThemesHeroLayout.Background>

              <ThemesHeroLayout.Main>
                <MainContent />
              </ThemesHeroLayout.Main>

              <ThemesHeroLayout.Showcase>
                <Theme className="radix-themes-default-fonts" hasBackground={false}>
                  <ExampleThemesDashboard align="start" focusable={false} />
                </Theme>
              </ThemesHeroLayout.Showcase>
            </ThemesHeroLayout.Root>
          </Theme>
        </MagicCurtain.Item>

        <MagicCurtain.Item>
          <Theme hasBackground accentColor="indigo" grayColor="slate" appearance={inverted}>
            <Box height="0">
              <ThemesHeader ghost />
            </Box>

            <ThemesHeroLayout.Root>
              <ThemesHeroLayout.Background>
                <BackgroundImage style={indigoBackgroundImageStyle} id="4" />
              </ThemesHeroLayout.Background>

              <ThemesHeroLayout.Main>
                <MainContent />
              </ThemesHeroLayout.Main>

              <ThemesHeroLayout.Showcase>
                <Theme className="radix-themes-default-fonts" hasBackground={false}>
                  <ExampleThemesDashboard align="start" focusable={false} />
                </Theme>
              </ThemesHeroLayout.Showcase>
            </ThemesHeroLayout.Root>
          </Theme>
        </MagicCurtain.Item>

        <MagicCurtain.Item>
          <Theme hasBackground accentColor="cyan" grayColor="gray">
            <Box height="0">
              <ThemesHeader ghost />
            </Box>

            <ThemesHeroLayout.Root>
              <ThemesHeroLayout.Background>
                <BackgroundImage style={tealBackgroundImageStyle} id="5" />
              </ThemesHeroLayout.Background>

              <ThemesHeroLayout.Main>
                <MainContent />
              </ThemesHeroLayout.Main>

              <ThemesHeroLayout.Showcase>
                <Theme
                  className="radix-themes-default-fonts"
                  accentColor="gray"
                  grayColor="gray"
                  hasBackground={false}
                >
                  <ExampleThemesEcommerce align="start" focusable={false} />
                </Theme>
              </ThemesHeroLayout.Showcase>
            </ThemesHeroLayout.Root>
          </Theme>
        </MagicCurtain.Item>

        <MagicCurtain.Item>
          <Theme hasBackground accentColor="teal" grayColor="gray" appearance={inverted}>
            <Box height="0">
              <ThemesHeader ghost />
            </Box>

            <ThemesHeroLayout.Root>
              <ThemesHeroLayout.Background>
                <BackgroundImage style={tealBackgroundImageStyle} id="2" />
              </ThemesHeroLayout.Background>

              <ThemesHeroLayout.Main>
                <MainContent />
              </ThemesHeroLayout.Main>

              <ThemesHeroLayout.Showcase>
                <Theme
                  className="radix-themes-default-fonts"
                  accentColor="gray"
                  hasBackground={false}
                >
                  <ExampleThemesEcommerce align="start" focusable={false} />
                </Theme>
              </ThemesHeroLayout.Showcase>
            </ThemesHeroLayout.Root>
          </Theme>
        </MagicCurtain.Item>

        <MagicCurtain.Item>
          <Theme hasBackground accentColor="red" grayColor="slate">
            <Box height="0">
              <ThemesHeader ghost />
            </Box>

            <ThemesHeroLayout.Root>
              <ThemesHeroLayout.Background>
                <BackgroundImage style={redBackgroundImageStyle} id="3" />
              </ThemesHeroLayout.Background>

              <ThemesHeroLayout.Main>
                <MainContent />
              </ThemesHeroLayout.Main>

              <ThemesHeroLayout.Showcase>
                <Theme className="radix-themes-default-fonts" hasBackground={false}>
                  <ExampleThemesMusicApp align="start" focusable={false} />
                </Theme>
              </ThemesHeroLayout.Showcase>
            </ThemesHeroLayout.Root>
          </Theme>
        </MagicCurtain.Item>

        <MagicCurtain.Item>
          <Theme hasBackground accentColor="red" grayColor="slate" appearance={inverted}>
            <Box height="0">
              <ThemesHeader ghost />
            </Box>

            <ThemesHeroLayout.Root>
              <ThemesHeroLayout.Background>
                <BackgroundImage style={redBackgroundImageStyle} id="6" />
              </ThemesHeroLayout.Background>

              <ThemesHeroLayout.Main>
                <MainContent />
              </ThemesHeroLayout.Main>

              <ThemesHeroLayout.Showcase>
                <Theme className="radix-themes-default-fonts" hasBackground={false}>
                  <ExampleThemesMusicApp align="start" focusable={false} />
                </Theme>
              </ThemesHeroLayout.Showcase>
            </ThemesHeroLayout.Root>
          </Theme>
        </MagicCurtain.Item>

        <Theme appearance="light" hasBackground={false}>
          <MagicCurtain.Controls
            images={resolvedTheme === 'light' ? previewImages : previewImagesDarkMode}
          />
        </Theme>
      </MagicCurtain.Root>
    </MobileMenuProvider>
  );
}

const previewImages = [
  'https://workos.imgix.net/images/2f5a1e4b-39c5-4604-b278-a219f9898159.png?auto=format&fit=clip&q=80&w=496',
  'https://workos.imgix.net/images/5516f53e-0b29-4fc2-92d8-74566aa91976.png?auto=format&fit=clip&q=80&w=496',
  'https://workos.imgix.net/images/59b77353-32f4-4176-ac36-8299ed7c1236.png?auto=format&fit=clip&q=80&w=496',
  'https://workos.imgix.net/images/bc735904-1193-48a0-bcc6-37c9b73312fa.png?auto=format&fit=clip&q=80&w=496',
  'https://workos.imgix.net/images/bde22677-6a86-495a-baf9-7328e8f52401.png?auto=format&fit=clip&q=80&w=496',
  'https://workos.imgix.net/images/f6c9aea7-8bcc-458a-8531-3b36458dc031.png?auto=format&fit=clip&q=80&w=496',
];

const previewImagesDarkMode = [
  previewImages[1],
  previewImages[0],
  previewImages[3],
  previewImages[2],
  previewImages[5],
  previewImages[4],
];

const MainContent = () => (
  <Box>
    <Section
      size={{ initial: '2', md: '4', lg: '2' }}
      pb={{ initial: '4', lg: '7' }}
      mt={{ lg: 'max(-160px, min(0px, calc(-0.2 * (100vh - 800px)))' }}
    >
      <Box>
        <Flex align="center" gap="2" mb="6">
          <Badge asChild size="3" radius="full">
            <NextLink href="/blog/themes-3">
              Read about Radix Themes 3.0
              <ArrowRightIcon width="15" height="15" style={{ marginLeft: -2 }} />
            </NextLink>
          </Badge>
        </Flex>
        <Box display={{ lg: 'none' }}>
          <SerifHeading mb="3">
            Start building
            <br />
            your app now
          </SerifHeading>
        </Box>
        <Box display={{ initial: 'none', lg: 'block' }}>
          <SerifHeading
            mb="4"
            style={{ lineHeight: 0.9, '--heading-font-size-adjust': 1.3 } as React.CSSProperties}
          >
            Start building
            <br />
            your app now
          </SerifHeading>
        </Box>
      </Box>

      <Box style={{ maxWidth: 500 }}>
        <Text size={{ initial: '4', xs: '5' }}>
          <Text as="p" mb="5" color="gray">
            An open source component library optimized for fast development, easy maintenance,
            and accessibility. Just import and go—no configuration required.
          </Text>

          <Box mb="5">
            <CodeBlock.Root
              style={
                {
                  '--code-block-background': 'var(--color-panel-solid)',
                } as React.CSSProperties
              }
            >
              <CodeBlock.Content>
                <CodeBlock.Pre>
                  <CodeBlock.Code language="jsx">{codeExample}</CodeBlock.Code>
                </CodeBlock.Pre>
              </CodeBlock.Content>
            </CodeBlock.Root>
          </Box>
        </Text>

        <Flex gap="4" direction={{ initial: 'column', xs: 'row' }}>
          <NextLink href="/themes/docs/overview/getting-started" passHref legacyBehavior>
            <Button
              asChild
              size={{ initial: '3', xs: '4' }}
              color="gray"
              highContrast
              style={{ flexGrow: 1 }}
            >
              <a>
                Get started
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentcolor"
                  style={{ opacity: 1, marginRight: -3 }}
                >
                  <path d="M6.39205 11.6023L5.36932 10.5909L8.92045 7.03977H0V5.5625H8.92045L5.36932 2.01705L6.39205 1L11.6932 6.30114L6.39205 11.6023Z" />
                </svg>
              </a>
            </Button>
          </NextLink>
          <NextLink href="/themes/playground" passHref legacyBehavior>
            <Button
              asChild
              size={{ initial: '3', xs: '4' }}
              variant="soft"
              highContrast
              style={{ flexGrow: 1 }}
            >
              <a>
                <GridIcon width="18" height="18" style={{ marginTop: 1 }} />
                Playground
              </a>
            </Button>
          </NextLink>
        </Flex>
      </Box>

      <ThemesHeroLayout.Controls>
        <Text weight="bold" size="3" style={{ pointerEvents: 'none' }}>
          Live examples
        </Text>
        <Box mx="-1">
          <MagicCurtain.MirrorControls />
        </Box>
      </ThemesHeroLayout.Controls>
    </Section>
  </Box>
);

const indigoBackgroundImageStyle = {
  '--color-background-image-base': 'var(--color-background)',
  '--color-background-image-accent-1': 'var(--indigo-a7)',
  '--color-background-image-accent-2': 'var(--violet-6)',
  '--color-background-image-accent-3': 'var(--purple-9)',
  '--color-background-image-accent-4': 'var(--blue-5)',
  '--color-background-image-accent-5': 'var(--slate-1)',
  '--color-background-image-accent-6': 'var(--crimson-a5)',
  '--color-background-image-accent-7': 'var(--indigo-5)',
} as React.CSSProperties;

const tealBackgroundImageStyle = {
  '--color-background-image-base': 'var(--sage-1)',
  '--color-background-image-accent-1': 'var(--teal-a7)',
  '--color-background-image-accent-2': 'var(--mint-7)',
  '--color-background-image-accent-3': 'var(--green-9)',
  '--color-background-image-accent-4': 'var(--sky-5)',
  '--color-background-image-accent-5': 'var(--crimson-3)',
  '--color-background-image-accent-6': 'var(--mint-a5)',
  '--color-background-image-accent-7': 'var(--teal-5)',
} as React.CSSProperties;

const redBackgroundImageStyle = {
  '--color-background-image-base': 'var(--red-2)',
  '--color-background-image-accent-1': 'var(--crimson-a7)',
  '--color-background-image-accent-2': 'var(--red-1)',
  '--color-background-image-accent-3': 'var(--red-3)',
  '--color-background-image-accent-4': 'var(--red-7)',
  '--color-background-image-accent-5': 'var(--color-background)',
  '--color-background-image-accent-6': 'var(--red-a4)',
  '--color-background-image-accent-7': 'var(--red-5)',
} as React.CSSProperties;

// A couple other styles that work nicely if we need a variation of this background:
// - transformOrigin: 'center center',
//   transform: 'scaleX(-1) rotate(160deg)',
// - transformOrigin: 'center center',
//   transform: 'scaleY(-0.5) scaleX(-1) rotate(-15deg)',

const codeExample = `
import '@radix-ui/themes/styles.css';
import { Theme, Button } from '@radix-ui/themes'

export default () => (
  <Theme>
    <Button>Hey 👋</Button>
  </Theme>
)
`.trim();

const BackgroundImage = ({
  style,
  id = '0',
  ...props
}: React.ComponentProps<'svg'> & { id: string }) => (
  <svg
    width="2560"
    height="1920"
    viewBox="0 0 2560 1920"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ opacity: 0.5, ...style }}
    {...props}
  >
    <g>
      <path
        d="M3020.93 134.455C3124.79 173.824 3164.97 266.778 3110.66 342.074C2627.55 1011.9 1866.31 2517.63 1361.75 2752.01C-681.389 3429.21 -4156.79 2571.47 -2138.3 1425.38C-119.809 279.282 -1553.39 -218.348 -406.211 -990.94C930.008 -1890.85 2560.5 -40.0647 3020.93 134.455Z"
        fill={`url(#paint0_radial_37_453-${id})`}
      />
      <path
        d="M885.9 -99.2149L1864.74 271.797C1921.14 293.178 1961.34 331.784 1974.23 376.971L2135.2 941.153L2866.18 715.05C2924.72 696.941 2991.39 698.838 3047.8 720.218L4026.64 1091.23C4130.5 1130.6 4170.68 1223.55 4116.37 1298.85L3855.77 1660.16C3833.07 1691.63 3796.05 1716.44 3750.99 1730.38L2473.16 2125.63L2754.29 3110.94C2764.38 3146.29 2756.99 3183.09 2733.43 3214.9L2367.46 3708.79L1208.97 3269.68C1152.56 3248.3 1112.37 3209.7 1099.48 3164.51C816.824 2173.87 718.627 2080.16 290.681 580.294C250.811 440.558 316.198 358.62 338.898 327.148L599.499 -34.1638C653.807 -109.46 782.033 -138.584 885.9 -99.2149Z"
        fill={`url(#paint1_radial_37_453-${id})`}
      />
      <path
        d="M1597.13 169.785L2575.97 540.797C2632.38 562.177 2672.57 600.783 2685.46 645.97L2846.44 1210.15L3577.41 984.05C3635.96 965.94 3702.63 967.838 3759.03 989.218L4737.87 1360.23C4841.74 1399.6 4881.91 1492.55 4827.6 1567.85L4567 1929.16C4544.3 1960.63 4507.28 1985.44 4462.22 1999.38L3184.4 2394.63L3465.53 3379.94C3475.61 3415.29 3468.23 3452.09 3444.66 3483.9L3078.69 3977.79L1920.2 3538.68C1863.79 3517.3 1823.6 3478.7 1810.71 3433.51L1649.74 2869.33L918.759 3095.43C860.213 3113.54 793.545 3111.64 737.138 3090.26C737.138 3090.26 -278.857 2706.76 -70.6873 2151.46C137.482 1596.17 725.315 1866.25 1311.78 1684.85L1030.38 698.594C1020.45 663.816 1027.43 627.62 1050.13 596.148L1310.73 234.836C1365.04 159.54 1493.27 130.416 1597.13 169.785Z"
        fill={`url(#paint2_radial_37_453-${id})`}
      />
      <path
        d="M646.599 3987.93L-98.3711 1153.81L4970.66 -538.566L8169.17 3987.93H646.599Z"
        fill={`url(#paint3_radial_114_43-${id})`}
      />
      <path
        d="M793.654 3742.84L48.6836 908.72L5117.71 -783.656L8316.22 3742.84H793.654Z"
        fill={`url(#paint4_radial_114_43-${id})`}
      />
      <ellipse
        cx="2396.98"
        cy="275.232"
        rx="1699.15"
        ry="1558.77"
        fill={`url(#paint5_radial_114_43-${id})`}
      />
      <path
        opacity="0.5"
        d="M6290.25 3071.54L3745.51 4524.66L283.022 -523.642L4343.26 -4194.7L6290.25 3071.54Z"
        fill={`url(#paint6_radial_114_43-${id})`}
      />
      <path
        d="M3059.26 767.931C3338.11 1712.5 3585.77 2551.43 3864.61 3496C3891.25 3586.22 3837.42 3706.98 3744.38 3765.74C2803.8 4359.68 -787.932 5319.23 63.3068 2765.51C176.75 2425.18 313.694 2187.12 594.28 2175.25C874.865 2163.39 1279.76 2345.45 1646.71 2313.32C2175.9 2266.99 2044.14 1215.13 2396.11 992.875L2842.57 710.952C2935.61 652.201 3032.62 677.711 3059.26 767.931Z"
        fill={`url(#paint4_radial_37_453-${id})`}
      />
    </g>
    <defs>
      <radialGradient
        id={`paint3_radial_114_43-${id}`}
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(2922 2538.48) rotate(-117.986) scale(1898.15 3571.73)"
      >
        <stop stopColor="var(--color-background-image-base)" />
        <stop offset="0.822917" stopColor="var(--color-background-image-base)" />
        <stop offset="1" stopColor="var(--color-background-image-base)" stopOpacity="0" />
      </radialGradient>

      <radialGradient
        id={`paint4_radial_114_43-${id}`}
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(3069.05 2293.39) rotate(-117.986) scale(1898.15 3571.73)"
      >
        <stop stopColor="var(--color-background-image-base)" />
        <stop offset="0.822917" stopColor="var(--color-background-image-base)" />
        <stop offset="1" stopColor="var(--color-background-image-base)" stopOpacity="0" />
      </radialGradient>

      <radialGradient
        id={`paint5_radial_114_43-${id}`}
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(2994.87 275.232) rotate(118.839) scale(1779.46 2065.6)"
      >
        <stop
          offset="0.328125"
          stopColor="var(--color-background-image-accent-1)"
          stopOpacity="1"
        />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </radialGradient>

      <radialGradient
        id={`paint6_radial_114_43-${id}`}
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(3934.59 656.035) rotate(148.98) scale(1938.73 3648.08)"
      >
        <stop stopColor="var(--color-background-image-base)" />
        <stop offset="0.789375" stopColor="var(--color-background-image-base)" />
        <stop offset="1" stopColor="var(--color-background-image-base)" stopOpacity="0" />
      </radialGradient>

      <radialGradient
        id={`paint0_radial_37_453-${id}`}
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(-804.109 -2036.8) rotate(64.9401) scale(6436.87 6304.81)"
      >
        <stop stopColor="var(--color-background-image-base)" />
        <stop offset="0.0833333" stopColor="var(--color-background-image-accent-1)" />
        <stop offset="0.364583" stopColor="var(--color-background-image-accent-2)" />
        <stop offset="0.658041" stopColor="var(--color-background-image-base)" />
        <stop offset="0.798521" stopColor="var(--color-background-image-accent-3)" />
        <stop offset="0.942708" stopColor="var(--color-background-image-base)" />
        <stop offset="1" stopColor="var(--color-background-image-base)" />
      </radialGradient>
      <radialGradient
        id={`paint1_radial_37_453-${id}`}
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(201.6 -1080.02) rotate(64.9401) scale(6436.87 6304.81)"
      >
        <stop stopColor="var(--color-background-image-base)" />
        <stop offset="0.0833333" stopColor="var(--color-background-image-accent-4)" />
        <stop offset="0.333803" stopColor="var(--color-background-image-accent-5)" />
        <stop offset="0.658041" stopColor="var(--color-background-image-base)" />
        <stop offset="0.798521" stopColor="var(--color-background-image-accent-3)" />
        <stop offset="0.942708" stopColor="var(--color-background-image-base)" />
        <stop offset="1" stopColor="var(--color-background-image-base)" />
      </radialGradient>
      <radialGradient
        id={`paint2_radial_37_453-${id}`}
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(912.834 -811.021) rotate(64.9401) scale(6436.87 6304.81)"
      >
        <stop stopColor="var(--color-background-image-base)" />
        <stop
          offset="0.140625"
          stopColor="var(--color-background-image-accent-6)"
          stopOpacity={0}
        />
        <stop offset="0.333803" stopColor="var(--color-background-image-accent-7)" />
        <stop offset="0.658041" stopColor="var(--color-background-image-base)" />
        <stop offset="0.798521" stopColor="var(--color-background-image-accent-3)" />
        <stop offset="0.942708" stopColor="var(--color-background-image-base)" />
        <stop offset="1" stopColor="var(--color-background-image-base)" />
      </radialGradient>
      <radialGradient
        id={`paint3_radial_37_453-${id}`}
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(1711.41 -1639.11) rotate(64.9401) scale(6436.87 6304.81)"
      >
        <stop stopColor="var(--color-background-image-base)" />
        <stop offset="0.0833333" stopColor="var(--color-background-image-accent-1)" />
        <stop offset="0.333803" stopColor="var(--color-background-image-accent-5)" />
        <stop offset="0.658041" stopColor="var(--color-background-image-base)" />
        <stop offset="0.798521" stopColor="var(--color-background-image-accent-3)" />
        <stop offset="0.942708" stopColor="var(--color-background-image-base)" />
        <stop offset="1" stopColor="var(--color-background-image-base)" />
      </radialGradient>
      <radialGradient
        id={`paint4_radial_37_453-${id}`}
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(3479.06 -623.459) rotate(113.028) scale(8332.26 4870.62)"
      >
        <stop stopColor="var(--color-background-image-base)" />
        <stop offset="0.0833333" stopColor="var(--color-background-image-accent-1)" />
        <stop offset="0.333803" stopColor="var(--color-background-image-accent-5)" />
        <stop offset="0.658041" stopColor="var(--color-background-image-base)" />
        <stop offset="0.798521" stopColor="var(--color-background-image-accent-3)" />
        <stop offset="0.942708" stopColor="var(--color-background-image-base)" />
        <stop offset="1" stopColor="var(--color-background-image-base)" />
      </radialGradient>
    </defs>
  </svg>
);
