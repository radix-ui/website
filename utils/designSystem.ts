// @ts-ignore
import { frontMatter } from '../pages/design-system/docs/**/*.mdx';
import { FrontMatter } from '../types';

export const getPageById = (id: string) => {
  const [page] = allPages.filter((post) => post.id === id);

  if (!page) {
    console.warn(`Cannot find design system page - id: ${id}`);
  }

  return page;
};

const allPages: FrontMatter[] = frontMatter;

export const overviewPages: FrontMatter[] = [
  getPageById('design-system/docs/overview/installation'),
];

export const componentsPages: FrontMatter[] = allPages.filter((page) =>
  page.id.includes('/components/')
);

export const pages = [...overviewPages, ...componentsPages];
