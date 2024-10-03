import { canUseDOM } from "./can-use-dom";

export async function copy(text: string) {
	if (!canUseDOM) {
		return;
	}
	try {
		await navigator.clipboard.writeText(text);
	} catch (error) {
		console.error("Copying text is only allowed in a secure context");
	}
}
