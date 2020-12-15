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

export function getPagesByNavGroup(group: string): FrontMatter[] {
  return allPages.filter((page) => page.navGroup === group).sort(sortByNavRank);
}

export const overviewPages: FrontMatter[] = getPagesByNavGroup('overview');

export const componentsPages: FrontMatter[] = getPagesByNavGroup('components');

export const utilitiesPages: FrontMatter[] = getPagesByNavGroup('utilities');

export const pages = [...overviewPages, ...componentsPages, ...utilitiesPages];

function sortByNavRank(page1: FrontMatter, page2: FrontMatter) {
  const pageRank1 = page1.navRank != null ? String(page1.navRank) : page1.title;
  const pageRank2 = page2.navRank != null ? String(page2.navRank) : page2.title;
  return pageRank1 < pageRank2 ? -1 : pageRank1 > pageRank2 ? 1 : 0;
}
