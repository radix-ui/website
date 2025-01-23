import * as Icons from "@radix-ui/react-icons";
import { Button, Flex, Grid, Text } from "@radix-ui/themes";
import * as React from "react";
import { useCopyToast } from "./CopyToast";

type SearchResultsProps = {
	value: string;
};

const iconNames = Object.keys(Icons).map((key) => {
	switch (key) {
		// Logos using original PascalCase naming can't be automated
		case "LinkedInLogoIcon":
			return "LinkedIn Logo";
		case "GitHubLogoIcon":
			return "GitHub Logo";
		case "IconJarLogoIcon":
			return "IconJar Logo";
		case "CodeSandboxLogoIcon":
			return "CodeSandbox Logo";
		case "CounterClockwiseClockIcon":
			return "Counter-Clockwise Clock";
		case "RotateCounterClockwiseIcon":
			return "Rotate Counter-Clockwise";

		// Naïve UpperCamelCaseIcon to Title Case conversion otherwise
		default:
			return key.replace(/Icon$/, "").replace(/(.)([0-9A-Z])/g, "$1 $2");
	}
});

export const SearchResults = ({ value }: SearchResultsProps) => {
	const { showCopyToast } = useCopyToast();
	const cleanValue = escapeStringRegexp(value.trim().replace(/\s/g, " "));
	const matchingNames = iconNames.filter((name) =>
		new RegExp(`\\b${cleanValue}`, "gi").test(name),
	);

	return (
		<>
			{value && matchingNames.length > 0 && (
				<Grid
					flow={{ initial: "row", sm: "column" }}
					gapX="6"
					gapY="5"
					rows={{
						sm: `repeat(${Math.max(Math.ceil(matchingNames.length / 2), 3)}, auto)`,
						md: `repeat(${Math.max(Math.ceil(matchingNames.length / 4), 3)}, auto)`,
					}}
					columns={{ initial: "1", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
					py={{ initial: "3", sm: "6" }}
					px={{ initial: "4", sm: "7" }}
				>
					{matchingNames.map((name) => (
						<Button
							key={name}
							style={{ justifyContent: "flex-start" }}
							variant="ghost"
							highContrast
							size="3"
							onClick={(event: React.MouseEvent) => {
								const svg = event.currentTarget.querySelector("svg");
								const code = svg ? svg.outerHTML : null;

								// Copy code to clipboard via a hidden textarea element
								if (code) {
									// Temporary shim until a proper focus-visible handler is added
									if (document.activeElement instanceof HTMLButtonElement) {
										document.activeElement.blur();
									}

									const textarea = document.createElement("textarea");
									textarea.value = code.toString();
									textarea.setAttribute("readonly", "");
									textarea.style.position = "absolute";
									textarea.style.left = "-9999px";
									document.body.appendChild(textarea);
									textarea.select();
									document.execCommand("copy");
									document.body.removeChild(textarea);

									// Show CopyToast and set latest icon
									showCopyToast(code);
								}
							}}
						>
							{React.createElement(
								Object.values(Icons)[iconNames.indexOf(name)] as any,
							)}
							{name}
						</Button>
					))}
				</Grid>
			)}
			{!matchingNames.length && (
				<Flex
					align="center"
					justify="center"
					py="6"
					px="6"
					style={{
						minHeight: 300,
					}}
				>
					<Text size="2" style={{ textAlign: "center" }}>
						No icons for <Text weight="bold">{value}</Text>
					</Text>
				</Flex>
			)}
		</>
	);
};

// https://github.com/sindresorhus/escape-string-regexp/blob/main/index.js
function escapeStringRegexp(string: string) {
	if (typeof string !== "string") {
		throw new TypeError("Expected a string");
	}

	// Escape characters with special meaning either inside or outside character sets.
	// Use a simple backslash escape when it’s always valid, and a `\xnn` escape when the simpler form would be disallowed by Unicode patterns’ stricter grammar.
	return string.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
