// Fork of https://github.com/JedWatson/react-input-autosize
// Copyright (c) 2018 Jed Watson, MIT License
import * as React from "react";
import { useComposedRefs } from "radix-ui/internal";

const SIZER_STYLE: React.CSSProperties = {
	position: "absolute",
	top: 0,
	left: 0,
	visibility: "hidden",
	height: 0,
	overflow: "scroll",
	whiteSpace: "pre",
};

const INPUT_PROPS_BLACKLIST = new Set([
	"extraWidth",
	"inputClassName",
	"inputRef",
	"inputStyle",
	"minWidth",
	"onAutosize",
	"placeholderIsMinWidth",
] as const);

const DEFAULT_MIN_WIDTH = 1;

export interface AutosizeInputProps {
	className?: string;
	/** default field value */
	defaultValue?: any;
	/** additional width for input element */
	extraWidth?: number;
	/** id to use for the input, can be set for consistent snapshots */
	id?: string;
	inputClassName?: string;
	/** ref callback for the input element */
	inputRef?: React.Ref<HTMLInputElement>;
	/** css styles for the input element */
	inputStyle?: React.CSSProperties;
	/** minimum width for input element */
	minWidth?: number;
	onAutosize?: (newWidth: number) => void;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	/** placeholder text */
	placeholder?: string;
	/** don't collapse size to less than the placeholder */
	placeholderIsMinWidth?: boolean;
	/** css styles for the outer element */
	style?: React.CSSProperties;
	/** field value */
	value?: any;
	type?: string;
	/** Additional width to render the input before hydration */
	initialWidth?: number;
	autoComplete?: string;
	name?: string;
}

interface AutosizeInputState {
	inputWidth: number;
	inputId: string | undefined;
	prevId: string | undefined;
}

export class AutosizeInput extends React.Component<
	AutosizeInputProps,
	AutosizeInputState,
	AutosizeInputState
> {
	static defaultProps: Partial<AutosizeInputProps>;
	mounted = false;
	input: HTMLInputElement | null = null;
	placeHolderSizer: HTMLDivElement | null = null;
	sizer: HTMLDivElement | null = null;

	constructor(props: AutosizeInputProps) {
		super(props);
		this.state = {
			inputWidth: props.minWidth ?? DEFAULT_MIN_WIDTH,
			inputId: props.id,
			prevId: props.id,
		};
	}

	static getDerivedStateFromProps(
		props: AutosizeInputProps,
		state: AutosizeInputState,
	) {
		const { id } = props;
		return id !== state.prevId ? { inputId: id, prevId: id } : null;
	}

	componentDidMount() {
		this.mounted = true;
		this.copyInputStyles();
		this.updateInputWidth();
	}
	componentDidUpdate(
		prevProps: AutosizeInputProps,
		prevState: AutosizeInputState,
	) {
		if (prevState.inputWidth !== this.state.inputWidth) {
			if (typeof this.props.onAutosize === "function") {
				this.props.onAutosize(this.state.inputWidth);
			}
		}
		this.updateInputWidth();
	}
	componentWillUnmount() {
		this.mounted = false;
	}
	inputRef = (el: HTMLInputElement | null) => {
		this.input = el;
		if (typeof this.props.inputRef === "function") {
			this.props.inputRef(el);
		}
	};
	placeHolderSizerRef = (el: HTMLInputElement | null) => {
		this.placeHolderSizer = el;
	};
	sizerRef = (el: HTMLInputElement | null) => {
		this.sizer = el;
	};
	copyInputStyles() {
		if (!this.mounted || !window.getComputedStyle) {
			return;
		}
		const inputStyles = this.input && window.getComputedStyle(this.input);
		if (!inputStyles) {
			return;
		}
		if (this.sizer) {
			copyStyles(inputStyles, this.sizer);
		}
		if (this.placeHolderSizer) {
			copyStyles(inputStyles, this.placeHolderSizer);
		}
	}
	updateInputWidth() {
		if (
			!this.mounted ||
			!this.sizer ||
			typeof this.sizer.scrollWidth === "undefined"
		) {
			return;
		}
		let newInputWidth;
		if (
			this.props.placeholder &&
			(!this.props.value ||
				(this.props.value && this.props.placeholderIsMinWidth))
		) {
			let placeHolderWidth = this.placeHolderSizer
				? this.placeHolderSizer.scrollWidth
				: 0;
			newInputWidth = Math.max(this.sizer.scrollWidth, placeHolderWidth) + 2;
		} else {
			newInputWidth = this.sizer.scrollWidth + 2;
		}
		// add extraWidth to the detected width. for number types, this defaults to 16 to allow for the stepper UI
		const extraWidth =
			this.props.type === "number" && this.props.extraWidth === undefined
				? 16
				: this.props.extraWidth || 0;
		newInputWidth += extraWidth;
		const minWidth = this.props.minWidth ?? DEFAULT_MIN_WIDTH;
		if (newInputWidth < minWidth) {
			newInputWidth = minWidth;
		}
		if (newInputWidth !== this.state.inputWidth) {
			this.setState({ inputWidth: newInputWidth });
		}
	}
	getInput() {
		return this.input;
	}
	focus() {
		this.input?.focus();
	}
	blur() {
		this.input?.blur();
	}
	select() {
		this.input?.select();
	}
	render() {
		const sizerValue = [this.props.defaultValue, this.props.value, ""].reduce(
			(previousValue, currentValue) => {
				if (previousValue !== null && previousValue !== undefined) {
					return previousValue;
				}
				return currentValue;
			},
		);

		const wrapperStyle = { ...this.props.style };
		if (!wrapperStyle.display) wrapperStyle.display = "inline-block";

		const inputStyle = {
			boxSizing: "content-box",
			width: `${this.state.inputWidth}px`,
			...this.props.inputStyle,
		};

		const { ...inputProps } = this.props;
		cleanInputProps(inputProps);
		inputProps.className = this.props.inputClassName;
		inputProps.id = this.state.inputId;

		return (
			<div className={this.props.className} style={wrapperStyle}>
				<input {...inputProps} ref={this.inputRef} />
				<div ref={this.sizerRef} style={SIZER_STYLE}>
					{sizerValue}
				</div>
				{this.props.placeholder ? (
					<div ref={this.placeHolderSizerRef} style={SIZER_STYLE}>
						{this.props.placeholder}
					</div>
				) : null}
			</div>
		);
	}
}

