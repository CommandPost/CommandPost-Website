# plugins.core.tourbox.manager

Loupedeck CT Manager Plugin.

---

## API Overview
**Variables** - _Configurable values_
 * [defaultLayout](#defaultlayout)

**Functions** - _API calls offered directly by the extension_
 * [connectToTourBox](#connecttotourbox)
 * [reset](#reset)
 * [resetTimers](#resettimers)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [activeBanks](#activebanks)
 * [automaticallySwitchApplications](#automaticallyswitchapplications)
 * [displayMessageWhenChangingBanks](#displaymessagewhenchangingbanks)
 * [enabled](#enabled)
 * [items](#items)


---

## API Documentation

#### Variables


### [defaultLayout](#defaultlayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tourbox.manager.defaultLayout -> table`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Default Loupedeck CT Layout                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tourbox/manager/init.lua line 540](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tourbox/manager/init.lua#L540) |

---

#### Functions


### [connectToTourBox](#connecttotourbox)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tourbox.manager.connectToTourBox([portName]) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Attempts to establish the TourBox serial connection.                                                                     |
| **Parameters**                              | <ul><li>portName - The optional port name of the device.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tourbox/manager/init.lua line 411](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tourbox/manager/init.lua#L411) |

---


### [reset](#reset)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tourbox.manager.reset()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Resets the config back to the default layout.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tourbox/manager/init.lua line 570](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tourbox/manager/init.lua#L570) |

---


### [resetTimers](#resettimers)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tourbox.manager.resetTimers() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Resets all the various timers and memories.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tourbox/manager/init.lua line 473](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tourbox/manager/init.lua#L473) |

---

#### Fields


### [activeBanks](#activebanks)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tourbox.manager.activeBanks <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Table of active banks for each application.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tourbox/manager/init.lua line 565](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tourbox/manager/init.lua#L565) |

---


### [automaticallySwitchApplications](#automaticallyswitchapplications)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tourbox.manager.automaticallySwitchApplications <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Enable or disable the automatic switching of applications.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tourbox/manager/init.lua line 555](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tourbox/manager/init.lua#L555) |

---


### [displayMessageWhenChangingBanks](#displaymessagewhenchangingbanks)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tourbox.manager.displayMessageWhenChangingBanks <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Display message when changing banks?                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tourbox/manager/init.lua line 550](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tourbox/manager/init.lua#L550) |

---


### [enabled](#enabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tourbox.manager.enabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Is Loupedeck CT support enabled?                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tourbox/manager/init.lua line 498](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tourbox/manager/init.lua#L498) |

---


### [items](#items)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tourbox.manager.items <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Contains all the saved TourBox layouts.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tourbox/manager/init.lua line 560](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tourbox/manager/init.lua#L560) |

---

