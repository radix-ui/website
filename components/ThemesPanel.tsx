'use client';

import * as React from 'react';
import { gray as radixColorsGray, grayDark as radixColorsGrayDark } from '@radix-ui/colors';
import {
  Box,
  Button,
  Checkbox,
  Code,
  Em,
  Flex,
  Grid,
  IconButton,
  Kbd,
  Popover,
  RadioGroup,
  ScrollArea,
  Select,
  Separator,
  Slider,
  Strong,
  Text,
  Tooltip,
  // helpers
  themePropDefs,
  themeAccentScalesGrouped,
  themeGrayScalesGrouped,
  getMatchingGrayScale,
  useThemeContext,
} from '@radix-ui/themes';
import { InfoCircledIcon } from '@radix-ui/react-icons';
import { RemoveScroll } from 'react-remove-scroll';
import { useTheme } from 'next-themes';

import type { ThemeOptions } from '@radix-ui/themes';

const ThemesPanelContext = React.createContext({
  open: false,
  onOpenChange: (open: boolean) => {},
});

const ThemesPanelProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = React.useState(true);
  return (
    <ThemesPanelContext.Provider value={{ open, onOpenChange: setOpen }}>
      {children}
    </ThemesPanelContext.Provider>
  );
};

type ThemesPanelElement = React.ElementRef<typeof Box>;
interface ThemesPanelProps extends React.ComponentPropsWithoutRef<typeof Box> {}
const ThemesPanel = React.forwardRef<ThemesPanelElement, ThemesPanelProps>(
  (props, forwardedRef) => {
    const { open, onOpenChange } = React.useContext(ThemesPanelContext);
    const { setTheme } = useTheme();

    console.log(open);

    const themeContext = useThemeContext();

    const {
      appearance,
      onAppearanceChange,
      accentScale,
      onAccentScaleChange,
      grayScale,
      onGrayScaleChange,
      backgroundColor,
      onBackgroundColorChange,
      textColor,
      onTextColorChange,
      radius,
      onRadiusChange,
      scaling,
      onScalingChange,
    } = themeContext;

    const pureGray9 = appearance === 'dark' ? radixColorsGrayDark.gray9 : radixColorsGray.gray9;
    const autoMatchedGray = getMatchingGrayScale(accentScale);
    const resolvedGrayScale = grayScale === 'auto' ? autoMatchedGray : grayScale;

    const [copyState, setCopyState] = React.useState<'idle' | 'copying' | 'copied'>('idle');
    async function handleCopyThemeConfig() {
      const theme: Partial<ThemeOptions> = {
        appearance: appearance === themePropDefs.appearance.default ? undefined : appearance,
        accentScale: accentScale === themePropDefs.accentScale.default ? undefined : accentScale,
        grayScale: grayScale === themePropDefs.grayScale.default ? undefined : grayScale,
        backgroundColor:
          backgroundColor === themePropDefs.backgroundColor.default ? undefined : backgroundColor,
        textColor: textColor === themePropDefs.textColor.default ? undefined : textColor,
        radius: radius === themePropDefs.radius.default ? undefined : radius,
        scaling: scaling === themePropDefs.scaling.default ? undefined : scaling,
      };
      const props = Object.keys(theme)
        .filter((key) => theme[key as keyof ThemeOptions] !== undefined)
        .map((key) => `${key}="${theme[key as keyof ThemeOptions]}"`)
        .join(' ');
      setCopyState('copying');
      await navigator.clipboard.writeText(props);
      setCopyState('copied');
      setTimeout(() => setCopyState('idle'), 2000);
    }

    // quickly show/hide using ⌘C
    React.useEffect(() => {
      function handleKeydown(event: KeyboardEvent) {
        const isCmdC =
          event.metaKey && event.key === 'c' && !event.shiftKey && !event.altKey && !event.ctrlKey;
        if (isCmdC && window.getSelection()?.toString() === '') {
          onOpenChange(!open);
        }
      }
      document.addEventListener('keydown', handleKeydown);
      return () => document.removeEventListener('keydown', handleKeydown);
    }, [onOpenChange, open]);

    // quickly toggle appearance using cmd+d
    const handleAppearanceChange = React.useCallback((appearance: ThemeOptions['appearance']) => {
      const theme = appearance === 'dark' ? 'dark' : 'light';
      setTheme(theme);
      onAppearanceChange(appearance);
    }, []);
    React.useEffect(() => {
      function handleKeydown(event: KeyboardEvent) {
        if (event.metaKey && event.key === 'd') {
          event.preventDefault();
          handleAppearanceChange(appearance === 'dark' ? 'light' : 'dark');
        }
      }
      document.addEventListener('keydown', handleKeydown);
      return () => document.removeEventListener('keydown', handleKeydown);
    }, [appearance, handleAppearanceChange]);

    return (
      <Flex
        // Components that hide the scrollbar (like Dialog) add padding to
        // account for the scrollbar gap to avoid layout jank. This does not
        // work for position: fixed elements. Since we use react-remove-scroll
        // under the hood for those primitives, we can add this helper class
        // provided by that lib to deal with that for the QuickNav.
        // https://github.com/radix-ui/website/issues/64
        // https://github.com/theKashey/react-remove-scroll#positionfixed-elements
        className={RemoveScroll.classNames.zeroRight}
        position="fixed"
        mt="9"
        top="0"
        bottom="0"
        right="0"
        direction="column"
        // @ts-ignore
        inert={open ? undefined : ''}
        {...props}
        ref={forwardedRef}
        style={{
          zIndex: 1,
          overflow: 'hidden',
          height: 'calc(100vh - var(--space-9))',
          backgroundColor: 'var(--color-panel-solid)',
          boxShadow: 'inset 1px 0 0 0 var(--gray-6)',
          transformOrigin: 'top right',
          transitionProperty: 'opacity, transform',
          transitionDuration: open ? '350ms, 800ms' : '200ms, 350ms',
          transitionTimingFunction: open ? 'linear, cubic-bezier(0.16, 1, 0.3, 1)' : 'ease-out',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          // opacity: open ? 1 : 0,
          ...props.style,
        }}
      >
        <ScrollArea>
          <Box grow="1" p="5">
            <Text as="p" size="2" weight="bold" mb="3">
              Color
            </Text>

            <Flex direction="column" gap="1" mb="3">
              <Label htmlFor="accent-scale">Accent scale</Label>
              <Select.Root value={accentScale} onValueChange={onAccentScaleChange}>
                <Select.Trigger id="accent-scale" variant="surface" color="gray" highContrast />
                <Select.Content variant="soft" color="gray">
                  {themeAccentScalesGrouped.map(({ label, values }, index) => (
                    <React.Fragment key={label}>
                      {index > 0 ? <Select.Separator /> : null}
                      <Select.Group>
                        {label ? <Select.Label>{label}</Select.Label> : null}
                        {values.map((color) => (
                          <Select.Item key={color} value={color}>
                            <Flex align="center" gap="2">
                              <span
                                data-accent-scale={color}
                                style={{
                                  display: 'inline-block',
                                  width: 'var(--space-2)',
                                  height: 'var(--space-2)',
                                  borderRadius: '100%',
                                  backgroundColor: 'var(--accent-9)',
                                }}
                              />
                              <Flex align="baseline" gap="1">
                                {color}
                                {color === 'gray' && !['auto', 'gray'].includes(grayScale) ? (
                                  <Text size="2" color="gray">
                                    <Em> ({grayScale})</Em>
                                  </Text>
                                ) : null}
                              </Flex>
                            </Flex>
                          </Select.Item>
                        ))}
                      </Select.Group>
                    </React.Fragment>
                  ))}
                </Select.Content>
              </Select.Root>
            </Flex>

            <Flex direction="column" gap="1" mb="3">
              <Label htmlFor="gray-scale">Gray scale</Label>
              <Select.Root value={grayScale} onValueChange={onGrayScaleChange}>
                <Select.Trigger id="gray-scale" variant="surface" color="gray" highContrast />
                <Select.Content variant="soft" color="gray">
                  {themeGrayScalesGrouped.map(({ label, values }, index) => (
                    <React.Fragment key={label}>
                      {index > 0 ? <Select.Separator /> : null}
                      <Select.Group>
                        <Select.Label>{label}</Select.Label>
                        {values.map((gray) => (
                          <Select.Item key={gray} value={gray}>
                            <Flex align="center" gap="2">
                              <span
                                style={{
                                  display: 'inline-block',
                                  width: 'var(--space-2)',
                                  height: 'var(--space-2)',
                                  borderRadius: '100%',
                                  backgroundColor:
                                    gray === 'auto'
                                      ? `var(--${autoMatchedGray}-9)`
                                      : gray === 'gray'
                                      ? pureGray9
                                      : `var(--${gray}-9)`,
                                }}
                              />
                              <Flex align="baseline" gap="1">
                                {gray}
                                {gray === 'auto' ? (
                                  <Text size="2" color="gray">
                                    <Em> ({autoMatchedGray})</Em>
                                  </Text>
                                ) : null}
                              </Flex>
                            </Flex>
                          </Select.Item>
                        ))}
                      </Select.Group>
                    </React.Fragment>
                  ))}
                </Select.Content>
              </Select.Root>
            </Flex>

            <Grid columns="2" gap="5" mb="3" align="center">
              <Flex direction="column" gap="1">
                <Flex asChild gap="1" align="center">
                  <Label>
                    Background
                    <Popover.Root>
                      <Popover.Trigger>
                        <IconButton
                          size="1"
                          variant="ghost"
                          aria-label="More information about background color options"
                          ml="1"
                        >
                          <InfoCircledIcon style={{ display: 'block', opacity: 0.8 }} />
                        </IconButton>
                      </Popover.Trigger>
                      <Popover.Content side="left" align="center" style={{ width: 340 }}>
                        <Text as="p" size="2" color="gray" mb="3">
                          Background color
                        </Text>
                        <DescriptionList.Root>
                          <DescriptionList.Term>
                            <Code size="3">&quot;auto&quot;</Code>
                          </DescriptionList.Term>
                          <DescriptionList.Details>
                            Chosing this option will set the background to <Strong>White</Strong>{' '}
                            when appearance is <Code>light</Code> and <Strong>Gray 1</Strong>
                            <Text size="2" color="gray">
                              <Em> ({resolvedGrayScale} 1)</Em>
                            </Text>{' '}
                            when appearance is <Code>dark</Code>.
                          </DescriptionList.Details>
                          <DescriptionList.Term>
                            <Code size="3">&quot;gray&quot;</Code>
                          </DescriptionList.Term>
                          <DescriptionList.Details mb="0">
                            Chosing this option will set the background to <Strong>Gray 1</Strong>
                            <Text size="2" color="gray">
                              <Em> ({resolvedGrayScale} 1)</Em>
                            </Text>
                            .
                          </DescriptionList.Details>
                        </DescriptionList.Root>
                      </Popover.Content>
                    </Popover.Root>
                  </Label>
                </Flex>
                <RadioGroup.Root value={backgroundColor} onValueChange={onBackgroundColorChange}>
                  <Flex direction="column" gap="1">
                    {themePropDefs.backgroundColor.values.map((value) => (
                      <Text key={value} size="2" asChild>
                        <label>
                          <RadioGroup.Item value={value} mr="2" />
                          {value}
                        </label>
                      </Text>
                    ))}
                  </Flex>
                </RadioGroup.Root>
              </Flex>

              <Flex direction="column" gap="1">
                <Flex asChild gap="1" align="center">
                  <Label>
                    Text
                    <Popover.Root>
                      <Popover.Trigger>
                        <IconButton
                          size="1"
                          variant="ghost"
                          aria-label="More information about text color options"
                          ml="1"
                        >
                          <InfoCircledIcon style={{ display: 'block', opacity: 0.8 }} />
                        </IconButton>
                      </Popover.Trigger>
                      <Popover.Content side="left" align="center" style={{ width: 320 }}>
                        <Text as="p" size="2" color="gray" mb="3">
                          Text color
                        </Text>
                        <DescriptionList.Root>
                          <DescriptionList.Term>
                            <Code size="3">&quot;auto&quot;</Code>
                          </DescriptionList.Term>
                          <DescriptionList.Details>
                            Chosing this option will set the text to <Strong>Gray 12</Strong>
                            <Text size="2" color="gray">
                              <Em> ({resolvedGrayScale} 12)</Em>
                            </Text>
                            .
                          </DescriptionList.Details>
                          <DescriptionList.Term>
                            <Code size="3">&quot;accent&quot;</Code>
                          </DescriptionList.Term>
                          <DescriptionList.Details mb="0">
                            Chosing this option will set the background to{' '}
                            <Strong>Accent 12</Strong>
                            <Text size="2" color="gray">
                              <Em> ({accentScale} 12)</Em>
                            </Text>
                            .
                          </DescriptionList.Details>
                        </DescriptionList.Root>
                      </Popover.Content>
                    </Popover.Root>
                  </Label>
                </Flex>
                <RadioGroup.Root value={textColor} onValueChange={onTextColorChange}>
                  <Flex direction="column" gap="1">
                    {themePropDefs.textColor.values.map((value) => (
                      <Text key={value} size="2" asChild>
                        <label>
                          <RadioGroup.Item value={value} mr="2" />
                          {value}
                        </label>
                      </Text>
                    ))}
                  </Flex>
                </RadioGroup.Root>
              </Flex>

              <Label htmlFor="darkAppearance">Dark appearance</Label>
              <Flex asChild align="center">
                <label htmlFor="darkAppearance">
                  <Checkbox
                    id="darkAppearance"
                    checked={appearance === 'dark'}
                    onCheckedChange={(value) =>
                      handleAppearanceChange(value === true ? 'dark' : 'light')
                    }
                    mr="2"
                  />
                  <Kbd>⌘D</Kbd>
                </label>
              </Flex>
            </Grid>

            <Separator size="4" mt="4" mb="5" mx="-5" style={{ width: 'auto' }} />
            <Text as="p" size="2" weight="bold" mb="3">
              Style
            </Text>

            <Flex direction="column" gap="1" mb="3">
              <Label htmlFor="radius">Radius › {radius}</Label>
              {/* <Select.Root value={radius} onValueChange={(value) => setRadius(value as ThemeRadius)}>
								<Select.Trigger id="radius" variant="surface" color="gray" highContrast />
								<Select.Content variant="soft" color="gray">
									{themeRadii.map((value) => (
										<Select.Item key={value} value={value}>
											{value}
										</Select.Item>
									))}
								</Select.Content>
							</Select.Root> */}
              <Slider
                id="radius"
                value={[themePropDefs.radius.values.indexOf(radius)]}
                onValueChange={([value]) => onRadiusChange(themePropDefs.radius.values[value])}
                min={0}
                max={themePropDefs.radius.values.length - 1}
                step={1}
              />
            </Flex>

            <Flex direction="column" gap="1">
              <Label htmlFor="scaling">Scaling</Label>
              <Select.Root value={scaling} onValueChange={onScalingChange}>
                <Select.Trigger id="scaling" variant="surface" color="gray" highContrast />
                <Select.Content variant="soft" color="gray">
                  {themePropDefs.scaling.values.map((value) => (
                    <Select.Item key={value} value={value}>
                      {value}
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Root>
            </Flex>
            <Separator size="4" mt="4" mb="5" mx="-5" style={{ width: 'auto' }} />
          </Box>
        </ScrollArea>

        <Box p="3" shrink="0" style={{ borderTop: '1px solid var(--gray-6)' }}>
          <Tooltip
            content="Copy props, then paste them on your `Theme`"
            multiline
            style={{ maxWidth: 170 }}
          >
            <Button
              style={{ width: '100%' }}
              variant="soft"
              color="gray"
              onClick={handleCopyThemeConfig}
            >
              {copyState === 'idle'
                ? 'Copy theme config'
                : copyState === 'copying'
                ? 'Copying...'
                : 'Copied!'}
            </Button>
          </Tooltip>
        </Box>
      </Flex>
    );
  }
);
ThemesPanel.displayName = 'ThemesPanel';

function Label(props: any) {
  return (
    <Text {...props} size="1" color="gray" asChild>
      <label>{props.children}</label>
    </Text>
  );
}

function DescriptionListRoot(props: any) {
  return (
    <Box asChild {...props} style={{ margin: 0, ...props.style }}>
      <dl>{props.children}</dl>
    </Box>
  );
}

function DescriptionListTerm(props: any) {
  return (
    <Text asChild size="2" mb="1" {...props}>
      <dt>{props.children}</dt>
    </Text>
  );
}

function DescriptionListDetails(props: any) {
  return (
    <Text asChild size="2" mb="4" {...props}>
      <dd>{props.children}</dd>
    </Text>
  );
}

const DescriptionList = Object.assign(
  {},
  {
    Root: DescriptionListRoot,
    Term: DescriptionListTerm,
    Details: DescriptionListDetails,
  }
);

export { ThemesPanel, ThemesPanelProvider, ThemesPanelContext };
