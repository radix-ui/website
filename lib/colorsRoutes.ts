export const colorsRoutes = [
  {
    label: 'Overview',
    pages: [{ title: 'Introduction', slug: 'colors/docs/overview/introduction', draft: false }],
  },

  {
    label: 'Test',
    pages: [
      { title: 'Page1', slug: 'colors/docs/test/page1', draft: false },
      { title: 'Page2', slug: 'colors/docs/test/page2', draft: false },
    ],
  },
];

export const allColorsRoutes = colorsRoutes.reduce((acc, curr) => {
  acc = [...acc, ...curr.pages.filter((p) => p.draft !== true)];
  return acc;
}, []);
