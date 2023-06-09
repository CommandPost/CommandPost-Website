# cp.config.shutdownCallback

Shutdown Callback Module.

## API Overview
* Methods - API calls which can only be made on an object returned by a constructor
 * [callbackFn](#callbackFn)
 * [get](#get)
 * [getAll](#getAll)
 * [id](#id)
 * [new](#new)

## API Documentation

### Methods


### [callbackFn](#callbackFn)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.config.shutdownCallback:callbackFn() -> function`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the callbackFn of the current Shutdown Callback                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The callbackFn of the current Shutdown Callback</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [get](#get)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.config.shutdownCallback:get(id) -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Creates a new Shutdown Callback.                                                                     |
| **Parameters**                              | <ul><li>`id`		- The unique ID for the callback you want to return.</li></ul> |
| **Returns**                                 | <ul><li>table containing the callback</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getAll](#getAll)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.config.shutdownCallback:getAll() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns all of the created Shutdown Callbacks                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>table containing all of the created callbacks</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [id](#id)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.config.shutdownCallback:id() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the ID of the current Shutdown Callback                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The ID of the current Shutdown Callback as a `string`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.config.shutdownCallback:new(id, callbackFn) -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Creates a new Shutdown Callback.                                                                     |
| **Parameters**                              | <ul><li>`id`	- The unique ID for this callback.</li><li>`callbackFn` - The callback function</li></ul> |
| **Returns**                                 | <ul><li>table that has been created</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
