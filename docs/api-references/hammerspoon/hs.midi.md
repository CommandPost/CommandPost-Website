# hs.midi

MIDI Extension for Hammerspoon.

This extension supports listening, transmitting and synthesizing MIDI commands.

This extension was thrown together by [Chris Hocking](http://latenitefilms.com) for [CommandPost](http://commandpost.io).

This extension uses [MIKMIDI](https://github.com/mixedinkey-opensource/MIKMIDI), an easy-to-use Objective-C MIDI library created by Andrew Madsen and developed by him and Chris Flesner of [Mixed In Key](http://www.mixedinkey.com/).

MIKMIDI LICENSE:
Copyright (c) 2013 Mixed In Key, LLC.
Original author: [Andrew R. Madsen](https://github.com/armadsen) (andrew@mixedinkey.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [commandTypes](#commandtypes)

**Functions** - _API calls offered directly by the extension_
 * [deviceCallback](#devicecallback)
 * [devices](#devices)
 * [virtualSources](#virtualsources)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [new](#new)
 * [newVirtualSource](#newvirtualsource)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [callback](#callback)
 * [displayName](#displayname)
 * [identityRequest](#identityrequest)
 * [isOnline](#isonline)
 * [isVirtual](#isvirtual)
 * [manufacturer](#manufacturer)
 * [model](#model)
 * [name](#name)
 * [sendCommand](#sendcommand)
 * [sendSysex](#sendsysex)
 * [synthesize](#synthesize)


---

## API Documentation

#### Constants


### [commandTypes](#commandtypes)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.midi.commandTypes[]`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A table containing the numeric value for the possible flags returned by the `commandType` parameter of the callback function.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/midi/libmidi.m line 1511](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/midi/libmidi.m#L1511){target="_blank"} |

---

#### Functions


### [deviceCallback](#devicecallback)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.midi.deviceCallback(callbackFn) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | A callback that's triggered when a physical or virtual MIDI device is added or removed from the system.                                                                     |
| **Parameters**                              | <ul><li>callbackFn - the callback function to trigger.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>The callback function should expect 2 argument and should not return anything:</li><li>  `devices` - A table containing the names of any physically connected MIDI devices as strings.</li><li>  `virtualDevices` - A table containing the names of any virtual MIDI devices as strings.</li><li>Example Usage:</li><li>   ```lua</li><li>   hs.midi.deviceCallback(function(devices, virtualDevices)</li><li>        print(hs.inspect(devices))</li><li>        print(hs.inspect(virtualDevices))</li><li>   end)```</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/midi/libmidi.m line 341](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/midi/libmidi.m#L341){target="_blank"} |

---


### [devices](#devices)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.midi.devices() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a table of currently connected physical MIDI devices.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table containing the names of any physically connected MIDI devices as strings.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/midi/libmidi.m line 299](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/midi/libmidi.m#L299){target="_blank"} |

---


### [virtualSources](#virtualsources)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.midi.virtualSources() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a table of currently available Virtual MIDI sources. This includes devices, such as Native Instruments controllers which present as virtual endpoints rather than physical devices.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table containing the names of any virtual MIDI sources as strings.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/midi/libmidi.m line 320](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/midi/libmidi.m#L320){target="_blank"} |

---

#### Constructors


### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.midi.new(deviceName) -> `hs.midi` object`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `hs.midi` object.                                                                     |
| **Parameters**                              | <ul><li>deviceName - A string containing the device name of the MIDI device. A valid device name can be found by checking `hs.midi.devices()` and/or `hs.midi.virtualSources()`.</li></ul> |
| **Returns**                                 | <ul><li>An `hs.midi` object or `nil` if an error occurred.</li></ul>          |
| **Notes**                                   | <ul><li>Example Usage:</li><li>   `hs.midi.new(hs.midi.devices()[1])`</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/midi/libmidi.m line 390](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/midi/libmidi.m#L390){target="_blank"} |

---


### [newVirtualSource](#newvirtualsource)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.midi.newVirtualSource(virtualSource) -> `hs.midi` object`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `hs.midi` object.                                                                     |
| **Parameters**                              | <ul><li>virtualSource - A string containing the virtual source name of the MIDI device. A valid virtual source name can be found by checking `hs.midi.virtualSources()`.</li></ul> |
| **Returns**                                 | <ul><li>An `hs.midi` object or `nil` if an error occurred.</li></ul>          |
| **Notes**                                   | <ul><li>Example Usage:</li><li>   `hs.midi.newVirtualSource(hs.midi.virtualSources()[1])`</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/midi/libmidi.m line 417](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/midi/libmidi.m#L417){target="_blank"} |

---

#### Methods


### [callback](#callback)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.midi:callback(callbackFn)`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets or removes a callback function for the `hs.midi` object.                                                                     |
| **Parameters**                              | <ul><li>`callbackFn` - a function to set as the callback for this `hs.midi` object.  If the value provided is `nil`, any currently existing callback function is removed.</li></ul> |
| **Returns**                                 | <ul><li>The `hs.midi` object</li></ul>          |
| **Notes**                                   | <ul><li>Most MIDI keyboards produce a `noteOn` when you press a key, then `noteOff` when you release. However, some MIDI keyboards will return a `noteOn` with 0 `velocity` instead of `noteOff`, so you will receive two `noteOn` commands for every key press/release.</li><li>The callback function should expect 5 arguments and should not return anything:</li><li>  `object`       - The `hs.midi` object.</li><li>  `deviceName`   - The device name as a string.</li><li>  `commandType`  - Type of MIDI message as defined as a string. See `hs.midi.commandTypes[]` for a list of possibilities.</li><li>  `description`  - Description of the event as a string. This is only really useful for debugging.</li><li>  `metadata`     - A table of data for the MIDI command (see below).</li><li></li><li>The `metadata` table will return the following, depending on the `commandType` for the callback:</li><li></li><li>  `noteOff` - Note off command:</li><li>    note                - The note number for the command. Must be between 0 and 127.</li><li>    velocity            - The velocity for the command. Must be between 0 and 127.</li><li>    channel             - The channel for the command. Must be a number between 15.</li><li>    timestamp           - The timestamp for the command as a string.</li><li>    data                - Raw MIDI Data as Hex String.</li><li>    isVirtual           - `true` if Virtual MIDI Source otherwise `false`.</li><li></li><li>  `noteOn` - Note on command:</li><li>    note                - The note number for the command. Must be between 0 and 127.</li><li>    velocity            - The velocity for the command. Must be between 0 and 127.</li><li>    channel             - The channel for the command. Must be a number between 15.</li><li>    timestamp           - The timestamp for the command as a string.</li><li>    data                - Raw MIDI Data as Hex String.</li><li>    isVirtual           - `true` if Virtual MIDI Source otherwise `false`.</li><li></li><li>  `polyphonicKeyPressure` - Polyphonic key pressure command:</li><li>    note                - The note number for the command. Must be between 0 and 127.</li><li>    pressure            - Key pressure of the polyphonic key pressure message. In the range 0-127.</li><li>    channel             - The channel for the command. Must be a number between 15.</li><li>    timestamp           - The timestamp for the command as a string.</li><li>    data                - Raw MIDI Data as Hex String.</li><li>    isVirtual           - `true` if Virtual MIDI Source otherwise `false`.</li><li></li><li>  `controlChange` - Control change command. This is the most common command sent by MIDI controllers:</li><li>    controllerNumber    - The MIDI control number for the command.</li><li>    controllerValue     - The controllerValue of the command. Only the lower 7-bits of this are used.</li><li>    channel             - The channel for the command. Must be a number between 15.</li><li>    timestamp           - The timestamp for the command as a string.</li><li>    data                - Raw MIDI Data as Hex String.</li><li>    fourteenBitValue    - The 14-bit value of the command.</li><li>    fourteenBitCommand  - `true` if the command contains 14-bit value data otherwise, `false`.</li><li>    isVirtual           - `true` if Virtual MIDI Source otherwise `false`.</li><li></li><li>  `programChange` - Program change command:</li><li>    programNumber       - The program (aka patch) number. From 0-127.</li><li>    channel             - The channel for the command. Must be a number between 15.</li><li>    timestamp           - The timestamp for the command as a string.</li><li>    data                - Raw MIDI Data as Hex String.</li><li>    isVirtual           - `true` if Virtual MIDI Source otherwise `false`.</li><li></li><li>  `channelPressure` - Channel pressure command:</li><li>    pressure            - Key pressure of the channel pressure message. In the range 0-127.</li><li>    channel             - The channel for the command. Must be a number between 15.</li><li>    timestamp           - The timestamp for the command as a string.</li><li>    data                - Raw MIDI Data as Hex String.</li><li>    isVirtual           - `true` if Virtual MIDI Source otherwise `false`.</li><li></li><li>  `pitchWheelChange` - Pitch wheel change command:</li><li>    pitchChange         -  A 14-bit value indicating the pitch bend. Center is 0x2000 (8192). Valid range is from 0-16383.</li><li>    channel             - The channel for the command. Must be a number between 15.</li><li>    timestamp           - The timestamp for the command as a string.</li><li>    data                - Raw MIDI Data as Hex String.</li><li>    isVirtual           - `true` if Virtual MIDI Source otherwise `false`.</li><li></li><li>  `systemMessage` - System message command:</li><li>    dataByte1           - Data Byte 1 as integer.</li><li>    dataByte2           - Data Byte 2 as integer.</li><li>    timestamp           - The timestamp for the command as a string.</li><li>    data                - Raw MIDI Data as Hex String.</li><li>    isVirtual           - `true` if Virtual MIDI Source otherwise `false`.</li><li></li><li>  `systemExclusive` - System message command:</li><li>    manufacturerID      - The manufacturer ID for the command. This is used by devices to determine if the message is one they support.</li><li>    sysexChannel        - The channel of the message. Only valid for universal exclusive messages, will always be 0 for non-universal messages.</li><li>    sysexData           - The system exclusive data for the message. For universal messages subID's are included in sysexData, for non-universal messages, any device specific information (such as modelID, versionID or whatever manufactures decide to include) will be included in sysexData.</li><li>    timestamp           - The timestamp for the command as a string.</li><li>    data                - Raw MIDI Data as Hex String.</li><li>    isVirtual           - `true` if Virtual MIDI Source otherwise `false`.</li><li></li><li>  `systemTimecodeQuarterFrame` - System exclusive (SysEx) command:</li><li>    dataByte1           - Data Byte 1 as integer.</li><li>    dataByte2           - Data Byte 2 as integer.</li><li>    timestamp           - The timestamp for the command as a string.</li><li>    data                - Raw MIDI Data as Hex String.</li><li>    isVirtual           - `true` if Virtual MIDI Source otherwise `false`.</li><li></li><li>  `systemSongPositionPointer` - System song position pointer command:</li><li>    dataByte1           - Data Byte 1 as integer.</li><li>    dataByte2           - Data Byte 2 as integer.</li><li>    timestamp           - The timestamp for the command as a string.</li><li>    data                - Raw MIDI Data as Hex String.</li><li>    isVirtual           - `true` if Virtual MIDI Source otherwise `false`.</li><li></li><li>  `systemSongSelect` - System song select command:</li><li>    dataByte1           - Data Byte 1 as integer.</li><li>    dataByte2           - Data Byte 2 as integer.</li><li>    timestamp           - The timestamp for the command as a string.</li><li>    data                - Raw MIDI Data as Hex String.</li><li>    isVirtual           - `true` if Virtual MIDI Source otherwise `false`.</li><li></li><li>  `systemTuneRequest` - System tune request command:</li><li>    dataByte1           - Data Byte 1 as integer.</li><li>    dataByte2           - Data Byte 2 as integer.</li><li>    timestamp           - The timestamp for the command as a string.</li><li>    data                - Raw MIDI Data as Hex String.</li><li>    isVirtual           - `true` if Virtual MIDI Source otherwise `false`.</li><li></li><li>  `systemTimingClock` - System timing clock command:</li><li>    dataByte1           - Data Byte 1 as integer.</li><li>    dataByte2           - Data Byte 2 as integer.</li><li>    timestamp           - The timestamp for the command as a string.</li><li>    data                - Raw MIDI Data as Hex String.</li><li>    isVirtual           - `true` if Virtual MIDI Source otherwise `false`.</li><li></li><li>  `systemStartSequence` - System timing clock command:</li><li>    dataByte1           - Data Byte 1 as integer.</li><li>    dataByte2           - Data Byte 2 as integer.</li><li>    timestamp           - The timestamp for the command as a string.</li><li>    data                - Raw MIDI Data as Hex String.</li><li>    isVirtual           - `true` if Virtual MIDI Source otherwise `false`.</li><li></li><li>  `systemContinueSequence` - System start sequence command:</li><li>    dataByte1           - Data Byte 1 as integer.</li><li>    dataByte2           - Data Byte 2 as integer.</li><li>    timestamp           - The timestamp for the command as a string.</li><li>    data                - Raw MIDI Data as Hex String.</li><li>    isVirtual           - `true` if Virtual MIDI Source otherwise `false`.</li><li></li><li>  `systemStopSequence` -  System continue sequence command:</li><li>    dataByte1           - Data Byte 1 as integer.</li><li>    dataByte2           - Data Byte 2 as integer.</li><li>    timestamp           - The timestamp for the command as a string.</li><li>    data                - Raw MIDI Data as Hex String.</li><li>    isVirtual           - `true` if Virtual MIDI Source otherwise `false`.</li><li></li><li>  `systemKeepAlive` - System keep alive message:</li><li>    dataByte1           - Data Byte 1 as integer.</li><li>    dataByte2           - Data Byte 2 as integer.</li><li>    timestamp           - The timestamp for the command as a string.</li><li>    data                - Raw MIDI Data as Hex String.</li><li>    isVirtual           - `true` if Virtual MIDI Source otherwise `false`.</li><li></li><li>Example Usage:</li><li>   ```lua</li><li>   midiDevice = hs.midi.new(hs.midi.devices()[3])</li><li>   midiDevice:callback(function(object, deviceName, commandType, description, metadata)</li><li>              print("object: " .. tostring(object))</li><li>              print("deviceName: " .. deviceName)</li><li>              print("commandType: " .. commandType)</li><li>              print("description: " .. description)</li><li>              print("metadata: " .. hs.inspect(metadata))</li><li>              end)```</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/midi/libmidi.m line 446](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/midi/libmidi.m#L446){target="_blank"} |

---


### [displayName](#displayname)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.midi:displayName() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the display name of a `hs.midi` object.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The name as a string.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/midi/libmidi.m line 1421](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/midi/libmidi.m#L1421){target="_blank"} |

---


### [identityRequest](#identityrequest)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.midi:identityRequest() -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sends an Identity Request message to the `hs.midi` device. You can use `hs.midi:callback()` to receive the `systemExclusive` response.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>Example Usage:</li><li>  ```lua</li><li>  midiDevice = hs.midi.new(hs.midi.devices()[3])</li><li>  midiDevice:callback(function(object, deviceName, commandType, description, metadata)</li><li>                        print("object: " .. tostring(object))</li><li>                        print("deviceName: " .. deviceName)</li><li>                        print("commandType: " .. commandType)</li><li>                        print("description: " .. description)</li><li>                        print("metadata: " .. hs.inspect(metadata))</li><li>                      end)</li><li>  midiDevice:identityRequest()```</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/midi/libmidi.m line 1341](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/midi/libmidi.m#L1341){target="_blank"} |

---


### [isOnline](#isonline)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.midi:isOnline() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the online status of a `hs.midi` object.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if online, otherwise `false`</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/midi/libmidi.m line 1475](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/midi/libmidi.m#L1475){target="_blank"} |

---


### [isVirtual](#isvirtual)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.midi:isVirtual() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns `true` if an `hs.midi` object is virtual, otherwise `false`.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if virtual, otherwise `false`</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/midi/libmidi.m line 1492](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/midi/libmidi.m#L1492){target="_blank"} |

---


### [manufacturer](#manufacturer)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.midi:manufacturer() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the manufacturer name of a `hs.midi` object.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The manufacturer name as a string.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/midi/libmidi.m line 1457](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/midi/libmidi.m#L1457){target="_blank"} |

---


### [model](#model)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.midi:model() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the model name of a `hs.midi` object.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The model name as a string.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/midi/libmidi.m line 1439](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/midi/libmidi.m#L1439){target="_blank"} |

---


### [name](#name)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.midi:name() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the name of a `hs.midi` object.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The name as a string.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/midi/libmidi.m line 1403](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/midi/libmidi.m#L1403){target="_blank"} |

---


### [sendCommand](#sendcommand)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.midi:sendCommand(commandType, metadata) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sends a command to the `hs.midi` object.                                                                     |
| **Parameters**                              | <ul><li>`commandType`    - The type of command you want to send as a string. See `hs.midi.commandTypes[]`.</li><li>`metadata`       - A table of data for the MIDI command (see notes below).</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful, otherwise `false`</li></ul>          |
| **Notes**                                   | <ul><li>The `metadata` table can accept following, depending on the `commandType` supplied:</li><li></li><li>  `noteOff` - Note off command:</li><li>    note                - The note number for the command. Must be between 0 and 127. Defaults to 0.</li><li>    velocity            - The velocity for the command. Must be between 0 and 127. Defaults to 0.</li><li>    channel             - The channel for the command. Must be a number between 0 and 16. Defaults to 0, which sends the command to All Channels.</li><li></li><li>  `noteOn` - Note on command:</li><li>    note                - The note number for the command. Must be between 0 and 127. Defaults to 0.</li><li>    velocity            - The velocity for the command. Must be between 0 and 127. Defaults to 0.</li><li>    channel             - The channel for the command. Must be a number between 0 and 16. Defaults to 0, which sends the command to All Channels.</li><li></li><li>  `polyphonicKeyPressure` - Polyphonic key pressure command:</li><li>    note                - The note number for the command. Must be between 0 and 127. Defaults to 0.</li><li>    pressure            - Key pressure of the polyphonic key pressure message. In the range 0-127. Defaults to 0.</li><li>    channel             - The channel for the command. Must be a number between 0 and 16. Defaults to 0, which sends the command to All Channels.</li><li></li><li>  `controlChange` - Control change command. This is the most common command sent by MIDI controllers:</li><li>    controllerNumber    - The MIDI control number for the command. Defaults to 0.</li><li>    controllerValue     - The controllerValue of the command. Only the lower 7-bits of this are used. Defaults to 0.</li><li>    channel             - The channel for the command. Must be a number between 0 and 16. Defaults to 0, which sends the command to All Channels.</li><li>    fourteenBitValue    - The 14-bit value of the command. Must be between 0 and 16383. Defaults to 0. `fourteenBitCommand` must be `true`.</li><li>    fourteenBitCommand  - `true` if the command contains 14-bit value data otherwise, `false`. `controllerValue` will be ignored if this is set to `true`.</li><li></li><li>  `programChange` - Program change command:</li><li>    programNumber       - The program (aka patch) number. From 0-127. Defaults to 0.</li><li>    channel             - The channel for the command. Must be a number between 0 and 16. Defaults to 0, which sends the command to All Channels.</li><li></li><li>  `channelPressure` - Channel pressure command:</li><li>    pressure            - Key pressure of the channel pressure message. In the range 0-127. Defaults to 0.</li><li>    channel             - The channel for the command. Must be a number between 0 and 16. Defaults to 0, which sends the command to All Channels.</li><li></li><li>  `pitchWheelChange` - Pitch wheel change command:</li><li>    pitchChange         -  A 14-bit value indicating the pitch bend. Center is 0x2000 (8192). Valid range is from 0-16383. Defaults to 0.</li><li>    channel             - The channel for the command. Must be a number between 0 and 16. Defaults to 0, which sends the command to All Channels.</li><li></li><li>Example Usage:</li><li>    ```lua</li><li>    midiDevice = hs.midi.new(hs.midi.devices()[1])</li><li>    midiDevice:sendCommand("noteOn", {</li><li>        ["note"] = 72,</li><li>        ["velocity"] = 50,</li><li>        ["channel"] = 0,</li><li>    })</li><li>    hs.timer.usleep(500000)</li><li>    midiDevice:sendCommand("noteOn", {</li><li>        ["note"] = 74,</li><li>        ["velocity"] = 50,</li><li>        ["channel"] = 0,</li><li>    })</li><li>    hs.timer.usleep(500000)</li><li>    midiDevice:sendCommand("noteOn", {</li><li>        ["note"] = 76,</li><li>        ["velocity"] = 50,</li><li>        ["channel"] = 0,</li><li>    })</li><li>    midiDevice:sendCommand("pitchWheelChange", {</li><li>        ["pitchChange"] = 1000,</li><li>        ["channel"] = 0,</li><li>    })</li><li>    hs.timer.usleep(100000)</li><li>    midiDevice:sendCommand("pitchWheelChange", {</li><li>        ["pitchChange"] = 2000,</li><li>        ["channel"] = 0,</li><li>    })</li><li>    hs.timer.usleep(100000)</li><li>    midiDevice:sendCommand("pitchWheelChange", {</li><li>        ["pitchChange"] = 3000,</li><li>        ["channel"] = 0,</li><li>    })```</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/midi/libmidi.m line 1031](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/midi/libmidi.m#L1031){target="_blank"} |

---


### [sendSysex](#sendsysex)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.midi:sendSysex(command) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sends a System Exclusive Command to the `hs.midi` object.                                                                     |
| **Parameters**                              | <ul><li>`command` - The system exclusive command you wish to send as a string. White spaces in the string will be ignored.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>Example Usage:</li><li>   ```lua</li><li>   midiDevice:sendSysex("f07e7f06 01f7")```</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/midi/libmidi.m line 1009](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/midi/libmidi.m#L1009){target="_blank"} |

---


### [synthesize](#synthesize)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.midi:synthesize([value]) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Set or display whether or not the MIDI device should synthesize audio on your computer.                                                                     |
| **Parameters**                              | <ul><li>[value] - `true` if you want to synthesize audio, otherwise `false`.</li></ul> |
| **Returns**                                 | <ul><li>`true` if enabled otherwise `false`</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/midi/libmidi.m line 1375](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/midi/libmidi.m#L1375){target="_blank"} |

---

