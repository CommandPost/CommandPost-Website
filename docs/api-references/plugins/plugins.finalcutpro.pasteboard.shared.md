# plugins.finalcutpro.pasteboard.shared

Shared Pasteboard Plugin.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [copyWithCustomClipName](#copywithcustomclipname)
 * [copyWithCustomClipNameAndFolder](#copywithcustomclipnameandfolder)
 * [doDecodeHistoryItem](#dodecodehistoryitem)
 * [doPasteHistoryItem](#dopastehistoryitem)
 * [generateSharedPasteboardMenu](#generatesharedpasteboardmenu)
 * [getFolderNames](#getfoldernames)
 * [getHistory](#gethistory)
 * [getHistoryPath](#gethistorypath)
 * [getLocalFolderName](#getlocalfoldername)
 * [overrideNextFolderName](#overridenextfoldername)
 * [setHistory](#sethistory)
 * [update](#update)
 * [validRootPath](#validrootpath)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [enabled](#enabled)
 * [path](#path)


---

## API Documentation

#### Functions


### [copyWithCustomClipName](#copywithcustomclipname)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.shared.copyWithCustomClipName() -> None`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Triggers a copy with custom clip name action.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/shared.lua line 198](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/shared.lua#L198){target="_blank"} |

---


### [copyWithCustomClipNameAndFolder](#copywithcustomclipnameandfolder)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.shared.copyWithCustomClipNameAndFolder() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Copy with Custom Label & Folder.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/shared.lua line 282](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/shared.lua#L282){target="_blank"} |

---


### [doDecodeHistoryItem](#dodecodehistoryitem)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.shared.doDecodeHistoryItem(folderName, index) -> string | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Decodes a Paste History Item.                                                                     |
| **Parameters**                              | <ul><li>folderName - The folder name</li><li>index - The index of the item you want to decode</li></ul> |
| **Returns**                                 | <ul><li>The decoded Pasteboard History Item or `nil`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/shared.lua line 306](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/shared.lua#L306){target="_blank"} |

---


### [doPasteHistoryItem](#dopastehistoryitem)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.shared.doPasteHistoryItem(folderName, index) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Paste History Item.                                                                     |
| **Parameters**                              | <ul><li>folderName - The folder name</li><li>index - The index of the item you want to paste</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/shared.lua line 330](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/shared.lua#L330){target="_blank"} |

---


### [generateSharedPasteboardMenu](#generatesharedpasteboardmenu)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.shared.generateSharedPasteboardMenu() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Generates the shared pasteboard menu.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The shared pasteboard menu as a table.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/shared.lua line 363](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/shared.lua#L363){target="_blank"} |

---


### [getFolderNames](#getfoldernames)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.shared.getFolderNames() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the list of folder names as an array of strings.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table of folder names.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/shared.lua line 143](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/shared.lua#L143){target="_blank"} |

---


### [getHistory](#gethistory)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.shared.getHistory(folderName) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the history for a supplied folder name.                                                                     |
| **Parameters**                              | <ul><li>folderName - The folder name</li></ul> |
| **Returns**                                 | <ul><li>The history in a table.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/shared.lua line 232](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/shared.lua#L232){target="_blank"} |

---


### [getHistoryPath](#gethistorypath)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.shared.getHistoryPath(folderName, fileExtension) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the History Path.                                                                     |
| **Parameters**                              | <ul><li>folderName - The folder name</li><li>fileExtension - The file extension</li></ul> |
| **Returns**                                 | <ul><li>The history path as a string</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/shared.lua line 217](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/shared.lua#L217){target="_blank"} |

---


### [getLocalFolderName](#getlocalfoldername)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.shared.getLocalFolderName() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the local folder name.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The local folder name as a string.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/shared.lua line 172](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/shared.lua#L172){target="_blank"} |

---


### [overrideNextFolderName](#overridenextfoldername)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.shared.overrideNextFolderName(overrideFolder) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Overrides the folder name for the next clip which is copied from Final Cut Pro to the specified value. Once the override has been used, the standard folder name via `mod.getLocalFolderName()` will be used for subsequent copy operations.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The local folder name as a string.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/shared.lua line 185](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/shared.lua#L185){target="_blank"} |

---


### [setHistory](#sethistory)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.shared.setHistory(folderName) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Clears the history.                                                                     |
| **Parameters**                              | <ul><li>folderName - The folder name</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/shared.lua line 269](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/shared.lua#L269){target="_blank"} |

---


### [update](#update)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.shared.update() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Starts or stops the Shared Pasteboard watcher.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/shared.lua line 112](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/shared.lua#L112){target="_blank"} |

---


### [validRootPath](#validrootpath)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.shared.validRootPath() -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets whether or not the current root path exists.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if it exists otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/shared.lua line 51](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/shared.lua#L51){target="_blank"} |

---

#### Fields


### [enabled](#enabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.shared.enabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Gets whether or not the shared pasteboard is enabled as a boolean.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/shared.lua line 41](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/shared.lua#L41){target="_blank"} |

---


### [path](#path)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.shared.path <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Shared Pasteboard Root Path.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/shared.lua line 46](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/shared.lua#L46){target="_blank"} |

---

