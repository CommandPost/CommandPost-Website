# cp.apple.finalcutpro.inspector.audio.AudioInspector

Audio Inspector Module.

Header Rows (`compositing`, `transform`, etc.) have the following properties:
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
local audio = fcp.inspector.audio
-- Menu Property:
audio:compositing():blendMode():value("Subtract")
-- Slider Property:
audio:compositing():opacity():value(50.0)
-- XY Property:
audio:transform():position():x(-10.0)
-- CheckBox property:
audio:stabilization():tripodMode():value(true)
```

You should also be able to show a specific property and it will be revealed:
```lua
audio:stabilization():smoothing():show():value(1.5)
```

## API Overview
### **Constants** - _Useful values which cannot be changed_
 * [EQ_MODES](#eq_modes)
 * [PAN_MODES](#pan_modes)

### **Functions** - _API calls offered directly by the extension_
 * [matches](#matches)

### **Constructors** - _API calls which return an object, typically one that offers API methods_
 * [AudioInspector](#audioinspector)

### **Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [audioConfiguration](#audioconfiguration)


## API Documentation

### Constants


### [EQ_MODES](#eq_modes)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.audio.AudioInspector.EQ_MODES -> table`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | EQ Modes                                                                     |

---

### [PAN_MODES](#pan_modes)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.audio.AudioInspector.PAN_MODES -> table`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Pan Modes                                                                     |

---
### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.audio.AudioInspector.matches(element)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the provided element could be a AudioInspector.                                                                     |
| **Parameters**                              | <ul><li>element   - The element to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if it matches, `false` if not.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Constructors


### [AudioInspector](#audioinspector)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.audio.AudioInspector(parent) -> cp.apple.finalcutpro.audio.AudioInspector`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `AudioInspector` object                                                                     |
| **Parameters**                              | <ul><li>`parent`     - The parent</li></ul> |
| **Returns**                                 | <ul><li>A `AudioInspector` object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Fields


### [audioConfiguration](#audioconfiguration)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.audio.AudioInspector.audioConfiguration <AudioConfiguration>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `AudioConfiguration` instance.                                                                     |

---
