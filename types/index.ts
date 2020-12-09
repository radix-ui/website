export type FrontMatter = {
  title: string;
  name: string;
  id?: string;
  description?: string;
  by?: string;
  publishedAt?: string;
  relatedIds?: string[];
  previousId?: string;
  type?: 'changelog' | string;
  readingTime?: { text: string; minutes: number; time: number; words: number };
  nextId?: string;
  poster?: string;
  status?: 'new' | 'soon' | 'deprecated';
  features?: string[];
  version: string;
  __resourcePath: string;
};