function isFunction(value: any): value is (...args: any[]) => any {
	return typeof value === "function";
}

function isUsableNumber(value: unknown): value is number {
	return (
		typeof value === "number" &&
		// false for NaN, Infinity, -Infinity
		Number.isFinite(value)
	);
}

function cleanInputProps<T extends Record<string, any>>(inputProps: T): T {
	INPUT_PROPS_BLACKLIST.forEach((field) => delete inputProps[field]);
	return inputProps;
}

function copyStyles(
	styles: CSSStyleDeclaration,
	node: HTMLElement | SVGElement,
) {
	node.style.fontSize = styles.fontSize;
	node.style.fontFamily = styles.fontFamily;
	node.style.fontWeight = styles.fontWeight;
	node.style.fontStyle = styles.fontStyle;
	node.style.letterSpacing = styles.letterSpacing;
	node.style.textTransform = styles.textTransform;
}

// TODO
function NewAutosizeInput({
	id,
	inputRef: inputRefProp,
	onAutosize,
	initialWidth,
	placeholder,
	value,
	placeholderIsMinWidth,
	type,
	extraWidth: extraWidthProp,
	minWidth,
	className,
	style,
	defaultValue,
	inputStyle,
	inputClassName,
	...props
}: AutosizeInputProps) {
	const uniqueId = React.useId();
	const inputId = id ?? uniqueId;
	const placeHolderSizerRef = React.useRef<HTMLDivElement | null>(null);
	const sizerRef = React.useRef<HTMLDivElement | null>(null);
	const inputOwnRef = React.useRef<HTMLInputElement | null>(null);
	const inputRef = useComposedRefs(inputOwnRef, inputRefProp);

	const extraWidth =
		extraWidthProp !== undefined
			? isUsableNumber(extraWidthProp)
				? extraWidthProp
				: 0
			: type === "number"
				? 16 // defaults to 16 to allow for the stepper UI
				: 0;

	const [inputWidth, setInputWidth] = React.useState(() =>
		initialWidth && initialWidth >= 0 && Number.isFinite(initialWidth)
			? initialWidth
			: -1,
	);

	const hasValue = !!value;

	// copyInputStyles
	React.useEffect(() => {
		if (!inputOwnRef.current) {
			return;
		}
		const { current: inputElement } = inputOwnRef;
		const { current: sizerElement } = sizerRef;
		const { current: placeHolderSizerElement } = placeHolderSizerRef;
		const ownerWindow = inputElement.ownerDocument.defaultView ?? window;
		const inputStyles = ownerWindow.getComputedStyle(inputElement);
		if (sizerElement) {
			copyStyles(inputStyles, sizerElement);
		}
		if (placeHolderSizerElement) {
			copyStyles(inputStyles, placeHolderSizerElement);
		}
	}, []);

	const inputWidthRef = React.useRef(inputWidth);
	React.useEffect(() => {
		const prevInputWidth = inputWidthRef.current;
		inputWidthRef.current = inputWidth;
		if (prevInputWidth !== inputWidth && isFunction(onAutosize)) {
			onAutosize(inputWidth!);
		}
		updateInputWidth();

		function updateInputWidth() {
			const { current: sizer } = sizerRef;
			let { current: placeHolderSizer } = placeHolderSizerRef;
			if (!sizer) {
				return;
			}

			let newInputWidth: number;
			if (placeholder && (!hasValue || (hasValue && placeholderIsMinWidth))) {
				let placeholderWidth = placeHolderSizer
					? placeHolderSizer.scrollWidth
					: 0;
				newInputWidth = Math.max(sizer.scrollWidth, placeholderWidth) + 2;
			} else {
				newInputWidth = sizer.scrollWidth + 2;
			}

			newInputWidth += extraWidth;
			if (newInputWidth < (minWidth || 0)) {
				newInputWidth = minWidth || 0;
			}

			setInputWidth(newInputWidth);
		}
	}, [
		inputWidth,
		minWidth,
		extraWidth,
		placeholder,
		hasValue,
		placeholderIsMinWidth,
	]);

	const sizerValue = [defaultValue, value, ""].reduce(
		(previousValue, currentValue) => {
			if (previousValue !== null && previousValue !== undefined) {
				return previousValue;
			}
			return currentValue;
		},
	);

	const inputProps = {
		defaultValue,
		value,
		className: inputClassName,
		id: inputId,
		type,
		style: {
			boxSizing: "content-box",
			width: inputWidth === -1 ? undefined : `${inputWidth}px`,
			...inputStyle,
		},
		...props,
	} satisfies React.ComponentPropsWithoutRef<"input">;

	return (
		<div className={className} style={{ display: "inline-block", ...style }}>
			<input {...inputProps} ref={inputRef} />
			<div ref={sizerRef} style={SIZER_STYLE}>
				{sizerValue}
			</div>
			{placeholder ? (
				<div ref={placeHolderSizerRef} style={SIZER_STYLE}>
					{placeholder}
				</div>
			) : null}
		</div>
	);
}
