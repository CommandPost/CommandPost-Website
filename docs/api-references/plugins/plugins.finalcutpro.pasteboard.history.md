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

### Constants


### [FILE_NAME](#file_name)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.history.FILE_NAME -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | File name of settings file.                                                                     |

---

### [FOLDER_NAME](#folder_name)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.history.FOLDER_NAME -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Folder Name where settings file is contained.                                                                     |

---

### [HISTORY_MAXIMUM_SIZE](#history_maximum_size)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.history.HISTORY_MAXIMUM_SIZE -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Maximum Size of Pasteboard History                                                                     |

---
### Functions


### [addHistoryItem](#addhistoryitem)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.history.addHistoryItem(data, label) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Adds an item to the Pasteboard history.                                                                     |
| **Parameters**                              | <ul><li>data - The data</li><li>label - The label</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [clearHistory](#clearhistory)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.history.clearHistory() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Clears the Pasteboard History.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [doPasteHistoryItem](#dopastehistoryitem)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.history.doPasteHistoryItem(index) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a function which will paste a Pasteboard History Item when executed.                                                                     |
| **Parameters**                              | <ul><li>index - The index of the Pasteboard history item.</li></ul> |
| **Returns**                                 | <ul><li>A [Statement](cp.rx.go.Statement.md) to be executed.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [init](#init)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.history.init(manager) -> Pasteboard History Object`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Initialises the module.                                                                     |
| **Parameters**                              | <ul><li>manager - The Pasteboard manager object.</li></ul> |
| **Returns**                                 | <ul><li>Pasteboard History Object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [update](#update)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.history.update() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Enable or disable the Pasteboard History.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Fields


### [_history](#_history)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.history._history <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Contains all the saved Touch Bar Buttons                                                                     |

---

### [enabled](#enabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.pasteboard.history.enabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Enable or disable the Pasteboard History.                                                                     |

---
