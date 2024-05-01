import React from 'react';
import { PropsTable } from './PropsTable';
import * as props from '@utils/themes/props';
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

const {
  // values
  accentColors,
  grayColors,
  breakpoints,
  radii,
  ...propDefs
} = props;

const definitions = {
  ...propDefs,
  flexChildrenPropDefs: {
    flexBasis: props.layoutPropDefs.flexBasis,
    flexShrink: props.layoutPropDefs.flexShrink,
    flexGrow: props.layoutPropDefs.flexGrow,
  },
  gridChildrenPropDefs: {
    gridColumn: props.layoutPropDefs.gridColumn,
    gridColumnStart: props.layoutPropDefs.gridColumnStart,
    gridColumnEnd: props.layoutPropDefs.gridColumnEnd,
    gridRow: props.layoutPropDefs.gridRow,
    gridRowStart: props.layoutPropDefs.gridRowStart,
    gridRowEnd: props.layoutPropDefs.gridRowEnd,
  },
  positionPropDefs: {
    position: props.layoutPropDefs.position,
    inset: props.layoutPropDefs.inset,
    top: props.layoutPropDefs.top,
    right: props.layoutPropDefs.right,
    bottom: props.layoutPropDefs.bottom,
    left: props.layoutPropDefs.left,
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
type ExtractedPropsKeys = ExtractedProps[keyof ExtractedProps];
type CommonDescriptions = {
  [K in ExtractedPropsKeys]?: React.ReactNode;
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
  avatarPropDefs: {
    fallback: 'The fallback element to render when an image is not available.',
  },
  blockquotePropDefs: {
    wrap: textWrap,
  },
  codePropDefs: {
    wrap: textWrap,
  },
  emPropDefs: {
    wrap: textWrap,
  },
  headingPropDefs: {
    align: textAlign,
    wrap: textWrap,
  },
  linkPropDefs: {
    wrap: textWrap,
    underline: 'Sets the visibility of the underline affordance.',
  },
  quotePropDefs: {
    wrap: textWrap,
  },
  scrollAreaPropDefs: { scrollbars: 'Controls the scrollable axes.' },
  strongPropDefs: {
    wrap: textWrap,
  },
  spinnerPropDefs: {
    loading: <>Toggles whether to hide the children and display the spinner.</>,
  },
  textPropDefs: {
    align: textAlign,
    wrap: textWrap,
  },
  themePropDefs: {
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
  tooltipPropDefs: {
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
      <Link href="/themes/docs/theme/radius">radius guide</Link> for more details.
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

const data = formatDefinitions(definitions);

export function ThemesPropsTable({ defs }: { defs: string }) {
  return <PropsTable data={data[defs]} propHeaderFixedWidth={false} />;
}
