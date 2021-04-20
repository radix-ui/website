const toEstree = require('hast-util-to-estree')
const { walk } = require('estree-walker')
const periscopic = require('periscopic')
const estreeToJs = require('./estree-to-js')
const jsxToFunctions = require('./jsx-to-functions')
const isIdentifierName = require('estree-util-is-identifier-name').name

function serializeEstree(estree, options) {
	let layout
	let children = []
	let mdxLayoutDefault

	// Find the `export default`, the JSX expression, and leave the rest
	// (import/exports) as they are.
	estree.body = estree.body.filter(child => {
		// ```js
		// export default a = 1
		// ```
		if (child.type === 'ExportDefaultDeclaration') {
			layout = child.declaration
			return false
		}

		// ```js
		// export {default} from "a"
		// export {default as a} from "b"
		// export {default as a, b} from "c"
		// export {a as default} from "b"
		// export {a as default, b} from "c"
		// ```
		if (child.type === 'ExportNamedDeclaration' && child.source) {
			// Remove `default` or `as default`, but not `default as`, specifier.
			child.specifiers = child.specifiers.filter(specifier => {
				if (specifier.exported.name === 'default') {
					mdxLayoutDefault = { local: specifier.local, source: child.source }
					return false
				}

				return true
			})

			// Keep the export if there are other specifiers, drop it if there was
			// just a default.
			return child.specifiers.length > 0
		}

		if (
			child.type === 'ExpressionStatement' &&
			(child.expression.type === 'JSXFragment' ||
				child.expression.type === 'JSXElement')
		) {
			children =
				child.expression.type === 'JSXFragment'
					? child.expression.children
					: [child.expression]
			return false
		}

		return true
	})

	// Find everything that’s defined in the top-level scope.
	// Do this here because `estree` currently only includes import/exports
	// and we don’t have to walk all the JSX to figure out the top scope.
	const inTopScope = [
		'MDXContent',
		...periscopic.analyze(estree).scope.declarations.keys()
	]

	estree.body = [
		...estree.body,
		...createMdxContent(children)
	]

	const components = typeof options.components === 'object' && options.components || {}

	function isComponent(name) {
		const type = typeof components[name]
		return (
			type === 'function'
			|| (
				type === 'object'
				&& type !== null
				&& typeof components[name].$$typeof === 'symbol'
			)
		)
	}

	// Add `mdxType`, `parentName` props to JSX elements.
	const magicShortcodes = []
	const stack = []

	walk(estree, {
		enter(node) {
			if (
				node.type === 'JSXElement' &&
				node.openingElement.name.type === 'JSXIdentifier'
			) {
				const name = node.openingElement.name.name
				const parentName = stack.length > 1 ? stack[stack.length - 1] + '.' + name : name

				if (isComponent(parentName)) {
					node.openingElement.name = toComponentsMemberExpression(parentName)
					if (node.closingElement) {
						node.closingElement.name = toComponentsMemberExpression(parentName)
					}
				} else if (isComponent(name)) {
					node.openingElement.name = toComponentsMemberExpression(name)
					if (node.closingElement) {
						node.closingElement.name = toComponentsMemberExpression(name)
					}
				}

				const head = name.charAt(0)

				// A component.
				if (head === head.toUpperCase()) {
					if (!inTopScope.includes(name) && !magicShortcodes.includes(name)) {
						magicShortcodes.push(name)
					}
				}

				stack.push(name);
			}
		},
		leave: function (node) {
			if (
				node.type === 'JSXElement' &&
				// To do: support members (`<x.y>`).
				node.openingElement.name.type === 'JSXIdentifier'
			) {
				stack.pop()
			}
		}
	})

	const exports = []

	estree.body = [
		...estree.body,
		...exports
	]

	jsxToFunctions(estree, { pragma: 'createElement', pragmaFrag: 'Fragment' });

	return estreeToJs(estree)
}

function createMdxContent(children) {
	return [
		{
			type: 'FunctionDeclaration',
			id: { type: 'Identifier', name: '_' },
			expression: false,
			generator: false,
			async: false,
			params: [
				{ type: 'Identifier', name: 'Component' },
				{ type: 'Identifier', name: 'createElement' },
				{ type: 'Identifier', name: 'Fragment' },
			],
			body: {
				type: 'BlockStatement',
				body: [
					{
						type: 'ReturnStatement',
						argument: {
							type: 'FunctionDeclaration',
							id: { type: 'Identifier', name: 'MDXContent' },
							expression: false,
							generator: false,
							async: false,
							params: [
								{ type: 'Identifier', name: 'props' }
							],
							body: {
								type: 'BlockStatement',
								body: [
									{
										type: 'ReturnStatement',
										argument: {
											type: 'JSXFragment',
											openingFragment: { type: 'JSXOpeningFragment' },
											closingFragment: { type: 'JSXClosingFragment' },
											children
										}
									}
								]
							}
						}
					}
				]
			}
		}
	]
}

function createMdxLayout(declaration, mdxLayoutDefault) {
	const id = { type: 'Identifier', name: 'MDXLayout' }
	const init = { type: 'Literal', value: 'wrapper', raw: '"wrapper"' }

	return [
		mdxLayoutDefault
			? {
				type: 'ImportDeclaration',
				specifiers: [
					mdxLayoutDefault.local.name === 'default'
						? { type: 'ImportDefaultSpecifier', local: id }
						: {
							type: 'ImportSpecifier',
							imported: mdxLayoutDefault.local,
							local: id
						}
				],
				source: {
					type: 'Literal',
					value: mdxLayoutDefault.source.value,
					raw: mdxLayoutDefault.source.raw
				}
			}
			: {
				type: 'VariableDeclaration',
				declarations: [
					{ type: 'VariableDeclarator', id: id, init: declaration || init }
				],
				kind: 'const'
			}
	]
}

