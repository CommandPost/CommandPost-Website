# cp.apple.finalcutpro.inspector.color.ColorCurves

Color Curves Module.

Requires Final Cut Pro 10.4 or later.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [matches](#matches)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [ColorCurves](#colorcurves)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [blue](#blue)
 * [contentUI](#contentui)
 * [green](#green)
 * [luma](#luma)
 * [mix](#mix)
 * [mixRow](#mixrow)
 * [mixSlider](#mixslider)
 * [preserveLuma](#preserveluma)
 * [preserveLumaRow](#preservelumarow)
 * [red](#red)
 * [viewingAllCurves](#viewingallcurves)
 * [viewModeButton](#viewmodebutton)
 * [wheelType](#wheeltype)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [show](#show)


---

## API Documentation

### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorCurves.matches(element)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the specified element is the Color Curves element.                                                                     |
| **Parameters**                              | <ul><li>element	- The element to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if the element is the Color Curves.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Constructors


### [ColorCurves](#colorcurves)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorCurves(parent) -> ColorCurves object`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new ColorCurves object                                                                     |
| **Parameters**                              | <ul><li>`parent`     - The parent</li></ul> |
| **Returns**                                 | <ul><li>A ColorInspector object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Fields


### [blue](#blue)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorCurves.blue <ColorCurve>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A [ColorCurve](cp.apple.finalcutpro.inspector.color.ColorCurve.md)                                                                     |

---

### [contentUI](#contentui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorCurves.contentUI <cp.prop: hs.axuielement; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `axuielement` representing the content element of the ColorCurves corrector.                                                                     |

---

### [green](#green)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorCurves.green <ColorCurve>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A [ColorCurve](cp.apple.finalcutpro.inspector.color.ColorCurve.md)                                                                     |

---

### [luma](#luma)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorCurves.luma <ColorCurve>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A [ColorCurve](cp.apple.finalcutpro.inspector.color.ColorCurve.md)                                                                     |

---

### [mix](#mix)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorCurves.mix <cp.prop: number>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The mix amount for this corrector. A number ranging from `0` to `1`.                                                                     |

---

### [mixRow](#mixrow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorCurves.mixRow <cp.ui.PropertyRow>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `PropertyRow` that provides access to the 'Mix' parameter, and `axuielement`                                                                     |

---

### [mixSlider](#mixslider)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorCurves.mixSlider <cp.ui.Slider>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `Slider` that provides access to the 'Mix' slider.                                                                     |

---

### [preserveLuma](#preserveluma)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorCurves.preserveLuma <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns a [CheckBox](cp.ui.CheckBox.md) that provides access to the 'Preserve Luma' slider.                                                                     |

---

### [preserveLumaRow](#preservelumarow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorCurves.preserveLumaRow <cp.ui.PropertyRow>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `PropertyRow` that provides access to the 'Preserve Luma' parameter, and `axuielement`                                                                     |

---

### [red](#red)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorCurves.red <ColorCurve>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A [ColorCurve](cp.apple.finalcutpro.inspector.color.ColorCurve.md)                                                                     |

---

### [viewingAllCurves](#viewingallcurves)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorCurves.viewingAllCurves <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Reports and modifies whether the corrector is showing "All Curves" (`true`) or "Single Curves" (`false`).                                                                     |

---

### [viewModeButton](#viewmodebutton)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorCurves.viewModeButton <cp.ui.MenuButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns the [MenuButton](cp.ui.MenuButton.md) for the View Mode.                                                                     |

---

### [wheelType](#wheeltype)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorCurves.wheelType <RadioGroup>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `RadioGroup` that allows selection of the curve type. Only available when                                                                     |

---
### Methods


### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorCurves:show() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Show's the Color Board within the Color Inspector.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>ColorCurves object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
