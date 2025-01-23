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
import { Collapsible } from "radix-ui";
import { getParameters } from "codesandbox/lib/api/define";
import { CodeSandboxLogoIcon, CopyIcon } from "@radix-ui/react-icons";
import { isValidCssLib, useCssLibPreference } from "./CssLibPreference";
import { FrontmatterContext } from "./MDXComponents";
import { CSS_LIB_NAMES, DEFAULT_CSS_LIB } from "@utils/constants";
import type { CssLib } from "@utils/constants";
import styles from "./HeroCodeBlock.module.css";
import { CodeBlock } from "./CodeBlock";

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

	const availableCssLibs = snippets
		.map(({ cssLib }) => cssLib)
		.filter(onlyUnique);
	const usedCssLib = availableCssLibs.includes(cssLibCandidate)
		? cssLibCandidate
		: DEFAULT_CSS_LIB;
	const currentTabs = snippets.filter(({ cssLib }) => cssLib === usedCssLib);
	const sources = currentTabs.reduce((sources, tab) => {
		return { ...sources, [tab.title]: tab.source };
	}, {});

	const [currentTabValue, setCurrentTabValue] = React.useState(
		() => currentTabs[0]?.id,
	);

	React.useEffect(() => {
		// Reset tab if the current one isn't available
		const tabExists = currentTabs.find((tab) => tab.id === currentTabValue);
		if (!tabExists) setCurrentTabValue(currentTabs[0]?.id);
	}, [currentTabValue, currentTabs]);

	return (
		<Box
			className={styles.DemoContainer}
			data-algolia-exclude
			position="relative"
		>
			<Collapsible.Root open={isCodeExpanded} onOpenChange={setIsCodeExpanded}>
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
					<form
						action="https://codesandbox.io/api/v1/sandboxes/define"
						method="POST"
						target="_blank"
					>
						<input type="hidden" name="query" value="file=/App.jsx" />
						<input type="hidden" name="environment" value="server" />
						<input type="hidden" name="hidedevtools" value="1" />
						<input
							type="hidden"
							name="parameters"
							value={makeCodeSandboxParams(
								frontmatter.name!,
								sources,
								usedCssLib,
							)}
						/>
						<Tooltip
							className="radix-themes-custom-fonts"
							content={`Open ${CSS_LIB_NAMES[usedCssLib]} demo in CodeSandbox`}
						>
							<Theme appearance="dark" hasBackground={false}>
								<IconButton
									className={styles.SandboxButton}
									variant="soft"
									type="submit"
									color="gray"
									highContrast
								>
									<CodeSandboxLogoIcon />
								</IconButton>
							</Theme>
						</Tooltip>
					</form>
				</Flex>

				<Collapsible.Content asChild forceMount>
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
											<Select.Trigger
												variant="soft"
												color="gray"
												mr="2"
												style={{ minWidth: 115 }}
											/>
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
									<CodeBlock.Content>
										<Grid
											position="relative"
											width="100%"
											rows={isCodeExpanded ? "1fr" : "150px"}
											maxHeight="70vh"
											minHeight="150px"
										>
											<CodeBlock.Pre
												overflow={isCodeExpanded ? "scroll" : "hidden"}
											>
												<code>{tab.children}</code>

												<Box height="64px" />
												<Flex
													align="end"
													justify="center"
													className={styles.CollapsibleGradient}
												>
													<Collapsible.Trigger asChild>
														<Box
															position="relative"
															style={{
																backgroundColor: "var(--color-panel-solid)",
															}}
														>
															<Button
																size="1"
																variant="soft"
																highContrast
																color="gray"
															>
																{isCodeExpanded ? "Collapse" : "Expand"} code
															</Button>
														</Box>
													</Collapsible.Trigger>
												</Flex>
											</CodeBlock.Pre>
										</Grid>
									</CodeBlock.Content>
								</Tabs.Content>
							))}
						</Tabs.Root>
					</Box>
				</Collapsible.Content>
			</Collapsible.Root>
		</Box>
	);
};

