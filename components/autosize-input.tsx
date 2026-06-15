"use client";
// Fork of https://github.com/JedWatson/react-input-autosize
// Copyright (c) 2018 Jed Watson, MIT License
import * as React from "react";

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

	static getDerivedStateFromProps(props: AutosizeInputProps, state: AutosizeInputState) {
		const { id } = props;
		return id !== state.prevId ? { inputId: id, prevId: id } : null;
	}

	componentDidMount() {
		this.mounted = true;
		this.copyInputStyles();
		this.updateInputWidth();
	}
	componentDidUpdate(_prevProps: AutosizeInputProps, prevState: AutosizeInputState) {
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
		if (!this.mounted || !this.sizer || typeof this.sizer.scrollWidth === "undefined") {
			return;
		}
		let newInputWidth;
		if (
			this.props.placeholder &&
			(!this.props.value || (this.props.value && this.props.placeholderIsMinWidth))
		) {
			let placeHolderWidth = this.placeHolderSizer ? this.placeHolderSizer.scrollWidth : 0;
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

function cleanInputProps<T extends Record<string, any>>(inputProps: T): T {
	INPUT_PROPS_BLACKLIST.forEach((field) => delete inputProps[field]);
	return inputProps;
}

function copyStyles(styles: CSSStyleDeclaration, node: HTMLElement | SVGElement) {
	node.style.fontSize = styles.fontSize;
	node.style.fontFamily = styles.fontFamily;
	node.style.fontWeight = styles.fontWeight;
	node.style.fontStyle = styles.fontStyle;
	node.style.letterSpacing = styles.letterSpacing;
	node.style.textTransform = styles.textTransform;
}
