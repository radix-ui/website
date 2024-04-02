import Color from '@utils/color.js';
import NextLink from 'next/link';
import { ColorsHeader } from '@components/ColorsHeader';
import { ColorsMobileMenu } from '@components/ColorsMobileMenu';
import { MobileMenuProvider } from '@components/MobileMenu';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import {
  BoxIcon,
  GridIcon,
  InfoCircledIcon,
  MagnifyingGlassIcon,
  TextIcon,
  ImageIcon,
  PlusIcon,
  FrameIcon,
  CrumpledPaperIcon,
  ScissorsIcon,
  Component1Icon,
  TokensIcon,
  FontFamilyIcon,
  LightningBoltIcon,
  StarIcon,
  AccessibilityIcon,
  BookmarkIcon,
  HeartIcon,
  Share2Icon,
  GitHubLogoIcon,
  CopyIcon,
  FigmaLogoIcon,
  ArrowLeftIcon,
  SunIcon,
  MoonIcon,
} from '@radix-ui/react-icons';
import {
  Avatar,
  Badge,
  Blockquote,
  Box,
  Button,
  Callout,
  Card,
  Checkbox,
  Container,
  DropdownMenu,
  Flex,
  Grid,
  Heading,
  HoverCard,
  IconButton,
  Inset,
  Link,
  Reset,
  Section,
  SegmentedControl,
  Separator,
  Strong,
  Switch,
  Tabs,
  Text,
  TextField,
  Theme,
  Tooltip,
} from '@radix-ui/themes';
import * as React from 'react';
import styles from './custom.module.css';
import { getPeopleForColor } from '@utils/people';
import { ThemesPanelBackgroundImage } from '@components/ThemesPanelBackgroundImage';
import { AvatarIconFallback } from '@components/AvatarIconFallback';
import { ColorField } from '@components/ColorField';
import { generateRadixColors } from '@components/generateRadixColors';
import { useLocalStorage, useIsomorphicLayoutEffect } from 'usehooks-ts';
import { useTheme } from 'next-themes';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import copy from 'copy-to-clipboard';
import { CustomSwatch } from '@components/CustomSwatch';
import { ColorUsageRange } from '@components/ColorUsageRange';
import { ColorStepLabel } from '@components/ColorStepLabel';

export default function Page() {
  const { resolvedTheme, setTheme } = useTheme();

  const [lightAccentValue, setLightAccentValue] = useLocalStorage('colors/light/accent', '#3D63DD');
  const [lightGrayValue, setLightGrayValue] = useLocalStorage('colors/light/gray', '#8B8D98');
  const [lightBgValue, setLightBgValue] = useLocalStorage('colors/light/background', '#FFFFFF');

  const [darkAccentValue, setDarkAccentValue] = useLocalStorage('colors/dark/accent', '#3D63DD');
  const [darkGrayValue, setDarkGrayValue] = useLocalStorage('colors/dark/gray', '#8B8D98');
  const [darkBgValue, setDarkBgValue] = useLocalStorage('colors/dark/background', '#111111');

  const accentValue = resolvedTheme === 'dark' ? darkAccentValue : lightAccentValue;
  const grayValue = resolvedTheme === 'dark' ? darkGrayValue : lightGrayValue;
  const bgValue = resolvedTheme === 'dark' ? darkBgValue : lightBgValue;

  const setAccentValue = resolvedTheme === 'dark' ? setDarkAccentValue : setLightAccentValue;
  const setGrayValue = resolvedTheme === 'dark' ? setDarkGrayValue : setLightGrayValue;
  const setBgValue = resolvedTheme === 'dark' ? setDarkBgValue : setLightBgValue;

  const lightModeResult = generateRadixColors({
    appearance: 'light',
    accent: lightAccentValue,
    gray: lightGrayValue,
    background: lightBgValue,
  });

  const darkModeResult = generateRadixColors({
    appearance: 'dark',
    accent: darkAccentValue,
    gray: darkGrayValue,
    background: darkBgValue,
  });

  const result = resolvedTheme === 'dark' ? darkModeResult : lightModeResult;

  const [copied, setCopied] = React.useState('');
  const copiedTimeoutRef = React.useRef<ReturnType<typeof setTimeout>>();
  const COPIED_TIMEOUT = 1500;

  const setCopiedMessage = React.useCallback(
    (message: string) => {
      setCopied(message);
      clearTimeout(copiedTimeoutRef.current);
      copiedTimeoutRef.current = setTimeout(() => {
        setCopied('');
      }, COPIED_TIMEOUT);
    },
    [setCopied]
  );

  const [hydrated, setHydrated] = React.useState(false);
  useIsomorphicLayoutEffect(() => setHydrated(true), []);

  if (!hydrated) {
    return null;
  }

  const accent = getColorName(result.accentScale[8]);
  getNewPreviewStyles({ lightColors: lightModeResult, darkColors: darkModeResult });

  return (
    <MobileMenuProvider>
      <style
        dangerouslySetInnerHTML={{
          __html: getNewPreviewStyles({
            lightColors: lightModeResult,
            darkColors: darkModeResult,
          }),
        }}
      />

      <Theme accentColor={accent as React.ComponentPropsWithoutRef<typeof Theme>['accentColor']}>
        <Box
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            height: 480,
            opacity: 0.6,
            background: 'linear-gradient(to bottom, var(--accent-4), transparent)',
          }}
        />

        <ColorsHeader ghost />
        <ColorsMobileMenu />

        <TitleAndMetaTags
          title="Create a custom palette – Radix Colors"
          description="An open-source color system for designing beautiful, accessible websites and apps."
          image="colors.png"
        />

        <Section px={{ initial: '5', xs: '6', sm: '7', md: '9' }} size={{ initial: '2', md: '3' }}>
          <Container position="relative">
            <Flex direction="column" align="center" mb="7">
              <Flex asChild align="center" gap="1" mb="3">
                <Link asChild size="2" color="gray" ml="-2">
                  <NextLink href="/colors">
                    <ArrowLeftIcon />
                    Radix Colors
                  </NextLink>
                </Link>
              </Flex>
              <Heading as="h1" align="center" size="8">
                Create a custom palette
              </Heading>

              <SegmentedControl.Root
                value={resolvedTheme}
                onValueChange={setTheme}
                style={{ backgroundColor: 'transparent' }}
                mt="5"
              >
                <SegmentedControl.Item value="light">
                  <Flex as="span" align="center" gap="2" ml="-1">
                    <SunIcon />
                    Light
                  </Flex>
                </SegmentedControl.Item>
                <SegmentedControl.Item value="dark">
                  <Flex as="span" align="center" gap="2" ml="-1">
                    <MoonIcon />
                    Dark
                  </Flex>
                </SegmentedControl.Item>
              </SegmentedControl.Root>
            </Flex>

            <Box mb="9">
              <Grid
                columns={{ initial: '1fr', sm: '180px 180px 180px auto' }}
                maxWidth={{ initial: '400px', sm: 'none' }}
                mx="auto"
                gap="4"
                justify="center"
                align="end"
              >
                <Flex direction="column">
                  <Flex mb="1">
                    <Text as="label" htmlFor="accent" size="1" color="gray">
                      Accent
                    </Text>
                  </Flex>
                  <ColorField id="accent" value={accentValue} onValueChange={setAccentValue} />
                </Flex>

                <Flex direction="column">
                  <Flex justify="between" mb="1">
                    <Text as="label" htmlFor="gray" size="1" color="gray">
                      Gray
                    </Text>
                  </Flex>
                  <ColorField id="gray" value={grayValue} onValueChange={setGrayValue} />
                </Flex>

                <Flex direction="column">
                  <Flex mb="1">
                    <Text as="label" htmlFor="bg" size="1" color="gray">
                      Background
                    </Text>
                  </Flex>
                  <ColorField id="bg" value={bgValue} onValueChange={setBgValue} />
                </Flex>

                <Flex
                  gap="3"
                  align={{ sm: 'center' }}
                  direction={{ initial: 'column', sm: 'row' }}
                  mt={{ initial: '2', sm: '0' }}
                >
                  <DropdownMenu.Root>
                    <DropdownMenu.Trigger>
                      <Button highContrast={!!copied}>
                        <Flex
                          as="span"
                          align="center"
                          gap="2"
                          style={{ visibility: copied ? 'hidden' : undefined }}
                        >
                          Copy
                          <DropdownMenu.TriggerIcon />
                        </Flex>
                        {copied && <Box position="absolute">Copied</Box>}
                      </Button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content>
                      <DropdownMenu.Sub>
                        <DropdownMenu.SubTrigger>
                          <Flex align="center" gap="2">
                            <Box asChild ml="-1">
                              <CopyIcon />
                            </Box>
                            Copy CSS code
                          </Flex>
                        </DropdownMenu.SubTrigger>

                        <DropdownMenu.SubContent>
                          <DropdownMenu.Item
                            onSelect={() => {
                              const css = getColorScaleCss({
                                isDarkMode: resolvedTheme === 'dark',
                                name: getColorName(accentValue),
                                contrast: result.accentContrast,
                                scale: result.accentScale,
                                scaleWideGamut: result.accentScaleWideGamut,
                                scaleAlpha: result.accentScaleAlpha,
                                scaleAlphaWideGamut: result.accentScaleAlphaWideGamut,
                                surface: result.accentSurface,
                                surfaceWideGamut: result.accentSurfaceWideGamut,
                              });

                              copy(css);
                              setCopiedMessage('accents');
                            }}
                          >
                            Copy accent scale
                          </DropdownMenu.Item>

                          <DropdownMenu.Item
                            onSelect={() => {
                              const css = getColorScaleCss({
                                isDarkMode: resolvedTheme === 'dark',
                                name: 'gray',
                                contrast: '#FFFFFF',
                                scale: result.grayScale,
                                scaleWideGamut: result.grayScaleWideGamut,
                                scaleAlpha: result.grayScaleAlpha,
                                scaleAlphaWideGamut: result.grayScaleAlphaWideGamut,
                                surface: result.graySurface,
                                surfaceWideGamut: result.graySurfaceWideGamut,
                              });

                              copy(css);
                              setCopiedMessage('grays');
                            }}
                          >
                            Copy gray scale
                          </DropdownMenu.Item>

                          <DropdownMenu.Item
                            onSelect={() => {
                              const css = getBackgroundColorCss({
                                isDarkMode: resolvedTheme === 'dark',
                                background: result.background,
                              });

                              copy(css);
                              setCopiedMessage('background');
                            }}
                          >
                            Copy background color
                          </DropdownMenu.Item>
                        </DropdownMenu.SubContent>
                      </DropdownMenu.Sub>
                      <DropdownMenu.Item
                        onSelect={() => {
                          const svg = getSvg(result);
                          copy(svg);
                          setCopiedMessage('SVG');
                        }}
                      >
                        <Flex align="center" gap="2">
                          <Box asChild ml="-1">
                            <FigmaLogoIcon />
                          </Box>
                          Copy SVG object
                        </Flex>
                      </DropdownMenu.Item>
                    </DropdownMenu.Content>
                  </DropdownMenu.Root>
                </Flex>
              </Grid>
            </Box>

            <Grid
              mb="9"
              flow={{ initial: 'column', sm: 'row' }}
              columns={{ initial: '2', sm: '12' }}
              rows={{ initial: '12', sm: 'auto' }}
              gap={{ initial: '2px', md: '1' }}
              mx={{ initial: '-5', xs: '-6', sm: '0' }}
              px={{ initial: '2px', sm: '0' }}
            >
              <ColorUsageRange display={{ initial: 'none', sm: 'flex' }} gridColumn="1 / 3">
                Backgrounds
              </ColorUsageRange>
              <ColorUsageRange display={{ initial: 'none', sm: 'flex' }} gridColumn="3 / 6">
                Interactive components
              </ColorUsageRange>
              <ColorUsageRange display={{ initial: 'none', sm: 'flex' }} gridColumn="6 / 9">
                Borders and separators
              </ColorUsageRange>
              <ColorUsageRange display={{ initial: 'none', sm: 'flex' }} gridColumn="9 / 11">
                Solid colors
              </ColorUsageRange>
              <ColorUsageRange display={{ initial: 'none', sm: 'flex' }} gridColumn="11 / 13">
                Accessible text
              </ColorUsageRange>

              <ColorStepLabel display={{ initial: 'none', sm: 'flex' }}>1</ColorStepLabel>
              <ColorStepLabel display={{ initial: 'none', sm: 'flex' }}>2</ColorStepLabel>
              <ColorStepLabel display={{ initial: 'none', sm: 'flex' }}>3</ColorStepLabel>
              <ColorStepLabel display={{ initial: 'none', sm: 'flex' }}>4</ColorStepLabel>
              <ColorStepLabel display={{ initial: 'none', sm: 'flex' }}>5</ColorStepLabel>
              <ColorStepLabel display={{ initial: 'none', sm: 'flex' }}>6</ColorStepLabel>
              <ColorStepLabel display={{ initial: 'none', sm: 'flex' }}>7</ColorStepLabel>
              <ColorStepLabel display={{ initial: 'none', sm: 'flex' }}>8</ColorStepLabel>
              <ColorStepLabel display={{ initial: 'none', sm: 'flex' }}>9</ColorStepLabel>
              <ColorStepLabel display={{ initial: 'none', sm: 'flex' }}>10</ColorStepLabel>
              <ColorStepLabel display={{ initial: 'none', sm: 'flex' }}>11</ColorStepLabel>
              <ColorStepLabel display={{ initial: 'none', sm: 'flex' }}>12</ColorStepLabel>

              {Array.from({ length: 12 }, (_, i) => i + 1).map((step, i) => (
                <CustomSwatch
                  key={step}
                  scale={accent === 'custom' ? 'accent' : accent}
                  step={step.toString()}
                  cssVariable={`var(--${accent}-${step})`}
                  hex={result.accentScale[i].toUpperCase()}
                  hexA={result.accentScaleAlpha[i].toUpperCase()}
                  p3={result.accentScaleWideGamut[i]}
                  p3A={result.accentScaleAlphaWideGamut[i]}
                />
              ))}

              {Array.from({ length: 12 }, (_, i) => i + 1).map((step, i) => (
                <CustomSwatch
                  key={step}
                  scale="gray"
                  step={step.toString()}
                  cssVariable={`var(--gray-${step})`}
                  hex={result.grayScale[i].toUpperCase()}
                  hexA={result.grayScaleAlpha[i].toUpperCase()}
                  p3={result.grayScaleWideGamut[i]}
                  p3A={result.grayScaleAlphaWideGamut[i]}
                />
              ))}
            </Grid>

            <Theme className="radix-themes-default-fonts">
              <Preview />
            </Theme>
          </Container>
        </Section>
      </Theme>
    </MobileMenuProvider>
  );
}

