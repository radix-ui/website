export const colorsRoutes = [
  {
    label: 'Getting Started',
    pages: [
      {
        title: 'Installation',
        slug: 'colors/docs/getting-started/installation',
        draft: false,
      },
      {
        title: 'Usage',
        slug: 'colors/docs/getting-started/usage',
        draft: false,
      },
      { title: 'Aliasing', slug: 'colors/docs/getting-started/aliasing', draft: false },
      {
        title: 'The Scales',
        slug: 'colors/docs/getting-started/the-scales',
        draft: false,
      },
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
