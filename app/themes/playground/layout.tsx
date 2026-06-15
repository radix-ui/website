import { Favicon } from "@components/favicon";
import { Theme } from "@radix-ui/themes";

export default function ThemesPlaygroundLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Theme accentColor="indigo">
			<Favicon />
			{children}
		</Theme>
	);
}
