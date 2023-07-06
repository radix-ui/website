export const themesRoutes = [
  {
    label: 'Overview',
    pages: [
      { title: 'Getting started', slug: 'docs/themes/overview/getting-started' },
      { title: 'Principles', slug: 'docs/themes/overview/principles' },
    ],
  },
  {
    label: 'Theme',
    pages: [
      { title: 'Overview', slug: 'docs/themes/theme/overview' },
      { title: 'Configuration', slug: 'docs/themes/theme/configuration' },
      { title: 'Tokens', slug: 'docs/themes/theme/tokens' },
      { title: 'Usage', slug: 'docs/themes/theme/usage' },
    ],
  },

  {
    label: 'Layout',
    pages: [
      { title: 'Box', slug: 'docs/themes/components/box' },
      { title: 'Flex', slug: 'docs/themes/components/flex' },
      { title: 'Grid', slug: 'docs/themes/components/grid' },
      { title: 'Container', slug: 'docs/themes/components/container' },
      { title: 'Section', slug: 'docs/themes/components/section' },
    ],
  },
  {
    label: 'Typography',
    pages: [
      { title: 'Text', slug: 'docs/themes/components/text' },
      { title: 'Heading', slug: 'docs/themes/components/heading' },
      { title: 'Blockquote', slug: 'docs/themes/components/blockquote' },
      { title: 'Quote', slug: 'docs/themes/components/quote' },
      { title: 'Em', slug: 'docs/themes/components/em' },
      { title: 'Strong', slug: 'docs/themes/components/strong' },
      { title: 'Code', slug: 'docs/themes/components/code' },
      { title: 'Kbd', slug: 'docs/themes/components/kbd' },
    ],
  },

  {
    label: 'Components',
    pages: [
      { title: 'Button', slug: 'docs/themes/components/button' },
      { title: 'Checkbox', slug: 'docs/themes/components/checkbox' },
      { title: 'Icon Button', slug: 'docs/themes/components/icon-button' },
      { title: 'Radio Group', slug: 'docs/themes/components/radio-group' },
      { title: 'Slider', slug: 'docs/themes/components/slider' },
      { title: 'Switch', slug: 'docs/themes/components/switch' },
      { title: 'Text Field', slug: 'docs/themes/components/text-field' },
      { title: 'Text Area', slug: 'docs/themes/components/text-area' },
      { title: 'Link', slug: 'docs/themes/components/link' },
      { title: 'Separator', slug: 'docs/themes/components/separator' },
      { title: 'Badge', slug: 'docs/themes/components/badge' },
      { title: 'Dialog', slug: 'docs/themes/components/dialog' },
      { title: 'Alert Dialog', slug: 'docs/themes/components/alert-dialog' },
      { title: 'Avatar', slug: 'docs/themes/components/avatar' },
      { title: 'Aspect Ratio', slug: 'docs/themes/components/aspect-ratio' },
      { title: 'Select', slug: 'docs/themes/components/select' },
      { title: 'Tooltip', slug: 'docs/themes/components/tooltip' },
      { title: 'Scroll Area', slug: 'docs/themes/components/scroll-area' },
      { title: 'Popover', slug: 'docs/themes/components/popover' },
      { title: 'Hover Card', slug: 'docs/themes/components/hover-card' },
      { title: 'Tabs', slug: 'docs/themes/components/tabs' },
      { title: 'Dropdown Menu', slug: 'docs/themes/components/dropdown-menu' },
      { title: 'Context Menu', slug: 'docs/themes/components/context-menu' },
    ],
  },

  {
    label: 'Utilities',
    pages: [
      { title: 'Accessible Icon', slug: 'docs/themes/components/accessible-icon' },
      { title: 'Portal', slug: 'docs/themes/components/portal' },
      { title: 'Slot', slug: 'docs/themes/components/slot' },
      { title: 'Theme', slug: 'docs/themes/components/theme' },
      { title: 'Visually Hidden', slug: 'docs/themes/components/visually-hidden' },
    ],
  },
];

export type PageProps = {
  title: string;
  slug: string;
  deprecated?: boolean;
  preview?: boolean;
};

export type RouteProps = {
  label: string;
  pages: PageProps[];
};

export const allThemesRoutes = themesRoutes.reduce((acc, curr: RouteProps) => {
  return [...acc, ...curr.pages];
}, []);
