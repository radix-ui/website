"use client";
import * as React from "react";
import {
	Box,
	Flex,
	Button,
	IconButton,
	Tooltip,
	Tabs,
	Select,
	Theme,
	Grid,
} from "@radix-ui/themes";
import sdk from "@stackblitz/sdk";
import { LightningBoltIcon } from "@radix-ui/react-icons";
import { flushSync } from "react-dom";
import camelCase from "lodash.camelcase";
import kebabCase from "lodash.kebabcase";
import upperFirst from "lodash.upperfirst";
import { isValidCssLib, useCssLibPreference } from "./css-lib-preference";
import { FrontmatterContext } from "./mdx-components";
import { CSS_LIB_NAMES, DEFAULT_CSS_LIB } from "@utils/constants";
import type { CssLib } from "@utils/constants";
import styles from "./hero-code-block.module.css";
import { CodeBlock } from "./code-block";

export const HeroCodeBlock = ({
	children,
	cssLib: cssLibProp,
}: {
	children?: React.ReactNode;
	cssLib: CssLib;
}) => {
	const frontmatter = React.useContext(FrontmatterContext);
	const [preferredCssLib, setPreferredCssLib] = useCssLibPreference();
	const cssLibCandidate = cssLibProp ?? preferredCssLib;
	const [isCodeExpanded, setIsCodeExpanded] = React.useState(false);

	const snippets = React.Children.toArray(children)
		.map((pre) => {
			if (pre && typeof pre === "object" && "props" in pre) {
				return {
					id: (pre.props as any).title as string,
					title: (pre.props as any).title as string,
					cssLib: (pre.props as any).cssLib as CssLib,
					children: React.Children.only((pre.props as any).children).props
						?.children as React.ReactNode,
					source: (pre.props as any).source,
				};
			}
		})
		.filter((v): v is NonNullable<typeof v> => !!v);

	const contentRef = React.useRef<HTMLDivElement>(null);
	const availableCssLibs = snippets.map(({ cssLib }) => cssLib).filter(onlyUnique);
	const usedCssLib = availableCssLibs.includes(cssLibCandidate) ? cssLibCandidate : DEFAULT_CSS_LIB;
	const currentTabs = snippets.filter(({ cssLib }) => cssLib === usedCssLib);
	const sources = currentTabs.reduce((sources, tab) => {
		return { ...sources, [tab.title]: tab.source };
	}, {});

	const [currentTabValue, setCurrentTabValue] = React.useState(() => currentTabs[0]?.id);

	React.useEffect(() => {
		// Reset tab if the current one isn't available
		const tabExists = currentTabs.find((tab) => tab.id === currentTabValue);
		if (!tabExists) setCurrentTabValue(currentTabs[0]?.id);
	}, [currentTabValue, currentTabs]);

	return (
		<Box className={styles.DemoContainer} data-search-exclude position="relative">
			<Flex
				display="inline-flex"
				position="absolute"
				align="center"
				justify="end"
				gap="1"
				top="0"
				right="0"
				mt="-7"
				mr="2"
			>
				<Tooltip
					className="radix-themes-custom-fonts"
					content={`Open ${CSS_LIB_NAMES[usedCssLib]} demo in StackBlitz`}
				>
					<Theme appearance="dark" hasBackground={false}>
						<IconButton
							className={styles.SandboxButton}
							variant="soft"
							type="button"
							color="gray"
							highContrast
							onClick={() => openStackBlitz(frontmatter.name!, sources, usedCssLib)}
						>
							<LightningBoltIcon />
						</IconButton>
					</Theme>
				</Tooltip>
			</Flex>

			<Box
				data-code-block-content
				position="relative"
				style={{
					border: "1px solid var(--gray-a5)",
					borderBottomLeftRadius: "var(--radius-4)",
					borderBottomRightRadius: "var(--radius-4)",
					borderTop: "none",
				}}
			>
				<Tabs.Root
					value={currentTabValue}
					onValueChange={(value) => {
						setCurrentTabValue(value);
						setIsCodeExpanded(true);
					}}
				>
					<Tabs.List
						style={{
							position: "relative",
							backgroundColor: "var(--color-panel-solid)",
							marginBottom: -1,
						}}
					>
						{currentTabs.map((tab) => (
							<Tabs.Trigger key={tab.id} value={tab.id}>
								{tab.title}
							</Tabs.Trigger>
						))}

						<Flex ml="auto" my="auto" gap="2">
							<CodeBlock.CopyButton size="1" />

							{cssLibProp === undefined && availableCssLibs.length > 1 ? (
								<Select.Root
									aria-label="Choose a styling solution"
									size="1"
									value={preferredCssLib}
									onValueChange={(lib) => {
										if (isValidCssLib(lib)) setPreferredCssLib(lib);
									}}
								>
									<Select.Trigger variant="soft" color="gray" mr="2" style={{ minWidth: 115 }} />
									<Select.Content className="radix-themes-custom-fonts">
										{availableCssLibs.map((lib) => (
											<Select.Item key={lib} value={lib}>
												{CSS_LIB_NAMES[lib]}
											</Select.Item>
										))}
									</Select.Content>
								</Select.Root>
							) : null}
						</Flex>
					</Tabs.List>

					{currentTabs.map((tab) => (
						<Tabs.Content key={tab.id} value={tab.id} asChild>
							<CodeBlock.Content id="code-block-content" ref={contentRef} tabIndex={-1}>
								<Grid
									position="relative"
									width="100%"
									rows={isCodeExpanded ? "1fr" : "150px"}
									maxHeight="70vh"
									minHeight="150px"
								>
									<CodeBlock.Pre overflow={isCodeExpanded ? "scroll" : "hidden"}>
										<code>{tab.children}</code>

										<Box height="64px" />
										<Flex align="end" justify="center" className={styles.CollapsibleGradient}>
											<Box
												position="relative"
												style={{
													backgroundColor: "var(--color-panel-solid)",
												}}
											>
												<Button
													aria-controls="code-block-content"
													aria-expanded={isCodeExpanded}
													type="button"
													size="1"
													variant="soft"
													highContrast
													color="gray"
													onClick={() => {
														let isExpanded = false;
														flushSync(() => {
															setIsCodeExpanded((isCodeExpanded) => {
																isExpanded = !isCodeExpanded;
																return isExpanded;
															});
														});
														if (isExpanded) {
															contentRef.current?.focus();
														}
													}}
												>
													{isCodeExpanded ? "Collapse" : "Expand"} code
												</Button>
											</Box>
										</Flex>
									</CodeBlock.Pre>
								</Grid>
							</CodeBlock.Content>
						</Tabs.Content>
					))}
				</Tabs.Root>
			</Box>
		</Box>
	);
};

