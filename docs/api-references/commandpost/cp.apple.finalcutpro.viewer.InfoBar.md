# cp.apple.finalcutpro.viewer.InfoBar

Represents the bar of information about the [Viewer](cp.apple.finalcutpro.viewer.Viewer.md) (format, title, viewing options).

See also [ControlBar](cp.apple.finalcutpro.viewer.ControlBar.md).

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [matches](#matches)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [InfoBar](#infobar)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [format](#format)
 * [formatField](#formatfield)
 * [framerate](#framerate)
 * [title](#title)
 * [titleField](#titlefield)
 * [viewMenu](#viewmenu)
 * [zoomwMenu](#zoomwmenu)


---

## API Documentation

#### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.InfoBar.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the element is an `InfoBar` instance.                                                                     |
| **Parameters**                              | <ul><li>element       - The `axuielement` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if it matches the pattern for a `Viewer` `InfoBar`.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---

#### Constructors


### [InfoBar](#infobar)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.InfoBar(viewer)`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `InfoBar` instance.                                                                     |
| **Parameters**                              | <ul><li>viewer       - The [Viewer](cp.apple.finalcutpro.viewer.Viewer.md) instance.</li></ul> |
| **Returns**                                 | <ul><li>The new `InfoBar`.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---

#### Fields


### [format](#format)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.InfoBar.format <cp.prop: number; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Provides the full format text value, or `nil` if not available.                                                                     |
| **Notes**                                   | - None |

---


### [formatField](#formatfield)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.InfoBar.formatField <cp.ui.StaticText>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Field" value for the current clip, as a [StaticText](cp.ui.StaticText.md)                                                                     |
| **Notes**                                   | - None |

---


### [framerate](#framerate)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.InfoBar.framerate <cp.prop: number; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Provides the framerate as a number, or `nil` if not available.                                                                     |
| **Notes**                                   | - None |

---


### [title](#title)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.InfoBar.title <cp.prop: string; read-only; live?>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Provides the Title of the clip in the Viewer as a [StaticText](cp.ui.StaticText.md).                                                                     |
| **Notes**                                   | - None |

---


### [titleField](#titlefield)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.InfoBar.titleField <cp.ui.StaticText>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Provides the Title of the clip in the Viewer as a [StaticText](cp.ui.StaticText.md).                                                                     |
| **Notes**                                   | - None |

---


### [viewMenu](#viewmenu)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.InfoBar:viewMenu <cp.ui.MenuButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [MenuButton](cp.ui.MenuButton.md) for the "View" menu.                                                                     |
| **Notes**                                   | - None |

---


### [zoomwMenu](#zoomwmenu)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.InfoBar:zoomwMenu <cp.ui.MenuButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [MenuButton](cp.ui.MenuButton.md) for the "Zoom Level" menu.                                                                     |
| **Notes**                                   | - None |

---

