import * as React from 'react';

export interface MDXComponents {
  [componentName: string]: React.ReactNode;
}

export type MDXSource = string[];

function useMDXContent(mdx: MDXSource, components: MDXComponents): React.FC;

export default useMDXContent;
