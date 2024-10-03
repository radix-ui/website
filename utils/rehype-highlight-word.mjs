import { toHtml as hastToHtml } from "hast-util-to-html";
import { unified } from "unified";
import parse from "rehype-parse";

const CALLOUT = /__(.*?)__/g;

export default (code) => {
	const html = hastToHtml(code);
	const result = html.replace(
		CALLOUT,
		(_, text) => `<span class="highlight-word">${text}</span>`,
	);
	const hast = unified()
		.use(parse, { emitParseErrors: true, fragment: true })
		.parse(result);
	return hast.children;
};
