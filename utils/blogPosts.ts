// @ts-ignore
import { frontMatter } from '../pages/blog/**/*.mdx';
import { FrontMatter } from '../types';

export const blogPosts: FrontMatter[] = frontMatter.sort(
  (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
);

export const getBlogById = (id) => {
  const [post] = blogPosts.filter((post) => post.id === id);

  if (Object.keys(post).length === 0) {
    throw new Error(`Cannot find post by id - ${id}`);
  }

  return post;
};
