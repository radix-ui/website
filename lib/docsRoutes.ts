export const docsRoutes = [
  {
    label: 'Overview',
    pages: [
      { title: 'Introduction', slug: 'primitives/docs/overview/introduction' },
      { title: 'Getting started', slug: 'primitives/docs/overview/getting-started' },
      { title: 'Styling', slug: 'primitives/docs/overview/styling' },
      { title: 'Animation', slug: 'primitives/docs/overview/animation' },
      { title: 'Accessibility', slug: 'primitives/docs/overview/accessibility' },
      { title: 'Server side rendering', slug: 'primitives/docs/overview/server-side-rendering' },
      { title: 'Releases', slug: 'primitives/docs/overview/releases' },
    ],
  },

  {
    label: 'Components',
    pages: [
      { title: 'Accordion', slug: 'primitives/docs/components/accordion' },
      { title: 'Alert Dialog', slug: 'primitives/docs/components/alert-dialog' },
      { title: 'Avatar', slug: 'primitives/docs/components/avatar' },
      { title: 'Carousel', slug: 'primitives/docs/components/carousel', draft: true },
      { title: 'Checkbox', slug: 'primitives/docs/components/checkbox' },
      { title: 'Collpasible', slug: 'primitives/docs/components/collpasible' },
      { title: 'Context Menu', slug: 'primitives/docs/components/context-menu' },
      { title: 'Dialog', slug: 'primitives/docs/components/dialog' },
      { title: 'Dropdown Menu', slug: 'primitives/docs/components/dropdown-menu' },
      { title: 'Hover Card', slug: 'primitives/docs/components/hover-card', draft: true },
      { title: 'Menubar', slug: 'primitives/docs/components/menubar', draft: true },
      { title: 'Popover', slug: 'primitives/docs/components/popover' },
      { title: 'Progress', slug: 'primitives/docs/components/progress' },
      { title: 'Radio Group', slug: 'primitives/docs/components/radio-group' },
      { title: 'Scroll Area', slug: 'primitives/docs/components/scroll-area' },
      { title: 'Select', slug: 'primitives/docs/components/select', draft: true },
      { title: 'Separator', slug: 'primitives/docs/components/separator' },
      { title: 'Slider', slug: 'primitives/docs/components/slider' },
      { title: 'Switch', slug: 'primitives/docs/components/switch' },
      { title: 'Tabs', slug: 'primitives/docs/components/tabs' },
      { title: 'Toggle', slug: 'primitives/docs/components/toggle' },
      { title: 'Toggle Group', slug: 'primitives/docs/components/toggle-group' },
      { title: 'Toolbar', slug: 'primitives/docs/components/toolbar' },
    ],
  },
];

export const allDocsRoutes = docsRoutes.reduce((acc, curr) => {
  acc = [...acc, ...curr.pages];
  return acc;
}, []);
