# plugins.core.midi.manager

MIDI Manager Plugin.

## Submodules
 * [plugins.core.midi.manager.controls](plugins.core.midi.manager.controls.md)

## API Overview
### **Variables** - _Configurable values_
 * [defaultLayout](#defaultlayout)
 * [defaultLoupedeckLayout](#defaultloupedecklayout)
 * [defaultLoupedeckPlusLayout](#defaultloupedeckpluslayout)
 * [lastActiveBundleID](#lastactivebundleid)
 * [learningMode](#learningmode)
 * [maxItems](#maxitems)

### **Functions** - _API calls offered directly by the extension_
 * [devices](#devices)
 * [getDevice](#getdevice)
 * [getItem](#getitem)
 * [start](#start)
 * [stop](#stop)
 * [update](#update)
 * [virtualDevices](#virtualdevices)

### **Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [activeBanks](#activebanks)
 * [activeLoupedeckBanks](#activeloupedeckbanks)
 * [activeLoupedeckPlusBanks](#activeloupedeckplusbanks)
 * [displayMessageWhenChangingBanks](#displaymessagewhenchangingbanks)
 * [enabled](#enabled)
 * [enabledLoupedeck](#enabledloupedeck)
 * [enabledLoupedeckPlus](#enabledloupedeckplus)
 * [ignoreEverySecondControlDialCommand](#ignoreeverysecondcontroldialcommand)
 * [ignoreEverySecondP1ToP8WheelCommand](#ignoreeverysecondp1top8wheelcommand)
 * [numberOfMidiDevices](#numberofmididevices)


## API Documentation

### Variables


### [defaultLayout](#defaultlayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.defaultLayout -> table`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Default MIDI Layout                                                                     |

---

### [defaultLoupedeckLayout](#defaultloupedecklayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.defaultLoupedeckLayout -> table`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Default Loupedeck Layout                                                                     |

---

### [defaultLoupedeckPlusLayout](#defaultloupedeckpluslayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.defaultLoupedeckPlusLayout -> table`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Default Loupedeck+ Layout                                                                     |

---

### [lastActiveBundleID](#lastactivebundleid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.lastActiveBundleID -> string`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | The last Active Bundle ID. Used for AudioSwift workaround.                                                                     |

---

### [learningMode](#learningmode)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.learningMode -> boolean`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Whether or not the MIDI Manager is in learning mode.                                                                     |

---

### [maxItems](#maxitems)

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

### [getDevice](#getdevice)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.getDevice(deviceName, virtual) -> hs.midi object | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets a MIDI Device.                                                                     |
| **Parameters**                              | <ul><li>deviceName - The device name.</li><li>virtual - A boolean that defines whether or not the device is virtual.</li></ul> |
| **Returns**                                 | <ul><li>A `hs.midi` object or nil if no MIDI device by that name exists.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getItem](#getitem)

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

### [virtualDevices](#virtualdevices)

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


### [activeBanks](#activebanks)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.activeBanks <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Table of active banks for each application.                                                                     |

---

### [activeLoupedeckBanks](#activeloupedeckbanks)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.activeLoupedeckBanks <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Table of active banks for each application.                                                                     |

---

### [activeLoupedeckPlusBanks](#activeloupedeckplusbanks)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.activeLoupedeckPlusBanks <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Table of active banks for each application.                                                                     |

---

### [displayMessageWhenChangingBanks](#displaymessagewhenchangingbanks)

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

### [enabledLoupedeck](#enabledloupedeck)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.enabledLoupedeck <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Enable or disable MIDI Loupedeck Support.                                                                     |

---

### [enabledLoupedeckPlus](#enabledloupedeckplus)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.enabledLoupedeckPlus <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Enable or disable MIDI Loupedeck+ Support.                                                                     |

---

### [ignoreEverySecondControlDialCommand](#ignoreeverysecondcontroldialcommand)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.ignoreEverySecondControlDialCommand <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A preference for ignoring double actions when turning the Control Dial                                                                     |

---

### [ignoreEverySecondP1ToP8WheelCommand](#ignoreeverysecondp1top8wheelcommand)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.ignoreEverySecondP1ToP8WheelCommand <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A preference for ignoring double actions when turning a P1 to P8 wheel.                                                                     |

---

### [numberOfMidiDevices](#numberofmididevices)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.numberOfMidiDevices -> <cp.prop: number>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Total number of MIDI Devices detected (including both physical and virtual).                                                                     |

---
