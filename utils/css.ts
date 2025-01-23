import * as React from "react";
import { classNames } from "./classNames";

export function styled<
	Comp extends
		| React.ComponentType
		| React.ForwardRefExoticComponent<any>
		| React.MemoExoticComponent<any>
		| keyof React.JSX.IntrinsicElements,
	Ref = any,
>(Component: Comp, ...classes: string[]) {
	const wrapped = React.forwardRef<Ref, React.ComponentProps<Comp>>(
		({ children, ...props }: any, ref) => {
			return React.createElement(
				Component,
				{
					...props,
					ref: ref,
					className: classNames(props.className, ...classes),
				},
				children,
			);
		},
	);
	if (typeof Component === "string") {
		wrapped.displayName = `styled$({Component})`;
	} else {
		const name = Component.displayName || Component.name || "Component";
		wrapped.displayName = name.startsWith("Styled") ? name : `styled(${name})`;
	}
	return wrapped;
}

function capitalize(string: string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}
