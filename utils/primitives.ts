// @ts-ignore
import { frontMatter } from '../pages/primitives/docs/**/*.mdx';
import { FrontMatter } from '../types';
import compareVersions, { compare } from 'compare-versions';

export const getPageById = (id: string) => {
  const [page] = allPages.filter((post) => post.id === id);

  if (!page) {
    console.warn(`Cannot find primitives page - id: ${id}`);
  }

  return page;
};

const allPages: FrontMatter[] = frontMatter;

export const overviewPages: FrontMatter[] = allPages
  .filter((page) => page.id.includes('/overview/'))
  .sort(sortByNavRank);

export const componentsPages: FrontMatter[] = allPages
  .filter((page) => page.id.includes('/components/'))
  .sort((a, b) => compareVersions(a.version || '0.0.0', b.version || '0.0.0'))
  .reverse()
  .sort((a, b) => a.name.localeCompare(b.name))
  .reduce((acc, curr) => {
    if (!acc.some((x) => x.name === curr.name)) {
      acc.push(curr);
    }
    return acc;
  }, []);

export const utilitiesPages: FrontMatter[] = allPages.filter((page) =>
  page.id.includes('/utilities/')
);

export const pages = [...overviewPages, ...componentsPages, ...utilitiesPages];

function sortByNavRank(page1: FrontMatter, page2: FrontMatter) {
  const pageRank1 = page1.navRank != null ? String(page1.navRank) : page1.title;
  const pageRank2 = page2.navRank != null ? String(page2.navRank) : page2.title;
  return pageRank1 < pageRank2 ? -1 : pageRank1 > pageRank2 ? 1 : 0;
}
