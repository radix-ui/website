const fs = require('fs');
const path = require('path');
const glob = require('glob');
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
      {
        source: '/colors/docs',
        destination: '/colors/docs/overview/introduction',
        permanent: false,
      },
    ];
  },

  // Generate URL rewrites for components and utilities
  // So navigating to /tooltip rewrites to /tooltip/[latestVersion]
  async rewrites() {
    const DATA_PATH = path.join(__dirname, 'data');

    function getLatestVersionFromPath(fromPath) {
      const paths = glob.sync(`${DATA_PATH}/${fromPath}/**/*.mdx`);
      const components = {};

      paths.forEach((p) => {
        const [name, version] = p
          .replace(DATA_PATH, '')
          .replace(`/${fromPath}/`, '')
          .replace('.mdx', '')
          .split('/');

        components[name] = [...(components[name] || [version]), version];
      });

      const latest = Object.entries(components).reduce((acc, curr) => {
        const [name, versions] = curr;
        const [latestVersion] = versions.sort(compareVersions).reverse();
        acc[name] = latestVersion;
        return acc;
      }, {});

      return latest;
    }

    function createRewrites(latestVersionMap, url) {
      return [...Object.entries(latestVersionMap)].reduce((redirects, curr) => {
        const [name, version] = curr;
        redirects.push({ source: `${url}${name}`, destination: `${url}${name}/${version}` });
        return redirects;
      }, []);
    }

    return [
      ...createRewrites(
        getLatestVersionFromPath('primitives/components'),
        '/primitives/docs/components/'
      ),
      ...createRewrites(
        getLatestVersionFromPath('primitives/utilities'),
        '/primitives/docs/utilities/'
      ),
      ...createRewrites(
        getLatestVersionFromPath('design-system/components'),
        '/design-system/docs/components/'
      ),
    ];
  },
});
