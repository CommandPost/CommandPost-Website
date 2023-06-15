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
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/manager.lua line 67](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/manager.lua#L67){target="_blank"} |

---


### [RESTART_DELAY](#restart_delay)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.RESTART_DELAY -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | How long to wait until we restart any Pasteboard Watchers in milliseconds.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/manager.lua line 72](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/manager.lua#L72){target="_blank"} |

---

#### Variables


### [excludedClassnames](#excludedclassnames)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.excludedClassnames -> table`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Table of data we don't want to count when copying.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/manager.lua line 77](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/manager.lua#L77){target="_blank"} |

---


### [WATCHER_FREQUENCY](#watcher_frequency)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.WATCHER_FREQUENCY -> number`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | The Pasteboard Watcher Update frequency.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/manager.lua line 62](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/manager.lua#L62){target="_blank"} |

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
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/manager.lua line 271](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/manager.lua#L271){target="_blank"} |

---


### [doDecodeBuffer](#dodecodebuffer)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.doDecodeBuffer(id) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) which decodes the buffer with the specified ID.                                                                     |
| **Parameters**                              | <ul><li>id        - The ID to decode</li></ul> |
| **Returns**                                 | <ul><li>A [Statement](cp.rx.go.Statement.md) that sends the decoded buffer, or throws an error if not available.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/manager.lua line 601](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/manager.lua#L601){target="_blank"} |

---


### [doRestoreFromBuffer](#dorestorefrombuffer)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.doRestoreFromBuffer(id) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) which restore a Pasteboard item from the buffer.                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the buffer item.</li></ul> |
| **Returns**                                 | <ul><li>A [Statement](cp.rx.go.Statement.md)</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/manager.lua line 622](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/manager.lua#L622){target="_blank"} |

---


### [doSaveToBuffer](#dosavetobuffer)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.doSaveToBuffer(id) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) which saves a Pasteboard item to the buffer.                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the buffer item.</li></ul> |
| **Returns**                                 | <ul><li>A [Statement](cp.rx.go.Statement.md)</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/manager.lua line 551](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/manager.lua#L551){target="_blank"} |

---


### [doWaitForData](#dowaitfordata)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.doWaitForData(newData) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) which waits for up to 10 seconds for new data to appear on the clipboard. If none is found, an error is sent.                                                                     |
| **Parameters**                              | <ul><li>newData - The new Pasteboard data.</li></ul> |
| **Returns**                                 | <ul><li>A [Statement](cp.rx.go.Statement.md)</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/manager.lua line 531](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/manager.lua#L531){target="_blank"} |

---


### [doWaitForFreshData](#dowaitforfreshdata)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.doWaitForFreshData(oldData) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) which waits for up to 10 seconds for new data to copy to the clipboard. If none is found, an error is sent.                                                                     |
| **Parameters**                              | <ul><li>oldData - The original Pasteboard data.</li></ul> |
| **Returns**                                 | <ul><li>A [Statement](cp.rx.go.Statement.md)</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/manager.lua line 511](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/manager.lua#L511){target="_blank"} |

---


### [getClassname](#getclassname)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.getClassname(data) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets a class anem from data                                                                     |
| **Parameters**                              | <ul><li>data - The data object to process</li></ul> |
| **Returns**                                 | <ul><li>Class name as string</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/manager.lua line 162](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/manager.lua#L162){target="_blank"} |

---


### [isTimelineClip](#istimelineclip)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.isTimelineClip(data) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Is the data a timeline clip.                                                                     |
| **Parameters**                              | <ul><li>data - The pasteboard data you want to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if a timeline clip otherwise `false`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/manager.lua line 87](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/manager.lua#L87){target="_blank"} |

---


### [ninjaPasteboardCopy](#ninjapasteboardcopy)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.ninjaPasteboardCopy() -> boolean, data`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Ninja Pasteboard Copy. Copies something to the pasteboard, then restores the original pasteboard item.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false`</li><li>The pasteboard data</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/manager.lua line 673](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/manager.lua#L673){target="_blank"} |

---


### [overrideNextClipName](#overridenextclipname)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.overrideNextClipName(overrideName) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Overrides the name for the next clip which is copied from FCPX to the specified value. Once the override has been used, the standard clip name via `mod.findClipName(...)` will be used for subsequent copy operations.                                                                     |
| **Parameters**                              | <ul><li>overrideName - The override name.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/manager.lua line 258](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/manager.lua#L258){target="_blank"} |

---


### [processArray](#processarray)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.processArray(data) -> string, number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Processes an 'array' table.                                                                     |
| **Parameters**                              | <ul><li>data - The data object to process</li></ul> |
| **Returns**                                 | <ul><li>The primary clip name as a string.</li><li>The number of clips as number.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/manager.lua line 125](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/manager.lua#L125){target="_blank"} |

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
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/manager.lua line 226](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/manager.lua#L226){target="_blank"} |

---


### [processObject](#processobject)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.processObject(data) -> string, number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Processes the provided data object, which should have a '$class' property.                                                                     |
| **Parameters**                              | <ul><li>data - The pasteboard data you want to check.</li></ul> |
| **Returns**                                 | <ul><li>The primary clip name as a string.</li><li>The number of clips as number.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/manager.lua line 100](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/manager.lua#L100){target="_blank"} |

---


### [readFCPXData](#readfcpxdata)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.readFCPXData() -> data | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Reads Final Cut Pro Data from the Pasteboard as a binary Property List, if present.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The pasteboard data or `nil`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/manager.lua line 290](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/manager.lua#L290){target="_blank"} |

---


### [startWatching](#startwatching)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.startWatching() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Start Watching the Pasteboard.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/manager.lua line 411](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/manager.lua#L411){target="_blank"} |

---


### [stopWatching](#stopwatching)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.stopWatching() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Stop Watching the Pasteboard.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/manager.lua line 487](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/manager.lua#L487){target="_blank"} |

---


### [supportsContainedItems](#supportscontaineditems)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.supportsContainedItems(data) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets whether or not the data supports contained items.                                                                     |
| **Parameters**                              | <ul><li>data - The data object to process</li></ul> |
| **Returns**                                 | <ul><li>`true` if supported otherwise `false`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/manager.lua line 148](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/manager.lua#L148){target="_blank"} |

---


### [unarchiveFCPXData](#unarchivefcpxdata)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.unarchiveFCPXData(fcpxData) -> data | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Unarchive Final Cut Pro data.                                                                     |
| **Parameters**                              | <ul><li>fcpxData - The data object to process</li></ul> |
| **Returns**                                 | <ul><li>The unarchived Final Cut Pro Pasteboard data or `nil`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/manager.lua line 311](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/manager.lua#L311){target="_blank"} |

---


### [unwatch](#unwatch)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.unwatch(id) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Stop a watcher.                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the watcher you want to stop.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/manager.lua line 388](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/manager.lua#L388){target="_blank"} |

---


### [watch](#watch)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.watch(events) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Watch events.                                                                     |
| **Parameters**                              | <ul><li>events - Table of events</li></ul> |
| **Returns**                                 | <ul><li>Table of watchers.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/manager.lua line 361](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/manager.lua#L361){target="_blank"} |

---


### [writeFCPXData](#writefcpxdata)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.writeFCPXData(fcpxData, quiet) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Write Final Cut Pro data to Pasteboard.                                                                     |
| **Parameters**                              | <ul><li>fcpxData - The data to write</li><li>quiet - Whether or not we should stop/start the watcher.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the operation succeeded, otherwise `false` (which most likely means ownership of the pasteboard has changed).</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/manager.lua line 341](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/manager.lua#L341){target="_blank"} |

---

#### Fields


### [watching](#watching)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.watching <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Gets whether or not we're watching the pasteboard as a boolean.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/manager.lua line 504](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/manager.lua#L504){target="_blank"} |

---

