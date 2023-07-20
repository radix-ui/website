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
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mjs/,
      include: /node_modules/,
      type: 'javascript/auto',
    });
    return config;
  },

  // Next.js config
  async redirects() {
    return [
      {
        source: '/case-studies/:slug*',
        destination: '/primitives/case-studies/:slug*',
        permanent: true,
      },
      {
        source: '/docs/colors',
        destination: '/docs/colors/overview/installation',
        permanent: false,
      },
      {
        source: '/docs/colors/palette-composition/the-scales',
        destination: '/docs/colors/palette-composition/scales',
        permanent: false,
      },
      {
        source: '/docs/colors/getting-started/:slug*',
        destination: '/docs/colors/overview/:slug*',
        permanent: false,
      },
      {
        source: '/docs/primitives',
        destination: '/docs/primitives/overview/introduction',
        permanent: false,
      },
      {
        source: '/docs/primitives/utilities/aspect-ratio/:slug*',
        destination: '/docs/primitives/components/aspect-ratio/:slug*',
        permanent: false,
      },
      {
        source: '/docs/primitives/utilities/label/:slug*',
        destination: '/docs/primitives/components/label/:slug*',
        permanent: false,
      },
      {
        source: '/primitives',
        destination: '/',
        permanent: true,
      },
      {
        source: '/primitives/docs/:slug*',
        destination: '/docs/primitives/:slug*',
        permanent: true,
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
        '/docs/primitives/components/'
      ),
      ...createRewrites(
        getLatestVersionFromPath('primitives/utilities'),
        '/docs/primitives/utilities/'
      ),
      ...createRewrites(
        getLatestVersionFromPath('design-system/components'),
        '/design-docs/system/components/'
      ),
    ];
  },
});
