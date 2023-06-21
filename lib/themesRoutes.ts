export const themesRoutes = [
  {
    label: 'Overview',
    pages: [
      { title: 'Introduction', slug: 'docs/themes/' },
      { title: 'Getting started', slug: 'docs/themes/' },
      { title: 'Design principles', slug: 'docs/themes/' },
      { title: 'FAQs', slug: 'docs/themes/' },
      { title: 'Releases', slug: 'docs/themes/' },
    ],
  },
  {
    label: 'Guides',
    pages: [
      { title: 'Theme configuration', slug: 'docs/themes/' },
      { title: 'Using tokens', slug: 'docs/themes/' },
    ],
  },
  {
    label: 'All',
    pages: [
      { title: 'Accessible Icon', slug: 'docs/themes/components/accessible-icon' },
      { title: 'Alert Dialog', slug: 'docs/themes/components/alert-dialog' },
      { title: 'Aspect Ratio', slug: 'docs/themes/components/aspect-ratio' },
      { title: 'Avatar', slug: 'docs/themes/components/avatar' },
      { title: 'Badge', slug: 'docs/themes/components/badge' },
      { title: 'Blockquote', slug: 'docs/themes/components/blockquote' },
      { title: 'Box', slug: 'docs/themes/components/box' },
      { title: 'Code', slug: 'docs/themes/components/code' },
      { title: 'Container', slug: 'docs/themes/components/container' },
      { title: 'Context Menu', slug: 'docs/themes/components/context-menu' },
      { title: 'Dialog', slug: 'docs/themes/components/dialog' },
      { title: 'Dropdown Menu', slug: 'docs/themes/components/dropdown-menu' },
      { title: 'Em', slug: 'docs/themes/components/em' },
      { title: 'Flex', slug: 'docs/themes/components/flex' },
      { title: 'Grid', slug: 'docs/themes/components/grid' },
      { title: 'Hover Card', slug: 'docs/themes/components/hover-card' },
      { title: 'Kbd', slug: 'docs/themes/components/kbd' },
      { title: 'Link', slug: 'docs/themes/components/link' },
      { title: 'Popover', slug: 'docs/themes/components/popover' },
      { title: 'Portal', slug: 'docs/themes/components/portal' },
      { title: 'Quote', slug: 'docs/themes/components/quote' },
      { title: 'Scroll Area', slug: 'docs/themes/components/scroll-area' },
      { title: 'Section', slug: 'docs/themes/components/section' },
      { title: 'Select', slug: 'docs/themes/components/select' },
      { title: 'Separator', slug: 'docs/themes/components/separator' },
      { title: 'Slot', slug: 'docs/themes/components/slot' },
      { title: 'Strong', slug: 'docs/themes/components/strong' },
      { title: 'Sub', slug: 'docs/themes/components/sub' },
      { title: 'Sup', slug: 'docs/themes/components/sup' },
      { title: 'Tabs', slug: 'docs/themes/components/tabs' },
      { title: 'Tooltip', slug: 'docs/themes/components/tooltip' },
      { title: 'Visually Hidden', slug: 'docs/themes/components/visually-hidden' },
    ],
  },
  {
    label: 'Forms',
    pages: [
      { title: 'Button', slug: 'docs/themes/components/button' },
      { title: 'Checkbox', slug: 'docs/themes/components/checkbox' },
      { title: 'Icon Button', slug: 'docs/themes/components/icon-button' },
      { title: 'Radio Group', slug: 'docs/themes/components/radio-group' },
      { title: 'Slider', slug: 'docs/themes/components/slider' },
      { title: 'Switch', slug: 'docs/themes/components/switch' },
      { title: 'Text Field', slug: 'docs/themes/components/text-field' },
      { title: 'Text Area', slug: 'docs/themes/components/text-area' },
    ],
  },
  {
    label: 'Typography',
    pages: [
      { title: 'Text', slug: 'docs/themes/components/text' },
      { title: 'Heading', slug: 'docs/themes/components/heading' },
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
