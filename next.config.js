const fs = require('fs');
const path = require('path');
const compareVersions = require('compare-versions');
const readingTime = require('reading-time');
const withPlugins = require('next-compose-plugins');
const withVideos = require('next-videos');
const withOptimizedImages = require('next-optimized-images');

const withTM = require('next-transpile-modules')(['@modulz/design-system']);

module.exports = withPlugins([withTM, withOptimizedImages, withVideos], {
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

  // Generate URL rewrites for components and utilities
  // So navigating to /tooltip rewrites to /tooltip/[latestVersion]
  async rewrites() {
    const isDirectory = (fileName) => fs.lstatSync(fileName).isDirectory();
    const getPaths = (dir) =>
      fs
        .readdirSync(dir)
        .map((file) => path.join(dir, file))
        .filter(isDirectory);

    const getPathOfLatestVersion = (dir) => {
      return dir.map((currDir) => {
        const [lastVersion] = fs
          .readdirSync(currDir)
          .map((file) => file.replace('.mdx', ''))
          .sort(compareVersions)
          .map((file) => path.join(currDir, file))
          .reverse();
        return lastVersion;
      });
    };

    const primitivesDirectory = path.join(__dirname, 'data/primitives/docs/components');
    const primitivesPaths = getPaths(primitivesDirectory);
    const latestPrimitivesPaths = getPathOfLatestVersion(primitivesPaths);

    const utilitiesDirectory = path.join(__dirname, 'data/primitives/docs/utilities');
    const utilitiesPaths = getPaths(utilitiesDirectory);
    const latestUtilitiesPaths = getPathOfLatestVersion(utilitiesPaths);

    return [...latestPrimitivesPaths, ...latestUtilitiesPaths].reduce((redirects, paths, index) => {
      const [, destination] = paths.split('/data');
      const [, source] = path.join(paths, '..').split('/data');
      redirects.push({ source, destination });
      return redirects;
    }, []);
  },
});
