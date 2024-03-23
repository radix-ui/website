import Color from 'colorjs.io';
import NextLink from 'next/link';
import { ColorsHeader } from '@components/ColorsHeader';
import { ColorsMobileMenu } from '@components/ColorsMobileMenu';
import { MobileMenuProvider } from '@components/MobileMenu';
import swatchStyles from '@components/Swatch.module.css';
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
  ArrowRightIcon,
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
  Separator,
  Strong,
  Switch,
  Tabs,
  Text,
  TextField,
  Theme,
  Tooltip,
  VisuallyHidden,
} from '@radix-ui/themes';
import * as React from 'react';
import styles from './custom.module.css';
import { getPeopleForColor } from '@utils/people';
import { ThemesPanelBackgroundImage } from '@components/ThemesPanelBackgroundImage';
import { AvatarIconFallback } from '@components/AvatarIconFallback';
import { StepLabel, UsageRange } from './index';
import { ColorField } from '@components/ColorField';
import { generateRadixColors } from '@components/generateRadixColors';
import { classNames } from '@utils/classNames';
import { Swatch } from '@components/Swatch';
import { useLocalStorage, useIsomorphicLayoutEffect } from 'usehooks-ts';
import { useTheme } from 'next-themes';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import copy from 'copy-to-clipboard';

export default function Page() {
  const { resolvedTheme } = useTheme();

  const [lightAccentValue, setLightAccentValue] = useLocalStorage('create/light/accent', '#3D63DD');
  const [lightGrayValue, setLightGrayValue] = useLocalStorage('create/light/gray', '#8B8D98');
  const [lightBgValue, setLightBgValue] = useLocalStorage('create/light/background', '#FFFFFF');

  const [darkAccentValue, setDarkAccentValue] = useLocalStorage('create/dark/accent', '#3D63DD');
  const [darkGrayValue, setDarkGrayValue] = useLocalStorage('create/dark/gray', '#8B8D98');
  const [darkBgValue, setDarkBgValue] = useLocalStorage('create/dark/background', '#111111');

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
            <Flex direction="column" align="center" gap="3" mb="8">
              <Flex asChild align="center" gap="1">
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
              {/* <Flex asChild align="center" gap="1">
                <Link asChild size="2" color="gray" ml="-2">
                  <NextLink href="/colors/docs/overview/custom">
                    How to use custom colors
                    <ArrowRightIcon />
                  </NextLink>
                </Link>
              </Flex> */}
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
                      <Button>
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
                      {/*
                      <DropdownMenu.Item
                        onSelect={() => {
                          setCopied(true);
                          setSvgCopied(false);
                          clearTimeout(copiedTimeoutRef.current);
                          copiedTimeoutRef.current = setTimeout(() => {
                            setCopied(false);
                          }, COPIED_TIMEOUT);
                        }}
                      >
                        Copy CSS code
                      </DropdownMenu.Item>
                      */}

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
                      <DropdownMenu.Item onSelect={() => setCopiedMessage('SVG')}>
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

            <Theme className="radix-themes-default-fonts">
              <Scales />
              <Preview />
            </Theme>
          </Container>
        </Section>
      </Theme>
    </MobileMenuProvider>
  );
}

const Scales = () => (
  <Grid columns="12" gap="1" mb="9">
    <UsageRange style={{ gridColumn: '1 / 3' }}>Backgrounds</UsageRange>
    <UsageRange style={{ gridColumn: '3 / 6' }}>Interactive components</UsageRange>
    <UsageRange style={{ gridColumn: '6 / 9' }}>Borders and separators</UsageRange>
    <UsageRange style={{ gridColumn: '9 / 11' }}>Solid colors</UsageRange>
    <UsageRange style={{ gridColumn: '11 / 13' }}>Accessible text</UsageRange>

    <StepLabel>1</StepLabel>
    <StepLabel>2</StepLabel>
    <StepLabel>3</StepLabel>
    <StepLabel>4</StepLabel>
    <StepLabel>5</StepLabel>
    <StepLabel>6</StepLabel>
    <StepLabel>7</StepLabel>
    <StepLabel>8</StepLabel>
    <StepLabel>9</StepLabel>
    <StepLabel>10</StepLabel>
    <StepLabel>11</StepLabel>
    <StepLabel>12</StepLabel>

    {Array.from({ length: 12 }, (_, i) => i + 1).map((step) => (
      <span
        key={step}
        className={classNames(swatchStyles.SwatchTrigger, swatchStyles.SwatchTransparencyGrid)}
      >
        <span style={{ backgroundColor: `var(--accent-${step})` }}>
          <VisuallyHidden>Step {step}</VisuallyHidden>
        </span>
      </span>
    ))}

    {Array.from({ length: 12 }, (_, i) => i + 1).map((step) => (
      <Swatch key={step} scale="gray" step={step.toString()} />
    ))}
  </Grid>
);

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
