# cp.config.dockIconClickCallback

Callback which triggers when the CommandPost Dock Icon is clicked

## API Overview
### **Methods** - _API calls which can only be made on an object returned by a constructor_
 * [callbackFn](#callbackfn)
 * [get](#get)
 * [getAll](#getall)
 * [id](#id)
 * [new](#new)


## API Documentation

### Methods


### [callbackFn](#callbackfn)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.config.dockIconClickCallback:callbackFn() -> function`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the callbackFn of the current Dock Icon Click Callback                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The callbackFn of the current Shutdown Callback</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [get](#get)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.config.dockIconClickCallback:get(id) -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Creates a new Dock Icon Click Callback.                                                                     |
| **Parameters**                              | <ul><li>`id`		- The unique ID for the callback you want to return.</li></ul> |
| **Returns**                                 | <ul><li>table containing the callback</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getAll](#getall)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.config.dockIconClickCallback:getAll() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns all of the created Dock Icon Click Callbacks                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>table containing all of the created callbacks</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [id](#id)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.config.dockIconClickCallback:id() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the ID of the current Dock Icon Click Callback                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The ID of the current File Dropped to Dock Icon Callback as a `string`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.config.dockIconClickCallback:new(id, callbackFn) -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Creates a new File Dropped to Dock Icon Callback.                                                                     |
| **Parameters**                              | <ul><li>`id` - The unique ID for this callback.</li><li>`callbackFn` - The callback function</li></ul> |
| **Returns**                                 | <ul><li>table that has been created</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
