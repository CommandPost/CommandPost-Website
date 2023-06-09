# cp.apple.finalcutpro.inspector.color.ColorWheel

Represents a single Color Well in the Color Wheels Inspector.

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [TYPE](#type)

**Functions** - _API calls offered directly by the extension_
 * [matches](#matches)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [ColorWheel](#colorwheel)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [brightnessValue](#brightnessvalue)
 * [colorOrientation](#colororientation)
 * [colorPosition](#colorposition)
 * [colorValue](#colorvalue)
 * [puckPosition](#puckposition)
 * [reset](#reset)
 * [saturationValue](#saturationvalue)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [brightness](#brightness)
 * [colorWell](#colorwell)
 * [doNudgeColor](#donudgecolor)
 * [doSelect](#doselect)
 * [doShow](#doshow)
 * [nudgeColor](#nudgecolor)
 * [saturation](#saturation)
 * [select](#select)
 * [show](#show)


---

## API Documentation

#### Constants


### [TYPE](#type)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorWheel.TYPE`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The possible types of ColorWheels: MASTER, SHADOWS, MIDTONES, HIGHLIGHTS.                                                                     |
| **Notes**                                   | - None |

---

#### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorWheel.matches(element)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the specified element is a Color Well.                                                                     |
| **Parameters**                              | <ul><li>element	- The element to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if the element is a Color Well.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---

#### Constructors


### [ColorWheel](#colorwheel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorWheel(parent, type) -> ColorWheel`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `ColorWheel` instance, with the specified parent and type.                                                                     |
| **Parameters**                              | <ul><li>parent	- The parent object.</li><li>type		- The type of color wheel. Must be one of the `ColorWheel.TYPE` values.</li></ul> |
| **Returns**                                 | <ul><li>A new `ColorWheel` instance.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---

#### Fields


### [brightnessValue](#brightnessvalue)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorWheel.brightnessValue <cp.prop: number>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The current brightness value, as a number between -12 and 10.                                                                     |
| **Notes**                                   | - None |

---


### [colorOrientation](#colororientation)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorWheel.colorOrientation <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Provides the orientation of the color as a table containing an `up` and `right` value.                                                                     |
| **Notes**                                   | - None |

---


### [colorPosition](#colorposition)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorWheel.colorPosition <cp.prop: point>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | X/Y screen position for the current color value of the Color Well. This ignores the bounds of the                                                                     |
| **Notes**                                   | - None |

---


### [colorValue](#colorvalue)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorWheel.colorValue <cp.prop: hs.drawing.color>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The current color value, as a `hs.drawing.color` table.                                                                     |
| **Notes**                                   | - None |

---


### [puckPosition](#puckposition)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorWheel.puckPosition <cp.prop: point>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Absolute X/Y screen position for the puck in the Color Well. Colours outside the bounds are clamped inside the color well.                                                                     |
| **Notes**                                   | - None |

---


### [reset](#reset)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorWheel.reset <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A [Button](cp.ui.Button.md) that resets the color wheel values, if the `ColorWheel` is showing.                                                                     |
| **Notes**                                   | - None |

---


### [saturationValue](#saturationvalue)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorWheel.saturationValue <cp.prop: number>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The current saturation value, as a number between 0 and 10.                                                                     |
| **Notes**                                   | - None |

---

#### Methods


### [brightness](#brightness)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorWheel.brightness <ValueIndicator>`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the brightness `ValueIndicator` for this ColorWheel.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The brightness `ValueIndicator` instance.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [colorWell](#colorwell)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorWheel.colorWell <ColorWell>`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the `ColorWell` for this ColorWheel.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `ColorWell` instance.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [doNudgeColor](#donudgecolor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorWheel:doNudgeColor(right, up) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that nudges the `colorPosition` by `right`/`up` values. Negative `right` values shift left, negative `up` values shift down. You may have decimal shift values.                                                                     |
| **Parameters**                              | <ul><li>`right` - The number of steps to shift right. May be negative to shift left.</li><li>`up` - The number of pixels to shift down. May be negative to shift down.</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`, resolving to `true` if successful.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [doSelect](#doselect)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorWheel:doSelect() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that attempts to select this `ColorWheel`.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`, resolving to `true` if selected, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [doShow](#doshow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorWheel:doShow() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that attempts to show the `ColorWheel`.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`, resolving to `true` if shown, `false` if not.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [nudgeColor](#nudgecolor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorWheel:nudgeColor(right, up) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Nudges the `colorPosition` by `right`/`up` values. Negative `right` values shift left, negative `up` values shift down. You may have decimal shift values.                                                                     |
| **Parameters**                              | <ul><li>`right` - The number of steps to shift right. May be negative to shift left.</li><li>`up` - The number of pixels to shift down. May be negative to shift down.</li></ul> |
| **Returns**                                 | <ul><li>The `ColorWheel` instance.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [saturation](#saturation)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorWheel.saturation <ValueIndicator>`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the saturation `ValueIndicator` for this ColorWheel.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The saturation `ValueIndicator` instance.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [select](#select)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorWheel:select() -> cp.apple.finalcutpro.inspector.color.ColorWheel`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Shows and selects this color wheel.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `ColorWheel` instance.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorWheel:show() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Shows the `ColorWheel`, if possible.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The same `ColorWheel` instance, for chaining.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---

