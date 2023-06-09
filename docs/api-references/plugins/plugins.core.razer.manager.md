# plugins.core.razer.manager

Razer Manager Plugin.

## API Overview
### **Constants** - _Useful values which cannot be changed_
 * [bankLabels](#banklabels)
 * [supportedDevices](#supporteddevices)

### **Variables** - _Configurable values_
 * [defaultLayout](#defaultlayout)
 * [manager](#manager)

### **Functions** - _API calls offered directly by the extension_
 * [refresh](#refresh)
 * [reset](#reset)
 * [resetTimers](#resettimers)

### **Fields** - _Variables which can only be accessed from an object returned by a constructor_
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


## API Documentation

### Constants


### [bankLabels](#banklabels)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.razer.manager.bankLabels -> table`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Table of bank labels, which reflect the LED icons.                                                                     |

---

### [supportedDevices](#supporteddevices)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.razer.manager.supportedDevices -> table`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Table supported devices.                                                                     |

---
### Variables


### [defaultLayout](#defaultlayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.razer.manager.defaultLayout -> table`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Default Loupedeck CT Layout                                                                     |

---

### [manager](#manager)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.razer.manager -> table`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | A table of Razer devices.                                                                     |

---
### Functions


### [refresh](#refresh)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.razer.manager.refresh(trashCache) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Refreshes the LEDs on a Razer device.                                                                     |
| **Parameters**                              | <ul><li>trashCache - an optional boolean to trash the LED cache</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [reset](#reset)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.razer.manager.reset()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Resets the config back to the default layout.                                                                     |
| **Parameters**                              | <ul><li>completelyEmpty - A boolean</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [resetTimers](#resettimers)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.razer.manager.resetTimers() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Resets all the various timers and memories.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Fields


### [activeBanks](#activebanks)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.razer.manager.activeBanks <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Table of active banks for each application.                                                                     |

---

### [automaticallySwitchApplications](#automaticallyswitchapplications)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.razer.manager.automaticallySwitchApplications <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Enable or disable the automatic switching of applications.                                                                     |

---

### [backlightBrightness](#backlightbrightness)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.razer.manager.backlightBrightness <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The backlights brightness for all the Razer devices.                                                                     |

---

### [backlightEffectColorA](#backlighteffectcolora)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.razer.manager.backlightEffectColorA <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The backlight effect primary color.                                                                     |

---

### [backlightEffectColorB](#backlighteffectcolorb)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.razer.manager.backlightEffectColorB <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The backlight effect secondary color.                                                                     |

---

### [backlightEffectDirection](#backlighteffectdirection)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.razer.manager.backlightEffectDirection <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The backlight effect direction.                                                                     |

---

### [backlightEffectSpeed](#backlighteffectspeed)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.razer.manager.backlightEffectSpeed <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The backlight effect speed.                                                                     |

---

### [backlightsMode](#backlightsmode)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.razer.manager.backlightsMode <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The backlights mode for all the Razer devices.                                                                     |

---

### [delayUntilRepeat](#delayuntilrepeat)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.razer.manager.delayUntilRepeat <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Delay Until Repeat Preference.                                                                     |

---

### [displayMessageWhenChangingBanks](#displaymessagewhenchangingbanks)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.razer.manager.displayMessageWhenChangingBanks <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Display message when changing banks?                                                                     |

---

### [enabled](#enabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.razer.manager.enabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Is Loupedeck CT support enabled?                                                                     |

---

### [items](#items)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.razer.manager.items <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Contains all the saved TourBox layouts.                                                                     |

---

### [keyRepeat](#keyrepeat)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.razer.manager.keyRepeat <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Key Repeat Preference.                                                                     |

---

### [lastBundleID](#lastbundleid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.razer.manager.lastBundleID <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The last used bundle ID.                                                                     |

---
