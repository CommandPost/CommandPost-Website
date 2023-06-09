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

---


### [DEFAULT_SENSITIVITY](#default_sensitivity)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.resolve.manager.DEFAULT_SENSITIVITY -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The default sensitivity used for Blackmagic Resolve Control Surfaces.                                                                     |
| **Notes**                                   | - None |

---


### [LONG_PRESS_DURATION](#long_press_duration)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.resolve.manager.LONG_PRESS_DURATION -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | How long a button needs to be pressed before it's considered a long press (in seconds).                                                                     |
| **Notes**                                   | - None |

---

#### Variables


### [defaultLayout](#defaultlayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.resolve.manager.defaultLayout -> table`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Default Layout                                                                     |
| **Notes**                                   | - None |

---


### [repeatTimers](#repeattimers)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.resolve.manager.repeatTimers -> table`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | A table containing `hs.timer` objects.                                                                     |
| **Notes**                                   | - None |

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

---

#### Fields


### [activeBanks](#activebanks)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.resolve.manager.activeBanks <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Table of active banks for each application.                                                                     |
| **Notes**                                   | - None |

---


### [automaticallySwitchApplications](#automaticallyswitchapplications)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.resolve.manager.automaticallySwitchApplications <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Enable or disable the automatic switching of applications.                                                                     |
| **Notes**                                   | - None |

---


### [enabled](#enabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.resolve.manager.enabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Enable or disable DaVinci Resolve Control Surface support                                                                     |
| **Notes**                                   | - None |

---


### [items](#items)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.resolve.manager.items <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A table containing the control surface layout.                                                                     |
| **Notes**                                   | - None |

---


### [lastApplication](#lastapplication)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.resolve.manager.lastApplication <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Last Bank used in the Preferences Panel.                                                                     |
| **Notes**                                   | - None |

---


### [lastBundleID](#lastbundleid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.resolve.manager.lastBundleID <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The last Bundle ID.                                                                     |
| **Notes**                                   | - None |

---

