import * as React from "react";
import NextLink from "next/link";
import { ExternalLinkIcon, Link2Icon } from "@radix-ui/react-icons";
import { PropsTable } from "./PropsTable";
import { KeyboardTable } from "./KeyboardTable";
import { Highlights } from "./Highlights";
import { HeroCodeBlock } from "./HeroCodeBlock";
import { PackageRelease, PRLink } from "./releaseHelpers";
import { HeroContainer } from "./HeroContainer";
import { HeroQuote } from "./HeroQuote";
import { Frontmatter } from "types/frontmatter";
import { ColorScale, ColorScaleGroup } from "./Scale";
import * as Demos from "./demos";
import { CssVariablesTable } from "./CssVariablesTable";
import { DataAttributesTable } from "./DataAttributesTable";
import { CodeBlock } from "./CodeBlock";
import {
	Blockquote,
	Box,
	Flex,
	Code,
	Em,
	Heading,
	Kbd,
	Link,
	Separator,
	Strong,
	Tabs,
	Text,
} from "@radix-ui/themes";
import * as themesComponents from "@radix-ui/themes";
import styles from "./MDXComponents.module.css";
import { classNames } from "@utils/classNames";

export const components = {
	...themesComponents,
	ColorScale,
	ColorScaleGroup,
	Tabs,
	HeroCodeBlock,
	h1: (props: any) => (
		<Heading asChild size="8" mb="2">
			<h1 {...props} style={{ scrollMarginTop: "var(--space-9)" }} />
		</Heading>
	),
	Description: ({ children, ...props }: any) => {
		// takes the text even if it's wrapped in `<p>`
		// https://github.com/wooorm/xdm/issues/47
		const childText =
			typeof children === "string" ? children : children.props.children;
		return (
			<Text
				as="p"
				size="4"
				mt="2"
				mb="7"
				color="gray"
				children={childText}
				{...props}
			/>
		);
	},
	h2: ({ children, id, ...props }: any) => (
		<Heading
			size="6"
			mt="8"
			mb="3"
			asChild
			{...props}
			id={id}
			style={{ scrollMarginTop: "var(--space-9)" }}
			data-heading
		>
			<h2>
				<LinkHeading id={id}>{children}</LinkHeading>
			</h2>
		</Heading>
	),
	h3: ({ children, id, ...props }: any) => (
		<Heading
			size="4"
			mt="7"
			mb="2"
			asChild
			{...props}
			id={id}
			style={{ scrollMarginTop: "var(--space-9)" }}
			data-heading
		>
			<h3>
				<LinkHeading id={id}>{children}</LinkHeading>
			</h3>
		</Heading>
	),
	h4: ({ children, ...props }: any) => (
		<Heading asChild size="4" mt="6" mb="3" {...props}>
			<h4 children={children} style={{ scrollMarginTop: "var(--space-9)" }} />
		</Heading>
	),
	p: (props: any) => <Text mb="4" as="p" size="3" {...props} />,
	a: ({ href = "", children, ...props }: any) => {
		if (href.startsWith("http")) {
			return (
				<Flex asChild display="inline-flex" align="center" gap="1">
					<Link {...props} href={href} target="_blank" rel="noopener">
						{children}
						<ExternalLinkIcon
							style={{ marginTop: 2, marginLeft: -1, marginRight: -1 }}
						/>
					</Link>
				</Flex>
			);
		}
		return (
			<NextLink href={href} passHref legacyBehavior>
				<Link {...props}>{children}</Link>
			</NextLink>
		);
	},
	hr: (props: any) => (
		<Separator size="2" {...props} my="8" style={{ marginInline: "auto" }} />
	),
	ul: (props: any) => <ul {...props} className={styles.List} />,
	ol: ({ children, ...props }: any) => (
		<Box {...props} mb="3" pl="4" asChild>
			<ol>{children}</ol>
		</Box>
	),
	li: (props: any) => (
		<li className={styles.ListItem}>
			<Text {...props} />
		</li>
	),
	em: Em,
	strong: Strong,
	img: ({ style, ...props }: any) => (
		<Box my="6">
			<img
				{...props}
				style={{ maxWidth: "100%", verticalAlign: "middle", ...style }}
			/>
		</Box>
	),
	blockquote: Blockquote,
	// todo: line highlights, style overrides, live preview
	pre: ({ children }: any) => (
		<CodeBlock.Root my="5">
			{children.props.live && (
				<CodeBlock.LivePreview
					code={childrenText(children) ?? ""}
					scroll={children.props.scroll}
				/>
			)}
			<CodeBlock.Content>
				<CodeBlock.Pre>{children}</CodeBlock.Pre>
				<CodeBlock.CopyButton />
			</CodeBlock.Content>
		</CodeBlock.Root>
	),
	code: ({ className, line, live, style, ...props }: any) => {
		// if it's a codeblock (``` block in markdown), it'll have a className from prism
		const isInlineCode = !className;
		return isInlineCode ? (
			<Code
				className={className}
				{...props}
				style={{ whiteSpace: "break-spaces" }}
			/>
		) : (
			<code className={className} {...props} />
		);
	},
	CodeBlock,
	NextLink,
	Note: ({ children, ...props }: any) => (
		<Box className={styles.Note} asChild my="2" {...props}>
			<aside children={children} />
		</Box>
	),
	Highlights,
	Kbd: Kbd,
	Code,
	CssVariablesTable: (props: any) => (
		<Box mt="2">
			<CssVariablesTable {...props} />
		</Box>
	),
	DataAttributesTable: (props: any) => <DataAttributesTable {...props} />,
	PropsTable: (props: any) => (
		<Box my="4">
			<PropsTable {...props} />
		</Box>
	),
	KeyboardTable: (props: any) => (
		<Box mb="5">
			<KeyboardTable {...props} />
		</Box>
	),
	PackageRelease,
	PRLink,
	HeroContainer,
	HeroQuote,
	...Demos,
};

const LinkHeading = ({
	id,
	children,
	className,
	...props
}: {
	id: string;
	children: React.ReactNode;
} & React.ComponentProps<typeof Link>) => (
	<Link
		asChild
		weight="bold"
		highContrast
		color="gray"
		underline="hover"
		{...props}
	>
		<a
			id={id}
			href={`#${id}`}
			className={classNames(className, styles.LinkHeading)}
		>
			{children}

			<Link2Icon aria-hidden />
		</a>
	</Link>
);

export const FrontmatterContext = React.createContext<Frontmatter>({} as any);

// Custom provider for next-mdx-remote
// https://github.com/hashicorp/next-mdx-remote#using-providers
export function MDXProvider(props: {
	frontmatter: Frontmatter;
	children: React.ReactNode;
}) {
	const { frontmatter, children } = props;
	return (
		<FrontmatterContext.Provider value={frontmatter}>
			{children}
		</FrontmatterContext.Provider>
	);
}

export const childrenText = (children?: unknown): string | null => {
	if (isReactElementWithChildren(children)) {
		return childrenText(children.props?.children);
	}

	if (Array.isArray(children)) {
		return children.map(childrenText).flat().filter(Boolean).join("");
	}

	if (typeof children === "string") {
		return children;
	}

	return null;
};

const isReactElementWithChildren = (
	element?: unknown,
): element is React.ReactElement<{ children: React.ReactNode }> =>
	React.isValidElement(element) && !!(element.props as any).children;
