export const iconsRoutes = [
  {
    label: 'Resources',
    pages: [
      { title: 'Figma', href: 'https://www.figma.com/file/9Df5CaFUEomVzn20gRpaX3/Radix-Icons' },
      {
        title: 'Sketch',
        href: 'https://raw.githubusercontent.com/radix-ui/icons/master/Radix-Icons.sketch',
      },
      {
        title: 'IconJar',
        href: 'https://raw.githubusercontent.com/radix-ui/icons/master/Radix-Icons.iconjar.zip',
      },
      {
        title: 'SVG',
        href: 'https://raw.githubusercontent.com/radix-ui/icons/master/radix-icons.zip',
      },
      { title: 'npm', href: 'https://www.npmjs.com/package/@radix-ui/react-icons' },
      { title: 'GitHub', href: 'https://github.com/radix-ui/icons' },
    ],
  },
];

export type PageProps = {
  title: string;
  href: string;
};

export type RouteProps = {
  label: string;
  pages: PageProps[];
};
