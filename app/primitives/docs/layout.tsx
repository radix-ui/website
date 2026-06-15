import { Favicon } from "@components/favicon";
import { PrimitivesDocsPage } from "@components/primitives-docs-page";
import { Theme } from "@radix-ui/themes";

export default function PrimitivesDocsLayout({ children }: { children: React.ReactNode }) {
	return (
		<Theme accentColor="blue" grayColor="slate" className="radix-themes-custom-fonts">
			<PrimitivesDocsPage>
				<Favicon />
				{children}
			</PrimitivesDocsPage>
		</Theme>
	);
}
