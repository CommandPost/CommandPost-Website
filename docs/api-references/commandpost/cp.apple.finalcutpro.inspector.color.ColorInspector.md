# cp.apple.finalcutpro.inspector.color.ColorInspector

Color Inspector Module.

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [CORRECTION_TYPES](#correction_types)

**Functions** - _API calls offered directly by the extension_
 * [matches](#matches)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
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
| **Description**                             | Table of Correction Types:                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/CorrectionsBar.lua line 27](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/CorrectionsBar.lua#L27){target="_blank"} |

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
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua line 28](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua#L28){target="_blank"} |

---

#### Fields


### [colorBoard](#colorboard)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorInspector.colorBoard <ColorBoard>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The ColorBoard object.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua line 233](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua#L233){target="_blank"} |

---


### [colorCurves](#colorcurves)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorInspector.colorCurves <ColorCurves>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The ColorCurves object.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua line 259](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua#L259){target="_blank"} |

---


### [colorWheels](#colorwheels)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorInspector.colorWheels <ColorWheels>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The ColorWheels object.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua line 246](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua#L246){target="_blank"} |

---


### [corrections](#corrections)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorInspector.corrections <CorrectionsBar>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `CorrectionsBar` instance representing the available corrections,                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua line 105](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua#L105){target="_blank"} |

---


### [correctorUI](#correctorui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorInspector.correctorUI <cp.prop: hs.axuielement; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns the `hs.axuielement` object representing the currently-selected corrector panel.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua line 81](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua#L81){target="_blank"} |

---


### [hueSaturationCurves](#huesaturationcurves)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorInspector.hueSaturationCurves <HueSaturationCurves>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The HueSaturationCurves object.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua line 272](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua#L272){target="_blank"} |

---


### [topBarUI](#topbarui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorInspector.topBarUI <cp.prop: hs.axuielement; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns the `hs.axuielement` object representing the top bar.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua line 62](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua#L62){target="_blank"} |

---


### [value](#value)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorInspector.value <cp.prop: cp.drawing.color>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Gets the Color Well Value as a `cp.drawing.color`.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorWell.lua line 286](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorWell.lua#L286){target="_blank"} |

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
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua line 153](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua#L153){target="_blank"} |

---


### [addCorrection](#addcorrection)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorInspector:addCorrection(correctionType) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds the named correction type.                                                                     |
| **Parameters**                              | <ul><li>correctionType   - The string for the type of correction (in English). E.g. "Color Wheels", "Color Board", etc.</li></ul> |
| **Returns**                                 | <ul><li>ColorInspector object</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua line 183](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua#L183){target="_blank"} |

---


### [ColorInspector](#colorinspector)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorInspector(parent) -> ColorInspector object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Creates a new ColorInspector object                                                                     |
| **Parameters**                              | <ul><li>`parent`     - The parent</li></ul> |
| **Returns**                                 | <ul><li>A ColorInspector object</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua line 49](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua#L49){target="_blank"} |

---


### [doActivateCorrection](#doactivatecorrection)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorInspector:doActivateCorrection(correctionType[, number]) -> cp.rx.go.Statement<boolean>`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a [Statement](cp.rx.go.Statement.md) that activates the named correction type and number, if present. If no corrector with the type/number combination exists, a new one is added.                                                                     |
| **Parameters**                              | <ul><li>correctionType   - The string for the type of correction (in English). E.g. "Color Wheels", "Color Board", etc.</li><li>number           - The correction number for that type. Defaults to `1`.</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`, which sends a single `true` value if successful, or sends an error if not.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua line 168](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua#L168){target="_blank"} |

---


### [doAddCorrection](#doaddcorrection)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorInspector:doAddCorrection(correctionType) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that adds the named correction type.                                                                     |
| **Parameters**                              | <ul><li>correctionType   - The string for the type of correction (in English). E.g. "Color Wheels", "Color Board", etc.</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`, resolving to `true` if successful, or sending an error if not.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua line 197](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua#L197){target="_blank"} |

---


### [doShow](#doshow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorInspector:doShow() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that attempts to show the Color Inspector.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`, resolving to `true` if successful or sending an error if not.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua line 135](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua#L135){target="_blank"} |

---


### [hide](#hide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorInspector:hide() -> ColorInspector`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Hides the Color Inspector                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>ColorInspector object</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua line 211](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua#L211){target="_blank"} |

---


### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorInspector:show() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Shows the Color Inspector.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>ColorInspector object</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua line 119](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorInspector.lua#L119){target="_blank"} |

---

