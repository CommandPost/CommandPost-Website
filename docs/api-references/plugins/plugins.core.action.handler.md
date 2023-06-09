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

---

## API Overview
**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [new](#new)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [cached](#cached)
 * [choices](#choices)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [actionId](#actionid)
 * [execute](#execute)
 * [group](#group)
 * [id](#id)
 * [label](#label)
 * [onActionId](#onactionid)
 * [onChoices](#onchoices)
 * [onExecute](#onexecute)
 * [reset](#reset)


---

## API Documentation

#### Constructors


### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.handler.new(id, group, label) -> handler`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new handler with the specified ID.                                                                     |
| **Parameters**                              | <ul><li>`id`      - The unique ID of the action handler.</li><li>`group`   - The group the handler belongs to.</li><li>`label`   - An optional label for the handler (over-riding a supplied i18n value)</li></ul> |
| **Returns**                                 | <ul><li>The new action handler instance.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/action/manager/handler.lua line 29](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/action/manager/handler.lua#L29) |

---

#### Fields


### [cached](#cached)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.handler.cached <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | If set to `true` (the default), any choices created will be cached until [reset] is called.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/plugins/core/action/manager/handler.lua line 131](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/action/manager/handler.lua#L131) |

---


### [choices](#choices)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.handler.choices <cp.prop: cp.choices; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Provides `cp.choices` instance for the handler. May be watched/monitored/etc.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/plugins/core/action/manager/handler.lua line 141](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/action/manager/handler.lua#L141) |

---

#### Methods


### [actionId](#actionid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.handler:actionId(action) -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a string that can be used as a unique ID for the action details.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/action/manager/handler.lua line 189](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/action/manager/handler.lua#L189) |

---


### [execute](#execute)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.handler:execute(action) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Executes the action, based on values in the table.                                                                     |
| **Parameters**                              | <ul><li>`action`      - A table of details about the action.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the execution succeeded.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/action/manager/handler.lua line 215](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/action/manager/handler.lua#L215) |

---


### [group](#group)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.handler:group() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the group for this handler.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Group as string.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/action/manager/handler.lua line 92](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/action/manager/handler.lua#L92) |

---


### [id](#id)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.handler:id() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the ID for this handler.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The ID string.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/action/manager/handler.lua line 105](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/action/manager/handler.lua#L105) |

---


### [label](#label)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.handler:label() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the label for this handler.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The ID string.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/action/manager/handler.lua line 118](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/action/manager/handler.lua#L118) |

---


### [onActionId](#onactionid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.handler:onActionId(actionFn) -> handler`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Configures a function to handle converting an action to unique ID. The function is passed the `action` table and should return a string.                                                                     |
| **Parameters**                              | <ul><li>`actionFn`    - The function with a signature of `function(action) -> string`</li></ul> |
| **Returns**                                 | <ul><li>This action handler.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/action/manager/handler.lua line 78](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/action/manager/handler.lua#L78) |

---


### [onChoices](#onchoices)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.handler:onChoices(choicesFn) -> handler`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds a callback function which will receive the `cp.choices` instance to add choices to. This will only get called when required - the results will be cached if the [cached](#cached) property is set to `true`.                                                                     |
| **Parameters**                              | <ul><li>`choicesFn`       - The function with the signature of `function(choices) -> nothing`</li></ul> |
| **Returns**                                 | <ul><li>This action handler.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/action/manager/handler.lua line 64](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/action/manager/handler.lua#L64) |

---


### [onExecute](#onexecute)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.handler:onExecute(executeFn) -> handler`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Configures the function to call when a choice is executed. This will be passed the choice parameters in a single table.                                                                     |
| **Parameters**                              | <ul><li>`executeFn`       - The function to call when executing.</li></ul> |
| **Returns**                                 | <ul><li>This action handler.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/action/manager/handler.lua line 50](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/action/manager/handler.lua#L50) |

---


### [reset](#reset)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.handler:reset([updateNow]) -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Resets the handler, clearing any cached result and requesting new ones.                                                                     |
| **Parameters**                              | <ul><li>`updateNow`   - (optional) If `true`, the choices will update immediately, otherwise they will update when the choices are next requested.</li></ul> |
| **Returns**                                 | <ul><li>Nothing</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/action/manager/handler.lua line 231](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/action/manager/handler.lua#L231) |

---

