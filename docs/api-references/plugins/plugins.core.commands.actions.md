# plugins.core.commands.actions

An `action` which will execute a command with matching group/id values.
Registers itself with the `core.action.manager`.

## API Overview
* Functions - API calls offered directly by the extension
 * [execute](#execute)
 * [getId](#getId)
 * [init](#init)
 * [onChoices](#onChoices)
 * [reset](#reset)

## API Documentation

### Functions

| [execute](#execute)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.commands.actions.execute(action) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Executes the action with the provided parameters.                                                                     |
| **Parameters**                              | <ul><li>`action` - A table representing the action, matching the following:`id` - The specific Command ID within the group.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the action was executed successfully.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [getId](#getId)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.commands.actions.getId(action) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets an ID from an action table                                                                     |
| **Parameters**                              | <ul><li>`action`      - The action table.</li></ul> |
| **Returns**                                 | <ul><li>The ID as a string.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [init](#init)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.commands.actions.init(actionmanager, cmds) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Initialises the module.                                                                     |
| **Parameters**                              | <ul><li>`actionmanager` - The Action Manager Plugin</li><li>`cmds` - The Commands Plugin.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [onChoices](#onChoices)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.commands.actions.onChoices(choices) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Adds available choices to the  selection.                                                                     |
| **Parameters**                              | <ul><li>`choices`     - The `cp.choices` to add choices to.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [reset](#reset)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.commands.actions.reset() -> nothing`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Resets the set of choices.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Nothing</li></ul>          |
| **Notes**                                   | <ul></ul>                |

