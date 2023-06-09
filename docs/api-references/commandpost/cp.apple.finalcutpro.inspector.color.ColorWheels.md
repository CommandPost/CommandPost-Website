# cp.apple.finalcutpro.inspector.color.ColorWheels

Color Wheels Module.

Extends [Element](cp.ui.Element.md)

## API Overview
### **Functions** - _API calls offered directly by the extension_
 * [matches](#matches)

### **Constructors** - _API calls which return an object, typically one that offers API methods_
 * [ColorWheels](#colorwheels)

### **Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [contentUI](#contentui)
 * [highlights](#highlights)
 * [hue](#hue)
 * [hueRow](#huerow)
 * [hueSlider](#hueslider)
 * [hueTextField](#huetextfield)
 * [master](#master)
 * [maxValue](#maxvalue)
 * [midtones](#midtones)
 * [minValue](#minvalue)
 * [mix](#mix)
 * [mixRow](#mixrow)
 * [mixSlider](#mixslider)
 * [mixTextField](#mixtextfield)
 * [shadows](#shadows)
 * [temperature](#temperature)
 * [temperatureRow](#temperaturerow)
 * [temperatureSlider](#temperatureslider)
 * [temperatureTextField](#temperaturetextfield)
 * [tint](#tint)
 * [tintRow](#tintrow)
 * [tintSlider](#tintslider)
 * [tintTextField](#tinttextfield)
 * [value](#value)
 * [viewingAllWheels](#viewingallwheels)
 * [viewMode](#viewmode)
 * [wheelType](#wheeltype)

### **Methods** - _API calls which can only be made on an object returned by a constructor_
 * [doShow](#doshow)
 * [show](#show)


## API Documentation

### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorWheels.matches(element)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the specified element is the Color Wheels element.                                                                     |
| **Parameters**                              | <ul><li>element   - The element to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if the element is the Color Wheels.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Constructors


### [ColorWheels](#colorwheels)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorWheels(parent) -> ColorInspector`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new ColorWheels object                                                                     |
| **Parameters**                              | <ul><li>`parent`     - The parent</li></ul> |
| **Returns**                                 | <ul><li>A new `ColorInspector` object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Fields


### [contentUI](#contentui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorWheels.contentUI <cp.prop: hs.axuielement; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `axuielement` representing the content element of the ColorWheels corrector.                                                                     |

---

### [highlights](#highlights)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorWheels.highlights <ColorWheel>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `ColorWheel` that allows control of the 'highlights' color settings.                                                                     |

---

### [hue](#hue)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorWheels.hue <cp.prop: number>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The hue for the corrector. A number from `0` to `360`.                                                                     |

---

### [hueRow](#huerow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorWheels.hueRow <cp.ui.PropertyRow>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `PropertyRow` that provides access to the 'Hue' parameter, and `axuielement`                                                                     |

---

### [hueSlider](#hueslider)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorWheels.hueSlider <cp.ui.Slider>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns a `Slider` that provides access to the 'Hue' slider.                                                                     |

---

### [hueTextField](#huetextfield)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorWheels.hueTextField <cp.ui.TextField>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `TextField` that provides access to the 'Hue' slider.                                                                     |

---

### [master](#master)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorWheels.master <ColorWheel>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `ColorWheel` that allows control of the 'master' color settings.                                                                     |

---

### [maxValue](#maxvalue)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorWheels.maxValue <cp.prop: number>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The maximum value of the indicator as a number.                                                                     |

---

### [midtones](#midtones)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorWheels.midtones <ColorWheel>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `ColorWheel` that allows control of the 'midtones' color settings.                                                                     |

---

### [minValue](#minvalue)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorWheels.minValue <cp.prop: number>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The minimum value of the indicator as a number.                                                                     |

---

### [mix](#mix)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorWheels.mix <cp.prop: number>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The mix amount for this corrector. A number ranging from `0` to `1`.                                                                     |

---

### [mixRow](#mixrow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorWheels.mixRow <cp.ui.PropertyRow>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `PropertyRow` that provides access to the 'Mix' parameter, and `axuielement`                                                                     |

---

### [mixSlider](#mixslider)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorWheels.mixSlider <cp.ui.Slider>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `Slider` that provides access to the 'Mix' slider.                                                                     |

---

### [mixTextField](#mixtextfield)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorWheels.mixTextField <cp.ui.TextField>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `TextField` that provides access to the 'Mix' slider.                                                                     |

---

### [shadows](#shadows)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorWheels.shadows <ColorWheel>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `ColorWheel` that allows control of the 'shadows' color settings.                                                                     |

---

### [temperature](#temperature)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorWheels.temperature <cp.prop: number>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The color temperature for this corrector. A number from 2500 to 10000.                                                                     |

---

### [temperatureRow](#temperaturerow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorWheels.temperatureRow <cp.ui.PropertyRow>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `PropertyRow` that provides access to the 'Temperatures' parameter, and `axuielement`                                                                     |

---

### [temperatureSlider](#temperatureslider)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorWheels.temperatureSlider <cp.ui.Slider>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `Slider` that provides access to the 'Temperatures' slider.                                                                     |

---

### [temperatureTextField](#temperaturetextfield)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorWheels.temperatureTextField <cp.ui.TextField>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `TextField` that provides access to the 'Temperature' slider.                                                                     |

---

### [tint](#tint)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorWheels.tint <cp.prop: number>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The tint for the corrector. A number from `-50` to `50`.                                                                     |

---

### [tintRow](#tintrow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorWheels.tintRow <cp.ui.PropertyRow>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `PropertyRow` that provides access to the 'Tint' parameter, and `axuielement`                                                                     |

---

### [tintSlider](#tintslider)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorWheels.tintSlider <cp.ui.Slider>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns a `Slider` that provides access to the 'Tint' slider.                                                                     |

---

### [tintTextField](#tinttextfield)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorWheels.tintTextField <cp.ui.TextField>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `TextField` that provides access to the 'Tint' slider.                                                                     |

---

### [value](#value)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorWheels.value <cp.prop: number>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The value of the value indicator as a number.                                                                     |

---

### [viewingAllWheels](#viewingallwheels)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorWheels.viewingAllWheels <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Reports and modifies whether the ColorWheels corrector is showing "All Wheels" (`true`) or "Single Wheels" (`false`).                                                                     |

---

### [viewMode](#viewmode)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorWheels.viewMode <cp.ui.MenuButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [MenuButton](cp.ui.MenuButton.md) for the View Mode.                                                                     |

---

### [wheelType](#wheeltype)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorWheels.wheelType <cp.ui.RadioGroup>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `RadioGroup` that allows selection of the wheel type. Only available when                                                                     |

---
### Methods


### [doShow](#doshow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorWheels:doShow() -> cs.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that shows the Color Board within the Color Inspector.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`, resolving to `true` if successfully shown.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorWheels:show() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Show's the Color Board within the Color Inspector.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>ColorWheels object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
