# cp.apple.finalcutpro.inspector.color.HueSaturationCurves

Color Curves Module.

Requires Final Cut Pro 10.4 or later.

## API Overview
* Functions - API calls offered directly by the extension
 * [matches](#matches)
* Constructors - API calls which return an object, typically one that offers API methods
 * [HueSaturationCurves](#HueSaturationCurves)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [colorVsSat](#colorVsSat)
 * [contentUI](#contentUI)
 * [hueVsHue](#hueVsHue)
 * [hueVsLuma](#hueVsLuma)
 * [hueVsSat](#hueVsSat)
 * [lumaVsSat](#lumaVsSat)
 * [mix](#mix)
 * [mixRow](#mixRow)
 * [mixSlider](#mixSlider)
 * [satVsSat](#satVsSat)
 * [viewingAllCurves](#viewingAllCurves)
 * [viewModeButton](#viewModeButton)
 * [wheelType](#wheelType)
* Methods - API calls which can only be made on an object returned by a constructor
 * [show](#show)

## API Documentation

### Functions

| [matches](#matches)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.HueSaturationCurves.matches(element)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the specified element is the Color Curves element.                                                                     |
| **Parameters**                              | <ul><li>element	- The element to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if the element is the Color Curves.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Constructors

| [HueSaturationCurves](#HueSaturationCurves)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.HueSaturationCurves(parent) -> HueSaturationCurves object`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new HueSaturationCurves object                                                                     |
| **Parameters**                              | <ul><li>`parent`     - The parent</li></ul> |
| **Returns**                                 | <ul><li>A ColorInspector object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Fields

| [colorVsSat](#colorVsSat)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.HueSaturationCurves.colorVsSat <HueSaturationCurve>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A [HueSaturationCurve](cp.apple.finalcutpro.inspector.color.HueSaturationCurve.md)                                                                     |

| [contentUI](#contentUI)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.HueSaturationCurves.contentUI <cp.prop: hs.axuielement; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `axuielement` representing the content element of the HueSaturationCurves corrector.                                                                     |

| [hueVsHue](#hueVsHue)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.HueSaturationCurves.hueVsHue <HueSaturationCurve>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A [HueSaturationCurve](cp.apple.finalcutpro.inspector.color.HueSaturationCurve.md)                                                                     |

| [hueVsLuma](#hueVsLuma)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.HueSaturationCurves.hueVsLuma <HueSaturationCurve>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A [HueSaturationCurve](cp.apple.finalcutpro.inspector.color.HueSaturationCurve.md)                                                                     |

| [hueVsSat](#hueVsSat)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.HueSaturationCurves.hueVsSat <HueSaturationCurve>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A [HueSaturationCurve](cp.apple.finalcutpro.inspector.color.HueSaturationCurve.md)                                                                     |

| [lumaVsSat](#lumaVsSat)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.HueSaturationCurves.lumaVsSat <HueSaturationCurve>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A [HueSaturationCurve](cp.apple.finalcutpro.inspector.color.HueSaturationCurve.md)                                                                     |

| [mix](#mix)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.HueSaturationCurves.mix <cp.prop: number>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The mix amount for this corrector. A number ranging from `0` to `1`.                                                                     |

| [mixRow](#mixRow)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.HueSaturationCurves.mixRow <cp.ui.PropertyRow>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `PropertyRow` that provides access to the 'Mix' parameter, and `axuielement`                                                                     |

| [mixSlider](#mixSlider)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.HueSaturationCurves.mixSlider <cp.ui.Slider>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `Slider` that provides access to the 'Mix' slider.                                                                     |

| [satVsSat](#satVsSat)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.HueSaturationCurves.satVsSat <HueSaturationCurve>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A [HueSaturationCurve](cp.apple.finalcutpro.inspector.color.HueSaturationCurve.md)                                                                     |

| [viewingAllCurves](#viewingAllCurves)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.HueSaturationCurves.viewingAllCurves <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Reports and modifies whether the corrector is showing "All Curves" (`true`) or "Single Curves" (`false`).                                                                     |

| [viewModeButton](#viewModeButton)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.HueSaturationCurves.viewModeButton <cp.ui.MenuButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [MenuButton](cp.ui.MenuButton.md) for the View Mode.                                                                     |

| [wheelType](#wheelType)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.HueSaturationCurves.wheelType <RadioGroup>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `RadioGroup` that allows selection of the curve type. Only available when                                                                     |

### Methods

| [show](#show)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.HueSaturationCurves:show() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Show's the Color Board within the Color Inspector.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>HueSaturationCurves object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

