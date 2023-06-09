# plugins.core.action.handler

A support class for handler handlers. It is not used directly, rather
it is a 'super class' that provides common functionality.

Instances of the class primarily need to provide functions for the following:

```lua
local handler = actionManager:addHandler("foobar")
:onChoices(function(choices) ... end)
:onExecute(function(action) ... end)
```

The choices added to the `choices` should have the `params` value set to a table
containing the details of the action to execute if the choice is selected.

## API Overview
* Constructors - API calls which return an object, typically one that offers API methods
 * [new](#new)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [cached](#cached)
 * [choices](#choices)
* Methods - API calls which can only be made on an object returned by a constructor
 * [actionId](#actionId)
 * [execute](#execute)
 * [group](#group)
 * [id](#id)
 * [label](#label)
 * [onActionId](#onActionId)
 * [onChoices](#onChoices)
 * [onExecute](#onExecute)
 * [reset](#reset)

## API Documentation

### Constructors

| [new](#new)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.handler.new(id, group, label) -> handler`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new handler with the specified ID.                                                                     |
| **Parameters**                              | <ul><li>`id`      - The unique ID of the action handler.</li><li>`group`   - The group the handler belongs to.</li><li>`label`   - An optional label for the handler (over-riding a supplied i18n value)</li></ul> |
| **Returns**                                 | <ul><li>The new action handler instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Fields

| [cached](#cached)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.handler.cached <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | If set to `true` (the default), any choices created will be cached until [reset] is called.                                                                     |

| [choices](#choices)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.handler.choices <cp.prop: cp.choices; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Provides `cp.choices` instance for the handler. May be watched/monitored/etc.                                                                     |

### Methods

| [actionId](#actionId)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.handler:actionId(action) -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a string that can be used as a unique ID for the action details.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [execute](#execute)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.handler:execute(action) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Executes the action, based on values in the table.                                                                     |
| **Parameters**                              | <ul><li>`action`      - A table of details about the action.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the execution succeeded.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [group](#group)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.handler:group() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the group for this handler.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Group as string.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [id](#id)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.handler:id() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the ID for this handler.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The ID string.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [label](#label)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.handler:label() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the label for this handler.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The ID string.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [onActionId](#onActionId)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.handler:onActionId(actionFn) -> handler`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Configures a function to handle converting an action to unique ID. The function is passed the `action` table and should return a string.                                                                     |
| **Parameters**                              | <ul><li>`actionFn`    - The function with a signature of `function(action) -> string`</li></ul> |
| **Returns**                                 | <ul><li>This action handler.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [onChoices](#onChoices)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.handler:onChoices(choicesFn) -> handler`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds a callback function which will receive the `cp.choices` instance to add choices to. This will only get called when required - the results will be cached if the [cached](#cached) property is set to `true`.                                                                     |
| **Parameters**                              | <ul><li>`choicesFn`       - The function with the signature of `function(choices) -> nothing`</li></ul> |
| **Returns**                                 | <ul><li>This action handler.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [onExecute](#onExecute)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.handler:onExecute(executeFn) -> handler`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Configures the function to call when a choice is executed. This will be passed the choice parameters in a single table.                                                                     |
| **Parameters**                              | <ul><li>`executeFn`       - The function to call when executing.</li></ul> |
| **Returns**                                 | <ul><li>This action handler.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [reset](#reset)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.handler:reset([updateNow]) -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Resets the handler, clearing any cached result and requesting new ones.                                                                     |
| **Parameters**                              | <ul><li>`updateNow`   - (optional) If `true`, the choices will update immediately, otherwise they will update when the choices are next requested.</li></ul> |
| **Returns**                                 | <ul><li>Nothing</li></ul>          |
| **Notes**                                   | <ul></ul>                |

