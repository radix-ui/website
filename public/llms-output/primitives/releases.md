# Releases

Radix Primitives releases and their changelogs.

# Releases

Radix Primitives releases and their changelogs.

## May 5, 2025

This release introduces a brand new primitive in preview: [`PasswordToggleField`](../components/password-toggle-field).

This new primitive provides components for rendering a password input alongside a button to toggle its visibility. Aside from its primary functionality, it also includes:

- Returning focus to the input when toggling with a pointer
- Maintaining focus when toggling with keyboard or virtual navigation
- Resetting visibility to hidden after form submission to prevent accidental storage
- Implicit accessible labeling for icon-based toggle buttons

This API is currently unstable, and we hope you'll help us test it out! Import the primitive using the `unstable_` prefix.

```tsx
import { unstable_PasswordToggleField as PasswordToggleField } from "radix-ui";

export function PasswordField() {
	return (
		<PasswordToggleField.Root>
			<PasswordToggleField.Input />
			<PasswordToggleField.Toggle>
				<PasswordToggleField.Icon
					visible={<EyeOpenIcon />}
					hidden={<EyeClosedIcon />}
				/>
			</PasswordToggleField.Toggle>
		</PasswordToggleField.Root>
	);
}
```

### Other updates

- Add unstable `Provider`, `Trigger` and `BubbleInput` parts to Checkbox ([#3459](https://github.com/radix-ui/primitives/pull/3459))
- Update default input type to `text` and pass to the underlying input element ([#3510](https://github.com/radix-ui/primitives/pull/3510))

## April 22, 2025

- Update the dependency for `use-sync-external-store` to ensure entrypoint is valid&#x20;

## April 17, 2025

This release introduces a brand new primitive in preview: [`OneTimePasswordField`](../components/one-time-password-field).

This new group of components are designed to implement a common design pattern for one-time password fields displayed as separate input fields for each character. This UI is deceptively complex to implement in such a way that interactions follow user expectations. The new primitive handles all of this complexity for you, including:

- Keyboard navigation mimicking the behavior of a single input field
- Overriding values on paste
- Password manager autofill support
- Input validation for numeric and alphanumeric values
- Auto-submit on completion
- Focus management
- Hidden input to provide a single value to form data

As this is a preview release, **the API is currently unstable**. We hope you'll help us test it out and let us know how it goes.

Import the primitive using the `unstable_` prefix.

```tsx
import { unstable_OneTimePasswordField as OneTimePasswordField } from "radix-ui";

export function Verify() {
	return (
		<OneTimePasswordField.Root>
			<OneTimePasswordField.Input />
			<OneTimePasswordField.Input />
			<OneTimePasswordField.Input />
			<OneTimePasswordField.Input />
			<OneTimePasswordField.Input />
			<OneTimePasswordField.Input />
			<OneTimePasswordField.HiddenInput />
		</OneTimePasswordField.Root>
	);
}
```

### Other updates

- All form controls with internal bubble inputs now use the Radix `Primitive` component by default. This will allow us to expose these components in a future release so users can better control this behavior in the future.
- Minor improvements to `useControllableState` to enhance performance, reduce surface area for bugs, and log warnings when misused

## April 8, 2025

- Improved rendering performance for the Tooltip provider&#x20;
- Ensure Tooltip is closed when `pointerdown` is fired on the trigger&#x20;
- Add support for `crossOrigin` in Avatar images&#x20;
- Fix Avatar flashing when an image is already cached&#x20;
- Improve `displayName` for better debugging of slottable components&#x20;

## February 5, 2025

- Updated dependencies to remove peer dependency warnings for `react` and `react-dom`&#x20;
- Skip forwarding refs to `SlotClone` when the child is a `Fragment`&#x20;

## January 22, 2025

- Added a `radix-ui` package that exposes the latest version of all Radix Primitives from a single place. This tree-shakable entrypoint makes it easier to bring in whatever components you need and keep them up-to-date without worrying about conflicting or duplicate dependencies.
- Updated `aria-hidden` and `react-remove-scroll` dependencies for the following components:
  - Alert Dialog
  - Context Menu
  - Dialog
  - Dropdown Menu
  - Hover Card
  - Menubar
  - Navigation Menu
  - Popover
  - Select
  - Toast
  - Tooltip

## October 1, 2024

- Fix `allowPinchZoom` bug for trackpad users&#x20;

* Check for `referrerPolicy` when checking the image loading status&#x20;

- Fix a bug where `defaultChecked` unexpectedly changed for uncontrolled checkboxes&#x20;
- Forward the `form` prop to the bubble input element to fix non-parent form submissions&#x20;

* Fix `allowPinchZoom` bug for trackpad users&#x20;

- Forward the `form` prop to the bubble input element to fix non-parent form submissions&#x20;

* Fix `asChild` prop not working as expected on the `Viewport`&#x20;
* Update internal styles to fix other issues with `Viewport`&#x20;

- Fix error thrown when items are initially undefined&#x20;
- Fix several bugs for touch devices&#x20;
- Forward the `form` prop to the bubble input element to fix non-parent form submissions&#x20;
- Fix position bug where popover may start off-screen for long items&#x20;

* Forward the root `form` prop to each thumb's bubble input element to fix non-parent form submissions&#x20;

- Forward the `form` prop to the bubble input element to fix non-parent form submissions&#x20;

* Fix incorrect focus when `hotkey` is an empty array&#x20;

## June 28, 2024

- Export `CheckedState` type

* Export `TooltipProviderProps` type

## June 21, 2024

- Add a missing internal utility to `package.json`. The corresponding packages that provide a Portal part also received a patch update.&#x20;

## June 19, 2024

Released minor versions for all primitives with the following changes:

- Full React 19 compatability&#x20;
- Full RSC compatibility&#x20;
- Internal build tooling changes &#x20;
- Update and pin `react-remove-scroll` dependency version to avoid double scrollbar bugs in edge cases&#x20;
- Don’t scroll menu items in response to hover&#x20;
- Make sure that components that close on Escape key press capture the corresponding keyboard event. This way you can call `stopPropagation` in `onEscapeKeyDown` if you need more control rendering Radix components within another component that closes on Escape key press.
- Make sure that components with roving focus do not interfere with browser or system hotkeys, such as back navigation&#x20;
- Make sure that components that support `hideWhenDetached` prop do not allow interactions with hidden content &#x20;

* Log an error when an accessible title via the `Dialog.Title` part is missing&#x20;
* Log a warning when an accessible description via the `Dialog.Description` part is missing&#x20;

- Make sure that the component doesn’t interfere when clicking on the spinner of a number input

* Remove unsupported `disableOutsidePointerEvents` prop

- Fix hydration error in SSR on the initial render&#x20;

* Explicitly allow `value={undefined}` to represent an indeterminate state, matching the current practical behaviour&#x20;

- Add `nonce` prop to be able to pass CSP nonce to the inline styles&#x20;

* Add `nonce` prop to be able to pass CSP nonce to the inline styles&#x20;

## September 25, 2023

- Fix pointer-events issue when clicking outside&#x20;
- Fix `Portal` part types lying about accepting DOM props&#x20;

* Prevent image flash&#x20;

- Fix pointer-events issue when clicking outside&#x20;
- Fix `Portal` part types lying about accepting DOM props&#x20;

* Fix pointer-events issue when clicking outside&#x20;
* Fix `Portal` part types lying about accepting DOM props&#x20;

- Fix pointer-events issue when clicking outside&#x20;
- Fix `Portal` part types lying about accepting DOM props&#x20;

* Fix pointer-events issue when clicking outside&#x20;
* Fix `Portal` part types lying about accepting DOM props&#x20;

- Fix pointer-events issue when clicking outside&#x20;
- Fix `Portal` part types lying about accepting DOM props&#x20;

* Fix pointer-events issue when clicking outside&#x20;
* Fix `Portal` part types lying about accepting DOM props&#x20;

- Fix pointer-events issue when clicking outside&#x20;
- Fix `Portal` part types lying about accepting DOM props&#x20;
- Fix `Popover` nested inside `Dialog` not opening&#x20;

* Add `scroll-behavior: smooth` compatibility&#x20;

- **\[Breaking]** Add ability to reset to placeholder using `""` `value`. Note that this is only a breaking change if you were using an option with a `value` of `""`.&#x20;
- Fix pointer-events issue when clicking outside&#x20;
- Fix `Portal` part types lying about accepting DOM props&#x20;

* Fix pointer-events issue when clicking outside&#x20;

- Fix pointer-events issue when clicking outside&#x20;
- Fix `Portal` part types lying about accepting DOM props&#x20;
- Fix issue with boundary padding calculations&#x20;
- Add option to always re-position `Content` on the fly&#x20;

## May 26, 2023

This release ensures all of our primitives are ESM compatible. We have also updated to the latest version of [Floating UI](https://floating-ui.com/) for all of our popper-positioned primitives.

- Improve ESM compatibility&#x20;
- Fix possible upstream compiler errors (`@types/react` phantom dependency)&#x20;

* Position content correctly when matching trigger size&#x20;

- Prevent non-modal dialog from re-opening when closing using trigger in Safari&#x20;
- Ensure focus trapping is maintained when the focused item is deleted&#x20;

* Position content correctly when matching trigger size&#x20;

- Position content correctly when matching trigger size&#x20;

* Position content correctly when matching trigger size&#x20;

- Do not close when clicking items and meta key is down&#x20;

* Position content correctly when matching trigger size&#x20;
* Prevent non-modal popover from re-opening when closing using trigger in Safari&#x20;
* Ensure `--radix-popper-available-width` is calculated correctly when using `collisionBoundary`&#x20;

- Position content correctly when matching trigger size&#x20;
- Improve scroll buttons touch screen support&#x20;

* Clamp thumb position within range&#x20;

- Ensure `Slot` can be used in a React Server Component&#x20;

* Position content correctly when matching trigger size&#x20;
* Improve large content hoverability&#x20;

## March 8, 2023

This release introduces a brand new primitive in preview: [`Form`](../components/form).

- New primitive&#x20;

## February 24, 2023

- Reset checkbox state when form is reset&#x20;

* Expose new CSS custom properties to enable size constraints&#x20;
* Don't exit fullscreen mode when pressing escape to dismiss from submenu&#x20;
* Relax `onCheckedChange` type on `ContextMenu.CheckboxItem`&#x20;

- Expose new CSS custom properties to enable size constraints&#x20;
- Don't exit fullscreen mode when pressing escape to dismiss from submenu&#x20;
- Relax `onCheckedChange` type on `DropdownMenu.CheckboxItem`&#x20;

* Expose new CSS custom properties to enable size constraints&#x20;

- Expose new CSS custom properties to enable size constraints&#x20;
- Don't exit fullscreen mode when pressing escape to dismiss from submenu&#x20;
- Relax `onCheckedChange` type on `Menubar.CheckboxItem`&#x20;

* Expose new CSS custom properties to enable size constraints&#x20;

- Expose new CSS custom properties to enable size constraints&#x20;

## January 17, 2023

This release introduces a brand new primitive: [`Menubar`](../components/menubar). It also adds support for a highly requested feature for [`Select`](../components/select): the ability to position the content in a similar way to `Popover` or `DropdownMenu`.

- Add horizontal orientation support with new `orientation` prop, as well as RTL support with `dir`&#x20;

* Fix consistency issue with RTL positioning&#x20;

- Fix consistency issue with RTL positioning&#x20;

* Fix consistency issue with RTL positioning&#x20;

- New primitive&#x20;

* Fix consistency issue with RTL positioning&#x20;

- Add `position` prop to `Select.Content` to enable popper positioning&#x20;

* Fix consistency issue with RTL positioning&#x20;

## December 14, 2022

- Add `disabled` prop to `ContextMenu.Trigger`&#x20;

## November 15, 2022

- Fix invalid `pointerId` in Cypress when running Firefox&#x20;

## October 17, 2022

- Fix initial animation playback in Firefox and Safari&#x20;

* Fix issue with textarea elements not being scrollable in Firefox&#x20;

- Fix initial animation playback in Firefox and Safari&#x20;

* **\[Breaking]** Add support for indeterminate state on `ContextMenu.CheckboxItem`. Note that this is only a breaking change if you are currently using the `CheckboxItem` part and your codebase is written in TypeScript.&#x20;

- Fix issue with textarea elements not being scrollable in Firefox&#x20;

* **\[Breaking]** Add support for indeterminate state on `DropdownMenu.CheckboxItem`. Note that this is only a breaking change if you are currently using the `CheckboxItem` part and your codebase is written in TypeScript.&#x20;
* Correctly pair `DropdownMenu.Trigger` open state with `aria-expanded` when closed&#x20;
* Fix issue with eager selection of items when using `asChild`&#x20;
* Fix issue with dismissing when the component is used in a separate popup window&#x20;

- Improve text selection experience&#x20;

* **\[Breaking]** Remove `useLabelContext` and support for fully custom controls. For native labelling to work, ensure your custom controls are based on native elements such as `button` or `input`.&#x20;
* Improve native behavior by using the native `label` element&#x20;

- Prevent menu from re-opening with the pointer after being dismissed with escape&#x20;
- Add `delayDuration` and `skipDelayDuration` props to `NavigationMenu.Root`. Note that by default, triggers now have a brief delay before opening in order to improve UX, this can be modified using the props provided.&#x20;

* Add `disabled` prop to `RadioGroup.Root`&#x20;
* Fix issue where `RadioGroup.Root` was focusable when all items were disabled&#x20;

- Add `disabled` prop to `Select.Root`&#x20;
- Add `required` prop to `Select.Root`&#x20;

* Add ability to visually invert the slider using the new `inverted` prop on `Slider.Root`&#x20;
* Add `onValueCommit` prop to `Slider.Root` to better handle discrete value changes&#x20;

- Stop eagerly creating callback props&#x20;

* Fix regression with screen readers announcing as "group" rather than "status"&#x20;
* Fix regression with `ref` assignments on child elements returning `null`&#x20;
* Add `onPause` and `onResume` props to `Toast.Root`&#x20;
* Fix timer reset issue which would cause toasts to dismiss early in some cases&#x20;

- Prevent `Toolbar.Item` click handlers firing twice&#x20;

* Ensure tooltip doesn't open if interacting with the trigger before the open timer expires&#x20;

## July 21, 2022

With this release, we start following semantic versioning strictly. All primitives are now versioned .

We also move the [`Select`](../components/select), [`Toast`](../components/toast) and [`NavigationMenu`](../components/navigation-menu) from preview to stable.

- Improve support for React 18&#x20;
- **\[Breaking]** Improve RTL performance. You need to use [`DirectionProvider`](../utilities/direction-provider) if you were relying on `dir` attribute inheritance from document (or any element).&#x20;

* **\[Breaking]** Remove `allowPinchZoom` prop, now defaults to `true`&#x20;
* Improve compatibility with JS animation libraries with `forceMount` on `AlertDialog.Portal`&#x20;
* Fix regressions with page interactivity while/after closing dialog&#x20;

- **\[Breaking]** Improve indirect nesting of context menus. Submenus must now be created using explicit parts.&#x20;
- **\[Breaking]** Remove `allowPinchZoom` prop, now defaults to `true`&#x20;
- **\[Breaking]** Add new `Portal` part. To avoid regressions, use this part if you want portalling behavior. Note that `z-index` isn't managed anymore so you have full control of layering.&#x20;
- **\[Breaking]** Remove `offset` on `Arrow` part&#x20;
- **\[Breaking]** Rename `collisionTolerance` to `collisionPadding` on `Content` part and accepts a number or a padding object&#x20;
- Fix issue with native context menu appearing in React 18&#x20;
- Add `data-highlighted` attribute to support styling&#x20;
- Add `data-state` attribute to `Trigger` part&#x20;
- Add `collisionBoundary`, `arrowPadding`, `sticky`, `hideWhenDetached` props on `Content` part&#x20;

* **\[Breaking]** Remove `allowPinchZoom` prop, now defaults to `true`&#x20;
* Improve compatibility with JS animation libraries with `forceMount` on `Dialog.Portal`&#x20;
* Fix regressions with page interactivity while/after closing dialog&#x20;

- **\[Breaking]** Improve indirect nesting of dropdown menus. Submenus must now be created using explicit parts.&#x20;
- **\[Breaking]** Remove `allowPinchZoom` prop, now defaults to `true`&#x20;
- **\[Breaking]** Add new `Portal` part. To avoid regressions, use this part if you want portalling behavior. Note that `z-index` isn't managed anymore so you have full control of layering.&#x20;
- **\[Breaking]** Remove `offset` on `Arrow` part&#x20;
- **\[Breaking]** Rename `collisionTolerance` to `collisionPadding` on `Content` part and accepts a number or a padding object&#x20;
- Add `data-highlighted` attribute to support styling&#x20;
- Prevent escape key from exiting fullscreen mode in Firefox & Safari&#x20;
- Add `collisionBoundary`, `arrowPadding`, `sticky`, `hideWhenDetached` props on `Content` part&#x20;

* **\[Breaking]** Add new `Portal` part. To avoid regressions, use this part if you want portalling behavior. Note that `z-index` isn't managed anymore so you have full control of layering.&#x20;
* **\[Breaking]** Remove `offset` on `Arrow` part&#x20;
* **\[Breaking]** Rename `collisionTolerance` to `collisionPadding` on `Content` part and accepts a number or a padding object&#x20;
* Add `collisionBoundary`, `arrowPadding`, `sticky`, `hideWhenDetached` props on `Content` part&#x20;

- Ensure menu closes after clicking `NavigationMenu.Link`&#x20;
- Add `onSelect` prop to `NavigationMenu.Link`&#x20;

* **\[Breaking]** Remove `allowPinchZoom` prop, now defaults to `true`&#x20;
* **\[Breaking]** Add new `Portal` part. To avoid regressions, use this part if you want portalling behavior. Note that `z-index` isn't managed anymore so you have full control of layering.&#x20;
* **\[Breaking]** Remove `offset` on `Arrow` part&#x20;
* **\[Breaking]** Rename `collisionTolerance` to `collisionPadding` on `Content` part and accepts a number or a padding object&#x20;
* Add `collisionBoundary`, `arrowPadding`, `sticky`, `hideWhenDetached` props on `Content` part&#x20;

- **\[Breaking]** Note that `z-index` isn't managed anymore so you have full control of layering. The prop to provide a custom container evolves from `containerRef` (ref) to `container` (element). The `data-radix-portal` was removed because you can use `asChild` to control the element.&#x20;

* Add `aria-required` to root&#x20;

- `ScrollArea.Thumb` is now animatable&#x20;

* **\[Breaking]** Renamed `data-state` values from `active|inactive` to `checked|unchecked`&#x20;
* **\[Breaking]** Add new `Portal` part. To avoid regressions, use this part if you want portalling behavior. Note that `z-index` isn't managed anymore so you have full control of layering.&#x20;
* Fix position breaking when using `asChild` on `Select.Content`&#x20;
* Improve trigger/content alignment when `Select.Content` has padding&#x20;
* Fix trigger/content alignment when there are less than 5 items&#x20;
* Support trigger/content alignment when no value is provided&#x20;
* Add `data-highlighted` attribute to support styling&#x20;
* Add support for placeholder via `placeholder` prop on `Select.Value`&#x20;
* Resolve value mismatch with underlying native select&#x20;

- Fix issue with children ordering when using `Slottable`&#x20;

* Add support for lifecycle animation to `Tabs.Content`&#x20;

- **\[Breaking]** The default toast order has changed, they now render top to bottom from oldest to newest&#x20;
- Improve Typescript types when using `asChild`&#x20;
- Fix issue with toast reordering when updating React's `key` prop&#x20;
- Improve compatability with animation libraries&#x20;

* **\[Breaking]** Add new `Portal` part. To avoid regressions, use this part if you want portalling behavior. Note that `z-index` isn't managed anymore so you have full control of layering.&#x20;
* **\[Breaking]** By default `Tooltip.Content` will remain open when hovering (WCAG 2.1 Content on Hover compliance). `disableHoverableContent` can be supplied to `Tooltip.Provider` to restore previous behavior&#x20;
* **\[Breaking]** `side` on `Tooltip.Content` now defaults to `top`&#x20;
* **\[Breaking]** `Tooltip.Provider` is now required, you must wrap your app to avoid regressions.&#x20;
* **\[Breaking]** Remove `offset` on `Arrow` part&#x20;
* **\[Breaking]** Rename `collisionTolerance` to `collisionPadding` on `Content` part and accepts a number or a padding object&#x20;
* Improve layering of tooltip with other primitives&#x20;
* Fix tooltip closing when transforming/animation trigger&#x20;
* Add `collisionBoundary`, `arrowPadding`, `sticky`, `hideWhenDetached` props on `Content` part&#x20;

## February 28, 2022

This release introduces 3 brand new primitives in preview: [`Select`](../components/select), [`Toast`](../components/toast) and [`NavigationMenu`](../components/navigation-menu), whilst also shipping a ton of fixes and improvements.

- Prevent form submission when pressing `Accordion.Trigger`&#x20;
- Fix animation issue with React 18&#x20;

* Improve pointer-events management&#x20;

- Prevent activation via enter key&#x20;

* Fix animation issue with React 18&#x20;

- Prevent `DropdownMenu.TriggerItem` click from firing twice&#x20;
- Improve idle performance&#x20;

* Improve pointer-events management&#x20;
* **\[Breaking]** `Dialog.Title` is now a required part so will throw an error if not used. `aria-describedby={undefined}` must be passed to `Dialog.Content` if no description is needed.&#x20;

- Improve composability with `Dialog`/`AlertDialog`&#x20;
- Prevent clicking trigger to close from immediately reopening in non-modal mode&#x20;
- Prevent `DropdownMenu.TriggerItem` click from firing twice&#x20;
- Improve idle performance&#x20;

* New primitive&#x20;

- Prevent activation via enter key&#x20;

* New primitive&#x20;

- Prevent page scroll when using `Home` and `End` keys&#x20;

* Prevent accidental focus activation via right click&#x20;

- New primitive&#x20;

* Improve accessibility by using radio role for single toggle group&#x20;

## December 13, 2021

This release focuses on React 18 support and introduces a number of breaking changes to some packages, mostly related to portalling dialogs.

- **\[Breaking]** Deprecate `IdProvider`. Improves support for React 18 going forward and is no longer needed in older versions. Remove from your app to avoid deprecation warnings.&#x20;

* Improve React 18 support&#x20;
* Improve dev mode errors with mismatched `type` and `value` props&#x20;
* Prevent `Accordion.Content` height animation on initial page load&#x20;

- **\[Breaking]** Add new `Portal` part. To avoid regressions, use this part if you want portalling behavior.&#x20;
- **\[Breaking]** Support scrolling within `AlertDialog.Overlay`. Move `allowPinchZoom` to root.&#x20;
- Fix `asChild` TypeScript error&#x20;

* Prevent `Collapsible.Content` height animation on initial page load&#x20;

- **\[Breaking]** Add new `Portal` part. To avoid regressions, use this part if you want portalling behavior.&#x20;
- **\[Breaking]** Support scrolling within `Dialog.Overlay`. Move `allowPinchZoom` to root.&#x20;

* Prevent disabled trigger from opening menu&#x20;

- Fix ability to focus `HoverCard` when inside a dialog&#x20;

* Prevent programmatic focus from changing value&#x20;

- **\[Breaking]** Change `Tabs.Trigger` to `button` element&#x20;
- Improve TSDocs&#x20;

* Remove invalid `aria-orientation` attribute on `role=group` element&#x20;

- Fix `asChild` TypeScript error&#x20;
- Remove invalid `toolbaritem` role&#x20;

* **\[Breaking]** Add new `TooltipProvider` part. You must wrap your app to avoid regressions.&#x20;
* **\[Breaking]** Remove `type=button` attribute from `Tooltip.Trigger`&#x20;
* Fix tooltip activation regression&#x20;

- Fix `key` warnings&#x20;

## October 15, 2021

- All primitives are now versioned&#x20;
- Fix composability issues between primitives by scoping context&#x20;
- Fix CSS unmount animations&#x20;

* Add new CSS variable to `Accordion.Content` to help with width animations&#x20;

- Improve composability with `Dialog`&#x20;
- **\[Breaking]** Remove `AlertDialog.Content` `onInteractOutside` prop&#x20;

* Improve composability with `AlertDialog`&#x20;
* Add pinch to zoom support to `DropdownMenu.Content` via `allowPinchZoom` prop&#x20;

- Add pinch to zoom support to `ContextMenu.Content` via `allowPinchZoom` prop&#x20;
- Prevent scroll via arrow keypress on submenu triggers&#x20;

* Add new CSS variable to `Collapsible.Content` to help with width animations&#x20;

- Prevent screen reader virtual cursor from accessing hidden input&#x20;

* Improve composability with `Tooltip`&#x20;
* Add pinch to zoom support to `DropdownMenu.Content` via `allowPinchZoom` prop&#x20;
* Prevent scroll via arrow keypress on submenu triggers&#x20;

- Open on focus to improve keyboard support&#x20;
- Compose correct pointer events internally&#x20;

* Allow its children to prevent event propagation&#x20;

- Prevent screen reader virtual cursor from accessing hidden inputs&#x20;

* Add pinch to zoom support to `Popover.Content` via `allowPinchZoom` prop&#x20;

- Fix calculations when value is `0`&#x20;

* Prevent screen reader virtual cursor from accessing hidden input&#x20;

- **\[Breaking]** Unmount content within `Tabs.Content` when tab is inactive&#x20;

## September 7, 2021

- All primitives moved to **Beta** and are now versioned&#x20;
- **\[Breaking]** Replace polymorphic `as` prop with `asChild` boolean prop. Learn more
  about how to [change the rendered element here](/primitives/docs/guides/composition)&#x20;

* Improve composability with `DropdownMenu`&#x20;

- Improve composability with `Dialog`&#x20;
- Re-enable `pointer-events` when closed&#x20;
- Prevent body text from selecting on close (Firefox)&#x20;
- Ensure sub triggers receive focus on click (iOS Safari)&#x20;

* **\[Breaking]** Deprecate `extendPrimitive` utility&#x20;

## August 4, 2021

- Improve polymorphic types performance&#x20;

* **\[Breaking]** Remove `AlertDialog.Content` `onPointerDownOutside` prop&#x20;
* Prevent outside pointer events triggering prematurely on touch devices&#x20;

- Add modality support via `modal` prop&#x20;
- **\[Breaking]** Remove `ContextMenu.Content` `disableOutsidePointerEvents` prop&#x20;
- Prevent outside pointer events triggering prematurely on touch devices&#x20;

* Add modality support via `modal` prop&#x20;
* Improve animation rendering in React 18&#x20;
* Ensure focus is restored to trigger on close when using the `autofocus` attribute on a child element&#x20;
* Prevent outside pointer events triggering prematurely on touch devices&#x20;
* Ensure iOS Safari consistently focuses the first focusable element&#x20;

- Add modality support via `modal` prop&#x20;
- **\[Breaking]** Remove `DropdownMenu.Content` `disableOutsideScroll` prop&#x20;
- **\[Breaking]** Remove `DropdownMenu.Content` `disableOutsidePointerEvents` prop&#x20;
- Prevent outside pointer events triggering prematurely on touch devices&#x20;

* Add modality support via `modal` prop&#x20;
* **\[Breaking]** Remove `Popover.Content` `disableOutsideScroll` prop&#x20;
* **\[Breaking]** Remove `Popover.Content` `disableOutsidePointerEvents` prop&#x20;
* **\[Breaking]** Remove `Popover.Content` `trapFocus` prop&#x20;
* Improve animation rendering in React 18&#x20;
* Ensure focus is restored to trigger on close when using the `autofocus` attribute on a child element&#x20;
* Prevent outside pointer events triggering prematurely on touch devices&#x20;
* Ensure iOS Safari consistently focuses the first focusable element&#x20;

- Add `data-state` to `ScrollBar` part&#x20;

* Prevent thumb receiving focus when disabled&#x20;
* Prevent focus loss on thumb when using `React.StrictMode`&#x20;

## June 24, 2021

- Can now be triggered on touch with a long press&#x20;

* Add optional `Title` and `Description` parts for simpler labelling&#x20;

- Add `data-orientation` to `Scrollbar` for styling convenience&#x20;
- Fix `forceMount` type issue on `Scrollbar`&#x20;

* Ensure the correct thumb is focused when using keyboard and crossing another thumb&#x20;
* Ensure only one arrow press is needed when crossing another thumb&#x20;

- Improve types compatibility&#x20;

* Ensure only one click is needed to toggle a single controlled toggle group&#x20;
* Ensure focus behavior is consistent on Safari&#x20;

## June 15, 2021

- Improve polymorphic types&#x20;

* **\[Breaking]** Rename `Accordion.Button` to `Accordion.Trigger`&#x20;
* **\[Breaking]** Rename `Accordion.Panel` to `Accordion.Content`&#x20;
* **\[Breaking]** Rename custom property accordingly (`--radix-accordion-content-height`)&#x20;
* **\[Breaking]** `type=“single”` `Accordion` now has a new `collapsible` prop which is `false` by default. This means that the default behavior has now changed. By default a user cannot close all items.&#x20;

- **\[Breaking]** Allow preventing default in `onPointerDownOutside` without inadvertently preventing focus&#x20;

* **\[Breaking]** `onCheckedChange(event)` is now `onCheckedChange(checked: CheckedState)`&#x20;
* Improve compatibility with native form validation&#x20;
* Allow stopping propagation on `Checkbox` `onClick`&#x20;
* Improve compatibility with native `label`&#x20;
* Improve accessibility when wrapped in native `label`&#x20;

- **\[Breaking]** Rename `Collapsible.Button` to `Collapsible.Trigger`&#x20;

* Add submenu support&#x20;
* Add `ContextMenu.TriggerItem`&#x20;
* Add `ContextMenu.Arrow`&#x20;
* Add `dir` prop for RTL support with submenus&#x20;
* **\[Breaking]** Allow preventing default in `onPointerDownOutside` without inadvertently preventing focus&#x20;
* **\[Breaking]** Remove `ContextMenu.Content` `side` prop&#x20;
* **\[Breaking]** Remove `ContextMenu.Content` `align` prop&#x20;
* **\[Breaking]** If you had `sideOffset` on `ContextMenu.Content` before, you should now use `alignOffset`. This is to standardize vertical alignment for both root and sub-menus.&#x20;
* **\[Breaking]** `onFocusOutside` is now a custom event&#x20;
* Improve support of content and item with no padding&#x20;
* Align with WAI-ARIA spec by focusing first item when opening via keyboard&#x20;

- **\[Breaking]** Allow preventing default in `onPointerDownOutside` without inadvertently preventing focus&#x20;

* Add submenu support&#x20;
* Add `DropdownMenu.TriggerItem`&#x20;
* Add `dir` prop for RTL support with submenus&#x20;
* **\[Breaking]** Allow preventing default in `onPointerDownOutside` without inadvertently preventing focus&#x20;
* **\[Breaking]** `onFocusOutside` is now a custom event&#x20;
* **\[Breaking]** The up arrow no longer opens the menu&#x20;
* Align with WAI-ARIA spec by focusing first item when opening via keyboard&#x20;

- **\[Breaking]** Allow preventing default in `onPointerDownOutside` without inadvertently preventing focus&#x20;
- **\[Breaking]** `onFocusOutside` is now a custom event&#x20;

* **\[Breaking]** `onValueChange(event)` is now `onValueChange(value: string)`&#x20;
* **\[Breaking]** Remove `RadioGroup.Item` `onCheckedChange` prop&#x20;
* Improve compatibility with native form validation&#x20;
* Improve usage within forms&#x20;

- Brand new version with a simpler API&#x20;
- Improve Safari support&#x20;
- Improve RTL support&#x20;
- Improve touch support&#x20;
- `Scrollbar` mount/unmount can now be animated&#x20;
- Add minimum width/height to thumb so it's always grabbable&#x20;
- Move functional CSS into component to improve DX&#x20;
- Bundle size significantly reduced&#x20;
- **\[Breaking]** Remove `overflowX` and `overflowY` props&#x20;
- **\[Breaking]** Remove `ScrollAreaButtonStart`, `ScrollAreaButtonEnd` and `ScrollAreaTrack`&#x20;
- **\[Breaking]** Rename `scrollbarVisibility` prop to `type`. The values are `auto`, `always`, `scroll` or `hover`&#x20;
- **\[Breaking]** Rename `scrollbarVisibilityRestTimeout` prop to `scrollHideDelay`&#x20;
- **\[Breaking]** Remove `trackClickBehavior` prop as we've removed built-in animation. Clicking on track always snaps to pointer position&#x20;
- **\[Breaking]** `ScrollAreaScrollbarX` and `ScrollAreaScrollbarY` are now `<ScrollAreaScrollbar orientation="horizontal" />` and `<ScrollAreaScrollbar orientation="vertical" />`&#x20;
- Ensure no scrollbars are shown when scrolling is disabled&#x20;
- Ensure children event handlers don't break&#x20;
- Ensure scroll area updates when children content size changes&#x20;

* Improve usage within forms&#x20;
* Fix key binding issue in LTR&#x20;

- **\[Breaking]** `onCheckedChange(event)` is now `onCheckedChange(checked: boolean)`&#x20;
- Improve compatibility with native form validation&#x20;
- Improve usage within forms&#x20;
- Improve accessibility when wrapped in native `label`&#x20;

* **\[Breaking]** Rename `Tabs.Tab` to `Tabs.Trigger`&#x20;
* **\[Breaking]** Rename `Tabs.Panel` to `Tabs.Content`&#x20;

## May 3, 2021

- Improve polymorphic types performance&#x20;

* Ensure only one click is needed to close a single controlled accordion&#x20;

- **\[Breaking]** Remove `readOnly` prop&#x20;

* Add `onOpenChange` prop&#x20;

- Ensure focus position isn't lost when blurring out window and re-focusing it&#x20;

* Take into account non-visible items&#x20;
* **\[Breaking]** Remove `anchorRef` prop&#x20;
* Prevent page from scrolling when selecting an item with space key&#x20;

- New primitive&#x20;

* **\[Breaking]** Remove `anchorRef` prop and replace with optional `Anchor` part&#x20;

- Add optional `orientation`, `dir`, `loop` props&#x20;
- **\[Breaking]** Remove `readOnly` prop&#x20;

* **\[Breaking]** Remove `readOnly` prop&#x20;

- Add optional `orientation`, `dir`, `loop` props&#x20;

* **\[Breaking]** Remove `anchorRef` prop&#x20;

## March 26, 2021

- Improve tree-shaking&#x20;

* Ensure you can open a context menu when one is already open&#x20;

- Fix potential overlap issue&#x20;

* Ensure `Content` closes when it has multiple close animations&#x20;

- **\[Breaking]** Rename `ToggleButton` primitive to `Toggle`&#x20;
- **\[Breaking]** Rename `toggled` prop to `pressed`&#x20;
- **\[Breaking]** Rename `defaultToggled` prop to `defaultPressed`&#x20;
- **\[Breaking]** Rename `onToggledChange` prop to `onPressedChange`&#x20;

* New primitive&#x20;

- New primitive&#x20;

* Add custom timing support&#x20;
* Add unmount animation support&#x20;

## March 5, 2021

- Add height CSS custom property to panel for easier animation&#x20;

* Add height CSS custom property to content for easier animation&#x20;

- Fix type definition conflicts&#x20;

## March 3, 2021

- Add support for SSR
- **\[Breaking]** Remove `selector` prop and `data-radix-*` atributes&#x20;

* **\[Breaking]** Add support for multiple values. Note that this is a breaking change because the new `type` prop is required&#x20;

- Ensure `step` is rounded correctly&#x20;

* Add RTL support (`dir` prop)&#x20;

## February 17, 2021

- Ensure events are composed when using `<Trigger as={Slot}>`&#x20;

## February 15, 2021

- Expose `onCloseAutoFocus` prop&#x20;

* Expose `onCloseAutoFocus` prop&#x20;

## February 10, 2021

- Fix type autocompletion when using `as` prop&#x20;

* Prevent open/close flickering&#x20;

- Ensure focus is returned properly on close&#x20;

* **\[Breaking]** Move `name` prop from `Item` to `Root`&#x20;

## February 1, 2021

- Re–add missing `children`&#x20;

* Re–add missing `children`&#x20;

- Prevent flickering (sliding) issue&#x20;

## January 29, 2021

- New utility&#x20;

## January 25, 2021

- Fix regression when tabbing out would close&#x20;

* Fix broken arrow keys navigation&#x20;

## January 22, 2021

- Add `selector` prop&#x20;

* Ensure setting `disabled={false}` on `Root` doesn't enable disabled items&#x20;

- Add enter key support on trigger&#x20;
- Prevent focus race condition&#x20;

* Ensure `Content` repositions on window resize&#x20;
* Ensure last element inside `Content` triggers blur event&#x20;

## December 15, 2020

- Initial release! 🎉&#x20;