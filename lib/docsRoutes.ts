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
      { title: 'Carousel', slug: 'primitives/docs/components/carousel', draft: true },
    ],
  },
];

export const allDocsRoutes = docsRoutes.reduce((acc, curr) => {
  acc = [...acc, ...curr.pages];
  return acc;
}, []);
