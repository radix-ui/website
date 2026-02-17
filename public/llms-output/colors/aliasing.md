# Aliasing

How to use Radix Colors.

# Aliasing

A guide to providing semantic aliases for colors.

## Semantic aliases

Referencing color scales by their actual scale name can work well, like `blue` and `red`. But often, creating semantic aliases like `accent`, `primary`, `neutral`, or `brand` can be helpful, especially when it comes to theming.

With this approach, you will likely run into issues where you need to use the same scale for multiple semantics. Common examples include:

- If you map `yellow` to "warning", you might also need `yellow` to communicate "pending".
- If you map `red` to "danger", you might also need `red` to communicate "error" or "rejected".
- If you map `green` to "success", you might also need `green` to communicate "valid".
- If you map `blue` to "accent", you might also need `blue` to communicate "info".

In this scenario, you can choose to define multiple semantic aliases which map to the same scale.

Or you can simply recommend that your teammates defer to the original scale name for situations where there is no appropriate semantic alias.

## Use case aliases

Each step in Radix Colors scales is designed for a specific use case. To help your team know which step to use, you can provide aliases based on the designed use cases.

Again, with this approach, you will likely run into issues where you need to use the same step for multiple use cases. Common examples include:

- Step 9 is designed for solid backgrounds, but it also may work for input placeholder text.
- Step 8 is designed for hovered component borders, but it also works well for focus rings.

In these cases, you can choose to define multiple aliases which map to the same step.

Or you can simply recommend that your teammates defer to the original step number for situations where use cases don't have an alias.

## Mutable aliases

When designing for both light and dark modes, you sometimes need to map a variable to one color in light mode, and another color in dark mode. Common examples include:

- Components that have a white background in light mode and a subtle gray background in dark mode. For example, Card, Popover, DropdownMenu, HoverCard, Dialog etc.
- Components that have a transparent black background in light mode and a transparent white background in dark mode. For example, Tooltip.
- Shadows that are saturated, transparent gray in light mode, and pure black in dark mode.
- An overlay that is light transparent black in light mode, and a darker transparent black in dark mode.

Avoid using specific variable names like "CardBg", or "Tooltip", because you will likely need to use each variable for multiple use cases.

## Renaming scales

If you wish, you can rename scales. Reasons might include:

- Rename a saturated gray to `gray` to keep things simple.
- Rename `sky` or `grass` to `blue` or `green` to keep the naming intuitive.
- Rename a scale to match your brand, like how Discord use `blurple`.