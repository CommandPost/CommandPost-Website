# cp.apple.finalcutpro.inspector.color.ColorAdjustments

Color Adjustments Module.

Requires Final Cut Pro v10.6.6 or later.

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [CONTROL_RANGES](#control_ranges)

**Functions** - _API calls offered directly by the extension_
 * [matches](#matches)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [ColorAdjustments](#coloradjustments)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [blackPointRow](#blackpointrow)
 * [blackPointSlider](#blackpointslider)
 * [blackPointTextField](#blackpointtextfield)
 * [brightnessRow](#brightnessrow)
 * [brightnessSlider](#brightnessslider)
 * [brightnessTextField](#brightnesstextfield)
 * [contentUI](#contentui)
 * [contrastRow](#contrastrow)
 * [contrastSlider](#contrastslider)
 * [contrastTextField](#contrasttextfield)
 * [exposureRow](#exposurerow)
 * [exposureSlider](#exposureslider)
 * [exposureTextField](#exposuretextfield)
 * [highlightsRow](#highlightsrow)
 * [highlightsSlider](#highlightsslider)
 * [highlightsTextField](#highlightstextfield)
 * [highlightsTintRow](#highlightstintrow)
 * [highlightsTintSlider](#highlightstintslider)
 * [highlightsTintTextField](#highlightstinttextfield)
 * [highlightsWarmthRow](#highlightswarmthrow)
 * [highlightsWarmthSlider](#highlightswarmthslider)
 * [highlightsWarmthTextField](#highlightswarmthtextfield)
 * [midtonesTintRow](#midtonestintrow)
 * [midtonesTintSlider](#midtonestintslider)
 * [midtonesTintTextField](#midtonestinttextfield)
 * [midtonesWarmthRow](#midtoneswarmthrow)
 * [midtonesWarmthSlider](#midtoneswarmthslider)
 * [midtonesWarmthTextField](#midtoneswarmthtextfield)
 * [mixRow](#mixrow)
 * [mixSlider](#mixslider)
 * [mixTextField](#mixtextfield)
 * [saturationRow](#saturationrow)
 * [saturationSlider](#saturationslider)
 * [saturationTextField](#saturationtextfield)
 * [shadowsRow](#shadowsrow)
 * [shadowsSlider](#shadowsslider)
 * [shadowsTextField](#shadowstextfield)
 * [shadowsTintRow](#shadowstintrow)
 * [shadowsTintSlider](#shadowstintslider)
 * [shadowsTintTextField](#shadowstinttextfield)
 * [shadowsWarmthRow](#shadowswarmthrow)
 * [shadowsWarmthSlider](#shadowswarmthslider)
 * [shadowsWarmthTextField](#shadowswarmthtextfield)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [controlRange](#controlrange)
 * [controlRangeLabel](#controlrangelabel)
 * [show](#show)


---

## API Documentation

#### Constants


### [CONTROL_RANGES](#control_ranges)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorAdjustments.CONTROL_RANGES`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Table of Control Ranges.                                                                     |
| **Notes**                                   | <ul><li>Possible values are:</li><li>  ** SDR</li><li>  ** HLG</li><li>  ** PQ 1000 nits</li><li>  ** PQ 2000 nites</li><li>  ** PQ 4000 nits</li><li>  ** PQ 10000 nits</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua line 163](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua#L163) |

---

#### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorAdjustments.matches(element)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the specified element is the Color Curves element.                                                                     |
| **Parameters**                              | <ul><li>element	- The element to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if the element is the Color Curves.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua line 33](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua#L33) |

---

#### Constructors


### [ColorAdjustments](#coloradjustments)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorAdjustments(parent) -> ColorAdjustments object`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new ColorAdjustments object                                                                     |
| **Parameters**                              | <ul><li>`parent`     - The parent</li></ul> |
| **Returns**                                 | <ul><li>A ColorInspector object</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua line 53](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua#L53) |

---

#### Fields


### [blackPointRow](#blackpointrow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorAdjustments.blackPointRow <cp.ui.PropertyRow>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `PropertyRow` that provides access to the parameter, and `axuielement` values for that row.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua line 472](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua#L472) |

---


### [blackPointSlider](#blackpointslider)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorAdjustments.blackPointSlider <cp.ui.Slider>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `Slider` that provides access to the slider.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua line 479](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua#L479) |

---


### [blackPointTextField](#blackpointtextfield)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorAdjustments.blackPointTextField <cp.ui.TextField>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `TextField` that provides access to the slider.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua line 491](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua#L491) |

---


### [brightnessRow](#brightnessrow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorAdjustments.brightnessRow <cp.ui.PropertyRow>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `PropertyRow` that provides access to the parameter, and `axuielement` values for that row.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua line 343](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua#L343) |

---


### [brightnessSlider](#brightnessslider)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorAdjustments.brightnessSlider <cp.ui.Slider>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `Slider` that provides access to the slider.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua line 350](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua#L350) |

---


### [brightnessTextField](#brightnesstextfield)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorAdjustments.brightnessTextField <cp.ui.TextField>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `TextField` that provides access to the slider.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua line 362](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua#L362) |

---


### [contentUI](#contentui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorAdjustments.contentUI <cp.prop: hs.axuielement; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `axuielement` representing the content element of the ColorAdjustments corrector.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua line 121](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua#L121) |

---


### [contrastRow](#contrastrow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorAdjustments.contrastRow <cp.ui.PropertyRow>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `PropertyRow` that provides access to the parameter, and `axuielement` values for that row.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua line 300](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua#L300) |

---


### [contrastSlider](#contrastslider)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorAdjustments.contrastSlider <cp.ui.Slider>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `Slider` that provides access to the slider.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua line 307](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua#L307) |

---


### [contrastTextField](#contrasttextfield)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorAdjustments.contrastTextField <cp.ui.TextField>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `TextField` that provides access to the slider.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua line 319](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua#L319) |

---


### [exposureRow](#exposurerow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorAdjustments.exposureRow <cp.ui.PropertyRow>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `PropertyRow` that provides access to the parameter, and `axuielement` values for that row.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua line 257](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua#L257) |

---


### [exposureSlider](#exposureslider)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorAdjustments.exposureSlider <cp.ui.Slider>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `Slider` that provides access to the slider.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua line 264](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua#L264) |

---


### [exposureTextField](#exposuretextfield)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorAdjustments.exposureTextField <cp.ui.TextField>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `TextField` that provides access to the slider.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua line 276](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua#L276) |

---


### [highlightsRow](#highlightsrow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorAdjustments.highlightsRow <cp.ui.PropertyRow>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `PropertyRow` that provides access to the parameter, and `axuielement` values for that row.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua line 429](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua#L429) |

---


### [highlightsSlider](#highlightsslider)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorAdjustments.highlightsSlider <cp.ui.Slider>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `Slider` that provides access to the slider.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua line 436](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua#L436) |

---


### [highlightsTextField](#highlightstextfield)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorAdjustments.highlightsTextField <cp.ui.TextField>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `TextField` that provides access to the slider.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua line 448](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua#L448) |

---


### [highlightsTintRow](#highlightstintrow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorAdjustments.highlightsTintRow <cp.ui.PropertyRow>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `PropertyRow` that provides access to the parameter, and `axuielement` values for that row.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua line 601](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua#L601) |

---


### [highlightsTintSlider](#highlightstintslider)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorAdjustments.highlightsTintSlider <cp.ui.Slider>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `Slider` that provides access to the slider.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua line 608](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua#L608) |

---


### [highlightsTintTextField](#highlightstinttextfield)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorAdjustments.highlightsTintTextField <cp.ui.TextField>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `TextField` that provides access to the slider.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua line 620](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua#L620) |

---


### [highlightsWarmthRow](#highlightswarmthrow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorAdjustments.highlightsWarmthRow <cp.ui.PropertyRow>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `PropertyRow` that provides access to the parameter, and `axuielement` values for that row.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua line 558](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua#L558) |

---


### [highlightsWarmthSlider](#highlightswarmthslider)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorAdjustments.highlightsWarmthSlider <cp.ui.Slider>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `Slider` that provides access to the slider.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua line 565](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua#L565) |

---


### [highlightsWarmthTextField](#highlightswarmthtextfield)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorAdjustments.highlightsWarmthTextField <cp.ui.TextField>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `TextField` that provides access to the slider.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua line 577](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua#L577) |

---


### [midtonesTintRow](#midtonestintrow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorAdjustments.midtonesTintRow <cp.ui.PropertyRow>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `PropertyRow` that provides access to the parameter, and `axuielement` values for that row.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua line 687](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua#L687) |

---


### [midtonesTintSlider](#midtonestintslider)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorAdjustments.midtonesTintSlider <cp.ui.Slider>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `Slider` that provides access to the slider.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua line 694](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua#L694) |

---


### [midtonesTintTextField](#midtonestinttextfield)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorAdjustments.midtonesTintTextField <cp.ui.TextField>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `TextField` that provides access to the slider.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua line 706](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua#L706) |

---


### [midtonesWarmthRow](#midtoneswarmthrow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorAdjustments.midtonesWarmthRow <cp.ui.PropertyRow>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `PropertyRow` that provides access to the parameter, and `axuielement` values for that row.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua line 644](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua#L644) |

---


### [midtonesWarmthSlider](#midtoneswarmthslider)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorAdjustments.midtonesWarmthSlider <cp.ui.Slider>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `Slider` that provides access to the slider.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua line 651](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua#L651) |

---


### [midtonesWarmthTextField](#midtoneswarmthtextfield)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorAdjustments.midtonesWarmthTextField <cp.ui.TextField>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `TextField` that provides access to the slider.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua line 663](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua#L663) |

---


### [mixRow](#mixrow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorAdjustments.mixRow <cp.ui.PropertyRow>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `PropertyRow` that provides access to the parameter, and `axuielement` values for that row.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua line 816](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua#L816) |

---


### [mixSlider](#mixslider)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorAdjustments.mixSlider <cp.ui.Slider>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `Slider` that provides access to the slider.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua line 823](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua#L823) |

---


### [mixTextField](#mixtextfield)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorAdjustments.mixTextField <cp.ui.TextField>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `TextField` that provides access to the slider.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua line 835](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua#L835) |

---


### [saturationRow](#saturationrow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorAdjustments.saturationRow <cp.ui.PropertyRow>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `PropertyRow` that provides access to the parameter, and `axuielement` values for that row.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua line 386](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua#L386) |

---


### [saturationSlider](#saturationslider)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorAdjustments.saturationSlider <cp.ui.Slider>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `Slider` that provides access to the slider.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua line 393](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua#L393) |

---


### [saturationTextField](#saturationtextfield)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorAdjustments.saturationTextField <cp.ui.TextField>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `TextField` that provides access to the slider.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua line 405](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua#L405) |

---


### [shadowsRow](#shadowsrow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorAdjustments.shadowsRow <cp.ui.PropertyRow>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `PropertyRow` that provides access to the parameter, and `axuielement` values for that row.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua line 515](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua#L515) |

---


### [shadowsSlider](#shadowsslider)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorAdjustments.shadowsSlider <cp.ui.Slider>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `Slider` that provides access to the slider.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua line 522](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua#L522) |

---


### [shadowsTextField](#shadowstextfield)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorAdjustments.shadowsTextField <cp.ui.TextField>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `TextField` that provides access to the slider.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua line 534](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua#L534) |

---


### [shadowsTintRow](#shadowstintrow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorAdjustments.shadowsTintRow <cp.ui.PropertyRow>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `PropertyRow` that provides access to the parameter, and `axuielement` values for that row.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua line 773](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua#L773) |

---


### [shadowsTintSlider](#shadowstintslider)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorAdjustments.shadowsTintSlider <cp.ui.Slider>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `Slider` that provides access to the slider.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua line 780](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua#L780) |

---


### [shadowsTintTextField](#shadowstinttextfield)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorAdjustments.shadowsTintTextField <cp.ui.TextField>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `TextField` that provides access to the slider.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua line 792](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua#L792) |

---


### [shadowsWarmthRow](#shadowswarmthrow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorAdjustments.shadowsWarmthRow <cp.ui.PropertyRow>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `PropertyRow` that provides access to the parameter, and `axuielement` values for that row.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua line 730](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua#L730) |

---


### [shadowsWarmthSlider](#shadowswarmthslider)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorAdjustments.shadowsWarmthSlider <cp.ui.Slider>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `Slider` that provides access to the slider.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua line 737](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua#L737) |

---


### [shadowsWarmthTextField](#shadowswarmthtextfield)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorAdjustments.shadowsWarmthTextField <cp.ui.TextField>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `TextField` that provides access to the slider.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua line 749](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua#L749) |

---

#### Methods


### [controlRange](#controlrange)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorAdjustments.controlRange(id) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the Control Range Menu Item.                                                                     |
| **Parameters**                              | <ul><li>id - A string containing the control range value (in English)</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful, otherwise `false`</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua line 184](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua#L184) |

---


### [controlRangeLabel](#controlrangelabel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorAdjustments.controlRangeLabel(id) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the Control Range i18n Value.                                                                     |
| **Parameters**                              | <ul><li>id - A string containing the control range value (in English)</li></ul> |
| **Returns**                                 | <ul><li>A string</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua line 220](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua#L220) |

---


### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorAdjustments:show() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Show's the Color Board within the Color Inspector.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>ColorAdjustments object</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua line 99](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorAdjustments.lua#L99) |

---