const onlyUnique = <T,>(value: T, index: number, self: T[]) => self.indexOf(value) === index;

const openStackBlitz = (componentName: string, sources: Record<string, string>, cssLib: CssLib) => {
	let files: Record<string, string> = {};
	switch (cssLib) {
		case "css":
			files = makeCssConfig(componentName, sources);
			break;
		case "css-modules":
			files = makeCssModulesConfig(componentName, sources);
			break;
		case "tailwind":
			files = makeTailwindConfig(componentName, sources);
			break;
	}

	sdk.openProject(
		{
			title: `Radix Primitives ${componentName} demo`,
			description: `${CSS_LIB_NAMES[cssLib]} demo of the Radix Primitives ${componentName} component`,
			template: "node",
			files,
		},
		{
			newWindow: true,
			openFile: `${kebabCase(componentName)}.jsx`,
		},
	);
};

const makeCssConfig = (
	componentName: string,
	sources: Record<string, string>,
): Record<string, string> => {
	const dependencies = {
		"radix-ui": "latest",
		react: "latest",
		"react-dom": "latest",
		"@radix-ui/colors": "latest",
		"@radix-ui/react-icons": "latest",
		classnames: "latest",
	};

	const devDependencies = {
		vite: "latest",
		"@vitejs/plugin-react": "latest",
	};

	return {
		"package.json": makePackageJson(dependencies, devDependencies),
		...viteConfig,
		[`${kebabCase(componentName)}.jsx`]: sources["index.jsx"],
		"index.jsx": makeIndexEntry(componentName),
		"global.css": globalCss,
		"styles.css": sources["styles.css"],
	};
};

