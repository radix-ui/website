import { ColorsMobileMenu } from "@components/ColorsMobileMenu";
import { Favicon } from "@components/Favicon";
import { Theme } from "@radix-ui/themes";

export default function ColorsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Theme
			accentColor="pink"
			grayColor="gray"
			className="radix-themes-custom-fonts"
		>
			<Favicon />
			<ColorsMobileMenu />
			{children}
		</Theme>
	);
}
