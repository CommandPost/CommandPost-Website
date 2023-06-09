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

#### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorCurves.matches(element)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the specified element is the Color Curves element.                                                                     |
| **Parameters**                              | <ul><li>element	- The element to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if the element is the Color Curves.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorCurves.lua line 48](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorCurves.lua#L48){target="_blank"} |

---

#### Constructors


### [ColorCurves](#colorcurves)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorCurves(parent) -> ColorCurves object`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new ColorCurves object                                                                     |
| **Parameters**                              | <ul><li>`parent`     - The parent</li></ul> |
| **Returns**                                 | <ul><li>A ColorInspector object</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorCurves.lua line 66](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorCurves.lua#L66){target="_blank"} |

---

#### Fields


### [blue](#blue)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorCurves.blue <ColorCurve>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A [ColorCurve](cp.apple.finalcutpro.inspector.color.ColorCurve.md)                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorCurves.lua line 217](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorCurves.lua#L217){target="_blank"} |

---


### [contentUI](#contentui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorCurves.contentUI <cp.prop: hs.axuielement; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `axuielement` representing the content element of the ColorCurves corrector.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorCurves.lua line 121](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorCurves.lua#L121){target="_blank"} |

---


### [green](#green)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorCurves.green <ColorCurve>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A [ColorCurve](cp.apple.finalcutpro.inspector.color.ColorCurve.md)                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorCurves.lua line 208](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorCurves.lua#L208){target="_blank"} |

---


### [luma](#luma)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorCurves.luma <ColorCurve>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A [ColorCurve](cp.apple.finalcutpro.inspector.color.ColorCurve.md)                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorCurves.lua line 191](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorCurves.lua#L191){target="_blank"} |

---


### [mix](#mix)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorCurves.mix <cp.prop: number>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The mix amount for this corrector. A number ranging from `0` to `1`.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorCurves.lua line 255](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorCurves.lua#L255){target="_blank"} |

---


### [mixRow](#mixrow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorCurves.mixRow <cp.ui.PropertyRow>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `PropertyRow` that provides access to the 'Mix' parameter, and `axuielement`                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorCurves.lua line 226](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorCurves.lua#L226){target="_blank"} |

---


### [mixSlider](#mixslider)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorCurves.mixSlider <cp.ui.Slider>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `Slider` that provides access to the 'Mix' slider.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorCurves.lua line 233](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorCurves.lua#L233){target="_blank"} |

---


### [preserveLuma](#preserveluma)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorCurves.preserveLuma <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns a [CheckBox](cp.ui.CheckBox.md) that provides access to the 'Preserve Luma' slider.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorCurves.lua line 270](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorCurves.lua#L270){target="_blank"} |

---


### [preserveLumaRow](#preservelumarow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorCurves.preserveLumaRow <cp.ui.PropertyRow>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `PropertyRow` that provides access to the 'Preserve Luma' parameter, and `axuielement`                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorCurves.lua line 262](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorCurves.lua#L262){target="_blank"} |

---


### [red](#red)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorCurves.red <ColorCurve>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A [ColorCurve](cp.apple.finalcutpro.inspector.color.ColorCurve.md)                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorCurves.lua line 199](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorCurves.lua#L199){target="_blank"} |

---


### [viewingAllCurves](#viewingallcurves)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorCurves.viewingAllCurves <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Reports and modifies whether the corrector is showing "All Curves" (`true`) or "Single Curves" (`false`).                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorCurves.lua line 147](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorCurves.lua#L147){target="_blank"} |

---


### [viewModeButton](#viewmodebutton)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorCurves.viewModeButton <cp.ui.MenuButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns the [MenuButton](cp.ui.MenuButton.md) for the View Mode.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorCurves.lua line 134](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorCurves.lua#L134){target="_blank"} |

---


### [wheelType](#wheeltype)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorCurves.wheelType <RadioGroup>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `RadioGroup` that allows selection of the curve type. Only available when                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorCurves.lua line 174](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorCurves.lua#L174){target="_blank"} |

---

#### Methods


### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorCurves:show() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Show's the Color Board within the Color Inspector.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>ColorCurves object</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorCurves.lua line 99](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorCurves.lua#L99){target="_blank"} |

---

