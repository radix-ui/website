export const themesRoutes = [
  {
    label: 'Overview',
    pages: [
      { title: 'Introduction', slug: 'docs/themes/overview/introduction' },
      { title: 'Getting started', slug: 'docs/themes/overview/getting-started' },
      { title: 'Design principles', slug: 'docs/themes/overview/design-principles' },
      { title: 'FAQs', slug: 'docs/themes/overview/faqs' },
      // { title: 'Releases', slug: 'docs/themes/overview/releases' },
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
    pages: [{ title: 'Context Menu', slug: 'docs/themes/components/context-menu' }],
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
      { title: 'Sup', slug: 'docs/themes/components/sup' },
      { title: 'Code', slug: 'docs/themes/components/code' },
      { title: 'Kbd', slug: 'docs/themes/components/kbd' },
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
    label: 'Utilities',
    pages: [
      { title: 'Accessible Icon', slug: 'docs/themes/components/accessible-icon' },
      { title: 'Visually Hidden', slug: 'docs/themes/components/visually-hidden' },
      { title: 'Portal', slug: 'docs/themes/components/portal' },
      { title: 'Provider', slug: 'docs/themes/components/provider' },
      { title: 'Slot', slug: 'docs/themes/components/slot' },
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
