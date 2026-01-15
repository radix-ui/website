# Introduction

An open-source UI component library for building high-quality, accessible design systems and web apps.

# Introduction

An open-source UI component library for building high-quality, accessible
design systems and web apps.

Radix Primitives is a low-level UI component library with a focus on accessibility, customization and developer experience. You can use these components either as the base layer of your design system, or adopt them incrementally.

## Vision

Most of us share similar definitions for common UI patterns like accordion, checkbox,
combobox, dialog, dropdown, select, slider, and tooltip. These UI patterns are [documented by WAI-ARIA](https://www.w3.org/TR/wai-aria-practices/#aria_ex) and generally understood by the community.

However, the implementations provided to us by the web platform are inadequate. They're
either non-existent, lacking in functionality, or cannot be customized sufficiently.

So, developers are forced to build custom components; an incredibly difficult task. As a
result, most components on the web are inaccessible, non-performant, and lacking important
features.

Our goal is to create a well-funded, open-source component library that the community can
use to build accessible design systems.

## Key Features

### Accessible

Components adhere to the [WAI-ARIA design patterns](https://www.w3.org/TR/wai-aria-practices-1.2) where possible. We handle many of the difficult implementation details related to accessibility, including aria and role attributes, focus management, and keyboard navigation. Learn more in our [accessibility](./accessibility) overview.

### Unstyled

Components ship without styles, giving you complete control over the look and feel. Components can be styled with any styling solution. Learn more in our [styling](../guides/styling) guide.

### Opened

Radix Primitives are designed to be customized to suit your needs. Our open component architecture provides you granular access to each component part, so you can wrap them and add your own event listeners, props, or refs.

### Uncontrolled

Where applicable, components are uncontrolled by default but can also be controlled, alternatively. All of the behavior wiring is handled internally, so you can get up and running as smoothly as possible, without needing to create any local states.

### Developer experience

One of our main goals is to provide the best possible developer experience. Radix Primitives provides a fully-typed API. All components share a similar API, creating a consistent and predictable experience. We've also implemented an `asChild` prop, giving users full control over the rendered element.

### Incremental adoption

We recommend installing the `radix-ui` package and importing the primitives you need. This is the simplest way to get started, prevent version conflicts or duplication, and makes it easy to manage updates. The package is tree-shakeable, so you should only ship the components you use.

```bash
npm install radix-ui
```

```tsx
import { Dialog, DropdownMenu, Tooltip } from "radix-ui";
```

Alternatively, each primitive can be installed individually:

```bash
npm install @radix-ui/react-dialog
npm install @radix-ui/react-dropdown-menu
npm install @radix-ui/react-tooltip
```

```tsx
import * as Dialog from "@radix-ui/react-dialog";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Tooltip from "@radix-ui/react-tooltip";
```

When installing separately, we recommend updating all Radix packages together to prevent duplication of shared dependencies and keep your bundle size down.

## Community

To get involved with the Radix community, ask questions and share tips, [Join our Discord](https://discord.com/invite/7Xb99uG).

To receive updates on new primitives, announcements, blog posts, and general Radix tips, follow along on [Bluesky](https://bsky.app/profile/radix-ui.com) or [Twitter](https://twitter.com/radix_ui).

To file issues, request features, and contribute, check out our GitHub.

- [GitHub repo](https://github.com/radix-ui/primitives)
- [Code of conduct](https://github.com/radix-ui/primitives/blob/main/CODE_OF_CONDUCT.md)