# plugins.finalcutpro.pasteboard.manager

Pasteboard Manager.

## API Overview
* Constants - Useful values which cannot be changed
 * [NUMBER_OF_PASTEBOARD_BUFFERS](#NUMBER_OF_PASTEBOARD_BUFFERS)
 * [RESTART_DELAY](#RESTART_DELAY)
* Variables - Configurable values
 * [excludedClassnames](#excludedClassnames)
 * [WATCHER_FREQUENCY](#WATCHER_FREQUENCY)
* Functions - API calls offered directly by the extension
 * [copyWithCustomClipName](#copyWithCustomClipName)
 * [doDecodeBuffer](#doDecodeBuffer)
 * [doRestoreFromBuffer](#doRestoreFromBuffer)
 * [doSaveToBuffer](#doSaveToBuffer)
 * [doWaitForData](#doWaitForData)
 * [doWaitForFreshData](#doWaitForFreshData)
 * [getClassname](#getClassname)
 * [isTimelineClip](#isTimelineClip)
 * [ninjaPasteboardCopy](#ninjaPasteboardCopy)
 * [overrideNextClipName](#overrideNextClipName)
 * [processArray](#processArray)
 * [processContent](#processContent)
 * [processObject](#processObject)
 * [readFCPXData](#readFCPXData)
 * [startWatching](#startWatching)
 * [stopWatching](#stopWatching)
 * [supportsContainedItems](#supportsContainedItems)
 * [unarchiveFCPXData](#unarchiveFCPXData)
 * [unwatch](#unwatch)
 * [watch](#watch)
 * [writeFCPXData](#writeFCPXData)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [buffer](#buffer)
 * [watching](#watching)

## API Documentation

### Constants

| [NUMBER_OF_PASTEBOARD_BUFFERS](#NUMBER_OF_PASTEBOARD_BUFFERS)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.NUMBER_OF_PASTEBOARD_BUFFERS -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Number of Pasteboard Buffers.                                                                     |

| [RESTART_DELAY](#RESTART_DELAY)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.RESTART_DELAY -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | How long to wait until we restart any Pasteboard Watchers in milliseconds.                                                                     |

### Variables

| [excludedClassnames](#excludedClassnames)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.excludedClassnames -> table`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Table of data we don't want to count when copying.                                                                     |

| [WATCHER_FREQUENCY](#WATCHER_FREQUENCY)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.WATCHER_FREQUENCY -> number`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | The Pasteboard Watcher Update frequency.                                                                     |

### Functions

| [copyWithCustomClipName](#copyWithCustomClipName)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.copyWithCustomClipName() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Copy with custom label.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [doDecodeBuffer](#doDecodeBuffer)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.doDecodeBuffer(id) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) which decodes the buffer with the specified ID.                                                                     |
| **Parameters**                              | <ul><li>id        - The ID to decode</li></ul> |
| **Returns**                                 | <ul><li>A [Statement](cp.rx.go.Statement.md) that sends the decoded buffer, or throws an error if not available.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [doRestoreFromBuffer](#doRestoreFromBuffer)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.doRestoreFromBuffer(id) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) which restore a Pasteboard item from the buffer.                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the buffer item.</li></ul> |
| **Returns**                                 | <ul><li>A [Statement](cp.rx.go.Statement.md)</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [doSaveToBuffer](#doSaveToBuffer)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.doSaveToBuffer(id) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) which saves a Pasteboard item to the buffer.                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the buffer item.</li></ul> |
| **Returns**                                 | <ul><li>A [Statement](cp.rx.go.Statement.md)</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [doWaitForData](#doWaitForData)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.doWaitForData(newData) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) which waits for up to 10 seconds for new data to appear on the clipboard. If none is found, an error is sent.                                                                     |
| **Parameters**                              | <ul><li>newData - The new Pasteboard data.</li></ul> |
| **Returns**                                 | <ul><li>A [Statement](cp.rx.go.Statement.md)</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [doWaitForFreshData](#doWaitForFreshData)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.doWaitForFreshData(oldData) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) which waits for up to 10 seconds for new data to copy to the clipboard. If none is found, an error is sent.                                                                     |
| **Parameters**                              | <ul><li>oldData - The original Pasteboard data.</li></ul> |
| **Returns**                                 | <ul><li>A [Statement](cp.rx.go.Statement.md)</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [getClassname](#getClassname)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.getClassname(data) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets a class anem from data                                                                     |
| **Parameters**                              | <ul><li>data - The data object to process</li></ul> |
| **Returns**                                 | <ul><li>Class name as string</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [isTimelineClip](#isTimelineClip)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.isTimelineClip(data) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Is the data a timeline clip.                                                                     |
| **Parameters**                              | <ul><li>data - The pasteboard data you want to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if a timeline clip otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [ninjaPasteboardCopy](#ninjaPasteboardCopy)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.ninjaPasteboardCopy() -> boolean, data`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Ninja Pasteboard Copy. Copies something to the pasteboard, then restores the original pasteboard item.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false`</li><li>The pasteboard data</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [overrideNextClipName](#overrideNextClipName)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.overrideNextClipName(overrideName) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Overrides the name for the next clip which is copied from FCPX to the specified value. Once the override has been used, the standard clip name via `mod.findClipName(...)` will be used for subsequent copy operations.                                                                     |
| **Parameters**                              | <ul><li>overrideName - The override name.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [processArray](#processArray)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.processArray(data) -> string, number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Processes an 'array' table.                                                                     |
| **Parameters**                              | <ul><li>data - The data object to process</li></ul> |
| **Returns**                                 | <ul><li>The primary clip name as a string.</li><li>The number of clips as number.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [processContent](#processContent)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.processContent(fcpxData, default) -> string, number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Searches the Pasteboard binary plist data for the first clip name, and returns it.                                                                     |
| **Parameters**                              | <ul><li>fcpxData - The data object to process</li><li>default - The default value</li></ul> |
| **Returns**                                 | <ul><li>Returns the 'default' value if the pasteboard contains a media clip but we could not interpret it, otherwise `nil` if the data did not contain Final Cut Pro Clip data.</li></ul>          |
| **Notes**                                   | <ul><li>Example usage: `local name = mod.findClipName(myFcpxData, "Unknown")`</li></ul>                |

| [processObject](#processObject)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.processObject(data) -> string, number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Processes the provided data object, which should have a '$class' property.                                                                     |
| **Parameters**                              | <ul><li>data - The pasteboard data you want to check.</li></ul> |
| **Returns**                                 | <ul><li>The primary clip name as a string.</li><li>The number of clips as number.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [readFCPXData](#readFCPXData)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.readFCPXData() -> data | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Reads Final Cut Pro Data from the Pasteboard as a binary Property List, if present.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The pasteboard data or `nil`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [startWatching](#startWatching)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.startWatching() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Start Watching the Pasteboard.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [stopWatching](#stopWatching)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.stopWatching() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Stop Watching the Pasteboard.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [supportsContainedItems](#supportsContainedItems)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.supportsContainedItems(data) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets whether or not the data supports contained items.                                                                     |
| **Parameters**                              | <ul><li>data - The data object to process</li></ul> |
| **Returns**                                 | <ul><li>`true` if supported otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [unarchiveFCPXData](#unarchiveFCPXData)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.unarchiveFCPXData(fcpxData) -> data | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Unarchive Final Cut Pro data.                                                                     |
| **Parameters**                              | <ul><li>fcpxData - The data object to process</li></ul> |
| **Returns**                                 | <ul><li>The unarchived Final Cut Pro Pasteboard data or `nil`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [unwatch](#unwatch)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.unwatch(id) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Stop a watcher.                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the watcher you want to stop.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [watch](#watch)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.watch(events) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Watch events.                                                                     |
| **Parameters**                              | <ul><li>events - Table of events</li></ul> |
| **Returns**                                 | <ul><li>Table of watchers.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [writeFCPXData](#writeFCPXData)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.writeFCPXData(fcpxData, quiet) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Write Final Cut Pro data to Pasteboard.                                                                     |
| **Parameters**                              | <ul><li>fcpxData - The data to write</li><li>quiet - Whether or not we should stop/start the watcher.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the operation succeeded, otherwise `false` (which most likely means ownership of the pasteboard has changed).</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Fields

| [buffer](#buffer)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.buffer <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Contains the Pasteboard Buffer.                                                                     |

| [watching](#watching)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.manager.watching <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Gets whether or not we're watching the pasteboard as a boolean.                                                                     |

