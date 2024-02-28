import React from 'react';
import { PropsTable } from './PropsTable';
import * as themes from '@lib/themes';
import { Code, Link as DSLink } from '@radix-ui/themes';
import NextLink from 'next/link';

const Link = ({ href = '', ...props }) => {
  if (href.startsWith('http')) {
    return <DSLink {...props} href={href} target="_blank" rel="noopener" />;
  }
  return (
    <NextLink href={href} passHref legacyBehavior>
      <DSLink {...props} />
    </NextLink>
  );
};

const definitions = {
  avatar: themes.avatarPropDefs,
  button: themes.buttonPropDefs,
  checkbox: themes.checkboxPropDefs,
  iconButton: themes.iconButtonPropDefs,
  radioGroup: themes.radioGroupRootPropDefs,
  slider: themes.sliderPropDefs,
  switch: themes.switchPropDefs,
  tooltip: themes.tooltipPropDefs,
  box: themes.boxPropDefs,
  flex: themes.flexPropDefs,
  grid: themes.gridPropDefs,
  container: themes.containerPropDefs,
  section: themes.sectionPropDefs,
  text: themes.textPropDefs,
  heading: themes.headingPropDefs,
  link: themes.linkPropDefs,
  blockquote: themes.blockquotePropDefs,
  code: themes.codePropDefs,
  textField: themes.textFieldRootPropDefs,
  textFieldSlot: themes.textFieldSlotPropDefs,
  textArea: themes.textAreaPropDefs,
  separator: themes.separatorPropDefs,
  badge: themes.badgePropDefs,
  layout: themes.layoutPropDefs,
  margin: themes.marginPropDefs,
  selectRoot: themes.selectRootPropDefs,
  selectTrigger: themes.selectTriggerPropDefs,
  selectContent: themes.selectContentPropDefs,
  scrollArea: themes.scrollAreaPropDefs,
  dropdownMenuContent: themes.dropdownMenuContentPropDefs,
  dropdownMenuItem: themes.dropdownMenuItemPropDefs,
  contextMenuContent: themes.contextMenuContentPropDefs,
  contextMenuItem: themes.contextMenuItemPropDefs,
  theme: themes.themePropDefs,
  card: themes.cardPropDefs,
  tableRoot: themes.tableRootPropDefs,
  tableRow: themes.tableRowPropDefs,
  tableCell: themes.tableCellPropDefs,
  calloutRoot: themes.calloutRootPropDefs,
  inset: themes.insetPropDefs,
  tabsList: themes.tabsListPropDefs,
  kbd: themes.kbdPropDefs,
  hoverCardContent: themes.hoverCardContentPropDefs,
  dialogContent: themes.dialogContentPropDefs,
  alertDialogContent: themes.alertDialogContentPropDefs,
  popoverContent: themes.popoverContentPropDefs,
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
    fallback: 'The fallback element to render when an image is not available.',
  },
  scrollArea: { scrollbars: 'Controls the scrollable axes.' },
  theme: {
    appearance: (
      <>
        The color scheme of the theme (typcially referred to as light and dark mode). See the{' '}
        <Link href="/themes/docs/theme/dark-mode">dark mode guide</Link> for more details.
      </>
    ),
    accentColor: (
      <>
        The dominant color of the theme, see the{' '}
        <Link href="/themes/docs/theme/color">color guide</Link> for more details.
      </>
    ),
    grayColor: (
      <>
        The grayscale of the theme, see the <Link href="/themes/docs/theme/color">color guide</Link>{' '}
        for more details.
      </>
    ),
    hasBackground: 'Whether to apply the themes background color to the theme node.',
    scaling: (
      <>
        The linear scaling applied to the theme. See the{' '}
        <Link href="/themes/docs/theme/layout#scaling">layout guide</Link> for more details.
      </>
    ),
  },
  tooltip: {
    content: 'The content associated with the tooltip.',
  },
  link: {
    underline: 'Sets the visibility of the underline affordance.',
  },
};

const commonDescriptions: CommonDescriptions = {
  variant: (
    <>
      The visual variant to apply, see{' '}
      <Link href="/themes/docs/theme/overview#variants">theme overview</Link> for more details.
    </>
  ),
  color: (
    <>
      Overrides the accent color inherited from the Theme. See the{' '}
      <Link href="/themes/docs/theme/color">color guide</Link> for more details.
    </>
  ),
  highContrast: 'Renders the component in higher contrast.',
  radius: (
    <>
      Overrides the radius inherited from the theme. See the{' '}
      <Link href="/themes/docs/theme/visual-style#radius">theme guide</Link> for more details.
    </>
  ),
  as: (
    <>
      Shorthand for changing the default rendered element into a semantically appropriate
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
      Read our <Link href="/primitives/docs/guides/composition">Composition</Link> guide for more
      details.
    </>
  ),
  shortcut: 'Optional shortcut command displayed next to the item text.',
  trim: 'Removes the leading trim from the start or end of the rendered text node.',
};

function formatValues(values?: readonly string[] | string) {
  if (Array.isArray(values)) {
    const strings = values.filter((item) => Boolean(item)).map((v) => `"${v}"`);
    return strings.join(' | ');
  }

  if (values) {
    return `"${values}"`;
  }

  return '';
}

type ThemesPropsDef = Record<
  string,
  {
    type: string;
    values?: readonly string[];
    default?: boolean | string;
    required?: boolean;
    responsive?: boolean;
  }
>;

function applyResponsive(value: string | undefined, isResponsive) {
  if (value && isResponsive) {
    return `Responsive<${value}>`;
  }

  return value;
}

function applyStringUnion(value: string | undefined, isEnumString) {
  if (value && isEnumString) {
    return `Union<string, ${value}>`;
  }

  return value;
}

const MAX_TYPE_LENGTH = 60;

function formatDefinitions(definitions: Record<ComponentName, ThemesPropsDef>) {
  const formattedProps = {};

  Object.keys(definitions).forEach((componentName) => {
    const propsDef = definitions[componentName] as ThemesPropsDef;

    formattedProps[componentName] = Object.keys(propsDef).map((key) => {
      const item = propsDef[key];
      const propName = key;
      const description =
        uniqueDescriptions[componentName]?.[propName] || commonDescriptions[propName];

      let value = applyStringUnion(formatValues(item.values), item.type === 'enum | string');
      value = applyResponsive(value, item.responsive);

      const shouldUseSimpleType = item.values
        ? value.length > MAX_TYPE_LENGTH || item.type === 'enum | string'
        : true;

      return {
        name: propName,
        required: item.required,
        typeSimple: shouldUseSimpleType ? item.type : value,
        type: shouldUseSimpleType ? value : undefined,
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
  return <PropsTable data={props[name]} propHeaderFixedWidth={false} />;
}
