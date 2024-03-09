import * as React from 'react';
import NextLink from 'next/link';
import {
  AlertDialog,
  AspectRatio,
  Avatar,
  Badge,
  Blockquote,
  Box,
  Button,
  Callout,
  Card,
  Checkbox,
  CheckboxCardGroup,
  CheckboxGroup,
  Code,
  ContextMenu,
  Dialog,
  DropdownMenu,
  Em,
  Flex,
  Grid,
  Heading,
  HoverCard,
  IconButton,
  Inset,
  Kbd,
  Link,
  Popover,
  Quote,
  Radio,
  RadioCardGroup,
  RadioGroup,
  ScrollArea,
  Section,
  SegmentedControl,
  Select,
  Separator,
  Slider,
  Strong,
  Switch,
  Table,
  Tabs,
  Text,
  TextArea,
  TextField,
  Theme,
  ThemePanel,
  Tooltip,
  useThemeContext,
} from '@radix-ui/themes';
import {
  accentColors,
  avatarPropDefs,
  badgePropDefs,
  blockquotePropDefs,
  buttonPropDefs,
  calloutRootPropDefs,
  cardPropDefs,
  checkboxCardGroupRootPropDefs,
  checkboxGroupRootPropDefs,
  checkboxPropDefs,
  codePropDefs,
  contextMenuContentPropDefs,
  dropdownMenuContentPropDefs,
  headingPropDefs,
  hoverCardContentPropDefs,
  iconButtonPropDefs,
  kbdPropDefs,
  linkPropDefs,
  radioCardGroupRootPropDefs,
  radioGroupRootPropDefs,
  radioPropDefs,
  segmentedControlRootPropDefs,
  selectRootPropDefs,
  selectTriggerPropDefs,
  sliderPropDefs,
  switchPropDefs,
  tabNavPropDefs,
  tableRootPropDefs,
  tabsListPropDefs,
  textAreaPropDefs,
  textFieldRootPropDefs,
  textPropDefs,
  themePropDefs,
} from '@lib/themes/props';
import {
  ArrowRightIcon,
  CaretDownIcon,
  CubeIcon,
  InfoCircledIcon,
  MagnifyingGlassIcon,
  StarIcon,
  VercelLogoIcon,
} from '@radix-ui/react-icons';
import { getPeopleForColor } from '@lib/people';
import styles from './playground.module.css';
import { MobileMenuProvider, MobileMenu } from '@components/MobileMenu';
import { ThemesHeader } from '@components/ThemesHeader';
import { ThemesPanelBackgroundImage } from '@components/ThemesPanelBackgroundImage';
import { useTheme } from 'next-themes';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import Head from 'next/head';
import { ThemesMobileMenu } from '@components/ThemesMobileMenu';
import { AvatarIconFallback } from '@components/AvatarIconFallback';
import { RemoveScroll } from 'react-remove-scroll';
import TabNavDemo from './tab-nav-demo';

