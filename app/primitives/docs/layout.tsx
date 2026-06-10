import { Favicon } from "@components/Favicon";
import { PrimitivesDocsPage } from "@components/PrimitivesDocsPage";
import { Theme } from "@radix-ui/themes";

export default function PrimitivesDocsLayout({
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
			<PrimitivesDocsPage>
				<Favicon />
				{children}
			</PrimitivesDocsPage>
		</Theme>
	);
}
