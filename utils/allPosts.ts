// @ts-ignore
import { frontMatter } from '../pages/**/*.mdx';
import { FrontMatter } from '../types';

export const allPosts: FrontMatter[] = frontMatter;

export const getPostById = (id) => {
  const [post] = allPosts.filter((post) => post.id === id);

  if (!post) {
    console.warn(`Cannot find post by id - ${id}`);
    return;
  }

  return post;
};