const onlyUnique = <T,>(value: T, index: number, self: T[]) =>
	self.indexOf(value) === index;

const makeCodeSandboxParams = (
	componentName: string,
	sources: Record<string, string>,
	cssLib: CssLib,
) => {
	let files = {};

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

	return getParameters({ files, template: "node" });
};

const makeCssConfig = (
	componentName: string,
	sources: Record<string, string>,
) => {
	const dependencies = {
		react: "latest",
		"react-dom": "latest",
		"@radix-ui/colors": "latest",
		"@radix-ui/react-icons": "latest",
		[`@radix-ui/react-${componentName}`]: "latest",
		classnames: "latest",
	};

	const devDependencies = {
		vite: "latest",
		"@vitejs/plugin-react": "latest",
	};

	const files = {
		"package.json": {
			content: {
				scripts: { start: "vite" },
				dependencies,
				devDependencies,
			},
			isBinary: false,
		},
		...viteConfig,
		"App.jsx": {
			content: sources["index.jsx"],
			isBinary: false,
		},
		"index.jsx": {
			content: `import { createRoot } from 'react-dom/client';
import App from './App';
import './global.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);`,
			isBinary: false,
		},
		"global.css": {
			content: `* {
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
`,
			isBinary: false,
		},
		"styles.css": {
			content: sources["styles.css"],
			isBinary: false,
		},
	};

	return files;
};

const makeCssModulesConfig = (
	componentName: string,
	sources: Record<string, string>,
) => {
	const dependencies = {
		react: "latest",
		"react-dom": "latest",
		"@radix-ui/colors": "latest",
		"@radix-ui/react-icons": "latest",
		[`@radix-ui/react-${componentName}`]: "latest",
		classnames: "latest",
	};

	const devDependencies = {
		vite: "latest",
		"@vitejs/plugin-react": "latest",
	};

	const files = {
		"package.json": {
			content: {
				scripts: { start: "vite" },
				dependencies,
				devDependencies,
			},
			isBinary: false,
		},
		...viteConfig,
		"App.jsx": {
			content: sources["index.jsx"],
			isBinary: false,
		},
		"index.jsx": {
			content: `import { createRoot } from 'react-dom/client';
import App from './App';
import './global.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);`,
			isBinary: false,
		},
		"global.css": {
			content: `* {
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
`,
			isBinary: false,
		},
		"styles.module.css": {
			content: sources["styles.module.css"],
			isBinary: false,
		},
	};

	return files;
};

const makeTailwindConfig = (
	componentName: string,
	sources: Record<string, string>,
) => {
	const dependencies = {
		react: "latest",
		"react-dom": "latest",
		"@radix-ui/colors": "latest",
		"@radix-ui/react-icons": "latest",
		[`@radix-ui/react-${componentName}`]: "latest",
		classnames: "latest",
	};

	const devDependencies = {
		vite: "latest",
		"@vitejs/plugin-react": "latest",
		tailwindcss: "latest",
		postcss: "latest",
		autoprefixer: "latest",
	};

	const files = {
		"package.json": {
			content: {
				scripts: { start: "vite" },
				dependencies,
				devDependencies,
			},
			isBinary: false,
		},
		...viteConfig,
		"tailwind.config.js": {
			content: sources["tailwind.config.js"],
			isBinary: false,
		},
		"postcss.config.js": {
			content: `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}`,
			isBinary: false,
		},
		"index.jsx": {
			content: `import { createRoot } from 'react-dom/client';
import App from './App';
import './global.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);`,
			isBinary: false,
		},
		"App.jsx": {
			isBinary: false,
			content: sources["index.jsx"],
		},
		"global.css": {
			content: `@tailwind base;
@tailwind components;
@tailwind utilities;

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
			isBinary: false,
		},
	};

	return files;
};

const viteConfig = {
	"vite.config.js": {
		content: `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})`,
		isBinary: false,
	},
	"index.html": {
		content: `<!DOCTYPE html>
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
		isBinary: false,
	},
};
