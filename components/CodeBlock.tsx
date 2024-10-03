"use client";
import * as React from "react";
import * as themes from "@radix-ui/themes";
import * as icons from "@radix-ui/react-icons";
import { Box, Flex, IconButton, ScrollArea, Theme } from "@radix-ui/themes";
import { CheckIcon, CopyIcon } from "@radix-ui/react-icons";
import { classNames } from "@utils/classNames";
import styles from "./CodeBlock.module.css";
import { copy } from "../utils/clipboard";

import refractor from "refractor/core";
import js from "refractor/lang/javascript";
import jsx from "refractor/lang/jsx";
import bash from "refractor/lang/bash";
import css from "refractor/lang/css";
import diff from "refractor/lang/diff";
import { toHtml as hastToHtml } from "hast-util-to-html";
import rangeParser from "parse-numeric-range";
import highlightLine from "@utils/rehype-highlight-line.mjs";
import highlightWord from "@utils/rehype-highlight-word.mjs";

import { LiveCode } from "./LiveCode";
import { DecorativeBox, ThemesVolumeControlExample } from "./ThemesDocsAssets";
import { RightClickZone } from "./RightClickZone";

type RootProps = React.ComponentPropsWithoutRef<typeof Box>;
const Root = React.forwardRef<HTMLDivElement, RootProps>(function Root(
	{ className, ...props },
	forwardedRef,
) {
	return (
		<Box
			ref={forwardedRef}
			className={classNames(styles.CodeBlockRoot, className)}
			{...props}
		/>
	);
});
Root.displayName = "CodeBlock.Root";

type LivePreviewProps = React.ComponentPropsWithoutRef<typeof Box> & {
	code: string;
	scroll?: boolean;
};
const LivePreview = React.forwardRef<HTMLDivElement, LivePreviewProps>(
	function LivePreview(
		{ className, code, scroll = false, ...props },
		forwardedRef,
	) {
		return (
			<Theme asChild className="radix-themes-default-fonts">
				<Box
					ref={forwardedRef}
					className={classNames(styles.CodeBlockLivePreview, className)}
					{...props}
				>
					<ScrollArea>
						<div
							data-scroll={scroll}
							className={styles.CodeBlockLivePreviewInner}
						>
							<LiveCode
								code={code}
								scope={{
									...themes,
									...icons,
									ThemesVolumeControlExample,
									DecorativeBox,
									RightClickZone,
								}}
							/>
						</div>
					</ScrollArea>
				</Box>
			</Theme>
		);
	},
);
LivePreview.displayName = "CodeBlock.LivePreview";

type HeaderProps = React.ComponentPropsWithoutRef<typeof Box>;
const Header = React.forwardRef<HTMLDivElement, HeaderProps>(function Header(
	{ className, ...props },
	forwardedRef,
) {
	return (
		<Box
			ref={forwardedRef}
			className={classNames(styles.CodeBlockHeader, className)}
			{...props}
		/>
	);
});
Header.displayName = "CodeBlock.Header";

type ContentProps = React.ComponentPropsWithoutRef<typeof Box>;
const Content = React.forwardRef<HTMLDivElement, ContentProps>(function Content(
	{ className, ...props },
	forwardedRef,
) {
	return (
		<Box
			ref={forwardedRef}
			data-code-block-content
			className={classNames(styles.CodeBlockContent, className)}
			{...props}
		/>
	);
});
Content.displayName = "CodeBlock.Content";

interface PreProps extends React.ComponentPropsWithoutRef<"pre"> {
	overflow?: "scroll" | "hidden";
}
const Pre = React.forwardRef<HTMLPreElement, PreProps>(function Pre(
	{ className, children, overflow = "scroll", ...props },
	forwardedRef,
) {
	const pre = (
		<pre
			ref={forwardedRef}
			className={classNames(styles.CodeBlockPre, className)}
			{...props}
		>
			{children}
		</pre>
	);

	if (overflow === "hidden") {
		return pre;
	}

	return <ScrollArea>{pre}</ScrollArea>;
});
Pre.displayName = "CodeBlock.Pre";

interface CodeProps extends React.ComponentPropsWithoutRef<"code"> {
	children: string;
	language: "js" | "jsx" | "bash" | "css" | "diff";
	lines?: string;
	invertLineHighlight?: boolean;
}
const Code = React.forwardRef<HTMLElement, CodeProps>(function Code(
	{
		className,
		children,
		invertLineHighlight = false,
		language,
		lines = "0",
		...props
	},
	forwardedRef,
) {
	let root = refractor.highlight(children, language);

	root = highlightLine(root, rangeParser(lines));
	const content = highlightWord(root);
	const result = hastToHtml(content);

	return (
		<code
			ref={forwardedRef}
			suppressHydrationWarning
			dangerouslySetInnerHTML={{ __html: result }}
			data-invert-line-highlight={invertLineHighlight}
			className={classNames(styles.CodeBlockCode, className)}
			{...props}
		/>
	);
});
Code.displayName = "CodeBlock.Code";

interface CopyButtonProps
	extends React.ComponentPropsWithoutRef<typeof IconButton> {}
const CopyButton = React.forwardRef<HTMLButtonElement, CopyButtonProps>(
	({ className, ...props }, forwardedRef) => {
		const [hasCopied, setHasCopied] = React.useState(false);

		React.useEffect(() => {
			if (hasCopied) {
				setTimeout(() => setHasCopied(false), 1500);
			}
		}, [hasCopied]);

		return (
			<IconButton
				aria-label="Copy code to clipboard"
				ref={forwardedRef}
				{...props}
				className={classNames(styles.CodeBlockCopyButton, className)}
				onClick={async (event) => {
					const value = event.currentTarget
						.closest(`[data-code-block-content]`)
						?.querySelector("code")?.textContent;
					if (value) {
						await copy(value);
						setHasCopied(true);
					}
				}}
				color="gray"
				variant="soft"
			>
				{hasCopied ? <CheckIcon /> : <CopyIcon />}
			</IconButton>
		);
	},
);
CopyButton.displayName = "CodeBlock.CopyButton";

refractor.register(js);
refractor.register(jsx);
refractor.register(bash);
refractor.register(css);
refractor.register(diff);

const CodeBlock = {
	Root: Root,
	LivePreview: LivePreview,
	Header: Header,
	Content: Content,
	CopyButton: CopyButton,
	Pre: Pre,
	Code: Code,
};

export { CodeBlock };
