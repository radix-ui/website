import path from 'path';
import fs from 'fs';
import visit from 'unist-util-visit';
import { UnistNode, UnistTree } from './unist';
import { SUPPORTED_STYLING_SOLUTIONS } from './constants';
import { mdxElement } from './unist-mdx-element';

const rehypeHeroCodeBlock = () => (tree: UnistTree) => {
  visit(tree, (node: UnistNode) => {
    if (node.name === 'HeroCodeBlock') {
      const folder = getAttribute(node, 'folder');

      if (typeof folder === 'string') {
        node.children = [];

        SUPPORTED_STYLING_SOLUTIONS.forEach((stylingSolution) => {
          ['index.jsx', 'styles.css'].forEach((file) => {
            const filePath = `${process.cwd()}/components/demos/${folder}/${stylingSolution}/${file}`;
            if (fileExists(filePath)) {
              const [, extension] = file.split('.');
              const syntax = getSyntax(extension);
              const source = fs.readFileSync(path.join(filePath), 'utf8');

              node.children.push(
                mdxElement({
                  name: 'pre',
                  props: {
                    stylingSolution,
                    title: file,
                    file: filePath,
                    syntax,
                    source,
                  },
                  children: [
                    mdxElement({
                      name: 'code',
                      props: {
                        // Recreate the language class for syntax highlighting
                        className: [`language-${syntax}`],
                      },
                      children: [
                        {
                          type: 'text',
                          value: source,
                        },
                      ],
                    }),
                  ],
                })
              );
            }
          });
        });
      }
    }
  });
};

function getAttribute(node: UnistNode, name: string) {
  return node.attributes?.find((attribute) => attribute.name === name)?.value;
}

function fileExists(path: string) {
  try {
    fs.accessSync(path);
    return true;
  } catch (e) {
    return false;
  }
}

function getSyntax(extension: string) {
  return extension;
}

export default rehypeHeroCodeBlock;
