# hs.audiodevice

Manipulate the system's audio devices

This module is based primarily on code from the previous incarnation of Mjolnir by [Steven Degutis](https://github.com/sdegutis/).

---

## Submodules
 * [hs.audiodevice.datasource](hs.audiodevice.datasource.md)
 * [hs.audiodevice.watcher](hs.audiodevice.watcher.md)

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [allDevices](#alldevices)
 * [allInputDevices](#allinputdevices)
 * [allOutputDevices](#alloutputdevices)
 * [current](#current)
 * [defaultEffectDevice](#defaulteffectdevice)
 * [defaultInputDevice](#defaultinputdevice)
 * [defaultOutputDevice](#defaultoutputdevice)
 * [findDeviceByName](#finddevicebyname)
 * [findDeviceByUID](#finddevicebyuid)
 * [findInputByName](#findinputbyname)
 * [findInputByUID](#findinputbyuid)
 * [findOutputByName](#findoutputbyname)
 * [findOutputByUID](#findoutputbyuid)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [allInputDataSources](#allinputdatasources)
 * [allOutputDataSources](#alloutputdatasources)
 * [balance](#balance)
 * [currentInputDataSource](#currentinputdatasource)
 * [currentOutputDataSource](#currentoutputdatasource)
 * [inputMuted](#inputmuted)
 * [inputVolume](#inputvolume)
 * [inUse](#inuse)
 * [isInputDevice](#isinputdevice)
 * [isOutputDevice](#isoutputdevice)
 * [jackConnected](#jackconnected)
 * [muted](#muted)
 * [name](#name)
 * [outputMuted](#outputmuted)
 * [outputVolume](#outputvolume)
 * [setBalance](#setbalance)
 * [setDefaultEffectDevice](#setdefaulteffectdevice)
 * [setDefaultInputDevice](#setdefaultinputdevice)
 * [setDefaultOutputDevice](#setdefaultoutputdevice)
 * [setInputMuted](#setinputmuted)
 * [setInputVolume](#setinputvolume)
 * [setMuted](#setmuted)
 * [setOutputMuted](#setoutputmuted)
 * [setOutputVolume](#setoutputvolume)
 * [setVolume](#setvolume)
 * [supportsInputDataSources](#supportsinputdatasources)
 * [supportsOutputDataSources](#supportsoutputdatasources)
 * [transportType](#transporttype)
 * [uid](#uid)
 * [volume](#volume)
 * [watcherCallback](#watchercallback)
 * [watcherIsRunning](#watcherisrunning)
 * [watcherStart](#watcherstart)
 * [watcherStop](#watcherstop)


---

## API Documentation

#### Functions


### [allDevices](#alldevices)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.audiodevice.allDevices() -> hs.audiodevice[]`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a list of all connected devices                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table of zero or more audio devices connected to the system</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/audiodevice/libaudiodevice.m line 173](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/audiodevice/libaudiodevice.m#L173) |

---


### [allInputDevices](#allinputdevices)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.audiodevice.allInputDevices() -> audio[]`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a list of all connected input devices.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table of zero or more audio input devices connected to the system</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/audiodevice/audiodevice.lua line 141](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/audiodevice/audiodevice.lua#L141) |

---


### [allOutputDevices](#alloutputdevices)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.audiodevice.allOutputDevices() -> hs.audiodevice[]`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a list of all connected output devices                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table of zero or more audio output devices connected to the system</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/audiodevice/audiodevice.lua line 128](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/audiodevice/audiodevice.lua#L128) |

---


### [current](#current)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.audiodevice.current([input]) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Fetch various metadata about the current default audio devices                                                                     |
| **Parameters**                              | <ul><li>output - An optional boolean, true to fetch information about the default input device, false for output device. Defaults to false</li></ul> |
| **Returns**                                 | <ul><li>A table with the following contents:</li><li>```lua</li><li>    {</li><li>        name = defaultOutputDevice():name(),</li><li>        uid = module.defaultOutputDevice():uid(),</li><li>        muted = defaultOutputDevice():muted(),</li><li>        volume = defaultOutputDevice():volume(),</li><li>        device = defaultOutputDevice(),</li><li>    }</li><li>```</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/audiodevice/audiodevice.lua line 15](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/audiodevice/audiodevice.lua#L15) |

---


### [defaultEffectDevice](#defaulteffectdevice)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.audiodevice.defaultEffectDevice() -> audio or nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Get the currently selected sound effect device                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>An hs.audiodevice object, or nil if no suitable device could be found</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/audiodevice/libaudiodevice.m line 315](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/audiodevice/libaudiodevice.m#L315) |

---


### [defaultInputDevice](#defaultinputdevice)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.audiodevice.defaultInputDevice() -> audio or nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Get the currently selected audio input device                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>An hs.audiodevice object, or nil if no suitable device could be found</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/audiodevice/libaudiodevice.m line 284](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/audiodevice/libaudiodevice.m#L284) |

---


### [defaultOutputDevice](#defaultoutputdevice)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.audiodevice.defaultOutputDevice() -> audio or nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Get the currently selected audio output device                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>An hs.audiodevice object, or nil if no suitable device could be found</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/audiodevice/libaudiodevice.m line 253](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/audiodevice/libaudiodevice.m#L253) |

---


### [findDeviceByName](#finddevicebyname)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.audiodevice.findDeviceByName(name) -> device or nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Find an audio device by name                                                                     |
| **Parameters**                              | <ul><li>name - A string containing the name of an audio device to search for</li></ul> |
| **Returns**                                 | <ul><li>An `hs.audiodevice` object or nil if the device could not be found</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/audiodevice/audiodevice.lua line 50](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/audiodevice/audiodevice.lua#L50) |

---


### [findDeviceByUID](#finddevicebyuid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.audiodevice.findDeviceByUID(uid) -> device or nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Find an audio device by UID                                                                     |
| **Parameters**                              | <ul><li>uid - A string containing the UID of an audio device to search for</li></ul> |
| **Returns**                                 | <ul><li>An `hs.audiodevice` object or nil if the device could not be found</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/audiodevice/audiodevice.lua line 63](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/audiodevice/audiodevice.lua#L63) |

---


### [findInputByName](#findinputbyname)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.audiodevice.findInputByName(name) -> device or nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Find an audio input device by name                                                                     |
| **Parameters**                              | <ul><li>name - A string containing the name of an audio input device to search for</li></ul> |
| **Returns**                                 | <ul><li>An hs.audiodevice object or nil if the device could not be found</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/audiodevice/audiodevice.lua line 89](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/audiodevice/audiodevice.lua#L89) |

---


### [findInputByUID](#findinputbyuid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.audiodevice.findInputByUID(uid) -> device or nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Find an audio input device by UID                                                                     |
| **Parameters**                              | <ul><li>name - A string containing the UID of an audio input device to search for</li></ul> |
| **Returns**                                 | <ul><li>An hs.audiodevice object or nil if the device could not be found</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/audiodevice/audiodevice.lua line 115](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/audiodevice/audiodevice.lua#L115) |

---


### [findOutputByName](#findoutputbyname)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.audiodevice.findOutputByName(name) -> device or nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Find an audio output device by name                                                                     |
| **Parameters**                              | <ul><li>name - A string containing the name of an audio output device to search for</li></ul> |
| **Returns**                                 | <ul><li>An hs.audiodevice object or nil if the device could not be found</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/audiodevice/audiodevice.lua line 76](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/audiodevice/audiodevice.lua#L76) |

---


### [findOutputByUID](#findoutputbyuid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.audiodevice.findOutputByUID(uid) -> device or nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Find an audio output device by UID                                                                     |
| **Parameters**                              | <ul><li>name - A string containing the UID of an audio output device to search for</li></ul> |
| **Returns**                                 | <ul><li>An hs.audiodevice object or nil if the device could not be found</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/audiodevice/audiodevice.lua line 102](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/audiodevice/audiodevice.lua#L102) |

---

#### Methods


### [allInputDataSources](#allinputdatasources)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.audiodevice:allInputDataSources() -> hs.audiodevice.dataSource[] or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets all of the input data sources of an audio device                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A list of hs.audiodevice.dataSource objects, or nil if an error occurred</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/audiodevice/libaudiodevice.m line 1499](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/audiodevice/libaudiodevice.m#L1499) |

---


### [allOutputDataSources](#alloutputdatasources)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.audiodevice:allOutputDataSources() -> hs.audiodevice.dataSource[] or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets all of the output data sources of an audio device                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A list of hs.audiodevice.dataSource objects, or nil if an error occurred</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/audiodevice/libaudiodevice.m line 1446](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/audiodevice/libaudiodevice.m#L1446) |

---


### [balance](#balance)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.audiodevice:balance() -> number or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get the current left/right balance of this audio device                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A number between 0.0 and 1.0, representing the balance (0.0 for full left, 1.0 for full right, 0.5 for center), or nil if the audio device does not support balance</li></ul>          |
| **Notes**                                   | <ul><li>The return value will be a floating point number</li><li>This method will inspect the device to determine if it is an input or output device, and return the appropriate volume. For devices that are both input and output devices, see `:inputVolume()` and `:outputVolume()`</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/audiodevice/libaudiodevice.m line 1067](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/audiodevice/libaudiodevice.m#L1067) |

---


### [currentInputDataSource](#currentinputdatasource)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.audiodevice:currentInputDataSource() -> hs.audiodevice.dataSource object or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the current input data source of an audio device                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>An hs.audiodevice.dataSource object, or nil if an error occurred</li></ul>          |
| **Notes**                                   | <ul><li>Before calling this method, you should check the result of hs.audiodevice:supportsInputDataSources()</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/audiodevice/libaudiodevice.m line 1372](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/audiodevice/libaudiodevice.m#L1372) |

---


### [currentOutputDataSource](#currentoutputdatasource)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.audiodevice:currentOutputDataSource() -> hs.audiodevice.dataSource object or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the current output data source of an audio device                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>An hs.audiodevice.dataSource object, or nil if an error occurred</li></ul>          |
| **Notes**                                   | <ul><li>Before calling this method, you should check the result of hs.audiodevice:supportsOutputDataSources()</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/audiodevice/libaudiodevice.m line 1409](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/audiodevice/libaudiodevice.m#L1409) |

---


### [inputMuted](#inputmuted)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.audiodevice:inputMuted() -> bool or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get the Input mutedness state of the audio device                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>True if the audio device's Input is muted. False if it's not muted, nil if it does not support muting</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/audiodevice/libaudiodevice.m line 563](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/audiodevice/libaudiodevice.m#L563) |

---


### [inputVolume](#inputvolume)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.audiodevice:inputVolume() -> number or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get the current input volume of this audio device                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A number between 0 and 100, representing the input volume percentage, or nil if the audio device does not support input volume levels</li></ul>          |
| **Notes**                                   | <ul><li>The return value will be a floating point number</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/audiodevice/libaudiodevice.m line 794](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/audiodevice/libaudiodevice.m#L794) |

---


### [inUse](#inuse)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.audiodevice:inUse() -> bool or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Check if the audio device is in use                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>True if the audio device is in use, False if not. nil if an error occurred.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/audiodevice/libaudiodevice.m line 521](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/audiodevice/libaudiodevice.m#L521) |

---


### [isInputDevice](#isinputdevice)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.audiodevice:isInputDevice() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Determines if an audio device is an input device                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A boolean, true if the device is an input device, false if not</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/audiodevice/libaudiodevice.m line 1185](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/audiodevice/libaudiodevice.m#L1185) |

---


### [isOutputDevice](#isoutputdevice)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.audiodevice:isOutputDevice() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Determines if an audio device is an output device                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A boolean, true if the device is an output device, false if not</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/audiodevice/libaudiodevice.m line 1165](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/audiodevice/libaudiodevice.m#L1165) |

---


### [jackConnected](#jackconnected)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.audiodevice:jackConnected() -> boolean or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Determines whether an audio jack (e.g. headphones) is connected to an audio device                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A boolean, true if a jack is connected, false if not, or nil if the device does not support jack sense</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/audiodevice/libaudiodevice.m line 1284](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/audiodevice/libaudiodevice.m#L1284) |

---


### [muted](#muted)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.audiodevice:muted() -> bool or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get the mutedness state of the audio device                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>True if the audio device is muted, False if it is not muted, nil if it does not support muting</li></ul>          |
| **Notes**                                   | <ul><li>If a device is capable of both input and output, this method will prefer the output. See `:inputMuted()` and `:outputMuted()` for specific variants.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/audiodevice/libaudiodevice.m line 635](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/audiodevice/libaudiodevice.m#L635) |

---


### [name](#name)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.audiodevice:name() -> string or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get the name of the audio device                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string containing the name of the audio device, or nil if it has no name</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/audiodevice/libaudiodevice.m line 448](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/audiodevice/libaudiodevice.m#L448) |

---


### [outputMuted](#outputmuted)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.audiodevice:outputMuted() -> bool or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get the Output mutedness state of the audio device                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>True if the audio device's Output is muted. False if it's not muted, nil if it does not support muting</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/audiodevice/libaudiodevice.m line 599](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/audiodevice/libaudiodevice.m#L599) |

---


### [outputVolume](#outputvolume)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.audiodevice:outputVolume() -> number or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get the current output volume of this audio device                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A number between 0 and 100, representing the output volume percentage, or nil if the audio device does not support output volume levels</li></ul>          |
| **Notes**                                   | <ul><li>The return value will be a floating point number</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/audiodevice/libaudiodevice.m line 835](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/audiodevice/libaudiodevice.m#L835) |

---


### [setBalance](#setbalance)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.audiodevice:setBalance(level) -> bool`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Set the balance of this audio device                                                                     |
| **Parameters**                              | <ul><li>level - A number between 0.0 and 1.0, representing the balance (0.0 for full left, 1.0 for full right, 0.5 for center)</li></ul> |
| **Returns**                                 | <ul><li>True if the balance was set, false if the audio device does not support setting a balance.</li></ul>          |
| **Notes**                                   | <ul><li>This method will inspect the device to determine if it is an input or output device, and set the appropriate volume. For devices that are both input and output devices, see `:setInputVolume()` and `:setOutputVolume()`</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/audiodevice/libaudiodevice.m line 1112](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/audiodevice/libaudiodevice.m#L1112) |

---


### [setDefaultEffectDevice](#setdefaulteffectdevice)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.audiodevice:setDefaultEffectDevice() -> bool`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Selects this device as the audio output device for system sound effects                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>True if the audio device was successfully selected, otherwise false.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/audiodevice/libaudiodevice.m line 382](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/audiodevice/libaudiodevice.m#L382) |

---


### [setDefaultInputDevice](#setdefaultinputdevice)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.audiodevice:setDefaultInputDevice() -> bool`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Selects this device as the system's audio input device                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>True if the audio device was successfully selected, otherwise false.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/audiodevice/libaudiodevice.m line 415](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/audiodevice/libaudiodevice.m#L415) |

---


### [setDefaultOutputDevice](#setdefaultoutputdevice)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.audiodevice:setDefaultOutputDevice() -> bool`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Selects this device as the system's audio output device                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>True if the audio device was successfully selected, otherwise false.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/audiodevice/libaudiodevice.m line 349](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/audiodevice/libaudiodevice.m#L349) |

---


### [setInputMuted](#setinputmuted)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.audiodevice:setInputMuted(state) -> bool`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Set the mutedness state of the Input of the audio device                                                                     |
| **Parameters**                              | <ul><li>state - A boolean value. True to mute the device, False to unmute it</li></ul> |
| **Returns**                                 | <ul><li>True if the device's Input mutedness state was set, or False if it does not support muting</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/audiodevice/libaudiodevice.m line 678](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/audiodevice/libaudiodevice.m#L678) |

---


### [setInputVolume](#setinputvolume)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.audiodevice:setInputVolume(level) -> bool`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Set the input volume of this audio device                                                                     |
| **Parameters**                              | <ul><li>level - A number between 0 and 100, representing the input volume as a percentage</li></ul> |
| **Returns**                                 | <ul><li>True if the volume was set, false if the audio device does not support setting an input volume level</li></ul>          |
| **Notes**                                   | <ul><li>The volume level is a floating point number. Depending on your audio hardware, it may not be possible to increase volume in single digit increments</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/audiodevice/libaudiodevice.m line 921](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/audiodevice/libaudiodevice.m#L921) |

---


### [setMuted](#setmuted)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.audiodevice:setMuted(state) -> bool`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Set the mutedness state of the audio device                                                                     |
| **Parameters**                              | <ul><li>state - A boolean value. True to mute the device, False to unmute it</li></ul> |
| **Returns**                                 | <ul><li>True if the device's mutedness state was set, or False if it does not support muting</li></ul>          |
| **Notes**                                   | <ul><li>If a device is capable of both input and output, this method will prefer the output. See `:setInputMuted()` and `:setOutputMuted()` for specific variants.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/audiodevice/libaudiodevice.m line 751](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/audiodevice/libaudiodevice.m#L751) |

---


### [setOutputMuted](#setoutputmuted)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.audiodevice:setOutputMuted(state) -> bool`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Set the mutedness state of the Output of the audio device                                                                     |
| **Parameters**                              | <ul><li>state - A boolean value. True to mute the device, False to unmute it</li></ul> |
| **Returns**                                 | <ul><li>True if the device's Output mutedness state was set, or False if it does not support muting</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/audiodevice/libaudiodevice.m line 714](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/audiodevice/libaudiodevice.m#L714) |

---


### [setOutputVolume](#setoutputvolume)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.audiodevice:setOutputVolume(level) -> bool`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Set the output volume of this audio device                                                                     |
| **Parameters**                              | <ul><li>level - A number between 0 and 100, representing the output volume as a percentage</li></ul> |
| **Returns**                                 | <ul><li>True if the volume was set, false if the audio device does not support setting an output volume level</li></ul>          |
| **Notes**                                   | <ul><li>The volume level is a floating point number. Depending on your audio hardware, it may not be possible to increase volume in single digit increments</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/audiodevice/libaudiodevice.m line 967](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/audiodevice/libaudiodevice.m#L967) |

---


### [setVolume](#setvolume)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.audiodevice:setVolume(level) -> bool`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Set the volume of this audio device                                                                     |
| **Parameters**                              | <ul><li>level - A number between 0 and 100, representing the volume as a percentage</li></ul> |
| **Returns**                                 | <ul><li>True if the volume was set, false if the audio device does not support setting a volume level.</li></ul>          |
| **Notes**                                   | <ul><li>The volume level is a floating point number. Depending on your audio hardware, it may not be possible to increase volume in single digit increments.</li><li>This method will inspect the device to determine if it is an input or output device, and set the appropriate volume. For devices that are both input and output devices, see `:setInputVolume()` and `:setOutputVolume()`</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/audiodevice/libaudiodevice.m line 1013](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/audiodevice/libaudiodevice.m#L1013) |

---


### [supportsInputDataSources](#supportsinputdatasources)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.audiodevice:supportsInputDataSources() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Determines whether an audio device supports input data sources                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A boolean, true if the device supports input data sources, false if not</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/audiodevice/libaudiodevice.m line 1318](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/audiodevice/libaudiodevice.m#L1318) |

---


### [supportsOutputDataSources](#supportsoutputdatasources)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.audiodevice:supportsOutputDataSources() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Determines whether an audio device supports output data sources                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A boolean, true if the device supports output data sources, false if not</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/audiodevice/libaudiodevice.m line 1345](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/audiodevice/libaudiodevice.m#L1345) |

---


### [transportType](#transporttype)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.audiodevice:transportType() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the hardware transport type of an audio device                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string containing the transport type, or nil if an error occurred</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/audiodevice/libaudiodevice.m line 1205](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/audiodevice/libaudiodevice.m#L1205) |

---


### [uid](#uid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.audiodevice:uid() -> string or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get the unique identifier of the audio device                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string containing the UID of the audio device, or nil if it has no UID.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/audiodevice/libaudiodevice.m line 482](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/audiodevice/libaudiodevice.m#L482) |

---


### [volume](#volume)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.audiodevice:volume() -> number or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get the current volume of this audio device                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A number between 0 and 100, representing the volume percentage, or nil if the audio device does not support volume levels</li></ul>          |
| **Notes**                                   | <ul><li>The return value will be a floating point number</li><li>This method will inspect the device to determine if it is an input or output device, and return the appropriate volume. For devices that are both input and output devices, see `:inputVolume()` and `:outputVolume()`</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/audiodevice/libaudiodevice.m line 876](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/audiodevice/libaudiodevice.m#L876) |

---


### [watcherCallback](#watchercallback)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.audiodevice:watcherCallback(fn) -> hs.audiodevice`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets or removes a callback function for an audio device watcher                                                                     |
| **Parameters**                              | <ul><li>fn - A callback function that will be called when properties of this audio device change, or nil to remove an existing callback. The function should accept four arguments:
  A string containing the UID of the audio device (see `hs.audiodevice.findDeviceByUID()`)
  A string containing the name of the event. Possible values are:
  vmvc - Volume changed
  mute - Mute state changed
  jack - Jack sense state changed (usually this means headphones were plugged/unplugged)
  span - Stereo pan changed
  diff - Device configuration changed (if you are caching audio device properties, this event indicates you should flush your cache)
  gone - The device's "in use" status changed (ie another app started using the device, or stopped using it)
  A string containing the scope of the event. Possible values are:
  glob - This is a global event pertaining to the whole device
  inpt - This is an event pertaining only to the input functions of the device
  outp - This is an event pertaining only to the output functions of the device
  A number containing the element of the event. Typical values are:
  0 - Typically this means the Master channel
  1 - Typically this means the Left channel
  2 - Typically this means the Right channel</li></ul> |
| **Returns**                                 | <ul><li>The `hs.audiodevice` object</li></ul>          |
| **Notes**                                   | <ul><li>You will receive many events to your callback, so filtering on the name/scope/element arguments is vital. For example, on a stereo device, it is not uncommon to receive a `volm` event for each audio channel when the volume changes, or multiple `mute` events for channels. Dragging a volume slider in the system Sound preferences will produce a large number of `volm` events. Plugging/unplugging headphones may trigger `volm` events in addition to `jack` ones, etc.</li><li>If you need to use the `hs.audiodevice` object in your callback, use `hs.audiodevice.findDeviceByUID()` to obtain it fro the first callback argument</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/audiodevice/libaudiodevice.m line 1552](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/audiodevice/libaudiodevice.m#L1552) |

---


### [watcherIsRunning](#watcherisrunning)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.audiodevice:watcherIsRunning() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the status of the `hs.audiodevice` object watcher                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A boolean, true if the watcher is running, false if not</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/audiodevice/libaudiodevice.m line 1698](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/audiodevice/libaudiodevice.m#L1698) |

---


### [watcherStart](#watcherstart)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.audiodevice:watcherStart() -> hs.audiodevice or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Starts the watcher on an `hs.audiodevice` object                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `hs.audiodevice` object, or nil if an error occurred</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/audiodevice/libaudiodevice.m line 1608](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/audiodevice/libaudiodevice.m#L1608) |

---


### [watcherStop](#watcherstop)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.audiodevice:watcherStop() -> hs.audiodevice`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Stops the watcher on an `hs.audiodevice` object                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `hs.audiodevice` object</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/audiodevice/libaudiodevice.m line 1676](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/audiodevice/libaudiodevice.m#L1676) |

---

