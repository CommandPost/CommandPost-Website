# plugins.core.action.manager

Action Manager Module.

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [handlerIds](#handlerids)
 * [handlers](#handlers)

**Functions** - _API calls offered directly by the extension_
 * [addHandler](#addhandler)
 * [getActivator](#getactivator)
 * [getHandler](#gethandler)
 * [getURL](#geturl)
 * [init](#init)


---

## API Documentation

### Constants


### [handlerIds](#handlerids)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.manager.handlerIds <cp.prop: table of strings; read-only>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Returns a list of registered handler IDs.                                                                     |

---

### [handlers](#handlers)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.manager.handlers <cp.prop: table of handlers; read-only>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Provides access to the set of handlers registered with the manager. It                                                                     |

---
### Functions


### [addHandler](#addhandler)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.manager.addHandler(id, group, label) -> handler`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Adds a new action handler with the specified unique ID and returns it for further configuration.                                                                     |
| **Parameters**                              | <ul><li>`id`		- The unique ID</li><li>`group`   - The group the handler belongs to.</li><li>`label`   - An optional label for the handler (over-riding a supplied i18n value)</li></ul> |
| **Returns**                                 | <ul><li>The `handler` instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getActivator](#getactivator)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.manager.getActivator(id) -> activator`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns an activator with the specified ID. If it doesn't exist, it will be created. Future calls to get the same ID, and it will return the same instance each time.                                                                     |
| **Parameters**                              | <ul><li>`activatorId`		- The unique ID of the activator.</li></ul> |
| **Returns**                                 | <ul><li>The activator with the specified ID.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getHandler](#gethandler)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.manager.getHandler(id) -> handler`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns an existing handler with the specified ID.                                                                     |
| **Parameters**                              | <ul><li>`id`			- The unique ID of the action handler.</li></ul> |
| **Returns**                                 | <ul><li>The action handler, or `nil`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getURL](#geturl)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.manager.getURL(handlerId, action) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets a URL based on the Handler ID & Action Table.                                                                     |
| **Parameters**                              | <ul><li>`handlerId` - The Handler ID</li><li>`action` The action table</li></ul> |
| **Returns**                                 | <ul><li>A string</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [init](#init)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.manager.init() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Initialises the module.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
