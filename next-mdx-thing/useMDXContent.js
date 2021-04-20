/** @type {import('./useMDXContent')} */
function useMDXContent(data, components) {
	const { createElement, Fragment } = require('react');

	return Reflect.construct(Function, data)(components, createElement, Fragment)
}

module.exports = useMDXContent
