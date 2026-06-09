import { Favicon } from "@components/Favicon";
import { Theme } from "@radix-ui/themes";

export default function DefaultLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Theme accentColor="indigo" className="radix-themes-custom-fonts">
			<Favicon />
			{children}
		</Theme>
	);
}
