import React from 'react';
import { PropsTable } from './PropsTable';
import * as themes from '@radix-ui/themes';
import { Code } from '@radix-ui/themes';

const asChildProp = {
  asChild: {
    required: false,
    type: 'boolean',
    default: false,
  },
};

const definitions = {
  avatar: themes.avatarPropDefs,
  button: { ...asChildProp, ...themes.buttonPropsDefs },
  checkbox: themes.checkboxPropDefs,
  iconButton: { ...asChildProp, ...themes.iconButtonPropDefs },
  radioGroup: themes.radioGroupPropDefs,
  slider: themes.sliderPropDefs,
  switch: themes.switchPropDefs,
  tooltip: themes.tooltipPropDefs,
  box: themes.boxPropDefs,
  flex: { ...asChildProp, ...themes.flexPropDefs },
  grid: { ...asChildProp, ...themes.gridPropDefs },
  container: themes.containerPropDefs,
  section: themes.sectionPropDefs,
  text: {
    ...asChildProp,
    as: { required: false, type: 'enum', values: ['p', 'div', 'span'], default: 'span' },
    ...themes.textPropDefs,
  },
  heading: {
    ...asChildProp,
    as: {
      required: false,
      type: 'enum',
      values: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      default: 'h1',
    },
    ...themes.headingPropDefs,
  },
  link: { ...asChildProp, ...themes.linkPropDefs },
  blockquote: themes.blockquotePropDefs,
  code: themes.codePropDefs,
  textField: themes.textFieldPropDefs,
  textArea: themes.textAreaPropDefs,
  separator: themes.separatorPropDefs,
  badge: themes.badgePropDefs,
  layout: themes.layoutPropDefs,
  selectRoot: themes.selectRootPropDefs,
  selectTrigger: { ...asChildProp, ...themes.selectTriggerPropDefs },
  selectContent: themes.selectContentPropDefs,
  scrollArea: themes.scrollAreaPropDefs,
  dropdownMenuContent: themes.dropdownMenuContentPropDefs,
  dropdownMenuItem: themes.dropdownMenuContentPropDefs,
  contextMenuContent: themes.contextMenuContentPropDefs,
  contextMenuItem: themes.contextMenuItemPropDefs,
  theme: { ...asChildProp, ...themes.themePropDefs },
} as const;

type PropDefinitions = typeof definitions;
type ComponentName = keyof PropDefinitions;

type UniqueDescriptions = {
  [K in keyof Partial<PropDefinitions>]: {
    [K2 in keyof Partial<PropDefinitions[K]>]: React.ReactNode;
  };
};

type ExtractProps<T> = {
  [K in keyof T]: T[K] extends object ? keyof ExtractProps<T[K]> : React.ReactNode;
};
type ExtractedProps = ExtractProps<PropDefinitions>;
type CommonDescriptions = {
  [K in ExtractedProps[keyof ExtractProps<PropDefinitions>]]?: React.ReactNode;
};

const uniqueDescriptions: UniqueDescriptions = {
  avatar: {
    fallback:
      'The fallback element that is rendered when there is no image. It can be a 1 or 2 letter string, or a ReactNode (an icon for example).',
  },
  scrollArea: { scrollbars: 'Controls the scrollable axes' },
  theme: {
    appearance:
      'Changes the color scheme of your app. Invert will use the opposite color scheme of the parent ThemeConfig',
    accentScale: 'Changes the main accent color of your app',
  },
  tooltip: {
    content: 'The content associated with the tooltip',
    multiline: 'Used when you need to format the content across multiple lines',
  },
};

const commonDescriptions: CommonDescriptions = {
  color: (
    <>
      Use to override the default color inherited from the global theme. Read our{' '}
      <a href="/docs/themes/guides/theme-configuration">theme guide</a> for more details.
    </>
  ),
  highContrast: 'Use to render a high-contrast version of the component.',
  radius: (
    <>
      Use to override the default radius inherited from the global theme. Read our{' '}
      <a href="/dosc/themes/guides/theme-configuration">theme guide</a> for more details.
    </>
  ),
  as: (
    <>
      A shorthand for changing the default rendered element into a semantically appropriate
      alternative. <br />
      <br />
      Cannot be used in combination with <Code>asChild</Code>.
    </>
  ),
  asChild: (
    <>
      Change the default rendered element for the one passed as a child, merging their props and
      behavior.
      <br />
      <br />
      Read our <a href="/docs/primitives/guides/composition">Composition</a> guide for more details.
    </>
  ),
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

  return parts.map((part) => part.join(' | ')).join('\n');
}

type ThemesPropsDef = Record<
  string,
  { type: string; values?: readonly string[]; default?: boolean | string; required?: boolean }
>;

function formatDefinitions(definitions: Record<ComponentName, ThemesPropsDef>) {
  const formattedProps = {};

  Object.keys(definitions).forEach((componentName) => {
    const propsDef = definitions[componentName] as ThemesPropsDef;

    formattedProps[componentName] = Object.keys(propsDef).map((key) => {
      const item = propsDef[key];
      const propName = key;
      const description =
        uniqueDescriptions[componentName]?.[propName] || commonDescriptions[propName];

      return {
        name: propName,
        required: item.required,
        typeSimple: item.type,
        type: formatValues(item.values),
        default:
          typeof item.default === 'boolean' ? String(item.default) : formatValues(item.default),
        description: description,
      };
    });
  });

  return formattedProps;
}

const props = formatDefinitions(definitions);

export function ThemesPropsTable({ name }: { name: string }) {
  return <PropsTable data={props[name]} />;
}
