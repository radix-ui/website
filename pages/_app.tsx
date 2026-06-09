import * as React from "react";
import { AppProps } from "next/app";
import { Router, useRouter } from "next/router";
import Head from "next/head";
import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "@components/ThemeProvider";
import { PrimitivesDocsPage } from "@components/PrimitivesDocsPage";
import { ColorsDocsPage } from "@components/ColorsDocsPage";
import { ThemesDocsPage } from "@components/ThemesDocsPage";
import { CssLibPreferenceProvider } from "@components/CssLibPreference";
import { Favicon as FaviconImpl } from "@components/Favicon";
import { handleUrlChange } from "@utils/analytics";
import "@radix-ui/themes/styles.css";
import "./styles.css";
import "./syntax-highlighting.css";
import { RouterContext } from "@components/router-context";
import type { ReadonlyURLSearchParams } from "next/navigation";
import { MobileMenuProvider } from "@components/mobile-menu";

function Pages({ Component, pageProps }: AppProps) {
	const router = useRouter();
	if (router.pathname.startsWith("/primitives/docs")) {
		return (
			<Theme
				accentColor="blue"
				grayColor="slate"
				className="radix-themes-custom-fonts"
			>
				<PrimitivesDocsPage legacyPagesRouter>
					<Favicon />
					<Component {...pageProps} />
				</PrimitivesDocsPage>
			</Theme>
		);
	}

	if (router.pathname.startsWith("/primitives")) {
		return (
			<Theme
				accentColor="blue"
				grayColor="slate"
				className="radix-themes-custom-fonts"
			>
				<Favicon />
				<Component {...pageProps} />
			</Theme>
		);
	}

	if (router.pathname.startsWith("/colors/docs")) {
		return (
			<Theme
				accentColor="pink"
				grayColor="gray"
				className="radix-themes-custom-fonts"
			>
				<ColorsDocsPage legacyPagesRouter>
					<Favicon />
					<Component {...pageProps} />
				</ColorsDocsPage>
			</Theme>
		);
	}

	if (router.pathname.startsWith("/colors")) {
		return (
			<Theme
				accentColor="pink"
				grayColor="gray"
				className="radix-themes-custom-fonts"
			>
				<Favicon />
				<Component {...pageProps} />
			</Theme>
		);
	}

	if (router.pathname.startsWith("/themes/docs")) {
		return (
			<Theme accentColor="indigo" className="radix-themes-custom-fonts">
				<ThemesDocsPage legacyPagesRouter>
					<Favicon />
					<Component {...pageProps} />
				</ThemesDocsPage>
			</Theme>
		);
	}

	if (router.pathname.startsWith("/themes/playground")) {
		return (
			<Theme accentColor="indigo">
				<Favicon />
				<Component {...pageProps} />
			</Theme>
		);
	}

	if (router.pathname.startsWith("/themes")) {
		return (
			<Theme accentColor="indigo" className="radix-themes-custom-fonts">
				<Favicon />
				<Component {...pageProps} />
			</Theme>
		);
	}

	if (router.pathname.startsWith("/icons")) {
		return (
			<Theme
				accentColor="teal"
				grayColor="slate"
				className="radix-themes-custom-fonts"
			>
				<Favicon />
				<Component {...pageProps} />
			</Theme>
		);
	}

	return (
		<Theme accentColor="indigo" className="radix-themes-custom-fonts">
			<Favicon />
			<Component {...pageProps} />
		</Theme>
	);
}

function App(props: AppProps) {
	useAnalytics();

	return (
		<CssLibPreferenceProvider>
			<ThemeProvider>
				<RouterProvider>
					<MobileMenuProvider>
						<Pages {...props} />
					</MobileMenuProvider>
				</RouterProvider>
			</ThemeProvider>
		</CssLibPreferenceProvider>
	);
}

export default App;

function useAnalytics() {
	React.useEffect(() => {
		Router.events.on("routeChangeComplete", handleUrlChange);
		return () => {
			Router.events.off("routeChangeComplete", handleUrlChange);
		};
	}, []);
}

function Favicon() {
	return (
		<Head>
			<FaviconImpl />
		</Head>
	);
}

function RouterProvider({ children }: { children: React.ReactNode }) {
	const router = useRouter();
	const { pathname, searchParams } = React.useMemo(() => {
		const search = router.asPath.split("?")[1] ?? "";
		return {
			// Equivalent to next/navigation's `usePathname()`: the resolved path
			// without the query string or hash.
			pathname: router.asPath.split(/[?#]/)[0],
			// Equivalent to next/navigation's `useSearchParams()`: always a
			// `ReadonlyURLSearchParams` instance (empty when there's no query
			// string).
			searchParams: new URLSearchParams(search) as ReadonlyURLSearchParams,
		};
	}, [router.asPath]);

	// Equivalent to next/navigation's `useParams()`: only the dynamic route
	// params.
	const params = React.useMemo(() => {
		const dynamicParamNames = router.pathname
			.split("/")
			.filter((segment) => segment.startsWith("["))
			.map((segment) => segment.replace(/[[\].]/g, ""));

		return dynamicParamNames.reduce<Record<string, string | string[]>>(
			(result, name) => {
				const value = router.query[name];
				if (value !== undefined) {
					result[name] = value;
				}
				return result;
			},
			{},
		);
	}, [router.pathname, router.query]);

	return (
		<RouterContext
			value={{
				pathname,
				legacyPathname: router.pathname,
				params,
			}}
		>
			{children}
		</RouterContext>
	);
}
