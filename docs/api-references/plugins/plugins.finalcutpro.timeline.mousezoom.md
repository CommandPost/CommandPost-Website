# plugins.finalcutpro.timeline.mousezoom

Allows you to zoom in or out of a Final Cut Pro timeline using the mechanical scroll wheel on your mouse or the Touch Pad on the Magic Mouse when holding down the OPTION modifier key.

Special Thanks: Iain Anderson (@funwithstuff) for all his incredible testing!

---

## API Overview
**Variables** - _Configurable values_
 * [customModifier](#custommodifier)
 * [enabled](#enabled)
 * [numberOfTouchDevices](#numberoftouchdevices)
 * [offset](#offset)
 * [sensitivity](#sensitivity)
 * [threshold](#threshold)

**Functions** - _API calls offered directly by the extension_
 * [findMagicMouses](#findmagicmouses)
 * [start](#start)
 * [stop](#stop)
 * [update](#update)


---

## API Documentation

#### Variables


### [customModifier](#custommodifier)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.timeline.mousezoom.customModifier <cp.prop: boolean>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Should Mouse Zoom be inverted?                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/plugins/finalcutpro/timeline/mousezoom.lua line 83](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/timeline/mousezoom.lua#L83) |

---


### [enabled](#enabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.timeline.mousezoom.enabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Toggles the Enable Proxy Menu Icon                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/plugins/finalcutpro/timeline/mousezoom.lua line 73](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/timeline/mousezoom.lua#L73) |

---


### [numberOfTouchDevices](#numberoftouchdevices)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.timeline.mousezoom.numberOfTouchDevices -> number`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Number of Touch Devices Detected.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/plugins/finalcutpro/timeline/mousezoom.lua line 41](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/timeline/mousezoom.lua#L41) |

---


### [offset](#offset)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.timeline.mousezoom.offset -> number`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Offset Value used in difference calculations.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/plugins/finalcutpro/timeline/mousezoom.lua line 46](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/timeline/mousezoom.lua#L46) |

---


### [sensitivity](#sensitivity)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.timeline.mousezoom.sensitivity <cp.prop: string>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Sensitivity Level                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/plugins/finalcutpro/timeline/mousezoom.lua line 88](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/timeline/mousezoom.lua#L88) |

---


### [threshold](#threshold)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.timeline.mousezoom.threshold -> number`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Threshold Value used in difference calculations.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/plugins/finalcutpro/timeline/mousezoom.lua line 51](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/timeline/mousezoom.lua#L51) |

---

#### Functions


### [findMagicMouses](#findmagicmouses)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.timeline.mousezoom.findMagicMouses() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Find Magic Mouse Devices and adds them to a table.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/finalcutpro/timeline/mousezoom.lua line 226](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/timeline/mousezoom.lua#L226) |

---


### [start](#start)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.timeline.mousezoom.start() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Enables the ability to zoon a timeline using your mouse scroll wheel and the OPTION modifier key.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/finalcutpro/timeline/mousezoom.lua line 454](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/timeline/mousezoom.lua#L454) |

---


### [stop](#stop)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.timeline.mousezoom.stop() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Disables the ability to zoom a timeline using your mouse scroll wheel and the OPTION modifier key.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/finalcutpro/timeline/mousezoom.lua line 163](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/timeline/mousezoom.lua#L163) |

---


### [update](#update)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.timeline.mousezoom.update() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see whether or not we should enable the timeline zoom watchers.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/finalcutpro/timeline/mousezoom.lua line 56](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/timeline/mousezoom.lua#L56) |

---

