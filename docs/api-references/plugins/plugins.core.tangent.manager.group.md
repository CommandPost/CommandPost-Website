# plugins.core.tangent.manager.group

Represents a Tangent Group. Groups can also be used to enable/disable multiple
Parameters/Actions/Menus by enabling/disabling the containing group.

## API Overview
* Functions - API calls offered directly by the extension
 * [is](#is)
* Constructors - API calls which return an object, typically one that offers API methods
 * [group](#group)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [active](#active)
 * [enabled](#enabled)
 * [localActive](#localActive)
* Methods - API calls which can only be made on an object returned by a constructor
 * [action](#action)
 * [binding](#binding)
 * [controls](#controls)
 * [group](#group)
 * [menu](#menu)
 * [name](#name)
 * [parameter](#parameter)
 * [parent](#parent)
 * [reset](#reset)
 * [tangent](#tangent)
 * [xml](#xml)

## API Documentation

### Functions

| [is](#is)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.group.is(thing) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the `thing` is a `group`.                                                                     |
| **Parameters**                              | <ul><li>thing    - The thing to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if it is a `group`, `false` otherwise.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Constructors

| [group](#group)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.group(name, manager, parent, localActive) -> None`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `Group` instance.                                                                     |
| **Parameters**                              | <ul><li>name - The name of the group.</li><li>manager - The Tangent Manager.</li><li>parent - The parent group.</li><li>localActive - If `true`, this group will ignore the parent's `active` status when determining its own `active` status. Defaults to `false`.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Fields

| [active](#active)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.group.active <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Indicates if the group is active. It will only be active if                                                                     |

| [enabled](#enabled)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.group.enabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Indicates if the group is enabled.                                                                     |

| [localActive](#localActive)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.group.localActive <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Indicates if the group should ignore the parent's `enabled` state when determining if the group is active.                                                                     |

### Methods

| [action](#action)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.group:action(id[, name[, localActive]]) -> action`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds an `action` to this group.                                                                     |
| **Parameters**                              | <ul><li>id    - The ID number of the new action</li><li>name  - The name of the action.</li><li>localActive - If true, the parent group's `active` state is ignored when determining if this action is active.</li></ul> |
| **Returns**                                 | <ul><li>The new `action`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [binding](#binding)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.group:binding(id[, name]) -> binding`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds an `binding` to this group.                                                                     |
| **Parameters**                              | <ul><li>id    - The ID number of the new binding</li><li>name  - The name of the binding.</li></ul> |
| **Returns**                                 | <ul><li>The new `binding`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [controls](#controls)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.group:controls() -> controls`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Retrieves the `controls` for this group. May be `nil` if the group was created independently.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `controls`, or `nil`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [group](#group)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.group:group(name, [localActive]) -> group`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds a subgroup to this group.                                                                     |
| **Parameters**                              | <ul><li>name - the name of the new sub-group</li><li>localActive - An optional boolean. If `true`, this group will ignore the parent's `active` status when determining its own `active` status. Defaults to `false`.</li></ul> |
| **Returns**                                 | <ul><li>The new `group`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [menu](#menu)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.group:menu(id[, name]) -> menu`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds an `menu` to this group.                                                                     |
| **Parameters**                              | <ul><li>id    - The ID number of the new menu</li><li>name  - The name of the menu.</li></ul> |
| **Returns**                                 | <ul><li>The new `menu`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [name](#name)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.group:name() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the `name` given to the group.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The name.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [parameter](#parameter)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.group:parameter(id[, name]) -> parameter`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds an `parameter` to this group.                                                                     |
| **Parameters**                              | <ul><li>id    - The ID number of the new parameter</li><li>name  - The name of the parameter.</li></ul> |
| **Returns**                                 | <ul><li>The new `parameter`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [parent](#parent)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.group:parent() -> group | controls`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the parent of the group, which should be either a `group`, `controls` or `nil`.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The group's parents.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [reset](#reset)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.group:reset() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | This will remove all parameters, actions, menus and bindings from the group. It does not remove sub-groups. Use with care!                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `group` instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [tangent](#tangent)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.group:tangent() -> hs.tangent`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | The `hs.tangent` connection.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `hs.tangent`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [xml](#xml)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.group:xml() -> cp.web.xml`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the `xml` configuration for the Group, sorted alphabetically.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `xml` for the Group.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

