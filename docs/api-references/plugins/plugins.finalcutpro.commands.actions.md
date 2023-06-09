# plugins.finalcutpro.commands.actions

An `action` which will execute a command with matching group/id values.
Registers itself with the `core.action.manager`.

## API Overview
* Functions - API calls offered directly by the extension
 * [execute](#execute)
 * [getId](#getId)
 * [getId](#getId)
 * [init](#init)
 * [onChoices](#onChoices)
 * [onExecute](#onExecute)
 * [reset](#reset)

## API Documentation

### Functions


### [execute](#execute)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.commands.actions.execute(action) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Executes the action with the provided parameters.                                                                     |
| **Parameters**                              | <ul><li>`action`  - A table representing the action</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getId](#getId)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.commands.actionss.getId(action) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the ID from an action.                                                                     |
| **Parameters**                              | <ul><li>action - The action table.</li></ul> |
| **Returns**                                 | <ul><li>The ID as a string.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getId](#getId)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.commands.actions.getId(action) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Get ID.                                                                     |
| **Parameters**                              | <ul><li>action - The action table.</li></ul> |
| **Returns**                                 | <ul><li>The ID as a string.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [init](#init)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.commands.actions.init(actionmanager, cmds) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Initialises the module.                                                                     |
| **Parameters**                              | <ul><li>actionmanager - The action manager object</li><li>cmds - Final Cut Pro commands manager</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [onChoices](#onChoices)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.commands.actions.onChoices([choices]) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Adds available choices to the selection.                                                                     |
| **Parameters**                              | <ul><li>`choices` - The optional `cp.choices` to add choices to.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [onExecute](#onExecute)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.commands.actions.onExecute(action) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | On Execute.                                                                     |
| **Parameters**                              | <ul><li>action - The action table.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [reset](#reset)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.commands.actions.reset() -> nothing`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Resets the set of choices.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Nothing</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
