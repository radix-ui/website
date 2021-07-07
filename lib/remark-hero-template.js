const fs = require('fs');
const path = require('path');
const rangeParser = require('parse-numeric-range');
const visit = require('unist-util-visit');
const nodeToString = require('hast-util-to-string');
const refractor = require('refractor');

const unified = require('unified');
const parse = require('rehype-parse');

const ROOT_PATH = process.cwd();
const HERO_PATH = 'components/demos';

module.exports = (options = {}) => {
  return (tree) => {
    visit(tree, 'code', visitor);
  };

  function visitor(node, index, parent) {
    if (!node.meta) return;

    const [_, templateName] = node.meta && node.meta.split('template=');

    if (!templateName) return;

    const templatePath = path.join(`${ROOT_PATH}/${HERO_PATH}/${templateName}.jsx`);
    let source = fs.readFileSync(path.join(templatePath), 'utf8');
    source = source
      .replace('@modulz/design-system', '@stitches/react')
      .replace(', theme } from', ' } from')
      .replace(/className={`\${theme}`}/g, '');

    node.value = source;
  }
};
