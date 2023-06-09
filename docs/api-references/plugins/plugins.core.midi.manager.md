# plugins.core.midi.manager

MIDI Manager Plugin.

---

## Submodules
 * [plugins.core.midi.manager.controls](plugins.core.midi.manager.controls.md)

---

## API Overview
**Variables** - _Configurable values_
 * [defaultLayout](#defaultlayout)
 * [defaultLoupedeckLayout](#defaultloupedecklayout)
 * [defaultLoupedeckPlusLayout](#defaultloupedeckpluslayout)
 * [lastActiveBundleID](#lastactivebundleid)
 * [learningMode](#learningmode)
 * [maxItems](#maxitems)

**Functions** - _API calls offered directly by the extension_
 * [devices](#devices)
 * [getDevice](#getdevice)
 * [getItem](#getitem)
 * [start](#start)
 * [stop](#stop)
 * [update](#update)
 * [virtualDevices](#virtualdevices)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
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


---

## API Documentation

#### Variables


### [defaultLayout](#defaultlayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.defaultLayout -> table`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Default MIDI Layout                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/core/midi/manager/init.lua line 67](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/midi/manager/init.lua#L67){target="_blank"} |

---


### [defaultLoupedeckLayout](#defaultloupedecklayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.defaultLoupedeckLayout -> table`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Default Loupedeck Layout                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/core/midi/manager/init.lua line 72](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/midi/manager/init.lua#L72){target="_blank"} |

---


### [defaultLoupedeckPlusLayout](#defaultloupedeckpluslayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.defaultLoupedeckPlusLayout -> table`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Default Loupedeck+ Layout                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/core/midi/manager/init.lua line 77](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/midi/manager/init.lua#L77){target="_blank"} |

---


### [lastActiveBundleID](#lastactivebundleid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.lastActiveBundleID -> string`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | The last Active Bundle ID. Used for AudioSwift workaround.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/core/midi/manager/init.lua line 87](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/midi/manager/init.lua#L87){target="_blank"} |

---


### [learningMode](#learningmode)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.learningMode -> boolean`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Whether or not the MIDI Manager is in learning mode.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/core/midi/manager/init.lua line 82](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/midi/manager/init.lua#L82){target="_blank"} |

---


### [maxItems](#maxitems)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.maxItems -> number`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | The maximum number of MIDI items per bank.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/core/midi/manager/init.lua line 32](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/midi/manager/init.lua#L32){target="_blank"} |

---

#### Functions


### [devices](#devices)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.devices() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets a table of Physical MIDI Device Names.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table of Physical MIDI Device Names.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/midi/manager/init.lua line 751](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/midi/manager/init.lua#L751){target="_blank"} |

---


### [getDevice](#getdevice)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.getDevice(deviceName, virtual) -> hs.midi object | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets a MIDI Device.                                                                     |
| **Parameters**                              | <ul><li>deviceName - The device name.</li><li>virtual - A boolean that defines whether or not the device is virtual.</li></ul> |
| **Returns**                                 | <ul><li>A `hs.midi` object or nil if no MIDI device by that name exists.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/midi/manager/init.lua line 777](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/midi/manager/init.lua#L777){target="_blank"} |

---


### [getItem](#getitem)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.getItem(item, button, group) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets a MIDI item from Preferences.                                                                     |
| **Parameters**                              | <ul><li>item - The item you want to get.</li><li>button - Button ID as string</li><li>group - Group ID as string</li></ul> |
| **Returns**                                 | <ul><li>A table otherwise `nil`</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/midi/manager/init.lua line 506](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/midi/manager/init.lua#L506){target="_blank"} |

---


### [start](#start)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.start() -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Starts the MIDI Plugin                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/midi/manager/init.lua line 794](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/midi/manager/init.lua#L794){target="_blank"} |

---


### [stop](#stop)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.stop() -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Stops the MIDI Plugin                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/midi/manager/init.lua line 879](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/midi/manager/init.lua#L879){target="_blank"} |

---


### [update](#update)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.update() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Updates the MIDI Watchers.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/midi/manager/init.lua line 898](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/midi/manager/init.lua#L898){target="_blank"} |

---


### [virtualDevices](#virtualdevices)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.virtualDevices() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets a table of Virtual MIDI Source Names.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table of Virtual MIDI Source Names.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/midi/manager/init.lua line 764](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/midi/manager/init.lua#L764){target="_blank"} |

---

#### Fields


### [activeBanks](#activebanks)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.activeBanks <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Table of active banks for each application.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/core/midi/manager/init.lua line 42](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/midi/manager/init.lua#L42){target="_blank"} |

---


### [activeLoupedeckBanks](#activeloupedeckbanks)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.activeLoupedeckBanks <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Table of active banks for each application.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/core/midi/manager/init.lua line 47](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/midi/manager/init.lua#L47){target="_blank"} |

---


### [activeLoupedeckPlusBanks](#activeloupedeckplusbanks)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.activeLoupedeckPlusBanks <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Table of active banks for each application.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/core/midi/manager/init.lua line 52](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/midi/manager/init.lua#L52){target="_blank"} |

---


### [displayMessageWhenChangingBanks](#displaymessagewhenchangingbanks)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.displayMessageWhenChangingBanks <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Display message when changing banks?                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/core/midi/manager/init.lua line 37](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/midi/manager/init.lua#L37){target="_blank"} |

---


### [enabled](#enabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.enabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Enable or disable MIDI Support.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/core/midi/manager/init.lua line 920](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/midi/manager/init.lua#L920){target="_blank"} |

---


### [enabledLoupedeck](#enabledloupedeck)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.enabledLoupedeck <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Enable or disable MIDI Loupedeck Support.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/core/midi/manager/init.lua line 925](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/midi/manager/init.lua#L925){target="_blank"} |

---


### [enabledLoupedeckPlus](#enabledloupedeckplus)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.enabledLoupedeckPlus <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Enable or disable MIDI Loupedeck+ Support.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/core/midi/manager/init.lua line 930](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/midi/manager/init.lua#L930){target="_blank"} |

---


### [ignoreEverySecondControlDialCommand](#ignoreeverysecondcontroldialcommand)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.ignoreEverySecondControlDialCommand <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A preference for ignoring double actions when turning the Control Dial                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/core/midi/manager/init.lua line 62](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/midi/manager/init.lua#L62){target="_blank"} |

---


### [ignoreEverySecondP1ToP8WheelCommand](#ignoreeverysecondp1top8wheelcommand)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.ignoreEverySecondP1ToP8WheelCommand <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A preference for ignoring double actions when turning a P1 to P8 wheel.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/core/midi/manager/init.lua line 57](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/midi/manager/init.lua#L57){target="_blank"} |

---


### [numberOfMidiDevices](#numberofmididevices)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.numberOfMidiDevices -> <cp.prop: number>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Total number of MIDI Devices detected (including both physical and virtual).                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/core/midi/manager/init.lua line 915](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/midi/manager/init.lua#L915){target="_blank"} |

---

