# cp.apple.finalcutpro.timeline.SpeedPopover

 *Extends [Timeline](cp.apple.finalcutpro.timeline.md)*

Represents the Speed Popover.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [matches](#matches)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [SpeedPopover](#speedpopover)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [byDuration](#byduration)
 * [byRate](#byrate)
 * [direction](#direction)
 * [duration](#duration)
 * [forward](#forward)
 * [rate](#rate)
 * [reverse](#reverse)
 * [ripple](#ripple)
 * [setSpeed](#setspeed)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [doShow](#doshow)


---

## API Documentation

#### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.SpeedPopover.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the element is a "Video" Role.                                                                     |
| **Parameters**                              | <ul><li>element - An element to check</li></ul> |
| **Returns**                                 | <ul><li>A boolean</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/SpeedPopover.lua line 50](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/SpeedPopover.lua#L50) |

---

#### Constructors


### [SpeedPopover](#speedpopover)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.SpeedPopover(parent, uiFinder)`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new instance with the specified `parent` and `uiFinder`.                                                                     |
| **Parameters**                              | <ul><li>parent - the parent `Element`.</li><li>uiFinder - a `function` or `cp.prop` containing the `axuielement`</li></ul> |
| **Returns**                                 | <ul><li>The new `SpeedPopover`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/SpeedPopover.lua line 64](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/SpeedPopover.lua#L64) |

---

#### Fields


### [byDuration](#byduration)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.SpeedPopover:byDuration <cp.ui.RadioButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [RadioButton](cp.ui.RadioButton.md) for the "Duration" radio button.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/SpeedPopover.lua line 157](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/SpeedPopover.lua#L157) |

---


### [byRate](#byrate)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.SpeedPopover:byRate <cp.ui.RadioButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [RadioButton](cp.ui.RadioButton.md) for the "Rate" radio button.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/SpeedPopover.lua line 150](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/SpeedPopover.lua#L150) |

---


### [direction](#direction)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.SpeedPopover:direction <cp.ui.RadioGroup>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [RadioGroup](cp.ui.RadioGroup.md) for the "Direction" radio group.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/SpeedPopover.lua line 114](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/SpeedPopover.lua#L114) |

---


### [duration](#duration)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.SpeedPopover:duration <cp.ui.TextField>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [TextField](cp.ui.TextField.md) for the "Duration" text field.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/SpeedPopover.lua line 184](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/SpeedPopover.lua#L184) |

---


### [forward](#forward)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.SpeedPopover:forward <cp.ui.RadioButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [RadioButton](cp.ui.RadioButton.md) for the "Forward" radio button.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/SpeedPopover.lua line 123](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/SpeedPopover.lua#L123) |

---


### [rate](#rate)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.SpeedPopover:rate <cp.ui.TextField>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [TextField](cp.ui.TextField.md) for the "Rate" text field.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/SpeedPopover.lua line 173](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/SpeedPopover.lua#L173) |

---


### [reverse](#reverse)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.SpeedPopover:reverse <cp.ui.RadioButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [RadioButton](cp.ui.RadioButton.md) for the "Reverse" radio button.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/SpeedPopover.lua line 132](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/SpeedPopover.lua#L132) |

---


### [ripple](#ripple)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.SpeedPopover:ripple <cp.ui.RadioGroup>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [CheckBox](cp.ui.CheckBox.md) for the "Ripple" checkbox.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/SpeedPopover.lua line 164](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/SpeedPopover.lua#L164) |

---


### [setSpeed](#setspeed)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.SpeedPopover:setSpeed <cp.ui.RadioGroup>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [RadioGroup](cp.ui.RadioGroup.md) for the "Set Speed" radio group.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/SpeedPopover.lua line 141](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/SpeedPopover.lua#L141) |

---

#### Methods


### [doShow](#doshow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.SpeedPopover:doShow() -> cp.rx.go.Statement <boolean>`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a `Statement` that will show the Speed Popover.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A `Statement` which will send `true` if it successful, or `false` otherwise.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/SpeedPopover.lua line 92](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/SpeedPopover.lua#L92) |

---

