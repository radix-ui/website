export const colorsRoutes = [
  {
    label: 'Overview',
    pages: [{ title: 'Introduction', slug: 'colors/docs/overview/introduction', draft: false }],
  },
];

export const allColorsRoutes = colorsRoutes.reduce((acc, curr) => {
  acc = [...acc, ...curr.pages.filter((p) => p.draft !== true)];
  return acc;
}, []);
