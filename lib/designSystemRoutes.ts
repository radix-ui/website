export const designSystemRoutes = [
  {
    label: 'Overview',
    pages: [
      { title: 'Introduction', slug: 'design-system/docs/overview/introduction', draft: false },
    ],
  },

  {
    label: 'Components',
    pages: [{ title: 'Button', slug: 'design-system/docs/components/button', draft: false }],
  },
];

export const allDesignSystemRoutes = designSystemRoutes.reduce((acc, curr) => {
  acc = [...acc, ...curr.pages.filter((p) => p.draft !== true)];
  return acc;
}, []);
