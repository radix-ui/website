import { Favicon } from "@components/Favicon";
import { Theme } from "@radix-ui/themes";

export default function IconsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Theme
			accentColor="teal"
			grayColor="slate"
			className="radix-themes-custom-fonts"
		>
			<Favicon />
			{children}
		</Theme>
	);
}
