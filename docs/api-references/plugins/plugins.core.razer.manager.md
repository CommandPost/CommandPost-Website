# plugins.core.razer.manager

Razer Manager Plugin.

## API Overview
* Constants - Useful values which cannot be changed
 * [bankLabels](#bankLabels)
 * [supportedDevices](#supportedDevices)
* Variables - Configurable values
 * [defaultLayout](#defaultLayout)
 * [manager](#manager)
* Functions - API calls offered directly by the extension
 * [refresh](#refresh)
 * [reset](#reset)
 * [resetTimers](#resetTimers)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [activeBanks](#activeBanks)
 * [automaticallySwitchApplications](#automaticallySwitchApplications)
 * [backlightBrightness](#backlightBrightness)
 * [backlightEffectColorA](#backlightEffectColorA)
 * [backlightEffectColorB](#backlightEffectColorB)
 * [backlightEffectDirection](#backlightEffectDirection)
 * [backlightEffectSpeed](#backlightEffectSpeed)
 * [backlightsMode](#backlightsMode)
 * [delayUntilRepeat](#delayUntilRepeat)
 * [displayMessageWhenChangingBanks](#displayMessageWhenChangingBanks)
 * [enabled](#enabled)
 * [items](#items)
 * [keyRepeat](#keyRepeat)
 * [lastBundleID](#lastBundleID)

## API Documentation

### Constants


### [bankLabels](#bankLabels)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.razer.manager.bankLabels -> table`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Table of bank labels, which reflect the LED icons.                                                                     |

---

### [supportedDevices](#supportedDevices)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.razer.manager.supportedDevices -> table`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Table supported devices.                                                                     |

---
### Variables


### [defaultLayout](#defaultLayout)

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

### [resetTimers](#resetTimers)

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


### [activeBanks](#activeBanks)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.razer.manager.activeBanks <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Table of active banks for each application.                                                                     |

---

### [automaticallySwitchApplications](#automaticallySwitchApplications)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.razer.manager.automaticallySwitchApplications <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Enable or disable the automatic switching of applications.                                                                     |

---

### [backlightBrightness](#backlightBrightness)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.razer.manager.backlightBrightness <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The backlights brightness for all the Razer devices.                                                                     |

---

### [backlightEffectColorA](#backlightEffectColorA)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.razer.manager.backlightEffectColorA <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The backlight effect primary color.                                                                     |

---

### [backlightEffectColorB](#backlightEffectColorB)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.razer.manager.backlightEffectColorB <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The backlight effect secondary color.                                                                     |

---

### [backlightEffectDirection](#backlightEffectDirection)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.razer.manager.backlightEffectDirection <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The backlight effect direction.                                                                     |

---

### [backlightEffectSpeed](#backlightEffectSpeed)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.razer.manager.backlightEffectSpeed <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The backlight effect speed.                                                                     |

---

### [backlightsMode](#backlightsMode)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.razer.manager.backlightsMode <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The backlights mode for all the Razer devices.                                                                     |

---

### [delayUntilRepeat](#delayUntilRepeat)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.razer.manager.delayUntilRepeat <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Delay Until Repeat Preference.                                                                     |

---

### [displayMessageWhenChangingBanks](#displayMessageWhenChangingBanks)

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

### [keyRepeat](#keyRepeat)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.razer.manager.keyRepeat <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Key Repeat Preference.                                                                     |

---

### [lastBundleID](#lastBundleID)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.razer.manager.lastBundleID <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The last used bundle ID.                                                                     |

---
