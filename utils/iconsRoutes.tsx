import {
	CubeIcon,
	DownloadIcon,
	FigmaLogoIcon,
	GitHubLogoIcon,
	IconJarLogoIcon,
	SketchLogoIcon,
} from "@radix-ui/react-icons";

export const iconsRoutes: RouteProps[] = [
	{
		label: "Resources",
		pages: [
			{
				title: "Figma",
				slug: "https://www.figma.com/file/9Df5CaFUEomVzn20gRpaX3/Radix-Icons",
				icon: <FigmaLogoIcon />,
			},
			{
				title: "Sketch",
				slug: "https://raw.githubusercontent.com/radix-ui/icons/master/Radix-Icons.sketch",
				icon: <SketchLogoIcon />,
			},
			{
				title: "IconJar",
				slug: "https://raw.githubusercontent.com/radix-ui/icons/master/Radix-Icons.iconjar.zip",
				icon: <IconJarLogoIcon />,
			},
			{
				title: "SVG",
				slug: "https://raw.githubusercontent.com/radix-ui/icons/master/radix-icons.zip",
				icon: <DownloadIcon />,
			},
			{
				title: "npm",
				slug: "https://www.npmjs.com/package/@radix-ui/react-icons",
				icon: <CubeIcon />,
			},
			{
				title: "GitHub",
				slug: "https://github.com/radix-ui/icons",
				icon: <GitHubLogoIcon />,
			},
		],
	},
];

export type PageProps = {
	title: string;
	slug: string;
	icon: React.ReactNode;
};

export type RouteProps = {
	label: string;
	pages: PageProps[];
};
