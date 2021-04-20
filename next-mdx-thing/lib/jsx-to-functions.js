const walk = require('estree-walker').walk
const isIdentifierName = require('estree-util-is-identifier-name').name

var regex = /@(jsx|jsxFrag|jsxImportSource|jsxRuntime)\s+(\S+)/g

/**
 * @typedef {import('estree-jsx').Node} Node
 * @typedef {import('estree-jsx').Comment} Comment
 * @typedef {import('estree-jsx').Expression} Expression
 * @typedef {import('estree-jsx').Pattern} Pattern
 * @typedef {import('estree-jsx').Property} Property
 * @typedef {import('estree-jsx').ImportSpecifier} ImportSpecifier
 * @typedef {import('estree-jsx').SpreadElement} SpreadElement
 * @typedef {import('estree-jsx').MemberExpression} MemberExpression
 * @typedef {import('estree-jsx').Literal} Literal
 * @typedef {import('estree-jsx').Identifier} Identifier
 * @typedef {import('estree-jsx').JSXElement} JSXElement
 * @typedef {import('estree-jsx').JSXFragment} JSXFragment
 * @typedef {import('estree-jsx').JSXText} JSXText
 * @typedef {import('estree-jsx').JSXExpressionContainer} JSXExpressionContainer
 * @typedef {import('estree-jsx').JSXEmptyExpression} JSXEmptyExpression
 * @typedef {import('estree-jsx').JSXSpreadChild} JSXSpreadChild
 * @typedef {import('estree-jsx').JSXAttribute} JSXAttribute
 * @typedef {import('estree-jsx').JSXSpreadAttribute} JSXSpreadAttribute
 * @typedef {import('estree-jsx').JSXMemberExpression} JSXMemberExpression
 * @typedef {import('estree-jsx').JSXNamespacedName} JSXNamespacedName
 * @typedef {import('estree-jsx').JSXIdentifier} JSXIdentifier
 *
 * @typedef {import('estree-walker').SyncHandler} SyncHandler
 */

/**
 * @typedef {Object} BuildJsxOptions
 * @property {'automatic'|'classic'} [runtime='classic']
 * @property {string} [importSource='react']
 * @property {string} [pragma='React.createElement']
 * @property {string} [pragmaFrag='React.Fragment']
 */

/**
 * @typedef {Object} Annotations
 * @property {'automatic'|'classic'} [jsxRuntime]
 * @property {string} [jsx]
 * @property {string} [jsxFrag]
 * @property {string} [jsxImportSource]
 */

/**
 * @template {Node} T
 * @param {T} tree
 * @param {BuildJsxOptions} [options={}]
 * @returns {T}
 */
