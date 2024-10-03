// Inspired by https://github.com/j0lv3r4/mdx-prism

import rangeParser from "parse-numeric-range";
import { visit } from "unist-util-visit";
import { toString as nodeToString } from "hast-util-to-string";
import refractor from "refractor";
import highlightLine from "./rehype-highlight-line.mjs";
import highlightWord from "./rehype-highlight-word.mjs";

export default (options = {}) => {
	return (tree) => {
		visit(tree, "element", visitor);
	};

	function visitor(node, index, parent) {
		if (
			!parent ||
			parent.tagName !== "pre" ||
			node.tagName !== "code" ||
			!node.properties.className
		) {
			return;
		}

		const [_, lang] = node.properties.className[0].split("-");

		if (lang === "hero") {
			return;
		}

		const codeString = nodeToString(node);

		let result = refractor.highlight(codeString, lang);

		const linesToHighlight = rangeParser(node.properties.line || "0");
		result = highlightLine(result, linesToHighlight);

		result = highlightWord(result);

		node.children = result;
	}
};
