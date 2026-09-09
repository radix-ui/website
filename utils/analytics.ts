import { isProductionSite } from "./metadata";

export const GTAG_TRACKING_ID = "G-ZTHXHJWP08";
export const GTAG_URL = `https://www.googletagmanager.com/gtag/js?id=${GTAG_TRACKING_ID}`;

type WindowWithAnalytics = Window &
	typeof globalThis & {
		gtag: any;
	};

// Analytics only report from production builds; previews and `next dev` stay
// silent (see SITE_ENV in next.config.js).
export function renderGtagSnippet() {
	if (isProductionSite) {
		return `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GTAG_TRACKING_ID}');
    `;
	}
}

export function handleUrlChange(url: string) {
	if (isProductionSite) {
		(window as WindowWithAnalytics).gtag("config", GTAG_TRACKING_ID, {
			page_location: url,
			page_title: document.title,
		});
	}
}
