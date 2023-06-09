# cp.apple.finalcutpro.inspector.color.ColorInspector

Color Inspector Module.

## API Overview
* Constants - Useful values which cannot be changed
 * [CORRECTION_TYPES](#correction_types)
* Functions - API calls offered directly by the extension
 * [matches](#matches)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [colorBoard](#colorboard)
 * [colorCurves](#colorcurves)
 * [colorWheels](#colorwheels)
 * [corrections](#corrections)
 * [correctorUI](#correctorui)
 * [hueSaturationCurves](#huesaturationcurves)
 * [topBarUI](#topbarui)
 * [value](#value)
* Methods - API calls which can only be made on an object returned by a constructor
 * [activateCorrection](#activatecorrection)
 * [addCorrection](#addcorrection)
 * [ColorInspector](#colorinspector)
 * [doActivateCorrection](#doactivatecorrection)
 * [doAddCorrection](#doaddcorrection)
 * [doShow](#doshow)
 * [hide](#hide)
 * [show](#show)

## API Documentation

### Constants


### [CORRECTION_TYPES](#correction_types)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorInspector.CORRECTION_TYPES`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Table of Correction Types:                                                                     |

---
### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorInspector.matches(element)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the specified element is the Color Inspector element.                                                                     |
| **Parameters**                              | <ul><li>element   - The element to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if the element is the Color Inspector.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Fields


### [colorBoard](#colorboard)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorInspector.colorBoard <ColorBoard>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The ColorBoard object.                                                                     |

---

### [colorCurves](#colorcurves)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorInspector.colorCurves <ColorCurves>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The ColorCurves object.                                                                     |

---

### [colorWheels](#colorwheels)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorInspector.colorWheels <ColorWheels>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The ColorWheels object.                                                                     |

---

### [corrections](#corrections)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorInspector.corrections <CorrectionsBar>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `CorrectionsBar` instance representing the available corrections,                                                                     |

---

### [correctorUI](#correctorui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorInspector.correctorUI <cp.prop: hs.axuielement; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns the `hs.axuielement` object representing the currently-selected corrector panel.                                                                     |

---

### [hueSaturationCurves](#huesaturationcurves)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorInspector.hueSaturationCurves <HueSaturationCurves>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The HueSaturationCurves object.                                                                     |

---

### [topBarUI](#topbarui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorInspector.topBarUI <cp.prop: hs.axuielement; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns the `hs.axuielement` object representing the top bar.                                                                     |

---

### [value](#value)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorInspector.value <cp.prop: cp.drawing.color>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Gets the Color Well Value as a `cp.drawing.color`.                                                                     |

---
### Methods


### [activateCorrection](#activatecorrection)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorInspector:activateCorrection(correctionType[, number]) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Activates the named correction type and number, if present. If no corrector with the type/number combination exists, a new one is added.                                                                     |
| **Parameters**                              | <ul><li>correctionType   - The string for the type of correction (in English). E.g. "Color Wheels", "Color Board", etc.</li><li>number           - The correction number for that type. Defaults to `1`.</li></ul> |
| **Returns**                                 | <ul><li>ColorInspector object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [addCorrection](#addcorrection)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorInspector:addCorrection(correctionType) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds the named correction type.                                                                     |
| **Parameters**                              | <ul><li>correctionType   - The string for the type of correction (in English). E.g. "Color Wheels", "Color Board", etc.</li></ul> |
| **Returns**                                 | <ul><li>ColorInspector object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [ColorInspector](#colorinspector)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorInspector(parent) -> ColorInspector object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Creates a new ColorInspector object                                                                     |
| **Parameters**                              | <ul><li>`parent`     - The parent</li></ul> |
| **Returns**                                 | <ul><li>A ColorInspector object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [doActivateCorrection](#doactivatecorrection)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorInspector:doActivateCorrection(correctionType[, number]) -> cp.rx.go.Statement<boolean>`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a [Statement](cp.rx.go.Statement.md) that activates the named correction type and number, if present. If no corrector with the type/number combination exists, a new one is added.                                                                     |
| **Parameters**                              | <ul><li>correctionType   - The string for the type of correction (in English). E.g. "Color Wheels", "Color Board", etc.</li><li>number           - The correction number for that type. Defaults to `1`.</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`, which sends a single `true` value if successful, or sends an error if not.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [doAddCorrection](#doaddcorrection)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorInspector:doAddCorrection(correctionType) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that adds the named correction type.                                                                     |
| **Parameters**                              | <ul><li>correctionType   - The string for the type of correction (in English). E.g. "Color Wheels", "Color Board", etc.</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`, resolving to `true` if successful, or sending an error if not.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [doShow](#doshow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorInspector:doShow() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that attempts to show the Color Inspector.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`, resolving to `true` if successful or sending an error if not.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [hide](#hide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorInspector:hide() -> ColorInspector`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Hides the Color Inspector                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>ColorInspector object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorInspector:show() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Shows the Color Inspector.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>ColorInspector object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
