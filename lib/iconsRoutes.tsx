import {
  CubeIcon,
  DownloadIcon,
  FigmaLogoIcon,
  GitHubLogoIcon,
  IconJarLogoIcon,
  SketchLogoIcon,
} from '@radix-ui/react-icons';

export const iconsRoutes: RouteProps[] = [
  {
    label: 'Resources',
    pages: [
      {
        title: 'Figma',
        href: 'https://www.figma.com/file/9Df5CaFUEomVzn20gRpaX3/Radix-Icons',
        icon: <FigmaLogoIcon />,
      },
      {
        title: 'Sketch',
        href: 'https://raw.githubusercontent.com/radix-ui/icons/master/Radix-Icons.sketch',
        icon: <SketchLogoIcon />,
      },
      {
        title: 'IconJar',
        href: 'https://raw.githubusercontent.com/radix-ui/icons/master/Radix-Icons.iconjar.zip',
        icon: <IconJarLogoIcon />,
      },
      {
        title: 'SVG',
        href: 'https://raw.githubusercontent.com/radix-ui/icons/master/radix-icons.zip',
        icon: <DownloadIcon />,
      },
      {
        title: 'npm',
        href: 'https://www.npmjs.com/package/@radix-ui/react-icons',
        icon: <CubeIcon />,
      },
      { title: 'GitHub', href: 'https://github.com/radix-ui/icons', icon: <GitHubLogoIcon /> },
    ],
  },
];

export type PageProps = {
  title: string;
  href: string;
  icon: React.ReactNode;
};

export type RouteProps = {
  label: string;
  pages: PageProps[];
};
