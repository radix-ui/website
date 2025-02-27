export const GTAG_TRACKING_ID = "G-ZTHXHJWP08";
export const GTAG_URL = `https://www.googletagmanager.com/gtag/js?id=${GTAG_TRACKING_ID}`;

type WindowWithAnalytics = Window &
	typeof globalThis & {
		gtag: any;
	};

export function renderGtagSnippet() {
	if (process.env.NODE_ENV === "production") {
		return `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GTAG_TRACKING_ID}');
    `;
	}
}

export function handleUrlChange(url: string) {
	if (process.env.NODE_ENV === "production") {
		(window as WindowWithAnalytics).gtag("config", GTAG_TRACKING_ID, {
			page_location: url,
			page_title: document.title,
		});
	}
}
