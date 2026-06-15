import { Favicon } from "@components/favicon";
import { Theme } from "@radix-ui/themes";

export default function PrimitivesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Theme
			accentColor="blue"
			grayColor="slate"
			className="radix-themes-custom-fonts"
		>
			<Favicon />
			{children}
		</Theme>
	);
}
