"use client";
import * as React from "react";
import { useTheme } from "next-themes";

export function Favicon() {
	const { systemTheme } = useTheme();
	return (
		<>
			<link rel="icon" href="/favicon.png" />
			{systemTheme === "dark" ? (
				<link rel="icon" href="/favicon-white.svg" />
			) : (
				<link rel="icon" href="/favicon-black.svg" />
			)}
		</>
	);
}
