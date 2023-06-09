# plugins.core.controlsurfaces.resolve.manager

Blackmagic DaVinci Resolve Control Surface Support.

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [DEFAULT_JOG_MODE](#default_jog_mode)
 * [DEFAULT_SENSITIVITY](#default_sensitivity)
 * [LONG_PRESS_DURATION](#long_press_duration)

**Variables** - _Configurable values_
 * [defaultLayout](#defaultlayout)
 * [repeatTimers](#repeattimers)

**Functions** - _API calls offered directly by the extension_
 * [batteryStatus](#batterystatus)
 * [buttonCallback](#buttoncallback)
 * [discoveryCallback](#discoverycallback)
 * [start](#start)
 * [update](#update)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [activeBanks](#activebanks)
 * [automaticallySwitchApplications](#automaticallyswitchapplications)
 * [enabled](#enabled)
 * [items](#items)
 * [lastApplication](#lastapplication)
 * [lastBundleID](#lastbundleid)


---

## API Documentation

#### Constants


### [DEFAULT_JOG_MODE](#default_jog_mode)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.resolve.manager.DEFAULT_JOG_MODE -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The default Jog Wheel Mode.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/plugins/core/controlsurfaces/resolve/manager/init.lua line 101](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/controlsurfaces/resolve/manager/init.lua#L101) |

---


### [DEFAULT_SENSITIVITY](#default_sensitivity)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.resolve.manager.DEFAULT_SENSITIVITY -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The default sensitivity used for Blackmagic Resolve Control Surfaces.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/plugins/core/controlsurfaces/resolve/manager/init.lua line 96](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/controlsurfaces/resolve/manager/init.lua#L96) |

---


### [LONG_PRESS_DURATION](#long_press_duration)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.resolve.manager.LONG_PRESS_DURATION -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | How long a button needs to be pressed before it's considered a long press (in seconds).                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/plugins/core/controlsurfaces/resolve/manager/init.lua line 91](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/controlsurfaces/resolve/manager/init.lua#L91) |

---

#### Variables


### [defaultLayout](#defaultlayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.resolve.manager.defaultLayout -> table`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Default Layout                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/plugins/core/controlsurfaces/resolve/manager/init.lua line 146](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/controlsurfaces/resolve/manager/init.lua#L146) |

---


### [repeatTimers](#repeattimers)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.resolve.manager.repeatTimers -> table`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | A table containing `hs.timer` objects.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/plugins/core/controlsurfaces/resolve/manager/init.lua line 116](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/controlsurfaces/resolve/manager/init.lua#L116) |

---

#### Functions


### [batteryStatus](#batterystatus)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.resolve.manager.batteryStatus(deviceType, deviceID) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the Battery Status for a specific device                                                                     |
| **Parameters**                              | <ul><li>deviceType - A string, either "Speed Editor" or "Editor Keyboard"</li><li>deviceID - A string with the device ID</li></ul> |
| **Returns**                                 | <ul><li>charging - A boolean</li><li>level - The battery level as a number</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/controlsurfaces/resolve/manager/init.lua line 247](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/controlsurfaces/resolve/manager/init.lua#L247) |

---


### [buttonCallback](#buttoncallback)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.resolve.manager.buttonCallback(object, buttonID, pressed) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Control Surface Button Callback                                                                     |
| **Parameters**                              | <ul><li>object - The `hs.resolve` userdata object</li><li>buttonID - A number containing the button that was pressed/released</li><li>pressed - A boolean indicating whether the button was pressed (`true`) or released (`false`)</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/controlsurfaces/resolve/manager/init.lua line 318](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/controlsurfaces/resolve/manager/init.lua#L318) |

---


### [discoveryCallback](#discoverycallback)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.resolve.manager.discoveryCallback(connected, object) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Control Surface Discovery Callback                                                                     |
| **Parameters**                              | <ul><li>connected - A boolean, `true` if a device was connected, `false` if a device was disconnected</li><li>object - An `hs.speededitor` object, being the device that was connected/disconnected</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/controlsurfaces/resolve/manager/init.lua line 962](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/controlsurfaces/resolve/manager/init.lua#L962) |

---


### [start](#start)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.resolve.manager.start() -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Stops DaVinci Resolve Control Surface Support.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/controlsurfaces/resolve/manager/init.lua line 1085](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/controlsurfaces/resolve/manager/init.lua#L1085) |

---


### [update](#update)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.resolve.manager.update() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Updates all the control surface LEDs.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/controlsurfaces/resolve/manager/init.lua line 780](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/controlsurfaces/resolve/manager/init.lua#L780) |

---

#### Fields


### [activeBanks](#activebanks)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.resolve.manager.activeBanks <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Table of active banks for each application.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/plugins/core/controlsurfaces/resolve/manager/init.lua line 164](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/controlsurfaces/resolve/manager/init.lua#L164) |

---


### [automaticallySwitchApplications](#automaticallyswitchapplications)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.resolve.manager.automaticallySwitchApplications <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Enable or disable the automatic switching of applications.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/plugins/core/controlsurfaces/resolve/manager/init.lua line 131](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/controlsurfaces/resolve/manager/init.lua#L131) |

---


### [enabled](#enabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.resolve.manager.enabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Enable or disable DaVinci Resolve Control Surface support                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/plugins/core/controlsurfaces/resolve/manager/init.lua line 1163](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/controlsurfaces/resolve/manager/init.lua#L1163) |

---


### [items](#items)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.resolve.manager.items <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A table containing the control surface layout.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/plugins/core/controlsurfaces/resolve/manager/init.lua line 151](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/controlsurfaces/resolve/manager/init.lua#L151) |

---


### [lastApplication](#lastapplication)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.resolve.manager.lastApplication <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Last Bank used in the Preferences Panel.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/plugins/core/controlsurfaces/resolve/manager/init.lua line 111](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/controlsurfaces/resolve/manager/init.lua#L111) |

---


### [lastBundleID](#lastbundleid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.resolve.manager.lastBundleID <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The last Bundle ID.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/plugins/core/controlsurfaces/resolve/manager/init.lua line 136](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/controlsurfaces/resolve/manager/init.lua#L136) |

---

