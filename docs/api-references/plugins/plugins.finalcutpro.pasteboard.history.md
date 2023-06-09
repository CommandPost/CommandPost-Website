# plugins.finalcutpro.pasteboard.history

Pasteboard History

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [FILE_NAME](#file_name)
 * [FOLDER_NAME](#folder_name)
 * [HISTORY_MAXIMUM_SIZE](#history_maximum_size)

**Functions** - _API calls offered directly by the extension_
 * [addHistoryItem](#addhistoryitem)
 * [clearHistory](#clearhistory)
 * [doPasteHistoryItem](#dopastehistoryitem)
 * [init](#init)
 * [update](#update)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [_history](#_history)
 * [enabled](#enabled)


---

## API Documentation

#### Constants


### [FILE_NAME](#file_name)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.history.FILE_NAME -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | File name of settings file.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/history.lua line 25](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/history.lua#L25) |

---


### [FOLDER_NAME](#folder_name)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.history.FOLDER_NAME -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Folder Name where settings file is contained.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/history.lua line 30](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/history.lua#L30) |

---


### [HISTORY_MAXIMUM_SIZE](#history_maximum_size)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.history.HISTORY_MAXIMUM_SIZE -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Maximum Size of Pasteboard History                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/history.lua line 35](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/history.lua#L35) |

---

#### Functions


### [addHistoryItem](#addhistoryitem)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.history.addHistoryItem(data, label) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Adds an item to the Pasteboard history.                                                                     |
| **Parameters**                              | <ul><li>data - The data</li><li>label - The label</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/history.lua line 63](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/history.lua#L63) |

---


### [clearHistory](#clearhistory)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.history.clearHistory() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Clears the Pasteboard History.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/history.lua line 50](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/history.lua#L50) |

---


### [doPasteHistoryItem](#dopastehistoryitem)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.history.doPasteHistoryItem(index) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a function which will paste a Pasteboard History Item when executed.                                                                     |
| **Parameters**                              | <ul><li>index - The index of the Pasteboard history item.</li></ul> |
| **Returns**                                 | <ul><li>A [Statement](cp.rx.go.Statement.md) to be executed.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/history.lua line 95](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/history.lua#L95) |

---


### [init](#init)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.history.init(manager) -> Pasteboard History Object`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Initialises the module.                                                                     |
| **Parameters**                              | <ul><li>manager - The Pasteboard manager object.</li></ul> |
| **Returns**                                 | <ul><li>Pasteboard History Object</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/history.lua line 191](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/history.lua#L191) |

---


### [update](#update)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.history.update() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Enable or disable the Pasteboard History.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/history.lua line 167](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/history.lua#L167) |

---

#### Fields


### [_history](#_history)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.history._history <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Contains all the saved Touch Bar Buttons                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/history.lua line 45](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/history.lua#L45) |

---


### [enabled](#enabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.history.enabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Enable or disable the Pasteboard History.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/pasteboard/history.lua line 40](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/pasteboard/history.lua#L40) |

---