export default function ComponentsPage() {
  const { systemTheme, setTheme } = useTheme();

  const {
    onAccentColorChange,
    onGrayColorChange,
    onRadiusChange,
    onScalingChange,
    onPanelBackgroundChange,
  } = useThemeContext();

  // When the page unmounts, reset theme settings to match the default applied to `/themes` section
  // so they don't persist on other pages.
  React.useEffect(() => {
    return () => {
      onAccentColorChange('indigo');
      onGrayColorChange(themePropDefs.grayColor.default);
      onRadiusChange(themePropDefs.radius.default);
      onScalingChange(themePropDefs.scaling.default);
      onPanelBackgroundChange(themePropDefs.panelBackground.default);
    };
  }, []);

  return (
    <MobileMenuProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <TitleAndMetaTags
        title="Playground – Radix Themes"
        description="An open source component library for building modern React apps that helps you build faster and makes it easy to create beautiful, accessible interfaces that are a breeze to maintain."
        image="themes.png"
      />

      <div className={styles.PlaygroundRoot}>
        {/* Set default values for settings we don't want affecting the header */}
        <Theme radius="medium" scaling="100%">
          <MobileMenu>
            <ThemesHeader />
          </MobileMenu>

          <ThemesHeader />
          <ThemesMobileMenu />
        </Theme>

        <Box display={{ initial: 'none', lg: 'block' }}>
          {/* Components that hide the scrollbar (like Dialog) add padding to
          account for the scrollbar gap to avoid layout jank. This does not
          work for position: fixed elements. Since we use react-remove-scroll
          under the hood for those primitives, we can add this helper class
          provided by that lib to deal with that for the ThemePanel.
          https://github.com/radix-ui/website/issues/64
          https://github.com/theKashey/react-remove-scroll#positionfixed-elements */}
          <ThemePanel
            className={RemoveScroll.classNames.zeroRight}
            onAppearanceChange={(newTheme) => {
              const newThemeMatchesSystem = newTheme === systemTheme;
              setTheme(newThemeMatchesSystem ? 'system' : (newTheme as 'light' | 'dark'));
            }}
            style={{
              top: 'var(--header-height)',
              maxHeight: 'calc(100vh - var(--header-height) - var(--space-4) * 2)',
            }}
          />
        </Box>

        <Section size={{ initial: '2', md: '4' }}>
          <Flex direction="column" gap="9" mx={{ initial: '5', xs: '6', sm: '7', md: '9' }}>
            <PlaygroundSection>
              <PlaygroundSectionTitle id="alert-dialog">Alert Dialog</PlaygroundSectionTitle>
              <Flex gap="4" align="center">
                <AlertDialog.Root>
                  <AlertDialog.Trigger>
                    <Button size="1">Open</Button>
                  </AlertDialog.Trigger>
                  <AlertDialog.Content size="1" style={{ width: 'calc(300px * var(--scaling))' }}>
                    <AlertDialog.Title size="2" mb="1">
                      Revoke access
                    </AlertDialog.Title>
                    <AlertDialog.Description size="1" mb="3">
                      Are you sure? This application will no longer be accessible and any existing
                      sessions will be expired.
                    </AlertDialog.Description>

                    <Flex gap="2" mt="3" justify="end">
                      <AlertDialog.Cancel>
                        <Button size="1" variant="soft" color="gray">
                          Cancel
                        </Button>
                      </AlertDialog.Cancel>
                      <AlertDialog.Action>
                        <Button size="1" color="red">
                          Revoke
                        </Button>
                      </AlertDialog.Action>
                    </Flex>
                  </AlertDialog.Content>
                </AlertDialog.Root>

                <AlertDialog.Root>
                  <AlertDialog.Trigger>
                    <Button size="2">Open</Button>
                  </AlertDialog.Trigger>
                  <AlertDialog.Content size="2" style={{ width: 'calc(400px * var(--scaling))' }}>
                    <AlertDialog.Title mb="2">Revoke access</AlertDialog.Title>
                    <AlertDialog.Description size="2" mb="4">
                      Are you sure? This application will no longer be accessible and any existing
                      sessions will be expired.
                    </AlertDialog.Description>

                    <Flex gap="3" mt="4" justify="end">
                      <AlertDialog.Cancel>
                        <Button variant="soft" color="gray">
                          Cancel
                        </Button>
                      </AlertDialog.Cancel>
                      <AlertDialog.Action>
                        <Button color="red">Revoke</Button>
                      </AlertDialog.Action>
                    </Flex>
                  </AlertDialog.Content>
                </AlertDialog.Root>

                <AlertDialog.Root>
                  <AlertDialog.Trigger>
                    <Button size="3">Open</Button>
                  </AlertDialog.Trigger>
                  <AlertDialog.Content size="3" style={{ width: 'calc(400px * var(--scaling))' }}>
                    <AlertDialog.Title>Revoke access</AlertDialog.Title>
                    <AlertDialog.Description size="2" mb="4">
                      Are you sure? This application will no longer be accessible and any existing
                      sessions will be expired.
                    </AlertDialog.Description>

                    <Flex gap="3" mt="4" justify="end">
                      <AlertDialog.Cancel>
                        <Button variant="soft" color="gray">
                          Cancel
                        </Button>
                      </AlertDialog.Cancel>
                      <AlertDialog.Action>
                        <Button color="red">Revoke</Button>
                      </AlertDialog.Action>
                    </Flex>
                  </AlertDialog.Content>
                </AlertDialog.Root>

                <AlertDialog.Root>
                  <AlertDialog.Trigger>
                    <Button size="4">Open</Button>
                  </AlertDialog.Trigger>
                  <AlertDialog.Content size="4" style={{ width: 'calc(450px * var(--scaling))' }}>
                    <AlertDialog.Title size="6">Revoke access</AlertDialog.Title>
                    <AlertDialog.Description size="3" mb="5">
                      Are you sure? This application will no longer be accessible and any existing
                      sessions will be expired.
                    </AlertDialog.Description>

                    <Flex gap="3" mt="5" justify="end">
                      <AlertDialog.Cancel>
                        <Button size="3" variant="soft" color="gray">
                          Cancel
                        </Button>
                      </AlertDialog.Cancel>
                      <AlertDialog.Action>
                        <Button size="3" color="red">
                          Revoke
                        </Button>
                      </AlertDialog.Action>
                    </Flex>
                  </AlertDialog.Content>
                </AlertDialog.Root>
              </Flex>
            </PlaygroundSection>

            <PlaygroundSection>
              <PlaygroundSectionTitle id="aspect-ratio">Aspect Ratio</PlaygroundSectionTitle>
              <Grid columns={{ initial: '3', lg: '5', xl: '6' }} gap="4">
                {['2 / 3', '1 / 1', '16 / 9'].map((ratio) => (
                  <div key={ratio}>
                    <Text as="p" size="1" color="gray" mb="2">
                      {ratio.replace(' / ', ':')}
                    </Text>
                    <AspectRatio ratio={eval(ratio)}>{aspectRatioImage}</AspectRatio>
                  </div>
                ))}
              </Grid>
            </PlaygroundSection>

            <PlaygroundSection>
              <PlaygroundSectionTitle id="avatar">Avatar</PlaygroundSectionTitle>
              <Tabs.Root defaultValue="theme-colors">
                <Tabs.List size="2">
                  <Tabs.Trigger value="theme-colors">Theme colors</Tabs.Trigger>
                  <Tabs.Trigger value="all-colors">All colors</Tabs.Trigger>
                  <Tabs.Trigger value="all-sizes">All sizes</Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="theme-colors">
                  <Box mt="6">
                    <table className={styles.PlaygroundTable}>
                      <thead>
                        <tr>
                          <th />
                          <th colSpan={5}>Accent</th>
                          <th colSpan={5}>Gray</th>
                        </tr>
                      </thead>
                      <tbody>
                        {avatarPropDefs.variant.values.map((variant, index) => (
                          <tr key={variant}>
                            <td>{upperFirst(variant)}</td>
                            <td>
                              <Avatar
                                variant={variant}
                                src={getPeopleForColor('gray')[index].image}
                                fallback="V"
                              />
                            </td>
                            <td>
                              <Avatar variant={variant} fallback="V" />
                            </td>
                            <td>
                              <Avatar variant={variant} fallback="BG" />
                            </td>
                            <td>
                              <Avatar variant={variant} fallback={<AvatarIconFallback />} />
                            </td>
                            <td>
                              <Avatar
                                variant={variant}
                                fallback={<AvatarIconFallback />}
                                highContrast
                              />
                            </td>
                            <td>
                              <Avatar
                                variant={variant}
                                color="gray"
                                src={getPeopleForColor('gray')[index + 2].image}
                                fallback="V"
                              />
                            </td>
                            <td>
                              <Avatar variant={variant} color="gray" fallback="V" />
                            </td>
                            <td>
                              <Avatar variant={variant} color="gray" fallback="BG" />
                            </td>
                            <td>
                              <Avatar
                                variant={variant}
                                color="gray"
                                fallback={<AvatarIconFallback />}
                              />
                            </td>
                            <td>
                              <Avatar
                                variant={variant}
                                color="gray"
                                fallback={<AvatarIconFallback />}
                                highContrast
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Tabs.Content>

                <Tabs.Content value="all-colors">
                  <Box mt="6">
                    <table className={styles.PlaygroundTable}>
                      <thead>
                        <tr>
                          <th />
                          {avatarPropDefs.variant.values.map((variant) => (
                            <th key={variant} colSpan={5}>
                              {upperFirst(variant)}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {accentColors.map((color) => (
                          <tr key={color}>
                            <td>{upperFirst(color)}</td>
                            {avatarPropDefs.variant.values.map((variant, index) => (
                              <React.Fragment key={variant}>
                                <td>
                                  <Avatar
                                    variant={variant}
                                    color={color}
                                    src={getPeopleForColor(color)[index].image}
                                    fallback="V"
                                  />
                                </td>
                                <td>
                                  <Avatar variant={variant} color={color} fallback="V" />
                                </td>
                                <td>
                                  <Avatar variant={variant} color={color} fallback="BG" />
                                </td>
                                <td>
                                  <Avatar
                                    variant={variant}
                                    color={color}
                                    fallback={<AvatarIconFallback />}
                                  />
                                </td>
                                <td>
                                  <Avatar
                                    variant={variant}
                                    color={color}
                                    fallback={<AvatarIconFallback />}
                                    highContrast
                                  />
                                </td>
                              </React.Fragment>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Tabs.Content>

                <Tabs.Content value="all-sizes">
                  <Box mt="6">
                    <table className={styles.PlaygroundTable}>
                      <thead>
                        <tr>
                          <th />
                          {avatarPropDefs.radius.values.map((radius) => (
                            <th key={radius} style={{ textAlign: 'left' }}>
                              {radius === 'none' ? 'No radius' : upperFirst(radius)}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {avatarPropDefs.variant.values.map((variant, index) => (
                          <React.Fragment key={variant}>
                            {index > 0 && (
                              <tr>
                                <td>&nbsp;</td>
                              </tr>
                            )}
                            {avatarPropDefs.size.values.map((size) => (
                              <tr key={size}>
                                <td>Size {size}</td>
                                {avatarPropDefs.radius.values.map((radius) => (
                                  <td key={radius} style={{ textAlign: 'left' }}>
                                    <Avatar
                                      size={size}
                                      variant={variant}
                                      radius={radius}
                                      fallback="BG"
                                    />
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </React.Fragment>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Tabs.Content>
              </Tabs.Root>
            </PlaygroundSection>

            <PlaygroundSection>
              <PlaygroundSectionTitle id="badge">Badge</PlaygroundSectionTitle>
              <Tabs.Root defaultValue="theme-colors">
                <Tabs.List size="2">
                  <Tabs.Trigger value="theme-colors">Theme colors</Tabs.Trigger>
                  <Tabs.Trigger value="all-colors">All colors</Tabs.Trigger>
                  <Tabs.Trigger value="all-sizes">All sizes</Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="theme-colors">
                  <Box mt="6">
                    <table className={styles.PlaygroundTable}>
                      <thead>
                        <tr>
                          <th />
                          <th>Accent</th>
                          <th>Gray</th>
                        </tr>
                      </thead>
                      <tbody>
                        {badgePropDefs.variant.values.map((variant) => (
                          <tr key={variant}>
                            <td>{upperFirst(variant)}</td>
                            <td>
                              <Flex gap="4">
                                <Badge variant={variant}>New</Badge>
                                <Badge variant={variant} highContrast>
                                  New
                                </Badge>
                              </Flex>
                            </td>
                            <td>
                              <Flex gap="4">
                                <Badge variant={variant} color="gray">
                                  New
                                </Badge>
                                <Badge variant={variant} color="gray" highContrast>
                                  New
                                </Badge>
                              </Flex>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Tabs.Content>

                <Tabs.Content value="all-colors">
                  <Box mt="6">
                    <table className={styles.PlaygroundTable}>
                      <thead>
                        <tr>
                          <th />
                          {badgePropDefs.variant.values.map((variant) => (
                            <th key={variant}>{upperFirst(variant)}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {accentColors.map((color) => (
                          <tr key={color}>
                            <td>{upperFirst(color)}</td>
                            {badgePropDefs.variant.values.map((variant) => (
                              <td key={variant}>
                                <Flex align="center" justify="center" gap="4">
                                  <Badge variant={variant} color={color}>
                                    New
                                  </Badge>
                                  <Badge variant={variant} color={color} highContrast>
                                    New
                                  </Badge>
                                </Flex>
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Tabs.Content>

                <Tabs.Content value="all-sizes">
                  <Box mt="6">
                    <table className={styles.PlaygroundTable}>
                      <thead>
                        <tr>
                          <th />
                          {badgePropDefs.radius.values.map((radius) => (
                            <th key={radius} style={{ textAlign: 'left' }}>
                              {radius === 'none' ? 'No radius' : upperFirst(radius)}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {badgePropDefs.variant.values.map((variant, index) => (
                          <React.Fragment key={variant}>
                            {index > 0 && (
                              <tr>
                                <td>&nbsp;</td>
                              </tr>
                            )}
                            {badgePropDefs.size.values.map((size) => (
                              <tr key={size}>
                                <td>Size {size}</td>
                                {badgePropDefs.radius.values.map((radius) => (
                                  <td key={radius} style={{ textAlign: 'left' }}>
                                    <Badge size={size} variant={variant} radius={radius}>
                                      New
                                    </Badge>
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </React.Fragment>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Tabs.Content>
              </Tabs.Root>
            </PlaygroundSection>

            <PlaygroundSection>
              <PlaygroundSectionTitle id="blockquote">Blockquote</PlaygroundSectionTitle>
              <Tabs.Root defaultValue="theme-colors">
                <Tabs.List size="2">
                  <Tabs.Trigger value="theme-colors">Theme colors</Tabs.Trigger>
                  <Tabs.Trigger value="all-colors">All colors</Tabs.Trigger>
                  <Tabs.Trigger value="all-sizes">All sizes</Tabs.Trigger>
                  <Tabs.Trigger value="all-weights">All weights</Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="theme-colors">
                  <Grid mt="6" gap="6" columns="auto auto" style={{ whiteSpace: 'nowrap' }}>
                    <Flex direction="column" gap="6">
                      <Text mb="-4" size="1" color="gray" align="center">
                        Accent
                      </Text>

                      <Blockquote size="4">
                        Perfect typography is certainly the most elusive of all arts.
                        <br />
                        Sculpture in stone alone comes near it in obstinacy.
                      </Blockquote>

                      <Blockquote size="3">
                        Perfect typography is certainly the most elusive of all arts.
                        <br />
                        Sculpture in stone alone comes near it in obstinacy.
                      </Blockquote>

                      <Blockquote size="2">
                        Perfect typography is certainly the most elusive of all arts.
                        <br />
                        Sculpture in stone alone comes near it in obstinacy.
                      </Blockquote>
                    </Flex>

                    <Flex direction="column" gap="6">
                      <Text mb="-4" size="1" color="gray" align="center">
                        Gray
                      </Text>

                      <Blockquote size="4" color="gray">
                        Perfect typography is certainly the most elusive of all arts.
                        <br />
                        Sculpture in stone alone comes near it in obstinacy.
                      </Blockquote>

                      <Blockquote size="3" color="gray">
                        Perfect typography is certainly the most elusive of all arts.
                        <br />
                        Sculpture in stone alone comes near it in obstinacy.
                      </Blockquote>

                      <Blockquote size="2" color="gray">
                        Perfect typography is certainly the most elusive of all arts.
                        <br />
                        Sculpture in stone alone comes near it in obstinacy.
                      </Blockquote>
                    </Flex>
                  </Grid>
                </Tabs.Content>

                <Tabs.Content value="all-colors">
                  <Box mt="6">
                    <table className={styles.PlaygroundTable} style={{ whiteSpace: 'nowrap' }}>
                      <tbody>
                        {accentColors.map((color) => (
                          <tr key={color}>
                            <td>{upperFirst(color)}</td>
                            <td style={{ textAlign: 'left' }}>
                              <Flex gap="6">
                                <Blockquote color={color}>
                                  Perfect typography is certainly the most elusive of all arts.
                                  <br />
                                  Sculpture in stone alone comes near it in obstinacy.
                                </Blockquote>
                                <Blockquote color={color} highContrast>
                                  Perfect typography is certainly the most elusive of all arts.
                                  <br />
                                  Sculpture in stone alone comes near it in obstinacy.
                                </Blockquote>
                              </Flex>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Tabs.Content>

                <Tabs.Content value="all-sizes">
                  <Box mt="6">
                    <table className={styles.PlaygroundTable}>
                      <tbody>
                        {blockquotePropDefs.size.values.map((size) => (
                          <tr key={size}>
                            <td>Size {size}</td>
                            <td style={{ textAlign: 'left' }}>
                              <Blockquote size={size}>
                                Perfect typography is certainly
                                <br />
                                the most elusive of all arts.
                              </Blockquote>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Tabs.Content>

                <Tabs.Content value="all-weights">
                  <Box mt="6">
                    <table className={styles.PlaygroundTable} style={{ whiteSpace: 'nowrap' }}>
                      <tbody>
                        {blockquotePropDefs.weight.values.map((weight) => (
                          <tr key={weight}>
                            <td>{upperFirst(weight)}</td>
                            <td style={{ textAlign: 'left' }}>
                              <Blockquote weight={weight}>
                                Perfect typography is certainly the most elusive of all arts.
                                <br />
                                Sculpture in stone alone comes near it in obstinacy.
                              </Blockquote>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Tabs.Content>
              </Tabs.Root>
            </PlaygroundSection>

            <PlaygroundSection>
              <PlaygroundSectionTitle id="button">Button</PlaygroundSectionTitle>
              <Tabs.Root defaultValue="theme-colors">
                <Tabs.List size="2">
                  <Tabs.Trigger value="theme-colors">Theme colors</Tabs.Trigger>
                  <Tabs.Trigger value="all-colors">All colors</Tabs.Trigger>
                  <Tabs.Trigger value="all-sizes">All sizes</Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="theme-colors">
                  <Box mt="6">
                    <table className={styles.PlaygroundTable}>
                      <thead>
                        <tr>
                          <th />
                          <th colSpan={2}>Accent</th>
                          <th colSpan={2}>Gray</th>
                          <th>Disabled</th>
                        </tr>
                      </thead>
                      <tbody>
                        {buttonPropDefs.variant.values.map((variant) => (
                          <tr key={variant}>
                            <td>{upperFirst(variant)}</td>
                            <td>
                              <Button variant={variant}>
                                Next <ArrowRightIcon width="16" height="16" />
                              </Button>
                            </td>
                            <td>
                              <Button variant={variant} highContrast>
                                Next <ArrowRightIcon width="16" height="16" />
                              </Button>
                            </td>
                            <td>
                              <Button variant={variant} color="gray">
                                Next <ArrowRightIcon width="16" height="16" />
                              </Button>
                            </td>
                            <td>
                              <Button variant={variant} color="gray" highContrast>
                                Next <ArrowRightIcon width="16" height="16" />
                              </Button>
                            </td>
                            <td>
                              <Button variant={variant} disabled>
                                Next <ArrowRightIcon width="16" height="16" />
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Tabs.Content>

                <Tabs.Content value="all-colors">
                  <Box mt="6">
                    <table className={styles.PlaygroundTable}>
                      <thead>
                        <tr>
                          <th />
                          {buttonPropDefs.variant.values.map((variant) => (
                            <th key={variant}>{upperFirst(variant)}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {accentColors.map((color) => (
                          <tr key={color}>
                            <td>{upperFirst(color)}</td>
                            {buttonPropDefs.variant.values.map((variant) => (
                              <td key={variant}>
                                <Flex align="center" justify="center" gap="4">
                                  <Button variant={variant} color={color}>
                                    Next <ArrowRightIcon width="16" height="16" />
                                  </Button>
                                  <Button variant={variant} color={color} highContrast>
                                    Next <ArrowRightIcon width="16" height="16" />
                                  </Button>
                                </Flex>
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Tabs.Content>

                <Tabs.Content value="all-sizes">
                  <Box mt="6">
                    <table className={styles.PlaygroundTable}>
                      <thead>
                        <tr>
                          <th />
                          {buttonPropDefs.radius.values.map((radius) => (
                            <th key={radius} style={{ textAlign: 'left' }}>
                              {radius === 'none' ? 'No radius' : upperFirst(radius)}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {buttonPropDefs.variant.values.map((variant, index) => (
                          <React.Fragment key={variant}>
                            {index > 0 && (
                              <tr>
                                <td>&nbsp;</td>
                              </tr>
                            )}
                            {buttonPropDefs.size.values.map((size) => (
                              <tr key={size}>
                                <td>Size {size}</td>
                                {buttonPropDefs.radius.values.map((radius) => (
                                  <td key={radius} style={{ textAlign: 'left' }}>
                                    <Button size={size} variant={variant} radius={radius}>
                                      Next <ArrowRightIcon {...buttonSizeToIconSize(size)} />
                                    </Button>
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </React.Fragment>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Tabs.Content>
              </Tabs.Root>
            </PlaygroundSection>

            <PlaygroundSection>
              <PlaygroundSectionTitle id="callout">Callout.</PlaygroundSectionTitle>
              <Tabs.Root defaultValue="theme-colors">
                <Tabs.List size="2">
                  <Tabs.Trigger value="theme-colors">Theme colors</Tabs.Trigger>
                  <Tabs.Trigger value="all-colors">All colors</Tabs.Trigger>
                  <Tabs.Trigger value="all-sizes">All sizes</Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="theme-colors">
                  <Box mt="6">
                    <table className={styles.PlaygroundTable}>
                      <thead>
                        <tr>
                          <th />
                          <th>Accent</th>
                          <th>Gray</th>
                        </tr>
                      </thead>
                      <tbody>
                        {calloutRootPropDefs.variant.values.map((variant) => (
                          <tr key={variant}>
                            <td>{upperFirst(variant)}</td>
                            <td>
                              <Callout.Root variant={variant}>
                                <Callout.Icon>
                                  <InfoCircledIcon width="16" height="16" />
                                </Callout.Icon>
                                <Callout.Text>
                                  Please <Link>upgrade</Link> to the new version.
                                </Callout.Text>
                              </Callout.Root>
                              <Callout.Root variant={variant} highContrast mt="4">
                                <Callout.Icon>
                                  <InfoCircledIcon width="16" height="16" />
                                </Callout.Icon>
                                <Callout.Text>
                                  Please <Link>upgrade</Link> to the new version.
                                </Callout.Text>
                              </Callout.Root>
                            </td>
                            <td>
                              <Callout.Root variant={variant} color="gray">
                                <Callout.Icon>
                                  <InfoCircledIcon width="16" height="16" />
                                </Callout.Icon>
                                <Callout.Text>
                                  Please <Link>upgrade</Link> to the new version.
                                </Callout.Text>
                              </Callout.Root>
                              <Callout.Root variant={variant} color="gray" highContrast mt="4">
                                <Callout.Icon>
                                  <InfoCircledIcon width="16" height="16" />
                                </Callout.Icon>
                                <Callout.Text>
                                  Please <Link>upgrade</Link> to the new version.
                                </Callout.Text>
                              </Callout.Root>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Tabs.Content>

                <Tabs.Content value="all-colors">
                  <Box mt="6">
                    <table className={styles.PlaygroundTable}>
                      <thead>
                        <tr>
                          <th />
                          {calloutRootPropDefs.variant.values.map((variant) => (
                            <th key={variant}>{upperFirst(variant)}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {accentColors.map((color) => (
                          <tr key={color}>
                            <td>{upperFirst(color)}</td>
                            {calloutRootPropDefs.variant.values.map((variant) => (
                              <td key={variant}>
                                <Callout.Root variant={variant} color={color}>
                                  <Callout.Icon>
                                    <InfoCircledIcon width="16" height="16" />
                                  </Callout.Icon>
                                  <Callout.Text>
                                    Please <Link>upgrade</Link> to the new version.
                                  </Callout.Text>
                                </Callout.Root>
                                <Callout.Root variant={variant} color={color} highContrast mt="4">
                                  <Callout.Icon>
                                    <InfoCircledIcon width="16" height="16" />
                                  </Callout.Icon>
                                  <Callout.Text>
                                    Please <Link>upgrade</Link> to the new version.
                                  </Callout.Text>
                                </Callout.Root>
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Tabs.Content>

                <Tabs.Content value="all-sizes">
                  <Box mt="6">
                    <table className={styles.PlaygroundTable}>
                      <thead>
                        <tr>
                          <th />
                          {calloutRootPropDefs.variant.values.map((variant) => (
                            <th key={variant} style={{ textAlign: 'left' }}>
                              {upperFirst(variant)}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {calloutRootPropDefs.size.values.map((size) => (
                          <tr key={size}>
                            <td>Size {size}</td>
                            {calloutRootPropDefs.variant.values.map((variant) => (
                              <td key={variant}>
                                <Flex>
                                  <Callout.Root variant={variant} size={size}>
                                    <Callout.Icon>
                                      <InfoCircledIcon {...calloutSizeToIconSize(size)} />
                                    </Callout.Icon>
                                    <Callout.Text>
                                      Please <Link>upgrade</Link> to the new version.
                                    </Callout.Text>
                                  </Callout.Root>
                                </Flex>
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Tabs.Content>
              </Tabs.Root>
            </PlaygroundSection>

            <PlaygroundSection>
              <PlaygroundSectionTitle id="card">Card</PlaygroundSectionTitle>
              <Box style={{ whiteSpace: 'nowrap' }}>
                <Flex direction="column" className={styles.PlaygroundHeroContainer}>
                  <Flex
                    justify="center"
                    position="relative"
                    className={styles.PlaygroundHeroContent}
                  >
                    <Flex
                      align="center"
                      justify="center"
                      position="absolute"
                      inset="0"
                      style={{ overflow: 'hidden' }}
                    >
                      <ThemesPanelBackgroundImage id="1" width="100%" height="200%" />
                    </Flex>

                    <Card size="4" style={{ width: 400 }}>
                      <Heading as="h3" size="6" trim="start" mb="5">
                        Sign in
                      </Heading>

                      <Box mb="5">
                        <label>
                          <Text as="div" size="2" weight="medium" mb="2">
                            Email
                          </Text>
                          <TextField.Root placeholder="Enter your email address" />
                        </label>
                      </Box>

                      <Box mb="5" position="relative">
                        <Box position="absolute" top="0" right="0" style={{ marginTop: -2 }}>
                          <Link href="#card" size="2">
                            Forgot password?
                          </Link>
                        </Box>

                        <label>
                          <Text as="div" size="2" weight="medium" mb="2">
                            Password
                          </Text>
                          <TextField.Root placeholder="Enter your password" />
                        </label>
                      </Box>

                      <Flex mt="6" justify="end" gap="3">
                        <Button variant="soft">Create an account</Button>
                        <Button>Sign in</Button>
                      </Flex>
                    </Card>
                  </Flex>
                </Flex>

                <Box mt="6">
                  <table className={styles.PlaygroundTable}>
                    <thead>
                      <tr>
                        <th />
                        {cardPropDefs.variant.values.map((variant) => (
                          <th key={variant} style={{ textAlign: 'left' }}>
                            {upperFirst(variant)}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {(['1', '2', '3'] as const).map((size) => (
                        <tr key={size}>
                          <td>Size {size}</td>
                          {cardPropDefs.variant.values.map((variant) => (
                            <td key={variant}>
                              <Flex>
                                <Card
                                  asChild
                                  variant={variant}
                                  size={size}
                                  mr="2"
                                  ml={variant === 'ghost' ? '3' : '0'}
                                  my={variant === 'ghost' ? '4' : '0'}
                                >
                                  <a href="#card">
                                    {/* @ts-ignore */}
                                    <Flex align="center" gap={String(+size + 1)}>
                                      <Avatar
                                        // @ts-ignore
                                        size={String(+size + 2)}
                                        src={getPeopleForColor('gray')[0].image}
                                        fallback="V"
                                      />
                                      <Box>
                                        {/* @ts-ignore */}
                                        <Text as="div" weight="medium" size={String(+size + 1)}>
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
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </Box>
              </Box>
            </PlaygroundSection>

            <PlaygroundSection>
              <PlaygroundSectionTitle id="checkbox">Checkbox</PlaygroundSectionTitle>
              <Tabs.Root defaultValue="theme-colors">
                <Tabs.List size="2">
                  <Tabs.Trigger value="theme-colors">Theme colors</Tabs.Trigger>
                  <Tabs.Trigger value="all-colors">All colors</Tabs.Trigger>
                  <Tabs.Trigger value="all-sizes">All sizes</Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="theme-colors">
                  <Box mt="6">
                    <table className={styles.PlaygroundTable}>
                      <thead>
                        <tr>
                          <th />
                          <th colSpan={2}>Accent</th>
                          <th colSpan={2}>Gray</th>
                          <th>Disabled</th>
                        </tr>
                      </thead>
                      <tbody>
                        {checkboxPropDefs.variant.values.map((variant) => (
                          <tr key={variant}>
                            <td>{upperFirst(variant)}</td>
                            <td>
                              <Flex align="center" justify="center" gap="4">
                                <Checkbox variant={variant} />
                                <Checkbox variant={variant} defaultChecked />
                              </Flex>
                            </td>
                            <td>
                              <Flex align="center" justify="center" gap="4">
                                <Checkbox variant={variant} highContrast defaultChecked />
                              </Flex>
                            </td>
                            <td>
                              <Flex align="center" justify="center" gap="4">
                                <Checkbox variant={variant} color="gray" />
                                <Checkbox variant={variant} color="gray" defaultChecked />
                              </Flex>
                            </td>
                            <td>
                              <Flex align="center" justify="center" gap="4">
                                <Checkbox
                                  variant={variant}
                                  color="gray"
                                  highContrast
                                  defaultChecked
                                />
                              </Flex>
                            </td>
                            <td>
                              <Flex align="center" justify="center" gap="4">
                                <Checkbox variant={variant} disabled />
                                <Checkbox variant={variant} disabled defaultChecked />
                              </Flex>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Tabs.Content>

                <Tabs.Content value="all-colors">
                  <Box mt="6">
                    <table className={styles.PlaygroundTable}>
                      <thead>
                        <tr>
                          <th />
                          {checkboxPropDefs.variant.values.map((variant) => (
                            <th key={variant}>{upperFirst(variant)}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {accentColors.map((color) => (
                          <tr key={color}>
                            <td>{upperFirst(color)}</td>
                            {checkboxPropDefs.variant.values.map((variant) => (
                              <td key={variant}>
                                <Flex align="center" justify="center" gap="4">
                                  <Checkbox variant={variant} color={color} />
                                  <Checkbox variant={variant} color={color} defaultChecked />
                                  <Checkbox
                                    variant={variant}
                                    color={color}
                                    highContrast
                                    defaultChecked
                                  />
                                </Flex>
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Tabs.Content>

                <Tabs.Content value="all-sizes">
                  <Box mt="6">
                    <table className={styles.PlaygroundTable}>
                      <thead>
                        <tr>
                          <th />
                          {checkboxPropDefs.variant.values.map((variant) => (
                            <th key={variant} style={{ textAlign: 'left' }}>
                              {upperFirst(variant)}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {checkboxPropDefs.size.values.map((size) => (
                          <tr key={size}>
                            <td>Size {size}</td>
                            {checkboxPropDefs.variant.values.map((variant) => (
                              <td key={variant} style={{ textAlign: 'left' }}>
                                <Flex align="center" justify="start" gap="4">
                                  <Checkbox size={size} variant={variant} defaultChecked />
                                </Flex>
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Tabs.Content>
              </Tabs.Root>
            </PlaygroundSection>

            <PlaygroundSection>
              <PlaygroundSectionTitle id="checkbox-group">Checkbox Group</PlaygroundSectionTitle>
              <Flex align="start" direction="column" gap="5">
                {checkboxGroupRootPropDefs.size.values.map((size) => (
                  <CheckboxGroup.Root defaultValue={['1']} size={size} key={size}>
                    <CheckboxGroup.Item value="1">Agree to Terms and Conditions</CheckboxGroup.Item>
                    <CheckboxGroup.Item value="2">Agree to Privacy Policy</CheckboxGroup.Item>
                  </CheckboxGroup.Root>
                ))}
              </Flex>
            </PlaygroundSection>

            <PlaygroundSection>
              <PlaygroundSectionTitle id="checkbox-card-group">
                Checkbox Card Group
              </PlaygroundSectionTitle>

              <Tabs.Root defaultValue="theme-colors">
                <Tabs.List size="2">
                  <Tabs.Trigger value="theme-colors">Theme colors</Tabs.Trigger>
                  <Tabs.Trigger value="all-colors">All colors</Tabs.Trigger>
                  <Tabs.Trigger value="all-sizes">All sizes</Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="theme-colors">
                  <Box mt="6" mb="-6">
                    <table className={styles.PlaygroundTable}>
                      <thead>
                        <tr>
                          <th />
                          <th>Accent</th>
                          <th>Gray</th>
                        </tr>
                      </thead>
                      <tbody>
                        {checkboxCardGroupRootPropDefs.variant.values.map((variant) => (
                          <tr key={variant}>
                            <td>{upperFirst(variant)}</td>
                            <td>
                              <Flex direction="column" width="280px" gap="4" mx="2" mb="4">
                                <ExampleCheckboxCardGroup variant={variant} />
                                <ExampleCheckboxCardGroup variant={variant} highContrast />
                              </Flex>
                            </td>
                            <td>
                              <Flex direction="column" width="280px" gap="4" mx="2" mb="4">
                                <ExampleCheckboxCardGroup color="gray" variant={variant} />
                                <ExampleCheckboxCardGroup
                                  color="gray"
                                  variant={variant}
                                  highContrast
                                />
                              </Flex>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Tabs.Content>

                <Tabs.Content value="all-colors">
                  <Box mt="6">
                    <table className={styles.PlaygroundTable}>
                      <thead>
                        <tr>
                          <th />
                          {checkboxCardGroupRootPropDefs.variant.values.map((variant) => (
                            <th key={variant}>{upperFirst(variant)}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {accentColors.map((color) => (
                          <tr key={color}>
                            <td>{upperFirst(color)}</td>
                            {checkboxCardGroupRootPropDefs.variant.values.map((variant) => (
                              <td key={variant}>
                                <Flex align="center" justify="center" gap="5" mx="2">
                                  <Box width="280px">
                                    <ExampleCheckboxCardGroup color={color} variant={variant} />
                                  </Box>
                                  <Box width="280px">
                                    <ExampleCheckboxCardGroup
                                      color={color}
                                      variant={variant}
                                      highContrast
                                    />
                                  </Box>
                                </Flex>
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Tabs.Content>

                <Tabs.Content value="all-sizes">
                  <Box mt="6">
                    <table className={styles.PlaygroundTable}>
                      <thead>
                        <tr>
                          <th />
                          {checkboxCardGroupRootPropDefs.variant.values.map((variant) => (
                            <th key={variant} style={{ textAlign: 'left' }}>
                              {upperFirst(variant)}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {checkboxCardGroupRootPropDefs.size.values.map((size) => (
                          <tr key={size}>
                            <td>Size {size}</td>
                            {checkboxCardGroupRootPropDefs.variant.values.map((variant) => (
                              <td key={variant} style={{ textAlign: 'left' }}>
                                <Box width={`${160 + +size * 60}px`} mr="5" my="1">
                                  <ExampleCheckboxCardGroup variant={variant} size={size} />
                                </Box>
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Tabs.Content>
              </Tabs.Root>
            </PlaygroundSection>

            <PlaygroundSection>
              <PlaygroundSectionTitle id="code">Code</PlaygroundSectionTitle>
              <Tabs.Root defaultValue="theme-colors">
                <Tabs.List size="2">
                  <Tabs.Trigger value="theme-colors">Theme colors</Tabs.Trigger>
                  <Tabs.Trigger value="all-colors">All colors</Tabs.Trigger>
                  <Tabs.Trigger value="all-sizes">All sizes</Tabs.Trigger>
                  <Tabs.Trigger value="all-weights">All weights</Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="theme-colors">
                  <Box mt="6">
                    <table className={styles.PlaygroundTable}>
                      <thead>
                        <tr>
                          <th />
                          <th colSpan={2}>Accent</th>
                          <th colSpan={2}>Gray</th>
                        </tr>
                      </thead>
                      <tbody>
                        {codePropDefs.variant.values.map((variant) => (
                          <tr key={variant} style={{ verticalAlign: 'baseline' }}>
                            <td>{upperFirst(variant)}</td>
                            <td>
                              <Flex>
                                <Code variant={variant}>console.log()</Code>
                              </Flex>
                            </td>
                            <td>
                              <Flex>
                                <Code variant={variant} highContrast>
                                  console.log()
                                </Code>
                              </Flex>
                            </td>
                            <td>
                              <Flex>
                                <Code variant={variant} color="gray">
                                  console.log()
                                </Code>
                              </Flex>
                            </td>
                            <td>
                              <Flex>
                                <Code variant={variant} color="gray" highContrast>
                                  console.log()
                                </Code>
                              </Flex>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Tabs.Content>

                <Tabs.Content value="all-colors">
                  <Box mt="6">
                    <table className={styles.PlaygroundTable}>
                      <thead>
                        <tr>
                          <th />
                          {codePropDefs.variant.values.map((variant) => (
                            <th key={variant}>{upperFirst(variant)}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {accentColors.map((color) => (
                          <tr key={color} style={{ verticalAlign: 'baseline' }}>
                            <td>{upperFirst(color)}</td>
                            {codePropDefs.variant.values.map((variant) => (
                              <td key={variant}>
                                <Flex align="center" justify="center" gap="4">
                                  <Code variant={variant} color={color}>
                                    console.log()
                                  </Code>
                                  <Code variant={variant} color={color} highContrast>
                                    console.log()
                                  </Code>
                                </Flex>
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Tabs.Content>

                <Tabs.Content value="all-sizes">
                  <Box mt="6">
                    <Flex direction="column" gap="4">
                      {codePropDefs.size.values.map((size) => (
                        <Flex align="center" key={size}>
                          <Box flexShrink="0" style={{ width: 80 }}>
                            <Text color="gray" size="1">
                              Size {size}
                            </Text>
                          </Box>
                          <Code size={size}>console.log()</Code>
                        </Flex>
                      ))}
                    </Flex>
                  </Box>
                </Tabs.Content>

                <Tabs.Content value="all-weights">
                  <Box mt="6">
                    <table className={styles.PlaygroundTable} style={{ whiteSpace: 'nowrap' }}>
                      <tbody>
                        {(['regular', 'bold'] as const).map((weight) => (
                          <tr key={weight} style={{ verticalAlign: 'baseline' }}>
                            <td>{upperFirst(weight)}</td>
                            <td style={{ textAlign: 'left' }}>
                              <Code weight={weight}>console.log()</Code>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Tabs.Content>
              </Tabs.Root>
            </PlaygroundSection>

            <PlaygroundSection>
              <PlaygroundSectionTitle id="context-menu">Context Menu</PlaygroundSectionTitle>
              <Tabs.Root defaultValue="theme-colors">
                <Tabs.List size="2">
                  <Tabs.Trigger value="theme-colors">Theme colors</Tabs.Trigger>
                  <Tabs.Trigger value="all-colors">All colors</Tabs.Trigger>
                  <Tabs.Trigger value="all-sizes">All sizes</Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="theme-colors">
                  <Box mt="6">
                    <table className={styles.PlaygroundTable}>
                      <thead>
                        <tr>
                          <th />
                          <th colSpan={2}>Accent</th>
                          <th colSpan={2}>Gray</th>
                        </tr>
                      </thead>
                      <tbody>
                        {contextMenuContentPropDefs.variant.values.map((variant) => (
                          <tr key={variant}>
                            <td>{upperFirst(variant)}</td>
                            <td>
                              <ContextMenu.Root>
                                <ContextMenu.Trigger>
                                  <RightClickArea variant={variant} />
                                </ContextMenu.Trigger>
                                <ContextMenu.Content variant={variant}>
                                  <ExampleContextMenuContent />
                                </ContextMenu.Content>
                              </ContextMenu.Root>
                            </td>
                            <td>
                              <ContextMenu.Root>
                                <ContextMenu.Trigger>
                                  <RightClickArea variant={variant} highContrast />
                                </ContextMenu.Trigger>
                                <ContextMenu.Content variant={variant} highContrast>
                                  <ExampleContextMenuContent />
                                </ContextMenu.Content>
                              </ContextMenu.Root>
                            </td>
                            <td>
                              <ContextMenu.Root>
                                <ContextMenu.Trigger>
                                  <RightClickArea variant={variant} color="gray" />
                                </ContextMenu.Trigger>
                                <ContextMenu.Content variant={variant} color="gray">
                                  <ExampleContextMenuContent />
                                </ContextMenu.Content>
                              </ContextMenu.Root>
                            </td>
                            <td>
                              <ContextMenu.Root>
                                <ContextMenu.Trigger>
                                  <RightClickArea variant={variant} color="gray" highContrast />
                                </ContextMenu.Trigger>
                                <ContextMenu.Content variant={variant} color="gray" highContrast>
                                  <ExampleContextMenuContent />
                                </ContextMenu.Content>
                              </ContextMenu.Root>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Tabs.Content>

                <Tabs.Content value="all-colors">
                  <Box mt="6">
                    <table className={styles.PlaygroundTable}>
                      <thead>
                        <tr>
                          <th />
                          {contextMenuContentPropDefs.variant.values.map((variant) => (
                            <th key={variant}>{upperFirst(variant)}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {accentColors.map((color) => (
                          <tr key={color}>
                            <td>{upperFirst(color)}</td>
                            {contextMenuContentPropDefs.variant.values.map((variant) => (
                              <td key={variant}>
                                <Flex align="center" justify="center" gap="4">
                                  <ContextMenu.Root>
                                    <ContextMenu.Trigger>
                                      <RightClickArea variant={variant} color={color} />
                                    </ContextMenu.Trigger>
                                    <ContextMenu.Content variant={variant} color={color}>
                                      <ExampleContextMenuContent />
                                    </ContextMenu.Content>
                                  </ContextMenu.Root>
                                  <ContextMenu.Root>
                                    <ContextMenu.Trigger>
                                      <RightClickArea
                                        variant={variant}
                                        color={color}
                                        highContrast
                                      />
                                    </ContextMenu.Trigger>
                                    <ContextMenu.Content
                                      variant={variant}
                                      color={color}
                                      highContrast
                                    >
                                      <ExampleContextMenuContent />
                                    </ContextMenu.Content>
                                  </ContextMenu.Root>
                                </Flex>
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Tabs.Content>

                <Tabs.Content value="all-sizes">
                  <Box mt="6">
                    <table className={styles.PlaygroundTable}>
                      <thead>
                        <tr>
                          <th />
                          {contextMenuContentPropDefs.variant.values.map((variant) => (
                            <th key={variant} style={{ textAlign: 'left' }}>
                              {upperFirst(variant)}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {contextMenuContentPropDefs.size.values.map((size) => (
                          <tr key={size}>
                            <td>Size {size}</td>
                            {contextMenuContentPropDefs.variant.values.map((variant) => (
                              <td key={variant}>
                                <Flex>
                                  <ContextMenu.Root>
                                    <ContextMenu.Trigger>
                                      <RightClickArea size={size} variant={variant} />
                                    </ContextMenu.Trigger>
                                    <ContextMenu.Content size={size} variant={variant}>
                                      <ExampleContextMenuContent />
                                    </ContextMenu.Content>
                                  </ContextMenu.Root>
                                </Flex>
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Tabs.Content>
              </Tabs.Root>
            </PlaygroundSection>

            <PlaygroundSection>
              <PlaygroundSectionTitle id="dialog">Dialog</PlaygroundSectionTitle>
              <Flex gap="4" align="center">
                <Dialog.Root>
                  <Dialog.Trigger>
                    <Button size="1">Open</Button>
                  </Dialog.Trigger>
                  <Dialog.Content
                    size="1"
                    style={{ maxWidth: 300, marginInline: 'var(--space-5)' }}
                  >
                    <Dialog.Title size="3" mb="1">
                      Edit profile
                    </Dialog.Title>
                    <Dialog.Description size="2" mb="3">
                      Make changes to your profile.
                    </Dialog.Description>

                    <Flex direction="column" gap="3">
                      <label>
                        <Text as="div" size="1" mb="1" weight="bold">
                          Name
                        </Text>
                        <TextField.Root
                          size="1"
                          defaultValue="Freja Johnsen"
                          placeholder="Enter your full name"
                        />
                      </label>
                      <label>
                        <Text as="div" size="1" mb="1" weight="bold">
                          Email
                        </Text>
                        <TextField.Root
                          size="1"
                          defaultValue="freja@example.com"
                          placeholder="Enter your email"
                        />
                      </label>
                    </Flex>

                    <Flex gap="2" mt="3" justify="end">
                      <Dialog.Close>
                        <Button size="1" variant="soft" color="gray">
                          Cancel
                        </Button>
                      </Dialog.Close>
                      <Dialog.Close>
                        <Button size="1" autoFocus>
                          Save
                        </Button>
                      </Dialog.Close>
                    </Flex>
                  </Dialog.Content>
                </Dialog.Root>

                <Dialog.Root>
                  <Dialog.Trigger>
                    <Button size="2">Open</Button>
                  </Dialog.Trigger>
                  <Dialog.Content
                    size="2"
                    style={{ maxWidth: 400, marginInline: 'var(--space-5)' }}
                  >
                    <Dialog.Title mb="2">Edit profile</Dialog.Title>
                    <Dialog.Description size="2" mb="4">
                      Make changes to your profile.
                    </Dialog.Description>

                    <Flex direction="column" gap="3">
                      <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                          Name
                        </Text>
                        <TextField.Root
                          defaultValue="Freja Johnsen"
                          placeholder="Enter your full name"
                        />
                      </label>
                      <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                          Email
                        </Text>
                        <TextField.Root
                          defaultValue="freja@example.com"
                          placeholder="Enter your email"
                        />
                      </label>
                    </Flex>

                    <Flex gap="3" mt="4" justify="end">
                      <Dialog.Close>
                        <Button variant="soft" color="gray">
                          Cancel
                        </Button>
                      </Dialog.Close>
                      <Dialog.Close>
                        <Button autoFocus>Save</Button>
                      </Dialog.Close>
                    </Flex>
                  </Dialog.Content>
                </Dialog.Root>

                <Dialog.Root>
                  <Dialog.Trigger>
                    <Button size="3">Open</Button>
                  </Dialog.Trigger>
                  <Dialog.Content
                    size="3"
                    style={{ maxWidth: 500, marginInline: 'var(--space-5)' }}
                  >
                    <Dialog.Title>Edit profile</Dialog.Title>
                    <Dialog.Description size="2" mb="4">
                      Make changes to your profile.
                    </Dialog.Description>

                    <Flex direction="column" gap="3">
                      <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                          Name
                        </Text>
                        <TextField.Root
                          defaultValue="Freja Johnsen"
                          placeholder="Enter your full name"
                        />
                      </label>
                      <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                          Email
                        </Text>
                        <TextField.Root
                          defaultValue="freja@example.com"
                          placeholder="Enter your email"
                        />
                      </label>
                    </Flex>

                    <Flex gap="3" mt="4" justify="end">
                      <Dialog.Close>
                        <Button variant="soft" color="gray">
                          Cancel
                        </Button>
                      </Dialog.Close>
                      <Dialog.Close>
                        <Button autoFocus>Save</Button>
                      </Dialog.Close>
                    </Flex>
                  </Dialog.Content>
                </Dialog.Root>

                <Dialog.Root>
                  <Dialog.Trigger>
                    <Button size="4">Open</Button>
                  </Dialog.Trigger>
                  <Dialog.Content size="4" style={{ marginInline: 'var(--space-5)' }}>
                    <Dialog.Title size="6">Edit profile</Dialog.Title>
                    <Dialog.Description size="3" mb="5">
                      Make changes to your profile.
                    </Dialog.Description>

                    <Flex direction="column" gap="5">
                      <label>
                        <Text as="div" size="3" mb="1" weight="bold">
                          Name
                        </Text>
                        <TextField.Root
                          size="3"
                          defaultValue="Freja Johnsen"
                          placeholder="Enter your full name"
                        />
                      </label>
                      <label>
                        <Text as="div" size="3" mb="1" weight="bold">
                          Email
                        </Text>
                        <TextField.Root
                          size="3"
                          defaultValue="freja@example.com"
                          placeholder="Enter your email"
                        />
                      </label>
                    </Flex>

                    <Flex gap="3" mt="5" justify="end">
                      <Dialog.Close>
                        <Button size="3" variant="soft" color="gray">
                          Cancel
                        </Button>
                      </Dialog.Close>
                      <Dialog.Close>
                        <Button size="3" autoFocus>
                          Save
                        </Button>
                      </Dialog.Close>
                    </Flex>
                  </Dialog.Content>
                </Dialog.Root>
              </Flex>
            </PlaygroundSection>

            <PlaygroundSection>
              <PlaygroundSectionTitle id="dropdown-menu">Dropdown Menu</PlaygroundSectionTitle>
              <Tabs.Root defaultValue="theme-colors">
                <Tabs.List size="2">
                  <Tabs.Trigger value="theme-colors">Theme colors</Tabs.Trigger>
                  <Tabs.Trigger value="all-colors">All colors</Tabs.Trigger>
                  <Tabs.Trigger value="all-sizes">All sizes</Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="theme-colors">
                  <Box mt="6">
                    <table className={styles.PlaygroundTable}>
                      <thead>
                        <tr>
                          <th />
                          <th colSpan={2}>Accent</th>
                          <th colSpan={2}>Gray</th>
                        </tr>
                      </thead>
                      <tbody>
                        {dropdownMenuContentPropDefs.variant.values.map((variant) => (
                          <tr key={variant}>
                            <td>{upperFirst(variant)}</td>
                            <td>
                              <DropdownMenu.Root>
                                <DropdownMenu.Trigger>
                                  <Button variant={variant}>
                                    Options
                                    <CaretDownIcon width="16" height="16" />
                                  </Button>
                                </DropdownMenu.Trigger>
                                <DropdownMenu.Content variant={variant}>
                                  <ExampleDropdownMenuContent />
                                </DropdownMenu.Content>
                              </DropdownMenu.Root>
                            </td>
                            <td>
                              <DropdownMenu.Root>
                                <DropdownMenu.Trigger>
                                  <Button variant={variant} highContrast>
                                    Options
                                    <CaretDownIcon width="16" height="16" />
                                  </Button>
                                </DropdownMenu.Trigger>
                                <DropdownMenu.Content variant={variant} highContrast>
                                  <ExampleDropdownMenuContent />
                                </DropdownMenu.Content>
                              </DropdownMenu.Root>
                            </td>
                            <td>
                              <DropdownMenu.Root>
                                <DropdownMenu.Trigger>
                                  <Button variant={variant} color="gray">
                                    Options
                                    <CaretDownIcon width="16" height="16" />
                                  </Button>
                                </DropdownMenu.Trigger>
                                <DropdownMenu.Content variant={variant} color="gray">
                                  <ExampleDropdownMenuContent />
                                </DropdownMenu.Content>
                              </DropdownMenu.Root>
                            </td>
                            <td>
                              <DropdownMenu.Root>
                                <DropdownMenu.Trigger>
                                  <Button variant={variant} color="gray" highContrast>
                                    Options
                                    <CaretDownIcon width="16" height="16" />
                                  </Button>
                                </DropdownMenu.Trigger>
                                <DropdownMenu.Content variant={variant} color="gray" highContrast>
                                  <ExampleDropdownMenuContent />
                                </DropdownMenu.Content>
                              </DropdownMenu.Root>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Tabs.Content>

                <Tabs.Content value="all-colors">
                  <Box mt="6">
                    <table className={styles.PlaygroundTable}>
                      <thead>
                        <tr>
                          <th />
                          {dropdownMenuContentPropDefs.variant.values.map((variant) => (
                            <th key={variant}>{upperFirst(variant)}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {accentColors.map((color) => (
                          <tr key={color}>
                            <td>{upperFirst(color)}</td>
                            {dropdownMenuContentPropDefs.variant.values.map((variant) => (
                              <td key={variant}>
                                <Flex align="center" justify="center" gap="4">
                                  <DropdownMenu.Root>
                                    <DropdownMenu.Trigger>
                                      <Button variant={variant} color={color}>
                                        Options
                                        <CaretDownIcon width="16" height="16" />
                                      </Button>
                                    </DropdownMenu.Trigger>
                                    <DropdownMenu.Content variant={variant} color={color}>
                                      <ExampleDropdownMenuContent />
                                    </DropdownMenu.Content>
                                  </DropdownMenu.Root>
                                  <DropdownMenu.Root>
                                    <DropdownMenu.Trigger>
                                      <Button variant={variant} color={color} highContrast>
                                        Options
                                        <CaretDownIcon width="16" height="16" />
                                      </Button>
                                    </DropdownMenu.Trigger>
                                    <DropdownMenu.Content
                                      variant={variant}
                                      color={color}
                                      highContrast
                                    >
                                      <ExampleDropdownMenuContent />
                                    </DropdownMenu.Content>
                                  </DropdownMenu.Root>
                                </Flex>
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Tabs.Content>

                <Tabs.Content value="all-sizes">
                  <Box mt="6">
                    <table className={styles.PlaygroundTable}>
                      <thead>
                        <tr>
                          <th />
                          {dropdownMenuContentPropDefs.variant.values.map((variant) => (
                            <th key={variant} style={{ textAlign: 'left' }}>
                              {upperFirst(variant)}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {dropdownMenuContentPropDefs.size.values.map((size) => (
                          <tr key={size}>
                            <td>Size {size}</td>
                            {dropdownMenuContentPropDefs.variant.values.map((variant) => (
                              <td key={variant}>
                                <Flex>
                                  <DropdownMenu.Root>
                                    <DropdownMenu.Trigger>
                                      <Button size={size} variant={variant}>
                                        Options
                                        <CaretDownIcon {...buttonSizeToIconSize(size)} />
                                      </Button>
                                    </DropdownMenu.Trigger>
                                    <DropdownMenu.Content size={size} variant={variant}>
                                      <ExampleDropdownMenuContent />
                                    </DropdownMenu.Content>
                                  </DropdownMenu.Root>
                                </Flex>
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Tabs.Content>
              </Tabs.Root>
            </PlaygroundSection>

            <PlaygroundSection>
              <PlaygroundSectionTitle id="em">Em</PlaygroundSectionTitle>
              <Box style={{ width: 'calc(580px * var(--scaling))' }}>
                Versions of the <Em>Lorem ipsum</Em> text have been used in typesetting at least
                since the 1960s, when it was popularized by advertisements for Letraset transfer
                sheets. It is typically a corrupted version of{' '}
                <Em>De finibus bonorum et malorum</Em>, a 1st-century BC text by the Roman statesman
                and philosopher Cicero, with words altered, added, and removed to make it
                nonsensical and improper Latin.
              </Box>
            </PlaygroundSection>

            <PlaygroundSection>
              <PlaygroundSectionTitle id="heading">Heading</PlaygroundSectionTitle>
              <Tabs.Root defaultValue="specimen">
                <Tabs.List size="2">
                  <Tabs.Trigger value="specimen">Specimen</Tabs.Trigger>
                  <Tabs.Trigger value="all-colors">All colors</Tabs.Trigger>
                  <Tabs.Trigger value="all-sizes">All sizes</Tabs.Trigger>
                  <Tabs.Trigger value="all-weights">All weights</Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="specimen">
                  <Box mt="6" style={{ width: 'calc(585px * var(--scaling))' }}>
                    <Heading size="9">
                      The principles of the typographic craft are difficult to master
                    </Heading>
                  </Box>

                  <Grid columns="auto auto" mt="6" gap="6">
                    <Box pr="4" style={{ width: 'calc(340px * var(--scaling))' }}>
                      <Heading size="5" mb="2">
                        The principles of the typographic craft are difficult to master
                      </Heading>
                      <Text as="p" size="3">
                        The goal of typography is to relate font size, line height, and line width
                        in a proportional way that maximizes beauty and makes reading easier and
                        more pleasant.
                      </Text>
                    </Box>

                    <Box style={{ width: 'calc(330px * var(--scaling))' }}>
                      <Heading size="4" mb="2">
                        The principles of the typographic craft are difficult to master
                      </Heading>
                      <Text as="p" size="3">
                        The goal of typography is to relate font size, line height, and line width
                        in a proportional way that maximizes beauty and makes reading easier and
                        more pleasant.
                      </Text>
                    </Box>

                    <Box style={{ width: 'calc(290px * var(--scaling))' }}>
                      <Heading size="3" mb="1">
                        The principles of the typographic craft are difficult to master
                      </Heading>
                      <Text as="p" size="2">
                        The goal of typography is to relate font size, line height, and line width
                        in a proportional way that maximizes beauty and makes reading easier and
                        more pleasant.
                      </Text>
                    </Box>

                    <Box style={{ width: 'calc(260px * var(--scaling))' }}>
                      <Heading size="2" mb="1">
                        The principles of the typographic craft are difficult to master
                      </Heading>
                      <Text as="p" size="1">
                        The goal of typography is to relate font size, line height, and line width
                        in a proportional way that maximizes beauty and makes reading easier and
                        more pleasant.
                      </Text>
                    </Box>
                  </Grid>
                </Tabs.Content>

                <Tabs.Content value="all-colors">
                  <Box mt="6">
                    <table className={styles.PlaygroundTable} style={{ whiteSpace: 'nowrap' }}>
                      <tbody>
                        {accentColors.map((color) => (
                          <tr key={color}>
                            <td>{upperFirst(color)}</td>
                            <td>
                              <Heading color={color}>
                                The quick brown fox jumps over the lazy dog
                              </Heading>
                              <Heading color={color} highContrast>
                                The quick brown fox jumps over the lazy dog
                              </Heading>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Tabs.Content>

                <Tabs.Content value="all-sizes">
                  <Box mt="6">
                    <table className={styles.PlaygroundTable} style={{ whiteSpace: 'nowrap' }}>
                      <tbody>
                        {headingPropDefs.size.values.map((size) => (
                          <tr key={size}>
                            <td>Size {size}</td>
                            <td style={{ textAlign: 'left' }}>
                              <Heading size={size}>
                                The quick brown fox
                                <br />
                                jumps over the lazy dog
                              </Heading>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Tabs.Content>

                <Tabs.Content value="all-weights">
                  <Box mt="6">
                    <table className={styles.PlaygroundTable} style={{ whiteSpace: 'nowrap' }}>
                      <tbody>
                        {headingPropDefs.weight.values.map((weight) => (
                          <tr key={weight} style={{ verticalAlign: 'baseline' }}>
                            <td>{upperFirst(weight)}</td>
                            <td style={{ textAlign: 'left' }}>
                              <Heading weight={weight}>
                                The quick brown fox jumps over the lazy dog
                              </Heading>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Tabs.Content>
              </Tabs.Root>
            </PlaygroundSection>

            <PlaygroundSection>
              <PlaygroundSectionTitle id="hover-card">Hover Card</PlaygroundSectionTitle>
              <Flex direction="column" gap="4">
                {hoverCardContentPropDefs.size.values.map((size) => (
                  <Text key={size} size={size}>
                    Technology revolutionized{' '}
                    <HoverCard.Root>
                      <HoverCard.Trigger>
                        <Link>typography</Link>
                      </HoverCard.Trigger>

                      <HoverCard.Content size={size} side="top">
                        <Flex>
                          <Inset side="left" pr="current">
                            <InsetImage style={{ width: 120 }} />
                          </Inset>
                          <Text as="p" size={size} style={{ maxWidth: 150 + 50 * Number(size) }}>
                            <Strong>Typography</Strong> is the art and technique of arranging type
                            to make written language legible, readable and appealing when displayed.
                          </Text>
                        </Flex>
                      </HoverCard.Content>
                    </HoverCard.Root>{' '}
                    in the latter twentieth century.
                  </Text>
                ))}
              </Flex>
            </PlaygroundSection>

            <PlaygroundSection>
              <PlaygroundSectionTitle id="icon-button">Icon Button</PlaygroundSectionTitle>
              <Tabs.Root defaultValue="theme-colors">
                <Tabs.List size="2">
                  <Tabs.Trigger value="theme-colors">Theme colors</Tabs.Trigger>
                  <Tabs.Trigger value="all-colors">All colors</Tabs.Trigger>
                  <Tabs.Trigger value="all-sizes">All sizes</Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="theme-colors">
                  <Box mt="6">
                    <table className={styles.PlaygroundTable}>
                      <thead>
                        <tr>
                          <th />
                          <th colSpan={2}>Accent</th>
                          <th colSpan={2}>Gray</th>
                          <th>Disabled</th>
                        </tr>
                      </thead>
                      <tbody>
                        {iconButtonPropDefs.variant.values.map((variant) => (
                          <tr key={variant}>
                            <td>{upperFirst(variant)}</td>
                            <td>
                              <IconButton variant={variant}>
                                <StarIcon width="16" height="16" />
                              </IconButton>
                            </td>
                            <td>
                              <IconButton variant={variant} highContrast>
                                <StarIcon width="16" height="16" />
                              </IconButton>
                            </td>
                            <td>
                              <IconButton variant={variant} color="gray">
                                <StarIcon width="16" height="16" />
                              </IconButton>
                            </td>
                            <td>
                              <IconButton variant={variant} color="gray" highContrast>
                                <StarIcon width="16" height="16" />
                              </IconButton>
                            </td>
                            <td>
                              <IconButton variant={variant} disabled>
                                <StarIcon width="16" height="16" />
                              </IconButton>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Tabs.Content>

                <Tabs.Content value="all-colors">
                  <Box mt="6">
                    <table className={styles.PlaygroundTable}>
                      <thead>
                        <tr>
                          <th />
                          {iconButtonPropDefs.variant.values.map((variant) => (
                            <th key={variant}>{upperFirst(variant)}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {accentColors.map((color) => (
                          <tr key={color}>
                            <td>{upperFirst(color)}</td>
                            {iconButtonPropDefs.variant.values.map((variant) => (
                              <td key={variant}>
                                <Flex align="center" justify="center" gap="4">
                                  <IconButton variant={variant} color={color}>
                                    <StarIcon width="16" height="16" />
                                  </IconButton>
                                  <IconButton variant={variant} color={color} highContrast>
                                    <StarIcon width="16" height="16" />
                                  </IconButton>
                                </Flex>
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Tabs.Content>

                <Tabs.Content value="all-sizes">
                  <Box mt="6">
                    <table className={styles.PlaygroundTable}>
                      <thead>
                        <tr>
                          <th />
                          {iconButtonPropDefs.radius.values.map((radius) => (
                            <th key={radius} style={{ textAlign: 'left' }}>
                              {radius === 'none' ? 'No radius' : upperFirst(radius)}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {iconButtonPropDefs.variant.values.map((variant, index) => (
                          <React.Fragment key={variant}>
                            {index > 0 && (
                              <tr>
                                <td>&nbsp;</td>
                              </tr>
                            )}
                            {iconButtonPropDefs.size.values.map((size) => (
                              <tr key={size}>
                                <td>Size {size}</td>
                                {iconButtonPropDefs.radius.values.map((radius) => (
                                  <td key={radius} style={{ textAlign: 'left' }}>
                                    <IconButton size={size} variant={variant} radius={radius}>
                                      <StarIcon {...buttonSizeToIconSize(size)} />
                                    </IconButton>
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </React.Fragment>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Tabs.Content>
              </Tabs.Root>
            </PlaygroundSection>

            <PlaygroundSection>
              <PlaygroundSectionTitle id="inset">Inset</PlaygroundSectionTitle>
              <Box>
                <Flex gap="6">
                  <Card size="2">
                    <Flex>
                      <Inset clip="padding-box" side="left" pr="current">
                        <InsetImage />
                      </Inset>
                      <Text as="p" size="3" style={{ width: 240 }}>
                        <Strong>Typography</Strong> is the art and technique of arranging type to
                        make written language legible, readable and appealing when displayed.
                      </Text>
                    </Flex>
                  </Card>

                  <Card size="2">
                    <Flex>
                      <Text as="p" size="3" style={{ width: 240 }}>
                        <Strong>Typography</Strong> is the art and technique of arranging type to
                        make written language legible, readable and appealing when displayed.
                      </Text>
                      <Inset clip="padding-box" side="right" pl="current">
                        <InsetImage />
                      </Inset>
                    </Flex>
                  </Card>
                </Flex>

                <Flex gap="6" mt="6">
                  <Card size="2" style={{ width: 300 }}>
                    <Inset clip="padding-box" side="top" pb="current">
                      <InsetImage style={{ width: '100%', height: 160 }} />
                    </Inset>
                    <Text as="p" size="3" style={{ width: 240 }}>
                      <Strong>Typography</Strong> is the art and technique of arranging type to make
                      written language legible, readable and appealing when displayed.
                    </Text>
                  </Card>

                  <Card size="2" style={{ width: 300 }}>
                    <Text as="p" size="3" style={{ width: 240 }}>
                      <Strong>Typography</Strong> is the art and technique of arranging type to make
                      written language legible, readable and appealing when displayed.
                    </Text>
                    <Inset clip="padding-box" side="bottom" pt="current">
                      <InsetImage style={{ width: '100%', height: 160 }} />
                    </Inset>
                  </Card>
                </Flex>
              </Box>
            </PlaygroundSection>

            <PlaygroundSection>
              <PlaygroundSectionTitle id="kbd">Kbd</PlaygroundSectionTitle>
              <Tabs.Root defaultValue="specimen">
                <Tabs.List size="2">
                  <Tabs.Trigger value="specimen">Specimen</Tabs.Trigger>
                  <Tabs.Trigger value="all-sizes">All sizes</Tabs.Trigger>
                </Tabs.List>

                <Tabs.Content value="specimen">
                  <Flex direction="column" gap="4" mt="6">
                    <Text as="p" size="2">
                      Press <Kbd>⌘ C</Kbd> to show/hide the Theme Panel, or press <Kbd>⌘ D</Kbd> to
                      toggle dark mode.
                    </Text>
                    <Text as="p" size="3">
                      Press <Kbd>⌘ C</Kbd> to show/hide the Theme Panel, or press <Kbd>⌘ D</Kbd> to
                      toggle dark mode.
                    </Text>
                    <Text as="p" size="4">
                      Press <Kbd>⌘ C</Kbd> to show/hide the Theme Panel, or press <Kbd>⌘ D</Kbd> to
                      toggle dark mode.
                    </Text>
                    <Text as="p" size="5">
                      Press <Kbd>⌘ C</Kbd> to show/hide the Theme Panel, or press <Kbd>⌘ D</Kbd> to
                      toggle dark mode.
                    </Text>
                  </Flex>
                </Tabs.Content>

                <Tabs.Content value="all-sizes">
                  <Box mt="6">
                    <Box mt="6">
                      <Flex direction="column" gap="4" style={{ whiteSpace: 'nowrap' }}>
                        {kbdPropDefs.size.values.map((size) => (
                          <Flex align="center" key={size}>
                            <Box flexShrink="0" style={{ width: 80 }}>
                              <Text color="gray" size="1">
                                Size {size}
                              </Text>
                            </Box>
                            <Kbd size={size}>⌥ J</Kbd>
                          </Flex>
                        ))}
                      </Flex>
                    </Box>
                  </Box>
                </Tabs.Content>
              </Tabs.Root>
            </PlaygroundSection>

            <PlaygroundSection>
              <PlaygroundSectionTitle id="link">Link</PlaygroundSectionTitle>
              <Tabs.Root defaultValue="specimen">
                <Tabs.List size="2">
                  <Tabs.Trigger value="specimen">Specimen</Tabs.Trigger>
                  <Tabs.Trigger value="all-colors">All colors</Tabs.Trigger>
                  <Tabs.Trigger value="all-sizes">All sizes</Tabs.Trigger>
                  <Tabs.Trigger value="all-weights">All weights</Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="specimen">
                  <Grid
                    mt="6"
                    gap="6"
                    columns="calc(440px * var(--scaling)) calc(440px * var(--scaling))"
                  >
                    <Flex direction="column" gap="6">
                      <Text mb="-4" size="1" color="gray" align="center">
                        Accent
                      </Text>

                      <Text as="p" size="4">
                        Susan Kare is an American artist and{' '}
                        <Link href="#link">graphic designer</Link>, who contributed{' '}
                        <Link href="#link">interface</Link> elements and{' '}
                        <Link href="#link">typefaces</Link> for the first{' '}
                        <Link href="#link">Apple Macintosh</Link> personal computer from 1983 to
                        1986.
                      </Text>

                      <Text as="p" size="3">
                        Susan Kare is an American artist and{' '}
                        <Link href="#link">graphic designer</Link>, who contributed{' '}
                        <Link href="#link">interface</Link> elements and{' '}
                        <Link href="#link">typefaces</Link> for the first{' '}
                        <Link href="#link">Apple Macintosh</Link> personal computer from 1983 to
                        1986.
                      </Text>

                      <Text as="p" size="2">
                        Susan Kare is an American artist and{' '}
                        <Link href="#link">graphic designer</Link>, who contributed{' '}
                        <Link href="#link">interface</Link> elements and{' '}
                        <Link href="#link">typefaces</Link> for the first{' '}
                        <Link href="#link">Apple Macintosh</Link> personal computer from 1983 to
                        1986.
                      </Text>
                    </Flex>

                    <Flex direction="column" gap="6">
                      <Text mb="-4" size="1" color="gray" align="center">
                        Gray
                      </Text>

                      <Text as="p" size="4" color="gray">
                        Susan Kare is an American artist and{' '}
                        <Link href="#link">graphic designer</Link>, who contributed{' '}
                        <Link href="#link">interface</Link> elements and{' '}
                        <Link href="#link">typefaces</Link> for the first{' '}
                        <Link href="#link">Apple Macintosh</Link> personal computer from 1983 to
                        1986.
                      </Text>

                      <Text as="p" size="3" color="gray">
                        Susan Kare is an American artist and{' '}
                        <Link href="#link">graphic designer</Link>, who contributed{' '}
                        <Link href="#link">interface</Link> elements and{' '}
                        <Link href="#link">typefaces</Link> for the first{' '}
                        <Link href="#link">Apple Macintosh</Link> personal computer from 1983 to
                        1986.
                      </Text>

                      <Text as="p" size="2" color="gray">
                        Susan Kare is an American artist and{' '}
                        <Link href="#link">graphic designer</Link>, who contributed{' '}
                        <Link href="#link">interface</Link> elements and{' '}
                        <Link href="#link">typefaces</Link> for the first{' '}
                        <Link href="#link">Apple Macintosh</Link> personal computer from 1983 to
                        1986.
                      </Text>
                    </Flex>
                  </Grid>
                </Tabs.Content>

                <Tabs.Content value="all-colors">
                  <Box mt="6">
                    <table className={styles.PlaygroundTable} style={{ whiteSpace: 'nowrap' }}>
                      <tbody>
                        {accentColors.map((color) => (
                          <tr key={color}>
                            <td>{upperFirst(color)}</td>
                            <td style={{ textAlign: 'left' }}>
                              <Flex gap="6">
                                <Link href="/" color={color}>
                                  Radix Themes
                                </Link>
                                <Link href="/" color={color} highContrast>
                                  Radix Themes
                                </Link>
                              </Flex>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Tabs.Content>

                <Tabs.Content value="all-sizes">
                  <Box mt="6">
                    <Flex direction="column" gap="4">
                      {linkPropDefs.size.values.map((size) => (
                        <Flex align="center" key={size}>
                          <Box flexShrink="0" style={{ width: 80 }}>
                            <Text color="gray" size="1">
                              Size {size}
                            </Text>
                          </Box>
                          <Link href="/" size={size}>
                            Radix Themes
                          </Link>
                        </Flex>
                      ))}
                    </Flex>
                  </Box>
                </Tabs.Content>

                <Tabs.Content value="all-weights">
                  <Box mt="6">
                    <table className={styles.PlaygroundTable} style={{ whiteSpace: 'nowrap' }}>
                      <tbody>
                        {linkPropDefs.weight.values.map((weight) => (
                          <tr key={weight}>
                            <td>{upperFirst(weight)}</td>
                            <td style={{ textAlign: 'left' }}>
                              <Link href="/" weight={weight}>
                                Radix Themes
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Tabs.Content>
              </Tabs.Root>
            </PlaygroundSection>

            <PlaygroundSection>
              <PlaygroundSectionTitle id="popover">Popover.</PlaygroundSectionTitle>
              <Flex align="center" gap="4">
                <Popover.Root>
                  <Popover.Trigger>
                    <Button size="1">
                      <ChatBubbleIcon width="14" height="14" />
                      Comment
                    </Button>
                  </Popover.Trigger>
                  <Popover.Content size="1" style={{ width: 280 }}>
                    <Flex gap="3">
                      <Avatar
                        size="2"
                        src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                        fallback="A"
                      />
                      <Box flexGrow="1">
                        <TextArea size="1" placeholder="Write a comment…" style={{ height: 80 }} />

                        <Flex gap="3" mt="3" justify="between">
                          <Flex align="center" gap="2" asChild>
                            <Text as="label" size="1">
                              <Checkbox size="1" />
                              <Text>Send to group</Text>
                            </Text>
                          </Flex>

                          <Popover.Close>
                            <Button autoFocus size="1">
                              Comment
                            </Button>
                          </Popover.Close>
                        </Flex>
                      </Box>
                    </Flex>
                  </Popover.Content>
                </Popover.Root>

                <Popover.Root>
                  <Popover.Trigger>
                    <Button size="2">
                      <ChatBubbleIcon width="16" height="16" />
                      Comment
                    </Button>
                  </Popover.Trigger>
                  <Popover.Content size="2" style={{ width: 320 }}>
                    <Flex gap="4">
                      <Avatar
                        size="3"
                        src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                        fallback="A"
                      />
                      <Box flexGrow="1">
                        <TextArea placeholder="Write a comment…" style={{ height: 100 }} />
                        <Flex gap="3" mt="3" justify="between">
                          <Flex align="center" gap="2" asChild>
                            <Text as="label" size="2">
                              <Checkbox />
                              <Text>Send to group</Text>
                            </Text>
                          </Flex>

                          <Popover.Close>
                            <Button autoFocus size="2">
                              Comment
                            </Button>
                          </Popover.Close>
                        </Flex>
                      </Box>
                    </Flex>
                  </Popover.Content>
                </Popover.Root>

                <Popover.Root>
                  <Popover.Trigger>
                    <Button size="3">
                      <ChatBubbleIcon width="16" height="16" />
                      Comment
                    </Button>
                  </Popover.Trigger>
                  <Popover.Content size="3" style={{ width: 400 }}>
                    <Flex gap="4">
                      <Avatar
                        size="4"
                        src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                        fallback="A"
                      />
                      <Box flexGrow="1">
                        <TextArea size="3" placeholder="Write a comment…" style={{ height: 120 }} />
                        <Flex gap="3" mt="4" justify="between">
                          <Flex align="center" gap="2" asChild>
                            <Text as="label" size="2">
                              <Checkbox size="2" />
                              <Text>Send to group</Text>
                            </Text>
                          </Flex>

                          <Popover.Close>
                            <Button autoFocus size="3">
                              Comment
                            </Button>
                          </Popover.Close>
                        </Flex>
                      </Box>
                    </Flex>
                  </Popover.Content>
                </Popover.Root>

                <Popover.Root>
                  <Popover.Trigger>
                    <Button size="4">
                      <ChatBubbleIcon width="18" height="18" />
                      Comment
                    </Button>
                  </Popover.Trigger>
                  <Popover.Content size="4" style={{ width: 440 }}>
                    <Flex gap="5">
                      <Avatar
                        size="5"
                        src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                        fallback="A"
                      />
                      <Box flexGrow="1">
                        <TextArea size="3" placeholder="Write a comment…" style={{ height: 120 }} />
                        <Flex gap="3" mt="4" justify="between">
                          <Flex align="center" gap="2" asChild>
                            <Text as="label" size="1">
                              <Checkbox size="3" />
                              <Text size="3">Send to group</Text>
                            </Text>
                          </Flex>

                          <Popover.Close>
                            <Button autoFocus size="3">
                              Comment
                            </Button>
                          </Popover.Close>
                        </Flex>
                      </Box>
                    </Flex>
                  </Popover.Content>
                </Popover.Root>
              </Flex>
            </PlaygroundSection>

            <PlaygroundSection>
              <PlaygroundSectionTitle id="quote">Quote</PlaygroundSectionTitle>
              <Box style={{ width: 'calc(580px * var(--scaling))' }}>
                <Quote style={{ marginLeft: '-0.4em' }}>
                  A man who would letterspace lower case would steal sheep
                  <span style={{ marginRight: '-0.2em' }}>,</span>
                </Quote>{' '}
                Frederic Goudy liked to say. The reason for not letterspacing lower case is that it
                hampers legibility. But there are some lowercase alphabets to which this principle
                doesn’t apply. Moderate letterspacing can make a face such as lowercase Univers bold
                condensed more legible rather than less
              </Box>
            </PlaygroundSection>

            <PlaygroundSection>
              <PlaygroundSectionTitle id="radio">Radio</PlaygroundSectionTitle>
              <Tabs.Root defaultValue="theme-colors">
                <Tabs.List size="2">
                  <Tabs.Trigger value="theme-colors">Theme colors</Tabs.Trigger>
                  <Tabs.Trigger value="all-colors">All colors</Tabs.Trigger>
                  <Tabs.Trigger value="all-sizes">All sizes</Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="theme-colors">
                  <Box mt="6">
                    <table className={styles.PlaygroundTable}>
                      <thead>
                        <tr>
                          <th />
                          <th>Accent</th>
                          <th>Gray</th>
                          <th>Disabled</th>
                        </tr>
                      </thead>
                      <tbody>
                        {radioPropDefs.variant.values.map((variant) => (
                          <tr key={variant}>
                            <td>{upperFirst(variant)}</td>
                            <td>
                              <Flex align="center" justify="center" gap="2">
                                <Radio
                                  name={`radio-accent-${variant}`}
                                  variant={variant}
                                  value="1"
                                />
                                <Radio
                                  name={`radio-accent-${variant}`}
                                  variant={variant}
                                  value="2"
                                  defaultChecked
                                />
                                <Radio highContrast variant={variant} value="" defaultChecked />
                              </Flex>
                            </td>
                            <td>
                              <Flex align="center" justify="center" gap="2">
                                <Radio
                                  name={`radio-gray-${variant}`}
                                  color="gray"
                                  variant={variant}
                                  value="1"
                                />
                                <Radio
                                  name={`radio-gray-${variant}`}
                                  color="gray"
                                  variant={variant}
                                  value="2"
                                  defaultChecked
                                />
                                <Radio
                                  color="gray"
                                  highContrast
                                  variant={variant}
                                  value=""
                                  defaultChecked
                                />
                              </Flex>
                            </td>
                            <td>
                              <Flex align="center" justify="center" gap="2">
                                <Radio disabled variant={variant} value="" />
                                <Radio disabled variant={variant} value="" defaultChecked />
                              </Flex>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Tabs.Content>

                <Tabs.Content value="all-colors">
                  <Box mt="6">
                    <table className={styles.PlaygroundTable}>
                      <thead>
                        <tr>
                          <th />
                          {radioPropDefs.variant.values.map((variant) => (
                            <th key={variant}>{upperFirst(variant)}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {accentColors.map((color) => (
                          <tr key={color}>
                            <td>{upperFirst(color)}</td>
                            {radioPropDefs.variant.values.map((variant) => (
                              <td key={variant}>
                                <Flex align="center" justify="center" gap="2">
                                  <Radio
                                    name={`radio-${color}-${variant}`}
                                    color={color}
                                    variant={variant}
                                    value="1"
                                  />
                                  <Radio
                                    name={`radio-${color}-${variant}`}
                                    color={color}
                                    variant={variant}
                                    value="2"
                                    defaultChecked
                                  />
                                  <Radio
                                    color={color}
                                    variant={variant}
                                    defaultChecked
                                    value=""
                                    highContrast
                                  />
                                </Flex>
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Tabs.Content>

                <Tabs.Content value="all-sizes">
                  <Box mt="6">
                    <table className={styles.PlaygroundTable}>
                      <thead>
                        <tr>
                          <th />
                          {radioGroupRootPropDefs.variant.values.map((variant) => (
                            <th key={variant} style={{ textAlign: 'left' }}>
                              {upperFirst(variant)}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {radioGroupRootPropDefs.size.values.map((size) => (
                          <tr key={size}>
                            <td>Size {size}</td>
                            {radioGroupRootPropDefs.variant.values.map((variant) => (
                              <td key={variant} style={{ textAlign: 'left' }}>
                                <Flex align="center" justify="start" gap="2">
                                  <Radio
                                    name={`radio-size-${size}-${variant}`}
                                    size={size}
                                    variant={variant}
                                    value="1"
                                  />
                                  <Radio
                                    name={`radio-size-${size}-${variant}`}
                                    size={size}
                                    variant={variant}
                                    value="2"
                                    defaultChecked
                                  />
                                </Flex>
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Tabs.Content>
              </Tabs.Root>
            </PlaygroundSection>

            <PlaygroundSection>
              <PlaygroundSectionTitle id="radio-group">Radio Group</PlaygroundSectionTitle>
              <Flex align="start" direction="column" gap="5">
                {radioGroupRootPropDefs.size.values.map((size) => (
                  <RadioGroup.Root defaultValue="1" size={size} key={size}>
                    <RadioGroup.Item value="1">Agree to Terms and Conditions</RadioGroup.Item>
                    <RadioGroup.Item value="2">Disagree with Terms and Conditions</RadioGroup.Item>
                  </RadioGroup.Root>
                ))}
              </Flex>
            </PlaygroundSection>

            <PlaygroundSection>
              <PlaygroundSectionTitle id="radio-card-group">
                Radio Card Group
              </PlaygroundSectionTitle>

              <Tabs.Root defaultValue="theme-colors">
                <Tabs.List size="2">
                  <Tabs.Trigger value="theme-colors">Theme colors</Tabs.Trigger>
                  <Tabs.Trigger value="all-colors">All colors</Tabs.Trigger>
                  <Tabs.Trigger value="all-sizes">All sizes</Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="theme-colors">
                  <Box mt="6" mb="-6">
                    <table className={styles.PlaygroundTable}>
                      <thead>
                        <tr>
                          <th />
                          <th>Accent</th>
                          <th>Gray</th>
                        </tr>
                      </thead>
                      <tbody>
                        {radioCardGroupRootPropDefs.variant.values.map((variant) => (
                          <tr key={variant}>
                            <td>{upperFirst(variant)}</td>
                            <td>
                              <Flex direction="column" width="280px" gap="4" mx="2" mb="4">
                                <ExampleRadioCardGroup variant={variant} />
                                <ExampleRadioCardGroup variant={variant} highContrast />
                              </Flex>
                            </td>
                            <td>
                              <Flex direction="column" width="280px" gap="4" mx="2" mb="4">
                                <ExampleRadioCardGroup color="gray" variant={variant} />
                                <ExampleRadioCardGroup
                                  color="gray"
                                  variant={variant}
                                  highContrast
                                />
                              </Flex>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Tabs.Content>

                <Tabs.Content value="all-colors">
                  <Box mt="6">
                    <table className={styles.PlaygroundTable}>
                      <thead>
                        <tr>
                          <th />
                          {radioCardGroupRootPropDefs.variant.values.map((variant) => (
                            <th key={variant}>{upperFirst(variant)}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {accentColors.map((color) => (
                          <tr key={color}>
                            <td>{upperFirst(color)}</td>
                            {radioCardGroupRootPropDefs.variant.values.map((variant) => (
                              <td key={variant}>
                                <Flex align="center" justify="center" gap="5" mx="2">
                                  <Box width="280px">
                                    <ExampleRadioCardGroup color={color} variant={variant} />
                                  </Box>
                                  <Box width="280px">
                                    <ExampleRadioCardGroup
                                      color={color}
                                      variant={variant}
                                      highContrast
                                    />
                                  </Box>
                                </Flex>
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Tabs.Content>

                <Tabs.Content value="all-sizes">
                  <Box mt="6">
                    <table className={styles.PlaygroundTable}>
                      <thead>
                        <tr>
                          <th />
                          {radioCardGroupRootPropDefs.variant.values.map((variant) => (
                            <th key={variant} style={{ textAlign: 'left' }}>
                              {upperFirst(variant)}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {radioCardGroupRootPropDefs.size.values.map((size) => (
                          <tr key={size}>
                            <td>Size {size}</td>
                            {radioCardGroupRootPropDefs.variant.values.map((variant) => (
                              <td key={variant} style={{ textAlign: 'left' }}>
                                <Box width={`${160 + +size * 60}px`} mr="5" my="1">
                                  <ExampleRadioCardGroup variant={variant} size={size} />
                                </Box>
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Tabs.Content>
              </Tabs.Root>
            </PlaygroundSection>

            <PlaygroundSection>
              <PlaygroundSectionTitle id="scroll-area">Scroll Area</PlaygroundSectionTitle>
              <Flex align="start" direction="column">
                <Card size="2">
                  <Inset>
                    <ScrollArea
                      type="always"
                      scrollbars="vertical"
                      style={
                        {
                          width: 520,
                          height: 180,
                          '--scrollarea-scrollbar-margin-top': 'var(--space-3)',
                          '--scrollarea-scrollbar-margin-bottom': 'var(--space-3)',
                          '--scrollarea-scrollbar-margin-left': 'var(--space-3)',
                          '--scrollarea-scrollbar-margin-right': 'var(--space-3)',
                        } as React.CSSProperties
                      }
                    >
                      <Inset p="current" style={{ margin: 0 }}>
                        <Box pr="5">
                          <Flex direction="column" gap="4">
                            <Text as="p" size="2">
                              Three fundamental aspects of typography are legibility, readability,
                              and aesthetics. Although in a non-technical sense “legible” and
                              “readable” are often used synonymously, typographically they are
                              separate but related concepts.
                            </Text>

                            <Text as="p" size="2">
                              Legibility describes how easily individual characters can be
                              distinguished from one another. It is described by Walter Tracy as
                              “the quality of being decipherable and recognisable”. For instance, if
                              a “b” and an “h”, or a “3” and an “8”, are difficult to distinguish at
                              small sizes, this is a problem of legibility.
                            </Text>

                            <Text as="p" size="2">
                              Typographers are concerned with legibility insofar as it is their job
                              to select the correct font to use. Brush Script is an example of a
                              font containing many characters that might be difficult to
                              distinguish. The selection of cases influences the legibility of
                              typography because using only uppercase letters (all-caps) reduces
                              legibility.
                            </Text>
                          </Flex>
                        </Box>
                      </Inset>
                    </ScrollArea>
                  </Inset>
                </Card>
              </Flex>
            </PlaygroundSection>

            <PlaygroundSection>
              <PlaygroundSectionTitle id="select">Select.</PlaygroundSectionTitle>
              <Tabs.Root defaultValue="theme-colors">
                <Tabs.List size="2">
                  <Tabs.Trigger value="theme-colors">Theme colors</Tabs.Trigger>
                  <Tabs.Trigger value="all-colors">All colors</Tabs.Trigger>
                  <Tabs.Trigger value="all-sizes">All sizes</Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="theme-colors">
                  <Box mt="6">
                    <table className={styles.PlaygroundTable}>
                      <thead>
                        <tr>
                          <th />
                          <th>Accent</th>
                          <th>Gray</th>
                          <th>Placeholder</th>
                          <th>Disabled</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectTriggerPropDefs.variant.values.map((variant) => (
                          <tr key={variant}>
                            <td>{upperFirst(variant)}</td>
                            <td>
                              <Select.Root defaultValue="apple">
                                <Select.Trigger variant={variant} />
                                <Select.Content
                                  variant={selectTriggerVariantToSelectContentVariant(variant)}
                                >
                                  <ExampleSelectContent />
                                </Select.Content>
                              </Select.Root>
                            </td>
                            <td>
                              <Select.Root defaultValue="apple">
                                <Select.Trigger variant={variant} color="gray" />
                                <Select.Content
                                  variant={selectTriggerVariantToSelectContentVariant(variant)}
                                  color="gray"
                                  highContrast
                                >
                                  <ExampleSelectContent />
                                </Select.Content>
                              </Select.Root>
                            </td>
                            <td>
                              <Select.Root>
                                <Select.Trigger variant={variant} placeholder="Choose a fruit…" />
                                <Select.Content
                                  variant={selectTriggerVariantToSelectContentVariant(variant)}
                                >
                                  <ExampleSelectContent />
                                </Select.Content>
                              </Select.Root>
                            </td>
                            <td>
                              <Select.Root defaultValue="apple" disabled>
                                <Select.Trigger variant={variant} />
                                <Select.Content
                                  variant={selectTriggerVariantToSelectContentVariant(variant)}
                                >
                                  <ExampleSelectContent />
                                </Select.Content>
                              </Select.Root>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Tabs.Content>

                <Tabs.Content value="all-colors">
                  <Box mt="6">
                    <table className={styles.PlaygroundTable}>
                      <thead>
                        <tr>
                          <th />
                          {selectTriggerPropDefs.variant.values.map((variant) => (
                            <th key={variant}>{upperFirst(variant)}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {accentColors.map((color) => (
                          <tr key={color}>
                            <td>{upperFirst(color)}</td>
                            {selectTriggerPropDefs.variant.values.map((variant) => (
                              <td key={variant}>
                                <Select.Root defaultValue="apple">
                                  <Select.Trigger variant={variant} color={color} />
                                  <Select.Content
                                    variant={selectTriggerVariantToSelectContentVariant(variant)}
                                    color={color}
                                  >
                                    <ExampleSelectContent />
                                  </Select.Content>
                                </Select.Root>
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Tabs.Content>

                <Tabs.Content value="all-sizes">
                  <Box mt="6">
                    <table className={styles.PlaygroundTable}>
                      <thead>
                        <tr>
                          <th />
                          {selectTriggerPropDefs.radius.values.map((radius) => (
                            <th key={radius} style={{ textAlign: 'left' }}>
                              {radius === 'none' ? 'No radius' : upperFirst(radius)}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {selectTriggerPropDefs.variant.values.map((variant, index) => (
                          <React.Fragment key={variant}>
                            {index > 0 && (
                              <tr>
                                <td>&nbsp;</td>
                              </tr>
                            )}
                            {selectRootPropDefs.size.values.map((size) => (
                              <tr key={size}>
                                <td>Size {size}</td>
                                {selectTriggerPropDefs.radius.values.map((radius) => (
                                  <td key={radius} style={{ textAlign: 'left' }}>
                                    <Select.Root size={size} defaultValue="apple">
                                      <Select.Trigger variant={variant} radius={radius} />
                                      <Select.Content
                                        variant={selectTriggerVariantToSelectContentVariant(
                                          variant
                                        )}
                                      >
                                        <ExampleSelectContent />
                                      </Select.Content>
                                    </Select.Root>
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </React.Fragment>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Tabs.Content>
              </Tabs.Root>
            </PlaygroundSection>

            <PlaygroundSection>
              <PlaygroundSectionTitle id="separator">Separator</PlaygroundSectionTitle>
              <Flex style={{ whiteSpace: 'nowrap' }}>
                <Text size="2">
                  Tools for building high-quality, accessible UI.
                  <Separator my="3" size="4" />
                  <Flex gap="3" align="center">
                    Themes
                    <Separator orientation="vertical" />
                    Primitives
                    <Separator orientation="vertical" />
                    Icons
                    <Separator orientation="vertical" />
                    Colors
                  </Flex>
                </Text>
              </Flex>
            </PlaygroundSection>

            <PlaygroundSection>
              <PlaygroundSectionTitle id="segmented-control">
                Segmented Control
              </PlaygroundSectionTitle>

              <Box mt="6">
                <table className={styles.PlaygroundTable}>
                  <thead>
                    <tr>
                      <th />
                      {segmentedControlRootPropDefs.radius.values.map((radius) => (
                        <th key={radius} style={{ textAlign: 'left' }}>
                          {radius === 'none' ? 'No radius' : upperFirst(radius)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {segmentedControlRootPropDefs.variant.values.map((variant, index) => (
                      <React.Fragment key={variant}>
                        {index > 0 && (
                          <tr>
                            <td>&nbsp;</td>
                          </tr>
                        )}
                        {selectRootPropDefs.size.values.map((size) => (
                          <tr key={size}>
                            <td>Size {size}</td>
                            {segmentedControlRootPropDefs.radius.values.map((radius) => (
                              <td key={radius} style={{ textAlign: 'left' }}>
                                <Flex pr="4">
                                  <SegmentedControl.Root
                                    defaultValue="1"
                                    variant={variant}
                                    size={size}
                                    radius={radius}
                                  >
                                    <SegmentedControl.Item value="1">Inbox</SegmentedControl.Item>
                                    <SegmentedControl.Item value="2">Sent</SegmentedControl.Item>
                                  </SegmentedControl.Root>
                                </Flex>
                              </td>
                            ))}
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </Box>
            </PlaygroundSection>

            <PlaygroundSection>
              <PlaygroundSectionTitle id="slider">Slider</PlaygroundSectionTitle>
              <Tabs.Root defaultValue="theme-colors">
                <Tabs.List size="2">
                  <Tabs.Trigger value="theme-colors">Theme colors</Tabs.Trigger>
                  <Tabs.Trigger value="all-colors">All colors</Tabs.Trigger>
                  <Tabs.Trigger value="all-sizes">All sizes</Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="theme-colors">
                  <Box mt="6">
                    <table className={styles.PlaygroundTable}>
                      <thead>
                        <tr>
                          <th />
                          <th colSpan={2}>Accent</th>
                          <th colSpan={2}>Gray</th>
                          <th>Disabled</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sliderPropDefs.variant.values.map((variant, index) => (
                          <tr key={variant}>
                            <td>{upperFirst(variant)}</td>
                            <td>
                              <Slider defaultValue={[33 + 17 * index]} variant={variant} />
                            </td>
                            <td>
                              <Slider
                                defaultValue={[33 + 17 * index]}
                                variant={variant}
                                highContrast
                              />
                            </td>
                            <td>
                              <Slider
                                defaultValue={[33 + 17 * index]}
                                variant={variant}
                                color="gray"
                              />
                            </td>
                            <td>
                              <Slider
                                defaultValue={[33 + 17 * index]}
                                variant={variant}
                                color="gray"
                                highContrast
                              />
                            </td>
                            <td>
                              <Slider defaultValue={[33 + 17 * index]} variant={variant} disabled />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Tabs.Content>

                <Tabs.Content value="all-colors">
                  <Box mt="6">
                    <table className={styles.PlaygroundTable}>
                      <thead>
                        <tr>
                          <th />
                          {sliderPropDefs.variant.values.map((variant) => (
                            <th key={variant} colSpan={2}>
                              {upperFirst(variant)}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {accentColors.map((color, index) => (
                          <tr key={color}>
                            <td>{upperFirst(color)}</td>
                            {sliderPropDefs.variant.values.map((variant) => (
                              <React.Fragment key={variant}>
                                <td>
                                  <Slider
                                    defaultValue={[30 + index * 2]}
                                    color={color}
                                    variant={variant}
                                  />
                                </td>
                                <td>
                                  <Slider
                                    defaultValue={[30 + index * 2]}
                                    color={color}
                                    variant={variant}
                                    highContrast
                                  />
                                </td>
                              </React.Fragment>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Tabs.Content>

                <Tabs.Content value="all-sizes">
                  <Box mt="6">
                    <table className={styles.PlaygroundTable}>
                      <thead>
                        <tr>
                          <th />
                          {sliderPropDefs.radius.values.map((radius) => (
                            <th key={radius} style={{ textAlign: 'left' }}>
                              {radius === 'none' ? 'No radius' : upperFirst(radius)}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {sliderPropDefs.variant.values.map((variant, index) => (
                          <React.Fragment key={variant}>
                            {index > 0 && (
                              <tr>
                                <td>&nbsp;</td>
                              </tr>
                            )}
                            {sliderPropDefs.size.values.map((size, sizeIndex) => (
                              <tr key={size}>
                                <td>Size {size}</td>
                                {sliderPropDefs.radius.values.map((radius) => (
                                  <td key={radius} style={{ textAlign: 'left' }}>
                                    <Flex align="center" justify="start" gap="4">
                                      <Slider
                                        defaultValue={[33 + 17 * sizeIndex]}
                                        size={size}
                                        variant={variant}
                                        radius={radius}
                                      />
                                    </Flex>
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </React.Fragment>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Tabs.Content>
              </Tabs.Root>
            </PlaygroundSection>

            <PlaygroundSection>
              <PlaygroundSectionTitle id="switch">Switch</PlaygroundSectionTitle>
              <Tabs.Root defaultValue="theme-colors">
                <Tabs.List size="2">
                  <Tabs.Trigger value="theme-colors">Theme colors</Tabs.Trigger>
                  <Tabs.Trigger value="all-colors">All colors</Tabs.Trigger>
                  <Tabs.Trigger value="all-sizes">All sizes</Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="theme-colors">
                  <Box mt="6">
                    <table className={styles.PlaygroundTable}>
                      <thead>
                        <tr>
                          <th />
                          <th colSpan={2}>Accent</th>
                          <th colSpan={2}>Gray</th>
                          <th>Disabled</th>
                        </tr>
                      </thead>
                      <tbody>
                        {switchPropDefs.variant.values.map((variant) => (
                          <tr key={variant}>
                            <td>{upperFirst(variant)}</td>
                            <td>
                              <Flex align="center" justify="center" gap="4">
                                <Switch variant={variant} />
                                <Switch variant={variant} defaultChecked />
                              </Flex>
                            </td>
                            <td>
                              <Flex align="center" justify="center" gap="4">
                                <Switch variant={variant} highContrast defaultChecked />
                              </Flex>
                            </td>
                            <td>
                              <Flex align="center" justify="center" gap="4">
                                <Switch variant={variant} color="gray" />
                                <Switch variant={variant} color="gray" defaultChecked />
                              </Flex>
                            </td>
                            <td>
                              <Flex align="center" justify="center" gap="4">
                                <Switch
                                  variant={variant}
                                  color="gray"
                                  highContrast
                                  defaultChecked
                                />
                              </Flex>
                            </td>
                            <td>
                              <Flex align="center" justify="center" gap="4">
                                <Switch variant={variant} disabled />
                                <Switch variant={variant} disabled defaultChecked />
                              </Flex>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Tabs.Content>

                <Tabs.Content value="all-colors">
                  <Box mt="6">
                    <table className={styles.PlaygroundTable}>
                      <thead>
                        <tr>
                          <th />
                          {switchPropDefs.variant.values.map((variant) => (
                            <th key={variant}>{upperFirst(variant)}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {accentColors.map((color) => (
                          <tr key={color}>
                            <td>{upperFirst(color)}</td>
                            {switchPropDefs.variant.values.map((variant) => (
                              <td key={variant}>
                                <Flex align="center" justify="center" gap="4">
                                  <Switch variant={variant} color={color} />
                                  <Switch variant={variant} color={color} defaultChecked />
                                  <Switch
                                    variant={variant}
                                    color={color}
                                    highContrast
                                    defaultChecked
                                  />
                                </Flex>
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Tabs.Content>

                <Tabs.Content value="all-sizes">
                  <Box mt="6">
                    <table className={styles.PlaygroundTable}>
                      <thead>
                        <tr>
                          <th />
                          {switchPropDefs.radius.values.map((radius) => (
                            <th key={radius} style={{ textAlign: 'left' }}>
                              {radius === 'none' ? 'No radius' : upperFirst(radius)}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {switchPropDefs.variant.values.map((variant, index) => (
                          <React.Fragment key={variant}>
                            {index > 0 && (
                              <tr>
                                <td>&nbsp;</td>
                              </tr>
                            )}
                            {switchPropDefs.size.values.map((size) => (
                              <tr key={size}>
                                <td>Size {size}</td>
                                {switchPropDefs.radius.values.map((radius) => (
                                  <td key={radius} style={{ textAlign: 'left' }}>
                                    <Flex align="center" justify="start" gap="4">
                                      <Switch
                                        size={size}
                                        variant={variant}
                                        radius={radius}
                                        defaultChecked
                                      />
                                    </Flex>
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </React.Fragment>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Tabs.Content>
              </Tabs.Root>
            </PlaygroundSection>

            <PlaygroundSection>
              <PlaygroundSectionTitle id="table">Table.</PlaygroundSectionTitle>
              {/* Apply a negative margin bottom to negate the table padding bottom of the examples */}
              <Box style={{ whiteSpace: 'nowrap' }} mb="-6">
                <Flex direction="column" className={styles.PlaygroundHeroContainer} mb="6">
                  <Flex
                    justify="center"
                    position="relative"
                    className={styles.PlaygroundHeroContent}
                  >
                    <Flex
                      align="center"
                      justify="center"
                      position="absolute"
                      inset="0"
                      style={{ overflow: 'hidden' }}
                    >
                      <ThemesPanelBackgroundImage id="1" width="100%" height="200%" />
                    </Flex>

                    <Table.Root variant="surface" size={{ initial: '1', sm: '2' }}>
                      <Table.Header>
                        <Table.Row>
                          <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
                          <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
                          <Table.ColumnHeaderCell>Group</Table.ColumnHeaderCell>
                        </Table.Row>
                      </Table.Header>

                      <Table.Body>
                        <Table.Row>
                          <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
                          <Table.Cell>danilo@example.com</Table.Cell>
                          <Table.Cell>Developer</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                          <Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
                          <Table.Cell>zahra@example.com</Table.Cell>
                          <Table.Cell>Admin</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                          <Table.RowHeaderCell>Jasper Eriksson</Table.RowHeaderCell>
                          <Table.Cell>jasper@example.com</Table.Cell>
                          <Table.Cell>Developer</Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    </Table.Root>
                  </Flex>
                </Flex>

                <table className={styles.PlaygroundTable}>
                  <thead>
                    <tr>
                      <th />
                      {tableRootPropDefs.variant.values.map((variant) => (
                        <th
                          key={variant}
                          style={{
                            paddingRight: 'var(--space-8)',
                            paddingBottom: 'var(--space-5)',
                          }}
                        >
                          {upperFirst(variant)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {tableRootPropDefs.size.values.map((size) => (
                      <tr key={size}>
                        <td>Size {size}</td>
                        {tableRootPropDefs.variant.values.map((variant) => (
                          <td
                            key={variant}
                            style={{
                              paddingRight: 'var(--space-8)',
                              paddingBottom: 'var(--space-8)',
                            }}
                          >
                            <Table.Root variant={variant} size={size}>
                              <Table.Header>
                                <Table.Row>
                                  <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
                                  <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
                                  <Table.ColumnHeaderCell>Group</Table.ColumnHeaderCell>
                                </Table.Row>
                              </Table.Header>

                              <Table.Body>
                                <Table.Row>
                                  <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
                                  <Table.Cell>danilo@example.com</Table.Cell>
                                  <Table.Cell>Developer</Table.Cell>
                                </Table.Row>

                                <Table.Row>
                                  <Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
                                  <Table.Cell>zahra@example.com</Table.Cell>
                                  <Table.Cell>Admin</Table.Cell>
                                </Table.Row>

                                <Table.Row>
                                  <Table.RowHeaderCell>Jasper Eriksson</Table.RowHeaderCell>
                                  <Table.Cell>jasper@example.com</Table.Cell>
                                  <Table.Cell>Developer</Table.Cell>
                                </Table.Row>
                              </Table.Body>
                            </Table.Root>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Box>
            </PlaygroundSection>

            <PlaygroundSection>
              <PlaygroundSectionTitle id="tabs">Tabs.</PlaygroundSectionTitle>

              <Tabs.Root defaultValue="theme-colors">
                <Tabs.List size="2">
                  <Tabs.Trigger value="theme-colors">Theme colors</Tabs.Trigger>
                  <Tabs.Trigger value="all-colors">All colors</Tabs.Trigger>
                  <Tabs.Trigger value="all-sizes">All sizes</Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="theme-colors">
                  <Box mt="6">
                    <Flex gap="6">
                      <Flex align="center" direction="column">
                        <Text color="gray" size="1" mb="2">
                          Accent
                        </Text>
                        <ExampleTabs mb="5" />
                        <ExampleTabs highContrast />
                      </Flex>

                      <Flex align="center" direction="column">
                        <Text color="gray" size="1" mb="2">
                          Gray
                        </Text>
                        <ExampleTabs color="gray" mb="5" />
                        <ExampleTabs color="gray" highContrast />
                      </Flex>
                    </Flex>
                  </Box>
                </Tabs.Content>

                <Tabs.Content value="all-colors">
                  <Box mt="6">
                    <Flex align="start" direction="column" gap="5">
                      {accentColors.map((color) => (
                        <Flex align="center" gap="5" key={color}>
                          <Box width="64px">
                            <Text color="gray" size="1">
                              {upperFirst(color)}
                            </Text>
                          </Box>
                          <ExampleTabs color={color} />
                          <ExampleTabs color={color} highContrast />
                        </Flex>
                      ))}
                    </Flex>
                  </Box>
                </Tabs.Content>

                <Tabs.Content value="all-sizes">
                  <Box mt="6">
                    <Flex align="start" direction="column" gap="5">
                      {tabsListPropDefs.size.values.map((size) => (
                        <Flex align="center" gap="5" key={size}>
                          <Box width="64px">
                            <Text color="gray" size="1">
                              Size {size}
                            </Text>
                          </Box>
                          <ExampleTabs size={size} />
                        </Flex>
                      ))}
                    </Flex>
                  </Box>
                </Tabs.Content>
              </Tabs.Root>
            </PlaygroundSection>

            <PlaygroundSection>
              <PlaygroundSectionTitle id="tab-nav">Tab Nav</PlaygroundSectionTitle>

              <Tabs.Root defaultValue="theme-colors">
                <Tabs.List size="2">
                  <Tabs.Trigger value="theme-colors">Theme colors</Tabs.Trigger>
                  <Tabs.Trigger value="all-colors">All colors</Tabs.Trigger>
                  <Tabs.Trigger value="all-sizes">All sizes</Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="theme-colors">
                  <Box mt="6">
                    <Flex gap="6">
                      <Flex align="center" direction="column">
                        <Text color="gray" size="1" mb="2">
                          Accent
                        </Text>
                        <TabNavDemo mb="5" />
                        <TabNavDemo highContrast />
                      </Flex>

                      <Flex align="center" direction="column">
                        <Text color="gray" size="1" mb="2">
                          Gray
                        </Text>
                        <TabNavDemo color="gray" mb="5" />
                        <TabNavDemo color="gray" highContrast />
                      </Flex>
                    </Flex>
                  </Box>
                </Tabs.Content>

                <Tabs.Content value="all-colors">
                  <Box mt="6">
                    <Flex align="start" direction="column" gap="5">
                      {accentColors.map((color) => (
                        <Flex align="center" gap="5" key={color}>
                          <Box width="64px">
                            <Text color="gray" size="1">
                              {upperFirst(color)}
                            </Text>
                          </Box>
                          <TabNavDemo color={color} />
                          <TabNavDemo color={color} highContrast />
                        </Flex>
                      ))}
                    </Flex>
                  </Box>
                </Tabs.Content>

                <Tabs.Content value="all-sizes">
                  <Box mt="6">
                    <Flex align="start" direction="column" gap="5">
                      {tabNavPropDefs.size.values.map((size) => (
                        <Flex align="center" gap="5" key={size}>
                          <Box width="64px">
                            <Text color="gray" size="1">
                              Size {size}
                            </Text>
                          </Box>
                          <TabNavDemo size={size} />
                        </Flex>
                      ))}
                    </Flex>
                  </Box>
                </Tabs.Content>
              </Tabs.Root>
            </PlaygroundSection>

            <PlaygroundSection>
              <PlaygroundSectionTitle id="text">Text</PlaygroundSectionTitle>
              <Tabs.Root defaultValue="specimen">
                <Tabs.List size="2">
                  <Tabs.Trigger value="specimen">Specimen</Tabs.Trigger>
                  <Tabs.Trigger value="all-colors">All colors</Tabs.Trigger>
                  <Tabs.Trigger value="all-sizes">All sizes</Tabs.Trigger>
                  <Tabs.Trigger value="all-weights">All weights</Tabs.Trigger>
                </Tabs.List>

                <Tabs.Content value="specimen">
                  <Box mt="6" style={{ width: 'calc(760px * var(--scaling))' }}>
                    <Text as="p" size="5">
                      The goal of typography is to relate font size, line height, and line width in
                      a proportional way that maximizes beauty and makes reading easier and more
                      pleasant. The question is: What proportion(s) will give us the best results?
                      The golden ratio is often observed in nature where beauty and utility
                      intersect; perhaps we can use this “divine” proportion to enhance these
                      attributes in our typography.
                    </Text>
                  </Box>

                  <Box mt="6" style={{ width: 'calc(700px * var(--scaling))' }}>
                    <Text as="p" size="4">
                      The goal of typography is to relate font size, line height, and line width in
                      a proportional way that maximizes beauty and makes reading easier and more
                      pleasant. The question is: What proportion(s) will give us the best results?
                      The golden ratio is often observed in nature where beauty and utility
                      intersect; perhaps we can use this “divine” proportion to enhance these
                      attributes in our typography.
                    </Text>
                  </Box>

                  <Box mt="6" style={{ width: 'calc(640px * var(--scaling))' }}>
                    <Text as="p" size="3">
                      The goal of typography is to relate font size, line height, and line width in
                      a proportional way that maximizes beauty and makes reading easier and more
                      pleasant. The question is: What proportion(s) will give us the best results?
                      The golden ratio is often observed in nature where beauty and utility
                      intersect; perhaps we can use this “divine” proportion to enhance these
                      attributes in our typography.
                    </Text>
                  </Box>

                  <Box mt="6" style={{ width: 'calc(572px * var(--scaling))' }}>
                    <Text as="p" size="2">
                      The goal of typography is to relate font size, line height, and line width in
                      a proportional way that maximizes beauty and makes reading easier and more
                      pleasant. The question is: What proportion(s) will give us the best results?
                      The golden ratio is often observed in nature where beauty and utility
                      intersect; perhaps we can use this “divine” proportion to enhance these
                      attributes in our typography.
                    </Text>
                  </Box>

                  <Grid
                    mt="7"
                    gap="6"
                    columns="2"
                    align="center"
                    style={{ width: 'calc(540px * var(--scaling))' }}
                  >
                    <Box>
                      <Text size="3" as="div" weight="bold">
                        Quick Look
                      </Text>
                      <Text size="2" as="div">
                        Extensions from the installed software may add new features to this app.
                      </Text>
                    </Box>

                    <Box>
                      <Text size="2" as="div" weight="bold">
                        Quick Look
                      </Text>
                      <Text size="2" as="div">
                        Extensions from the installed software may add new features to this app.
                      </Text>
                    </Box>

                    <Box style={{ width: '90%' }}>
                      <Text size="2" as="div" weight="bold">
                        Quick Look
                      </Text>
                      <Text size="1" as="div">
                        Extensions from the installed software may add new features to this app.
                      </Text>
                    </Box>

                    <Box style={{ width: '90%' }}>
                      <Text size="1" as="div" weight="bold">
                        Quick Look
                      </Text>
                      <Text size="1" as="div">
                        Extensions from the installed software may add new features to this app.
                      </Text>
                    </Box>
                  </Grid>

                  <Grid
                    mt="7"
                    gap="6"
                    columns="2"
                    align="center"
                    style={{ width: 'calc(540px * var(--scaling))' }}
                  >
                    <Box>
                      <Text size="3" as="div" weight="medium">
                        Quick Look
                      </Text>
                      <Text size="2" as="div" color="gray">
                        Extensions from the installed software may add new features to this app.
                      </Text>
                    </Box>

                    <Box>
                      <Text size="2" as="div" weight="medium">
                        Quick Look
                      </Text>
                      <Text size="2" as="div" color="gray">
                        Extensions from the installed software may add new features to this app.
                      </Text>
                    </Box>

                    <Box style={{ width: '90%' }}>
                      <Text size="2" as="div" weight="medium">
                        Quick Look
                      </Text>
                      <Text size="1" as="div" color="gray">
                        Extensions from the installed software may add new features to this app.
                      </Text>
                    </Box>

                    <Box style={{ width: '90%' }}>
                      <Text size="1" as="div" weight="medium">
                        Quick Look
                      </Text>
                      <Text size="1" as="div" color="gray">
                        Extensions from the installed software may add new features to this app.
                      </Text>
                    </Box>
                  </Grid>

                  <Grid
                    mt="7"
                    gap="6"
                    columns="repeat(4, auto)"
                    align="center"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    <Flex direction="column" align="center" gap="1">
                      <Button variant="surface" color="gray" highContrast size="1">
                        Quick Look
                      </Button>
                      <Text size="1" color="gray">
                        Opens in a new window
                      </Text>
                    </Flex>

                    <Flex direction="column" align="center" gap="1">
                      <Button variant="surface" color="gray" highContrast size="2">
                        Quick Look
                      </Button>
                      <Text size="1" color="gray">
                        Opens in a new window
                      </Text>
                    </Flex>

                    <Flex direction="column" align="center" gap="1">
                      <Button variant="surface" color="gray" highContrast size="2">
                        Quick Look
                      </Button>
                      <Text size="2" color="gray">
                        Opens in a new window
                      </Text>
                    </Flex>

                    <Flex direction="column" align="center" gap="1">
                      <Button variant="surface" color="gray" highContrast size="3">
                        Quick Look
                      </Button>
                      <Text size="2" color="gray">
                        Opens in a new window
                      </Text>
                    </Flex>
                  </Grid>
                </Tabs.Content>

                <Tabs.Content value="all-colors">
                  <Box mt="6">
                    <table className={styles.PlaygroundTable} style={{ whiteSpace: 'nowrap' }}>
                      <tbody>
                        {accentColors.map((color) => (
                          <tr key={color} style={{ verticalAlign: 'baseline' }}>
                            <td>{upperFirst(color)}</td>
                            <td>
                              <Text mr="4" color={color}>
                                The quick brown fox jumps over the lazy dog
                              </Text>
                              <Text color={color} highContrast>
                                The quick brown fox jumps over the lazy dog
                              </Text>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Tabs.Content>

                <Tabs.Content value="all-sizes">
                  <Box mt="6">
                    <Flex direction="column" gap="4" style={{ whiteSpace: 'nowrap' }}>
                      {textPropDefs.size.values.map((size) => (
                        <Flex align="center" key={size}>
                          <Box flexShrink="0" style={{ width: 80 }}>
                            <Text color="gray" size="1">
                              Size {size}
                            </Text>
                          </Box>
                          <Text size={size}>The quick brown fox jumped over the lazy dog</Text>
                        </Flex>
                      ))}
                    </Flex>
                  </Box>
                </Tabs.Content>

                <Tabs.Content value="all-weights">
                  <Box mt="6">
                    <table className={styles.PlaygroundTable} style={{ whiteSpace: 'nowrap' }}>
                      <tbody>
                        {textPropDefs.weight.values.map((weight) => (
                          <tr key={weight} style={{ verticalAlign: 'baseline' }}>
                            <td>{upperFirst(weight)}</td>
                            <td style={{ textAlign: 'left' }}>
                              <Text weight={weight}>
                                The quick brown fox jumps over the lazy dog
                              </Text>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Tabs.Content>
              </Tabs.Root>
            </PlaygroundSection>

            <PlaygroundSection>
              <PlaygroundSectionTitle id="text-area">Text Area</PlaygroundSectionTitle>
              <Tabs.Root defaultValue="theme-colors">
                <Tabs.List size="2">
                  <Tabs.Trigger value="theme-colors">Theme colors</Tabs.Trigger>
                  <Tabs.Trigger value="all-colors">All colors</Tabs.Trigger>
                  <Tabs.Trigger value="all-sizes">All sizes</Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="theme-colors">
                  <Box mt="6">
                    <table className={styles.PlaygroundTable}>
                      <thead>
                        <tr>
                          <th />
                          <th>Accent</th>
                          <th>Gray</th>
                          <th>Disabled</th>
                          <th>Read-only</th>
                        </tr>
                      </thead>
                      <tbody>
                        {textAreaPropDefs.variant.values.map((variant) => (
                          <tr key={variant} style={{ verticalAlign: 'baseline' }}>
                            <td>{upperFirst(variant)}</td>
                            <td>
                              <TextArea variant={variant} placeholder="Reply to comment" />
                            </td>
                            <td>
                              <TextArea
                                variant={variant}
                                color="gray"
                                placeholder="Reply to comment"
                              />
                            </td>
                            <td>
                              <TextArea
                                variant={variant}
                                placeholder="Reply to comment"
                                defaultValue="The :autofill CSS pseudo-class matches when an <input> element has its value autofilled by the browser."
                                disabled
                              />
                            </td>
                            <td>
                              <TextArea
                                variant={variant}
                                placeholder="Reply to comment"
                                defaultValue="The :autofill CSS pseudo-class matches when an <input> element has its value autofilled by the browser."
                                readOnly
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Tabs.Content>

                <Tabs.Content value="all-colors">
                  <Box mt="6">
                    <table className={styles.PlaygroundTable}>
                      <thead>
                        <tr>
                          <th />
                          {textAreaPropDefs.variant.values.map((variant) => (
                            <th key={variant}>{upperFirst(variant)}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {accentColors.map((color) => (
                          <tr key={color} style={{ verticalAlign: 'baseline' }}>
                            <td>{upperFirst(color)}</td>
                            {textAreaPropDefs.variant.values.map((variant) => (
                              <td key={variant}>
                                <TextArea
                                  color={color}
                                  variant={variant}
                                  placeholder="Reply to comment"
                                />
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Tabs.Content>

                <Tabs.Content value="all-sizes">
                  <Box mt="6">
                    <table className={styles.PlaygroundTable}>
                      <thead>
                        <tr>
                          <th />
                          {textAreaPropDefs.variant.values.map((variant) => (
                            <th key={variant} style={{ textAlign: 'left' }}>
                              {upperFirst(variant)}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {textAreaPropDefs.size.values.map((size) => (
                          <tr key={size} style={{ verticalAlign: 'baseline' }}>
                            <td>Size {size}</td>
                            {textAreaPropDefs.variant.values.map((variant) => (
                              <td key={variant}>
                                <TextArea
                                  size={size}
                                  variant={variant}
                                  placeholder="Reply to comment"
                                  style={{ width: 120 + Number(size) * 20 }}
                                />
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Tabs.Content>
              </Tabs.Root>
            </PlaygroundSection>

            <PlaygroundSection>
              <PlaygroundSectionTitle id="text-field">Text Field</PlaygroundSectionTitle>
              <Tabs.Root defaultValue="theme-colors">
                <Tabs.List size="2">
                  <Tabs.Trigger value="theme-colors">Theme colors</Tabs.Trigger>
                  <Tabs.Trigger value="all-colors">All colors</Tabs.Trigger>
                  <Tabs.Trigger value="all-sizes">All sizes</Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="theme-colors">
                  <Box mt="6">
                    <table className={styles.PlaygroundTable}>
                      <thead>
                        <tr>
                          <th />
                          <th>Accent</th>
                          <th>Gray</th>
                          <th>Disabled</th>
                          <th>Read-only</th>
                        </tr>
                      </thead>
                      <tbody>
                        {textFieldRootPropDefs.variant.values.map((variant) => (
                          <tr key={variant}>
                            <td>{upperFirst(variant)}</td>
                            <td>
                              <TextField.Root variant={variant} placeholder="Search">
                                <TextField.Slot>
                                  <MagnifyingGlassIcon width="16" height="16" />
                                </TextField.Slot>
                                <TextField.Slot>
                                  <IconButton variant="ghost" color="gray" size="1">
                                    <InfoCircledIcon />
                                  </IconButton>
                                </TextField.Slot>
                              </TextField.Root>
                            </td>
                            <td>
                              <TextField.Root variant={variant} color="gray" placeholder="Search">
                                <TextField.Slot>
                                  <MagnifyingGlassIcon width="16" height="16" />
                                </TextField.Slot>
                                <TextField.Slot>
                                  <IconButton variant="ghost" color="gray" size="1">
                                    <InfoCircledIcon />
                                  </IconButton>
                                </TextField.Slot>
                              </TextField.Root>
                            </td>
                            <td>
                              <TextField.Root
                                variant={variant}
                                placeholder="Search"
                                defaultValue="Quick brown fox"
                                disabled
                              >
                                <TextField.Slot>
                                  <MagnifyingGlassIcon width="16" height="16" />
                                </TextField.Slot>
                                <TextField.Slot>
                                  <IconButton variant="ghost" color="gray" size="1" disabled>
                                    <InfoCircledIcon />
                                  </IconButton>
                                </TextField.Slot>
                              </TextField.Root>
                            </td>
                            <td>
                              <TextField.Root
                                variant={variant}
                                placeholder="Search"
                                defaultValue="Quick brown fox"
                                readOnly
                              >
                                <TextField.Slot>
                                  <MagnifyingGlassIcon width="16" height="16" />
                                </TextField.Slot>
                                <TextField.Slot>
                                  <IconButton variant="ghost" color="gray" size="1">
                                    <InfoCircledIcon />
                                  </IconButton>
                                </TextField.Slot>
                              </TextField.Root>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Tabs.Content>

                <Tabs.Content value="all-colors">
                  <Box mt="6">
                    <table className={styles.PlaygroundTable}>
                      <thead>
                        <tr>
                          <th />
                          {textFieldRootPropDefs.variant.values.map((variant) => (
                            <th key={variant}>{upperFirst(variant)}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {accentColors.map((color) => (
                          <tr key={color}>
                            <td>{upperFirst(color)}</td>
                            {textFieldRootPropDefs.variant.values.map((variant) => (
                              <td key={variant}>
                                <TextField.Root
                                  color={color}
                                  variant={variant}
                                  placeholder="Search"
                                >
                                  <TextField.Slot>
                                    <MagnifyingGlassIcon width="16" height="16" />
                                  </TextField.Slot>
                                  <TextField.Slot>
                                    <IconButton variant="ghost" color="gray" size="1">
                                      <InfoCircledIcon />
                                    </IconButton>
                                  </TextField.Slot>
                                </TextField.Root>
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Tabs.Content>

                <Tabs.Content value="all-sizes">
                  <Box mt="6">
                    <table className={styles.PlaygroundTable}>
                      <thead>
                        <tr>
                          <th />
                          {textFieldRootPropDefs.radius.values.map((radius) => (
                            <th key={radius} style={{ textAlign: 'left' }}>
                              {radius === 'none' ? 'No radius' : upperFirst(radius)}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {textFieldRootPropDefs.variant.values.map((variant, index) => (
                          <React.Fragment key={variant}>
                            {index > 0 && (
                              <tr>
                                <td>&nbsp;</td>
                              </tr>
                            )}
                            <tr>
                              <td>Size 1</td>
                              {textFieldRootPropDefs.radius.values.map((radius) => (
                                <td key={radius}>
                                  <TextField.Root
                                    size="1"
                                    variant={variant}
                                    radius={radius}
                                    style={{ width: 140 }}
                                    placeholder="Search"
                                  >
                                    <TextField.Slot>
                                      <MagnifyingGlassIcon width="14" height="14" />
                                    </TextField.Slot>
                                  </TextField.Root>
                                </td>
                              ))}
                            </tr>
                            <tr>
                              <td>Size 2</td>
                              {textFieldRootPropDefs.radius.values.map((radius) => (
                                <td key={radius}>
                                  <TextField.Root
                                    size="2"
                                    variant={variant}
                                    radius={radius}
                                    style={{ width: 160 }}
                                    placeholder="Search"
                                  >
                                    <TextField.Slot>
                                      <MagnifyingGlassIcon width="16" height="16" />
                                    </TextField.Slot>
                                    <TextField.Slot>
                                      <IconButton variant="ghost" color="gray" size="1">
                                        <InfoCircledIcon />
                                      </IconButton>
                                    </TextField.Slot>
                                  </TextField.Root>
                                </td>
                              ))}
                            </tr>
                            <tr>
                              <td>Size 3</td>
                              {textFieldRootPropDefs.radius.values.map((radius) => (
                                <td key={radius}>
                                  <TextField.Root
                                    size="3"
                                    variant={variant}
                                    radius={radius}
                                    placeholder="Search"
                                  >
                                    <TextField.Slot>
                                      <MagnifyingGlassIcon width="18" height="18" />
                                    </TextField.Slot>
                                    <TextField.Slot>
                                      <IconButton variant="ghost" color="gray" size="2">
                                        <InfoCircledIcon />
                                      </IconButton>
                                    </TextField.Slot>
                                  </TextField.Root>
                                </td>
                              ))}
                            </tr>
                          </React.Fragment>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Tabs.Content>
              </Tabs.Root>
            </PlaygroundSection>

            <PlaygroundSection>
              <PlaygroundSectionTitle id="tooltip">Tooltip</PlaygroundSectionTitle>
              <Flex mt="6">
                <Tooltip content="The quick brown fox">
                  <Flex
                    p="4"
                    tabIndex={0}
                    align="center"
                    style={{
                      outline: 0,
                      borderRadius: 'var(--radius-3)',
                      border: `1px dashed var(--accent-7)`,
                      cursor: 'default',
                      color: 'var(--accent-12)',
                      backgroundColor: 'var(--accent-a2)',
                    }}
                  >
                    <Text size="2" trim="both">
                      Hover here
                    </Text>
                  </Flex>
                </Tooltip>
              </Flex>
            </PlaygroundSection>
          </Flex>
        </Section>
      </div>
    </MobileMenuProvider>
  );
}

function ExampleDropdownMenuContent() {
  return (
    <>
      <DropdownMenu.Item shortcut="⌘ E">Edit</DropdownMenu.Item>
      <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
      <DropdownMenu.Separator />
      <DropdownMenu.Item shortcut="⌘ N">Archive</DropdownMenu.Item>

      <DropdownMenu.Sub>
        <DropdownMenu.SubTrigger>More</DropdownMenu.SubTrigger>
        <DropdownMenu.SubContent>
          <DropdownMenu.Item>Move to project…</DropdownMenu.Item>
          <DropdownMenu.Item>Move to folder…</DropdownMenu.Item>

          <DropdownMenu.Separator />
          <DropdownMenu.Item>Advanced options…</DropdownMenu.Item>
        </DropdownMenu.SubContent>
      </DropdownMenu.Sub>

      <DropdownMenu.Separator />
      <DropdownMenu.Item>Share</DropdownMenu.Item>
      <DropdownMenu.Item>Add to favorites</DropdownMenu.Item>
      <DropdownMenu.Separator />
      <DropdownMenu.Item shortcut="⌘ ⌫" color="red">
        Delete
      </DropdownMenu.Item>
    </>
  );
}

function RightClickArea(props: {
  size?: typeof contextMenuContentPropDefs.size.values[number];
  variant?: typeof contextMenuContentPropDefs.variant.values[number];
  color?: typeof contextMenuContentPropDefs.color.values[number];
  highContrast?: boolean;
}) {
  const {
    size = contextMenuContentPropDefs.size.default,
    variant = contextMenuContentPropDefs.variant.default,
    color = 'accent',
    highContrast = contextMenuContentPropDefs.highContrast.default,
    ...rest
  } = props;
  return (
    <Grid
      {...rest}
      data-accent-color={color}
      height={size === '2' ? '48px' : '32px'}
      px="3"
      style={{
        placeItems: 'center',
        borderRadius: 'var(--radius-3)',
        border: `1px dashed var(--accent-7)`,
        cursor: 'default',
        whiteSpace: 'nowrap',
        backgroundColor: variant === 'soft' ? 'var(--accent-a2)' : undefined,
      }}
    >
      {/* @ts-ignore */}
      <Text size={size} color={color} highContrast={highContrast}>
        Right-click here
      </Text>
    </Grid>
  );
}

function ExampleContextMenuContent() {
  return (
    <>
      <ContextMenu.Item shortcut="⌘ E">Edit</ContextMenu.Item>
      <ContextMenu.Item shortcut="⌘ D">Duplicate</ContextMenu.Item>
      <ContextMenu.Separator />
      <ContextMenu.Item shortcut="⌘ N">Archive</ContextMenu.Item>

      <ContextMenu.Sub>
        <ContextMenu.SubTrigger>More</ContextMenu.SubTrigger>
        <ContextMenu.SubContent>
          <ContextMenu.Item>Move to project…</ContextMenu.Item>
          <ContextMenu.Item>Move to folder…</ContextMenu.Item>

          <ContextMenu.Separator />
          <ContextMenu.Item>Advanced options…</ContextMenu.Item>
        </ContextMenu.SubContent>
      </ContextMenu.Sub>

      <ContextMenu.Separator />
      <ContextMenu.Item>Share</ContextMenu.Item>
      <ContextMenu.Item>Add to favorites</ContextMenu.Item>
      <ContextMenu.Separator />
      <ContextMenu.Item shortcut="⌘ ⌫" color="red">
        Delete
      </ContextMenu.Item>
    </>
  );
}

function ExampleCheckboxCardGroup(
  props: React.ComponentPropsWithoutRef<typeof CheckboxCardGroup.Root>
) {
  return (
    <CheckboxCardGroup.Root columns="2" defaultValue={['1']} {...props}>
      <CheckboxCardGroup.Item value="1">Next.js</CheckboxCardGroup.Item>
      <CheckboxCardGroup.Item value="2">Remix</CheckboxCardGroup.Item>
    </CheckboxCardGroup.Root>
  );
}

function ExampleRadioCardGroup(props: React.ComponentPropsWithoutRef<typeof RadioCardGroup.Root>) {
  return (
    <RadioCardGroup.Root columns="2" defaultValue="1" {...props}>
      <RadioCardGroup.Item value="1">
        <VercelLogoIcon />
        Next.js
      </RadioCardGroup.Item>
      <RadioCardGroup.Item value="2">
        <CubeIcon />
        Remix
      </RadioCardGroup.Item>
    </RadioCardGroup.Root>
  );
}

function ExampleSelectContent() {
  return (
    <>
      <Select.Group>
        <Select.Label>Fruits</Select.Label>
        <Select.Item value="orange">Orange</Select.Item>
        <Select.Item value="apple">Apple</Select.Item>
        <Select.Item value="grapes" disabled>
          Grape
        </Select.Item>
      </Select.Group>

      <Select.Separator />

      <Select.Group>
        <Select.Label>Vegetables</Select.Label>
        <Select.Item value="carrot">Carrot</Select.Item>
        <Select.Item value="potato">Potato</Select.Item>
      </Select.Group>
    </>
  );
}

function ExampleTabs(props: React.ComponentPropsWithoutRef<typeof Tabs.List>) {
  return (
    <Tabs.Root defaultValue="account" activationMode="manual">
      <Tabs.List {...props}>
        <Tabs.Trigger value="account">Account</Tabs.Trigger>
        <Tabs.Trigger value="documents">Documents</Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
  );
}

const aspectRatioImage = (
  <img
    src="https://images.unsplash.com/photo-1479030160180-b1860951d696?&auto=format&fit=crop&w=1200&q=80"
    alt="A photo of a blue sky opening up from within a red canyon."
    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
  />
);

function buttonSizeToIconSize(buttonSize: typeof buttonPropDefs.size.values[number]) {
  if (buttonSize === '1' || buttonSize === '2') return { width: 16, height: 16 };
  if (buttonSize === '3') return { width: 18, height: 18 };
  if (buttonSize === '4') return { width: 20, height: 20 };
}

function calloutSizeToIconSize(calloutSize: typeof calloutRootPropDefs.size.values[number]) {
  if (calloutSize === '1' || calloutSize === '2') return { width: 16, height: 16 };
  if (calloutSize === '3') return { width: 20, height: 20 };
}

const InsetImage = (props: React.ComponentPropsWithoutRef<'img'>) => (
  <img
    src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    alt="Bold typography"
    {...props}
    style={{
      display: 'block',
      objectFit: 'cover',
      height: '100%',
      width: 150,
      backgroundColor: 'var(--gray-5)',
      ...props.style,
    }}
  />
);

function selectTriggerVariantToSelectContentVariant(
  triggerVariant: typeof selectTriggerPropDefs.variant.values[number]
) {
  if (triggerVariant === 'soft' || triggerVariant === 'ghost') return 'soft';
  return 'solid';
}

function upperFirst(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const ChatBubbleIcon = (props: React.ComponentPropsWithoutRef<'svg'>) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.5 3L2.5 3.00002C1.67157 3.00002 1 3.6716 1 4.50002V9.50003C1 10.3285 1.67157 11 2.5 11H7.50003C7.63264 11 7.75982 11.0527 7.85358 11.1465L10 13.2929V11.5C10 11.2239 10.2239 11 10.5 11H12.5C13.3284 11 14 10.3285 14 9.50003V4.5C14 3.67157 13.3284 3 12.5 3ZM2.49999 2.00002L12.5 2C13.8807 2 15 3.11929 15 4.5V9.50003C15 10.8807 13.8807 12 12.5 12H11V14.5C11 14.7022 10.8782 14.8845 10.6913 14.9619C10.5045 15.0393 10.2894 14.9965 10.1464 14.8536L7.29292 12H2.5C1.11929 12 0 10.8807 0 9.50003V4.50002C0 3.11931 1.11928 2.00003 2.49999 2.00002Z"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
    ></path>
  </svg>
);

const PlaygroundSection = ({ children }: { children: React.ReactNode }) => (
  <Flex
    className={styles.PlaygroundSection}
    direction="column"
    gap="5"
    mb={{ initial: '5', sm: '8' }}
  >
    {children}
  </Flex>
);

interface PlaygroundSectionTitleProps {
  children: React.ReactNode;
  id: string;
}

const PlaygroundSectionTitle = ({ children, id }: PlaygroundSectionTitleProps) => (
  <Flex align="baseline" gap="4" mt="2">
    <Heading id={id}>
      <Link color="gray" underline="hover" highContrast href={`#${id}`}>
        {children}
      </Link>
    </Heading>
    <NextLink passHref legacyBehavior href={`/themes/docs/components/${id}`}>
      <Link className={styles.PlaygroundDocsLink} size="2">
        View in docs
      </Link>
    </NextLink>
  </Flex>
);
