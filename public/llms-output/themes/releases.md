# Releases

Radix Themes releases and their changelogs.

# Releases

Radix Themes releases and their changelogs.

## 3.1.3

- Support indeterminate indicator for the uncontrolled `Checkbox` component

## 3.1.2

- Add `areas` prop to the `Grid` component and `gridArea` prop to all layout components (`Box`, `Container`, `Flex`, `Grid`, `Section`)
- Add `overflow-wrap: anywhere` style to the `DataList` component so that long values—such as IDs—can break over to next line
- Support indeterminate indicator for the indeterminate `Checkbox` component

## 3.1.1



- Upgrade [Radix Primitives](/primitives/docs/overview/releases#june-21-2024)

## 3.1.0



- Support React 19
- Upgrade all [Radix Primitives](/primitives/docs/overview/releases#june-19-2024)

## 3.0.5



- Add `align`, `height`, `minHeight`, and `maxHeight` props to `AlertDialog.Content` and `Dialog.Content`

## 3.0.4



- Fix an issue when the Radix Themes package couldn’t be bundled with webpack because of a circular dependency within
- Support the `max` prop on the Progress component

## 3.0.3



- Fix an issue when the theme `grayColor` setting would have no effect in combination with explicit `appearance="light"` or `appearance="dark"` values
- Fix a regression when `Link` would use an automatic high-contrast color when an explicit `color` value was used.
- Fix a regression when `Link` would not use the correct text selection and focus color when nested in gray text.
- Tweak `Link` tap highlight style
- Tweak `CheckboxGroup.Item` and `RadioGroup.Item` so that a layout with overflowing text truncation would be possible to achieve
- Remove an unnecessary `data-accent-color` attribute from components where it had no practical effect to be there.
- Rework the internals of the `color` prop definition.
- Rework the autofilled and disabled colors for `TextField` and `TextArea`
- Add an internal `--spinner-animation-duration` CSS variable for the `Spinner` component

## 3.0.2



- Remove unnecessary browser prefixes from the CSS, reducing the bundle size by 17 KB
- Fix a regression when `Link` would not use an automatic high-contrast color when nested within colored text.
- Fix a regression when `Link` wouldn't display hover styles when rendered as a `button`
- Fix a regression when `TextArea` would not preserve sequences of white space in Firefox

## 3.0.1



- Fix a syntax error in the reset stylesheet
- Fix Checkbox `size="1"` indicator checkmark alignment in Safari
- Fix Checkbox and Radio disabled cursor styles not working in Safari

## 3.0.0



### Upgrade guide

This release introduces a number of breaking changes. Please follow the steps below to upgrade.

#### General

- Multi-part components now don’t export named parts anymore. Use dot notation instead, which was revised to work with React Server Components. For example:
  - `DialogRoot` → `Dialog.Root`
  - `DialogTrigger` → `Dialog.Trigger`
  - `DialogContent` → `Dialog.Content`
  - …and so on for all multi-part components:
    - `AlertDialog`
    - `Callout`
    - `ContextMenu`
    - `Dialog`
    - `DropdownMenu`
    - `HoverCard`
    - `Popover`
    - `RadioGroup`
    - `Select`
    - `Table`
    - `Tabs`
    - `TextField`
- Package internals such as prop definitions and helpers are no longer available from the root `@radix-ui/themes` import entry point.
  - Import them from `@radix-ui/themes/props` and `@radix-ui/themes/helpers` instead.

#### Props

- The `width` and `height` props on layout components don't map to space scale anymore. Find and replace your `width` and `height` prop usage with the corresponding [space scale](https://github.com/radix-ui/themes/blob/main/packages/radix-ui-themes/src/styles/tokens/space.css) steps:
  - `width="1"` → `width="4px"`
  - `width="2"` → `width="8px"`
  - `width="3"` → `width="12px"`
  - `width="4"` → `width="16px"`
  - `width="5"` → `width="24px"`
  - `width="6"` → `width="32px"`
  - `width="7"` → `width="40px"`
  - `width="8"` → `width="48px"`
  - `width="9"` → `width="64px"`
  - …and so on for `height`
  - Make sure to update responsive object syntax as well
  - You can also use `var(--space-1)` to `var(--space-9)` instead of hardcoded values.
- The `shrink` and `grow` props on layout components were renamed
  - `shrink` → `flexShrink`
  - `grow` → `flexGrow`

#### Colors

If you were using the following tokens for your custom components, make sure to replace the corresponding references.

- `--color-surface-accent` → `--accent-surface`
- Contrast colors were renamed:
  - `--accent-9-contrast` → `--accent-contrast`
  - `--red-9-contrast` → `--red-contrast`
  - `--pink-9-contrast` → `--pink-contrast`
  - `--blue-9-contrast` → `--blue-contrast`
  - …and so on for all scales
- Added a new focus color scale. Rename the following tokens:
  - `--color-autofill-root` → `--focus-a3`
  - `--color-focus-root` → `--focus-8`
  - `--color-selection-root` → `--focus-a5`
- `--gray-2-translucent` and the corresponding tinted gray colors were removed.
  - Use `--color-panel-translucent` in combination with a backdrop blur filter instead.

#### Components

- `AlertDialog`, `Dialog` now have `maxWidth="600px"` by default on the Content part.
  - This is slightly larger than the previous `580px` value. If you use dialogs that need a different width, override `maxWidth` with your own value.
- `Badge` has a new `size="3"`, `size="2"` is now much smaller, and `size="1"` dimensions were tweaked
  - Replace your `size="2"` usage with `size="3"`
- `Card` internal HTML structure and styles were reworked and now renders a single HTML node. Make sure that your code works as expected if you were relying on any of the implementation quirks to override styles or behaviour.
  - If you need to override the Card’s background color on variants other than `ghost`, use `--card-background-color` variable instead of assigning `background-color` directly, or set your background color on an `<Inset p="current">` element nested as the first child of the Card.
  - Check your Card instances that uses `asChild` or is `asChild`’ed onto by a parent component. (The common case with link or button card without any extra styles will work as expected).
- `HoverCard` and `Popover` now have `maxWidth="480px"` by default on the Content part.
  - If you use popovers and hover cards that need a wider width, override `maxWidth` with your own value.
- `RadioGroup` internal HTML structure and styles were reworked and is now designed to display an optional text label when passing `children` to the `Item` part. The `Root` part now also provides flex column styles and spacing.
  - If you need lower-level control, you can use the `Radio` component instead
- `Section` has a new `size="3"`
  - Update all your Sections that used `size="3"` to `size="4"`
- `Tabs` underlying letter/word spacing CSS variables were renamed to support both `Tabs` and `TabNav` components. If you were using them, rename them to the new values:
  - `--tabs-trigger-active-letter-spacing` → `--tab-active-letter-spacing`
  - `--tabs-trigger-active-word-spacing` → `--tab-active-word-spacing`
  - `--tabs-trigger-inactive-letter-spacing` → `--tab-inactive-letter-spacing`
  - `--tabs-trigger-inactive-word-spacing` → `--tab-inactive-word-spacing`
- `TextField` now only has 2 parts: `Root` and `Slot`, dropping the `Input` part and simplifying how props are forwarded.
  - All `TextField.Input` parts used **without** `TextField.Root` should be renamed to `TextField.Root`
  - All `TextField.Input` parts used **within** `TextField.Root` should be removed and their props should be put directly on the `TextField.Root` part
  - All `TextField.Slot` parts placed to the right of `TextField.Input` will need `side="right"` prop. However, no adjustment is needed when two slots were used within one `TextField`, e.g. one slot on the left and another one on the right. In that case, the slots will be automatically placed on different sides.
  - Make sure that your code works as expected if you were relying on any of the implementation quirks to override styles or behaviour.
- `Theme` does not set body background color automatically anymore. The background color is now provided by the root `Theme` by default. The CSS variable `--color-page-background` is no longer available.
  - In most cases, it can be safely replaced with `--color-background` available on the `.radix-themes` element.
- `Tooltip` now has `maxWidth="360px"` by default on the Content part.
  - If you use tooltips that need to be wider, override `maxWidth` with your own value.

***

### Full changelog

- General
  - Package structure
    - Improve ESM compatibility
    - Improve tree-shaking of individual component parts
    - **\[Breaking]** Drop named exports for multi-part components
      - Note: Our new approach allows dot notation to work reliably in server components too
    - **\[Breaking]** Remove component prop definitions and internal helpers from the root `@radix-ui/themes` import entry point and export them from `@radix-ui/themes/props` and `@radix-ui/themes/helpers` to make it possible to build your own component library on top of Radix Themes using the same techniques.
    - Add a wildcard entry point to the package to allow direct access to the package internals as an escape hatch if you have a complex tooling setup that can’t support modern module resolution rules
    - Add extra CSS file exports for advanced use-cases:
      - Export individual `tokens.css`, `components.css`, and `utilities.css` files in case you need fine-grained control of the CSS precedence. For example, this allows to import Radix Themes `utilities.css` after your own CSS, and everything else before that.
      - Additionally to the above, you can customise which colors to import. Instead of importing `tokens.css`, you can also import `tokens/base.css` and `tokens/colors/*.css`, where `*` corresponds to the names of the accent and gray colors you need in your project.
      - Export `layout.css` that only includes styles for the layout components (Box, Flex, Grid, Container, Section). Individual exports `layout/tokens.css`, `layout/components.css`, and `layout/utilities.css` are also available to support the above use-case.
  - Props
    - Add the following props to all layout components:
      - `minWidth`, `maxWidth`
      - `minHeight`, `maxHeight`
      - `flexBasis`, `flexShrink`, `flexGrow`
      - `gridColumn`, `gridColumnStart`, `gridColumnEnd`
      - `gridRow`, `gridRowStart`, `gridRowEnd`
      - `overflow`, `overflowX`, `overflowY`
    - Rework all layout props to allow arbitrary CSS values, including when used with the responsive object syntax. Props that support arbitrary values include:
      - `width`, `minWidth`, `maxWidth`
      - `height`, `minHeight`, `maxHeight`
      - `m`, `mx`, `my`, `mt`, `mr`, `mb`, `ml`
      - `p`, `px`, `py`, `pt`, `pr`, `pb`, `pl`
      - `inset`, `top`, `right`, `bottom`, `left`
      - `gap`, `gapX`, `gapY`
      - `flexBasis`, `flexShrink`, `flexGrow`
      - `gridColumn`, `gridColumnStart`, `gridColumnEnd`
      - `gridRow`, `gridRowStart`, `gridRowEnd`
    - **\[Breaking]** The `width` and `height` props don't map to space scale anymore. This is because in the vast majority of cases, width and height were not set to space scale, and with that, space scale as an IDE autocomplete suggestion felt odd/misleading.
    - **\[Breaking]** Rename `shrink` and `grow` props to `flexShrink` and `flexGrow`
    - Update the type signature of the layout props so that code editor suggestions use just space scale values when possible. CSS keywords and other values such as `"auto"` or `"100vw"` are still available as manual string values.
    - Document all layout props with JSDoc
    - Fix an issue with responsive props when using a breakpoints object without the `initial` key would not apply the default prop value
    - Remove the native `color`, `defaultValue`, and `defaultChecked` attributes from components that inherit them from the native HTML elements to avoid confusion with their custom implementations
    - **\[Breaking]** Rework the availability of `asChild` prop on all components and parts
  - Colors
    - Make sure `highContrast` text colors work consistently when nested within other components that accept an accent color
    - Tweak the background color of all `variant="soft"` menu items
    - **\[Breaking]** Rename `--color-surface-accent` to `--accent-surface`
    - **\[Breaking]** Rename `--accent-9-contrast`, `--red-9-contrast`, `--pink-9-contrast`, `--blue-9-contrast`, etc. to `--accent-contrast`, `--red-contrast`, `--pink-contrast`, `--blue-contrast` and so on.
    - Remove `--gray-2-translucent` and the corresponding tinted gray colors
    - Tweak `--color-surface` and `--color-panel-translucent` values
    - **\[Breaking]** Replace `--color-focus-root`, `--color-selection-root`, `--color-autofill-root` with a focus color scale, e.g. `--focus-1` – `--focus-12`, and `--focus-a1` – `--focus-a12`.
  - Other
    - Speed up most of the animations
    - Ensure all elements that have padding or border styles use `box-sizing: border-box`
    - Ensure that disabled cursor styles are applied correctly
    - Add a blur backdrop filter effect to the translucent panels
- 11 new components
  - `DataList`
    - Component for displaying text data as key-value pairs. Parts:
      - `Root`
      - `Item`
      - `Label`
      - `Value`
  - `CheckboxGroup`
    - Group of checkboxes with an optional text label and roving focus. Parts:
      - `Root`
      - `Item`
  - `CheckboxCards`
    - Interactive card components to pick one or more value from the list. Parts:
      - `Root`
      - `Item`
  - `Progress`
    - Progress bar component that indicates completion of a task.
  - `Radio`
    - Standalone element for building your own layouts with radio inputs.
  - `RadioCards`
    - Interactive card components to pick one of the values from the list. Parts:
      - `Root`
      - `Item`
  - `Reset`
    - Component that resets the styles for any native HTML element.
  - `SegmentedControl`
    - Component for selecting a single option out of many and for controlling tab-like interfaces
  - `Skeleton`
    - Component that may wrap any UI element and turn it into a loading skeleton. Can also render self or a React Fragment conditionally using a `loading` prop.
  - `Spinner`
    - Loading spinner component. Like `Skeleton`, it also may wrap any UI element and display itself using a conditional `loading` prop.
  - `TabNav`
    - Equivalent for `Tabs`, but used for page navigation. Renders regular links and supports roving focus. Parts:
      - `Root`
      - `Link`
- `AlertDialog`, `Dialog`
  - Add `position: relative` to support absolutely positioned children.
  - Add `width`, `minWidth`, `maxWidth` props to the Content part.
  - Set `maxWidth="600px"` by default on the Content part.
  - Rework the scroll container so that it displays scrollbars on the viewport rather than confined to the dialog Content part. Make sure that your code works as expected if you were relying on any of the implementation quirks to override styles or behaviour.
- `Badge`
  - Remove `user-select: none`
  - **\[Breaking]** Add `size="3"`, make `size="2"` much smaller, tweak `size="1"` dimensions
- `Blockquote`, `Code`, `Em`, `Heading`, `Quote`, `Link`, `Strong`, `Text`
  - Add new `wrap` and `truncate` props that control whether the text wraps and whether it is truncated with ellipsis
- `Card`
  - Rework the internal HTML structure and styles. This component now renders a single HTML node. Make sure that your code works as expected if you were relying on any of the implementation quirks to override styles or behaviour.
- `Code`
  - `variant="ghost"` color now works similarly to Text, inheriting the color unless set explicitly using the `color` prop
- `Container`
  - Add `align` prop to control whether the container content is aligned to the left, center, or right
  - **\[Breaking]** Change the `display="block"` value to `display="initial"` (the former value was broken)
- `ContextMenu`, `DropdownMenu`
  - Add `color` prop to `CheckboxItem` and `RadioItem` parts
- `Checkbox`, `RadioGroup`, `Switch`
  - Rework the internal HTML structure and styles. These components now render fewer HTML nodes and forward all props to the topmost node. Make sure that your code works as expected if you were relying on any of the implementation quirks to override styles or behaviour.
- `DropdownMenu`
  - Use a brighter text color for the highlighted item when the Content part uses `variant="soft"`
  - Add an optional `TriggerIcon` part that renders an arrow down indicator
- `Box`, `Flex`, `Grid`
  - Add support for `as` prop to render as `span` or `div`
  - For Box, `display: block` style is now enforced regardless of the tag
- `Button`, `IconButton`
  - Add new `loading` prop
- `Flex`
  - Add `gapX` and `gapY` props
- `HoverCard`, `Popover`
  - Add `position: relative` to support absolutely positioned children.
  - Add `width`, `minWidth`, `maxWidth`, `height`, `minHeight`, `maxHeight` props to the Content part.
  - Set `maxWidth="480px"` by default on the Content part.
- `RadioGroup`
  - \[**Breaking**] Rework the internal HTML structure and styles. This component is now designed to display an optional text label when passing `children` to the `Item` part, and the `Root` part now provides flex column styles and spacing.
- `Section`
  - **\[Breaking]** Change the `display="block"` value to `display="initial"` (the former value was broken)
  - **\[Breaking]** Use a new value for `size="3"`, use the previous value for `size="4"`
- `Select`
  - Make sure that Trigger font weight is not inherited, e.g. from a wrapping `<label>` element
- `Separator`
  - Allow responsive values for the `orientation` prop
- `ScrollArea`
  - Fix an issue when Scroll Area would be unable to stretch to 100% height when informed by the parent’s auto height
- `Slider`
  - Change the size of the bounding box to match the size of the Slider track
  - Replace `flex-shrink: 0` with `flex-grow: 1` and `width: stretch` / `height: stretch` to allow the slider element to flex and shrink in layouts more intuitively.
  - Fix an overzealous focus outline in Safari
- `Table`
  - Add new `layout` prop to control the `table-layout` style property
  - Align `width` prop type signature and implementation on the `TableCell` part with the reworked `width` prop on the layout components
  - Add `minWidth` and `maxWidth` props to the `TableCell` part
- `Tabs`:
  - Add `color` and `highContrast` props to `TabsList`
  - Add margin props `TabsList` and `TabsContent`
  - Renamed the letter/word spacing CSS variables in `.radix-themes` so that it supports both `Tabs` and `TabNav` components.
    - `--tabs-trigger-active-letter-spacing` → `--tab-active-letter-spacing`
    - `--tabs-trigger-active-word-spacing` → `--tab-active-word-spacing`
    - `--tabs-trigger-inactive-letter-spacing` → `--tab-inactive-letter-spacing`
    - `--tabs-trigger-inactive-word-spacing` → `--tab-inactive-word-spacing`
- `TextArea`
  - Add `radius` prop
  - Add `resize` prop
  - Fix an issue when Grammarly extension would break the component styles
  - Make sure that the font weight is not inherited, e.g. from a wrapping `<label>` element
  - Rework the internal HTML structure and styles. Make sure that your code works as expected if you were relying on any of the implementation quirks to override styles or behaviour.
- `TextField`
  - **\[Breaking]** Remove the `Input` part to simplify how props are forwarded and rework internal HTML structure and styles.
  - Fix an issue with some input `type`s not supporting `getSelectionRange`
  - Fix an issue when Grammarly extension would break the component styles
  - Make sure that the font weight is not inherited, e.g. from a wrapping `<label>` element
- `ThemePanel`
  - Change the hotkey to toggle the Theme Panel to "T" keypress and dark mode to "D" keypress (without modifiers).
- `Theme`
  - Set `min-height: 100vh` on the root `Theme` component
  - Fix an issue when in certain situations, `hasBackground` prop value would have no effect
  - Refine the logic for when `Theme` has a background color by default. `Theme` without an explicit `hasBackground` prop will display a background color:
    - When it is the root `Theme` component
    - When it has an explicit appearance value, e.g. `<Theme apperance="light">` or `<Theme apperance="dark">`
  - Body background color is no longer set automatically. The background color is now provided by the root `Theme` by default.
    - **\[Breaking]** The CSS variable `--color-page-background` is no longer available.
    - `suppressHydrationWarning` on `html` is no longer needed (unless required by other libraries, like `next-themes`)
  - Document all Theme props with JSDoc
- `Tooltip`
  - Add `width`, `minWidth`, `maxWidth` props.
  - Set `maxWidth="360px"` by default on the tooltip content
  - Change the default delay duration to 200ms

## 2.0.2



- Fix an issue when Chrome would sometimes crash while using CSS inspector on a Radix Themes stylesheet.

## 2.0.1



- `Card`
  - Fix an issue when `variant="surface"` border color may disappear in browsers that don't support `color-mix`.
  - Tweak `variant="surface"` border color.
- `Code`
  - When `variant="ghost"` is used within a `Link`, make sure that `underline="hover"` on the `Link` is respected.
- `TextField`
  - Improve vertical text alignment with common fonts.
  - Don’t apply the autofill accent color when the input is disabled.
  - Make sure the autofill accent color always pairs with the focus outline color.

## 2.0.0



- General
  - Combine selectors in the CSS build, improving the developer experience when inspecting elements in the browser.
  - Remove comments from the CSS build.
  - Cap CSS selector specificity at `0,1,0` for styling HTML elements and at `0,1,1` for styling pseudo-elements, improving compatibility with Tailwind.
    - **\[Upgrade guide]** If you were relying on any specificity quirks of Radix Themes, make sure that your style overrides still work as expected.
  - Rework dark mode colors, refine light mode colors (via Radix Colors 3.0.0).
    - Fix oversaturated transparent grays.
    - **\[Upgrade guide]** If you were using the color tokens for your custom styles, make sure that your designs look as expected.
    - **\[Upgrade guide]** If you were overriding certain colors, make sure that your overrides are harmonized with the new color scales.
  - Rework transparent black and white color scales.
    - **\[Upgrade guide]** If you were using transparent black and white color scales for your custom styles (`--black-a1`, `--white-a1`, etc.), make sure to check the new values and update the steps used so that your designs look as expected:
      - Change `--black-a1` to `rgba(0, 0, 0, 0.01)`.
      - Change `--black-a2` to `rgba(0, 0, 0, 0.024)`.
      - Change `--black-a3` to `--black-a1`.
      - Change `--black-a4` to `--black-a2`.
      - Change `--black-a5` to `--black-a2`.
      - Change `--black-a6` to `--black-a3`.
      - Change `--black-a7` to `--black-a3` or `--black-a4`.
      - Change `--black-a8` to `--black-a5`.
      - Change `--black-a9` to `--black-a6` or `--black-a7`.
      - Change `--black-a10` to `--black-a7`.
      - Change `--black-a11` to `--black-a8`.
      - Change `--black-a12` to `--black-a11`.
      - Change `--white-a1` to `transparent`.
      - Change `--white-a2` to `rgba(255, 255, 255, 0.01)`.
      - Change `--white-a3` to `--white-a1` or `--white-a2`.
      - Change `--white-a4` to `--white-a2`.
      - Change `--white-a5` to `--white-a3`.
      - Change `--white-a6` to `--white-a3` or `--white-a4`.
      - Change `--white-a7` to `--white-a4`.
      - Change `--white-a8` to `--white-a5`.
      - Change `--white-a9` to `--white-a6`.
      - Change `--white-a10` to `--white-a7`.
      - Change `--white-a11` to `--white-a9`.
      - Change `--white-a12` to `--white-a11` or `--white-a12`.
  - Refine the shadow scale.
  - Maintain theme accent color for focus rings on most `color="gray"` component, similarly to the text selection color.
  - Change some internal component-specific CSS variables to follow a naming pattern.
  - Make sure that forced light/dark appearance on the `Theme` component also sets the corresponding browser colors, like the correct input autofill background color.
  - Rename all `@keyframes` animations with `rt-` prefix and into kebab case.
  - Use `outline` rather than `box-shadow` for most focus styles, which avoids a slight anti-aliasing issue in Chrome on focused elements.
- `AlertDialog`, `Dialog`
  - Add padding around dialog content to prevent it from touching the viewport edges.
  - Make sure that the dialog content doesn’t overflow viewport on iOS.
- `Avatar`
  - Don’t enforce fallback icon size.
    - **\[Upgrade guide]** If you were using `svg` assets as a fallback, make sure to set an appropriate size manually.
  - Add CSS variables to control the cursor style on interactive elements:
    - `--cursor-button: default;`
    - `--cursor-checkbox: default;`
    - `--cursor-disabled: not-allowed;`
    - `--cursor-link: pointer;`
    - `--cursor-menu-item: default;`
    - `--cursor-radio: default;`
    - `--cursor-slider-thumb: default;`
    - `--cursor-slider-thumb-active: default;`
    - `--cursor-switch: default;`
  - Replace `.rt-reset-button` and `.rt-reset-a` classes with a single `.rt-reset` class.
    - The new `.rt-reset` class can be use to reset `a`, `button`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `ol`, `ul`, `p`, and `pre` tags when building custom components.
    - **\[Upgrade guide]** If you were using these classes for your custom components, update the class name used.
- `Blockquote`
  - **\[Breaking]** Remove `trim` prop.
- `Button`, `IconButton`
  - Refine and normalise the look and feel of the disabled states.
  - Apply disabled styles to other elements when using `disabled` together with `asChild`
  - Improve `variant="classic"` look and feel across different accent colors in light and dark mode.
- `Callout`
  - Tweak how the layout works to allow nesting multiple `Callout.Text` elements within `Callout.Root`
    - **\[Upgrade guide]** If you were relying on how `Callout.Root` happened to provide flex properties, change your layout to use a `Flex` component explicitly.
  - Fix an issue when the callout would inherit text color unless an explicit `color` prop was passed.
    - **\[Upgrade guide]** If you preferred the previous look, pass `highContrast` prop to your callouts to make the text darker.
  - Use a gray background for a gray `variant="surface"`.
  - Use a darker outline color `variant="outline"`.
- `Checkbox`
  - **\[Breaking]** Improve layout so that wrapping a checkbox in `Text` component automatically aligns the checkbox with the first line of the text.
    - **\[Upgrade guide]** Make sure that your layouts with checkboxes look as expected. If not, wrap your checkboxes in `<Text as="label" size="...">`, using your preferred text size.
  - **\[Breaking]** Rework sizes – add a smaller `size="1"`, change the default size to `size="2"`, add a more refined `size="3"`
    - **\[Upgrade guide]** If you were using `size="1"` or `size="2"` checkboxes via an explicit `size` prop, rename them to `size="2"` and `size="3"` respectively.
  - Refine the look and feel of `variant="classic"`.
  - Refine and normalise the look and feel of the disabled states.
- `Card`
  - Update the `variant="classic"` shadow so that it doesn’t extend outside of the element.
  - Refine hover and pressed styles for `variant="classic"`.
  - Add missing pressed styles.
  - Refine how the inner shadows are applied so that they blend with the background outside of the component.
- `Code`
  - Add interactive styles when `Code` is within `Link`.
  - Fix an issue when `variant="ghost"` font size would be inconsistent depending on whether the size was based on a parent `Text` element or came from the code’s own `size` prop.
  - Scale the outline thickness relative to the font size for `variant="outline"` and `variant="surface"`.
  - Improve `::selection` background color for `variant="solid"`.
  - Add CSS variables to `.radix-themes` for customising the padding of `Code` variants in case the default values don’t work well with the vertical metrics of custom code font.
    - `--code-padding-top`
    - `--code-padding-bottom`
- `DropdownMenu`, `ContextMenu`
  - Reduce border radius when theme setting is `radius="full"`.
  - Refine horizontal paddings.
  - Refine label look and feel.
- `Grid`
  - Fix a bug when nesting `Grid` components could cause the descendant `Grid`’s to inherit some parent styles unintentionally.
- `Inset`
  - Add `clip` prop to control whether content is clipped to the padding or to the border of the parent element.
  - Automatically adjust table cell padding for when `Table` is inside `Inset`
- `Kbd`
  - Tweak vertical alignment.
- `Link`
  - Desaturate the underline color.
  - Make links automatically high-contrast within colored `Heading` elements (similarly to the automatic high-contrast within `Text`).
  - Scale the underline thickness relative to the font size for `variant="outline"` and `variant="surface"`.
- `RadioGroup`
  - **\[Breaking]** Improve layout so that wrapping a radiobutton in `Text` component automatically aligns the radiobutton with the first line of the text.
    - **\[Upgrade guide]** Make sure that your layouts with radio buttons look as expected. If not, wrap your radio buttons in `<Text as="label" size="...">`, using your preferred text size.
  - **\[Breaking]** Rework sizes – add a smaller `size="1"`, change the default size to `size="2"`, add a more refined `size="3"`.
    - **\[Upgrade guide]** If you were using `size="1"` or `size="2"` radio buttons via an explicit `size` prop, rename them to `size="2"` and `size="3"` respectively.
  - Refine the look and feel of `variant="classic"`.
  - Refine and normalise the look and feel of the disabled states.
- `Select`
  - Fix invisible scrollbar in long item lists.
  - Improve `variant="classic"` look and feel across light and dark mode.
  - Align `SelectContent` to the left of the trigger when using `position="popper"`.
  - Refine horizontal paddings.
  - Refine label look and feel.
  - Rework `size="3"`.
- `ScrollArea`
  - Upgrade the primitive version, fixing an upstream type issue.
  - Rename scrollbar margin variables to include the scrollbar orientation and declare them on `.radix-themes` to facilitate easier scrollbar position adjustments.
    - **\[Upgrade guide]** If you were using the variables `--scrollarea-scrollbar-margin-top`, `--scrollarea-scrollbar-margin-left`, etc. make sure that they follow the new names and are set at the appropriate level. There's no need to target `.rt-ScrollAreaScrollbar` element to set the variables anymore, as they can be set just on the component that needs the override. New variables:
      - `--scrollarea-scrollbar-horizontal-margin-top`
      - `--scrollarea-scrollbar-horizontal-margin-bottom`
      - `--scrollarea-scrollbar-horizontal-margin-left`
      - `--scrollarea-scrollbar-horizontal-margin-right`
      - `--scrollarea-scrollbar-vertical-margin-top`
      - `--scrollarea-scrollbar-vertical-margin-bottom`
      - `--scrollarea-scrollbar-vertical-margin-left`
      - `--scrollarea-scrollbar-vertical-margin-right`
- `Slider`
  - Refine the shadows and colors used in the components.
  - Refine and normalise the look and feel of the disabled states.
  - Fix an issue where high contrast sliders would have an incorrect disabled style.
- `Switch`
  - **\[Breaking]** Improve layout so that wrapping a switch in `Switch` component automatically aligns the switch with the first line of the text.
    - **\[Upgrade guide]** Make sure that your layouts with switches look as expected. If not, wrap your switches in `<Text as="label" size="...">`, using your preferred text size.
  - **\[Breaking]** Rework sizes, making `size="2"` and `size="3"` smaller.
    - **\[Upgrade guide]** Use `size="3"` instead of `size="2"` to match the previous look.
  - Refine the shadows and colors used in the components.
  - Refine and normalise the look and feel of the disabled states.
- `Table`
  - Refine how the outer border is applied so that it blends with the background outside of the component.
- `Tabs`
  - Add CSS variables to `.radix-themes` for customising the letter spacing and word spacing of active and inactive tabs so that you can minimise the apparent shift in weight in case the default values don’t work for your custom font.
    - `--tabs-trigger-active-letter-spacing`
    - `--tabs-trigger-active-word-spacing`
    - `--tabs-trigger-inactive-letter-spacing`
    - `--tabs-trigger-inactive-word-spacing`
- `Text`
  - Add `as="label"` option to the `as` prop.
  - Improve how prop types are resolved when `as` prop isn’t specified.
- `TextArea`
  - Rework the internal implementation, now using multiple HTML nodes for styling purposes.
    - Adjust the layout styles so that `TextArea` behaves like a true `display: block` element, filling the available space horizontally.
    - The `style` and `className` are now forwarded to the wrapping `div` element. The `ref` and other props are still forwarded to the `textarea` itself.
    - **\[Upgrade guide]** If you were overriding `TextArea` styles via `style`, `className`, or custom CSS that targets the related HTML nodes, make sure that your custom styles work as expected.
    - **\[Upgrade guide]** If you were relying on the intrinsic width of `TextArea` set by the browser, make sure that your layout looks as expected.
  - Refine padding values for a more balanced look.
    - Use matching scroll margins for a nicer typing experience when the `TextArea` overflows.
  - Refine how the inner shadows are applied so that they blend with the background outside of the component.
  - Refine and normalise the look and feel of disabled and read-only states.
  - Fix a Safari bug when the text value would appear tinted in the disabled input.
  - Improve autofill styles.
- `TextField`
  - Reset `z-index` of the container to avoid potential stacking issues.
  - Refine padding values for a more balanced look.
    - Use `text-indent` instead of `padding-left` so that long values aren't truncated on the left when the cursor is at the end of the input.
  - Refine how the inner shadows are applied so that they blend with the background outside of the component.
  - Refine and normalise the look and feel of disabled and read-only states.
  - Fix a Safari bug when the text value would appear tinted in the disabled input.
  - Remove ellipsis truncation, as this prevented long values from being shown when scrolling on the input horizontally in Chrome.
  - Improve autofill styles.
- `ThemePanel`
  - Disable transitions when changing the appearance.
  - Improve contrast in the border radius preview.
- `Tooltip`
  - Reduce border radius when theme setting is `radius="full"`.
  - **\[Breaking]** Remove `multiline` prop.
    - **\[Upgrade guide]** If you were using `multiline` prop, pass `style={{ maxWidth: 250 }}` to the relevant Tooltip elements.

## 1.1.2



- Export `ThemeProps` and `ThemePanelProps`

## 1.1.1



- Export prop types for all components, resolving type errors with certain setups.

## 1.1.0



- Three new color scales: `ruby`, `iris`, and `jade`
- Set explicit versions of the Radix Primitives dependencies to allow stable builds.
- Use an explicit `React.FC` type for `ContextMenuSub`, `DialogRoot`, `HoverCardRoot`, and `PopoverRoot`, resolving a type error with certain setups.

## 1.0.0



- Initial release! 🎉