export const Preview = ({ children, ...props }: React.ComponentPropsWithoutRef<typeof Grid>) => {
  const [state, setState] = React.useState({
    todo: [
      { id: 'a', completed: false },
      { id: 'b', completed: false },
      { id: 'c', completed: false },
      { id: 'd', completed: true },
      { id: 'e', completed: true },
    ],
  });

  return (
    <Grid
      justify="center"
      columns={{ initial: '1fr', sm: '320px 320px', lg: '320px 1fr 320px' }}
      gap="6"
      {...props}
    >
      <Flex gap="5" direction="column" width="100%" maxWidth="400px" mx="auto">
        <Flex gap="2">
          <Box flexGrow="1" flexShrink="0">
            <TextField.Root placeholder="Search" type="text" name="_">
              <TextField.Slot>
                <MagnifyingGlassIcon />
              </TextField.Slot>
            </TextField.Root>
          </Box>
          <Button size="2">Submit</Button>
        </Flex>

        <Callout.Root>
          <Callout.Icon>
            <InfoCircledIcon />
          </Callout.Icon>
          <Callout.Text>Please upgrade to the new version.</Callout.Text>
        </Callout.Root>

        <LayersRoot type="single">
          <LayersItem value="1">
            <Flex align="center" justify="center" width="4" height="4">
              <BoxIcon />
            </Flex>
            <Text size="1">Box</Text>
          </LayersItem>
          <LayersItem value="2">
            <Flex align="center" justify="center" width="4" height="4">
              <GridIcon />
            </Flex>
            <Text size="1">Grid</Text>
          </LayersItem>
          <LayersItem data-indent="1" value="3">
            <Flex align="center" justify="center" width="4" height="4">
              <ImageIcon />
            </Flex>
            <Text size="1">Image</Text>
          </LayersItem>
          <LayersItem data-indent="1" value="4">
            <Flex align="center" justify="center" width="4" height="4">
              <ImageIcon />
            </Flex>
            <Text size="1">Image</Text>
          </LayersItem>
          <LayersItem data-indent="1" value="5">
            <Flex align="center" justify="center" width="4" height="4">
              <TextIcon />
            </Flex>
            <Text size="1">Text</Text>
          </LayersItem>
        </LayersRoot>

        <Flex align="center" justify={{ initial: 'center', sm: 'between' }} gap="4">
          <Badge radius="full" variant="soft">
            Fully-featured
          </Badge>
          <Badge radius="full" variant="surface">
            Built with Radix
          </Badge>
          <Badge radius="full" variant="outline">
            Open source
          </Badge>
        </Flex>

        <Flex
          align="center"
          justify={{ initial: 'center', sm: 'between' }}
          gap={{ initial: '4', sm: '0' }}
        >
          <IconButton variant="classic">
            <Flex align="center" justify="center" width="4" height="4">
              <StarIcon />
            </Flex>
          </IconButton>
          <IconButton variant="solid">
            <Flex align="center" justify="center" width="4" height="4">
              <BookmarkIcon />
            </Flex>
          </IconButton>
          <IconButton variant="soft">
            <Flex align="center" justify="center" width="4" height="4">
              <AccessibilityIcon />
            </Flex>
          </IconButton>
          <IconButton variant="surface">
            <Flex align="center" justify="center" width="4" height="4">
              <HeartIcon />
            </Flex>
          </IconButton>
          <IconButton variant="outline">
            <Flex align="center" justify="center" width="4" height="4">
              <Share2Icon />
            </Flex>
          </IconButton>
          <Switch size="1" ml="2" />
          <Switch size="1" defaultChecked />
        </Flex>

        <Flex direction="column" gap="4">
          <Card asChild variant="classic" size="2">
            <a href="#" onClick={(e) => e.preventDefault()}>
              <Flex align="center" gap="3">
                <Avatar size="4" src={getPeopleForColor('gray')[0].image} fallback="V" />
                <Box>
                  <Text as="div" weight="medium" size="3">
                    Emily Adams
                  </Text>

                  <Text as="div" color="gray" size="2">
                    emily.adams@example.com
                  </Text>
                </Box>
              </Flex>
            </a>
          </Card>

          <Card asChild variant="surface" size="2">
            <a href="#" onClick={(e) => e.preventDefault()}>
              <Flex align="center" gap="3">
                <Avatar size="4" src={getPeopleForColor('gray')[0].image} fallback="V" />
                <Box>
                  <Text as="div" weight="medium" size="3">
                    Emily Adams
                  </Text>

                  <Text as="div" color="gray" size="2">
                    emily.adams@example.com
                  </Text>
                </Box>
              </Flex>
            </a>
          </Card>
        </Flex>
      </Flex>

      <Flex gap="6" direction="column" width="100%" maxWidth="400px" mx="auto">
        <Flex mt="-2" mx="auto">
          <Tabs.Root defaultValue="colors" activationMode="manual">
            <Tabs.List size="2">
              <Tabs.Trigger value="themes">Themes</Tabs.Trigger>
              <Tabs.Trigger value="primitives">Primitives</Tabs.Trigger>
              <Tabs.Trigger value="icons">Icons</Tabs.Trigger>
              <Tabs.Trigger value="colors">Colors</Tabs.Trigger>
            </Tabs.List>
          </Tabs.Root>
        </Flex>

        <Flex gap="4" direction="column" mx="auto">
          <Flex gap="3">
            <Avatar
              radius="full"
              variant="solid"
              src={getPeopleForColor('gray')[6].image}
              fallback="V"
            />
            <Avatar
              radius="full"
              variant="solid"
              src={getPeopleForColor('gray')[2].image}
              fallback="V"
            />
            <Avatar radius="full" variant="solid" fallback="V" />
            <Avatar radius="full" variant="solid" fallback="BG" />
            <Avatar radius="full" variant="solid" fallback={<AvatarIconFallback />} />
            <Avatar radius="full" variant="solid" fallback={<AvatarIconFallback />} highContrast />
          </Flex>

          <Flex gap="3">
            <Avatar
              radius="full"
              variant="soft"
              src={getPeopleForColor('gray')[0].image}
              fallback="V"
            />
            <Avatar
              radius="full"
              variant="soft"
              src={getPeopleForColor('gray')[1].image}
              fallback="V"
            />
            <Avatar radius="full" variant="soft" fallback="V" />
            <Avatar radius="full" variant="soft" fallback="BG" />
            <Avatar radius="full" variant="soft" fallback={<AvatarIconFallback />} />
            <Avatar radius="full" variant="soft" fallback={<AvatarIconFallback />} highContrast />
          </Flex>
        </Flex>

        <Separator size="4" />

        <Flex gap="4" direction="column">
          <Text size="2">
            <LinksExample />
          </Text>

          <Text size="2" color="gray">
            <LinksExample highContrast />
          </Text>
        </Flex>

        <Box
          p="4"
          style={{
            borderRadius: 'var(--radius-4)',
            backgroundColor: 'var(--gray-a2)',
          }}
        >
          <ToDoList
            items={state.todo}
            onItemsChange={(items) => setState({ ...state, todo: items })}
          />
        </Box>
      </Flex>

      <Flex
        gap="5"
        direction="column"
        gridColumn={{ initial: '1 / -1', lg: '2 / 3' }}
        gridRow={{ lg: '1' }}
      >
        <Flex gap="4" display={{ initial: 'none', lg: 'flex' }}>
          <Flex
            align="center"
            gap="3"
            px="2"
            style={{
              boxShadow: 'inset 0 0 0 1px var(--gray-a6)',
              borderRadius: 'var(--radius-3)',
            }}
          >
            <Tooltip content="Add element">
              <IconButton variant="ghost" highContrast color="gray">
                <Flex width="4" height="4" align="center" justify="center">
                  <PlusIcon />
                </Flex>
              </IconButton>
            </Tooltip>

            <Separator size="1" orientation="vertical" />

            <Tooltip content="Frame">
              <IconButton variant="ghost" highContrast color="gray">
                <Flex width="4" height="4" align="center" justify="center">
                  <FrameIcon />
                </Flex>
              </IconButton>
            </Tooltip>
            <Tooltip content="Rectangle">
              <IconButton variant="ghost" highContrast color="gray">
                <Flex width="4" height="4" align="center" justify="center">
                  <BoxIcon />
                </Flex>
              </IconButton>
            </Tooltip>
            <Tooltip content="Components">
              <IconButton variant="ghost" highContrast color="gray">
                <Flex width="4" height="4" align="center" justify="center">
                  <Component1Icon />
                </Flex>
              </IconButton>
            </Tooltip>
            <Tooltip content="Tokens">
              <IconButton variant="ghost" highContrast color="gray">
                <Flex width="4" height="4" align="center" justify="center">
                  <TokensIcon />
                </Flex>
              </IconButton>
            </Tooltip>

            <Separator size="1" orientation="vertical" />

            <Tooltip content="Text">
              <IconButton variant="ghost" highContrast color="gray">
                <Flex width="4" height="4" align="center" justify="center">
                  <TextIcon />
                </Flex>
              </IconButton>
            </Tooltip>
            <Tooltip content="Typography">
              <IconButton variant="ghost" highContrast color="gray">
                <Flex width="4" height="4" align="center" justify="center">
                  <FontFamilyIcon />
                </Flex>
              </IconButton>
            </Tooltip>
            <Tooltip content="Fill with AI">
              <IconButton variant="ghost" highContrast color="gray">
                <Flex width="4" height="4" align="center" justify="center">
                  <LightningBoltIcon />
                </Flex>
              </IconButton>
            </Tooltip>

            <Separator size="1" orientation="vertical" />

            <Tooltip content="Scissors">
              <IconButton variant="ghost" highContrast color="gray">
                <Flex width="4" height="4" align="center" justify="center">
                  <ScissorsIcon />
                </Flex>
              </IconButton>
            </Tooltip>
            <Tooltip content="Archive">
              <IconButton variant="ghost" highContrast color="gray">
                <Flex width="4" height="4" align="center" justify="center">
                  <CrumpledPaperIcon />
                </Flex>
              </IconButton>
            </Tooltip>
          </Flex>

          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Box flexGrow="1" asChild>
                <Button size="2" variant="surface" color="gray" highContrast>
                  Actions
                  <DropdownMenu.TriggerIcon />
                </Button>
              </Box>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Group>
                <DropdownMenu.Item shortcut="⌘ C">Copy</DropdownMenu.Item>
                <DropdownMenu.Item shortcut="⌘ V">Paste</DropdownMenu.Item>
                <DropdownMenu.Item shortcut="⇧ ⌘ R">Paste to replace</DropdownMenu.Item>
              </DropdownMenu.Group>
              <DropdownMenu.Separator />
              <DropdownMenu.Sub>
                <DropdownMenu.SubTrigger>Layers</DropdownMenu.SubTrigger>
                <DropdownMenu.SubContent>
                  <DropdownMenu.Item shortcut="⇧ ⌘ ]">Move to top</DropdownMenu.Item>
                  <DropdownMenu.Item shortcut="⌘ ]">Move up</DropdownMenu.Item>
                  <DropdownMenu.Item shortcut="⌘ [">Move down</DropdownMenu.Item>
                  <DropdownMenu.Item shortcut="⇧ ⌘ [">Move to bottom</DropdownMenu.Item>
                </DropdownMenu.SubContent>
              </DropdownMenu.Sub>
              <DropdownMenu.Sub>
                <DropdownMenu.SubTrigger>Boolean groups</DropdownMenu.SubTrigger>
                <DropdownMenu.SubContent>
                  <DropdownMenu.Item>Union</DropdownMenu.Item>
                  <DropdownMenu.Item>Subtract</DropdownMenu.Item>
                  <DropdownMenu.Item>Intersect</DropdownMenu.Item>
                  <DropdownMenu.Separator />
                  <DropdownMenu.Item shortcut="⌘ E">Merge</DropdownMenu.Item>
                </DropdownMenu.SubContent>
              </DropdownMenu.Sub>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </Flex>

        <Flex direction="column">
          <Flex
            direction="column"
            position="relative"
            mx={{ initial: '-5', xs: '-6', sm: '0' }}
            px={{ initial: '6', sm: '8' }}
            py={{ initial: '6', sm: '7' }}
          >
            <Flex
              align="center"
              justify="center"
              position="absolute"
              inset="0"
              overflow="hidden"
              style={{ background: 'var(--gray-2)' }}
            >
              <ThemesPanelBackgroundImage id="1" style={{ width: '240%', marginLeft: '70%' }} />
            </Flex>

            <Box position="relative">
              <Heading align="center" as="h3" size="6" mb="4">
                Sign up
              </Heading>

              <Box maxWidth="400px" mx="auto">
                <Card size="4">
                  <Flex direction="column" mb="5">
                    <Flex>
                      <Text
                        htmlFor="example-name"
                        as="label"
                        size="2"
                        weight="medium"
                        mb="1"
                        trim="start"
                      >
                        Full name
                      </Text>
                    </Flex>
                    <TextField.Root id="example-name" placeholder="Enter your name" />
                  </Flex>

                  <Flex direction="column" mb="5">
                    <Flex>
                      <Text htmlFor="example-email" as="label" size="2" weight="medium" mb="1">
                        Email
                      </Text>
                    </Flex>
                    <TextField.Root id="example-email" placeholder="Enter your email address" />
                  </Flex>

                  <Flex direction="column" mb="5">
                    <Flex>
                      <Text htmlFor="example-password" as="label" size="2" weight="medium" mb="1">
                        Password
                      </Text>
                    </Flex>
                    <TextField.Root id="example-password" placeholder="Enter your password" />
                  </Flex>

                  <Grid
                    mt="5"
                    gap="4"
                    style={{ '--cursor-button': 'pointer' } as React.CSSProperties}
                  >
                    <Button>Create account</Button>
                    <Flex align="center" gap="3">
                      <Separator size="4" />
                      <Text color="gray" size="1">
                        OR
                      </Text>
                      <Separator size="4" />
                    </Flex>
                    <Button color="gray" variant="surface" highContrast>
                      <GitHubLogoIcon />
                      Continue with GitHub
                    </Button>
                  </Grid>
                </Card>
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Grid>
  );
};

interface ToDoItem {
  id: string;
  completed: boolean;
}

interface ToDoList {
  items: ToDoItem[];
  onItemsChange: (items: ToDoItem[]) => void;
}

const ToDoList = ({ items, onItemsChange }: ToDoList) => {
  return (
    <Flex gap="2" direction="column">
      {items.map((item) => (
        <Text as="label" size="2" key={item.id}>
          <Flex gap="2">
            <Checkbox
              checked={item.completed}
              onCheckedChange={(checked) => {
                const newItems = items.slice();
                const newItem = newItems.find((candidate) => candidate.id === item.id);
                newItem.completed = Boolean(checked);
                onItemsChange(newItems);
              }}
            />
            <Text
              color={item.completed ? 'gray' : undefined}
              style={
                {
                  textDecoration: item.completed ? 'line-through' : undefined,
                  '--accent-12': 'var(--accent-11)',
                } as React.CSSProperties
              }
            >
              {itemsContent[item.id]}
            </Text>
          </Flex>
        </Text>
      ))}
    </Flex>
  );
};

const itemsContent = {
  a: (
    <span>
      Respond to comment{' '}
      <Link href="#" underline="hover" onClick={(event) => event.preventDefault()}>
        #384
      </Link>{' '}
      from Travis
    </span>
  ),
  b: (
    <span>
      Invite{' '}
      <Link href="#" underline="hover" onClick={(event) => event.preventDefault()}>
        Acme Co.
      </Link>{' '}
      team to Slack
    </span>
  ),
  c: (
    <span>
      Create a report{' '}
      <Link href="#" underline="hover" onClick={(event) => event.preventDefault()}>
        requested
      </Link>{' '}
      by Danilo
    </span>
  ),
  d: <span>Close Q2 finances</span>,
  e: (
    <span>
      Review invoice{' '}
      <Link href="#" underline="hover" onClick={(event) => event.preventDefault()}>
        #3456
      </Link>
    </span>
  ),
};

const LinksExample = ({ highContrast = false }) => (
  <Blockquote>
    Susan Kare is an American{' '}
    <HoverCard.Root>
      <HoverCard.Trigger>
        <Link
          underline="hover"
          highContrast={highContrast}
          target="_blank"
          href="https://en.wikipedia.org/wiki/Graphic_design"
        >
          graphic designer
        </Link>
      </HoverCard.Trigger>
      <HoverCard.Content>
        <Flex>
          <Inset side="left" pr="current">
            <img
              src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&h=480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Graphic design"
              style={{
                display: 'block',
                objectFit: 'cover',
                height: 160,
                width: 160,
                backgroundColor: 'var(--gray-5)',
                filter: 'contrast(1.05) brightness(1.05)',
              }}
            />
          </Inset>
          <Text as="p" size="2" style={{ maxWidth: 250 }}>
            <Strong>Graphic design</Strong> is a profession and applied art whose activity consists
            in projecting visual communications intended to transmit specific messages to people.
          </Text>
        </Flex>
      </HoverCard.Content>
    </HoverCard.Root>{' '}
    and artist, who contributed{' '}
    <HoverCard.Root>
      <HoverCard.Trigger>
        <Link
          underline="hover"
          highContrast={highContrast}
          target="_blank"
          href="https://en.wikipedia.org/wiki/User_interface"
        >
          interface
        </Link>
      </HoverCard.Trigger>
      <HoverCard.Content>
        <Flex>
          <Inset side="left" pr="current">
            <img
              src="https://images.unsplash.com/photo-1602576666092-bf6447a729fc?q=80&h=480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="A graphical user interface"
              style={{
                display: 'block',
                objectFit: 'cover',
                objectPosition: 'right',
                height: 160,
                width: 160,
                backgroundColor: 'var(--gray-5)',
                filter: 'contrast(1.05) brightness(1.05)',
              }}
            />
          </Inset>
          <Text as="p" size="2" style={{ maxWidth: 250 }}>
            In the industrial design field of human–computer interaction, a{' '}
            <Strong>user interface</Strong> is the space where interactions between humans and
            machines occur.
          </Text>
        </Flex>
      </HoverCard.Content>
    </HoverCard.Root>{' '}
    elements and{' '}
    <HoverCard.Root>
      <HoverCard.Trigger>
        <Link
          underline="hover"
          highContrast={highContrast}
          target="_blank"
          href="https://en.wikipedia.org/wiki/Typeface"
        >
          typefaces
        </Link>
      </HoverCard.Trigger>
      <HoverCard.Content>
        <Flex>
          <Inset side="left" pr="current">
            <img
              src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&h=540&q=80"
              alt="A graphical user interface"
              style={{
                display: 'block',
                objectFit: 'cover',
                height: 160,
                width: 160,
                backgroundColor: 'var(--gray-5)',
              }}
            />
          </Inset>
          <Text as="p" size="2" style={{ maxWidth: 250 }}>
            A <Strong>typeface</Strong> or <Strong>font family</Strong> is a design of letters,
            numbers and other symbols, to be used in printing or for electronic display. There are
            thousands of different typefaces in existence, with new ones being developed constantly.
          </Text>
        </Flex>
      </HoverCard.Content>
    </HoverCard.Root>{' '}
    for the first{' '}
    <HoverCard.Root>
      <HoverCard.Trigger>
        <Link
          underline="hover"
          highContrast={highContrast}
          target="_blank"
          href="https://en.wikipedia.org/wiki/Typeface"
        >
          Apple Macintosh
        </Link>
      </HoverCard.Trigger>
      <HoverCard.Content>
        <Flex>
          <Inset side="left" pr="current">
            <img
              src="https://images.unsplash.com/photo-1553469945-2adfe230284d?q=80&h=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="A graphical user interface"
              style={{
                display: 'block',
                objectFit: 'cover',
                objectPosition: '80%',
                height: 160,
                width: 160,
                backgroundColor: 'var(--gray-5)',
                filter: 'grayscale(100%)',
              }}
            />
          </Inset>
          <Text as="p" size="2" style={{ maxWidth: 250 }}>
            The <Strong>Apple Macintosh</Strong>—later rebranded as the{' '}
            <Strong>Macintosh 128K</Strong>—was the first successful mass-market all-in-one desktop
            personal computer with a graphical user interface, built-in screen, and mouse.
          </Text>
        </Flex>
      </HoverCard.Content>
    </HoverCard.Root>{' '}
    personal computer from 1983 to 1986.
  </Blockquote>
);

const LayersRoot = (
  props: Extract<React.ComponentPropsWithoutRef<typeof ToggleGroup.Root>, { type: 'single' }>
) => <ToggleGroup.Root type="single" defaultValue="1" className={styles.LayersRoot} {...props} />;

const LayersItem = (props: React.ComponentPropsWithoutRef<typeof ToggleGroup.Item>) => (
  <Reset>
    <ToggleGroup.Item
      className={styles.LayersItem}
      onMouseDown={(event) => event.button === 0 && event.currentTarget.click()}
      onClick={(event) => {
        if (event.currentTarget.getAttribute('data-state') === 'on') {
          event.preventDefault();
        }
      }}
      {...props}
    />
  </Reset>
);

type GeneratedColors = ReturnType<typeof generateRadixColors>;

interface GetColorScaleCssParams {
  isDarkMode: boolean;
  name: string;
  scale: GeneratedColors['accentScale'];
  scaleWideGamut: GeneratedColors['accentScaleWideGamut'];
  scaleAlpha: GeneratedColors['accentScaleAlpha'];
  scaleAlphaWideGamut: GeneratedColors['accentScaleAlphaWideGamut'];
  contrast: GeneratedColors['accentContrast'];
  surface: GeneratedColors['accentSurface'];
  surfaceWideGamut: GeneratedColors['accentSurfaceWideGamut'];
}

const getColorScaleCss = ({
  isDarkMode,
  name,
  scale,
  scaleWideGamut,
  scaleAlpha,
  scaleAlphaWideGamut,
  contrast,
  surface,
  surfaceWideGamut,
}: GetColorScaleCssParams) => {
  const selector = isDarkMode ? '.dark, .dark-theme' : ':root, .light, .light-theme';

  return `
${selector} {
  ${scale.map((value, index) => `--${name}-${index + 1}: ${value};`).join('\n  ')}

  ${scaleAlpha.map((value, index) => `--${name}-a${index + 1}: ${value};`).join('\n  ')}

  --${name}-contrast: ${contrast};
  --${name}-surface: ${surface};
  --${name}-indicator: ${scale[8]};
  --${name}-track: ${scale[8]};
}

@supports (color: color(display-p3 1 1 1)) {
  @media (color-gamut: p3) {
    ${selector} {
      ${scaleWideGamut.map((value, index) => `--${name}-${index + 1}: ${value};`).join('\n      ')}

      ${scaleAlphaWideGamut
        .map((value, index) => `--${name}-a${index + 1}: ${value};`)
        .join('\n      ')}

      --${name}-contrast: ${contrast};
      --${name}-surface: ${surfaceWideGamut};
      --${name}-indicator: ${scaleWideGamut[8]};
      --${name}-track: ${scaleWideGamut[8]};
    }
  }
}
  `.trim();
};

const getBackgroundColorCss = ({
  isDarkMode,
  background,
}: {
  isDarkMode: boolean;
  background: string;
}) => {
  if (isDarkMode) {
    return `
.dark, .dark-theme, :is(.dark, .dark-theme) :where(.radix-themes:not(.light, .light-theme)) {
  --color-background: ${background};
}
    `.trim();
  }

  return `
:root, .light, .light-theme, .radix-themes {
  --color-background: ${background};
}
  `.trim();
};

interface GetNewPreviewStylesParams {
  selector?: string;
  lightColors: GeneratedColors;
  darkColors: GeneratedColors;
}

const getNewPreviewStyles = ({ lightColors, darkColors }: GetNewPreviewStylesParams) => {
  const lightAccentColorsCss = getColorScaleCss({
    isDarkMode: false,
    name: getColorName(lightColors.accentScale[8]),
    contrast: lightColors.accentContrast,
    scale: lightColors.accentScale,
    scaleWideGamut: lightColors.accentScaleWideGamut,
    scaleAlpha: lightColors.accentScaleAlpha,
    scaleAlphaWideGamut: lightColors.accentScaleAlphaWideGamut,
    surface: lightColors.accentSurface,
    surfaceWideGamut: lightColors.accentSurfaceWideGamut,
  });

  const lightGrayColorsCss = getColorScaleCss({
    isDarkMode: false,
    name: 'gray',
    contrast: '#fff',
    scale: lightColors.grayScale,
    scaleWideGamut: lightColors.grayScaleWideGamut,
    scaleAlpha: lightColors.grayScaleAlpha,
    scaleAlphaWideGamut: lightColors.grayScaleAlphaWideGamut,
    surface: lightColors.graySurface,
    surfaceWideGamut: lightColors.graySurfaceWideGamut,
  });

  const darkAccentColorsCss = getColorScaleCss({
    isDarkMode: true,
    name: getColorName(darkColors.accentScale[8]),
    contrast: darkColors.accentContrast,
    scale: darkColors.accentScale,
    scaleWideGamut: darkColors.accentScaleWideGamut,
    scaleAlpha: darkColors.accentScaleAlpha,
    scaleAlphaWideGamut: darkColors.accentScaleAlphaWideGamut,
    surface: darkColors.accentSurface,
    surfaceWideGamut: darkColors.accentSurfaceWideGamut,
  });

  const darkGrayColorsCss = getColorScaleCss({
    isDarkMode: true,
    name: 'gray',
    contrast: '#fff',
    scale: darkColors.grayScale,
    scaleWideGamut: darkColors.grayScaleWideGamut,
    scaleAlpha: darkColors.grayScaleAlpha,
    scaleAlphaWideGamut: darkColors.grayScaleAlphaWideGamut,
    surface: darkColors.graySurface,
    surfaceWideGamut: darkColors.graySurfaceWideGamut,
  });

  const lightBackgroundCss = getBackgroundColorCss({
    isDarkMode: false,
    background: lightColors.background,
  });

  const darkBackgroundCss = getBackgroundColorCss({
    isDarkMode: true,
    background: darkColors.background,
  });

  return `
[data-accent-color='custom'] {
  --accent-1: var(--custom-1);
  --accent-2: var(--custom-2);
  --accent-3: var(--custom-3);
  --accent-4: var(--custom-4);
  --accent-5: var(--custom-5);
  --accent-6: var(--custom-6);
  --accent-7: var(--custom-7);
  --accent-8: var(--custom-8);
  --accent-9: var(--custom-9);
  --accent-10: var(--custom-10);
  --accent-11: var(--custom-11);
  --accent-12: var(--custom-12);

  --accent-a1: var(--custom-a1);
  --accent-a2: var(--custom-a2);
  --accent-a3: var(--custom-a3);
  --accent-a4: var(--custom-a4);
  --accent-a5: var(--custom-a5);
  --accent-a6: var(--custom-a6);
  --accent-a7: var(--custom-a7);
  --accent-a8: var(--custom-a8);
  --accent-a9: var(--custom-a9);
  --accent-a10: var(--custom-a10);
  --accent-a11: var(--custom-a11);
  --accent-a12: var(--custom-a12);

  --accent-contrast: var(--custom-contrast);
  --accent-surface: var(--custom-surface);
  --accent-indicator: var(--custom-indicator);
  --accent-track: var(--custom-track);
}

${lightBackgroundCss}
${lightAccentColorsCss}
${lightGrayColorsCss}
${darkBackgroundCss}
${darkAccentColorsCss}
${darkGrayColorsCss}
  `.trim();
};