function createMakeShortcodeHelper(names, useElement) {
	const func = {
		type: 'VariableDeclaration',
		declarations: [
			{
				type: 'VariableDeclarator',
				id: { type: 'Identifier', name: 'makeShortcode' },
				init: {
					type: 'ArrowFunctionExpression',
					id: null,
					expression: true,
					generator: false,
					async: false,
					params: [{ type: 'Identifier', name: 'name' }],
					body: {
						type: 'ArrowFunctionExpression',
						id: null,
						expression: false,
						generator: false,
						async: false,
						params: [{ type: 'Identifier', name: 'props' }],
						body: {
							type: 'BlockStatement',
							body: [
								{
									type: 'ExpressionStatement',
									expression: {
										type: 'CallExpression',
										callee: {
											type: 'MemberExpression',
											object: { type: 'Identifier', name: 'console' },
											property: { type: 'Identifier', name: 'warn' },
											computed: false,
											optional: false
										},
										arguments: [
											{
												type: 'Literal',
												value:
													'Component `%s` was not imported, exported, or provided by MDXProvider as global scope'
											},
											{ type: 'Identifier', name: 'name' }
										]
									}
								},
								{
									type: 'ReturnStatement',
									argument: useElement
										? {
											type: 'JSXElement',
											openingElement: {
												type: 'JSXOpeningElement',
												attributes: [
													{
														type: 'JSXSpreadAttribute',
														argument: { type: 'Identifier', name: 'props' }
													}
												],
												name: { type: 'JSXIdentifier', name: 'div' },
												selfClosing: true
											},
											closingElement: null,
											children: []
										}
										: {
											type: 'JSXFragment',
											openingFragment: { type: 'JSXOpeningFragment' },
											closingFragment: { type: 'JSXClosingFragment' },
											children: [
												{
													type: 'JSXExpressionContainer',
													expression: {
														type: 'MemberExpression',
														object: { type: 'Identifier', name: 'props' },
														property: { type: 'Identifier', name: 'children' },
														computed: false
													}
												}
											]
										}
								}
							]
						}
					}
				}
			}
		],
		kind: 'const'
	}

	const shortcodes = names.map(name => ({
		type: 'VariableDeclaration',
		declarations: [
			{
				type: 'VariableDeclarator',
				id: { type: 'Identifier', name: String(name) },
				init: {
					type: 'CallExpression',
					callee: { type: 'Identifier', name: 'makeShortcode' },
					arguments: [{ type: 'Literal', value: String(name) }]
				}
			}
		],
		kind: 'const'
	}))

	return shortcodes.length > 0 ? [func, ...shortcodes] : []
}

function toComponentsMemberExpression(name) {
	return {
		type: 'JSXMemberExpression',
		object: { type: 'Identifier', name: 'Component' },
		property: { type: 'Identifier', name },
		computed: false,
		optional: false
	}
}

function create(from, node) {
	var fields = ['start', 'end', 'loc', 'range', 'comments']
	var index = -1
	/** @type {string} */
	var field

	while (++index < fields.length) {
		field = fields[index]
		if (field in from) {
			node[field] = from[field]
		}
	}

	return node
}

/**
 * @param {JSXAttribute} node
 * @returns {Property}
 */
function toProperty(node) {
	/** @type {Expression} */
	var value

	if (node.value) {
		if (node.value.type === 'JSXExpressionContainer') {
			// @ts-ignore `JSXEmptyExpression` is not allowed in props.
			value = node.value.expression
		}
		// Literal or call expression.
		else {
			// @ts-ignore: JSX{Element,Fragment} are already compiled to
			// `CallExpression`.
			value = node.value
			// @ts-ignore - Remove `raw` so we don’t get character references in
			// strings.
			delete value.raw
		}
	}
	// Boolean prop.
	else {
		value = { type: 'Literal', value: true }
	}

	return create(node, {
		type: 'Property',
		key: toIdentifier(node.name),
		value,
		kind: 'init',
		method: false,
		shorthand: false,
		computed: false
	})
}

/**
 * @param {JSXMemberExpression|JSXNamespacedName|JSXIdentifier} node
 * @returns {MemberExpression|Identifier|Literal}
 */
function toIdentifier(node) {
	/** @type {MemberExpression|Identifier|Literal} */
	var replace
	/** @type {MemberExpression|Identifier|Literal} */
	var id

	if (node.type === 'JSXMemberExpression') {
		// `property` is always a `JSXIdentifier`, but it could be something that
		// isn’t an ES identifier name.
		id = toIdentifier(node.property)
		replace = {
			type: 'MemberExpression',
			object: toIdentifier(node.object),
			property: id,
			computed: id.type === 'Literal',
			optional: false
		}
	} else if (node.type === 'JSXNamespacedName') {
		replace = {
			type: 'Literal',
			value: node.namespace.name + ':' + node.name.name
		}
	}
	// Must be `JSXIdentifier`.
	else {
		replace = isIdentifierName(node.name)
			? { type: 'Identifier', name: node.name }
			: { type: 'Literal', value: node.name }
	}

	return create(node, replace)
}

function compile(options = {}) {
	function compiler(tree, file) {
		return serializeEstree(toEstree(tree), { filename: file.path, ...options })
	}

	this.Compiler = compiler
}

module.exports = compile
