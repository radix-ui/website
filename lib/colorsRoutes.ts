export const colorsRoutes = [
  {
    label: 'Getting Started',
    pages: [
      {
        title: 'Usage with Stitches',
        slug: 'colors/docs/getting-started/usage-with-stitches',
        draft: false,
      },
      {
        title: 'Usage with CSS-in-JS',
        slug: 'colors/docs/getting-started/usage-with-css-in-js',
        draft: false,
      },
      { title: 'Usage with CSS', slug: 'colors/docs/getting-started/usage-with-css', draft: false },
      { title: 'Aliasing', slug: 'colors/docs/getting-started/aliasing', draft: false },
      { title: 'Accessibility', slug: 'colors/docs/getting-started/accessibility', draft: false },
    ],
  },

  {
    label: 'Palette Composition',
    pages: [
      {
        title: 'Composing a palette',
        slug: 'colors/docs/palette-composition/composing-a-palette',
        draft: false,
      },
      {
        title: 'Understanding the scale',
        slug: 'colors/docs/palette-composition/understanding-the-scale',
        draft: false,
      },
    ],
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
