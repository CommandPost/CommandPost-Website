# plugins.core.midi.manager

MIDI Manager Plugin.

## Submodules
 * [plugins.core.midi.manager.controls](plugins.core.midi.manager.controls.md)

## API Overview
* Variables - Configurable values
 * [defaultLayout](#defaultLayout)
 * [defaultLoupedeckLayout](#defaultLoupedeckLayout)
 * [defaultLoupedeckPlusLayout](#defaultLoupedeckPlusLayout)
 * [lastActiveBundleID](#lastActiveBundleID)
 * [learningMode](#learningMode)
 * [maxItems](#maxItems)
* Functions - API calls offered directly by the extension
 * [devices](#devices)
 * [getDevice](#getDevice)
 * [getItem](#getItem)
 * [start](#start)
 * [stop](#stop)
 * [update](#update)
 * [virtualDevices](#virtualDevices)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [activeBanks](#activeBanks)
 * [activeLoupedeckBanks](#activeLoupedeckBanks)
 * [activeLoupedeckPlusBanks](#activeLoupedeckPlusBanks)
 * [displayMessageWhenChangingBanks](#displayMessageWhenChangingBanks)
 * [enabled](#enabled)
 * [enabledLoupedeck](#enabledLoupedeck)
 * [enabledLoupedeckPlus](#enabledLoupedeckPlus)
 * [ignoreEverySecondControlDialCommand](#ignoreEverySecondControlDialCommand)
 * [ignoreEverySecondP1ToP8WheelCommand](#ignoreEverySecondP1ToP8WheelCommand)
 * [numberOfMidiDevices](#numberOfMidiDevices)

## API Documentation

### Variables


### [defaultLayout](#defaultLayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.defaultLayout -> table`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Default MIDI Layout                                                                     |

---

### [defaultLoupedeckLayout](#defaultLoupedeckLayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.defaultLoupedeckLayout -> table`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Default Loupedeck Layout                                                                     |

---

### [defaultLoupedeckPlusLayout](#defaultLoupedeckPlusLayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.defaultLoupedeckPlusLayout -> table`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Default Loupedeck+ Layout                                                                     |

---

### [lastActiveBundleID](#lastActiveBundleID)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.lastActiveBundleID -> string`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | The last Active Bundle ID. Used for AudioSwift workaround.                                                                     |

---

### [learningMode](#learningMode)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.learningMode -> boolean`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Whether or not the MIDI Manager is in learning mode.                                                                     |

---

### [maxItems](#maxItems)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.maxItems -> number`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | The maximum number of MIDI items per bank.                                                                     |

---
### Functions


### [devices](#devices)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.devices() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets a table of Physical MIDI Device Names.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table of Physical MIDI Device Names.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getDevice](#getDevice)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.getDevice(deviceName, virtual) -> hs.midi object | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets a MIDI Device.                                                                     |
| **Parameters**                              | <ul><li>deviceName - The device name.</li><li>virtual - A boolean that defines whether or not the device is virtual.</li></ul> |
| **Returns**                                 | <ul><li>A `hs.midi` object or nil if no MIDI device by that name exists.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getItem](#getItem)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.getItem(item, button, group) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets a MIDI item from Preferences.                                                                     |
| **Parameters**                              | <ul><li>item - The item you want to get.</li><li>button - Button ID as string</li><li>group - Group ID as string</li></ul> |
| **Returns**                                 | <ul><li>A table otherwise `nil`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [start](#start)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.start() -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Starts the MIDI Plugin                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [stop](#stop)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.stop() -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Stops the MIDI Plugin                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [update](#update)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.update() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Updates the MIDI Watchers.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [virtualDevices](#virtualDevices)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.virtualDevices() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets a table of Virtual MIDI Source Names.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table of Virtual MIDI Source Names.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Fields


### [activeBanks](#activeBanks)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.activeBanks <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Table of active banks for each application.                                                                     |

---

### [activeLoupedeckBanks](#activeLoupedeckBanks)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.activeLoupedeckBanks <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Table of active banks for each application.                                                                     |

---

### [activeLoupedeckPlusBanks](#activeLoupedeckPlusBanks)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.activeLoupedeckPlusBanks <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Table of active banks for each application.                                                                     |

---

### [displayMessageWhenChangingBanks](#displayMessageWhenChangingBanks)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.displayMessageWhenChangingBanks <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Display message when changing banks?                                                                     |

---

### [enabled](#enabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.enabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Enable or disable MIDI Support.                                                                     |

---

### [enabledLoupedeck](#enabledLoupedeck)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.enabledLoupedeck <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Enable or disable MIDI Loupedeck Support.                                                                     |

---

### [enabledLoupedeckPlus](#enabledLoupedeckPlus)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.enabledLoupedeckPlus <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Enable or disable MIDI Loupedeck+ Support.                                                                     |

---

### [ignoreEverySecondControlDialCommand](#ignoreEverySecondControlDialCommand)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.ignoreEverySecondControlDialCommand <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A preference for ignoring double actions when turning the Control Dial                                                                     |

---

### [ignoreEverySecondP1ToP8WheelCommand](#ignoreEverySecondP1ToP8WheelCommand)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.ignoreEverySecondP1ToP8WheelCommand <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A preference for ignoring double actions when turning a P1 to P8 wheel.                                                                     |

---

### [numberOfMidiDevices](#numberOfMidiDevices)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.numberOfMidiDevices -> <cp.prop: number>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Total number of MIDI Devices detected (including both physical and virtual).                                                                     |

---
