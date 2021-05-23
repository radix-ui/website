export const colorsRoutes = [
  {
    label: 'Getting Started',
    pages: [
      { title: 'Installation', slug: 'colors/docs/getting-started/installation', draft: false },
      { title: 'Usage', slug: 'colors/docs/getting-started/usage', draft: false },
      { title: 'Aliasing', slug: 'colors/docs/getting-started/aliasing', draft: false },
      { title: 'Accessibility', slug: 'colors/docs/getting-started/accessibility', draft: false },
      { title: 'Use Cases', slug: 'colors/docs/getting-started/use-cases', draft: false },
    ],
  },

  {
    label: 'Palette Composition',
    pages: [{ title: 'Brand', slug: 'colors/docs/palette-composition/brand', draft: false }],
  },

  {
    label: 'Tests',
    pages: [
      { title: 'Balance', slug: 'colors/docs/tests/balance', draft: false },
      { title: 'Contrast', slug: 'colors/docs/tests/contrast', draft: false },
    ],
  },
];

export const allColorsRoutes = colorsRoutes.reduce((acc, curr) => {
  acc = [...acc, ...curr.pages.filter((p) => p.draft !== true)];
  return acc;
}, []);
