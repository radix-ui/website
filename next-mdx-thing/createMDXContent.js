const compile = require('./lib/compile')
const { minify } = require("terser")

/** @type {import('./createMDXContent')} */
async function createMDXContent(mdx, opts = {}) {
	opts = Object.assign({}, opts)
	opts.components = Object.assign({}, opts.components)

	const compiled = await compile(mdx, opts)

	const compiledString = String(compiled);

	const { code: minifiedString } = await minify(compiledString, { ecma: 2020, keep_fnames: true });

	const splitIndex = minifiedString.indexOf(')');
	
	const args = [
		...minifiedString.slice(11, splitIndex).split(','),
		minifiedString.slice(splitIndex + 2, -1),
	];

	return args
}

module.exports = createMDXContent
