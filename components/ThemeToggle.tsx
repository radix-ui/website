"use client";
import * as React from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { IconButton, Tooltip } from "@radix-ui/themes";

export const ThemeToggle = ({
	children,
	...props
}: React.ComponentPropsWithoutRef<typeof IconButton>) => {
	const { theme, systemTheme, setTheme } = useTheme();

	return (
		<>
			<style
				dangerouslySetInnerHTML={{
					__html: `
        :root, .light, .light-theme {
          --theme-toggle-sun-icon-display: block;
          --theme-toggle-moon-icon-display: none;
        }
        .dark, .dark-theme {
          --theme-toggle-sun-icon-display: none;
          --theme-toggle-moon-icon-display: block;
        }
      `,
				}}
			/>
			<Tooltip className="radix-themes-custom-fonts" content="Toggle theme">
				<IconButton
					size="3"
					variant="ghost"
					color="gray"
					aria-label="Toggle theme"
					onClick={() => {
						// Set 'system' theme if the next theme matches the system theme
						const resolvedTheme = theme === "system" ? systemTheme : theme;
						const newTheme = resolvedTheme === "dark" ? "light" : "dark";
						const newThemeMatchesSystem = newTheme === systemTheme;
						setTheme(newThemeMatchesSystem ? "system" : newTheme);
					}}
					{...props}
				>
					<SunIcon
						width="16"
						height="16"
						style={{ display: "var(--theme-toggle-sun-icon-display)" }}
					/>
					<MoonIcon
						width="16"
						height="16"
						style={{ display: "var(--theme-toggle-moon-icon-display)" }}
					/>
				</IconButton>
			</Tooltip>
		</>
	);
};
