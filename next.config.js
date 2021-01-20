const fs = require('fs');
const path = require('path');
const compareVersions = require('compare-versions');
const readingTime = require('reading-time');
const withPlugins = require('next-compose-plugins');
const withVideos = require('next-videos');
const withOptimizedImages = require('next-optimized-images');
const withMdxEnhanced = require('next-mdx-enhanced');
const { compare } = require('compare-versions');

const withTM = require('next-transpile-modules')(['@modulz/design-system']);

module.exports = withPlugins(
  [
    withTM,
    withMdxEnhanced({
      layoutPath: 'layouts',
      defaultLayout: true,
      remarkPlugins: [require('remark-autolink-headings'), require('remark-slug')],
      rehypePlugins: [],
      extendFrontMatter: {
        process: (mdxContent, frontMatter) => {
          return {
            id: makeIdFromPath(frontMatter.__resourcePath),
            wordCount: mdxContent.split(/\s+/g).length,
            readingTime: readingTime(mdxContent),
          };
        },
      },
    })({
      pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    }),
    withOptimizedImages,
    withVideos,
  ],
  {
    // Next.js config
    async redirects() {
      return [
        {
          source: '/',
          destination: '/primitives/docs/overview/introduction',
          permanent: false,
        },
        {
          source: '/primitives',
          destination: '/primitives/docs/overview/introduction',
          permanent: false,
        },
        {
          source: '/primitives/docs',
          destination: '/primitives/docs/overview/introduction',
          permanent: false,
        },
        {
          source: '/design-system/docs',
          destination: '/design-system/docs/overview/introduction',
          permanent: false,
        },
      ];
    },

    exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
      const isDirectory = (fileName) => fs.lstatSync(fileName).isDirectory();

      const primitivesDirectory = path.join(__dirname, 'pages/primitives/docs/components');
      const primitivesPaths = fs
        .readdirSync(primitivesDirectory)
        .map((file) => path.join(primitivesDirectory, file))
        .filter(isDirectory);

      const latestPrimitivesPaths = primitivesPaths.map((primitivePath) => {
        const [lastVersion] = fs
          .readdirSync(primitivePath)
          .sort(compareVersions)
          .map((file) => path.join(primitivePath, file))
          .filter(isDirectory)
          .reverse();

        return lastVersion;
      });

      const pathMap = latestPrimitivesPaths.reduce((acc, curr, index) => {
        const [_, path] = latestPrimitivesPaths[index].split('/pages');
        const rootPathArray = path.split('/');
        const rootPathArrayWithoutVersion = rootPathArray.pop();
        const rootPath = rootPathArray.join('/');
        acc[rootPath] = { page: path };
        return acc;
      }, {});

      return pathMap;
    },
  }
);

/**
 *
 * @param {string} resourcePath
 *
 * Make an ID from a path
 *
 * - use it as the URL slug
 * - support having an `index.mdx` in a folder (use folder name as page name)
 *
 */
function makeIdFromPath(resourcePath) {
  return resourcePath.replace('.mdx', '').replace('/index', '');
}
