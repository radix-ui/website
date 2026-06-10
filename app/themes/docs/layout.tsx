import { Favicon } from "@components/Favicon";
import { ThemesDocsPage } from "@components/ThemesDocsPage";
import { Theme } from "@radix-ui/themes";

export default function ThemesDocsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Theme accentColor="indigo" className="radix-themes-custom-fonts">
			<ThemesDocsPage>
				<Favicon />
				{children}
			</ThemesDocsPage>
		</Theme>
	);
}
