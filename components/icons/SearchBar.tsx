import * as React from "react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Flex, Separator } from "@radix-ui/themes";
import { AutosizeInput } from "../AutosizeInput";

import styles from "./SearchBar.module.css";

type SearchBarProps = {
	value: string;
	onValueChange: (value: string) => void;
};

export const SearchBar = ({ value, onValueChange }: SearchBarProps) => {
	const inputRef = React.useRef<HTMLInputElement>(null);
	return (
		<>
			<Flex
				align="center"
				justify="center"
				gap="2"
				onClick={() => {
					inputRef.current?.focus();
					inputRef.current?.select();
				}}
			>
				<MagnifyingGlassIcon
					style={{
						color: "var(--gray-a11)",
						marginRight: "calc(-1 * var(--space-5))",
					}}
				/>

				<AutosizeInput
					inputRef={inputRef}
					autoComplete="off"
					placeholder="Search"
					name="form-field-name"
					value={value}
					className={styles.SearchBarInput}
					onChange={(event) => onValueChange(event.target.value)}
				/>
			</Flex>

			<Separator size="4" />
		</>
	);
};
