import { Favicon } from "@components/favicon";
import { BlogHeader } from "@components/blog-header";
import { BlogMobileMenu } from "@components/blog-mobile-menu";
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
