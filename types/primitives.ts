export type PrimitivesFrontmatter = {
  title: string;
  description?: string;
  poster?: string;
  features?: string[];
  version?: string;
  versions?: string[];
  aria?: string;
  name?: string;
  slug: string;
  status?: 'new' | 'soon' | 'deprecated';
};