const getColorName = (value: string) => {
  // @ts-ignore
  const color = new Color(value).to('hsl');

  if (color.coords[1] < 25) {
    return 'custom';
  }
  if (color.coords[0] >= 0 && color.coords[0] < 20) {
    return 'red';
  }
  if (color.coords[0] >= 20 && color.coords[0] < 40) {
    return 'orange';
  }
  if (color.coords[0] >= 40 && color.coords[0] < 65) {
    return 'yellow';
  }
  if (color.coords[0] >= 65 && color.coords[0] < 100) {
    return 'lime';
  }
  if (color.coords[0] >= 100 && color.coords[0] < 165) {
    return 'green';
  }
  if (color.coords[0] >= 165 && color.coords[0] < 190) {
    return 'teal';
  }
  if (color.coords[0] >= 190 && color.coords[0] < 240) {
    return 'blue';
  }
  if (color.coords[0] >= 240 && color.coords[0] < 270) {
    return 'violet';
  }
  if (color.coords[0] >= 270 && color.coords[0] < 320) {
    return 'purple';
  }
  if (color.coords[0] >= 320 && color.coords[0] < 340) {
    return 'pink';
  }

  return 'red';
};

const getSvg = (colors: GeneratedColors) => {
  const background = colors.background;

  const accent1 = colors.accentScale[0];
  const accent2 = colors.accentScale[1];
  const accent3 = colors.accentScale[2];
  const accent4 = colors.accentScale[3];
  const accent5 = colors.accentScale[4];
  const accent6 = colors.accentScale[5];
  const accent7 = colors.accentScale[6];
  const accent8 = colors.accentScale[7];
  const accent9 = colors.accentScale[8];
  const accent10 = colors.accentScale[9];
  const accent11 = colors.accentScale[10];
  const accent12 = colors.accentScale[11];

  const accentA1 = colors.accentScaleAlpha[0];
  const accentA2 = colors.accentScaleAlpha[1];
  const accentA3 = colors.accentScaleAlpha[2];
  const accentA4 = colors.accentScaleAlpha[3];
  const accentA5 = colors.accentScaleAlpha[4];
  const accentA6 = colors.accentScaleAlpha[5];
  const accentA7 = colors.accentScaleAlpha[6];
  const accentA8 = colors.accentScaleAlpha[7];
  const accentA9 = colors.accentScaleAlpha[8];
  const accentA10 = colors.accentScaleAlpha[9];
  const accentA11 = colors.accentScaleAlpha[10];
  const accentA12 = colors.accentScaleAlpha[11];

  const gray1 = colors.grayScale[0];
  const gray2 = colors.grayScale[1];
  const gray3 = colors.grayScale[2];
  const gray4 = colors.grayScale[3];
  const gray5 = colors.grayScale[4];
  const gray6 = colors.grayScale[5];
  const gray7 = colors.grayScale[6];
  const gray8 = colors.grayScale[7];
  const gray9 = colors.grayScale[8];
  const gray10 = colors.grayScale[9];
  const gray11 = colors.grayScale[10];
  const gray12 = colors.grayScale[11];

  const grayA1 = colors.grayScaleAlpha[0];
  const grayA2 = colors.grayScaleAlpha[1];
  const grayA3 = colors.grayScaleAlpha[2];
  const grayA4 = colors.grayScaleAlpha[3];
  const grayA5 = colors.grayScaleAlpha[4];
  const grayA6 = colors.grayScaleAlpha[5];
  const grayA7 = colors.grayScaleAlpha[6];
  const grayA8 = colors.grayScaleAlpha[7];
  const grayA9 = colors.grayScaleAlpha[8];
  const grayA10 = colors.grayScaleAlpha[9];
  const grayA11 = colors.grayScaleAlpha[10];
  const grayA12 = colors.grayScaleAlpha[11];

  return `
<svg
  width="1452"
  height="524"
  viewBox="0 0 1452 524"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <rect width="1452" height="524" fill="${background}" />

  <rect x="128" y="192" width="96" height="48" fill="${accent1}" />
  <rect x="228" y="192" width="96" height="48" fill="${accent2}" />
  <rect x="328" y="192" width="96" height="48" fill="${accent3}" />
  <rect x="428" y="192" width="96" height="48" fill="${accent4}" />
  <rect x="528" y="192" width="96" height="48" fill="${accent5}" />
  <rect x="628" y="192" width="96" height="48" fill="${accent6}" />
  <rect x="728" y="192" width="96" height="48" fill="${accent7}" />
  <rect x="828" y="192" width="96" height="48" fill="${accent8}" />
  <rect x="928" y="192" width="96" height="48" fill="${accent9}" />
  <rect x="1028" y="192" width="96" height="48" fill="${accent10}" />
  <rect x="1128" y="192" width="96" height="48" fill="${accent11}" />
  <rect x="1228" y="192" width="96" height="48" fill="${accent12}" />
  <rect x="128" y="244" width="96" height="48" fill="${accentA1}" />
  <rect x="228" y="244" width="96" height="48" fill="${accentA2}" />
  <rect x="328" y="244" width="96" height="48" fill="${accentA3}" />
  <rect x="428" y="244" width="96" height="48" fill="${accentA4}" />
  <rect x="528" y="244" width="96" height="48" fill="${accentA5}" />
  <rect x="628" y="244" width="96" height="48" fill="${accentA6}" />
  <rect x="728" y="244" width="96" height="48" fill="${accentA7}" />
  <rect x="828" y="244" width="96" height="48" fill="${accentA8}" />
  <rect x="928" y="244" width="96" height="48" fill="${accentA9}" />
  <rect x="1028" y="244" width="96" height="48" fill="${accentA10}" />
  <rect x="1128" y="244" width="96" height="48" fill="${accentA11}" />
  <rect x="1228" y="244" width="96" height="48" fill="${accentA12}" />

  <rect x="128" y="296" width="96" height="48" fill="${gray1}" />
  <rect x="228" y="296" width="96" height="48" fill="${gray2}" />
  <rect x="328" y="296" width="96" height="48" fill="${gray3}" />
  <rect x="428" y="296" width="96" height="48" fill="${gray4}" />
  <rect x="528" y="296" width="96" height="48" fill="${gray5}" />
  <rect x="628" y="296" width="96" height="48" fill="${gray6}" />
  <rect x="728" y="296" width="96" height="48" fill="${gray7}" />
  <rect x="828" y="296" width="96" height="48" fill="${gray8}" />
  <rect x="928" y="296" width="96" height="48" fill="${gray9}" />
  <rect x="1028" y="296" width="96" height="48" fill="${gray10}" />
  <rect x="1128" y="296" width="96" height="48" fill="${gray11}" />
  <rect x="1228" y="296" width="96" height="48" fill="${gray12}" />
  <rect x="128" y="348" width="96" height="48" fill="${grayA1}" />
  <rect x="228" y="348" width="96" height="48" fill="${grayA2}" />
  <rect x="328" y="348" width="96" height="48" fill="${grayA3}" />
  <rect x="428" y="348" width="96" height="48" fill="${grayA4}" />
  <rect x="528" y="348" width="96" height="48" fill="${grayA5}" />
  <rect x="628" y="348" width="96" height="48" fill="${grayA6}" />
  <rect x="728" y="348" width="96" height="48" fill="${grayA7}" />
  <rect x="828" y="348" width="96" height="48" fill="${grayA8}" />
  <rect x="928" y="348" width="96" height="48" fill="${grayA9}" />
  <rect x="1028" y="348" width="96" height="48" fill="${grayA10}" />
  <rect x="1128" y="348" width="96" height="48" fill="${grayA11}" />
  <rect x="1228" y="348" width="96" height="48" fill="${grayA12}" />
  <path
    d="M1273.97 167.273V176H1272.91V168.381H1272.86L1270.73 169.795V168.722L1272.91 167.273H1273.97ZM1276.48 176V175.233L1279.36 172.08C1279.7 171.71 1279.98 171.389 1280.2 171.116C1280.42 170.841 1280.58 170.582 1280.68 170.341C1280.79 170.097 1280.85 169.841 1280.85 169.574C1280.85 169.267 1280.77 169.001 1280.62 168.777C1280.48 168.553 1280.28 168.379 1280.03 168.257C1279.77 168.135 1279.49 168.074 1279.17 168.074C1278.84 168.074 1278.55 168.143 1278.3 168.283C1278.05 168.419 1277.86 168.611 1277.72 168.858C1277.59 169.105 1277.52 169.395 1277.52 169.727H1276.52C1276.52 169.216 1276.63 168.767 1276.87 168.381C1277.11 167.994 1277.43 167.693 1277.83 167.477C1278.24 167.261 1278.7 167.153 1279.21 167.153C1279.72 167.153 1280.17 167.261 1280.57 167.477C1280.96 167.693 1281.27 167.984 1281.5 168.351C1281.72 168.717 1281.83 169.125 1281.83 169.574C1281.83 169.895 1281.78 170.209 1281.66 170.516C1281.55 170.82 1281.35 171.159 1281.06 171.534C1280.78 171.906 1280.39 172.361 1279.89 172.898L1277.93 174.994V175.062H1281.99V176H1276.48Z"
    fill="${gray11}"
  />
  <path
    d="M1173.97 167.273V176H1172.91V168.381H1172.86L1170.73 169.795V168.722L1172.91 167.273H1173.97ZM1179.55 167.273V176H1178.49V168.381H1178.44L1176.31 169.795V168.722L1178.49 167.273H1179.55Z"
    fill="${gray11}"
  />
  <path
    d="M1072.97 167.273V176H1071.91V168.381H1071.86L1069.73 169.795V168.722L1071.91 167.273H1072.97ZM1078.33 176.119C1077.69 176.119 1077.14 175.945 1076.69 175.595C1076.24 175.243 1075.89 174.733 1075.65 174.065C1075.41 173.395 1075.29 172.585 1075.29 171.636C1075.29 170.693 1075.41 169.888 1075.65 169.22C1075.89 168.55 1076.24 168.038 1076.69 167.686C1077.15 167.331 1077.69 167.153 1078.33 167.153C1078.96 167.153 1079.51 167.331 1079.96 167.686C1080.41 168.038 1080.76 168.55 1081 169.22C1081.24 169.888 1081.36 170.693 1081.36 171.636C1081.36 172.585 1081.24 173.395 1081 174.065C1080.77 174.733 1080.42 175.243 1079.97 175.595C1079.52 175.945 1078.97 176.119 1078.33 176.119ZM1078.33 175.182C1078.96 175.182 1079.46 174.875 1079.81 174.261C1080.16 173.648 1080.34 172.773 1080.34 171.636C1080.34 170.881 1080.26 170.237 1080.1 169.706C1079.94 169.175 1079.71 168.77 1079.41 168.491C1079.11 168.213 1078.75 168.074 1078.33 168.074C1077.7 168.074 1077.2 168.385 1076.85 169.007C1076.49 169.626 1076.32 170.503 1076.32 171.636C1076.32 172.392 1076.4 173.034 1076.56 173.562C1076.71 174.091 1076.94 174.493 1077.24 174.768C1077.54 175.044 1077.9 175.182 1078.33 175.182Z"
    fill="${gray11}"
  />
  <path
    d="M975.682 167.153C976.04 167.156 976.398 167.224 976.756 167.358C977.114 167.491 977.44 167.713 977.736 168.023C978.031 168.33 978.268 168.749 978.447 169.28C978.626 169.811 978.716 170.477 978.716 171.278C978.716 172.054 978.642 172.743 978.494 173.345C978.349 173.945 978.139 174.45 977.864 174.862C977.591 175.274 977.259 175.587 976.866 175.8C976.477 176.013 976.037 176.119 975.545 176.119C975.057 176.119 974.621 176.023 974.237 175.83C973.857 175.634 973.544 175.362 973.3 175.016C973.058 174.666 972.903 174.261 972.835 173.801H973.875C973.969 174.202 974.155 174.533 974.433 174.794C974.714 175.053 975.085 175.182 975.545 175.182C976.219 175.182 976.75 174.888 977.139 174.3C977.531 173.712 977.727 172.881 977.727 171.807H977.659C977.5 172.045 977.311 172.251 977.092 172.425C976.874 172.598 976.631 172.732 976.364 172.825C976.097 172.919 975.813 172.966 975.511 172.966C975.011 172.966 974.553 172.842 974.135 172.595C973.72 172.345 973.388 172.003 973.138 171.568C972.891 171.131 972.767 170.631 972.767 170.068C972.767 169.534 972.886 169.045 973.125 168.602C973.366 168.156 973.705 167.801 974.139 167.537C974.577 167.273 975.091 167.145 975.682 167.153ZM975.682 168.091C975.324 168.091 975.001 168.18 974.714 168.359C974.43 168.536 974.205 168.774 974.037 169.075C973.872 169.374 973.79 169.705 973.79 170.068C973.79 170.432 973.869 170.763 974.028 171.061C974.19 171.357 974.411 171.592 974.689 171.768C974.97 171.942 975.29 172.028 975.648 172.028C975.918 172.028 976.169 171.976 976.402 171.871C976.635 171.763 976.838 171.616 977.011 171.432C977.188 171.244 977.325 171.033 977.425 170.797C977.524 170.558 977.574 170.31 977.574 170.051C977.574 169.71 977.491 169.391 977.327 169.092C977.165 168.794 976.94 168.553 976.653 168.368C976.369 168.183 976.045 168.091 975.682 168.091Z"
    fill="${gray11}"
  />
  <path
    d="M875.699 176.119C875.114 176.119 874.597 176.016 874.148 175.808C873.702 175.598 873.354 175.31 873.104 174.943C872.854 174.574 872.73 174.153 872.733 173.682C872.73 173.312 872.803 172.972 872.95 172.659C873.098 172.344 873.3 172.081 873.555 171.871C873.814 171.658 874.102 171.523 874.42 171.466V171.415C874.003 171.307 873.67 171.072 873.423 170.712C873.176 170.348 873.054 169.935 873.057 169.472C873.054 169.028 873.166 168.632 873.393 168.283C873.621 167.933 873.933 167.658 874.331 167.456C874.732 167.254 875.188 167.153 875.699 167.153C876.205 167.153 876.656 167.254 877.054 167.456C877.452 167.658 877.764 167.933 877.991 168.283C878.222 168.632 878.338 169.028 878.341 169.472C878.338 169.935 878.212 170.348 877.962 170.712C877.714 171.072 877.386 171.307 876.977 171.415V171.466C877.293 171.523 877.577 171.658 877.83 171.871C878.082 172.081 878.284 172.344 878.435 172.659C878.585 172.972 878.662 173.312 878.665 173.682C878.662 174.153 878.534 174.574 878.281 174.943C878.031 175.31 877.683 175.598 877.237 175.808C876.794 176.016 876.281 176.119 875.699 176.119ZM875.699 175.182C876.094 175.182 876.435 175.118 876.722 174.99C877.009 174.862 877.23 174.682 877.386 174.449C877.543 174.216 877.622 173.943 877.625 173.631C877.622 173.301 877.537 173.01 877.369 172.757C877.202 172.504 876.973 172.305 876.683 172.161C876.396 172.016 876.068 171.943 875.699 171.943C875.327 171.943 874.994 172.016 874.702 172.161C874.412 172.305 874.183 172.504 874.016 172.757C873.851 173.01 873.77 173.301 873.773 173.631C873.77 173.943 873.845 174.216 873.999 174.449C874.155 174.682 874.378 174.862 874.668 174.99C874.957 175.118 875.301 175.182 875.699 175.182ZM875.699 171.04C876.011 171.04 876.288 170.977 876.53 170.852C876.774 170.727 876.966 170.553 877.105 170.328C877.244 170.104 877.315 169.841 877.318 169.54C877.315 169.244 877.246 168.987 877.109 168.768C876.973 168.547 876.784 168.376 876.543 168.257C876.301 168.135 876.02 168.074 875.699 168.074C875.372 168.074 875.087 168.135 874.842 168.257C874.598 168.376 874.409 168.547 874.276 168.768C874.142 168.987 874.077 169.244 874.08 169.54C874.077 169.841 874.143 170.104 874.28 170.328C874.419 170.553 874.611 170.727 874.855 170.852C875.099 170.977 875.381 171.04 875.699 171.04Z"
    fill="${gray11}"
  />
  <path
    d="M774.176 176L778.08 168.278V168.21H773.58V167.273H779.17V168.261L775.284 176H774.176Z"
    fill="${gray11}"
  />
  <path
    d="M675.801 176.119C675.443 176.114 675.085 176.045 674.727 175.915C674.369 175.784 674.043 175.564 673.747 175.254C673.452 174.942 673.214 174.52 673.036 173.989C672.857 173.455 672.767 172.784 672.767 171.977C672.767 171.205 672.839 170.52 672.984 169.923C673.129 169.324 673.339 168.82 673.615 168.411C673.891 167.999 674.223 167.686 674.612 167.473C675.004 167.26 675.446 167.153 675.938 167.153C676.426 167.153 676.861 167.251 677.241 167.447C677.625 167.641 677.938 167.911 678.179 168.257C678.42 168.604 678.577 169.003 678.648 169.455H677.608C677.511 169.062 677.324 168.737 677.045 168.479C676.767 168.22 676.398 168.091 675.938 168.091C675.261 168.091 674.729 168.385 674.339 168.973C673.953 169.561 673.759 170.386 673.756 171.449H673.824C673.983 171.207 674.172 171.001 674.391 170.831C674.612 170.658 674.857 170.524 675.124 170.43C675.391 170.337 675.673 170.29 675.972 170.29C676.472 170.29 676.929 170.415 677.344 170.665C677.759 170.912 678.091 171.254 678.341 171.692C678.591 172.126 678.716 172.625 678.716 173.188C678.716 173.727 678.595 174.222 678.354 174.67C678.112 175.116 677.773 175.472 677.335 175.736C676.901 175.997 676.389 176.125 675.801 176.119ZM675.801 175.182C676.159 175.182 676.48 175.092 676.764 174.913C677.051 174.734 677.277 174.494 677.442 174.193C677.609 173.892 677.693 173.557 677.693 173.188C677.693 172.827 677.612 172.499 677.45 172.203C677.291 171.905 677.071 171.668 676.79 171.491C676.511 171.315 676.193 171.227 675.835 171.227C675.565 171.227 675.314 171.281 675.081 171.389C674.848 171.494 674.643 171.639 674.467 171.824C674.294 172.009 674.158 172.22 674.058 172.459C673.959 172.695 673.909 172.943 673.909 173.205C673.909 173.551 673.99 173.875 674.152 174.176C674.317 174.477 674.541 174.72 674.825 174.905C675.112 175.089 675.438 175.182 675.801 175.182Z"
    fill="${gray11}"
  />
  <path
    d="M575.631 176.119C575.131 176.119 574.68 176.02 574.28 175.821C573.879 175.622 573.558 175.349 573.317 175.003C573.075 174.656 572.943 174.261 572.92 173.818H573.943C573.983 174.213 574.162 174.54 574.48 174.798C574.801 175.054 575.185 175.182 575.631 175.182C575.989 175.182 576.307 175.098 576.585 174.93C576.866 174.763 577.087 174.533 577.246 174.24C577.408 173.945 577.489 173.611 577.489 173.239C577.489 172.858 577.405 172.518 577.237 172.22C577.072 171.919 576.845 171.682 576.555 171.509C576.266 171.335 575.935 171.247 575.562 171.244C575.295 171.241 575.021 171.283 574.74 171.368C574.459 171.45 574.227 171.557 574.045 171.688L573.057 171.568L573.585 167.273H578.119V168.21H574.472L574.165 170.784H574.216C574.395 170.642 574.619 170.524 574.889 170.43C575.159 170.337 575.44 170.29 575.733 170.29C576.267 170.29 576.743 170.418 577.161 170.673C577.581 170.926 577.911 171.273 578.149 171.713C578.391 172.153 578.511 172.656 578.511 173.222C578.511 173.778 578.386 174.276 578.136 174.713C577.889 175.148 577.548 175.491 577.114 175.744C576.679 175.994 576.185 176.119 575.631 176.119Z"
    fill="${gray11}"
  />
  <path
    d="M472.699 174.21V173.341L476.534 167.273H477.165V168.619H476.739L473.841 173.205V173.273H479.006V174.21H472.699ZM476.807 176V173.946V173.541V167.273H477.812V176H476.807Z"
    fill="${gray11}"
  />
  <path
    d="M375.852 176.119C375.29 176.119 374.788 176.023 374.348 175.83C373.911 175.636 373.563 175.368 373.304 175.024C373.048 174.678 372.909 174.276 372.886 173.818H373.96C373.983 174.099 374.08 174.342 374.25 174.547C374.42 174.749 374.643 174.905 374.919 175.016C375.195 175.126 375.5 175.182 375.835 175.182C376.21 175.182 376.543 175.116 376.832 174.986C377.122 174.855 377.349 174.673 377.514 174.44C377.679 174.207 377.761 173.938 377.761 173.631C377.761 173.31 377.682 173.027 377.523 172.783C377.364 172.536 377.131 172.342 376.824 172.203C376.517 172.064 376.142 171.994 375.699 171.994H375V171.057H375.699C376.045 171.057 376.349 170.994 376.611 170.869C376.875 170.744 377.081 170.568 377.229 170.341C377.379 170.114 377.455 169.847 377.455 169.54C377.455 169.244 377.389 168.987 377.259 168.768C377.128 168.55 376.943 168.379 376.705 168.257C376.469 168.135 376.19 168.074 375.869 168.074C375.568 168.074 375.284 168.129 375.017 168.24C374.753 168.348 374.537 168.506 374.369 168.713C374.202 168.918 374.111 169.165 374.097 169.455H373.074C373.091 168.997 373.229 168.597 373.487 168.253C373.746 167.906 374.084 167.636 374.501 167.443C374.922 167.25 375.384 167.153 375.886 167.153C376.426 167.153 376.889 167.263 377.276 167.482C377.662 167.697 377.959 167.983 378.166 168.338C378.374 168.693 378.477 169.077 378.477 169.489C378.477 169.98 378.348 170.399 378.089 170.746C377.834 171.092 377.486 171.332 377.045 171.466V171.534C377.597 171.625 378.027 171.859 378.337 172.237C378.646 172.612 378.801 173.077 378.801 173.631C378.801 174.105 378.672 174.531 378.413 174.909C378.158 175.284 377.808 175.58 377.365 175.795C376.922 176.011 376.418 176.119 375.852 176.119Z"
    fill="${gray11}"
  />
  <path
    d="M272.903 176V175.233L275.784 172.08C276.122 171.71 276.401 171.389 276.619 171.116C276.838 170.841 277 170.582 277.105 170.341C277.213 170.097 277.267 169.841 277.267 169.574C277.267 169.267 277.193 169.001 277.045 168.777C276.901 168.553 276.702 168.379 276.449 168.257C276.196 168.135 275.912 168.074 275.597 168.074C275.261 168.074 274.969 168.143 274.719 168.283C274.472 168.419 274.28 168.611 274.143 168.858C274.01 169.105 273.943 169.395 273.943 169.727H272.938C272.938 169.216 273.055 168.767 273.291 168.381C273.527 167.994 273.848 167.693 274.254 167.477C274.663 167.261 275.122 167.153 275.631 167.153C276.142 167.153 276.595 167.261 276.99 167.477C277.385 167.693 277.695 167.984 277.919 168.351C278.143 168.717 278.256 169.125 278.256 169.574C278.256 169.895 278.197 170.209 278.081 170.516C277.967 170.82 277.768 171.159 277.484 171.534C277.203 171.906 276.812 172.361 276.312 172.898L274.352 174.994V175.062H278.409V176H272.903Z"
    fill="${gray11}"
  />
  <path
    d="M176.972 167.273V176H175.915V168.381H175.864L173.733 169.795V168.722L175.915 167.273H176.972Z"
    fill="${gray11}"
  />
  <path
    d="M1184.67 136H1183.56L1186.77 127.273H1187.86L1191.06 136H1189.96L1187.35 128.653H1187.28L1184.67 136ZM1185.08 132.591H1189.55V133.528H1185.08V132.591ZM1194.95 136.136C1194.33 136.136 1193.8 135.991 1193.36 135.702C1192.92 135.412 1192.58 135.013 1192.34 134.504C1192.1 133.996 1191.98 133.415 1191.98 132.761C1191.98 132.097 1192.1 131.51 1192.35 131.001C1192.59 130.49 1192.94 130.091 1193.38 129.804C1193.82 129.514 1194.34 129.369 1194.93 129.369C1195.39 129.369 1195.8 129.455 1196.17 129.625C1196.54 129.795 1196.85 130.034 1197.08 130.341C1197.32 130.648 1197.46 131.006 1197.52 131.415H1196.51C1196.44 131.116 1196.27 130.852 1196 130.622C1195.74 130.389 1195.39 130.273 1194.95 130.273C1194.55 130.273 1194.21 130.375 1193.92 130.58C1193.62 130.781 1193.39 131.067 1193.23 131.436C1193.07 131.803 1192.99 132.233 1192.99 132.727C1192.99 133.233 1193.07 133.673 1193.23 134.048C1193.39 134.423 1193.61 134.714 1193.91 134.922C1194.2 135.129 1194.55 135.233 1194.95 135.233C1195.21 135.233 1195.45 135.188 1195.66 135.097C1195.87 135.006 1196.05 134.875 1196.2 134.705C1196.35 134.534 1196.45 134.33 1196.51 134.091H1197.52C1197.46 134.477 1197.32 134.825 1197.1 135.135C1196.88 135.442 1196.58 135.686 1196.22 135.868C1195.85 136.047 1195.43 136.136 1194.95 136.136ZM1201.65 136.136C1201.04 136.136 1200.51 135.991 1200.06 135.702C1199.62 135.412 1199.28 135.013 1199.04 134.504C1198.8 133.996 1198.68 133.415 1198.68 132.761C1198.68 132.097 1198.81 131.51 1199.05 131.001C1199.3 130.49 1199.64 130.091 1200.08 129.804C1200.52 129.514 1201.04 129.369 1201.63 129.369C1202.09 129.369 1202.51 129.455 1202.88 129.625C1203.25 129.795 1203.55 130.034 1203.78 130.341C1204.02 130.648 1204.17 131.006 1204.22 131.415H1203.22C1203.14 131.116 1202.97 130.852 1202.71 130.622C1202.45 130.389 1202.09 130.273 1201.65 130.273C1201.26 130.273 1200.91 130.375 1200.62 130.58C1200.33 130.781 1200.1 131.067 1199.93 131.436C1199.77 131.803 1199.69 132.233 1199.69 132.727C1199.69 133.233 1199.77 133.673 1199.93 134.048C1200.09 134.423 1200.32 134.714 1200.61 134.922C1200.91 135.129 1201.25 135.233 1201.65 135.233C1201.91 135.233 1202.15 135.188 1202.36 135.097C1202.57 135.006 1202.75 134.875 1202.9 134.705C1203.05 134.534 1203.16 134.33 1203.22 134.091H1204.22C1204.17 134.477 1204.03 134.825 1203.8 135.135C1203.58 135.442 1203.29 135.686 1202.92 135.868C1202.56 136.047 1202.13 136.136 1201.65 136.136ZM1208.44 136.136C1207.81 136.136 1207.26 135.997 1206.81 135.719C1206.35 135.438 1206 135.045 1205.75 134.543C1205.51 134.037 1205.39 133.449 1205.39 132.778C1205.39 132.108 1205.51 131.517 1205.75 131.006C1206 130.491 1206.34 130.091 1206.78 129.804C1207.23 129.514 1207.75 129.369 1208.34 129.369C1208.68 129.369 1209.01 129.426 1209.35 129.54C1209.68 129.653 1209.98 129.838 1210.25 130.094C1210.53 130.347 1210.74 130.682 1210.91 131.099C1211.07 131.517 1211.15 132.031 1211.15 132.642V133.068H1206.1V132.199H1210.13C1210.13 131.83 1210.05 131.5 1209.9 131.21C1209.76 130.92 1209.55 130.692 1209.28 130.524C1209.01 130.357 1208.7 130.273 1208.34 130.273C1207.94 130.273 1207.59 130.372 1207.3 130.571C1207.01 130.767 1206.78 131.023 1206.63 131.338C1206.47 131.653 1206.39 131.991 1206.39 132.352V132.932C1206.39 133.426 1206.48 133.845 1206.65 134.189C1206.82 134.53 1207.06 134.79 1207.37 134.969C1207.68 135.145 1208.03 135.233 1208.44 135.233C1208.7 135.233 1208.94 135.196 1209.15 135.122C1209.37 135.045 1209.56 134.932 1209.71 134.781C1209.87 134.628 1209.99 134.437 1210.07 134.21L1211.05 134.483C1210.94 134.812 1210.77 135.102 1210.53 135.352C1210.29 135.599 1209.99 135.793 1209.64 135.932C1209.28 136.068 1208.88 136.136 1208.44 136.136ZM1217.31 130.92L1216.41 131.176C1216.35 131.026 1216.27 130.879 1216.16 130.737C1216.05 130.592 1215.9 130.473 1215.72 130.379C1215.53 130.286 1215.29 130.239 1215 130.239C1214.6 130.239 1214.26 130.331 1214 130.516C1213.73 130.697 1213.6 130.929 1213.6 131.21C1213.6 131.46 1213.69 131.658 1213.87 131.803C1214.05 131.947 1214.34 132.068 1214.72 132.165L1215.7 132.403C1216.28 132.545 1216.72 132.763 1217 133.055C1217.29 133.345 1217.43 133.719 1217.43 134.176C1217.43 134.551 1217.33 134.886 1217.11 135.182C1216.9 135.477 1216.6 135.71 1216.22 135.881C1215.83 136.051 1215.39 136.136 1214.88 136.136C1214.21 136.136 1213.66 135.991 1213.22 135.702C1212.78 135.412 1212.5 134.989 1212.39 134.432L1213.34 134.193C1213.43 134.545 1213.61 134.81 1213.86 134.986C1214.11 135.162 1214.45 135.25 1214.86 135.25C1215.33 135.25 1215.7 135.151 1215.98 134.952C1216.25 134.75 1216.39 134.509 1216.39 134.227C1216.39 134 1216.31 133.81 1216.16 133.656C1216 133.5 1215.75 133.384 1215.42 133.307L1214.33 133.051C1213.73 132.909 1213.29 132.689 1213.01 132.391C1212.73 132.089 1212.59 131.713 1212.59 131.261C1212.59 130.892 1212.7 130.565 1212.9 130.281C1213.11 129.997 1213.4 129.774 1213.76 129.612C1214.12 129.45 1214.54 129.369 1215 129.369C1215.64 129.369 1216.15 129.511 1216.52 129.795C1216.89 130.08 1217.16 130.455 1217.31 130.92ZM1223.58 130.92L1222.68 131.176C1222.62 131.026 1222.54 130.879 1222.43 130.737C1222.32 130.592 1222.17 130.473 1221.99 130.379C1221.8 130.286 1221.56 130.239 1221.27 130.239C1220.87 130.239 1220.53 130.331 1220.26 130.516C1220 130.697 1219.87 130.929 1219.87 131.21C1219.87 131.46 1219.96 131.658 1220.14 131.803C1220.32 131.947 1220.61 132.068 1220.99 132.165L1221.96 132.403C1222.55 132.545 1222.99 132.763 1223.27 133.055C1223.56 133.345 1223.7 133.719 1223.7 134.176C1223.7 134.551 1223.6 134.886 1223.38 135.182C1223.17 135.477 1222.87 135.71 1222.48 135.881C1222.1 136.051 1221.66 136.136 1221.15 136.136C1220.48 136.136 1219.93 135.991 1219.49 135.702C1219.05 135.412 1218.77 134.989 1218.66 134.432L1219.61 134.193C1219.7 134.545 1219.88 134.81 1220.13 134.986C1220.38 135.162 1220.72 135.25 1221.13 135.25C1221.6 135.25 1221.97 135.151 1222.25 134.952C1222.52 134.75 1222.66 134.509 1222.66 134.227C1222.66 134 1222.58 133.81 1222.43 133.656C1222.27 133.5 1222.02 133.384 1221.69 133.307L1220.6 133.051C1220 132.909 1219.56 132.689 1219.28 132.391C1219 132.089 1218.86 131.713 1218.86 131.261C1218.86 130.892 1218.97 130.565 1219.17 130.281C1219.38 129.997 1219.67 129.774 1220.03 129.612C1220.39 129.45 1220.81 129.369 1221.27 129.369C1221.91 129.369 1222.42 129.511 1222.79 129.795C1223.16 130.08 1223.43 130.455 1223.58 130.92ZM1225.22 136V129.455H1226.22V136H1225.22ZM1225.73 128.364C1225.53 128.364 1225.36 128.297 1225.22 128.163C1225.08 128.03 1225.01 127.869 1225.01 127.682C1225.01 127.494 1225.08 127.334 1225.22 127.2C1225.36 127.067 1225.53 127 1225.73 127C1225.92 127 1226.09 127.067 1226.23 127.2C1226.37 127.334 1226.44 127.494 1226.44 127.682C1226.44 127.869 1226.37 128.03 1226.23 128.163C1226.09 128.297 1225.92 128.364 1225.73 128.364ZM1228.2 136V127.273H1229.21V130.494H1229.29C1229.37 130.381 1229.47 130.236 1229.6 130.06C1229.73 129.881 1229.92 129.722 1230.17 129.582C1230.42 129.44 1230.76 129.369 1231.18 129.369C1231.74 129.369 1232.22 129.507 1232.64 129.783C1233.06 130.058 1233.39 130.449 1233.63 130.955C1233.86 131.46 1233.98 132.057 1233.98 132.744C1233.98 133.438 1233.86 134.038 1233.63 134.547C1233.39 135.053 1233.06 135.445 1232.65 135.723C1232.23 135.999 1231.75 136.136 1231.2 136.136C1230.78 136.136 1230.44 136.067 1230.19 135.928C1229.94 135.786 1229.74 135.625 1229.61 135.446C1229.47 135.264 1229.37 135.114 1229.29 134.994H1229.17V136H1228.2ZM1229.19 132.727C1229.19 133.222 1229.26 133.658 1229.41 134.036C1229.55 134.411 1229.76 134.705 1230.04 134.918C1230.32 135.128 1230.66 135.233 1231.06 135.233C1231.49 135.233 1231.84 135.122 1232.12 134.901C1232.4 134.676 1232.61 134.375 1232.76 133.997C1232.9 133.616 1232.97 133.193 1232.97 132.727C1232.97 132.267 1232.9 131.852 1232.76 131.483C1232.62 131.111 1232.41 130.817 1232.13 130.601C1231.84 130.382 1231.49 130.273 1231.06 130.273C1230.66 130.273 1230.31 130.376 1230.03 130.584C1229.76 130.788 1229.55 131.075 1229.4 131.445C1229.26 131.811 1229.19 132.239 1229.19 132.727ZM1236.52 127.273V136H1235.52V127.273H1236.52ZM1241.11 136.136C1240.48 136.136 1239.94 135.997 1239.48 135.719C1239.02 135.438 1238.67 135.045 1238.43 134.543C1238.18 134.037 1238.06 133.449 1238.06 132.778C1238.06 132.108 1238.18 131.517 1238.43 131.006C1238.67 130.491 1239.02 130.091 1239.46 129.804C1239.9 129.514 1240.42 129.369 1241.01 129.369C1241.35 129.369 1241.69 129.426 1242.02 129.54C1242.35 129.653 1242.65 129.838 1242.93 130.094C1243.2 130.347 1243.42 130.682 1243.58 131.099C1243.74 131.517 1243.82 132.031 1243.82 132.642V133.068H1238.77V132.199H1242.8C1242.8 131.83 1242.72 131.5 1242.58 131.21C1242.43 130.92 1242.22 130.692 1241.95 130.524C1241.69 130.357 1241.37 130.273 1241.01 130.273C1240.61 130.273 1240.26 130.372 1239.97 130.571C1239.68 130.767 1239.46 131.023 1239.3 131.338C1239.14 131.653 1239.06 131.991 1239.06 132.352V132.932C1239.06 133.426 1239.15 133.845 1239.32 134.189C1239.49 134.53 1239.73 134.79 1240.04 134.969C1240.35 135.145 1240.7 135.233 1241.11 135.233C1241.37 135.233 1241.61 135.196 1241.83 135.122C1242.04 135.045 1242.23 134.932 1242.38 134.781C1242.54 134.628 1242.66 134.437 1242.75 134.21L1243.72 134.483C1243.62 134.812 1243.44 135.102 1243.2 135.352C1242.96 135.599 1242.66 135.793 1242.31 135.932C1241.95 136.068 1241.55 136.136 1241.11 136.136ZM1251.57 129.455V130.307H1248.18V129.455H1251.57ZM1249.17 127.886H1250.17V134.125C1250.17 134.409 1250.22 134.622 1250.3 134.764C1250.38 134.903 1250.49 134.997 1250.62 135.045C1250.75 135.091 1250.9 135.114 1251.04 135.114C1251.15 135.114 1251.25 135.108 1251.32 135.097C1251.39 135.082 1251.44 135.071 1251.49 135.062L1251.69 135.966C1251.62 135.991 1251.53 136.017 1251.41 136.043C1251.28 136.071 1251.13 136.085 1250.94 136.085C1250.66 136.085 1250.38 136.024 1250.11 135.902C1249.84 135.78 1249.61 135.594 1249.43 135.344C1249.26 135.094 1249.17 134.778 1249.17 134.398V127.886ZM1255.76 136.136C1255.13 136.136 1254.58 135.997 1254.13 135.719C1253.67 135.438 1253.32 135.045 1253.07 134.543C1252.83 134.037 1252.71 133.449 1252.71 132.778C1252.71 132.108 1252.83 131.517 1253.07 131.006C1253.32 130.491 1253.66 130.091 1254.11 129.804C1254.55 129.514 1255.07 129.369 1255.66 129.369C1256 129.369 1256.33 129.426 1256.67 129.54C1257 129.653 1257.3 129.838 1257.57 130.094C1257.85 130.347 1258.06 130.682 1258.23 131.099C1258.39 131.517 1258.47 132.031 1258.47 132.642V133.068H1253.42V132.199H1257.45C1257.45 131.83 1257.37 131.5 1257.22 131.21C1257.08 130.92 1256.87 130.692 1256.6 130.524C1256.34 130.357 1256.02 130.273 1255.66 130.273C1255.26 130.273 1254.91 130.372 1254.62 130.571C1254.33 130.767 1254.1 131.023 1253.95 131.338C1253.79 131.653 1253.71 131.991 1253.71 132.352V132.932C1253.71 133.426 1253.8 133.845 1253.97 134.189C1254.14 134.53 1254.38 134.79 1254.69 134.969C1255 135.145 1255.35 135.233 1255.76 135.233C1256.02 135.233 1256.26 135.196 1256.47 135.122C1256.69 135.045 1256.88 134.932 1257.03 134.781C1257.19 134.628 1257.31 134.437 1257.39 134.21L1258.37 134.483C1258.26 134.812 1258.09 135.102 1257.85 135.352C1257.61 135.599 1257.31 135.793 1256.96 135.932C1256.6 136.068 1256.2 136.136 1255.76 136.136ZM1260.57 129.455L1262.14 132.131L1263.71 129.455H1264.87L1262.75 132.727L1264.87 136H1263.71L1262.14 133.46L1260.57 136H1259.41L1261.49 132.727L1259.41 129.455H1260.57ZM1269.15 129.455V130.307H1265.76V129.455H1269.15ZM1266.75 127.886H1267.75V134.125C1267.75 134.409 1267.79 134.622 1267.88 134.764C1267.96 134.903 1268.07 134.997 1268.2 135.045C1268.33 135.091 1268.47 135.114 1268.62 135.114C1268.73 135.114 1268.82 135.108 1268.89 135.097C1268.97 135.082 1269.02 135.071 1269.06 135.062L1269.27 135.966C1269.2 135.991 1269.11 136.017 1268.98 136.043C1268.86 136.071 1268.71 136.085 1268.52 136.085C1268.24 136.085 1267.96 136.024 1267.68 135.902C1267.41 135.78 1267.19 135.594 1267.01 135.344C1266.83 135.094 1266.75 134.778 1266.75 134.398V127.886Z"
    fill="${gray11}"
  />
  <path
    d="M998.859 129.455C998.808 129.023 998.6 128.688 998.237 128.449C997.873 128.21 997.427 128.091 996.899 128.091C996.512 128.091 996.174 128.153 995.884 128.278C995.597 128.403 995.373 128.575 995.211 128.794C995.052 129.013 994.972 129.261 994.972 129.54C994.972 129.773 995.028 129.973 995.139 130.141C995.252 130.305 995.397 130.443 995.573 130.554C995.749 130.662 995.934 130.751 996.127 130.822C996.32 130.891 996.498 130.946 996.66 130.989L997.546 131.227C997.774 131.287 998.026 131.369 998.305 131.474C998.586 131.58 998.855 131.723 999.11 131.905C999.369 132.084 999.582 132.314 999.749 132.595C999.917 132.876 1000 133.222 1000 133.631C1000 134.102 999.877 134.528 999.63 134.909C999.386 135.29 999.028 135.592 998.556 135.817C998.088 136.041 997.518 136.153 996.847 136.153C996.222 136.153 995.681 136.053 995.224 135.851C994.769 135.649 994.411 135.368 994.15 135.007C993.892 134.646 993.745 134.227 993.711 133.75H994.802C994.83 134.08 994.941 134.352 995.134 134.568C995.33 134.781 995.578 134.94 995.876 135.045C996.177 135.148 996.501 135.199 996.847 135.199C997.251 135.199 997.613 135.134 997.934 135.003C998.255 134.869 998.509 134.685 998.697 134.449C998.884 134.21 998.978 133.932 998.978 133.614C998.978 133.324 998.897 133.088 998.735 132.906C998.573 132.724 998.36 132.577 998.096 132.463C997.832 132.349 997.546 132.25 997.24 132.165L996.166 131.858C995.484 131.662 994.944 131.382 994.546 131.018C994.149 130.655 993.95 130.179 993.95 129.591C993.95 129.102 994.082 128.676 994.346 128.312C994.613 127.946 994.971 127.662 995.42 127.46C995.872 127.256 996.376 127.153 996.933 127.153C997.495 127.153 997.995 127.254 998.433 127.456C998.87 127.655 999.217 127.928 999.472 128.274C999.731 128.621 999.867 129.014 999.882 129.455H998.859ZM1004.26 136.136C1003.67 136.136 1003.15 135.996 1002.71 135.714C1002.26 135.433 1001.92 135.04 1001.67 134.534C1001.42 134.028 1001.3 133.437 1001.3 132.761C1001.3 132.08 1001.42 131.484 1001.67 130.976C1001.92 130.467 1002.26 130.072 1002.71 129.791C1003.15 129.51 1003.67 129.369 1004.26 129.369C1004.85 129.369 1005.37 129.51 1005.81 129.791C1006.26 130.072 1006.6 130.467 1006.85 130.976C1007.1 131.484 1007.23 132.08 1007.23 132.761C1007.23 133.437 1007.1 134.028 1006.85 134.534C1006.6 135.04 1006.26 135.433 1005.81 135.714C1005.37 135.996 1004.85 136.136 1004.26 136.136ZM1004.26 135.233C1004.71 135.233 1005.08 135.118 1005.37 134.888C1005.66 134.658 1005.87 134.355 1006.01 133.98C1006.15 133.605 1006.22 133.199 1006.22 132.761C1006.22 132.324 1006.15 131.916 1006.01 131.538C1005.87 131.161 1005.66 130.855 1005.37 130.622C1005.08 130.389 1004.71 130.273 1004.26 130.273C1003.81 130.273 1003.44 130.389 1003.15 130.622C1002.86 130.855 1002.65 131.161 1002.51 131.538C1002.37 131.916 1002.3 132.324 1002.3 132.761C1002.3 133.199 1002.37 133.605 1002.51 133.98C1002.65 134.355 1002.86 134.658 1003.15 134.888C1003.44 135.118 1003.81 135.233 1004.26 135.233ZM1009.77 127.273V136H1008.76V127.273H1009.77ZM1011.61 136V129.455H1012.62V136H1011.61ZM1012.12 128.364C1011.93 128.364 1011.76 128.297 1011.61 128.163C1011.47 128.03 1011.41 127.869 1011.41 127.682C1011.41 127.494 1011.47 127.334 1011.61 127.2C1011.76 127.067 1011.93 127 1012.12 127C1012.32 127 1012.48 127.067 1012.62 127.2C1012.77 127.334 1012.84 127.494 1012.84 127.682C1012.84 127.869 1012.77 128.03 1012.62 128.163C1012.48 128.297 1012.32 128.364 1012.12 128.364ZM1016.93 136.136C1016.38 136.136 1015.9 135.999 1015.48 135.723C1015.07 135.445 1014.74 135.053 1014.5 134.547C1014.27 134.038 1014.15 133.438 1014.15 132.744C1014.15 132.057 1014.27 131.46 1014.5 130.955C1014.74 130.449 1015.07 130.058 1015.49 129.783C1015.91 129.507 1016.4 129.369 1016.95 129.369C1017.37 129.369 1017.71 129.44 1017.96 129.582C1018.21 129.722 1018.4 129.881 1018.53 130.06C1018.66 130.236 1018.76 130.381 1018.84 130.494H1018.92V127.273H1019.93V136H1018.96V134.994H1018.84C1018.76 135.114 1018.66 135.264 1018.52 135.446C1018.39 135.625 1018.19 135.786 1017.94 135.928C1017.69 136.067 1017.35 136.136 1016.93 136.136ZM1017.07 135.233C1017.47 135.233 1017.81 135.128 1018.09 134.918C1018.37 134.705 1018.58 134.411 1018.72 134.036C1018.87 133.658 1018.94 133.222 1018.94 132.727C1018.94 132.239 1018.87 131.811 1018.73 131.445C1018.59 131.075 1018.38 130.788 1018.1 130.584C1017.82 130.376 1017.47 130.273 1017.07 130.273C1016.64 130.273 1016.28 130.382 1016 130.601C1015.72 130.817 1015.51 131.111 1015.37 131.483C1015.23 131.852 1015.16 132.267 1015.16 132.727C1015.16 133.193 1015.23 133.616 1015.37 133.997C1015.51 134.375 1015.73 134.676 1016.01 134.901C1016.29 135.122 1016.65 135.233 1017.07 135.233ZM1027.94 136.136C1027.33 136.136 1026.8 135.991 1026.36 135.702C1025.92 135.412 1025.58 135.013 1025.34 134.504C1025.1 133.996 1024.98 133.415 1024.98 132.761C1024.98 132.097 1025.1 131.51 1025.35 131.001C1025.59 130.49 1025.94 130.091 1026.38 129.804C1026.82 129.514 1027.34 129.369 1027.93 129.369C1028.39 129.369 1028.8 129.455 1029.17 129.625C1029.54 129.795 1029.84 130.034 1030.08 130.341C1030.32 130.648 1030.46 131.006 1030.52 131.415H1029.51C1029.44 131.116 1029.27 130.852 1029 130.622C1028.74 130.389 1028.39 130.273 1027.94 130.273C1027.55 130.273 1027.21 130.375 1026.91 130.58C1026.62 130.781 1026.39 131.067 1026.23 131.436C1026.07 131.803 1025.98 132.233 1025.98 132.727C1025.98 133.233 1026.06 133.673 1026.22 134.048C1026.39 134.423 1026.61 134.714 1026.91 134.922C1027.2 135.129 1027.55 135.233 1027.94 135.233C1028.21 135.233 1028.44 135.188 1028.66 135.097C1028.87 135.006 1029.05 134.875 1029.2 134.705C1029.35 134.534 1029.45 134.33 1029.51 134.091H1030.52C1030.46 134.477 1030.32 134.825 1030.1 135.135C1029.88 135.442 1029.58 135.686 1029.21 135.868C1028.85 136.047 1028.43 136.136 1027.94 136.136ZM1034.65 136.136C1034.06 136.136 1033.54 135.996 1033.09 135.714C1032.65 135.433 1032.3 135.04 1032.05 134.534C1031.81 134.028 1031.68 133.437 1031.68 132.761C1031.68 132.08 1031.81 131.484 1032.05 130.976C1032.3 130.467 1032.65 130.072 1033.09 129.791C1033.54 129.51 1034.06 129.369 1034.65 129.369C1035.24 129.369 1035.76 129.51 1036.2 129.791C1036.65 130.072 1036.99 130.467 1037.24 130.976C1037.49 131.484 1037.61 132.08 1037.61 132.761C1037.61 133.437 1037.49 134.028 1037.24 134.534C1036.99 135.04 1036.65 135.433 1036.2 135.714C1035.76 135.996 1035.24 136.136 1034.65 136.136ZM1034.65 135.233C1035.1 135.233 1035.47 135.118 1035.76 134.888C1036.05 134.658 1036.26 134.355 1036.4 133.98C1036.54 133.605 1036.61 133.199 1036.61 132.761C1036.61 132.324 1036.54 131.916 1036.4 131.538C1036.26 131.161 1036.05 130.855 1035.76 130.622C1035.47 130.389 1035.1 130.273 1034.65 130.273C1034.2 130.273 1033.83 130.389 1033.54 130.622C1033.25 130.855 1033.04 131.161 1032.9 131.538C1032.76 131.916 1032.69 132.324 1032.69 132.761C1032.69 133.199 1032.76 133.605 1032.9 133.98C1033.04 134.355 1033.25 134.658 1033.54 134.888C1033.83 135.118 1034.2 135.233 1034.65 135.233ZM1040.15 127.273V136H1039.15V127.273H1040.15ZM1044.66 136.136C1044.06 136.136 1043.55 135.996 1043.1 135.714C1042.66 135.433 1042.31 135.04 1042.06 134.534C1041.81 134.028 1041.69 133.437 1041.69 132.761C1041.69 132.08 1041.81 131.484 1042.06 130.976C1042.31 130.467 1042.66 130.072 1043.1 129.791C1043.55 129.51 1044.06 129.369 1044.66 129.369C1045.25 129.369 1045.76 129.51 1046.21 129.791C1046.65 130.072 1047 130.467 1047.25 130.976C1047.5 131.484 1047.62 132.08 1047.62 132.761C1047.62 133.437 1047.5 134.028 1047.25 134.534C1047 135.04 1046.65 135.433 1046.21 135.714C1045.76 135.996 1045.25 136.136 1044.66 136.136ZM1044.66 135.233C1045.1 135.233 1045.47 135.118 1045.76 134.888C1046.05 134.658 1046.27 134.355 1046.41 133.98C1046.55 133.605 1046.62 133.199 1046.62 132.761C1046.62 132.324 1046.55 131.916 1046.41 131.538C1046.27 131.161 1046.05 130.855 1045.76 130.622C1045.47 130.389 1045.1 130.273 1044.66 130.273C1044.21 130.273 1043.84 130.389 1043.55 130.622C1043.26 130.855 1043.04 131.161 1042.9 131.538C1042.77 131.916 1042.7 132.324 1042.7 132.761C1042.7 133.199 1042.77 133.605 1042.9 133.98C1043.04 134.355 1043.26 134.658 1043.55 134.888C1043.84 135.118 1044.21 135.233 1044.66 135.233ZM1049.16 136V129.455H1050.13V130.443H1050.2C1050.32 130.119 1050.53 129.857 1050.84 129.655C1051.16 129.453 1051.51 129.352 1051.9 129.352C1051.97 129.352 1052.07 129.354 1052.18 129.357C1052.29 129.359 1052.37 129.364 1052.43 129.369V130.392C1052.4 130.384 1052.32 130.371 1052.2 130.354C1052.08 130.334 1051.95 130.324 1051.82 130.324C1051.5 130.324 1051.21 130.391 1050.96 130.524C1050.72 130.655 1050.52 130.837 1050.38 131.07C1050.23 131.3 1050.16 131.562 1050.16 131.858V136H1049.16ZM1058.26 130.92L1057.35 131.176C1057.3 131.026 1057.21 130.879 1057.1 130.737C1057 130.592 1056.85 130.473 1056.66 130.379C1056.47 130.286 1056.23 130.239 1055.94 130.239C1055.54 130.239 1055.21 130.331 1054.94 130.516C1054.67 130.697 1054.54 130.929 1054.54 131.21C1054.54 131.46 1054.63 131.658 1054.81 131.803C1055 131.947 1055.28 132.068 1055.67 132.165L1056.64 132.403C1057.22 132.545 1057.66 132.763 1057.95 133.055C1058.23 133.345 1058.38 133.719 1058.38 134.176C1058.38 134.551 1058.27 134.886 1058.05 135.182C1057.84 135.477 1057.54 135.71 1057.16 135.881C1056.78 136.051 1056.33 136.136 1055.82 136.136C1055.15 136.136 1054.6 135.991 1054.16 135.702C1053.73 135.412 1053.45 134.989 1053.33 134.432L1054.29 134.193C1054.38 134.545 1054.55 134.81 1054.8 134.986C1055.06 135.162 1055.39 135.25 1055.8 135.25C1056.27 135.25 1056.64 135.151 1056.92 134.952C1057.2 134.75 1057.34 134.509 1057.34 134.227C1057.34 134 1057.26 133.81 1057.1 133.656C1056.94 133.5 1056.7 133.384 1056.37 133.307L1055.28 133.051C1054.68 132.909 1054.24 132.689 1053.95 132.391C1053.68 132.089 1053.54 131.713 1053.54 131.261C1053.54 130.892 1053.64 130.565 1053.85 130.281C1054.06 129.997 1054.34 129.774 1054.7 129.612C1055.07 129.45 1055.48 129.369 1055.94 129.369C1056.59 129.369 1057.1 129.511 1057.47 129.795C1057.84 130.08 1058.1 130.455 1058.26 130.92Z"
    fill="${gray11}"
  />
  <path
    d="M710.494 136V127.273H713.545C714.153 127.273 714.655 127.378 715.05 127.588C715.445 127.795 715.739 128.075 715.932 128.428C716.125 128.777 716.222 129.165 716.222 129.591C716.222 129.966 716.155 130.276 716.021 130.52C715.891 130.764 715.717 130.957 715.501 131.099C715.288 131.241 715.057 131.347 714.807 131.415V131.5C715.074 131.517 715.342 131.611 715.612 131.781C715.882 131.952 716.108 132.196 716.29 132.514C716.472 132.832 716.562 133.222 716.562 133.682C716.562 134.119 716.463 134.513 716.264 134.862C716.065 135.212 715.751 135.489 715.322 135.693C714.893 135.898 714.335 136 713.648 136H710.494ZM711.551 135.062H713.648C714.338 135.062 714.828 134.929 715.118 134.662C715.411 134.392 715.557 134.065 715.557 133.682C715.557 133.386 715.482 133.114 715.331 132.864C715.18 132.611 714.966 132.409 714.688 132.259C714.409 132.105 714.08 132.028 713.699 132.028H711.551V135.062ZM711.551 131.108H713.511C713.83 131.108 714.116 131.045 714.372 130.92C714.631 130.795 714.835 130.619 714.986 130.392C715.139 130.165 715.216 129.898 715.216 129.591C715.216 129.207 715.082 128.882 714.815 128.615C714.548 128.345 714.125 128.21 713.545 128.21H711.551V131.108ZM720.822 136.136C720.231 136.136 719.712 135.996 719.266 135.714C718.823 135.433 718.477 135.04 718.227 134.534C717.979 134.028 717.856 133.437 717.856 132.761C717.856 132.08 717.979 131.484 718.227 130.976C718.477 130.467 718.823 130.072 719.266 129.791C719.712 129.51 720.231 129.369 720.822 129.369C721.413 129.369 721.93 129.51 722.373 129.791C722.819 130.072 723.165 130.467 723.413 130.976C723.663 131.484 723.788 132.08 723.788 132.761C723.788 133.437 723.663 134.028 723.413 134.534C723.165 135.04 722.819 135.433 722.373 135.714C721.93 135.996 721.413 136.136 720.822 136.136ZM720.822 135.233C721.271 135.233 721.64 135.118 721.93 134.888C722.219 134.658 722.434 134.355 722.573 133.98C722.712 133.605 722.782 133.199 722.782 132.761C722.782 132.324 722.712 131.916 722.573 131.538C722.434 131.161 722.219 130.855 721.93 130.622C721.64 130.389 721.271 130.273 720.822 130.273C720.373 130.273 720.004 130.389 719.714 130.622C719.424 130.855 719.21 131.161 719.07 131.538C718.931 131.916 718.862 132.324 718.862 132.761C718.862 133.199 718.931 133.605 719.07 133.98C719.21 134.355 719.424 134.658 719.714 134.888C720.004 135.118 720.373 135.233 720.822 135.233ZM725.323 136V129.455H726.294V130.443H726.363C726.482 130.119 726.698 129.857 727.01 129.655C727.323 129.453 727.675 129.352 728.067 129.352C728.141 129.352 728.233 129.354 728.344 129.357C728.455 129.359 728.539 129.364 728.596 129.369V130.392C728.561 130.384 728.483 130.371 728.361 130.354C728.242 130.334 728.115 130.324 727.982 130.324C727.664 130.324 727.38 130.391 727.13 130.524C726.882 130.655 726.686 130.837 726.542 131.07C726.4 131.3 726.328 131.562 726.328 131.858V136H725.323ZM732.06 136.136C731.515 136.136 731.033 135.999 730.615 135.723C730.198 135.445 729.871 135.053 729.635 134.547C729.4 134.038 729.282 133.438 729.282 132.744C729.282 132.057 729.4 131.46 729.635 130.955C729.871 130.449 730.199 130.058 730.62 129.783C731.04 129.507 731.526 129.369 732.077 129.369C732.503 129.369 732.84 129.44 733.087 129.582C733.337 129.722 733.527 129.881 733.658 130.06C733.792 130.236 733.895 130.381 733.969 130.494H734.054V127.273H735.06V136H734.088V134.994H733.969C733.895 135.114 733.79 135.264 733.654 135.446C733.517 135.625 733.323 135.786 733.07 135.928C732.817 136.067 732.48 136.136 732.06 136.136ZM732.196 135.233C732.6 135.233 732.941 135.128 733.219 134.918C733.498 134.705 733.709 134.411 733.854 134.036C733.999 133.658 734.071 133.222 734.071 132.727C734.071 132.239 734 131.811 733.858 131.445C733.716 131.075 733.506 130.788 733.228 130.584C732.949 130.376 732.605 130.273 732.196 130.273C731.77 130.273 731.415 130.382 731.131 130.601C730.85 130.817 730.638 131.111 730.496 131.483C730.357 131.852 730.287 132.267 730.287 132.727C730.287 133.193 730.358 133.616 730.5 133.997C730.645 134.375 730.858 134.676 731.14 134.901C731.424 135.122 731.776 135.233 732.196 135.233ZM739.786 136.136C739.155 136.136 738.611 135.997 738.154 135.719C737.699 135.438 737.348 135.045 737.101 134.543C736.857 134.037 736.735 133.449 736.735 132.778C736.735 132.108 736.857 131.517 737.101 131.006C737.348 130.491 737.692 130.091 738.132 129.804C738.576 129.514 739.093 129.369 739.684 129.369C740.025 129.369 740.361 129.426 740.694 129.54C741.026 129.653 741.328 129.838 741.601 130.094C741.874 130.347 742.091 130.682 742.253 131.099C742.415 131.517 742.496 132.031 742.496 132.642V133.068H737.451V132.199H741.473C741.473 131.83 741.4 131.5 741.252 131.21C741.107 130.92 740.9 130.692 740.63 130.524C740.363 130.357 740.047 130.273 739.684 130.273C739.283 130.273 738.936 130.372 738.644 130.571C738.354 130.767 738.131 131.023 737.975 131.338C737.819 131.653 737.74 131.991 737.74 132.352V132.932C737.74 133.426 737.826 133.845 737.996 134.189C738.169 134.53 738.409 134.79 738.716 134.969C739.023 135.145 739.38 135.233 739.786 135.233C740.05 135.233 740.289 135.196 740.502 135.122C740.718 135.045 740.904 134.932 741.06 134.781C741.216 134.628 741.337 134.437 741.422 134.21L742.394 134.483C742.292 134.812 742.12 135.102 741.878 135.352C741.637 135.599 741.338 135.793 740.983 135.932C740.628 136.068 740.229 136.136 739.786 136.136ZM744.026 136V129.455H744.998V130.443H745.066C745.185 130.119 745.401 129.857 745.713 129.655C746.026 129.453 746.378 129.352 746.77 129.352C746.844 129.352 746.936 129.354 747.047 129.357C747.158 129.359 747.242 129.364 747.299 129.369V130.392C747.265 130.384 747.186 130.371 747.064 130.354C746.945 130.334 746.819 130.324 746.685 130.324C746.367 130.324 746.083 130.391 745.833 130.524C745.586 130.655 745.39 130.837 745.245 131.07C745.103 131.3 745.032 131.562 745.032 131.858V136H744.026ZM753.127 130.92L752.224 131.176C752.167 131.026 752.083 130.879 751.972 130.737C751.864 130.592 751.717 130.473 751.529 130.379C751.342 130.286 751.102 130.239 750.809 130.239C750.408 130.239 750.075 130.331 749.808 130.516C749.543 130.697 749.411 130.929 749.411 131.21C749.411 131.46 749.502 131.658 749.684 131.803C749.866 131.947 750.15 132.068 750.536 132.165L751.508 132.403C752.093 132.545 752.529 132.763 752.816 133.055C753.103 133.345 753.246 133.719 753.246 134.176C753.246 134.551 753.138 134.886 752.923 135.182C752.71 135.477 752.411 135.71 752.028 135.881C751.644 136.051 751.198 136.136 750.69 136.136C750.022 136.136 749.469 135.991 749.032 135.702C748.594 135.412 748.317 134.989 748.201 134.432L749.156 134.193C749.246 134.545 749.418 134.81 749.671 134.986C749.927 135.162 750.261 135.25 750.673 135.25C751.141 135.25 751.513 135.151 751.789 134.952C752.067 134.75 752.207 134.509 752.207 134.227C752.207 134 752.127 133.81 751.968 133.656C751.809 133.5 751.565 133.384 751.235 133.307L750.144 133.051C749.545 132.909 749.104 132.689 748.823 132.391C748.545 132.089 748.406 131.713 748.406 131.261C748.406 130.892 748.509 130.565 748.717 130.281C748.927 129.997 749.212 129.774 749.573 129.612C749.937 129.45 750.349 129.369 750.809 129.369C751.457 129.369 751.965 129.511 752.335 129.795C752.707 130.08 752.971 130.455 753.127 130.92ZM760.061 136.153C759.647 136.153 759.27 136.075 758.932 135.919C758.594 135.76 758.326 135.531 758.127 135.233C757.928 134.932 757.828 134.568 757.828 134.142C757.828 133.767 757.902 133.463 758.05 133.23C758.198 132.994 758.395 132.81 758.642 132.676C758.89 132.543 759.162 132.443 759.461 132.378C759.762 132.31 760.064 132.256 760.368 132.216C760.766 132.165 761.088 132.126 761.336 132.101C761.586 132.072 761.767 132.026 761.881 131.96C761.998 131.895 762.056 131.781 762.056 131.619V131.585C762.056 131.165 761.941 130.838 761.711 130.605C761.483 130.372 761.138 130.256 760.675 130.256C760.195 130.256 759.819 130.361 759.546 130.571C759.273 130.781 759.081 131.006 758.971 131.244L758.016 130.903C758.186 130.506 758.414 130.196 758.698 129.974C758.985 129.75 759.297 129.594 759.635 129.506C759.976 129.415 760.311 129.369 760.641 129.369C760.851 129.369 761.093 129.395 761.365 129.446C761.641 129.494 761.907 129.595 762.162 129.749C762.421 129.902 762.635 130.134 762.806 130.443C762.976 130.753 763.061 131.168 763.061 131.688V136H762.056V135.114H762.005C761.936 135.256 761.823 135.408 761.664 135.57C761.505 135.732 761.293 135.869 761.029 135.983C760.765 136.097 760.442 136.153 760.061 136.153ZM760.215 135.25C760.613 135.25 760.948 135.172 761.221 135.016C761.496 134.859 761.703 134.658 761.843 134.411C761.985 134.163 762.056 133.903 762.056 133.631V132.71C762.013 132.761 761.919 132.808 761.775 132.851C761.632 132.891 761.468 132.926 761.28 132.957C761.096 132.986 760.915 133.011 760.739 133.034C760.566 133.054 760.425 133.071 760.317 133.085C760.056 133.119 759.811 133.175 759.584 133.251C759.36 133.325 759.178 133.437 759.039 133.588C758.902 133.736 758.834 133.937 758.834 134.193C758.834 134.543 758.963 134.807 759.222 134.986C759.483 135.162 759.814 135.25 760.215 135.25ZM765.903 132.062V136H764.897V129.455H765.869V130.477H765.954C766.107 130.145 766.34 129.878 766.653 129.676C766.965 129.472 767.369 129.369 767.863 129.369C768.306 129.369 768.694 129.46 769.026 129.642C769.359 129.821 769.617 130.094 769.802 130.46C769.987 130.824 770.079 131.284 770.079 131.841V136H769.073V131.909C769.073 131.395 768.94 130.994 768.673 130.707C768.406 130.418 768.039 130.273 767.573 130.273C767.252 130.273 766.965 130.342 766.712 130.482C766.462 130.621 766.265 130.824 766.12 131.091C765.975 131.358 765.903 131.682 765.903 132.062ZM774.388 136.136C773.843 136.136 773.361 135.999 772.944 135.723C772.526 135.445 772.199 135.053 771.963 134.547C771.728 134.038 771.61 133.438 771.61 132.744C771.61 132.057 771.728 131.46 771.963 130.955C772.199 130.449 772.527 130.058 772.948 129.783C773.368 129.507 773.854 129.369 774.405 129.369C774.831 129.369 775.168 129.44 775.415 129.582C775.665 129.722 775.855 129.881 775.986 130.06C776.12 130.236 776.223 130.381 776.297 130.494H776.382V127.273H777.388V136H776.417V134.994H776.297C776.223 135.114 776.118 135.264 775.982 135.446C775.846 135.625 775.651 135.786 775.398 135.928C775.145 136.067 774.809 136.136 774.388 136.136ZM774.525 135.233C774.928 135.233 775.269 135.128 775.547 134.918C775.826 134.705 776.037 134.411 776.182 134.036C776.327 133.658 776.4 133.222 776.4 132.727C776.4 132.239 776.328 131.811 776.186 131.445C776.044 131.075 775.834 130.788 775.556 130.584C775.277 130.376 774.934 130.273 774.525 130.273C774.098 130.273 773.743 130.382 773.459 130.601C773.178 130.817 772.966 131.111 772.824 131.483C772.685 131.852 772.615 132.267 772.615 132.727C772.615 133.193 772.686 133.616 772.828 133.997C772.973 134.375 773.186 134.676 773.468 134.901C773.752 135.122 774.104 135.233 774.525 135.233ZM787.381 130.92L786.478 131.176C786.421 131.026 786.337 130.879 786.226 130.737C786.118 130.592 785.971 130.473 785.783 130.379C785.596 130.286 785.355 130.239 785.063 130.239C784.662 130.239 784.328 130.331 784.061 130.516C783.797 130.697 783.665 130.929 783.665 131.21C783.665 131.46 783.756 131.658 783.938 131.803C784.12 131.947 784.404 132.068 784.79 132.165L785.762 132.403C786.347 132.545 786.783 132.763 787.07 133.055C787.357 133.345 787.5 133.719 787.5 134.176C787.5 134.551 787.392 134.886 787.176 135.182C786.963 135.477 786.665 135.71 786.282 135.881C785.898 136.051 785.452 136.136 784.944 136.136C784.276 136.136 783.723 135.991 783.286 135.702C782.848 135.412 782.571 134.989 782.455 134.432L783.409 134.193C783.5 134.545 783.672 134.81 783.925 134.986C784.181 135.162 784.515 135.25 784.926 135.25C785.395 135.25 785.767 135.151 786.043 134.952C786.321 134.75 786.461 134.509 786.461 134.227C786.461 134 786.381 133.81 786.222 133.656C786.063 133.5 785.819 133.384 785.489 133.307L784.398 133.051C783.799 132.909 783.358 132.689 783.077 132.391C782.799 132.089 782.659 131.713 782.659 131.261C782.659 130.892 782.763 130.565 782.971 130.281C783.181 129.997 783.466 129.774 783.827 129.612C784.191 129.45 784.603 129.369 785.063 129.369C785.711 129.369 786.219 129.511 786.588 129.795C786.961 130.08 787.225 130.455 787.381 130.92ZM791.759 136.136C791.128 136.136 790.584 135.997 790.126 135.719C789.672 135.438 789.321 135.045 789.074 134.543C788.83 134.037 788.707 133.449 788.707 132.778C788.707 132.108 788.83 131.517 789.074 131.006C789.321 130.491 789.665 130.091 790.105 129.804C790.548 129.514 791.065 129.369 791.656 129.369C791.997 129.369 792.334 129.426 792.666 129.54C792.999 129.653 793.301 129.838 793.574 130.094C793.847 130.347 794.064 130.682 794.226 131.099C794.388 131.517 794.469 132.031 794.469 132.642V133.068H789.423V132.199H793.446C793.446 131.83 793.372 131.5 793.224 131.21C793.08 130.92 792.872 130.692 792.602 130.524C792.335 130.357 792.02 130.273 791.656 130.273C791.256 130.273 790.909 130.372 790.616 130.571C790.327 130.767 790.104 131.023 789.947 131.338C789.791 131.653 789.713 131.991 789.713 132.352V132.932C789.713 133.426 789.798 133.845 789.969 134.189C790.142 134.53 790.382 134.79 790.689 134.969C790.996 135.145 791.352 135.233 791.759 135.233C792.023 135.233 792.261 135.196 792.474 135.122C792.69 135.045 792.876 134.932 793.033 134.781C793.189 134.628 793.31 134.437 793.395 134.21L794.366 134.483C794.264 134.812 794.092 135.102 793.851 135.352C793.609 135.599 793.311 135.793 792.956 135.932C792.601 136.068 792.202 136.136 791.759 136.136ZM795.999 138.455V129.455H796.97V130.494H797.089C797.163 130.381 797.266 130.236 797.396 130.06C797.53 129.881 797.72 129.722 797.967 129.582C798.217 129.44 798.555 129.369 798.982 129.369C799.533 129.369 800.018 129.507 800.439 129.783C800.859 130.058 801.188 130.449 801.423 130.955C801.659 131.46 801.777 132.057 801.777 132.744C801.777 133.438 801.659 134.038 801.423 134.547C801.188 135.053 800.861 135.445 800.443 135.723C800.026 135.999 799.544 136.136 798.999 136.136C798.578 136.136 798.241 136.067 797.989 135.928C797.736 135.786 797.541 135.625 797.405 135.446C797.268 135.264 797.163 135.114 797.089 134.994H797.004V138.455H795.999ZM796.987 132.727C796.987 133.222 797.06 133.658 797.205 134.036C797.349 134.411 797.561 134.705 797.839 134.918C798.118 135.128 798.459 135.233 798.862 135.233C799.283 135.233 799.634 135.122 799.915 134.901C800.199 134.676 800.412 134.375 800.554 133.997C800.699 133.616 800.771 133.193 800.771 132.727C800.771 132.267 800.7 131.852 800.558 131.483C800.419 131.111 800.207 130.817 799.923 130.601C799.642 130.382 799.288 130.273 798.862 130.273C798.453 130.273 798.109 130.376 797.831 130.584C797.553 130.788 797.342 131.075 797.2 131.445C797.058 131.811 796.987 132.239 796.987 132.727ZM805.237 136.153C804.822 136.153 804.446 136.075 804.108 135.919C803.77 135.76 803.501 135.531 803.303 135.233C803.104 134.932 803.004 134.568 803.004 134.142C803.004 133.767 803.078 133.463 803.226 133.23C803.374 132.994 803.571 132.81 803.818 132.676C804.065 132.543 804.338 132.443 804.636 132.378C804.938 132.31 805.24 132.256 805.544 132.216C805.942 132.165 806.264 132.126 806.511 132.101C806.761 132.072 806.943 132.026 807.057 131.96C807.173 131.895 807.232 131.781 807.232 131.619V131.585C807.232 131.165 807.116 130.838 806.886 130.605C806.659 130.372 806.314 130.256 805.851 130.256C805.371 130.256 804.994 130.361 804.722 130.571C804.449 130.781 804.257 131.006 804.146 131.244L803.192 130.903C803.362 130.506 803.589 130.196 803.874 129.974C804.161 129.75 804.473 129.594 804.811 129.506C805.152 129.415 805.487 129.369 805.817 129.369C806.027 129.369 806.268 129.395 806.541 129.446C806.817 129.494 807.082 129.595 807.338 129.749C807.597 129.902 807.811 130.134 807.982 130.443C808.152 130.753 808.237 131.168 808.237 131.688V136H807.232V135.114H807.18C807.112 135.256 806.999 135.408 806.839 135.57C806.68 135.732 806.469 135.869 806.205 135.983C805.94 136.097 805.618 136.153 805.237 136.153ZM805.391 135.25C805.788 135.25 806.124 135.172 806.396 135.016C806.672 134.859 806.879 134.658 807.018 134.411C807.161 134.163 807.232 133.903 807.232 133.631V132.71C807.189 132.761 807.095 132.808 806.95 132.851C806.808 132.891 806.643 132.926 806.456 132.957C806.271 132.986 806.091 133.011 805.915 133.034C805.741 133.054 805.601 133.071 805.493 133.085C805.232 133.119 804.987 133.175 804.76 133.251C804.536 133.325 804.354 133.437 804.214 133.588C804.078 133.736 804.01 133.937 804.01 134.193C804.01 134.543 804.139 134.807 804.398 134.986C804.659 135.162 804.99 135.25 805.391 135.25ZM810.073 136V129.455H811.044V130.443H811.113C811.232 130.119 811.448 129.857 811.76 129.655C812.073 129.453 812.425 129.352 812.817 129.352C812.891 129.352 812.983 129.354 813.094 129.357C813.205 129.359 813.289 129.364 813.346 129.369V130.392C813.311 130.384 813.233 130.371 813.111 130.354C812.992 130.334 812.865 130.324 812.732 130.324C812.414 130.324 812.13 130.391 811.88 130.524C811.632 130.655 811.436 130.837 811.292 131.07C811.15 131.3 811.078 131.562 811.078 131.858V136H810.073ZM816.464 136.153C816.049 136.153 815.673 136.075 815.335 135.919C814.996 135.76 814.728 135.531 814.529 135.233C814.33 134.932 814.231 134.568 814.231 134.142C814.231 133.767 814.305 133.463 814.452 133.23C814.6 132.994 814.798 132.81 815.045 132.676C815.292 132.543 815.565 132.443 815.863 132.378C816.164 132.31 816.467 132.256 816.771 132.216C817.168 132.165 817.491 132.126 817.738 132.101C817.988 132.072 818.17 132.026 818.283 131.96C818.4 131.895 818.458 131.781 818.458 131.619V131.585C818.458 131.165 818.343 130.838 818.113 130.605C817.886 130.372 817.54 130.256 817.077 130.256C816.597 130.256 816.221 130.361 815.948 130.571C815.675 130.781 815.484 131.006 815.373 131.244L814.418 130.903C814.589 130.506 814.816 130.196 815.1 129.974C815.387 129.75 815.7 129.594 816.038 129.506C816.379 129.415 816.714 129.369 817.043 129.369C817.254 129.369 817.495 129.395 817.768 129.446C818.043 129.494 818.309 129.595 818.565 129.749C818.823 129.902 819.038 130.134 819.208 130.443C819.379 130.753 819.464 131.168 819.464 131.688V136H818.458V135.114H818.407C818.339 135.256 818.225 135.408 818.066 135.57C817.907 135.732 817.695 135.869 817.431 135.983C817.167 136.097 816.844 136.153 816.464 136.153ZM816.617 135.25C817.015 135.25 817.35 135.172 817.623 135.016C817.898 134.859 818.106 134.658 818.245 134.411C818.387 134.163 818.458 133.903 818.458 133.631V132.71C818.415 132.761 818.322 132.808 818.177 132.851C818.035 132.891 817.87 132.926 817.683 132.957C817.498 132.986 817.317 133.011 817.141 133.034C816.968 133.054 816.827 133.071 816.719 133.085C816.458 133.119 816.214 133.175 815.987 133.251C815.762 133.325 815.58 133.437 815.441 133.588C815.305 133.736 815.237 133.937 815.237 134.193C815.237 134.543 815.366 134.807 815.624 134.986C815.886 135.162 816.217 135.25 816.617 135.25ZM824.146 129.455V130.307H820.754V129.455H824.146ZM821.743 127.886H822.748V134.125C822.748 134.409 822.789 134.622 822.872 134.764C822.957 134.903 823.065 134.997 823.196 135.045C823.329 135.091 823.47 135.114 823.618 135.114C823.728 135.114 823.819 135.108 823.89 135.097C823.961 135.082 824.018 135.071 824.061 135.062L824.265 135.966C824.197 135.991 824.102 136.017 823.98 136.043C823.858 136.071 823.703 136.085 823.515 136.085C823.231 136.085 822.953 136.024 822.68 135.902C822.41 135.78 822.186 135.594 822.007 135.344C821.831 135.094 821.743 134.778 821.743 134.398V127.886ZM828.248 136.136C827.657 136.136 827.138 135.996 826.692 135.714C826.249 135.433 825.902 135.04 825.652 134.534C825.405 134.028 825.282 133.437 825.282 132.761C825.282 132.08 825.405 131.484 825.652 130.976C825.902 130.467 826.249 130.072 826.692 129.791C827.138 129.51 827.657 129.369 828.248 129.369C828.838 129.369 829.355 129.51 829.799 129.791C830.245 130.072 830.591 130.467 830.838 130.976C831.088 131.484 831.213 132.08 831.213 132.761C831.213 133.437 831.088 134.028 830.838 134.534C830.591 135.04 830.245 135.433 829.799 135.714C829.355 135.996 828.838 136.136 828.248 136.136ZM828.248 135.233C828.696 135.233 829.066 135.118 829.355 134.888C829.645 134.658 829.86 134.355 829.999 133.98C830.138 133.605 830.208 133.199 830.208 132.761C830.208 132.324 830.138 131.916 829.999 131.538C829.86 131.161 829.645 130.855 829.355 130.622C829.066 130.389 828.696 130.273 828.248 130.273C827.799 130.273 827.429 130.389 827.14 130.622C826.85 130.855 826.635 131.161 826.496 131.538C826.357 131.916 826.287 132.324 826.287 132.761C826.287 133.199 826.357 133.605 826.496 133.98C826.635 134.355 826.85 134.658 827.14 134.888C827.429 135.118 827.799 135.233 828.248 135.233ZM832.749 136V129.455H833.72V130.443H833.788C833.908 130.119 834.124 129.857 834.436 129.655C834.749 129.453 835.101 129.352 835.493 129.352C835.567 129.352 835.659 129.354 835.77 129.357C835.881 129.359 835.964 129.364 836.021 129.369V130.392C835.987 130.384 835.909 130.371 835.787 130.354C835.668 130.334 835.541 130.324 835.408 130.324C835.089 130.324 834.805 130.391 834.555 130.524C834.308 130.655 834.112 130.837 833.967 131.07C833.825 131.3 833.754 131.562 833.754 131.858V136H832.749ZM841.85 130.92L840.946 131.176C840.89 131.026 840.806 130.879 840.695 130.737C840.587 130.592 840.439 130.473 840.252 130.379C840.064 130.286 839.824 130.239 839.532 130.239C839.131 130.239 838.797 130.331 838.53 130.516C838.266 130.697 838.134 130.929 838.134 131.21C838.134 131.46 838.225 131.658 838.407 131.803C838.588 131.947 838.873 132.068 839.259 132.165L840.23 132.403C840.816 132.545 841.252 132.763 841.539 133.055C841.826 133.345 841.969 133.719 841.969 134.176C841.969 134.551 841.861 134.886 841.645 135.182C841.432 135.477 841.134 135.71 840.75 135.881C840.367 136.051 839.921 136.136 839.412 136.136C838.745 136.136 838.192 135.991 837.755 135.702C837.317 135.412 837.04 134.989 836.924 134.432L837.878 134.193C837.969 134.545 838.141 134.81 838.394 134.986C838.65 135.162 838.983 135.25 839.395 135.25C839.864 135.25 840.236 135.151 840.512 134.952C840.79 134.75 840.929 134.509 840.929 134.227C840.929 134 840.85 133.81 840.691 133.656C840.532 133.5 840.287 133.384 839.958 133.307L838.867 133.051C838.267 132.909 837.827 132.689 837.546 132.391C837.267 132.089 837.128 131.713 837.128 131.261C837.128 130.892 837.232 130.565 837.439 130.281C837.65 129.997 837.935 129.774 838.296 129.612C838.659 129.45 839.071 129.369 839.532 129.369C840.179 129.369 840.688 129.511 841.057 129.795C841.429 130.08 841.694 130.455 841.85 130.92Z"
    fill="${gray11}"
  />
  <path
    d="M411.258 127.273V136H410.201V127.273H411.258ZM414.246 132.062V136H413.241V129.455H414.212V130.477H414.298C414.451 130.145 414.684 129.878 414.996 129.676C415.309 129.472 415.712 129.369 416.207 129.369C416.65 129.369 417.038 129.46 417.37 129.642C417.702 129.821 417.961 130.094 418.146 130.46C418.33 130.824 418.423 131.284 418.423 131.841V136H417.417V131.909C417.417 131.395 417.283 130.994 417.016 130.707C416.749 130.418 416.383 130.273 415.917 130.273C415.596 130.273 415.309 130.342 415.056 130.482C414.806 130.621 414.609 130.824 414.464 131.091C414.319 131.358 414.246 131.682 414.246 132.062ZM423.107 129.455V130.307H419.715V129.455H423.107ZM420.703 127.886H421.709V134.125C421.709 134.409 421.75 134.622 421.833 134.764C421.918 134.903 422.026 134.997 422.157 135.045C422.29 135.091 422.431 135.114 422.578 135.114C422.689 135.114 422.78 135.108 422.851 135.097C422.922 135.082 422.979 135.071 423.022 135.062L423.226 135.966C423.158 135.991 423.063 136.017 422.941 136.043C422.819 136.071 422.664 136.085 422.476 136.085C422.192 136.085 421.914 136.024 421.641 135.902C421.371 135.78 421.147 135.594 420.968 135.344C420.792 135.094 420.703 134.778 420.703 134.398V127.886ZM427.294 136.136C426.663 136.136 426.119 135.997 425.662 135.719C425.207 135.438 424.856 135.045 424.609 134.543C424.365 134.037 424.243 133.449 424.243 132.778C424.243 132.108 424.365 131.517 424.609 131.006C424.856 130.491 425.2 130.091 425.64 129.804C426.083 129.514 426.6 129.369 427.191 129.369C427.532 129.369 427.869 129.426 428.201 129.54C428.534 129.653 428.836 129.838 429.109 130.094C429.382 130.347 429.599 130.682 429.761 131.099C429.923 131.517 430.004 132.031 430.004 132.642V133.068H424.958V132.199H428.981C428.981 131.83 428.907 131.5 428.76 131.21C428.615 130.92 428.407 130.692 428.137 130.524C427.87 130.357 427.555 130.273 427.191 130.273C426.791 130.273 426.444 130.372 426.152 130.571C425.862 130.767 425.639 131.023 425.483 131.338C425.326 131.653 425.248 131.991 425.248 132.352V132.932C425.248 133.426 425.333 133.845 425.504 134.189C425.677 134.53 425.917 134.79 426.224 134.969C426.531 135.145 426.887 135.233 427.294 135.233C427.558 135.233 427.797 135.196 428.01 135.122C428.225 135.045 428.412 134.932 428.568 134.781C428.724 134.628 428.845 134.437 428.93 134.21L429.902 134.483C429.799 134.812 429.627 135.102 429.386 135.352C429.145 135.599 428.846 135.793 428.491 135.932C428.136 136.068 427.737 136.136 427.294 136.136ZM431.534 136V129.455H432.505V130.443H432.574C432.693 130.119 432.909 129.857 433.221 129.655C433.534 129.453 433.886 129.352 434.278 129.352C434.352 129.352 434.444 129.354 434.555 129.357C434.666 129.359 434.75 129.364 434.806 129.369V130.392C434.772 130.384 434.694 130.371 434.572 130.354C434.453 130.334 434.326 130.324 434.193 130.324C433.875 130.324 433.591 130.391 433.341 130.524C433.093 130.655 432.897 130.837 432.752 131.07C432.61 131.3 432.539 131.562 432.539 131.858V136H431.534ZM437.925 136.153C437.51 136.153 437.134 136.075 436.795 135.919C436.457 135.76 436.189 135.531 435.99 135.233C435.791 134.932 435.692 134.568 435.692 134.142C435.692 133.767 435.766 133.463 435.913 133.23C436.061 132.994 436.259 132.81 436.506 132.676C436.753 132.543 437.026 132.443 437.324 132.378C437.625 132.31 437.928 132.256 438.232 132.216C438.629 132.165 438.952 132.126 439.199 132.101C439.449 132.072 439.631 132.026 439.744 131.96C439.861 131.895 439.919 131.781 439.919 131.619V131.585C439.919 131.165 439.804 130.838 439.574 130.605C439.347 130.372 439.001 130.256 438.538 130.256C438.058 130.256 437.682 130.361 437.409 130.571C437.136 130.781 436.945 131.006 436.834 131.244L435.879 130.903C436.05 130.506 436.277 130.196 436.561 129.974C436.848 129.75 437.161 129.594 437.499 129.506C437.839 129.415 438.175 129.369 438.504 129.369C438.714 129.369 438.956 129.395 439.229 129.446C439.504 129.494 439.77 129.595 440.026 129.749C440.284 129.902 440.499 130.134 440.669 130.443C440.839 130.753 440.925 131.168 440.925 131.688V136H439.919V135.114H439.868C439.8 135.256 439.686 135.408 439.527 135.57C439.368 135.732 439.156 135.869 438.892 135.983C438.628 136.097 438.305 136.153 437.925 136.153ZM438.078 135.25C438.476 135.25 438.811 135.172 439.084 135.016C439.359 134.859 439.567 134.658 439.706 134.411C439.848 134.163 439.919 133.903 439.919 133.631V132.71C439.876 132.761 439.783 132.808 439.638 132.851C439.496 132.891 439.331 132.926 439.143 132.957C438.959 132.986 438.778 133.011 438.602 133.034C438.429 133.054 438.288 133.071 438.18 133.085C437.919 133.119 437.675 133.175 437.447 133.251C437.223 133.325 437.041 133.437 436.902 133.588C436.766 133.736 436.697 133.937 436.697 134.193C436.697 134.543 436.827 134.807 437.085 134.986C437.347 135.162 437.678 135.25 438.078 135.25ZM445.419 136.136C444.806 136.136 444.277 135.991 443.834 135.702C443.391 135.412 443.05 135.013 442.811 134.504C442.573 133.996 442.453 133.415 442.453 132.761C442.453 132.097 442.576 131.51 442.82 131.001C443.067 130.49 443.411 130.091 443.851 129.804C444.294 129.514 444.811 129.369 445.402 129.369C445.863 129.369 446.277 129.455 446.647 129.625C447.016 129.795 447.319 130.034 447.554 130.341C447.79 130.648 447.936 131.006 447.993 131.415H446.988C446.911 131.116 446.74 130.852 446.476 130.622C446.215 130.389 445.863 130.273 445.419 130.273C445.027 130.273 444.684 130.375 444.388 130.58C444.096 130.781 443.867 131.067 443.702 131.436C443.54 131.803 443.459 132.233 443.459 132.727C443.459 133.233 443.539 133.673 443.698 134.048C443.86 134.423 444.087 134.714 444.38 134.922C444.675 135.129 445.022 135.233 445.419 135.233C445.681 135.233 445.918 135.188 446.131 135.097C446.344 135.006 446.525 134.875 446.672 134.705C446.82 134.534 446.925 134.33 446.988 134.091H447.993C447.936 134.477 447.796 134.825 447.571 135.135C447.35 135.442 447.056 135.686 446.689 135.868C446.326 136.047 445.902 136.136 445.419 136.136ZM452.31 129.455V130.307H448.918V129.455H452.31ZM449.907 127.886H450.912V134.125C450.912 134.409 450.953 134.622 451.036 134.764C451.121 134.903 451.229 134.997 451.36 135.045C451.493 135.091 451.634 135.114 451.782 135.114C451.892 135.114 451.983 135.108 452.054 135.097C452.125 135.082 452.182 135.071 452.225 135.062L452.429 135.966C452.361 135.991 452.266 136.017 452.144 136.043C452.022 136.071 451.867 136.085 451.679 136.085C451.395 136.085 451.117 136.024 450.844 135.902C450.574 135.78 450.35 135.594 450.171 135.344C449.995 135.094 449.907 134.778 449.907 134.398V127.886ZM453.823 136V129.455H454.828V136H453.823ZM454.334 128.364C454.138 128.364 453.969 128.297 453.827 128.163C453.688 128.03 453.618 127.869 453.618 127.682C453.618 127.494 453.688 127.334 453.827 127.2C453.969 127.067 454.138 127 454.334 127C454.53 127 454.698 127.067 454.837 127.2C454.979 127.334 455.05 127.494 455.05 127.682C455.05 127.869 454.979 128.03 454.837 128.163C454.698 128.297 454.53 128.364 454.334 128.364ZM462.023 129.455L459.602 136H458.58L456.159 129.455H457.25L459.057 134.67H459.125L460.932 129.455H462.023ZM465.86 136.136C465.229 136.136 464.685 135.997 464.228 135.719C463.773 135.438 463.423 135.045 463.175 134.543C462.931 134.037 462.809 133.449 462.809 132.778C462.809 132.108 462.931 131.517 463.175 131.006C463.423 130.491 463.766 130.091 464.207 129.804C464.65 129.514 465.167 129.369 465.758 129.369C466.099 129.369 466.435 129.426 466.768 129.54C467.1 129.653 467.403 129.838 467.675 130.094C467.948 130.347 468.165 130.682 468.327 131.099C468.489 131.517 468.57 132.031 468.57 132.642V133.068H463.525V132.199H467.548C467.548 131.83 467.474 131.5 467.326 131.21C467.181 130.92 466.974 130.692 466.704 130.524C466.437 130.357 466.121 130.273 465.758 130.273C465.357 130.273 465.011 130.372 464.718 130.571C464.428 130.767 464.205 131.023 464.049 131.338C463.893 131.653 463.815 131.991 463.815 132.352V132.932C463.815 133.426 463.9 133.845 464.07 134.189C464.244 134.53 464.484 134.79 464.79 134.969C465.097 135.145 465.454 135.233 465.86 135.233C466.124 135.233 466.363 135.196 466.576 135.122C466.792 135.045 466.978 134.932 467.134 134.781C467.29 134.628 467.411 134.437 467.496 134.21L468.468 134.483C468.366 134.812 468.194 135.102 467.952 135.352C467.711 135.599 467.413 135.793 467.058 135.932C466.702 136.068 466.303 136.136 465.86 136.136ZM476.134 136.136C475.521 136.136 474.992 135.991 474.549 135.702C474.106 135.412 473.765 135.013 473.526 134.504C473.288 133.996 473.168 133.415 473.168 132.761C473.168 132.097 473.29 131.51 473.535 131.001C473.782 130.49 474.126 130.091 474.566 129.804C475.009 129.514 475.526 129.369 476.117 129.369C476.577 129.369 476.992 129.455 477.362 129.625C477.731 129.795 478.033 130.034 478.269 130.341C478.505 130.648 478.651 131.006 478.708 131.415H477.702C477.626 131.116 477.455 130.852 477.191 130.622C476.93 130.389 476.577 130.273 476.134 130.273C475.742 130.273 475.398 130.375 475.103 130.58C474.81 130.781 474.582 131.067 474.417 131.436C474.255 131.803 474.174 132.233 474.174 132.727C474.174 133.233 474.254 133.673 474.413 134.048C474.575 134.423 474.802 134.714 475.094 134.922C475.39 135.129 475.737 135.233 476.134 135.233C476.396 135.233 476.633 135.188 476.846 135.097C477.059 135.006 477.239 134.875 477.387 134.705C477.535 134.534 477.64 134.33 477.702 134.091H478.708C478.651 134.477 478.511 134.825 478.286 135.135C478.065 135.442 477.771 135.686 477.404 135.868C477.04 136.047 476.617 136.136 476.134 136.136ZM482.837 136.136C482.246 136.136 481.728 135.996 481.282 135.714C480.839 135.433 480.492 135.04 480.242 134.534C479.995 134.028 479.871 133.437 479.871 132.761C479.871 132.08 479.995 131.484 480.242 130.976C480.492 130.467 480.839 130.072 481.282 129.791C481.728 129.51 482.246 129.369 482.837 129.369C483.428 129.369 483.945 129.51 484.388 129.791C484.835 130.072 485.181 130.467 485.428 130.976C485.678 131.484 485.803 132.08 485.803 132.761C485.803 133.437 485.678 134.028 485.428 134.534C485.181 135.04 484.835 135.433 484.388 135.714C483.945 135.996 483.428 136.136 482.837 136.136ZM482.837 135.233C483.286 135.233 483.656 135.118 483.945 134.888C484.235 134.658 484.45 134.355 484.589 133.98C484.728 133.605 484.798 133.199 484.798 132.761C484.798 132.324 484.728 131.916 484.589 131.538C484.45 131.161 484.235 130.855 483.945 130.622C483.656 130.389 483.286 130.273 482.837 130.273C482.388 130.273 482.019 130.389 481.729 130.622C481.44 130.855 481.225 131.161 481.086 131.538C480.947 131.916 480.877 132.324 480.877 132.761C480.877 133.199 480.947 133.605 481.086 133.98C481.225 134.355 481.44 134.658 481.729 134.888C482.019 135.118 482.388 135.233 482.837 135.233ZM487.338 136V129.455H488.31V130.477H488.395C488.532 130.128 488.752 129.857 489.056 129.663C489.36 129.467 489.725 129.369 490.151 129.369C490.583 129.369 490.942 129.467 491.229 129.663C491.519 129.857 491.745 130.128 491.907 130.477H491.975C492.142 130.139 492.394 129.871 492.729 129.672C493.064 129.47 493.466 129.369 493.935 129.369C494.52 129.369 494.999 129.553 495.371 129.919C495.743 130.283 495.929 130.849 495.929 131.619V136H494.924V131.619C494.924 131.136 494.792 130.791 494.527 130.584C494.263 130.376 493.952 130.273 493.594 130.273C493.134 130.273 492.777 130.412 492.525 130.69C492.272 130.966 492.145 131.315 492.145 131.739V136H491.123V131.517C491.123 131.145 491.002 130.845 490.76 130.618C490.519 130.388 490.208 130.273 489.827 130.273C489.566 130.273 489.321 130.342 489.094 130.482C488.87 130.621 488.688 130.814 488.549 131.061C488.412 131.305 488.344 131.588 488.344 131.909V136H487.338ZM497.768 138.455V129.455H498.74V130.494H498.859C498.933 130.381 499.035 130.236 499.166 130.06C499.299 129.881 499.49 129.722 499.737 129.582C499.987 129.44 500.325 129.369 500.751 129.369C501.302 129.369 501.788 129.507 502.208 129.783C502.629 130.058 502.957 130.449 503.193 130.955C503.429 131.46 503.547 132.057 503.547 132.744C503.547 133.438 503.429 134.038 503.193 134.547C502.957 135.053 502.63 135.445 502.213 135.723C501.795 135.999 501.314 136.136 500.768 136.136C500.348 136.136 500.011 136.067 499.758 135.928C499.505 135.786 499.311 135.625 499.174 135.446C499.038 135.264 498.933 135.114 498.859 134.994H498.774V138.455H497.768ZM498.757 132.727C498.757 133.222 498.829 133.658 498.974 134.036C499.119 134.411 499.331 134.705 499.609 134.918C499.887 135.128 500.228 135.233 500.632 135.233C501.052 135.233 501.403 135.122 501.684 134.901C501.968 134.676 502.181 134.375 502.324 133.997C502.468 133.616 502.541 133.193 502.541 132.727C502.541 132.267 502.47 131.852 502.328 131.483C502.189 131.111 501.977 130.817 501.693 130.601C501.412 130.382 501.058 130.273 500.632 130.273C500.223 130.273 499.879 130.376 499.6 130.584C499.322 130.788 499.112 131.075 498.97 131.445C498.828 131.811 498.757 132.239 498.757 132.727ZM507.74 136.136C507.149 136.136 506.63 135.996 506.184 135.714C505.741 135.433 505.395 135.04 505.145 134.534C504.897 134.028 504.774 133.437 504.774 132.761C504.774 132.08 504.897 131.484 505.145 130.976C505.395 130.467 505.741 130.072 506.184 129.791C506.63 129.51 507.149 129.369 507.74 129.369C508.331 129.369 508.848 129.51 509.291 129.791C509.737 130.072 510.083 130.467 510.331 130.976C510.581 131.484 510.706 132.08 510.706 132.761C510.706 133.437 510.581 134.028 510.331 134.534C510.083 135.04 509.737 135.433 509.291 135.714C508.848 135.996 508.331 136.136 507.74 136.136ZM507.74 135.233C508.189 135.233 508.558 135.118 508.848 134.888C509.137 134.658 509.352 134.355 509.491 133.98C509.63 133.605 509.7 133.199 509.7 132.761C509.7 132.324 509.63 131.916 509.491 131.538C509.352 131.161 509.137 130.855 508.848 130.622C508.558 130.389 508.189 130.273 507.74 130.273C507.291 130.273 506.922 130.389 506.632 130.622C506.342 130.855 506.127 131.161 505.988 131.538C505.849 131.916 505.779 132.324 505.779 132.761C505.779 133.199 505.849 133.605 505.988 133.98C506.127 134.355 506.342 134.658 506.632 134.888C506.922 135.118 507.291 135.233 507.74 135.233ZM513.246 132.062V136H512.241V129.455H513.212V130.477H513.298C513.451 130.145 513.684 129.878 513.996 129.676C514.309 129.472 514.712 129.369 515.207 129.369C515.65 129.369 516.038 129.46 516.37 129.642C516.702 129.821 516.961 130.094 517.146 130.46C517.33 130.824 517.423 131.284 517.423 131.841V136H516.417V131.909C516.417 131.395 516.283 130.994 516.016 130.707C515.749 130.418 515.383 130.273 514.917 130.273C514.596 130.273 514.309 130.342 514.056 130.482C513.806 130.621 513.609 130.824 513.464 131.091C513.319 131.358 513.246 131.682 513.246 132.062ZM522.005 136.136C521.374 136.136 520.83 135.997 520.373 135.719C519.918 135.438 519.567 135.045 519.32 134.543C519.076 134.037 518.953 133.449 518.953 132.778C518.953 132.108 519.076 131.517 519.32 131.006C519.567 130.491 519.911 130.091 520.351 129.804C520.794 129.514 521.311 129.369 521.902 129.369C522.243 129.369 522.58 129.426 522.912 129.54C523.245 129.653 523.547 129.838 523.82 130.094C524.093 130.347 524.31 130.682 524.472 131.099C524.634 131.517 524.715 132.031 524.715 132.642V133.068H519.669V132.199H523.692C523.692 131.83 523.618 131.5 523.471 131.21C523.326 130.92 523.118 130.692 522.848 130.524C522.581 130.357 522.266 130.273 521.902 130.273C521.502 130.273 521.155 130.372 520.863 130.571C520.573 130.767 520.35 131.023 520.194 131.338C520.037 131.653 519.959 131.991 519.959 132.352V132.932C519.959 133.426 520.044 133.845 520.215 134.189C520.388 134.53 520.628 134.79 520.935 134.969C521.242 135.145 521.598 135.233 522.005 135.233C522.269 135.233 522.507 135.196 522.721 135.122C522.936 135.045 523.123 134.932 523.279 134.781C523.435 134.628 523.556 134.437 523.641 134.21L524.613 134.483C524.51 134.812 524.338 135.102 524.097 135.352C523.855 135.599 523.557 135.793 523.202 135.932C522.847 136.068 522.448 136.136 522.005 136.136ZM527.25 132.062V136H526.245V129.455H527.216V130.477H527.301C527.455 130.145 527.688 129.878 528 129.676C528.313 129.472 528.716 129.369 529.211 129.369C529.654 129.369 530.042 129.46 530.374 129.642C530.706 129.821 530.965 130.094 531.15 130.46C531.334 130.824 531.426 131.284 531.426 131.841V136H530.421V131.909C530.421 131.395 530.287 130.994 530.02 130.707C529.753 130.418 529.387 130.273 528.921 130.273C528.6 130.273 528.313 130.342 528.06 130.482C527.81 130.621 527.613 130.824 527.468 131.091C527.323 131.358 527.25 131.682 527.25 132.062ZM536.111 129.455V130.307H532.719V129.455H536.111ZM533.707 127.886H534.713V134.125C534.713 134.409 534.754 134.622 534.837 134.764C534.922 134.903 535.03 134.997 535.161 135.045C535.294 135.091 535.435 135.114 535.582 135.114C535.693 135.114 535.784 135.108 535.855 135.097C535.926 135.082 535.983 135.071 536.026 135.062L536.23 135.966C536.162 135.991 536.067 136.017 535.945 136.043C535.822 136.071 535.668 136.085 535.48 136.085C535.196 136.085 534.918 136.024 534.645 135.902C534.375 135.78 534.151 135.594 533.972 135.344C533.795 135.094 533.707 134.778 533.707 134.398V127.886ZM542.143 130.92L541.239 131.176C541.183 131.026 541.099 130.879 540.988 130.737C540.88 130.592 540.732 130.473 540.545 130.379C540.357 130.286 540.117 130.239 539.825 130.239C539.424 130.239 539.09 130.331 538.823 130.516C538.559 130.697 538.427 130.929 538.427 131.21C538.427 131.46 538.518 131.658 538.7 131.803C538.881 131.947 539.165 132.068 539.552 132.165L540.523 132.403C541.109 132.545 541.545 132.763 541.832 133.055C542.119 133.345 542.262 133.719 542.262 134.176C542.262 134.551 542.154 134.886 541.938 135.182C541.725 135.477 541.427 135.71 541.043 135.881C540.66 136.051 540.214 136.136 539.705 136.136C539.038 136.136 538.485 135.991 538.048 135.702C537.61 135.412 537.333 134.989 537.217 134.432L538.171 134.193C538.262 134.545 538.434 134.81 538.687 134.986C538.942 135.162 539.276 135.25 539.688 135.25C540.157 135.25 540.529 135.151 540.805 134.952C541.083 134.75 541.222 134.509 541.222 134.227C541.222 134 541.143 133.81 540.984 133.656C540.825 133.5 540.58 133.384 540.251 133.307L539.16 133.051C538.56 132.909 538.12 132.689 537.839 132.391C537.56 132.089 537.421 131.713 537.421 131.261C537.421 130.892 537.525 130.565 537.732 130.281C537.942 129.997 538.228 129.774 538.589 129.612C538.952 129.45 539.364 129.369 539.825 129.369C540.472 129.369 540.981 129.511 541.35 129.795C541.722 130.08 541.987 130.455 542.143 130.92Z"
    fill="${gray11}"
  />
  <path
    d="M190.067 136V127.273H193.118C193.726 127.273 194.227 127.378 194.622 127.588C195.017 127.795 195.311 128.075 195.504 128.428C195.697 128.777 195.794 129.165 195.794 129.591C195.794 129.966 195.727 130.276 195.594 130.52C195.463 130.764 195.29 130.957 195.074 131.099C194.861 131.241 194.629 131.347 194.379 131.415V131.5C194.646 131.517 194.915 131.611 195.184 131.781C195.454 131.952 195.68 132.196 195.862 132.514C196.044 132.832 196.135 133.222 196.135 133.682C196.135 134.119 196.035 134.513 195.836 134.862C195.638 135.212 195.324 135.489 194.895 135.693C194.466 135.898 193.907 136 193.22 136H190.067ZM191.123 135.062H193.22C193.91 135.062 194.4 134.929 194.69 134.662C194.983 134.392 195.129 134.065 195.129 133.682C195.129 133.386 195.054 133.114 194.903 132.864C194.753 132.611 194.538 132.409 194.26 132.259C193.981 132.105 193.652 132.028 193.271 132.028H191.123V135.062ZM191.123 131.108H193.084C193.402 131.108 193.689 131.045 193.944 130.92C194.203 130.795 194.407 130.619 194.558 130.392C194.711 130.165 194.788 129.898 194.788 129.591C194.788 129.207 194.655 128.882 194.388 128.615C194.121 128.345 193.697 128.21 193.118 128.21H191.123V131.108ZM199.661 136.153C199.246 136.153 198.87 136.075 198.532 135.919C198.194 135.76 197.925 135.531 197.726 135.233C197.528 134.932 197.428 134.568 197.428 134.142C197.428 133.767 197.502 133.463 197.65 133.23C197.797 132.994 197.995 132.81 198.242 132.676C198.489 132.543 198.762 132.443 199.06 132.378C199.361 132.31 199.664 132.256 199.968 132.216C200.366 132.165 200.688 132.126 200.935 132.101C201.185 132.072 201.367 132.026 201.481 131.96C201.597 131.895 201.655 131.781 201.655 131.619V131.585C201.655 131.165 201.54 130.838 201.31 130.605C201.083 130.372 200.738 130.256 200.275 130.256C199.795 130.256 199.418 130.361 199.145 130.571C198.873 130.781 198.681 131.006 198.57 131.244L197.616 130.903C197.786 130.506 198.013 130.196 198.297 129.974C198.584 129.75 198.897 129.594 199.235 129.506C199.576 129.415 199.911 129.369 200.241 129.369C200.451 129.369 200.692 129.395 200.965 129.446C201.241 129.494 201.506 129.595 201.762 129.749C202.02 129.902 202.235 130.134 202.405 130.443C202.576 130.753 202.661 131.168 202.661 131.688V136H201.655V135.114H201.604C201.536 135.256 201.422 135.408 201.263 135.57C201.104 135.732 200.893 135.869 200.628 135.983C200.364 136.097 200.042 136.153 199.661 136.153ZM199.814 135.25C200.212 135.25 200.547 135.172 200.82 135.016C201.096 134.859 201.303 134.658 201.442 134.411C201.584 134.163 201.655 133.903 201.655 133.631V132.71C201.613 132.761 201.519 132.808 201.374 132.851C201.232 132.891 201.067 132.926 200.88 132.957C200.695 132.986 200.515 133.011 200.339 133.034C200.165 133.054 200.025 133.071 199.917 133.085C199.655 133.119 199.411 133.175 199.184 133.251C198.959 133.325 198.778 133.437 198.638 133.588C198.502 133.736 198.434 133.937 198.434 134.193C198.434 134.543 198.563 134.807 198.822 134.986C199.083 135.162 199.414 135.25 199.814 135.25ZM207.156 136.136C206.542 136.136 206.014 135.991 205.57 135.702C205.127 135.412 204.786 135.013 204.548 134.504C204.309 133.996 204.19 133.415 204.19 132.761C204.19 132.097 204.312 131.51 204.556 131.001C204.803 130.49 205.147 130.091 205.588 129.804C206.031 129.514 206.548 129.369 207.139 129.369C207.599 129.369 208.014 129.455 208.383 129.625C208.752 129.795 209.055 130.034 209.291 130.341C209.526 130.648 209.673 131.006 209.73 131.415H208.724C208.647 131.116 208.477 130.852 208.213 130.622C207.951 130.389 207.599 130.273 207.156 130.273C206.764 130.273 206.42 130.375 206.124 130.58C205.832 130.781 205.603 131.067 205.438 131.436C205.276 131.803 205.195 132.233 205.195 132.727C205.195 133.233 205.275 133.673 205.434 134.048C205.596 134.423 205.823 134.714 206.116 134.922C206.411 135.129 206.758 135.233 207.156 135.233C207.417 135.233 207.654 135.188 207.867 135.097C208.08 135.006 208.261 134.875 208.409 134.705C208.556 134.534 208.661 134.33 208.724 134.091H209.73C209.673 134.477 209.532 134.825 209.308 135.135C209.086 135.442 208.792 135.686 208.426 135.868C208.062 136.047 207.639 136.136 207.156 136.136ZM212.137 133.614L212.12 132.369H212.325L215.188 129.455H216.433L213.382 132.54H213.296L212.137 133.614ZM211.2 136V127.273H212.205V136H211.2ZM215.359 136L212.802 132.761L213.518 132.062L216.637 136H215.359ZM220.1 138.591C219.614 138.591 219.196 138.528 218.847 138.403C218.497 138.281 218.206 138.119 217.973 137.918C217.743 137.719 217.56 137.506 217.423 137.278L218.225 136.716C218.316 136.835 218.431 136.972 218.57 137.125C218.709 137.281 218.899 137.416 219.141 137.53C219.385 137.646 219.705 137.705 220.1 137.705C220.628 137.705 221.064 137.577 221.408 137.321C221.752 137.065 221.923 136.665 221.923 136.119V134.79H221.838C221.764 134.909 221.659 135.057 221.523 135.233C221.389 135.406 221.196 135.561 220.943 135.697C220.693 135.831 220.355 135.898 219.929 135.898C219.401 135.898 218.926 135.773 218.506 135.523C218.088 135.273 217.757 134.909 217.513 134.432C217.271 133.955 217.151 133.375 217.151 132.693C217.151 132.023 217.269 131.439 217.504 130.942C217.74 130.442 218.068 130.055 218.489 129.783C218.909 129.507 219.395 129.369 219.946 129.369C220.372 129.369 220.71 129.44 220.96 129.582C221.213 129.722 221.406 129.881 221.54 130.06C221.676 130.236 221.781 130.381 221.855 130.494H221.958V129.455H222.929V136.188C222.929 136.75 222.801 137.207 222.546 137.56C222.293 137.915 221.952 138.175 221.523 138.339C221.097 138.507 220.622 138.591 220.1 138.591ZM220.066 134.994C220.469 134.994 220.81 134.902 221.088 134.717C221.367 134.533 221.578 134.267 221.723 133.92C221.868 133.574 221.941 133.159 221.941 132.676C221.941 132.205 221.869 131.788 221.727 131.428C221.585 131.067 221.375 130.784 221.097 130.58C220.818 130.375 220.475 130.273 220.066 130.273C219.639 130.273 219.284 130.381 219 130.597C218.719 130.812 218.507 131.102 218.365 131.466C218.226 131.83 218.156 132.233 218.156 132.676C218.156 133.131 218.227 133.533 218.369 133.882C218.514 134.229 218.727 134.501 219.009 134.7C219.293 134.896 219.645 134.994 220.066 134.994ZM224.77 136V129.455H225.742V130.443H225.81C225.929 130.119 226.145 129.857 226.458 129.655C226.77 129.453 227.122 129.352 227.514 129.352C227.588 129.352 227.681 129.354 227.791 129.357C227.902 129.359 227.986 129.364 228.043 129.369V130.392C228.009 130.384 227.931 130.371 227.808 130.354C227.689 130.334 227.563 130.324 227.429 130.324C227.111 130.324 226.827 130.391 226.577 130.524C226.33 130.655 226.134 130.837 225.989 131.07C225.847 131.3 225.776 131.562 225.776 131.858V136H224.77ZM231.695 136.136C231.104 136.136 230.585 135.996 230.139 135.714C229.696 135.433 229.35 135.04 229.1 134.534C228.852 134.028 228.729 133.437 228.729 132.761C228.729 132.08 228.852 131.484 229.1 130.976C229.35 130.467 229.696 130.072 230.139 129.791C230.585 129.51 231.104 129.369 231.695 129.369C232.286 129.369 232.803 129.51 233.246 129.791C233.692 130.072 234.039 130.467 234.286 130.976C234.536 131.484 234.661 132.08 234.661 132.761C234.661 133.437 234.536 134.028 234.286 134.534C234.039 135.04 233.692 135.433 233.246 135.714C232.803 135.996 232.286 136.136 231.695 136.136ZM231.695 135.233C232.144 135.233 232.513 135.118 232.803 134.888C233.093 134.658 233.307 134.355 233.446 133.98C233.585 133.605 233.655 133.199 233.655 132.761C233.655 132.324 233.585 131.916 233.446 131.538C233.307 131.161 233.093 130.855 232.803 130.622C232.513 130.389 232.144 130.273 231.695 130.273C231.246 130.273 230.877 130.389 230.587 130.622C230.297 130.855 230.083 131.161 229.943 131.538C229.804 131.916 229.735 132.324 229.735 132.761C229.735 133.199 229.804 133.605 229.943 133.98C230.083 134.355 230.297 134.658 230.587 134.888C230.877 135.118 231.246 135.233 231.695 135.233ZM240.321 133.324V129.455H241.327V136H240.321V134.892H240.253C240.099 135.224 239.861 135.507 239.537 135.74C239.213 135.97 238.804 136.085 238.309 136.085C237.9 136.085 237.537 135.996 237.219 135.817C236.9 135.635 236.65 135.362 236.469 134.999C236.287 134.632 236.196 134.17 236.196 133.614V129.455H237.202V133.545C237.202 134.023 237.335 134.403 237.602 134.688C237.872 134.972 238.216 135.114 238.633 135.114C238.883 135.114 239.138 135.05 239.396 134.922C239.657 134.794 239.876 134.598 240.052 134.334C240.231 134.07 240.321 133.733 240.321 133.324ZM244.174 132.062V136H243.169V129.455H244.14V130.477H244.225C244.379 130.145 244.612 129.878 244.924 129.676C245.237 129.472 245.64 129.369 246.134 129.369C246.578 129.369 246.965 129.46 247.298 129.642C247.63 129.821 247.889 130.094 248.073 130.46C248.258 130.824 248.35 131.284 248.35 131.841V136H247.345V131.909C247.345 131.395 247.211 130.994 246.944 130.707C246.677 130.418 246.311 130.273 245.845 130.273C245.524 130.273 245.237 130.342 244.984 130.482C244.734 130.621 244.536 130.824 244.392 131.091C244.247 131.358 244.174 131.682 244.174 132.062ZM252.66 136.136C252.114 136.136 251.633 135.999 251.215 135.723C250.797 135.445 250.471 135.053 250.235 134.547C249.999 134.038 249.881 133.438 249.881 132.744C249.881 132.057 249.999 131.46 250.235 130.955C250.471 130.449 250.799 130.058 251.219 129.783C251.64 129.507 252.126 129.369 252.677 129.369C253.103 129.369 253.439 129.44 253.687 129.582C253.937 129.722 254.127 129.881 254.258 130.06C254.391 130.236 254.495 130.381 254.569 130.494H254.654V127.273H255.66V136H254.688V134.994H254.569C254.495 135.114 254.39 135.264 254.253 135.446C254.117 135.625 253.922 135.786 253.67 135.928C253.417 136.067 253.08 136.136 252.66 136.136ZM252.796 135.233C253.199 135.233 253.54 135.128 253.819 134.918C254.097 134.705 254.309 134.411 254.454 134.036C254.599 133.658 254.671 133.222 254.671 132.727C254.671 132.239 254.6 131.811 254.458 131.445C254.316 131.075 254.106 130.788 253.827 130.584C253.549 130.376 253.205 130.273 252.796 130.273C252.37 130.273 252.015 130.382 251.731 130.601C251.449 130.817 251.238 131.111 251.096 131.483C250.956 131.852 250.887 132.267 250.887 132.727C250.887 133.193 250.958 133.616 251.1 133.997C251.245 134.375 251.458 134.676 251.739 134.901C252.023 135.122 252.376 135.233 252.796 135.233ZM262.278 130.92L261.374 131.176C261.317 131.026 261.233 130.879 261.123 130.737C261.015 130.592 260.867 130.473 260.68 130.379C260.492 130.286 260.252 130.239 259.959 130.239C259.559 130.239 259.225 130.331 258.958 130.516C258.694 130.697 258.562 130.929 258.562 131.21C258.562 131.46 258.653 131.658 258.834 131.803C259.016 131.947 259.3 132.068 259.687 132.165L260.658 132.403C261.243 132.545 261.68 132.763 261.966 133.055C262.253 133.345 262.397 133.719 262.397 134.176C262.397 134.551 262.289 134.886 262.073 135.182C261.86 135.477 261.562 135.71 261.178 135.881C260.795 136.051 260.349 136.136 259.84 136.136C259.172 136.136 258.62 135.991 258.182 135.702C257.745 135.412 257.468 134.989 257.351 134.432L258.306 134.193C258.397 134.545 258.569 134.81 258.822 134.986C259.077 135.162 259.411 135.25 259.823 135.25C260.292 135.25 260.664 135.151 260.939 134.952C261.218 134.75 261.357 134.509 261.357 134.227C261.357 134 261.278 133.81 261.118 133.656C260.959 133.5 260.715 133.384 260.385 133.307L259.295 133.051C258.695 132.909 258.255 132.689 257.974 132.391C257.695 132.089 257.556 131.713 257.556 131.261C257.556 130.892 257.66 130.565 257.867 130.281C258.077 129.997 258.363 129.774 258.724 129.612C259.087 129.45 259.499 129.369 259.959 129.369C260.607 129.369 261.116 129.511 261.485 129.795C261.857 130.08 262.121 130.455 262.278 130.92Z"
    fill="${gray11}"
  />
  <rect
    x="128"
    y="150"
    width="196"
    height="1"
    fill="url(#paint0_linear_1_10)"
  />
  <rect
    x="328"
    y="150"
    width="296"
    height="1"
    fill="url(#paint1_linear_1_10)"
  />
  <rect
    x="628"
    y="150"
    width="296"
    height="1"
    fill="url(#paint2_linear_1_10)"
  />
  <rect
    x="928"
    y="150"
    width="196"
    height="1"
    fill="url(#paint3_linear_1_10)"
  />
  <rect
    x="1128"
    y="150"
    width="196"
    height="1"
    fill="url(#paint4_linear_1_10)"
  />
  <defs>
    <linearGradient
      id="paint0_linear_1_10"
      x1="128"
      y1="150.5"
      x2="324"
      y2="150.5"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="${gray8}" stop-opacity="0" />
      <stop offset="0.5" stop-color="${gray8}" />
      <stop offset="1" stop-color="${gray8}" stop-opacity="0" />
    </linearGradient>
    <linearGradient
      id="paint1_linear_1_10"
      x1="328"
      y1="150.5"
      x2="624"
      y2="150.5"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="${gray8}" stop-opacity="0" />
      <stop offset="0.5" stop-color="${gray8}" />
      <stop offset="1" stop-color="${gray8}" stop-opacity="0" />
    </linearGradient>
    <linearGradient
      id="paint2_linear_1_10"
      x1="628"
      y1="150.5"
      x2="924"
      y2="150.5"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="${gray8}" stop-opacity="0" />
      <stop offset="0.5" stop-color="${gray8}" />
      <stop offset="1" stop-color="${gray8}" stop-opacity="0" />
    </linearGradient>
    <linearGradient
      id="paint3_linear_1_10"
      x1="928"
      y1="150.5"
      x2="1124"
      y2="150.5"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="${gray8}" stop-opacity="0" />
      <stop offset="0.5" stop-color="${gray8}" />
      <stop offset="1" stop-color="${gray8}" stop-opacity="0" />
    </linearGradient>
    <linearGradient
      id="paint4_linear_1_10"
      x1="1128"
      y1="150.5"
      x2="1324"
      y2="150.5"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="${gray8}" stop-opacity="0" />
      <stop offset="0.5" stop-color="${gray8}" />
      <stop offset="1" stop-color="${gray8}" stop-opacity="0" />
    </linearGradient>
  </defs>
</svg>
`.trim();
};
