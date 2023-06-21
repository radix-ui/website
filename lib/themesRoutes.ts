export const themesRoutes = [
  {
    label: 'Overview',
    pages: [
      { title: 'Introduction', slug: 'docs/themes/overview/introduction' },
      { title: 'Getting started', slug: 'docs/themes/overview/getting-started' },
      { title: 'Design principles', slug: 'docs/themes/overview/design-principles' },
      { title: 'FAQs', slug: 'docs/themes/overview/faqs' },
      { title: 'Releases', slug: 'docs/themes/overview/releases' },
    ],
  },
  {
    label: 'Guides',
    pages: [
      { title: 'Theme configuration', slug: 'docs/themes/guides/theme-configuration' },
      { title: 'Using tokens', slug: 'docs/themes/guides/using-tokens' },
    ],
  },
  {
    label: 'Todo',
    pages: [
      { title: 'Accessible Icon', slug: 'docs/themes/components/accessible-icon' },
      { title: 'Aspect Ratio', slug: 'docs/themes/components/aspect-ratio' },
      { title: 'Avatar', slug: 'docs/themes/components/avatar' },
      { title: 'Blockquote', slug: 'docs/themes/components/blockquote' },
      { title: 'Box', slug: 'docs/themes/components/box' },
      { title: 'Code', slug: 'docs/themes/components/code' },
      { title: 'Container', slug: 'docs/themes/components/container' },
      { title: 'Context Menu', slug: 'docs/themes/components/context-menu' },
      { title: 'Dropdown Menu', slug: 'docs/themes/components/dropdown-menu' },
      { title: 'Em', slug: 'docs/themes/components/em' },
      { title: 'Flex', slug: 'docs/themes/components/flex' },
      { title: 'Grid', slug: 'docs/themes/components/grid' },
      { title: 'Hover Card', slug: 'docs/themes/components/hover-card' },
      { title: 'Kbd', slug: 'docs/themes/components/kbd' },
      { title: 'Popover', slug: 'docs/themes/components/popover' },
      { title: 'Quote', slug: 'docs/themes/components/quote' },
      { title: 'Scroll Area', slug: 'docs/themes/components/scroll-area' },
      { title: 'Section', slug: 'docs/themes/components/section' },
      { title: 'Select', slug: 'docs/themes/components/select' },
      { title: 'Slot', slug: 'docs/themes/components/slot' },
      { title: 'Strong', slug: 'docs/themes/components/strong' },
      { title: 'Sup', slug: 'docs/themes/components/sup' },
      { title: 'Tabs', slug: 'docs/themes/components/tabs' },
      { title: 'Tooltip', slug: 'docs/themes/components/tooltip' },
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
      { title: 'Text', slug: 'docs/themes/components/text' },
      { title: 'Heading', slug: 'docs/themes/components/heading' },
      { title: 'Link', slug: 'docs/themes/components/link' },
      { title: 'Separator', slug: 'docs/themes/components/separator' },
      { title: 'Badge', slug: 'docs/themes/components/badge' },
      { title: 'Dialog', slug: 'docs/themes/components/dialog' },
      { title: 'Alert Dialog', slug: 'docs/themes/components/alert-dialog' },
    ],
  },
  {
    label: 'Utilities',
    pages: [
      { title: 'Visually Hidden', slug: 'docs/themes/components/visually-hidden' },
      { title: 'Portal', slug: 'docs/themes/components/portal' },
      { title: 'Provider', slug: 'docs/themes/components/provider' },
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
