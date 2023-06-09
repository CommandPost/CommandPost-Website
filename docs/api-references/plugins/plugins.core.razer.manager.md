# plugins.core.razer.manager

Razer Manager Plugin.

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [bankLabels](#banklabels)
 * [supportedDevices](#supporteddevices)

**Variables** - _Configurable values_
 * [defaultLayout](#defaultlayout)
 * [manager](#manager)

**Functions** - _API calls offered directly by the extension_
 * [refresh](#refresh)
 * [reset](#reset)
 * [resetTimers](#resettimers)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [activeBanks](#activebanks)
 * [automaticallySwitchApplications](#automaticallyswitchapplications)
 * [backlightBrightness](#backlightbrightness)
 * [backlightEffectColorA](#backlighteffectcolora)
 * [backlightEffectColorB](#backlighteffectcolorb)
 * [backlightEffectDirection](#backlighteffectdirection)
 * [backlightEffectSpeed](#backlighteffectspeed)
 * [backlightsMode](#backlightsmode)
 * [delayUntilRepeat](#delayuntilrepeat)
 * [displayMessageWhenChangingBanks](#displaymessagewhenchangingbanks)
 * [enabled](#enabled)
 * [items](#items)
 * [keyRepeat](#keyrepeat)
 * [lastBundleID](#lastbundleid)


---

## API Documentation

#### Constants


### [bankLabels](#banklabels)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.razer.manager.bankLabels -> table`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Table of bank labels, which reflect the LED icons.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/razer/manager/init.lua line 74](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/razer/manager/init.lua#L74) |

---


### [supportedDevices](#supporteddevices)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.razer.manager.supportedDevices -> table`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Table supported devices.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/razer/manager/init.lua line 61](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/razer/manager/init.lua#L61) |

---

#### Variables


### [defaultLayout](#defaultlayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.razer.manager.defaultLayout -> table`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Default Loupedeck CT Layout                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/razer/manager/init.lua line 403](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/razer/manager/init.lua#L403) |

---


### [manager](#manager)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.razer.manager -> table`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | A table of Razer devices.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/razer/manager/init.lua line 463](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/razer/manager/init.lua#L463) |

---

#### Functions


### [refresh](#refresh)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.razer.manager.refresh(trashCache) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Refreshes the LEDs on a Razer device.                                                                     |
| **Parameters**                              | <ul><li>trashCache - an optional boolean to trash the LED cache</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/razer/manager/init.lua line 723](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/razer/manager/init.lua#L723) |

---


### [reset](#reset)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.razer.manager.reset()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Resets the config back to the default layout.                                                                     |
| **Parameters**                              | <ul><li>completelyEmpty - A boolean</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/razer/manager/init.lua line 1369](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/razer/manager/init.lua#L1369) |

---


### [resetTimers](#resettimers)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.razer.manager.resetTimers() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Resets all the various timers and memories.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/razer/manager/init.lua line 1258](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/razer/manager/init.lua#L1258) |

---

#### Fields


### [activeBanks](#activebanks)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.razer.manager.activeBanks <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Table of active banks for each application.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/razer/manager/init.lua line 428](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/razer/manager/init.lua#L428) |

---


### [automaticallySwitchApplications](#automaticallyswitchapplications)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.razer.manager.automaticallySwitchApplications <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Enable or disable the automatic switching of applications.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/razer/manager/init.lua line 413](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/razer/manager/init.lua#L413) |

---


### [backlightBrightness](#backlightbrightness)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.razer.manager.backlightBrightness <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The backlights brightness for all the Razer devices.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/razer/manager/init.lua line 438](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/razer/manager/init.lua#L438) |

---


### [backlightEffectColorA](#backlighteffectcolora)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.razer.manager.backlightEffectColorA <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The backlight effect primary color.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/razer/manager/init.lua line 443](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/razer/manager/init.lua#L443) |

---


### [backlightEffectColorB](#backlighteffectcolorb)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.razer.manager.backlightEffectColorB <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The backlight effect secondary color.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/razer/manager/init.lua line 448](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/razer/manager/init.lua#L448) |

---


### [backlightEffectDirection](#backlighteffectdirection)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.razer.manager.backlightEffectDirection <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The backlight effect direction.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/razer/manager/init.lua line 453](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/razer/manager/init.lua#L453) |

---


### [backlightEffectSpeed](#backlighteffectspeed)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.razer.manager.backlightEffectSpeed <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The backlight effect speed.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/razer/manager/init.lua line 458](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/razer/manager/init.lua#L458) |

---


### [backlightsMode](#backlightsmode)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.razer.manager.backlightsMode <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The backlights mode for all the Razer devices.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/razer/manager/init.lua line 433](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/razer/manager/init.lua#L433) |

---


### [delayUntilRepeat](#delayuntilrepeat)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.razer.manager.delayUntilRepeat <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Delay Until Repeat Preference.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/razer/manager/init.lua line 51](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/razer/manager/init.lua#L51) |

---


### [displayMessageWhenChangingBanks](#displaymessagewhenchangingbanks)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.razer.manager.displayMessageWhenChangingBanks <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Display message when changing banks?                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/razer/manager/init.lua line 418](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/razer/manager/init.lua#L418) |

---


### [enabled](#enabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.razer.manager.enabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Is Loupedeck CT support enabled?                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/razer/manager/init.lua line 1274](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/razer/manager/init.lua#L1274) |

---


### [items](#items)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.razer.manager.items <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Contains all the saved TourBox layouts.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/razer/manager/init.lua line 408](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/razer/manager/init.lua#L408) |

---


### [keyRepeat](#keyrepeat)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.razer.manager.keyRepeat <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Key Repeat Preference.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/razer/manager/init.lua line 46](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/razer/manager/init.lua#L46) |

---


### [lastBundleID](#lastbundleid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.razer.manager.lastBundleID <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The last used bundle ID.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/razer/manager/init.lua line 423](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/razer/manager/init.lua#L423) |

---

