import * as React from "react";
import { transform as sucraseTransform } from "sucrase";
import { useIsomorphicLayoutEffect } from "@utils/useIsomorphicLayoutEffect";

interface LiveCodeProps {
	/** Code string to evaluate */
	code?: string;

	/** Scope, or rather, arguments, of the evaluated code */
	scope?: Record<string, unknown>;

	/** When component has rendered. Will pass `undefined` if there was no error. */
	onRender?: (error: Error | undefined) => void;
}

export const LiveCode = ({
	code = "",
	scope = {},
	onRender = () => undefined,
}: LiveCodeProps) => {
	const currentError = React.useRef<Error | undefined>(undefined);
	const setCurrentError = (error: Error | undefined) =>
		(currentError.current = error);

	// Reset current error state at render
	setCurrentError(undefined);

	// Update error handler with current error state after the render
	// Using layout effect so handler can react with own DOM changes without flicker
	useIsomorphicLayoutEffect(() => {
		onRender(currentError.current);
	});

	try {
		const transformedCode = transform(code);
		const Preview = evaluate(transformedCode, {
			internal__onError: setCurrentError,
			...scope,
		});

		// This is a boolean, number, string, null, or undefined
		if (!Preview || Object(Preview) !== Preview) {
			return <>{Preview}</>;
		}

		// This is a valid React element
		if (React.isValidElement(Preview)) {
			return (
				<ErrorBoundary
					key={transformedCode}
					onError={(error) => setCurrentError(error)}
				>
					{Preview}
				</ErrorBoundary>
			);
		}

		// This is a function
		if (typeof Preview === "function") {
			return (
				<ErrorBoundary
					key={transformedCode}
					onError={(error) => setCurrentError(error)}
				>
					<Preview />
				</ErrorBoundary>
			);
		}
	} catch (error) {
		setCurrentError(error as Error);
	}

	return null;
};

type ErrorBoundaryProps = Omit<React.ComponentProps<"div">, "onError"> & {
	children?: React.ReactNode;
	onError: (error: Error) => void;

	/** We must set the key in order to clear ErrorBoundary state on re-renders  */
	key: React.Key;
};

type ErrorBoundaryState = {
	error?: Error;
};

class ErrorBoundary extends React.Component<
	ErrorBoundaryProps,
	ErrorBoundaryState
> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = {};
	}

	static getDerivedStateFromError(error: Error) {
		return { error };
	}

	override componentDidCatch(error: Error) {
		this.props.onError(error);
	}

	override render() {
		return this.state.error ? null : this.props.children;
	}
}

const evaluate = (code = "", scope: Record<string, unknown> = {}) => {
	const scopeKeys = Object.keys(scope);
	const scopeValues = scopeKeys.map((key) => scope[key]);
	// eslint-disable-next-line @typescript-eslint/no-implied-eval
	const fn = new Function("React", ...scopeKeys, code);
	const result = fn(React, ...scopeValues);
	return injectReactClassComponentPrototype(result, code);
};

const transform = (code = "") => {
	// Remove trailing semicolon to get an expression
	const expression = code.trim().replace(/;$/, "");

	if (expression) {
		// Wrap `return (...)` around the expression and inject try / catch
		const withoutImports = removeImports(expression);
		const withFragment = injectFragment(withoutImports);
		const withReturn = injectReturnTryCatch(withFragment);
		const transformed = sucraseTransform(withReturn, {
			transforms: ["jsx", "typescript"],
		}).code;
		return transformed;
	}

	return "";
};

// Wrap JSX code in React fragment so it's easier to author code that renders multiple elements
const injectFragment = (code = "") =>
	/^<[^]*>$/m.test(code) ? `<>${code}</>` : code;

// Wrap code in `return` statement so we can create a function and inject try / catch into the expression body
const injectReturnTryCatch = (code = "") => {
	let regexp: RegExp;
	const catchBlock = "catch (error) { internal__onError(error); return null; }";

	// This might be a class component declared like this: class LoremIpsum extends React.Component ... { ... }
	regexp = /^(class\s+)(\w+)(\s+extends\s+React\.Component)(\s*\{[^]+)/m;
	if (regexp.test(code)) {
		return code.replace(
			regexp,
			`return (function $2 () { try { ${code}; return new $2() } ${catchBlock} })`,
		);
	}

	// This might be a function component declared like this: function (...) { ... }
	regexp = /^(function(\s+\w*\s*)?\([^]*?\)\s*\{)([^]+)(\})/m;
	if (regexp.test(code)) {
		return code.replace(regexp, `return ($1 try { $3 } ${catchBlock} })`);
	}

	// This might be a function component declared like this: () => { ... }
	regexp = /^((?:\([^]*?\)|\w+)\s*=>\s*\{)([^]+)(\})/m;
	if (regexp.test(code)) {
		return code.replace(regexp, `return ($1 try { $2 } ${catchBlock} })`);
	}

	// This might be a function component declared like this: () => ...
	regexp = /^((?:\([^]*?\)|\w+)\s*=>\s*)([^]+)/m;
	if (regexp.test(code)) {
		return code.replace(
			regexp,
			`return ($1 { try { return $2 } ${catchBlock}})`,
		);
	}

	// No match found, don't do anything fancy
	return `return (${code})`;
};

// We might be creating a function component that returns a class instance.
// Let's make React happy, otherwise it complains with this message:
// “The component appears to be a function component that returns a class instance. [...]
// If you can't use a class try assigning the prototype on the function as a workaround.”
const injectReactClassComponentPrototype = (fn: () => null, code = "") => {
	const regexp = /(class\s+)(\w+)(\s+extends\s+React\.Component)(\s*\{[^]+)/m;

	if (regexp.test(code)) {
		fn.prototype = React.Component.prototype;
	}

	return fn;
};

const removeImports = (code = "") => code.replace(/^(import .+?;|'|")$/gms, "");
