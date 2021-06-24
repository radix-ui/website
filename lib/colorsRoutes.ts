export const colorsRoutes = [
  {
    label: 'Getting Started',
    pages: [
      {
        title: 'Installation',
        slug: 'docs/colors/getting-started/installation',
        draft: false,
      },
      {
        title: 'Usage',
        slug: 'docs/colors/getting-started/usage',
        draft: false,
      },
      { title: 'Aliasing', slug: 'docs/colors/getting-started/aliasing', draft: false },
    ],
  },

  {
    label: 'Palette Composition',
    pages: [
      {
        title: 'The Scales',
        slug: 'docs/colors/palette-composition/the-scales',
        draft: false,
      },
      {
        title: 'Composing a palette',
        slug: 'docs/colors/palette-composition/composing-a-palette',
        draft: false,
      },
      {
        title: 'Understanding the scale',
        slug: 'docs/colors/palette-composition/understanding-the-scale',
        draft: false,
      },
    ],
  },

  {
    label: 'Tests',
    pages: [
      { title: 'Balance', slug: 'docs/colors/tests/balance', draft: false },
      { title: 'Contrast', slug: 'docs/colors/tests/contrast', draft: false },
    ],
  },
];

export const allColorsRoutes = colorsRoutes.reduce((acc, curr) => {
  acc = [...acc, ...curr.pages.filter((p) => p.draft !== true)];
  return acc;
}, []);
