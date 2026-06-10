import { Favicon } from "@components/Favicon";
import { BlogHeader } from "@components/BlogHeader";
import { BlogMobileMenu } from "@components/BlogMobileMenu";
import { Theme } from "@radix-ui/themes";

export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Theme accentColor="indigo" className="radix-themes-custom-fonts">
			<Favicon />
			<BlogHeader />
			<BlogMobileMenu />
			{children}
		</Theme>
	);
}
