# cp.apple.finalcutpro.timeline.Toolbar

Timeline Toolbar

## Submodules
 * [cp.apple.finalcutpro.timeline.Toolbar.Browser](cp.apple.finalcutpro.timeline.Toolbar.Browser.md)
 * [cp.apple.finalcutpro.timeline.Toolbar.Clip](cp.apple.finalcutpro.timeline.Toolbar.Clip.md)

## API Overview
* Functions - API calls offered directly by the extension
 * [matches](#matches)
* Constructors - API calls which return an object, typically one that offers API methods
 * [Toolbar](#Toolbar)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [appearance](#appearance)
 * [appearanceToggle](#appearanceToggle)
 * [appendClip](#appendClip)
 * [audioSkimming](#audioSkimming)
 * [back](#back)
 * [browser](#browser)
 * [clip](#clip)
 * [clipMedia](#clipMedia)
 * [duration](#duration)
 * [effects](#effects)
 * [forward](#forward)
 * [index](#index)
 * [insertClip](#insertClip)
 * [overwriteClip](#overwriteClip)
 * [skimming](#skimming)
 * [snapping](#snapping)
 * [solo](#solo)
 * [title](#title)
 * [tool](#tool)
 * [transitions](#transitions)
 * [trimAlignedEdges](#trimAlignedEdges)

## API Documentation

### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Toolbar.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the element is a Toolbar.                                                                     |
| **Parameters**                              | <ul><li>element - the `axuielement` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if it matches, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Constructors


### [Toolbar](#Toolbar)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Toolbar(timeline) -> cp.apple.finalcutpro.timeline.Toolbar`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new Toolbar with the specified parent.                                                                     |
| **Parameters**                              | <ul><li>timeline - The [Timeline](cp.apple.finalcutpro.timeline.Timeline.md).</li></ul> |
| **Returns**                                 | <ul><li>The new Toolbar instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Fields


### [appearance](#appearance)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Toolbar.appearance <cp.apple.finalcutpro.timeline.Appearance>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [Appearance](cp.apple.finalcutpro.timeline.Appearance.md) button/palette control.                                                                     |

---

### [appearanceToggle](#appearanceToggle)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Toolbar.appearanceToggle <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `CheckBox` field which will toggle the `appearance` popover.                                                                     |

---

### [appendClip](#appendClip)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Toolbar.appendClip <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [Button](cp.ui.Button.md) which appends a clip from the Browser into the Timeline.                                                                     |

---

### [audioSkimming](#audioSkimming)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Toolbar.audioSkimming <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [CheckBox](cp.ui.CheckBox.md) that indicates if audio is played while skimming.                                                                     |

---

### [back](#back)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Toolbar.back <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [Button](cp.ui.Button.md) for "go back in timeline history".                                                                     |

---

### [browser](#browser)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Toolbar.browser <cp.apple.finalcutpro.timeline.Toolbar.Browser>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [Toolbar.Browser](cp.apple.finalcutpro.timeline.Toolbar.Browser.md) containing buttons that will toggle the Effects/Transitions browsers.                                                                     |

---

### [clip](#clip)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Toolbar.clip <cp.apple.finalcutpro.timeline.Toolbar.Clip>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [Clip](cp.apple.finalcutpro.timeline.Toolbar.Clip.md) group of checkbox items.                                                                     |

---

### [clipMedia](#clipMedia)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Toolbar.clipMedia <cp.ui.MenuButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [MenuButton](cp.ui.MenuButton.md) which allows the user to select the media type that will                                                                     |

---

### [duration](#duration)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Toolbar.duration <cp.ui.StaticText>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [StaticText](cp.ui.StaticText.md) which displays the duration of the Timeline.                                                                     |

---

### [effects](#effects)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Toolbar.effects <cp.ui.RadioButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [RadioButton](cp.ui.RadioButton.md) which toggles the 'Effects' browser visibility.                                                                     |

---

### [forward](#forward)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Toolbar.forward <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [Button](cp.ui.Button.md) for "go forward in timeline history".                                                                     |

---

### [index](#index)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Toolbar.index <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [CheckBox](cp.ui.CheckBox.md) which indicates if the Timeline Index is visible.                                                                     |

---

### [insertClip](#insertClip)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Toolbar.insertClip <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [Button](cp.ui.Button.md) which inserts a clip from the Browser into the Timeline.                                                                     |

---

### [overwriteClip](#overwriteClip)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Toolbar.overwriteClip <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [Button](cp.ui.Button.md) which overwrites a clip from the Browser into the Timeline.                                                                     |

---

### [skimming](#skimming)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Toolbar.skimming <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [CheckBox](cp.ui.CheckBox.md) that indicates if video/audio skimming is active.                                                                     |

---

### [snapping](#snapping)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Toolbar.snapping <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [CheckBox](cp.ui.CheckBox.md) that indicates if snapping is enabled.                                                                     |

---

### [solo](#solo)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Toolbar.solo <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [CheckBox](cp.ui.CheckBox.md) that indicates if audio is soloed on the selected clip(s).                                                                     |

---

### [title](#title)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Toolbar.title <cp.ui.MenuButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [MenuButton](cp.ui.MenuButton.md) which lists the current project and allows                                                                     |

---

### [tool](#tool)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Toolbar.tool <cp.apple.finalcutpro.timeline.ToolPalette>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [ToolPalette](cp.apple.finalcutpro.timeline.ToolPalette.md), which allows the user to select the tool                                                                     |

---

### [transitions](#transitions)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Toolbar.transitions <cp.ui.RadioButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [RadioButton](cp.ui.RadioButton.md) which toggles the 'Transitions' browser visibility.                                                                     |

---

### [trimAlignedEdges](#trimAlignedEdges)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Toolbar.trimAlignedEdges <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [CheckBox](cp.ui.CheckBox.md) which allows the user to trim the edges of the selected clips.                                                                     |
| **Notes**                                   | <ul><li>As of FCP 10.6.3, this is currently always hidden, and cannot have its value changed.</li><li>Uncertain in exactly which version this turned up.</li></ul>                |

---
