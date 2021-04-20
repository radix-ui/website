import { Pluggable, Compiler } from 'unified'
import * as React from 'react'

export interface MDXOptions {
	components?: MDXComponents
	filepath?: string
	hastPlugins?: Pluggable[]
	rehypePlugins?: Pluggable[]
	remarkPlugins?: Pluggable[]
}

export interface MDXComponents {
	[componentName: string]: React.ReactNode
}

export type MDXSource = [string, string, string, string]

function MDXRender(mdx: string, opts: MDXOptions): MDXSource

export default MDXRender
