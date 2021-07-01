export const designSystemRoutes = [
  {
    label: 'Overview',
    pages: [
      { title: 'Introduction', slug: 'docs/design-system/overview/introduction', draft: false },
    ],
  },

  {
    label: 'Components',
    pages: [{ title: 'Button', slug: 'docs/design-system/components/button', draft: false }],
  },
];

export const allDesignSystemRoutes = designSystemRoutes.reduce((acc, curr) => {
  acc = [...acc, ...curr.pages.filter((p) => p.draft !== true)];
  return acc;
}, []);
