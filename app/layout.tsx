import { GTAG_URL, renderGtagSnippet } from "@utils/analytics";
import * as React from "react";
import localFont from "next/font/local";
import { ThemeProvider } from "@components/ThemeProvider";
import { CssLibPreferenceProvider } from "@components/CssLibPreference";
import { Analytics } from "./analytics";
import { RouterProvider } from "./router-provider";
import { MobileMenuProvider } from "@components/mobile-menu";
import "@radix-ui/themes/styles.css";
import "../pages/styles.css";
import "../pages/syntax-highlighting.css";

const adobeTextPro = localFont({
	variable: "--font-adobe-text-pro",
	display: "swap",
	src: [
		{
			path: "./_fonts/AdobeTextPro-Regular.woff2",
			weight: "400",
		},
	],
});

const soehneMono = localFont({
	variable: "--font-soehne-mono",
	display: "swap",
	src: [
		{
			path: "./_fonts/soehne-mono-web-buch.woff2",
			weight: "normal",
			style: "normal",
		},
	],
});

const untitledSans = localFont({
	variable: "--font-untitled-sans",
	display: "swap",
	src: [
		{
			path: "./_fonts/untitled-sans-regular-v2.woff2",
			weight: "400",
		},
		{
			path: "./_fonts/untitled-sans-medium-v2.woff2",
			weight: "500",
		},
	],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const gtagSnippet = renderGtagSnippet();
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className={`${adobeTextPro.variable} ${soehneMono.variable} ${untitledSans.variable}`}
		>
			<head>
				{gtagSnippet && (
					<>
						<script async src={GTAG_URL} />
						<script dangerouslySetInnerHTML={{ __html: gtagSnippet }} />
					</>
				)}
			</head>
			<body>
				<CssLibPreferenceProvider>
					<ThemeProvider>
						<RouterProvider>
							<MobileMenuProvider>{children}</MobileMenuProvider>
						</RouterProvider>
					</ThemeProvider>
				</CssLibPreferenceProvider>
				<React.Suspense fallback={null}>
					<Analytics />
				</React.Suspense>
			</body>
		</html>
	);
}
