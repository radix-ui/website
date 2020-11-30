// @ts-ignore
import { frontMatter } from '../pages/primitives/docs/**/*.mdx';
import { FrontMatter } from '../types';

export const getPageById = (id: string) => {
  const [page] = allPages.filter((post) => post.id === id);

  if (!page) {
    console.warn(`Cannot find primitives page - id: ${id}`);
  }

  return page;
};

const allPages: FrontMatter[] = frontMatter;

export const overviewPages: FrontMatter[] = [getPageById('primitives/docs/overview/installation')];

export const componentsPages: FrontMatter[] = allPages.filter((page) =>
  page.id.includes('/components/')
);

export const pages = [...overviewPages, ...componentsPages];
