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
| **Notes**                                   | - None |

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
| **Notes**                                   | <ul></ul> |

---


### [reset](#reset)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tourbox.manager.reset()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Resets the config back to the default layout.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [resetTimers](#resettimers)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tourbox.manager.resetTimers() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Resets all the various timers and memories.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |

---

#### Fields


### [activeBanks](#activebanks)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tourbox.manager.activeBanks <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Table of active banks for each application.                                                                     |
| **Notes**                                   | - None |

---


### [automaticallySwitchApplications](#automaticallyswitchapplications)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tourbox.manager.automaticallySwitchApplications <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Enable or disable the automatic switching of applications.                                                                     |
| **Notes**                                   | - None |

---


### [displayMessageWhenChangingBanks](#displaymessagewhenchangingbanks)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tourbox.manager.displayMessageWhenChangingBanks <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Display message when changing banks?                                                                     |
| **Notes**                                   | - None |

---


### [enabled](#enabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tourbox.manager.enabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Is Loupedeck CT support enabled?                                                                     |
| **Notes**                                   | - None |

---


### [items](#items)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tourbox.manager.items <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Contains all the saved TourBox layouts.                                                                     |
| **Notes**                                   | - None |

---

