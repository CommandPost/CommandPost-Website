# plugins.finalcutpro.pasteboard.shared

Shared Pasteboard Plugin.

## API Overview
* Functions - API calls offered directly by the extension
 * [copyWithCustomClipName](#copyWithCustomClipName)
 * [copyWithCustomClipNameAndFolder](#copyWithCustomClipNameAndFolder)
 * [doDecodeHistoryItem](#doDecodeHistoryItem)
 * [doPasteHistoryItem](#doPasteHistoryItem)
 * [generateSharedPasteboardMenu](#generateSharedPasteboardMenu)
 * [getFolderNames](#getFolderNames)
 * [getHistory](#getHistory)
 * [getHistoryPath](#getHistoryPath)
 * [getLocalFolderName](#getLocalFolderName)
 * [overrideNextFolderName](#overrideNextFolderName)
 * [setHistory](#setHistory)
 * [update](#update)
 * [validRootPath](#validRootPath)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [enabled](#enabled)
 * [path](#path)

## API Documentation

### Functions

| [copyWithCustomClipName](#copyWithCustomClipName)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.shared.copyWithCustomClipName() -> None`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Triggers a copy with custom clip name action.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [copyWithCustomClipNameAndFolder](#copyWithCustomClipNameAndFolder)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.shared.copyWithCustomClipNameAndFolder() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Copy with Custom Label & Folder.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [doDecodeHistoryItem](#doDecodeHistoryItem)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.shared.doDecodeHistoryItem(folderName, index) -> string | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Decodes a Paste History Item.                                                                     |
| **Parameters**                              | <ul><li>folderName - The folder name</li><li>index - The index of the item you want to decode</li></ul> |
| **Returns**                                 | <ul><li>The decoded Pasteboard History Item or `nil`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [doPasteHistoryItem](#doPasteHistoryItem)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.shared.doPasteHistoryItem(folderName, index) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Paste History Item.                                                                     |
| **Parameters**                              | <ul><li>folderName - The folder name</li><li>index - The index of the item you want to paste</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [generateSharedPasteboardMenu](#generateSharedPasteboardMenu)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.shared.generateSharedPasteboardMenu() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Generates the shared pasteboard menu.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The shared pasteboard menu as a table.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [getFolderNames](#getFolderNames)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.shared.getFolderNames() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the list of folder names as an array of strings.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table of folder names.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [getHistory](#getHistory)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.shared.getHistory(folderName) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the history for a supplied folder name.                                                                     |
| **Parameters**                              | <ul><li>folderName - The folder name</li></ul> |
| **Returns**                                 | <ul><li>The history in a table.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [getHistoryPath](#getHistoryPath)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.shared.getHistoryPath(folderName, fileExtension) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the History Path.                                                                     |
| **Parameters**                              | <ul><li>folderName - The folder name</li><li>fileExtension - The file extension</li></ul> |
| **Returns**                                 | <ul><li>The history path as a string</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [getLocalFolderName](#getLocalFolderName)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.shared.getLocalFolderName() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the local folder name.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The local folder name as a string.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [overrideNextFolderName](#overrideNextFolderName)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.shared.overrideNextFolderName(overrideFolder) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Overrides the folder name for the next clip which is copied from Final Cut Pro to the specified value. Once the override has been used, the standard folder name via `mod.getLocalFolderName()` will be used for subsequent copy operations.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The local folder name as a string.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [setHistory](#setHistory)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.shared.setHistory(folderName) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Clears the history.                                                                     |
| **Parameters**                              | <ul><li>folderName - The folder name</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [update](#update)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.shared.update() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Starts or stops the Shared Pasteboard watcher.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [validRootPath](#validRootPath)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.shared.validRootPath() -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets whether or not the current root path exists.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if it exists otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Fields

| [enabled](#enabled)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.shared.enabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Gets whether or not the shared pasteboard is enabled as a boolean.                                                                     |

| [path](#path)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.shared.path <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Shared Pasteboard Root Path.                                                                     |

