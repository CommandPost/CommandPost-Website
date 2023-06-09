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

#### Functions


### [clearHistory](#clearhistory)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.console.history.clearHistory() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Clears the Console History.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/console/history.lua line 62](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/console/history.lua#L62){target="_blank"} |

---


### [history](#history)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.console.history.history(toFind) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets a history item.                                                                     |
| **Parameters**                              | <ul><li>toFind - Number of the item to find.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/console/history.lua line 128](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/console/history.lua#L128){target="_blank"} |

---


### [init](#init)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.console.history.init() -> self`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Initialise the module.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Self</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/console/history.lua line 164](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/console/history.lua#L164){target="_blank"} |

---


### [pruneHistory](#prunehistory)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.console.history.pruneHistory() -> number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Prune History                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Current History Count</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/console/history.lua line 113](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/console/history.lua#L113){target="_blank"} |

---


### [retrieveHistory](#retrievehistory)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.console.history.retrieveHistory() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Retrieve's the Console History.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/console/history.lua line 97](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/console/history.lua#L97){target="_blank"} |

---


### [saveHistory](#savehistory)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.console.history.saveHistory() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Saves the Console History.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/console/history.lua line 75](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/console/history.lua#L75){target="_blank"} |

---

#### Fields


### [cache](#cache)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.console.history.cache <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Console History Cache                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/console/history.lua line 36](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/console/history.lua#L36){target="_blank"} |

---

