import fs from 'fs';
import path from 'path';
import glob from 'glob';
import matter from 'gray-matter';
const compareVersions = require('compare-versions');
import type { PrimitivesFrontmatter } from 'types/primitives';

const ROOT_PATH = process.cwd();
export const DATA_PATH = path.join(ROOT_PATH, 'data');

// the front matter and content of all mdx files based on `docsPaths`
export const getAllFrontmatter = (fromPath) => {
  const PATH = path.join(DATA_PATH, fromPath);
  const paths = glob.sync(`${PATH}/**/*.mdx`);

  return paths.map((filePath) => {
    const source = fs.readFileSync(path.join(filePath), 'utf8');
    const { data } = matter(source);

    return {
      ...(data as PrimitivesFrontmatter),
      slug: filePath.replace(`${DATA_PATH}/`, '').replace('.mdx', ''),
    } as PrimitivesFrontmatter;
  });
};

export const getDocBySlug = (basePath, slug) => {
  const source = fs.readFileSync(path.join(DATA_PATH, basePath, `${slug}.mdx`), 'utf8');
  const { data, content } = matter(source);

  return {
    frontmatter: {
      ...(data as PrimitivesFrontmatter),
      slug,
    } as PrimitivesFrontmatter,
    content,
  };
};

export function getAllVersionsFromPath(fromPath) {
  const PATH = path.join(DATA_PATH, fromPath);
  if (!fs.existsSync(PATH)) return [];
  return fs
    .readdirSync(PATH)
    .map((fileName) => fileName.replace('.mdx', ''))
    .sort(compareVersions)
    .reverse();
}
