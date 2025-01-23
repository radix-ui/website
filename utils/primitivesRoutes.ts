export const primitivesRoutes = [
	{
		label: "Overview",
		pages: [
			{ title: "Introduction", slug: "primitives/docs/overview/introduction" },
			{
				title: "Getting started",
				slug: "primitives/docs/overview/getting-started",
			},
			{
				title: "Accessibility",
				slug: "primitives/docs/overview/accessibility",
			},
			{ title: "Releases", slug: "primitives/docs/overview/releases" },
		],
	},

	{
		label: "Guides",
		pages: [
			{ title: "Styling", slug: "primitives/docs/guides/styling" },
			{ title: "Animation", slug: "primitives/docs/guides/animation" },
			{ title: "Composition", slug: "primitives/docs/guides/composition" },
			{
				title: "Server-side rendering",
				slug: "primitives/docs/guides/server-side-rendering",
			},
		],
	},

	{
		label: "Components",
		pages: [
			{ title: "Accordion", slug: "primitives/docs/components/accordion" },
			{
				title: "Alert Dialog",
				slug: "primitives/docs/components/alert-dialog",
			},
			{
				title: "Aspect Ratio",
				slug: "primitives/docs/components/aspect-ratio",
			},
			{ title: "Avatar", slug: "primitives/docs/components/avatar" },
			{ title: "Checkbox", slug: "primitives/docs/components/checkbox" },
			{ title: "Collapsible", slug: "primitives/docs/components/collapsible" },
			{
				title: "Context Menu",
				slug: "primitives/docs/components/context-menu",
			},
			{ title: "Dialog", slug: "primitives/docs/components/dialog" },
			{
				title: "Dropdown Menu",
				slug: "primitives/docs/components/dropdown-menu",
			},
			{ title: "Form", slug: "primitives/docs/components/form", preview: true },
			{ title: "Hover Card", slug: "primitives/docs/components/hover-card" },
			{ title: "Label", slug: "primitives/docs/components/label" },
			{ title: "Menubar", slug: "primitives/docs/components/menubar" },
			{
				title: "Navigation Menu",
				slug: "primitives/docs/components/navigation-menu",
			},
			{ title: "Popover", slug: "primitives/docs/components/popover" },
			{ title: "Progress", slug: "primitives/docs/components/progress" },
			{ title: "Radio Group", slug: "primitives/docs/components/radio-group" },
			{ title: "Scroll Area", slug: "primitives/docs/components/scroll-area" },
			{ title: "Select", slug: "primitives/docs/components/select" },
			{ title: "Separator", slug: "primitives/docs/components/separator" },
			{ title: "Slider", slug: "primitives/docs/components/slider" },
			{ title: "Switch", slug: "primitives/docs/components/switch" },
			{ title: "Tabs", slug: "primitives/docs/components/tabs" },
			{ title: "Toast", slug: "primitives/docs/components/toast" },
			{ title: "Toggle", slug: "primitives/docs/components/toggle" },
			{
				title: "Toggle Group",
				slug: "primitives/docs/components/toggle-group",
			},
			{ title: "Toolbar", slug: "primitives/docs/components/toolbar" },
			{ title: "Tooltip", slug: "primitives/docs/components/tooltip" },
		],
	},

	{
		label: "Utilities",
		pages: [
			{
				title: "Accessible Icon",
				slug: "primitives/docs/utilities/accessible-icon",
			},
			{
				title: "Direction Provider",
				slug: "primitives/docs/utilities/direction-provider",
			},
			{ title: "Portal", slug: "primitives/docs/utilities/portal" },
			{ title: "Slot", slug: "primitives/docs/utilities/slot" },
			{
				title: "Visually Hidden",
				slug: "primitives/docs/utilities/visually-hidden",
			},
		],
	},
];

export type PageProps = {
	title: string;
	slug: string;
	deprecated?: boolean;
	preview?: boolean;
};

export type RouteProps = {
	label: string;
	pages: PageProps[];
};

export const allPrimitivesRoutes = primitivesRoutes.reduce<
	{
		title: string;
		slug: string;
		deprecated?: boolean;
		preview?: boolean;
	}[]
>((acc, curr: RouteProps) => {
	return [...acc, ...curr.pages];
}, []);
