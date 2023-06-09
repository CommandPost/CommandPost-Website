# plugins.finalcutpro.pasteboard.manager

Pasteboard Manager.

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [NUMBER_OF_PASTEBOARD_BUFFERS](#number_of_pasteboard_buffers)
 * [RESTART_DELAY](#restart_delay)

**Variables** - _Configurable values_
 * [excludedClassnames](#excludedclassnames)
 * [WATCHER_FREQUENCY](#watcher_frequency)

**Functions** - _API calls offered directly by the extension_
 * [copyWithCustomClipName](#copywithcustomclipname)
 * [doDecodeBuffer](#dodecodebuffer)
 * [doRestoreFromBuffer](#dorestorefrombuffer)
 * [doSaveToBuffer](#dosavetobuffer)
 * [doWaitForData](#dowaitfordata)
 * [doWaitForFreshData](#dowaitforfreshdata)
 * [getClassname](#getclassname)
 * [isTimelineClip](#istimelineclip)
 * [ninjaPasteboardCopy](#ninjapasteboardcopy)
 * [overrideNextClipName](#overridenextclipname)
 * [processArray](#processarray)
 * [processContent](#processcontent)
 * [processObject](#processobject)
 * [readFCPXData](#readfcpxdata)
 * [startWatching](#startwatching)
 * [stopWatching](#stopwatching)
 * [supportsContainedItems](#supportscontaineditems)
 * [unarchiveFCPXData](#unarchivefcpxdata)
 * [unwatch](#unwatch)
 * [watch](#watch)
 * [writeFCPXData](#writefcpxdata)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [buffer](#buffer)
 * [watching](#watching)


---

## API Documentation

#### Constants


### [NUMBER_OF_PASTEBOARD_BUFFERS](#number_of_pasteboard_buffers)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.NUMBER_OF_PASTEBOARD_BUFFERS -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Number of Pasteboard Buffers.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/manager.lua line 66](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/manager.lua#L66){target="_blank"} |

---


### [RESTART_DELAY](#restart_delay)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.RESTART_DELAY -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | How long to wait until we restart any Pasteboard Watchers in milliseconds.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/manager.lua line 71](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/manager.lua#L71){target="_blank"} |

---

#### Variables


### [excludedClassnames](#excludedclassnames)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.excludedClassnames -> table`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Table of data we don't want to count when copying.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/manager.lua line 76](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/manager.lua#L76){target="_blank"} |

---


### [WATCHER_FREQUENCY](#watcher_frequency)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.WATCHER_FREQUENCY -> number`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | The Pasteboard Watcher Update frequency.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/manager.lua line 61](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/manager.lua#L61){target="_blank"} |

---

#### Functions


### [copyWithCustomClipName](#copywithcustomclipname)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.copyWithCustomClipName() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Copy with custom label.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/manager.lua line 270](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/manager.lua#L270){target="_blank"} |

---


### [doDecodeBuffer](#dodecodebuffer)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.doDecodeBuffer(id) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) which decodes the buffer with the specified ID.                                                                     |
| **Parameters**                              | <ul><li>id        - The ID to decode</li></ul> |
| **Returns**                                 | <ul><li>A [Statement](cp.rx.go.Statement.md) that sends the decoded buffer, or throws an error if not available.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/manager.lua line 605](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/manager.lua#L605){target="_blank"} |

---


### [doRestoreFromBuffer](#dorestorefrombuffer)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.doRestoreFromBuffer(id) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) which restore a Pasteboard item from the buffer.                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the buffer item.</li></ul> |
| **Returns**                                 | <ul><li>A [Statement](cp.rx.go.Statement.md)</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/manager.lua line 626](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/manager.lua#L626){target="_blank"} |

---


### [doSaveToBuffer](#dosavetobuffer)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.doSaveToBuffer(id) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) which saves a Pasteboard item to the buffer.                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the buffer item.</li></ul> |
| **Returns**                                 | <ul><li>A [Statement](cp.rx.go.Statement.md)</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/manager.lua line 555](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/manager.lua#L555){target="_blank"} |

---


### [doWaitForData](#dowaitfordata)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.doWaitForData(newData) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) which waits for up to 10 seconds for new data to appear on the clipboard. If none is found, an error is sent.                                                                     |
| **Parameters**                              | <ul><li>newData - The new Pasteboard data.</li></ul> |
| **Returns**                                 | <ul><li>A [Statement](cp.rx.go.Statement.md)</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/manager.lua line 535](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/manager.lua#L535){target="_blank"} |

---


### [doWaitForFreshData](#dowaitforfreshdata)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.doWaitForFreshData(oldData) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) which waits for up to 10 seconds for new data to copy to the clipboard. If none is found, an error is sent.                                                                     |
| **Parameters**                              | <ul><li>oldData - The original Pasteboard data.</li></ul> |
| **Returns**                                 | <ul><li>A [Statement](cp.rx.go.Statement.md)</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/manager.lua line 515](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/manager.lua#L515){target="_blank"} |

---


### [getClassname](#getclassname)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.getClassname(data) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets a class anem from data                                                                     |
| **Parameters**                              | <ul><li>data - The data object to process</li></ul> |
| **Returns**                                 | <ul><li>Class name as string</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/manager.lua line 161](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/manager.lua#L161){target="_blank"} |

---


### [isTimelineClip](#istimelineclip)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.isTimelineClip(data) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Is the data a timeline clip.                                                                     |
| **Parameters**                              | <ul><li>data - The pasteboard data you want to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if a timeline clip otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/manager.lua line 86](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/manager.lua#L86){target="_blank"} |

---


### [ninjaPasteboardCopy](#ninjapasteboardcopy)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.ninjaPasteboardCopy() -> boolean, data`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Ninja Pasteboard Copy. Copies something to the pasteboard, then restores the original pasteboard item.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false`</li><li>The pasteboard data</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/manager.lua line 677](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/manager.lua#L677){target="_blank"} |

---


### [overrideNextClipName](#overridenextclipname)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.overrideNextClipName(overrideName) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Overrides the name for the next clip which is copied from FCPX to the specified value. Once the override has been used, the standard clip name via `mod.findClipName(...)` will be used for subsequent copy operations.                                                                     |
| **Parameters**                              | <ul><li>overrideName - The override name.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/manager.lua line 257](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/manager.lua#L257){target="_blank"} |

---


### [processArray](#processarray)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.processArray(data) -> string, number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Processes an 'array' table.                                                                     |
| **Parameters**                              | <ul><li>data - The data object to process</li></ul> |
| **Returns**                                 | <ul><li>The primary clip name as a string.</li><li>The number of clips as number.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/manager.lua line 124](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/manager.lua#L124){target="_blank"} |

---


### [processContent](#processcontent)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.processContent(fcpxData, default) -> string, number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Searches the Pasteboard binary plist data for the first clip name, and returns it.                                                                     |
| **Parameters**                              | <ul><li>fcpxData - The data object to process</li><li>default - The default value</li></ul> |
| **Returns**                                 | <ul><li>Returns the 'default' value if the pasteboard contains a media clip but we could not interpret it, otherwise `nil` if the data did not contain Final Cut Pro Clip data.</li></ul>          |
| **Notes**                                   | <ul><li>Example usage: `local name = mod.findClipName(myFcpxData, "Unknown")`</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/manager.lua line 225](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/manager.lua#L225){target="_blank"} |

---


### [processObject](#processobject)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.processObject(data) -> string, number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Processes the provided data object, which should have a '$class' property.                                                                     |
| **Parameters**                              | <ul><li>data - The pasteboard data you want to check.</li></ul> |
| **Returns**                                 | <ul><li>The primary clip name as a string.</li><li>The number of clips as number.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/manager.lua line 99](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/manager.lua#L99){target="_blank"} |

---


### [readFCPXData](#readfcpxdata)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.readFCPXData() -> data | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Reads Final Cut Pro Data from the Pasteboard as a binary Property List, if present.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The pasteboard data or `nil`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/manager.lua line 289](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/manager.lua#L289){target="_blank"} |

---


### [startWatching](#startwatching)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.startWatching() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Start Watching the Pasteboard.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/manager.lua line 410](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/manager.lua#L410){target="_blank"} |

---


### [stopWatching](#stopwatching)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.stopWatching() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Stop Watching the Pasteboard.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/manager.lua line 486](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/manager.lua#L486){target="_blank"} |

---


### [supportsContainedItems](#supportscontaineditems)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.supportsContainedItems(data) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets whether or not the data supports contained items.                                                                     |
| **Parameters**                              | <ul><li>data - The data object to process</li></ul> |
| **Returns**                                 | <ul><li>`true` if supported otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/manager.lua line 147](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/manager.lua#L147){target="_blank"} |

---


### [unarchiveFCPXData](#unarchivefcpxdata)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.unarchiveFCPXData(fcpxData) -> data | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Unarchive Final Cut Pro data.                                                                     |
| **Parameters**                              | <ul><li>fcpxData - The data object to process</li></ul> |
| **Returns**                                 | <ul><li>The unarchived Final Cut Pro Pasteboard data or `nil`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/manager.lua line 310](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/manager.lua#L310){target="_blank"} |

---


### [unwatch](#unwatch)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.unwatch(id) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Stop a watcher.                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the watcher you want to stop.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/manager.lua line 387](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/manager.lua#L387){target="_blank"} |

---


### [watch](#watch)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.watch(events) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Watch events.                                                                     |
| **Parameters**                              | <ul><li>events - Table of events</li></ul> |
| **Returns**                                 | <ul><li>Table of watchers.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/manager.lua line 360](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/manager.lua#L360){target="_blank"} |

---


### [writeFCPXData](#writefcpxdata)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.writeFCPXData(fcpxData, quiet) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Write Final Cut Pro data to Pasteboard.                                                                     |
| **Parameters**                              | <ul><li>fcpxData - The data to write</li><li>quiet - Whether or not we should stop/start the watcher.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the operation succeeded, otherwise `false` (which most likely means ownership of the pasteboard has changed).</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/manager.lua line 340](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/manager.lua#L340){target="_blank"} |

---

#### Fields


### [buffer](#buffer)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.buffer <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Contains the Pasteboard Buffer.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/manager.lua line 510](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/manager.lua#L510){target="_blank"} |

---


### [watching](#watching)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.watching <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Gets whether or not we're watching the pasteboard as a boolean.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/manager.lua line 503](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/manager.lua#L503){target="_blank"} |

---

