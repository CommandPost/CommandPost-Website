# plugins.finalcutpro.notifications.manager

Notifications Manager Plugin.

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [manager](#manager)

**Variables** - _Configurable values_
 * [watchers](#watchers)

**Functions** - _API calls offered directly by the extension_
 * [unwatch](#unwatch)
 * [watch](#watch)


---

## API Documentation

#### Constants


### [manager](#manager)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.notifications.manager -> table`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Event Types                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/plugins/finalcutpro/notifications/manager.lua line 16](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/notifications/manager.lua#L16) |

---

#### Variables


### [watchers](#watchers)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.notifications.manager.watchers -> watcher`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Watchers                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/plugins/finalcutpro/notifications/manager.lua line 139](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/notifications/manager.lua#L139) |

---

#### Functions


### [unwatch](#unwatch)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.notifications.manager.unwatch(id) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Start Watchers                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the watcher to unwatch as string</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/finalcutpro/notifications/manager.lua line 159](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/notifications/manager.lua#L159) |

---


### [watch](#watch)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.notifications.manager.watch(event) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Start Watchers                                                                     |
| **Parameters**                              | <ul><li>events - Events to watch</li></ul> |
| **Returns**                                 | <ul><li>The ID of the watcher as string</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/finalcutpro/notifications/manager.lua line 144](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/notifications/manager.lua#L144) |

---

