import {
	CubeIcon,
	DownloadIcon,
	FigmaLogoIcon,
	GitHubLogoIcon,
} from "@radix-ui/react-icons";

export const iconsRoutes: RouteProps[] = [
	{
		label: "Resources",
		pages: [
			{
				title: "Figma",
				slug: "https://www.figma.com/community/file/1510053249065427020/radix-icons",
				icon: <FigmaLogoIcon />,
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
