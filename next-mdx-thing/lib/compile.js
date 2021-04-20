const unified = require('unified')
const remarkParse = require('remark-parse')
const remarkMdx = require('remark-mdx')
const footnotes = require('remark-footnotes')
const squeeze = require('remark-squeeze-paragraphs')
const minifyWhitespace = require('rehype-minify-whitespace')
const mdxAstToMdxHast = require('./mdx-ast-to-mdx-hast')
const mdxHastToJsx = require('./mdx-hast-to-jsx')

function createConfig(mdx, opts) {
	const config = { contents: mdx }

	if (opts.filepath) {
		config.path = opts.filepath
	}

	return config
}

function createMdxAstCompiler(opts = {}) {
	let compiler = unified()

	compiler = compiler.use(remarkParse)
	compiler = compiler.use(remarkMdx)
	compiler = compiler.use(footnotes)
	compiler = compiler.use(squeeze)

	if (Array.isArray(opts.remarkPlugins)) {
		opts.remarkPlugins.forEach(remarkPlugin => {
			compiler = Array.isArray(remarkPlugin) ? compiler.use(...remarkPlugin) : compiler.use(remarkPlugin)
		})
	}

	compiler = compiler.use(mdxAstToMdxHast)

	return compiler
}

function createCompiler(opts) {
	let compiler = createMdxAstCompiler(opts)

	if (Array.isArray(opts.rehypePlugins)) {
		opts.rehypePlugins.forEach(rehypePlugin => {
			compiler = Array.isArray(rehypePlugin) ? compiler.use(...rehypePlugin) : compiler.use(rehypePlugin)
		})
	}

	compiler = compiler.use(minifyWhitespace, { newlines: true })
	compiler = compiler.use(mdxHastToJsx, opts)

	return compiler
}

function createConfig(mdx, opts) {
	const config = { contents: mdx }

	if (opts.filepath) {
		config.path = opts.filepath
	}

	return config
}

async function compile(mdx, opts) {
	return await createCompiler(opts).process(createConfig(mdx, opts))
}

module.exports = compile
