# plugins.finalcutpro.commands.actions

An `action` which will execute a command with matching group/id values.
Registers itself with the `core.action.manager`.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [execute](#execute)
 * [getId](#getid)
 * [getId](#getid)
 * [init](#init)
 * [onChoices](#onchoices)
 * [onExecute](#onexecute)
 * [reset](#reset)


---

## API Documentation

#### Functions


### [execute](#execute)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.commands.actions.execute(action) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Executes the action with the provided parameters.                                                                     |
| **Parameters**                              | <ul><li>`action`  - A table representing the action</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false`</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/commands/actions.lua line 110](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/commands/actions.lua#L110) |

---


### [getId](#getid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.commands.actionss.getId(action) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the ID from an action.                                                                     |
| **Parameters**                              | <ul><li>action - The action table.</li></ul> |
| **Returns**                                 | <ul><li>The ID as a string.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/commands/actions.lua line 97](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/commands/actions.lua#L97) |

---


### [getId](#getid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.commands.actions.getId(action) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Get ID.                                                                     |
| **Parameters**                              | <ul><li>action - The action table.</li></ul> |
| **Returns**                                 | <ul><li>The ID as a string.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/console/font.lua line 317](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/console/font.lua#L317) |

---


### [init](#init)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.commands.actions.init(actionmanager, cmds) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Initialises the module.                                                                     |
| **Parameters**                              | <ul><li>actionmanager - The action manager object</li><li>cmds - Final Cut Pro commands manager</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/commands/actions.lua line 32](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/commands/actions.lua#L32) |

---


### [onChoices](#onchoices)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.commands.actions.onChoices([choices]) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Adds available choices to the selection.                                                                     |
| **Parameters**                              | <ul><li>`choices` - The optional `cp.choices` to add choices to.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/console/font.lua line 241](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/console/font.lua#L241) |

---


### [onExecute](#onexecute)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.commands.actions.onExecute(action) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | On Execute.                                                                     |
| **Parameters**                              | <ul><li>action - The action table.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/console/font.lua line 330](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/console/font.lua#L330) |

---


### [reset](#reset)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.commands.actions.reset() -> nothing`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Resets the set of choices.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Nothing</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/commands/actions.lua line 150](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/commands/actions.lua#L150) |

---

