# cp.apple.finalcutpro.inspector.color.ColorWell

Represents a single Color Well in the Color Wheels Inspector.

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [KEY_PRESS](#key_press)

**Functions** - _API calls offered directly by the extension_
 * [matches](#matches)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [ColorWell](#colorwell)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [center](#center)
 * [colorOrientation](#colororientation)
 * [colorPosition](#colorposition)
 * [focused](#focused)
 * [puckPosition](#puckposition)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [nudge](#nudge)
 * [reset](#reset)
 * [select](#select)


---

## API Documentation

#### Constants


### [KEY_PRESS](#key_press)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorWell.KEY_PRESS`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | This can be used with `nudge` to shift by the same distance                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorWell.lua line 30](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorWell.lua#L30) |

---

#### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorWell.matches(element)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the specified element is a Color Well.                                                                     |
| **Parameters**                              | <ul><li>element   - The element to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if the element is a Color Well.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorWell.lua line 246](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorWell.lua#L246) |

---

#### Constructors


### [ColorWell](#colorwell)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorWell(parent, uiFinder[, hueShift]) -> ColorWell`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `ColorWell` instance, with the specified parent and finder function. The finder function should return the specific color well UI element that this instance represents.                                                                     |
| **Parameters**                              | <ul><li>parent    - The parent object</li><li>uiFinder  - Returns the `axuielement` that represents the color well.</li><li>hueShift  - The amount to shift the hue.</li></ul> |
| **Returns**                                 | <ul><li>A new `ColorWell` instance.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorWell.lua line 259](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorWell.lua#L259) |

---

#### Fields


### [center](#center)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorWell.center <cp.prop: point; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The center point of the ColorWell. A table with `{x=..., y=...}`.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorWell.lua line 304](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorWell.lua#L304) |

---


### [colorOrientation](#colororientation)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorWell.colorOrientation <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Provides the orientation of the color as a table containing an `up` and `right` value.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorWell.lua line 356](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorWell.lua#L356) |

---


### [colorPosition](#colorposition)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorWell.colorPosition <cp.prop: hs.geometry.point>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | X/Y screen position for the current color value of the Color Well. This ignores the bounds of the                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorWell.lua line 334](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorWell.lua#L334) |

---


### [focused](#focused)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorWell.focused <cp.pref: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Gets and sets whether the Color Well has focus.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorWell.lua line 279](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorWell.lua#L279) |

---


### [puckPosition](#puckposition)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorWell.puckPosition <cp.prop: hs.geometry.point>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Absolute X/Y screen position for the puck in the Color Well. Colours outside the bounds are clamped inside the color well.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorWell.lua line 313](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorWell.lua#L313) |

---

#### Methods


### [nudge](#nudge)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorWell:nudge(right, up) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that nudges the `colorPosition` by `right`/`up` values. Negative `right` values shift left, negative `up` values shift down. You may have decimal shift values.                                                                     |
| **Parameters**                              | <ul><li>`right` - The number of steps to shift right. May be negative to shift left.</li><li>`up` - The number of pixels to shift down. May be negative to shift down.</li></ul> |
| **Returns**                                 | <ul><li>The `ColorWell` instance.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorWell.lua line 428](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorWell.lua#L428) |

---


### [reset](#reset)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorWell:reset() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Resets the color wheel.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `ColorWell` instance.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorWell.lua line 444](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorWell.lua#L444) |

---


### [select](#select)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorWell:select() -> cp.apple.finalcutpro.inspector.color.ColorWell`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Selects this color well.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `ColorWell` instance.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorWell.lua line 389](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorWell.lua#L389) |

---

