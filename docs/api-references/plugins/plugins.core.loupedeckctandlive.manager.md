# plugins.core.loupedeckctandlive.manager

Manager Plugin for Loupedeck CT, Loupedeck Live, Loupedeck Live-S and Razer Stream Controller.

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [NUMBER_OF_DEVICES](#number_of_devices)

**Functions** - _API calls offered directly by the extension_
 * [executeAction](#executeaction)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [new](#new)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [lastApplication](#lastapplication)
 * [lastBank](#lastbank)
 * [previewSelectedApplicationAndBankOnHardware](#previewselectedapplicationandbankonhardware)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [callback](#callback)
 * [clearCache](#clearcache)
 * [getFlashDrivePath](#getflashdrivepath)
 * [refresh](#refresh)
 * [refreshItems](#refreshitems)
 * [reset](#reset)
 * [updateBacklightLevel](#updatebacklightlevel)


---

## API Documentation

#### Constants


### [NUMBER_OF_DEVICES](#number_of_devices)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckctandlive.manager.NUMBER_OF_DEVICES -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The number of devices of the same type supported.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/loupedeckctandlive/manager/init.lua line 69](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/loupedeckctandlive/manager/init.lua#L69){target="_blank"} |

---

#### Functions


### [executeAction](#executeaction)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckctandlive.manager:executeAction(thisAction, deviceNumber) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Executes an action.                                                                     |
| **Parameters**                              | <ul><li>thisAction - The action to execute</li><li>deviceNumber - The device number</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false`</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/loupedeckctandlive/manager/init.lua line 1748](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/loupedeckctandlive/manager/init.lua#L1748){target="_blank"} |

---

#### Constructors


### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckctandlive.manager.new() -> Loupedeck`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new Loupedeck object.                                                                     |
| **Parameters**                              | <ul><li>deviceType - The device type defined in `hs.loupedeck.deviceTypes`</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>The deviceType should be either `hs.loupedeck.deviceTypes.LIVE`</li><li>   or `hs.loupedeck.deviceTypes.CT`.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/loupedeckctandlive/manager/init.lua line 126](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/loupedeckctandlive/manager/init.lua#L126){target="_blank"} |

---

#### Fields


### [lastApplication](#lastapplication)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckctandlive.manager.lastApplication <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The last application                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/loupedeckctandlive/manager/init.lua line 59](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/loupedeckctandlive/manager/init.lua#L59){target="_blank"} |

---


### [lastBank](#lastbank)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckctandlive.manager.lastBank <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The last bank                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/loupedeckctandlive/manager/init.lua line 64](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/loupedeckctandlive/manager/init.lua#L64){target="_blank"} |

---


### [previewSelectedApplicationAndBankOnHardware](#previewselectedapplicationandbankonhardware)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckctandlive.manager.previewSelectedApplicationAndBankOnHardware <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Should we preview the selected application and bank on hardware?                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/loupedeckctandlive/manager/init.lua line 54](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/loupedeckctandlive/manager/init.lua#L54){target="_blank"} |

---

#### Methods


### [callback](#callback)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckctandlive.manager:callback(data, deviceNumber) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | The Loupedeck callback.                                                                     |
| **Parameters**                              | <ul><li>data - The callback data.</li><li>deviceNumber - The device number.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/loupedeckctandlive/manager/init.lua line 1842](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/loupedeckctandlive/manager/init.lua#L1842){target="_blank"} |

---


### [clearCache](#clearcache)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckctandlive.manager:clearCache(deviceNumber) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Clears the cache.                                                                     |
| **Parameters**                              | <ul><li>deviceNumber - The device number.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/loupedeckctandlive/manager/init.lua line 1781](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/loupedeckctandlive/manager/init.lua#L1781){target="_blank"} |

---


### [getFlashDrivePath](#getflashdrivepath)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckctandlive.manager:getFlashDrivePath() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the Loupedeck Flash Drive path.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The Loupedeck Flash Drive path as a string</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/loupedeckctandlive/manager/init.lua line 1028](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/loupedeckctandlive/manager/init.lua#L1028){target="_blank"} |

---


### [refresh](#refresh)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckctandlive.manager:refresh(dueToAppChange, deviceNumber)`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Refreshes the Loupedeck screens and LED buttons.                                                                     |
| **Parameters**                              | <ul><li>dueToAppChange - A optional boolean to specify whether the refresh is due to an application focus change.</li><li>deviceNumber - The device number.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/loupedeckctandlive/manager/init.lua line 1152](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/loupedeckctandlive/manager/init.lua#L1152){target="_blank"} |

---


### [refreshItems](#refreshitems)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckctandlive.manager:refreshItems() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Refreshes the items to either either local drive or the Loupedeck Flash Drive.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Self</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/loupedeckctandlive/manager/init.lua line 1050](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/loupedeckctandlive/manager/init.lua#L1050){target="_blank"} |

---


### [reset](#reset)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckctandlive.manager:reset()`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Resets the config back to the default layout.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/loupedeckctandlive/manager/init.lua line 1139](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/loupedeckctandlive/manager/init.lua#L1139){target="_blank"} |

---


### [updateBacklightLevel](#updatebacklightlevel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckctandlive.manager:updateBacklightLevel(deviceNumber, value) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Update the backlight level for a Loupedeck device.                                                                     |
| **Parameters**                              | <ul><li>deviceNumber - The device number.</li><li>value - The backlight level</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/loupedeckctandlive/manager/init.lua line 1825](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/loupedeckctandlive/manager/init.lua#L1825){target="_blank"} |

---

