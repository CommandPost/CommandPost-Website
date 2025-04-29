# cp.apple.finalcutpro.inspector.color.ColorInspector

Color Inspector Module.

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [CORRECTION_TYPES](#correction_types)

**Functions** - _API calls offered directly by the extension_
 * [matches](#matches)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [colorAdjustments](#coloradjustments)
 * [colorBoard](#colorboard)
 * [colorCurves](#colorcurves)
 * [colorWheels](#colorwheels)
 * [corrections](#corrections)
 * [correctorUI](#correctorui)
 * [hueSaturationCurves](#huesaturationcurves)
 * [topBarUI](#topbarui)
 * [value](#value)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [activateCorrection](#activatecorrection)
 * [addCorrection](#addcorrection)
 * [ColorInspector](#colorinspector)
 * [doActivateCorrection](#doactivatecorrection)
 * [doAddCorrection](#doaddcorrection)
 * [doShow](#doshow)
 * [hide](#hide)
 * [show](#show)


---

## API Documentation

#### Constants


### [CORRECTION_TYPES](#correction_types)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorInspector.CORRECTION_TYPES`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Table of Correction Types.                                                                     |
| **Notes**                                   | <ul><li>Possible values are:</li><li>  ** "Color Board"</li><li>  ** "Color Wheels"</li><li>  ** "Color Curves"</li><li>  ** "Hue/Saturation Curves"</li><li>  ** "Color Adjustments" (Final Cut Pro 10.6.6 or later)</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/CorrectionsBar.lua line 28](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/CorrectionsBar.lua#L28) |

---

#### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorInspector.matches(element)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the specified element is the Color Inspector element.                                                                     |
| **Parameters**                              | <ul><li>element   - The element to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if the element is the Color Inspector.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua line 29](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua#L29) |

---

#### Fields


### [colorAdjustments](#coloradjustments)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorInspector.colorAdjustments <ColorAdjustments>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The ColorAdjustments object.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua line 286](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua#L286) |

---


### [colorBoard](#colorboard)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorInspector.colorBoard <ColorBoard>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The ColorBoard object.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua line 234](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua#L234) |

---


### [colorCurves](#colorcurves)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorInspector.colorCurves <ColorCurves>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The ColorCurves object.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua line 260](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua#L260) |

---


### [colorWheels](#colorwheels)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorInspector.colorWheels <ColorWheels>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The ColorWheels object.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua line 247](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua#L247) |

---


### [corrections](#corrections)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorInspector.corrections <CorrectionsBar>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `CorrectionsBar` instance representing the available corrections,                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua line 106](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua#L106) |

---


### [correctorUI](#correctorui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorInspector.correctorUI <cp.prop: hs.axuielement; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns the `hs.axuielement` object representing the currently-selected corrector panel.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua line 82](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua#L82) |

---


### [hueSaturationCurves](#huesaturationcurves)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorInspector.hueSaturationCurves <HueSaturationCurves>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The HueSaturationCurves object.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua line 273](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua#L273) |

---


### [topBarUI](#topbarui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorInspector.topBarUI <cp.prop: hs.axuielement; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns the `hs.axuielement` object representing the top bar.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua line 63](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua#L63) |

---


### [value](#value)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorInspector.value <cp.prop: cp.drawing.color>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Gets the Color Well Value as a `cp.drawing.color`.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorWell.lua line 286](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorWell.lua#L286) |

---

#### Methods


### [activateCorrection](#activatecorrection)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorInspector:activateCorrection(correctionType[, number]) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Activates the named correction type and number, if present. If no corrector with the type/number combination exists, a new one is added.                                                                     |
| **Parameters**                              | <ul><li>correctionType   - The string for the type of correction (in English). E.g. "Color Wheels", "Color Board", etc.</li><li>number           - The correction number for that type. Defaults to `1`.</li></ul> |
| **Returns**                                 | <ul><li>ColorInspector object</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua line 154](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua#L154) |

---


### [addCorrection](#addcorrection)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorInspector:addCorrection(correctionType) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds the named correction type.                                                                     |
| **Parameters**                              | <ul><li>correctionType   - The string for the type of correction (in English). E.g. "Color Wheels", "Color Board", etc.</li></ul> |
| **Returns**                                 | <ul><li>ColorInspector object</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua line 184](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua#L184) |

---


### [ColorInspector](#colorinspector)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorInspector(parent) -> ColorInspector object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Creates a new ColorInspector object                                                                     |
| **Parameters**                              | <ul><li>`parent`     - The parent</li></ul> |
| **Returns**                                 | <ul><li>A ColorInspector object</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua line 50](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua#L50) |

---


### [doActivateCorrection](#doactivatecorrection)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorInspector:doActivateCorrection(correctionType[, number]) -> cp.rx.go.Statement<boolean>`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a [Statement](cp.rx.go.Statement.md) that activates the named correction type and number, if present. If no corrector with the type/number combination exists, a new one is added.                                                                     |
| **Parameters**                              | <ul><li>correctionType   - The string for the type of correction (in English). E.g. "Color Wheels", "Color Board", etc.</li><li>number           - The correction number for that type. Defaults to `1`.</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`, which sends a single `true` value if successful, or sends an error if not.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua line 169](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua#L169) |

---


### [doAddCorrection](#doaddcorrection)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorInspector:doAddCorrection(correctionType) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that adds the named correction type.                                                                     |
| **Parameters**                              | <ul><li>correctionType   - The string for the type of correction (in English). E.g. "Color Wheels", "Color Board", etc.</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`, resolving to `true` if successful, or sending an error if not.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua line 198](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua#L198) |

---


### [doShow](#doshow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorInspector:doShow() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that attempts to show the Color Inspector.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`, resolving to `true` if successful or sending an error if not.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua line 136](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua#L136) |

---


### [hide](#hide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorInspector:hide() -> ColorInspector`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Hides the Color Inspector                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>ColorInspector object</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua line 212](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua#L212) |

---


### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorInspector:show() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Shows the Color Inspector.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>ColorInspector object</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua line 120](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua#L120) |

---

