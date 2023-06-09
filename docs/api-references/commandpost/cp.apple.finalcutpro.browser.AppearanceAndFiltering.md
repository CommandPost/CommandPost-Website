# cp.apple.finalcutpro.browser.AppearanceAndFiltering

Clip Appearance & Filtering Menu Popover

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [DURATION](#duration)

**Functions** - _API calls offered directly by the extension_
 * [matches](#matches)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [AppearanceAndFiltering](#appearanceandfiltering)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [button](#button)
 * [clipHeight](#clipheight)
 * [continuousPlayback](#continuousplayback)
 * [duration](#duration)
 * [groupBy](#groupby)
 * [sortBy](#sortby)
 * [waveforms](#waveforms)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [doShow](#doshow)
 * [show](#show)


---

## API Documentation

#### Constants


### [DURATION](#duration)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.browser.AppearanceAndFiltering.DURATION -> table`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A lookup table of the duration values.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/browser/AppearanceAndFiltering.lua line 63](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/browser/AppearanceAndFiltering.lua#L63){target="_blank"} |

---

#### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.browser.AppearanceAndFiltering.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if a GUI element is the "Clip Appearance & Filtering Menu" popover or not.                                                                     |
| **Parameters**                              | <ul><li>element - The element you want to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if the `element` is the "Clip Appearance & Filtering Menu" popover otherwise `false`</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/browser/AppearanceAndFiltering.lua line 30](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/browser/AppearanceAndFiltering.lua#L30){target="_blank"} |

---

#### Constructors


### [AppearanceAndFiltering](#appearanceandfiltering)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.browser.AppearanceAndFiltering(parent) -> AppearanceAndFiltering`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Constructs a new "Clip Appearance & Filtering Menu" popover.                                                                     |
| **Parameters**                              | <ul><li>parent - The parent object</li></ul> |
| **Returns**                                 | <ul><li>The new `AppearanceAndFiltering` instance.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/browser/AppearanceAndFiltering.lua line 43](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/browser/AppearanceAndFiltering.lua#L43){target="_blank"} |

---

#### Fields


### [button](#button)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.browser.AppearanceAndFiltering.button <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Clip Appearance & Filtering Menu" button.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/browser/AppearanceAndFiltering.lua line 124](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/browser/AppearanceAndFiltering.lua#L124){target="_blank"} |

---


### [clipHeight](#clipheight)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.browser.AppearanceAndFiltering.clipHeight <cp.ui.Slider>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Clip Height Slider.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/browser/AppearanceAndFiltering.lua line 134](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/browser/AppearanceAndFiltering.lua#L134){target="_blank"} |

---


### [continuousPlayback](#continuousplayback)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.browser.AppearanceAndFiltering.continuousPlayback <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Continuous Playback checkbox.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/browser/AppearanceAndFiltering.lua line 179](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/browser/AppearanceAndFiltering.lua#L179){target="_blank"} |

---


### [duration](#duration)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.browser.AppearanceAndFiltering.duration <cp.ui.Slider>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Duration Slider.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/browser/AppearanceAndFiltering.lua line 143](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/browser/AppearanceAndFiltering.lua#L143){target="_blank"} |

---


### [groupBy](#groupby)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.browser.AppearanceAndFiltering.groupBy <cp.ui.PopUpButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Group By" popup button.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/browser/AppearanceAndFiltering.lua line 152](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/browser/AppearanceAndFiltering.lua#L152){target="_blank"} |

---


### [sortBy](#sortby)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.browser.AppearanceAndFiltering.sortBy <cp.ui.PopUpButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Sort By" popup button.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/browser/AppearanceAndFiltering.lua line 161](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/browser/AppearanceAndFiltering.lua#L161){target="_blank"} |

---


### [waveforms](#waveforms)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.browser.AppearanceAndFiltering.waveforms <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Waveforms checkbox.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/browser/AppearanceAndFiltering.lua line 170](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/browser/AppearanceAndFiltering.lua#L170){target="_blank"} |

---

#### Methods


### [doShow](#doshow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.browser.AppearanceAndFiltering:doShow() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A `Statement` that shows the Browser's "Clip Appearance & Filtering" popover.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/browser/AppearanceAndFiltering.lua line 105](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/browser/AppearanceAndFiltering.lua#L105){target="_blank"} |

---


### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.browser.AppearanceAndFiltering:show() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Shows the "Clip Appearance & Filtering Menu" Popover                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Self</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/browser/AppearanceAndFiltering.lua line 86](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/browser/AppearanceAndFiltering.lua#L86){target="_blank"} |

---

