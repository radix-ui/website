import React from 'react';
import { PropDef, PropsTable } from './PropsTable';
import * as themes from '@radix-ui/themes';

export function ThemesPropsTable({ name }: { name: string }) {
  return <PropsTable data={props[name]} />;
}

const asChildProp = {
  name: 'asChild',
  required: false,
  typeSimple: 'boolean',
  default: 'false',
  description: (
    <>
      Change the default rendered element for the one passed as a child, merging their props and
      behavior.
      <br />
      <br />
      Read our <a href="/docs/primitives/guides/composition">Composition</a> guide for more details.
    </>
  ),
};

const sizeProp = {
  name: 'size',
  required: false,
  typeSimple: 'enum',
};

const variantProp = {
  name: 'variant',
  required: false,
  typeSimple: 'enum',
};

const colorProp = {
  name: 'color',
  required: false,
  typeSimple: 'enum',
  description: (
    <>
      Use to override the default color inherited from the global theme. Read our{' '}
      <a href="/docs/themes/guides/theme-configuration">theme guide</a> for more details.
    </>
  ),
};

const highContrastProp = {
  name: 'highContrast',
  required: false,
  typeSimple: 'boolean',
  description: 'Use to render a high-contrast version of the component.',
};

const weightProp = {
  name: 'weight',
  required: false,
  typeSimple: 'enum',
};

const radiusProp = {
  name: 'radius',
  required: false,
  typeSimple: 'enum',
  description: (
    <>
      Use to override the default radius inherited from the global theme. Read our{' '}
      <a href="/dosc/themes/guides/theme-configuration">theme guide</a> for more details.
    </>
  ),
};

const paddingProp = {
  required: false,
  typeSimple: 'enum',
  type: formatValues(themes.paddingValues),
};

const positionEdgeProp = {
  required: false,
  typeSimple: 'enum',
  type: formatValues(themes.positionEdgeValues),
};

