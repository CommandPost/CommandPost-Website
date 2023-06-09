# plugins.finalcutpro.notifications.manager

Notifications Manager Plugin.

## API Overview
### **Constants** - _Useful values which cannot be changed_
 * [manager](#manager)

### **Variables** - _Configurable values_
 * [watchers](#watchers)

### **Functions** - _API calls offered directly by the extension_
 * [unwatch](#unwatch)
 * [watch](#watch)


## API Documentation

### Constants


### [manager](#manager)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.notifications.manager -> table`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Event Types                                                                     |

---
### Variables


### [watchers](#watchers)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.notifications.manager.watchers -> watcher`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Watchers                                                                     |

---
### Functions


### [unwatch](#unwatch)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.notifications.manager.unwatch(id) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Start Watchers                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the watcher to unwatch as string</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [watch](#watch)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.notifications.manager.watch(event) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Start Watchers                                                                     |
| **Parameters**                              | <ul><li>events - Events to watch</li></ul> |
| **Returns**                                 | <ul><li>The ID of the watcher as string</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
