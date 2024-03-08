import React from 'react';
import { PropsTable } from './PropsTable';
import * as themes from '@lib/themes';
import { Code, Link as DSLink } from '@radix-ui/themes';
import NextLink from 'next/link';
import { ExternalLink } from './ExternalLink';

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
  AlertDialogContent: themes.alertDialogContentPropDefs,
  Avatar: themes.avatarPropDefs,
  Badge: themes.badgePropDefs,
  Blockquote: themes.blockquotePropDefs,
  Box: themes.boxPropDefs,
  Button: themes.buttonPropDefs,
  CalloutRoot: themes.calloutRootPropDefs,
  Card: themes.cardPropDefs,
  Checkbox: themes.checkboxPropDefs,
  Code: themes.codePropDefs,
  Container: themes.containerPropDefs,
  ContextMenuContent: themes.contextMenuContentPropDefs,
  ContextMenuItem: themes.contextMenuItemPropDefs,
  DialogContent: themes.dialogContentPropDefs,
  DropdownMenuContent: themes.dropdownMenuContentPropDefs,
  DropdownMenuItem: themes.dropdownMenuItemPropDefs,
  Em: themes.emPropDefs,
  Flex: themes.flexPropDefs,
  Grid: themes.gridPropDefs,
  Heading: themes.headingPropDefs,
  HoverCardContent: themes.hoverCardContentPropDefs,
  IconButton: themes.iconButtonPropDefs,
  Inset: themes.insetPropDefs,
  Kbd: themes.kbdPropDefs,
  Link: themes.linkPropDefs,
  PopoverContent: themes.popoverContentPropDefs,
  Quote: themes.quotePropDefs,
  RadioGroup: themes.radioGroupRootPropDefs,
  ScrollArea: themes.scrollAreaPropDefs,
  SegmentedControlRoot: themes.segmentedControlRootPropDefs,
  Section: themes.sectionPropDefs,
  SelectContent: themes.selectContentPropDefs,
  SelectRoot: themes.selectRootPropDefs,
  SelectTrigger: themes.selectTriggerPropDefs,
  Separator: themes.separatorPropDefs,
  Slider: themes.sliderPropDefs,
  Strong: themes.strongPropDefs,
  Switch: themes.switchPropDefs,
  TableCell: themes.tableCellPropDefs,
  TableRoot: themes.tableRootPropDefs,
  TableRow: themes.tableRowPropDefs,
  TabsList: themes.tabsListPropDefs,
  TabNavRoot: themes.tabNavPropDefs,
  TabNavLink: themes.tabNavLinkPropDefs,
  Text: themes.textPropDefs,
  TextArea: themes.textAreaPropDefs,
  TextField: themes.textFieldRootPropDefs,
  TextFieldSlot: themes.textFieldSlotPropDefs,
  Theme: themes.themePropDefs,
  Tooltip: themes.tooltipPropDefs,

  // Common props
  layout: themes.layoutPropDefs,
  margin: themes.marginPropDefs,

  // Layout props
  padding: themes.paddingPropDefs,
  width: themes.widthPropDefs,
  height: themes.heightPropDefs,
  flexChildren: {
    flexBasis: themes.layoutPropDefs.flexBasis,
    flexShrink: themes.layoutPropDefs.flexShrink,
    flexGrow: themes.layoutPropDefs.flexGrow,
  },
  gridChildren: {
    gridColumn: themes.layoutPropDefs.gridColumn,
    gridColumnStart: themes.layoutPropDefs.gridColumnStart,
    gridColumnEnd: themes.layoutPropDefs.gridColumnEnd,
    gridRow: themes.layoutPropDefs.gridRow,
    gridRowStart: themes.layoutPropDefs.gridRowStart,
    gridRowEnd: themes.layoutPropDefs.gridRowEnd,
  },
  position: {
    position: themes.layoutPropDefs.position,
    inset: themes.layoutPropDefs.inset,
    top: themes.layoutPropDefs.top,
    right: themes.layoutPropDefs.right,
    bottom: themes.layoutPropDefs.bottom,
    left: themes.layoutPropDefs.left,
  },
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

const textAlign = (
  <>
    Sets the CSS{' '}
    <ExternalLink href="https://developer.mozilla.org/en-US/docs/Web/CSS/text-align">
      text-align
    </ExternalLink>{' '}
    property.
  </>
);

const textWrap = (
  <>
    Controls the wrapping behavior of the text. See the corresponding{' '}
    <ExternalLink href="https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap">
      text-wrap
    </ExternalLink>{' '}
    values for details.
  </>
);

const uniqueDescriptions: UniqueDescriptions = {
  Avatar: {
    fallback: 'The fallback element to render when an image is not available.',
  },
  Blockquote: {
    wrap: textWrap,
  },
  Code: {
    wrap: textWrap,
  },
  Em: {
    wrap: textWrap,
  },
  Heading: {
    align: textAlign,
    wrap: textWrap,
  },
  Link: {
    wrap: textWrap,
    underline: 'Sets the visibility of the underline affordance.',
  },
  Quote: {
    wrap: textWrap,
  },
  Strong: {
    wrap: textWrap,
  },
  ScrollArea: { scrollbars: 'Controls the scrollable axes.' },
  Text: {
    align: textAlign,
    wrap: textWrap,
  },
  Theme: {
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
  Tooltip: {
    content: 'The content associated with the tooltip.',
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
  highContrast: 'Uses a higher contrast color for the component.',
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
  trim: 'Trims the leading whitespace from the start or end of the text.',
  truncate: (
    <>
      Truncates text with an ellipsis. Be aware of{' '}
      <ExternalLink href="https://css-tricks.com/flexbox-truncated-text/">
        common pitfalls
      </ExternalLink>{' '}
      in flex layouts.
    </>
  ),
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
        typeSimple: shouldUseSimpleType ? applyResponsive(item.type, item.responsive) : value,
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