const makeCssModulesConfig = (
	componentName: string,
	sources: Record<string, string>,
): Record<string, string> => {
	const dependencies = {
		"radix-ui": "latest",
		react: "latest",
		"react-dom": "latest",
		"@radix-ui/colors": "latest",
		"@radix-ui/react-icons": "latest",
		classnames: "latest",
	};

	const devDependencies = {
		vite: "latest",
		"@vitejs/plugin-react": "latest",
	};

	return {
		"package.json": makePackageJson(dependencies, devDependencies),
		...viteConfig,
		[`${kebabCase(componentName)}.jsx`]: sources["index.jsx"],
		"index.jsx": makeIndexEntry(componentName),
		"global.css": globalCss,
		"styles.module.css": sources["styles.module.css"],
	};
};

const makeTailwindConfig = (
	componentName: string,
	sources: Record<string, string>,
): Record<string, string> => {
	const dependencies = {
		"radix-ui": "latest",
		react: "latest",
		"react-dom": "latest",
		"@radix-ui/colors": "latest",
		"@radix-ui/react-icons": "latest",
		classnames: "latest",
	};

	const devDependencies = {
		vite: "latest",
		"@vitejs/plugin-react": "latest",
		tailwindcss: "latest",
		"@tailwindcss/vite": "latest",
	};

	return {
		"package.json": makePackageJson(dependencies, devDependencies),
		...viteConfig,
		"vite.config.js": `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})`,
		"tailwind.config.js": sources["tailwind.config.js"],
		"index.jsx": makeIndexEntry(componentName),
		[`${kebabCase(componentName)}.jsx`]: sources["index.jsx"],
		"global.css": `@import "tailwindcss";
@config "./tailwind.config.js";
@source "./${kebabCase(componentName)}.jsx";

body {
  font-family: system-ui;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(330deg, hsl(272, 53%, 50%) 0%, hsl(226, 68%, 56%) 100%);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: 120px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}`,
	};
};

const makeIndexEntry = (componentName: string) => {
	const component = `${pascalCase(componentName)}Demo`;
	return `import { createRoot } from 'react-dom/client';
import ${component} from './${kebabCase(componentName)}';
import './global.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <div class="radix-themes light">
    <${component} />
  </div>
);
`;
};

const makePackageJson = (
	dependencies: Record<string, string>,
	devDependencies: Record<string, string>,
) =>
	JSON.stringify(
		{
			scripts: { start: "vite", dev: "vite" },
			dependencies,
			devDependencies,
		},
		null,
		2,
	);

const globalCss = `${[
	"gray",
	"mauve",
	"slate",
	"sage",
	"olive",
	"sand",
	"tomato",
	"red",
	"ruby",
	"crimson",
	"pink",
	"plum",
	"purple",
	"violet",
	"iris",
	"indigo",
	"blue",
	"cyan",
	"teal",
	"jade",
	"green",
	"grass",
	"bronze",
	"gold",
	"brown",
	"orange",
	"amber",
	"yellow",
	"lime",
	"mint",
	"sky",
]
	.flatMap((color) => [color, `${color}-dark`, `${color}-alpha`, `${color}-dark-alpha`])
	.map((color) => `@import "@radix-ui/colors/${color}.css";`)
	.join("\n")}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: system-ui;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(330deg, hsl(272, 53%, 50%) 0%, hsl(226, 68%, 56%) 100%);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: 120px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

svg {
  display: block;
}
`;

const viteConfig: Record<string, string> = {
	"vite.config.js": `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})`,
	"index.html": `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vite App</title>
      </head>
      <body>
        <div id="root"></div>
        <script type="module" src="/index.jsx"></script>
      </body>
    </html>`,
};

function pascalCase(str: string) {
	return upperFirst(camelCase(str));
}
