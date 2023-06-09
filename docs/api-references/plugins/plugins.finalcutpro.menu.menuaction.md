# plugins.finalcutpro.menu.menuaction

A `action` which will trigger an Final Cut Pro menu with a matching path, if available/enabled.
Registers itself with the `plugins.core.actions.actionmanager`.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [actionId](#actionid)
 * [init](#init)


---

## API Documentation

#### Functions


### [actionId](#actionid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.menu.menuaction.actionId(params) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the action ID from the parameters table.                                                                     |
| **Parameters**                              | <ul><li>params - Parameters table.</li></ul> |
| **Returns**                                 | <ul><li>Action ID as string.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/finalcutpro/menu/menuaction.lua line 56](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/menu/menuaction.lua#L56) |

---


### [init](#init)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.menu.menuaction.init(actionmanager) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Initialises the Menu Action plugin                                                                     |
| **Parameters**                              | <ul><li>`actionmanager` - the Action Manager plugin</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/finalcutpro/menu/menuaction.lua line 1261](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/menu/menuaction.lua#L1261) |

---

