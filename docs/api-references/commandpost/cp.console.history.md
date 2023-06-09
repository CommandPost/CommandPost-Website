# cp.console.history

Console History Manager.

Based on code by @asmagill
https://github.com/asmagill/hammerspoon-config-take2/blob/master/utils/_actions/consoleHistory.lua

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [clearHistory](#clearhistory)
 * [history](#history)
 * [init](#init)
 * [pruneHistory](#prunehistory)
 * [retrieveHistory](#retrievehistory)
 * [saveHistory](#savehistory)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [cache](#cache)


---

## API Documentation

### Functions


### [clearHistory](#clearhistory)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.console.history.clearHistory() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Clears the Console History.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [history](#history)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.console.history.history(toFind) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets a history item.                                                                     |
| **Parameters**                              | <ul><li>toFind - Number of the item to find.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [init](#init)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.console.history.init() -> self`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Initialise the module.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Self</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [pruneHistory](#prunehistory)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.console.history.pruneHistory() -> number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Prune History                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Current History Count</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [retrieveHistory](#retrievehistory)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.console.history.retrieveHistory() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Retrieve's the Console History.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [saveHistory](#savehistory)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.console.history.saveHistory() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Saves the Console History.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Fields


### [cache](#cache)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.console.history.cache <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Console History Cache                                                                     |

---
