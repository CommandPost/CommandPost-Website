# plugins.core.tourbox.manager

Loupedeck CT Manager Plugin.

## API Overview
* Variables - Configurable values
 * [defaultLayout](#defaultLayout)
* Functions - API calls offered directly by the extension
 * [connectToTourBox](#connectToTourBox)
 * [reset](#reset)
 * [resetTimers](#resetTimers)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [activeBanks](#activeBanks)
 * [automaticallySwitchApplications](#automaticallySwitchApplications)
 * [displayMessageWhenChangingBanks](#displayMessageWhenChangingBanks)
 * [enabled](#enabled)
 * [items](#items)

## API Documentation

### Variables


### [defaultLayout](#defaultLayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tourbox.manager.defaultLayout -> table`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Default Loupedeck CT Layout                                                                     |

---
### Functions


### [connectToTourBox](#connectToTourBox)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tourbox.manager.connectToTourBox([portName]) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Attempts to establish the TourBox serial connection.                                                                     |
| **Parameters**                              | <ul><li>portName - The optional port name of the device.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [reset](#reset)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tourbox.manager.reset()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Resets the config back to the default layout.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [resetTimers](#resetTimers)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tourbox.manager.resetTimers() -> none`                                                                    |
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
| **Signature**                               | `plugins.core.tourbox.manager.activeBanks <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Table of active banks for each application.                                                                     |

---

### [automaticallySwitchApplications](#automaticallySwitchApplications)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tourbox.manager.automaticallySwitchApplications <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Enable or disable the automatic switching of applications.                                                                     |

---

### [displayMessageWhenChangingBanks](#displayMessageWhenChangingBanks)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tourbox.manager.displayMessageWhenChangingBanks <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Display message when changing banks?                                                                     |

---

### [enabled](#enabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tourbox.manager.enabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Is Loupedeck CT support enabled?                                                                     |

---

### [items](#items)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tourbox.manager.items <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Contains all the saved TourBox layouts.                                                                     |

---