function buildJsx(tree, options = {}) {
	var automatic = options.runtime === 'automatic'
	/** @type {Annotations} */
	var annotations = {}
	/** @type {{fragment?: boolean, jsx?: boolean, jsxs?: boolean}} */
	var imports = {}

	walk(tree, { enter, leave })

	return tree

	/**
	 * When entering the program, check all comments, and prefer comments over
	 * config.
	 *
	 * @type {SyncHandler}
	 * @param {Node} node
	 */
	function enter(node) {
		/** @type {Comment[]} */
		var comments
		/** @type {number} */
		var index
		/** @type {RegExpMatchArray} */
		var match

		if (node.type === 'Program') {
			comments = node.comments || []
			index = -1

			while (++index < comments.length) {
				regex.lastIndex = 0

				while ((match = regex.exec(comments[index].value))) {
					annotations[match[1]] = match[2]
				}
			}

			if (annotations.jsxRuntime) {
				if (annotations.jsxRuntime === 'automatic') {
					automatic = true

					if (annotations.jsx) {
						throw new Error('Unexpected `@jsx` pragma w/ automatic runtime')
					}

					if (annotations.jsxFrag) {
						throw new Error('Unexpected `@jsxFrag` pragma w/ automatic runtime')
					}
				} else if (annotations.jsxRuntime === 'classic') {
					automatic = false

					if (annotations.jsxImportSource) {
						throw new Error('Unexpected `@jsxImportSource` w/ classic runtime')
					}
				} else {
					throw new Error(
						'Unexpected `jsxRuntime` `' +
						annotations.jsxRuntime +
						'`, expected `automatic` or `classic`'
					)
				}
			}
		}
	}

	/**
	 * Transform JSX.
	 *
	 * @type {SyncHandler}
	 * @param {Node} node
	 */
	// eslint-disable-next-line complexity
	function leave(node) {
		/** @type {Array.<Expression|SpreadElement>} */
		var parameters = []
		/** @type {Array.<Expression>} */
		var children = []
		/** @type {Array.<Expression>} */
		var objects = []
		/** @type {Array.<Property>} */
		var fields = []
		var index = -1
		/** @type {JSXExpressionContainer|JSXElement|JSXFragment|JSXText|JSXSpreadChild} */
		var child
		/** @type {MemberExpression|Literal|Identifier} */
		var name
		/** @type {Expression} */
		var props
		/** @type {Array<JSXAttribute | JSXSpreadAttribute>} */
		var attributes
		/** @type {JSXAttribute | JSXSpreadAttribute} */
		var attribute
		/** @type {boolean} */
		var spread
		/** @type {Expression} */
		var key
		/** @type {MemberExpression|Literal|Identifier} */
		var callee
		/** @type {Array<ImportSpecifier>} */
		var specifiers
		/** @type {Property} */
		var prop
		/** @type {string} */
		var value

		if (node.type === 'Program') {
			specifiers = []

			if (imports.fragment) {
				specifiers.push({
					type: 'ImportSpecifier',
					imported: { type: 'Identifier', name: 'Fragment' },
					local: { type: 'Identifier', name: '_Fragment' }
				})
			}

			if (imports.jsx) {
				specifiers.push({
					type: 'ImportSpecifier',
					imported: { type: 'Identifier', name: 'jsx' },
					local: { type: 'Identifier', name: '_jsx' }
				})
			}

			if (imports.jsxs) {
				specifiers.push({
					type: 'ImportSpecifier',
					imported: { type: 'Identifier', name: 'jsxs' },
					local: { type: 'Identifier', name: '_jsxs' }
				})
			}

			if (specifiers.length > 0) {
				node.body.unshift({
					type: 'ImportDeclaration',
					specifiers,
					source: {
						type: 'Literal',
						value:
							(annotations.jsxImportSource || options.importSource || 'react') +
							'/jsx-runtime'
					}
				})
			}
		}

		if (node.type !== 'JSXElement' && node.type !== 'JSXFragment') {
			return
		}

		// Figure out `children`.
		while (++index < node.children.length) {
			child = node.children[index]

			if (child.type === 'JSXExpressionContainer') {
				// Ignore empty expressions.
				if (child.expression.type !== 'JSXEmptyExpression') {
					children.push(child.expression)
				}
			} else if (child.type === 'JSXText') {
				value = child.value
					// Replace tabs w/ spaces.
					.replace(/\t/g, ' ')
					// Use line feeds, drop spaces around them.
					.replace(/ *(\r?\n|\r) */g, '\n')
					// Collapse multiple line feeds.
					.replace(/\n+/g, '\n')
					// Drop final line feeds.
					.replace(/\n+$/, '')
					// Replace line feeds with spaces.
					.replace(/\n/g, ' ')

				// Ignore collapsible text.
				if (value) {
					children.push(create(child, { type: 'Literal', value }))
				}
			} else {
				// @ts-ignore JSX{Element,Fragment} have already been compiled, and
				// `JSXSpreadChild` is not supported in Babel either, so ignore it.
				children.push(child)
			}
		}

		// Do the stuff needed for elements.
		if (node.type === 'JSXElement') {
			name = toIdentifier(node.openingElement.name)

			// If the name could be an identifier, but start with a lowercase letter,
			// it’s not a component.
			if (name.type === 'Identifier' && /^[a-z]/.test(name.name)) {
				name = create(name, { type: 'Literal', value: name.name })
			}

			attributes = node.openingElement.attributes
			index = -1

			// Place props in the right order, because we might have duplicates
			// in them and what’s spread in.
			while (++index < attributes.length) {
				attribute = attributes[index]

				if (attribute.type === 'JSXSpreadAttribute') {
					if (fields.length > 0) {
						objects.push({ type: 'ObjectExpression', properties: fields })
						fields = []
					}

					objects.push(attribute.argument)
					spread = true
				} else {
					prop = toProperty(attribute)

					if (
						automatic &&
						prop.key.type === 'Identifier' &&
						prop.key.name === 'key'
					) {
						if (spread) {
							throw new Error(
								'Expected `key` to come before any spread expressions'
							)
						}

						// @ts-ignore I can’t see object patterns being used as attribute
						// values? 🤷‍♂️
						key = prop.value
					} else {
						fields.push(prop)
					}
				}
			}
		}
		// …and fragments.
		else if (automatic) {
			imports.fragment = true
			name = { type: 'Identifier', name: '_Fragment' }
		} else {
			name = toMemberExpression(
				annotations.jsxFrag || options.pragmaFrag || 'React.Fragment'
			)
		}

		if (automatic && children.length > 0) {
			fields.push({
				type: 'Property',
				key: { type: 'Identifier', name: 'children' },
				value:
					children.length > 1
						? { type: 'ArrayExpression', elements: children }
						: children[0],
				kind: 'init',
				method: false,
				shorthand: false,
				computed: false
			})
		} else {
			parameters = children
		}

		if (fields.length > 0) {
			objects.push({ type: 'ObjectExpression', properties: fields })
		}

		if (objects.length > 1) {
			// Don’t mutate the first object, shallow clone instead.
			if (objects[0].type !== 'ObjectExpression') {
				objects.unshift({ type: 'ObjectExpression', properties: [] })
			}

			props = {
				type: 'CallExpression',
				callee: toMemberExpression('Object.assign'),
				arguments: objects,
				optional: false
			}
		} else if (objects.length > 0) {
			props = objects[0]
		}

		if (automatic) {
			if (children.length > 1) {
				imports.jsxs = true
				callee = { type: 'Identifier', name: '_jsxs' }
			} else {
				imports.jsx = true
				callee = { type: 'Identifier', name: '_jsx' }
			}

			parameters.push(props || { type: 'ObjectExpression', properties: [] })

			if (key) {
				parameters.push(key)
			}
		}
		// Classic.
		else {
			// There are props or children.
			if (props || parameters.length > 0) {
				parameters.unshift(props || { type: 'Literal', value: null })
			}

			callee = toMemberExpression(
				annotations.jsx || options.pragma || 'React.createElement'
			)
		}

		parameters.unshift(name)

		this.replace(
			create(node, {
				type: 'CallExpression',
				callee,
				arguments: parameters,
				optional: false
			})
		)
	}
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

/**
 * @param {string} id
 * @returns {Identifier|Literal|MemberExpression}
 */
function toMemberExpression(id) {
	var identifiers = id.split('.')
	var index = -1
	/** @type {Identifier|Literal|MemberExpression} */
	var result
	/** @type {Identifier|Literal} */
	var prop

	while (++index < identifiers.length) {
		prop = isIdentifierName(identifiers[index])
			? { type: 'Identifier', name: identifiers[index] }
			: { type: 'Literal', value: identifiers[index] }
		result = index
			? {
				type: 'MemberExpression',
				object: result,
				property: prop,
				computed: index && prop.type === 'Literal',
				optional: false
			}
			: prop
	}

	return result
}

/**
 * @template {Node} T
 * @param {Node} from
 * @param {T} node
 * @returns {T}
 */
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

module.exports = buildJsx
