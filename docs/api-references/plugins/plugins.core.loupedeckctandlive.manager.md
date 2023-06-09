# plugins.core.loupedeckctandlive.manager

Manager Plugin for Loupedeck CT, Loupedeck Live, Loupedeck Live-S and Razer Stream Controller.

## API Overview
* Constants - Useful values which cannot be changed
 * [NUMBER_OF_DEVICES](#NUMBER_OF_DEVICES)
* Functions - API calls offered directly by the extension
 * [executeAction](#executeAction)
* Constructors - API calls which return an object, typically one that offers API methods
 * [new](#new)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [lastApplication](#lastApplication)
 * [lastBank](#lastBank)
 * [previewSelectedApplicationAndBankOnHardware](#previewSelectedApplicationAndBankOnHardware)
* Methods - API calls which can only be made on an object returned by a constructor
 * [callback](#callback)
 * [clearCache](#clearCache)
 * [getFlashDrivePath](#getFlashDrivePath)
 * [refresh](#refresh)
 * [refreshItems](#refreshItems)
 * [reset](#reset)
 * [updateBacklightLevel](#updateBacklightLevel)

## API Documentation

### Constants


### [NUMBER_OF_DEVICES](#NUMBER_OF_DEVICES)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckctandlive.manager.NUMBER_OF_DEVICES -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The number of devices of the same type supported.                                                                     |

---
### Functions


### [executeAction](#executeAction)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckctandlive.manager:executeAction(thisAction, deviceNumber) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Executes an action.                                                                     |
| **Parameters**                              | <ul><li>thisAction - The action to execute</li><li>deviceNumber - The device number</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Constructors


### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckctandlive.manager.new() -> Loupedeck`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new Loupedeck object.                                                                     |
| **Parameters**                              | <ul><li>deviceType - The device type defined in `hs.loupedeck.deviceTypes`</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>The deviceType should be either `hs.loupedeck.deviceTypes.LIVE`</li><li>   or `hs.loupedeck.deviceTypes.CT`.</li></ul>                |

---
### Fields


### [lastApplication](#lastApplication)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckctandlive.manager.lastApplication <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The last application                                                                     |

---

### [lastBank](#lastBank)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckctandlive.manager.lastBank <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The last bank                                                                     |

---

### [previewSelectedApplicationAndBankOnHardware](#previewSelectedApplicationAndBankOnHardware)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckctandlive.manager.previewSelectedApplicationAndBankOnHardware <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Should we preview the selected application and bank on hardware?                                                                     |

---
### Methods


### [callback](#callback)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckctandlive.manager:callback(data, deviceNumber) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | The Loupedeck callback.                                                                     |
| **Parameters**                              | <ul><li>data - The callback data.</li><li>deviceNumber - The device number.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [clearCache](#clearCache)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckctandlive.manager:clearCache(deviceNumber) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Clears the cache.                                                                     |
| **Parameters**                              | <ul><li>deviceNumber - The device number.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getFlashDrivePath](#getFlashDrivePath)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckctandlive.manager:getFlashDrivePath() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the Loupedeck Flash Drive path.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The Loupedeck Flash Drive path as a string</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [refresh](#refresh)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckctandlive.manager:refresh(dueToAppChange, deviceNumber)`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Refreshes the Loupedeck screens and LED buttons.                                                                     |
| **Parameters**                              | <ul><li>dueToAppChange - A optional boolean to specify whether the refresh is due to an application focus change.</li><li>deviceNumber - The device number.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [refreshItems](#refreshItems)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckctandlive.manager:refreshItems() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Refreshes the items to either either local drive or the Loupedeck Flash Drive.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Self</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [reset](#reset)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckctandlive.manager:reset()`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Resets the config back to the default layout.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [updateBacklightLevel](#updateBacklightLevel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckctandlive.manager:updateBacklightLevel(deviceNumber, value) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Update the backlight level for a Loupedeck device.                                                                     |
| **Parameters**                              | <ul><li>deviceNumber - The device number.</li><li>value - The backlight level</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
