// @ts-ignore
import { frontMatter } from '../pages/primitives/docs/**/*.mdx';
import { FrontMatter } from '../types';
import { compare } from 'compare-versions';

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
  .reduce((pages, currentPage) => {
    const item = pages.find((page) => page.name === currentPage.name);
    if (item) {
      // only keep the latest version of each package
      if (compare(item.version || '0.0.0', currentPage.version || '0.0.0', '<')) {
        const itemIndex = pages.indexOf(item);
        pages[itemIndex] = currentPage;
      }
    } else {
      pages.push(currentPage);
    }

    return pages;
  }, [])
  .sort((a, b) => a.name.localeCompare(b.name));

console.log(componentsPages);

export const utilitiesPages: FrontMatter[] = allPages.filter((page) =>
  page.id.includes('/utilities/')
);

export const pages = [...overviewPages, ...componentsPages, ...utilitiesPages];

function sortByNavRank(page1: FrontMatter, page2: FrontMatter) {
  const pageRank1 = page1.navRank != null ? String(page1.navRank) : page1.title;
  const pageRank2 = page2.navRank != null ? String(page2.navRank) : page2.title;
  return pageRank1 < pageRank2 ? -1 : pageRank1 > pageRank2 ? 1 : 0;
}
