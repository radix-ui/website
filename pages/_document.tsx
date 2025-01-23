import * as React from "react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { renderGtagSnippet, GTAG_URL } from "@utils/analytics";

export default class Document extends NextDocument {
	render() {
		const gtagSnippet = renderGtagSnippet();
		return (
			<Html lang="en">
				<Head>
					<link
						rel="preload"
						href="/fonts/AdobeTextPro-Regular.woff2"
						as="font"
						type="font/woff2"
						crossOrigin="anonymous"
					/>
					<link
						rel="preload"
						href="/fonts/soehne-mono-web-buch.woff2"
						as="font"
						type="font/woff2"
						crossOrigin="anonymous"
					/>
					<link
						rel="preload"
						href="https://cdn.workos.com/fonts/untitled-sans-regular-v2.woff2"
						as="font"
						type="font/woff2"
						crossOrigin="anonymous"
					/>
					<link
						rel="preload"
						href="https://cdn.workos.com/fonts/untitled-sans-medium-v2.woff2"
						as="font"
						type="font/woff2"
						crossOrigin="anonymous"
					/>
					<style
						dangerouslySetInnerHTML={{
							__html: `
@font-face {
  font-family: 'Adobe Text Pro';
  font-weight: 400;
  font-display: swap;
  src: url(/fonts/AdobeTextPro-Regular.woff2) format('woff2');
}

@font-face {
  font-family: 'Untitled Sans';
  font-weight: 400;
  font-display: swap;
  src: url('https://cdn.workos.com/fonts/untitled-sans-regular-v2.woff2') format('woff2');
}

@font-face {
  font-family: 'Untitled Sans';
  font-weight: 500;
  font-display: swap;
  src: url('https://cdn.workos.com/fonts/untitled-sans-medium-v2.woff2') format('woff2');
}

@font-face {
  font-family: 'Untitled Sans';
  font-weight: 700;
  font-display: swap;
  src: url('https://cdn.workos.com/fonts/untitled-sans-medium-v2.woff2') format('woff2');
}

@font-face {
  font-family: 'Söhne Mono';
  font-weight: normal;
  font-style: normal;
  font-display: swap;
  src: url('/fonts/soehne-mono-web-buch.woff2') format('woff2'), url('/fonts/soehne-mono-web-buch.woff') format('woff');
}
`,
						}}
					/>
					{gtagSnippet && (
						<>
							<script async src={GTAG_URL} />
							<script dangerouslySetInnerHTML={{ __html: gtagSnippet }} />
						</>
					)}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
