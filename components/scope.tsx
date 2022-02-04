// // used to sync radix-ui scope
// const pkg = require('../package.json');
// const radixImports = Object.keys(pkg.dependencies)
//   .filter((module) => module.startsWith('@radix-ui/'))
//   .map((module) => `    '${module}': require('${module}'),`)
//   .join('\n');
// console.log(radixImports);

export const scope = {
  import: {
    react: require('react'),
    '@stitches/react': require('@modulz/design-system'),

    '@radix-ui/colors': require('@radix-ui/colors'),
    '@radix-ui/react-accessible-icon': require('@radix-ui/react-accessible-icon'),
    '@radix-ui/react-accordion': require('@radix-ui/react-accordion'),
    '@radix-ui/react-alert-dialog': require('@radix-ui/react-alert-dialog'),
    '@radix-ui/react-announce': require('@radix-ui/react-announce'),
    '@radix-ui/react-aspect-ratio': require('@radix-ui/react-aspect-ratio'),
    '@radix-ui/react-avatar': require('@radix-ui/react-avatar'),
    '@radix-ui/react-checkbox': require('@radix-ui/react-checkbox'),
    '@radix-ui/react-collapsible': require('@radix-ui/react-collapsible'),
    '@radix-ui/react-context-menu': require('@radix-ui/react-context-menu'),
    '@radix-ui/react-dialog': require('@radix-ui/react-dialog'),
    '@radix-ui/react-dropdown-menu': require('@radix-ui/react-dropdown-menu'),
    '@radix-ui/react-hover-card': require('@radix-ui/react-hover-card'),
    '@radix-ui/react-icons': require('@radix-ui/react-icons'),
    '@radix-ui/react-label': require('@radix-ui/react-label'),
    '@radix-ui/react-navigation-menu': require('@radix-ui/react-navigation-menu'),
    '@radix-ui/react-popover': require('@radix-ui/react-popover'),
    '@radix-ui/react-primitive': require('@radix-ui/react-primitive'),
    '@radix-ui/react-progress': require('@radix-ui/react-progress'),
    '@radix-ui/react-radio-group': require('@radix-ui/react-radio-group'),
    '@radix-ui/react-scroll-area': require('@radix-ui/react-scroll-area'),
    '@radix-ui/react-select': require('@radix-ui/react-select'),
    '@radix-ui/react-separator': require('@radix-ui/react-separator'),
    '@radix-ui/react-slider': require('@radix-ui/react-slider'),
    '@radix-ui/react-slot': require('@radix-ui/react-slot'),
    '@radix-ui/react-switch': require('@radix-ui/react-switch'),
    '@radix-ui/react-tabs': require('@radix-ui/react-tabs'),
    '@radix-ui/react-toast': require('@radix-ui/react-toast'),
    '@radix-ui/react-toggle': require('@radix-ui/react-toggle'),
    '@radix-ui/react-toggle-group': require('@radix-ui/react-toggle-group'),
    '@radix-ui/react-toolbar': require('@radix-ui/react-toolbar'),
    '@radix-ui/react-tooltip': require('@radix-ui/react-tooltip'),
    '@radix-ui/react-visually-hidden': require('@radix-ui/react-visually-hidden'),
  },
};
