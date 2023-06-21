import React from 'react';
import { PropDef, PropsTable } from './PropsTable';
import * as themes from '@radix-ui/themes';

export function ThemesPropsTable({ componentName }: { componentName: string }) {
  return <PropsTable data={props[componentName]} />;
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
      Read our <a href="../guides/composition">Composition</a> guide for more details.
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
      <a href="/TODO">theming guide</a> for more details.
    </>
  ),
};

const radiusProp = {
  name: 'radius',
  required: false,
  typeSimple: 'enum',
  description: (
    <>
      Use to override the default radius inherited from the global theme. Read our{' '}
      <a href="/TODO">theming guide</a> for more details.
    </>
  ),
};

export const props: Record<string, PropDef[]> = {
  button: [
    {
      ...sizeProp,
      type: formatValues(themes.buttonSizes),
      default: formatValues(themes.defaultButtonSize),
    },
    {
      ...variantProp,
      type: formatValues(themes.buttonVariants),
      default: formatValues(themes.defaultButtonVariant),
    },
    { ...colorProp, default: formatValues(themes.defaultButtonColor) },
    {
      ...radiusProp,
      type: formatValues(themes.buttonRadiusValues),
      default: formatValues(themes.defaultButtonRadius),
    },
  ],
  checkbox: [
    {
      ...sizeProp,
      type: formatValues(themes.checkboxSizes),
      default: formatValues(themes.defaultCheckboxSize),
    },
    {
      ...variantProp,
      type: formatValues(themes.checkboxVariants),
      default: formatValues(themes.defaultCheckboxVariant),
    },
    { ...colorProp, default: formatValues(themes.defaultCheckboxColor) },
    {
      ...radiusProp,
      type: formatValues(themes.buttonRadiusValues),
      default: formatValues(themes.defaultCheckboxRadius),
    },
  ],
  iconbutton: [
    {
      ...sizeProp,
      type: formatValues(themes.iconButtonSizes),
      default: formatValues(themes.defaultIconButtonSize),
    },
    {
      ...variantProp,
      type: formatValues(themes.iconButtonVariants),
      default: formatValues(themes.defaultIconButtonVariant),
    },
    { ...colorProp, default: formatValues(themes.defaultIconButtonColor) },
    {
      ...radiusProp,
      type: formatValues(themes.buttonRadiusValues),
      default: formatValues(themes.defaultIconButtonRadius),
    },
  ],
  radiogroup: [
    {
      ...sizeProp,
      type: formatValues(themes.radioGroupSizes),
      default: formatValues(themes.defaultRadioGroupSize),
    },
    {
      ...variantProp,
      type: formatValues(themes.radioGroupVariants),
      default: formatValues(themes.defaultRadioGroupVariant),
    },
    { ...colorProp, default: formatValues(themes.defaultRadioGroupColor) },
  ],
  slider: [
    {
      ...sizeProp,
      type: formatValues(themes.sliderSizes),
      default: formatValues(themes.defaultSliderSize),
    },
    {
      ...variantProp,
      type: formatValues(themes.sliderVariants),
      default: formatValues(themes.defaultSliderVariant),
    },
    { ...colorProp, default: formatValues(themes.defaultSliderColor) },
    {
      ...radiusProp,
      type: formatValues(themes.buttonRadiusValues),
      default: formatValues(themes.defaultSliderRadius),
    },
  ],
  switch: [
    {
      ...sizeProp,
      type: formatValues(themes.switchSizes),
      default: formatValues(themes.defaultSwitchSize),
    },
    {
      ...variantProp,
      type: formatValues(themes.switchVariants),
      default: formatValues(themes.defaultSwitchVariant),
    },
    { ...colorProp, default: formatValues(themes.defaultSwitchColor) },
    {
      ...radiusProp,
      type: formatValues(themes.buttonRadiusValues),
      default: formatValues(themes.defaultSwitchRadius),
    },
  ],
  textfield: [
    {
      ...sizeProp,
      type: formatValues(themes.textFieldSizes),
      default: formatValues(themes.defaultTextFieldSize),
    },
    {
      ...variantProp,
      type: formatValues(themes.textFieldVariants),
      default: formatValues(themes.defaultTextFieldVariant),
    },
    {
      ...radiusProp,
      type: formatValues(themes.buttonRadiusValues),
      default: formatValues(themes.defaultTextFieldRadius),
    },
  ],
  textArea: [
    {
      ...sizeProp,
      type: formatValues(themes.textAreaSizes),
      default: formatValues(themes.defaultTextAreaSize),
    },
    {
      ...variantProp,
      type: formatValues(themes.textAreaVariants),
      default: formatValues(themes.defaultTextAreaVariant),
    },
    {
      ...radiusProp,
      type: formatValues(themes.buttonRadiusValues),
      default: formatValues(themes.defaultTextAreaRadius),
    },
  ],
  text: [
    asChildProp,
    {
      ...sizeProp,
      type: formatValues(themes.textAreaSizes),
      default: formatValues(themes.defaultTextAreaSize),
    },
    {
      name: 'weight',
      required: false,
      type: formatValues(themes.textWeights),
      default: formatValues(themes.defaultTextWeight),
      typeSimple: 'enum',
    },
    {
      name: 'align',
      required: false,
      type: formatValues(themes.textAlignValues),
      default: formatValues(themes.defaultTextAlign),
      typeSimple: 'enum',
    },
    {
      name: 'trim',
      required: false,
      type: formatValues(themes.textTrimValues),
      default: formatValues(themes.defaultTextTrim),
      typeSimple: 'enum',
    },
    { ...colorProp, default: formatValues(themes.defaultTextColor) },
  ],
  heading: [
    asChildProp,
    {
      ...sizeProp,
      type: formatValues(themes.headingSizes),
      default: formatValues(themes.defaultHeadingSize),
    },
    {
      name: 'trim',
      required: false,
      type: formatValues(themes.textTrimValues),
      default: formatValues(themes.defaultTextTrim),
      typeSimple: 'enum',
    },
    { ...colorProp, default: formatValues(themes.defaultTextColor) },
  ],
};

function formatValues(values?: readonly string[] | string) {
  if (Array.isArray(values)) {
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
