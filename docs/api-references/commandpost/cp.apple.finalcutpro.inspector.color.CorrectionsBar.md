# cp.apple.finalcutpro.inspector.color.CorrectionsBar

The Correction selection/management bar at the top of the ColorInspector

Requires Final Cut Pro 10.4 or later.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [CorrectionsBar](#correctionsbar)
 * [matches](#matches)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [correction](#correction)
 * [menuButton](#menubutton)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [activate](#activate)
 * [add](#add)
 * [doActivate](#doactivate)
 * [doShow](#doshow)
 * [findCorrectionLabel](#findcorrectionlabel)
 * [show](#show)


---

## API Documentation

#### Functions


### [CorrectionsBar](#correctionsbar)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.CorrectionsBar(parent) -> CorrectionsBar`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a new Media Import object.                                                                     |
| **Parameters**                              | <ul><li>parent - The parent object.</li></ul> |
| **Returns**                                 | <ul><li>A new CorrectionsBar object.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/CorrectionsBar.lua line 65](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/CorrectionsBar.lua#L65){target="_blank"} |

---


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.CorrectionsBar.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if an element matches what we think it should be.                                                                     |
| **Parameters**                              | <ul><li>element - An `axuielementObject` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if matches otherwise `false`</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/CorrectionsBar.lua line 42](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/CorrectionsBar.lua#L42){target="_blank"} |

---

#### Fields


### [correction](#correction)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.CorrectionsBar.correction <cp.ui.MenuButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `MenuButton` that lists the current correction.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/CorrectionsBar.lua line 93](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/CorrectionsBar.lua#L93){target="_blank"} |

---


### [menuButton](#menubutton)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.CorrectionsBar.menuButton <MenuButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The menu button.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/CorrectionsBar.lua line 130](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/CorrectionsBar.lua#L130){target="_blank"} |

---

#### Methods


### [activate](#activate)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.CorrectionsBar:activate(correctionType, number) -> cp.apple.finalcutpro.inspector.color.CorrectionsBar`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Activates a correction type.                                                                     |
| **Parameters**                              | <ul><li>`correctionType` - The correction type as string.</li><li>`number` - The number of the correction.</li></ul> |
| **Returns**                                 | <ul><li> `cp.apple.finalcutpro.inspector.color.CorrectionsBar` object.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/CorrectionsBar.lua line 157](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/CorrectionsBar.lua#L157){target="_blank"} |

---


### [add](#add)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.CorrectionsBar:add(correctionType) -> cp.apple.finalcutpro.inspector.color.CorrectionsBar`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds the specific correction type.                                                                     |
| **Parameters**                              | <ul><li>`correctionType` - The correction type as string.</li></ul> |
| **Returns**                                 | <ul><li> `cp.apple.finalcutpro.inspector.color.CorrectionsBar` object.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/CorrectionsBar.lua line 236](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/CorrectionsBar.lua#L236){target="_blank"} |

---


### [doActivate](#doactivate)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.CorrectionsBar:doActivate(correctionType, number) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A Statement that activates a correction type.                                                                     |
| **Parameters**                              | <ul><li>`correctionType` - The correction type as string.</li><li>`number` - The number of the correction.</li></ul> |
| **Returns**                                 | <ul><li> The `Statement`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/CorrectionsBar.lua line 207](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/CorrectionsBar.lua#L207){target="_blank"} |

---


### [doShow](#doshow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.CorrectionsBar:doShow() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A Statement that will attempt to show the bar.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`, which will resolve to `true` if successful, or send an `error` if not.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/CorrectionsBar.lua line 117](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/CorrectionsBar.lua#L117){target="_blank"} |

---


### [findCorrectionLabel](#findcorrectionlabel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.CorrectionsBar:findCorrectionLabel(correctionType) -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns Correction Label.                                                                     |
| **Parameters**                              | <ul><li>correctionType - The correction type as string.</li></ul> |
| **Returns**                                 | <ul><li>The correction label as string.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/CorrectionsBar.lua line 139](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/CorrectionsBar.lua#L139){target="_blank"} |

---


### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.CorrectionsBar:show() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Attempts to show the bar.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `CorrectionsBar` instance.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/CorrectionsBar.lua line 102](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/CorrectionsBar.lua#L102){target="_blank"} |

---

