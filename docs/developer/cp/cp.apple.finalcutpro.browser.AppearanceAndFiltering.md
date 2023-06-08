# [docs](index.md) » cp.apple.finalcutpro.browser.AppearanceAndFiltering
---

Clip Appearance & Filtering Menu Popover

## API Overview
* Constants - Useful values which cannot be changed
 * [DURATION](#DURATION)
* Functions - API calls offered directly by the extension
 * [matches](#matches)
* Constructors - API calls which return an object, typically one that offers API methods
 * [AppearanceAndFiltering](#AppearanceAndFiltering)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [button](#button)
 * [clipHeight](#clipHeight)
 * [continuousPlayback](#continuousPlayback)
 * [duration](#duration)
 * [groupBy](#groupBy)
 * [sortBy](#sortBy)
 * [waveforms](#waveforms)
* Methods - API calls which can only be made on an object returned by a constructor
 * [doShow](#doShow)
 * [show](#show)

## API Documentation

### Constants

| [DURATION](#DURATION)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.browser.AppearanceAndFiltering.DURATION -> table`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A lookup table of the duration values.                                                                     |

### Functions

| [matches](#matches)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.browser.AppearanceAndFiltering.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if a GUI element is the "Clip Appearance & Filtering Menu" popover or not.                                                                     |
| **Parameters**                              | <ul><li>element - The element you want to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if the `element` is the "Clip Appearance & Filtering Menu" popover otherwise `false`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Constructors

| [AppearanceAndFiltering](#AppearanceAndFiltering)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.browser.AppearanceAndFiltering(parent) -> AppearanceAndFiltering`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Constructs a new "Clip Appearance & Filtering Menu" popover.                                                                     |
| **Parameters**                              | <ul><li>parent - The parent object</li></ul> |
| **Returns**                                 | <ul><li>The new `AppearanceAndFiltering` instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Fields

| [button](#button)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.browser.AppearanceAndFiltering.button <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Clip Appearance & Filtering Menu" button.                                                                     |

| [clipHeight](#clipHeight)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.browser.AppearanceAndFiltering.clipHeight <cp.ui.Slider>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Clip Height Slider.                                                                     |

| [continuousPlayback](#continuousPlayback)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.browser.AppearanceAndFiltering.continuousPlayback <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Continuous Playback checkbox.                                                                     |

| [duration](#duration)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.browser.AppearanceAndFiltering.duration <cp.ui.Slider>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Duration Slider.                                                                     |

| [groupBy](#groupBy)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.browser.AppearanceAndFiltering.groupBy <cp.ui.PopUpButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Group By" popup button.                                                                     |

| [sortBy](#sortBy)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.browser.AppearanceAndFiltering.sortBy <cp.ui.PopUpButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Sort By" popup button.                                                                     |

| [waveforms](#waveforms)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.browser.AppearanceAndFiltering.waveforms <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Waveforms checkbox.                                                                     |

### Methods

| [doShow](#doShow)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.browser.AppearanceAndFiltering:doShow() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A `Statement` that shows the Browser's "Clip Appearance & Filtering" popover.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [show](#show)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.browser.AppearanceAndFiltering:show() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Shows the "Clip Appearance & Filtering Menu" Popover                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Self</li></ul>          |
| **Notes**                                   | <ul></ul>                |

