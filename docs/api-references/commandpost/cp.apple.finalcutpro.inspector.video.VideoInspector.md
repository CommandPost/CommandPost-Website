# cp.apple.finalcutpro.inspector.video.VideoInspector

Video Inspector Module.

Section Rows (`compositing`, `transform`, etc.) have the following properties:
 * enabled   - (cp.ui.CheckBox) Indicates if the section is enabled.
 * toggle    - (cp.ui.Button) Will toggle the Hide/Show button.
 * reset     - (cp.ui.Button) Will reset the contents of the section.
 * expanded  - (cp.prop <boolean>) Get/sets whether the section is expanded.

Property Rows depend on the type of property:

Menu Property:
 * value     - (cp.ui.PopUpButton) The current value of the property.

Slider Property:
 * value     - (cp.ui.Slider) The current value of the property.

XY Property:
 * x         - (cp.ui.TextField) The current 'X' value.
 * y         - (cp.ui.TextField) The current 'Y' value.

CheckBox Property:
 * value     - (cp.ui.CheckBox) The currently value.

For example:
```lua
local video = fcp.inspector.video
-- Menu Property:
video:compositing():blendMode():value("Subtract")
-- Slider Property:
video:compositing():opacity():value(50.0)
-- XY Property:
video:transform():position():x(-10.0)
-- CheckBox property:
video:stabilization():tripodMode():value(true)
```

You should also be able to show a specific property and it will be revealed:
```lua
video:stabilization():smoothing():show():value(1.5)
```

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [BLEND_MODES](#blend_modes)
 * [CROP_TYPES](#crop_types)
 * [ROLLING_SHUTTER_AMOUNTS](#rolling_shutter_amounts)
 * [SPATIAL_CONFORM_TYPES](#spatial_conform_types)
 * [STABILIZATION_METHODS](#stabilization_methods)

**Functions** - _API calls offered directly by the extension_
 * [matches](#matches)
 * [selectedEffectCheckBox](#selectedeffectcheckbox)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [VideoInspector](#videoinspector)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [contentUI](#contentui)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [effectCheckBoxes](#effectcheckboxes)


---

## API Documentation

#### Constants


### [BLEND_MODES](#blend_modes)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.video.VideoInspector.BLEND_MODES -> table`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Blend Modes                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/video/VideoInspector.lua line 276](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/video/VideoInspector.lua#L276){target="_blank"} |

---


### [CROP_TYPES](#crop_types)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.video.VideoInspector.CROP_TYPES -> table`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Crop Types                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/video/VideoInspector.lua line 315](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/video/VideoInspector.lua#L315){target="_blank"} |

---


### [ROLLING_SHUTTER_AMOUNTS](#rolling_shutter_amounts)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.video.VideoInspector.ROLLING_SHUTTER_AMOUNTS -> table`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Rolling Shutter Amounts                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/video/VideoInspector.lua line 333](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/video/VideoInspector.lua#L333){target="_blank"} |

---


### [SPATIAL_CONFORM_TYPES](#spatial_conform_types)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.video.VideoInspector.SPATIAL_CONFORM_TYPES -> table`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Spatial Conform Types                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/video/VideoInspector.lua line 344](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/video/VideoInspector.lua#L344){target="_blank"} |

---


### [STABILIZATION_METHODS](#stabilization_methods)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.video.VideoInspector.STABILIZATION_METHODS -> table`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Stabilisation Methods                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/video/VideoInspector.lua line 324](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/video/VideoInspector.lua#L324){target="_blank"} |

---

#### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.video.VideoInspector.matches(element)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the provided element could be a VideoInspector.                                                                     |
| **Parameters**                              | <ul><li>element   - The element to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if it matches, `false` if not.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/video/VideoInspector.lua line 77](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/video/VideoInspector.lua#L77){target="_blank"} |

---


### [selectedEffectCheckBox](#selectedeffectcheckbox)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.video.VideoInspector:selectedEffectCheckBox() -> axuielement`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the selected effect checkbox object.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A axuielement object.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/video/VideoInspector.lua line 245](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/video/VideoInspector.lua#L245){target="_blank"} |

---

#### Constructors


### [VideoInspector](#videoinspector)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.video.VideoInspector(parent) -> cp.apple.finalcutpro.inspector.video.VideoInspector`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `VideoInspector` object                                                                     |
| **Parameters**                              | <ul><li>`parent`		- The parent</li></ul> |
| **Returns**                                 | <ul><li>A `VideoInspector` object</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/video/VideoInspector.lua line 93](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/video/VideoInspector.lua#L93){target="_blank"} |

---

#### Fields


### [contentUI](#contentui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.video.VideoInspector.contentUI <cp.prop: hs.axuielement; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `axuielement` containing the properties rows, if available.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/video/VideoInspector.lua line 192](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/video/VideoInspector.lua#L192){target="_blank"} |

---

#### Methods


### [effectCheckBoxes](#effectcheckboxes)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.video.VideoInspector:effectCheckBoxes() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets a table containing all of the effect checkboxes.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/video/VideoInspector.lua line 203](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/video/VideoInspector.lua#L203){target="_blank"} |

---
