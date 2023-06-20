import React from 'react';
import { PropDef, PropsTable } from './PropsTable';
import * as themes from '@radix-ui/themes';

const themeVariables = {
  button: {
    size: {
      values: formatValues(themes.buttonSizes),
      default: formatValues([themes.defaultButtonSize]),
    },
    variant: {
      values: formatValues(themes.buttonVariants),
      default: formatValues([themes.defaultButtonVariant]),
    },
    color: {
      default: formatValues([themes.defaultButtonColor]),
    },
    radius: {
      values: formatValues(themes.buttonRadiusValues),
      default: formatValues([themes.defaultButtonRadius]),
    },
  },
  checkbox: {
    size: {
      values: formatValues(themes.checkboxSizes),
      default: formatValues([themes.defaultCheckboxSize]),
    },
    variant: {
      values: formatValues(themes.checkboxVariants),
      default: formatValues([themes.defaultCheckboxVariant]),
    },
    color: {
      default: formatValues([themes.defaultCheckboxColor]),
    },
    radius: {
      values: formatValues(themes.buttonRadiusValues),
      default: formatValues([themes.defaultCheckboxRadius]),
    },
  },
  iconButton: {
    size: {
      values: formatValues(themes.iconButtonSizes),
      default: formatValues([themes.defaultIconButtonSize]),
    },
    variant: {
      values: formatValues(themes.iconButtonVariants),
      default: formatValues([themes.defaultIconButtonVariant]),
    },
    color: {
      default: formatValues([themes.defaultIconButtonColor]),
    },
    radius: {
      values: formatValues(themes.buttonRadiusValues),
      default: formatValues([themes.defaultIconButtonRadius]),
    },
  },
  radioGroup: {
    size: {
      values: formatValues(themes.radioGroupSizes),
      default: formatValues([themes.defaultRadioGroupSize]),
    },
    variant: {
      values: formatValues(themes.radioGroupVariants),
      default: formatValues([themes.defaultRadioGroupVariant]),
    },
    color: {
      default: formatValues([themes.defaultRadioGroupColor]),
    },
  },
  slider: {
    size: {
      values: formatValues(themes.sliderSizes),
      default: formatValues([themes.defaultSliderSize]),
    },
    variant: {
      values: formatValues(themes.sliderVariants),
      default: formatValues([themes.defaultSliderVariant]),
    },
    color: {
      default: formatValues([themes.defaultSliderColor]),
    },
    radius: {
      values: formatValues(themes.buttonRadiusValues),
      default: formatValues([themes.defaultSliderRadius]),
    },
  },
  switch: {
    size: {
      values: formatValues(themes.switchSizes),
      default: formatValues([themes.defaultSwitchSize]),
    },
    variant: {
      values: formatValues(themes.switchVariants),
      default: formatValues([themes.defaultSwitchVariant]),
    },
    color: {
      default: formatValues([themes.defaultSwitchColor]),
    },
    radius: {
      values: formatValues(themes.buttonRadiusValues),
      default: formatValues([themes.defaultSwitchRadius]),
    },
  },
  textField: {
    size: {
      values: formatValues(themes.textFieldSizes),
      default: formatValues([themes.defaultTextFieldSize]),
    },
    variant: {
      values: formatValues(themes.textFieldVariants),
      default: formatValues([themes.defaultTextFieldVariant]),
    },
    radius: {
      values: formatValues(themes.buttonRadiusValues),
      default: formatValues([themes.defaultTextFieldRadius]),
    },
  },
  textArea: {
    size: {
      values: formatValues(themes.textAreaSizes),
      default: formatValues([themes.defaultTextAreaSize]),
    },
    variant: {
      values: formatValues(themes.textAreaVariants),
      default: formatValues([themes.defaultTextAreaVariant]),
    },
    radius: {
      values: formatValues(themes.buttonRadiusValues),
      default: formatValues([themes.defaultTextAreaRadius]),
    },
  },
  text: {
    size: {
      values: formatValues(themes.textSizes),
      default: formatValues([themes.defaultTextSize]),
    },
    weight: {
      values: formatValues(themes.textWeights),
      default: formatValues([themes.defaultTextWeight]),
    },
    align: {
      values: formatValues(themes.textAlignValues),
      default: formatValues([themes.defaultTextAlign]),
    },
    trim: {
      values: formatValues(themes.textTrimValues),
      default: formatValues([themes.defaultTextTrim]),
    },
    color: {
      default: formatValues([themes.defaultTextColor]),
    },
  },
};

export function ThemesPropsTable({
  data,
}: {
  data: (variables: typeof themeVariables) => PropDef[];
}) {
  return <PropsTable data={data(themeVariables)} />;
}

function formatValues(arr: readonly string[]) {
  return arr
    .filter((item) => Boolean(item))
    .map((v) => `"${v}"`)
    .join(' | ');
}
