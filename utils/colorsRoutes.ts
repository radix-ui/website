export const colorsRoutes = [
	{
		label: "Overview",
		pages: [
			{
				title: "Installation",
				slug: "colors/docs/overview/installation",
				draft: false,
			},
			{
				title: "Usage",
				slug: "colors/docs/overview/usage",
				draft: false,
			},
			{
				title: "Aliasing",
				slug: "colors/docs/overview/aliasing",
				draft: false,
			},
			{
				title: "Custom palettes",
				slug: "colors/docs/overview/custom-palettes",
				draft: false,
			},
			{
				title: "Releases",
				slug: "colors/docs/overview/releases",
				draft: false,
			},
		],
	},

	{
		label: "Palette composition",
		pages: [
			{
				title: "Scales",
				slug: "colors/docs/palette-composition/scales",
				draft: false,
			},
			{
				title: "Composing a palette",
				slug: "colors/docs/palette-composition/composing-a-palette",
				draft: false,
			},
			{
				title: "Understanding the scale",
				slug: "colors/docs/palette-composition/understanding-the-scale",
				draft: false,
			},
		],
	},
];

export const allColorsRoutes = colorsRoutes.reduce<
	{ title: string; slug: string; draft: boolean }[]
>((acc, curr) => {
	acc = [...acc, ...curr.pages.filter((p) => p.draft !== true)];
	return acc;
}, []);
