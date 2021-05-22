export const colorsRoutes = [
  {
    label: 'Overview',
    pages: [
      { title: 'Installation', slug: 'colors/docs/overview/installation', draft: false },
      { title: 'Usage', slug: 'colors/docs/overview/usage', draft: false },
      { title: 'Aliasing', slug: 'colors/docs/overview/aliasing', draft: false },
      { title: 'Use Cases', slug: 'colors/docs/overview/use-cases', draft: false },
    ],
  },

  {
    label: 'Palette Composition',
    pages: [{ title: 'Brand', slug: 'colors/docs/palette-composition/brand', draft: false }],
  },

  {
    label: 'Test',
    pages: [
      { title: 'Page 1', slug: 'colors/docs/test/page1', draft: false },
      { title: 'Page 2', slug: 'colors/docs/test/page2', draft: false },
    ],
  },
];

export const allColorsRoutes = colorsRoutes.reduce((acc, curr) => {
  acc = [...acc, ...curr.pages.filter((p) => p.draft !== true)];
  return acc;
}, []);