const props: Record<string, PropDef[]> = {
  button: [
    {
      ...sizeProp,
      type: formatValues(themes.buttonSizes),
      default: formatValues(themes.buttonSizeDefault),
    },
    {
      ...variantProp,
      type: formatValues(themes.buttonVariants),
      default: formatValues(themes.buttonVariantDefault),
    },
    { ...colorProp, default: formatValues(themes.buttonColorDefault) },
    { ...highContrastProp, default: themes.buttonHighContrastDefault },
    {
      ...radiusProp,
      type: formatValues(themes.themeRadii),
      default: formatValues(themes.buttonRadiusDefault),
    },
  ],
  checkbox: [
    {
      ...sizeProp,
      type: formatValues(themes.checkboxSizes),
      default: formatValues(themes.checkboxSizeDefault),
    },
    {
      ...variantProp,
      type: formatValues(themes.checkboxVariants),
      default: formatValues(themes.checkboxVariantDefault),
    },
    { ...colorProp, default: formatValues(themes.checkboxColorDefault) },
    { ...highContrastProp, default: themes.checkboxHighContrastDefault },
    {
      ...radiusProp,
      type: formatValues(themes.themeRadii),
      default: formatValues(themes.checkboxRadiusDefault),
    },
  ],
  iconButton: [
    {
      ...sizeProp,
      type: formatValues(themes.iconButtonSizes),
      default: formatValues(themes.iconButtonSizeDefault),
    },
    {
      ...variantProp,
      type: formatValues(themes.iconButtonVariants),
      default: formatValues(themes.iconButtonVariantDefault),
    },
    { ...colorProp, default: formatValues(themes.iconButtonColorDefault) },
    { ...highContrastProp, default: themes.iconButtonHighContrastDefault },
    {
      ...radiusProp,
      type: formatValues(themes.themeRadii),
      default: formatValues(themes.iconButtonRadiusDefault),
    },
  ],
  radioGroup: [
    {
      ...sizeProp,
      type: formatValues(themes.radioGroupSizes),
      default: formatValues(themes.radioGroupSizeDefault),
    },
    {
      ...variantProp,
      type: formatValues(themes.radioGroupVariants),
      default: formatValues(themes.radioGroupVariantDefault),
    },
    { ...colorProp, default: formatValues(themes.radioGroupColorDefault) },
    { ...highContrastProp, default: themes.radioGroupHighContrastDefault },
  ],
  slider: [
    {
      ...sizeProp,
      type: formatValues(themes.sliderSizes),
      default: formatValues(themes.sliderSizeDefault),
    },
    {
      ...variantProp,
      type: formatValues(themes.sliderVariants),
      default: formatValues(themes.sliderVariantDefault),
    },
    { ...colorProp, default: formatValues(themes.sliderColorDefault) },
    { ...highContrastProp, default: themes.sliderHighContrastDefault },
    {
      ...radiusProp,
      type: formatValues(themes.themeRadii),
      default: formatValues(themes.sliderRadiusDefault),
    },
  ],
  switch: [
    {
      ...sizeProp,
      type: formatValues(themes.switchSizes),
      default: formatValues(themes.switchSizeDefault),
    },
    {
      ...variantProp,
      type: formatValues(themes.switchVariants),
      default: formatValues(themes.switchVariantDefault),
    },
    { ...colorProp, default: formatValues(themes.switchColorDefault) },
    { ...highContrastProp, default: themes.switchHighContrastDefault },
    {
      ...radiusProp,
      type: formatValues(themes.themeRadii),
      default: formatValues(themes.switchRadiusDefault),
    },
  ],
  textField: [
    {
      ...sizeProp,
      type: formatValues(themes.textFieldSizes),
      default: formatValues(themes.textFieldSizeDefault),
    },
    {
      ...variantProp,
      type: formatValues(themes.textFieldVariants),
      default: formatValues(themes.textFieldVariantDefault),
    },
    { ...colorProp, default: formatValues(themes.textColorDefault) },
    {
      ...radiusProp,
      type: formatValues(themes.themeRadii),
      default: formatValues(themes.textFieldRadiusDefault),
    },
  ],
  textArea: [
    {
      ...sizeProp,
      type: formatValues(themes.textAreaSizes),
      default: formatValues(themes.textAreaSizeDefault),
    },
    {
      ...variantProp,
      type: formatValues(themes.textAreaVariants),
      default: formatValues(themes.textAreaVariantDefault),
    },
    { ...colorProp, default: formatValues(themes.textAreaColorDefault) },
    {
      ...radiusProp,
      type: formatValues(themes.themeRadii),
      default: formatValues(themes.textAreaRadiusDefault),
    },
  ],
  text: [
    asChildProp,
    {
      ...sizeProp,
      type: formatValues(themes.textSizes),
      default: formatValues(themes.textSizeDefault),
    },
    {
      ...weightProp,
      type: formatValues(themes.textWeights),
      default: formatValues(themes.textWeightDefault),
    },
    {
      name: 'align',
      required: false,
      type: formatValues(themes.textAlignValues),
      default: formatValues(themes.textAlignDefault),
      typeSimple: 'enum',
    },
    {
      name: 'trim',
      required: false,
      type: formatValues(themes.textTrimValues),
      default: formatValues(themes.textTrimDefault),
      typeSimple: 'enum',
    },
    { ...colorProp, default: formatValues(themes.textColorDefault) },
  ],
  heading: [
    asChildProp,
    {
      ...sizeProp,
      type: formatValues(themes.headingSizes),
      default: formatValues(themes.headingSizeDefault),
    },
    {
      name: 'trim',
      required: false,
      type: formatValues(themes.textTrimValues),
      default: formatValues(themes.headingTrimDefault),
      typeSimple: 'enum',
    },
    { ...colorProp, default: formatValues(themes.headingColorDefault) },
  ],
  link: [
    asChildProp,
    {
      ...sizeProp,
      type: formatValues(themes.linkSizes),
      default: formatValues(themes.linkSizeDefault),
    },
    {
      ...weightProp,
      type: formatValues(themes.linkWeights),
      default: formatValues(themes.linkWeightDefault),
    },
    {
      ...colorProp,
      default: formatValues(themes.linkColorDefault),
    },
    { ...highContrastProp, default: themes.linkHighContrastDefault },
  ],
  separator: [
    {
      ...sizeProp,
      type: formatValues(themes.separatorSizes),
      default: formatValues(themes.separatorSizeDefault),
    },
    { ...colorProp, default: formatValues(themes.separatorColorDefault) },
  ],
  provider: [
    {
      name: 'tooltipDelayDuration',
      required: false,
      default: '700',
      typeSimple: 'number',
      description:
        'The duration from when the mouse enters a tooltip trigger until the tooltip opens.',
    },
    {
      name: 'tooltipSkipDelayDuration',
      required: false,
      default: '300',
      typeSimple: 'number',
      description:
        'How much time a user has to enter another trigger without incurring a delay again.',
    },
    {
      name: 'dir',
      required: false,
      typeSimple: 'enum',
      type: formatValues(['ltr', 'rtl']),
      description:
        'The global reading direction of your application. This will be inherited by all components.',
    },
  ],
  badge: [
    {
      ...sizeProp,
      type: formatValues(themes.badgeSizes),
      default: formatValues(themes.badgeSizeDefault),
    },
    {
      ...variantProp,
      type: formatValues(themes.badgeVariants),
      default: formatValues(themes.badgeVariantDefault),
    },
    { ...colorProp, default: formatValues(themes.badgeColorDefault) },
  ],
  avatar: [
    {
      ...sizeProp,
      type: formatValues(themes.avatarSizes),
      default: formatValues(themes.avatarSizeDefault),
    },
    {
      ...variantProp,
      type: formatValues(themes.avatarVariants),
      default: formatValues(themes.avatarVariantDefault),
    },
    { ...colorProp, default: formatValues(themes.avatarColorDefault) },
    { ...highContrastProp, default: themes.avatarHighContrastDefault },
    {
      ...radiusProp,
      type: formatValues(themes.themeRadii),
      default: formatValues(themes.avatarRadiusDefault),
    },
    {
      name: 'fallback',
      required: true,
      typeSimple: 'ReactNode',
      description:
        'The fallback element that is rendered when there is no image. It can be a 1 or 2 letter string, or a ReactNode (an icon for example).',
    },
  ],
  box: [
    {
      name: 'display',
      required: false,
      typeSimple: 'enum',
      type: formatValues(themes.boxDisplayValues),
    },
  ],
  flex: [
    {
      name: 'display',
      required: false,
      typeSimple: 'enum',
      type: formatValues(themes.flexDisplayValues),
      default: formatValues(themes.flexDisplayDefault),
    },
    {
      name: 'direction',
      required: false,
      typeSimple: 'enum',
      type: formatValues(themes.flexDirectionValues),
      default: formatValues(themes.flexDirectionDefault),
    },
    {
      name: 'align',
      required: false,
      typeSimple: 'enum',
      type: formatValues(themes.flexAlignValues),
      default: formatValues(themes.flexAlignDefault),
    },
    {
      name: 'justify',
      required: false,
      typeSimple: 'enum',
      type: formatValues(themes.flexJustifyValues),
      default: formatValues(themes.flexJustifyDefault),
    },
    {
      name: 'wrap',
      required: false,
      typeSimple: 'enum',
      type: formatValues(themes.flexWrapValues),
      default: formatValues(themes.flexWrapDefault),
    },
    {
      name: 'gap',
      required: false,
      typeSimple: 'enum',
      type: formatValues(themes.flexGapValues),
      default: formatValues(themes.flexGapDefault),
    },
  ],
  grid: [
    {
      name: 'display',
      required: false,
      typeSimple: 'enum',
      type: formatValues(themes.gridDisplayValues),
      default: formatValues(themes.gridDisplayDefault),
    },
    {
      name: 'columns',
      required: false,
      typeSimple: 'enum',
      type: formatValues(themes.gridColumnsValues),
      default: formatValues(themes.gridColumnsDefault),
    },
    {
      name: 'flow',
      required: false,
      typeSimple: 'enum',
      type: formatValues(themes.gridFlowValues),
      default: formatValues(themes.gridFlowDefault),
    },
    {
      name: 'align',
      required: false,
      typeSimple: 'enum',
      type: formatValues(themes.gridAlignValues),
      default: formatValues(themes.gridAlignDefault),
    },
    {
      name: 'justify',
      required: false,
      typeSimple: 'enum',
      type: formatValues(themes.gridJustifyValues),
      default: formatValues(themes.gridJustifyDefault),
    },
    {
      name: 'gap',
      required: false,
      typeSimple: 'enum',
      type: formatValues(themes.gridGapValues),
      default: formatValues(themes.gridGapDefault),
    },
    {
      name: 'gapX',
      required: false,
      typeSimple: 'enum',
      type: formatValues(themes.gridGapValues),
      default: formatValues(themes.gridGapXDefault),
    },
    {
      name: 'gapY',
      required: false,
      typeSimple: 'enum',
      type: formatValues(themes.gridGapValues),
      default: formatValues(themes.gridGapYDefault),
    },
  ],
  layout: [
    asChildProp,
    {
      name: 'position',
      required: false,
      typeSimple: 'enum',
      type: formatValues(themes.positionValues),
    },
    {
      ...positionEdgeProp,
      name: 'inset',
    },
    {
      ...positionEdgeProp,
      name: 'top',
    },
    {
      ...positionEdgeProp,
      name: 'bottom',
    },
    {
      ...positionEdgeProp,
      name: 'left',
    },
    {
      ...positionEdgeProp,
      name: 'right',
    },
    {
      name: 'width',
      required: false,
      typeSimple: 'enum',
      type: formatValues(themes.widthHeightValues),
    },
    {
      name: 'height',
      required: false,
      typeSimple: 'enum',
      type: formatValues(themes.widthHeightValues),
    },
    {
      name: 'shrink',
      required: false,
      typeSimple: 'enum',
      type: formatValues(themes.flexShrinkValues),
    },
    {
      name: 'grow',
      required: false,
      typeSimple: 'enum',
      type: formatValues(themes.flexShrinkValues),
    },
    {
      ...paddingProp,
      name: 'p',
    },
    {
      ...paddingProp,
      name: 'py',
    },
    {
      ...paddingProp,
      name: 'px',
    },
    {
      ...paddingProp,
      name: 'pt',
    },
    {
      ...paddingProp,
      name: 'pb',
    },
    {
      ...paddingProp,
      name: 'pl',
    },
    {
      ...paddingProp,
      name: 'pr',
    },
  ],
  container: [
    {
      ...sizeProp,
      type: formatValues(themes.containerSizes),
      default: formatValues(themes.containerSizeDefault),
    },
  ],
  section: [
    {
      ...sizeProp,
      type: formatValues(themes.sectionSizes),
      default: formatValues(themes.sectionSizeDefault),
    },
  ],
  selectRoot: [
    // {
    //   name: 'placeholder',
    //   required: false,
    //   typeSimple: 'string',
    // },
    {
      ...sizeProp,
      type: formatValues(themes.selectSizes),
      default: formatValues(themes.selectSizeDefault),
    },
    {
      ...radiusProp,
      type: formatValues(themes.themeRadii),
      default: formatValues(themes.selectRadiusDefault),
    },
  ],
  selectTrigger: [
    {
      name: 'variant',
      required: false,
      type: formatValues(themes.selectTriggerVariants),
      default: formatValues(themes.selectTriggerVariantDefault),
      typeSimple: 'enum',
    },
    { ...colorProp, default: formatValues(themes.selectTriggerColorDefault) },
    { ...highContrastProp, default: themes.selectTriggerHighContrastDefault },
  ],
  selectContent: [
    {
      name: 'variant',
      required: false,
      type: formatValues(themes.selectContentVariants),
      default: formatValues(themes.selectContentVariantDefault),
      typeSimple: 'enum',
    },
    { ...colorProp, default: formatValues(themes.selectContentColorDefault) },
    { ...highContrastProp, default: themes.selectContentHighContrastDefault },
  ],
  code: [
    {
      ...sizeProp,
      type: formatValues(themes.codeSizes),
      default: formatValues(themes.codeSizeDefault),
    },
    {
      ...variantProp,
      type: formatValues(themes.codeVariants),
      default: formatValues(themes.codeVariantDefault),
    },
    { ...colorProp, default: formatValues(themes.codeColorDefault) },
    { ...highContrastProp, default: themes.codeHighContrastDefault },
    {
      ...weightProp,
      type: formatValues(themes.codeWeights),
      default: formatValues(themes.codeWeightDefault),
    },
  ],
  tooltip: [
    {
      name: 'content',
      required: true,
      typeSimple: 'ReactNode',
      description: 'The content associated with the tooltip',
    },
    {
      name: 'multiline',
      required: false,
      typeSimple: 'boolean',
      description: 'Used when you need to format the content across multiple lines',
    },
  ],
  scrollArea: [
    {
      ...sizeProp,
      type: formatValues(themes.scrollAreaSizes),
      default: formatValues(themes.scrollAreaSizeDefault),
    },
    {
      ...radiusProp,
      type: formatValues(themes.themeRadii),
      default: formatValues(themes.scrollAreaRadiusDefault),
    },
    {
      name: 'scrollbars',
      required: false,
      typeSimple: 'enum',
      type: formatValues(themes.scrollAreaScrollbarsValues),
      default: formatValues(themes.scrollAreaScrollbarsDefault),
      description: 'Controls the scrollable axes',
    },
  ],
  dropdownMenuContent: [
    {
      ...sizeProp,
      type: formatValues(themes.dropdownMenuContentSizes),
      default: formatValues(themes.dropdownMenuContentSizeDefault),
    },
    {
      ...variantProp,
      type: formatValues(themes.dropdownMenuContentVariants),
      default: formatValues(themes.dropdownMenuContentVariantDefault),
    },
    { ...colorProp, default: formatValues(themes.dropdownMenuContentColorDefault) },
    { ...highContrastProp, default: themes.dropdownMenuContentHighContrastDefault },
  ],
  dropdownMenuItem: [
    { ...colorProp, default: formatValues(themes.dropdownMenuItemColorDefault) },
    {
      name: 'shortcut',
      required: false,
      typeSimple: 'string',
      description: 'An optional shortcut command to associate with the item',
    },
  ],
  contextMenuContent: [
    {
      ...sizeProp,
      type: formatValues(themes.contextMenuContentSizes),
      default: formatValues(themes.contextMenuContentSizeDefault),
    },
    {
      ...variantProp,
      type: formatValues(themes.contextMenuContentVariants),
      default: formatValues(themes.contextMenuContentVariantDefault),
    },
    { ...colorProp, default: formatValues(themes.contextMenuContentColorDefault) },
    { ...highContrastProp, default: themes.contextMenuContentHighContrastDefault },
  ],
  contextMenuItem: [
    { ...colorProp, default: formatValues(themes.contextMenuItemColorDefault) },
    {
      name: 'shortcut',
      required: false,
      typeSimple: 'string',
      description: 'An optional shortcut command to associate with the item',
    },
  ],
  themeConfig: [
    asChildProp,
    {
      name: 'mode',
      required: false,
      typeSimple: 'enum',
      type: formatValues(themes.themeAppearances),
      default: formatValues(themes.themeAppearanceDefault),
      description:
        'Changes the color scheme of your app. Invert will use the opposite color scheme of the parent ThemeConfig',
    },
    {
      name: 'accentScale',
      required: false,
      typeSimple: 'enum',
      type: formatValues(themes.radixColorScales),
      default: formatValues(themes.themeAccentScaleDefault),
      description: 'Changes the main accent color of your app',
    },
    {
      name: 'grayScale',
      required: false,
      typeSimple: 'enum',
      type: formatValues(['auto', ...themes.radixGrayScales]),
      default: formatValues(themes.themeGrayScaleDefault),
    },
    {
      name: 'backgroundColor',
      required: false,
      typeSimple: 'enum',
      type: formatValues(themes.themeBackgroundColors),
      default: formatValues(themes.themeBackgroundColorDefault),
    },
    {
      name: 'textColor',
      required: false,
      typeSimple: 'enum',
      type: formatValues(themes.themeTextColors),
      default: formatValues(themes.themeTextColorDefault),
    },
    {
      name: 'radius',
      required: false,
      typeSimple: 'enum',
      type: formatValues(themes.themeRadii),
      default: formatValues(themes.themeRadiusDefault),
    },
    {
      name: 'scaling',
      required: false,
      typeSimple: 'enum',
      type: formatValues(themes.themeScalings),
      default: formatValues(themes.themeScalingDefault),
    },
  ],
};

function formatValues(values?: readonly string[] | string) {
  if (Array.isArray(values)) {
    if (values.length > 8) {
      return formatToBalancedArray(values, 5);
    }

    return values
      .filter((item) => Boolean(item))
      .map((v) => `"${v}"`)
      .join(' | ');
  }

  if (values) {
    return `"${values}"`;
  }

  return undefined;
}

function formatToBalancedArray(input: string[], columns = 5) {
  const numberOfParts = Math.ceil(input.length / columns);

  const balancedArray = input
    .map((value) => `"${value}"`)
    .map((value, i, array) => {
      const matching = array.filter((v, j) => j % columns === i % columns);
      const longestPart = Math.max(...matching.map((el) => el.length)) + 1;
      return value.padEnd(longestPart, ' ');
    });

  const parts = [...Array(numberOfParts)].map((value, index) => {
    return balancedArray.slice(index * columns, (index + 1) * columns);
  });

  const formatted = parts.map((part) => part.join(' | ')).join('\n| ');

  return `| ${formatted}`;
}
