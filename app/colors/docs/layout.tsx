import { ColorsDocsPage } from "@components/ColorsDocsPage";
import { Favicon } from "@components/Favicon";
import { MobileMenuProvider } from "@components/mobile-menu";
import { Theme } from "@radix-ui/themes";

export default function ColorsDocsLayout({
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
			<ColorsDocsPage>
				<Favicon />
				{children}
			</ColorsDocsPage>
		</Theme>
	);
}
