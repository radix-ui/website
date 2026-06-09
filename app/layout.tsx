import { GTAG_URL, renderGtagSnippet } from "@utils/analytics";
import localFont from "next/font/local";
import "@radix-ui/themes/styles.css";
import "../pages/styles.css";
import "../pages/syntax-highlighting.css";

const adobeTextPro = localFont({
	variable: "--font-adobe-text-pro",
	display: "swap",
	src: [
		{
			path: "./fonts/AdobeTextPro-Regular.woff2",
			weight: "400",
		},
	],
});

const soehneMono = localFont({
	variable: "--font-soehne-mono",
	display: "swap",
	src: [
		{
			path: "./fonts/soehne-mono-web-buch.woff2",
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
			path: "./fonts/untitled-sans-regular-v2.woff2",
			weight: "400",
		},
		{
			path: "./fonts/untitled-sans-medium-v2.woff2",
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
			<body>{children}</body>
		</html>
	);
}
