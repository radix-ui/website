export const colorsRoutes = [
  {
    label: 'Overview',
    pages: [
      {
        title: 'Installation',
        slug: 'colors/docs/overview/installation',
        draft: false,
      },
      {
        title: 'Usage',
        slug: 'colors/docs/overview/usage',
        draft: false,
      },
      {
        title: 'Aliasing',
        slug: 'colors/docs/overview/aliasing',
        draft: false,
      },
      {
        title: 'Releases',
        slug: 'colors/docs/overview/releases',
        draft: false,
      },
    ],
  },

  {
    label: 'Palette Composition',
    pages: [
      {
        title: 'Scales',
        slug: 'colors/docs/palette-composition/scales',
        draft: false,
      },
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
