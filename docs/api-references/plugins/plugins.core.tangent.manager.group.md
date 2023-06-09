# plugins.core.tangent.manager.group

Represents a Tangent Group. Groups can also be used to enable/disable multiple
Parameters/Actions/Menus by enabling/disabling the containing group.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [is](#is)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [group](#group)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [active](#active)
 * [enabled](#enabled)
 * [localActive](#localactive)

**Methods** - _API calls which can only be made on an object returned by a constructor_
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


---

## API Documentation

#### Functions


### [is](#is)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.group.is(thing) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the `thing` is a `group`.                                                                     |
| **Parameters**                              | <ul><li>thing    - The thing to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if it is a `group`, `false` otherwise.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/group.lua line 87](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/group.lua#L87){target="_blank"} |

---

#### Constructors


### [group](#group)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.group(name, manager, parent, localActive) -> None`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `Group` instance.                                                                     |
| **Parameters**                              | <ul><li>name - The name of the group.</li><li>manager - The Tangent Manager.</li><li>parent - The parent group.</li><li>localActive - If `true`, this group will ignore the parent's `active` status when determining its own `active` status. Defaults to `false`.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/group.lua line 28](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/group.lua#L28){target="_blank"} |

---

#### Fields


### [active](#active)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.group.active <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Indicates if the group is active. It will only be active if                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/group.lua line 78](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/group.lua#L78){target="_blank"} |

---


### [enabled](#enabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.group.enabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Indicates if the group is enabled.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/group.lua line 64](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/group.lua#L64){target="_blank"} |

---


### [localActive](#localactive)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.group.localActive <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Indicates if the group should ignore the parent's `enabled` state when determining if the group is active.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/group.lua line 71](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/group.lua#L71){target="_blank"} |

---

#### Methods


### [action](#action)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.group:action(id[, name[, localActive]]) -> action`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds an `action` to this group.                                                                     |
| **Parameters**                              | <ul><li>id    - The ID number of the new action</li><li>name  - The name of the action.</li><li>localActive - If true, the parent group's `active` state is ignored when determining if this action is active.</li></ul> |
| **Returns**                                 | <ul><li>The new `action`</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/group.lua line 189](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/group.lua#L189){target="_blank"} |

---


### [binding](#binding)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.group:binding(id[, name]) -> binding`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds an `binding` to this group.                                                                     |
| **Parameters**                              | <ul><li>id    - The ID number of the new binding</li><li>name  - The name of the binding.</li></ul> |
| **Returns**                                 | <ul><li>The new `binding`</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/group.lua line 265](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/group.lua#L265){target="_blank"} |

---


### [controls](#controls)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.group:controls() -> controls`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Retrieves the `controls` for this group. May be `nil` if the group was created independently.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `controls`, or `nil`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/group.lua line 126](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/group.lua#L126){target="_blank"} |

---


### [group](#group)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.group:group(name, [localActive]) -> group`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds a subgroup to this group.                                                                     |
| **Parameters**                              | <ul><li>name - the name of the new sub-group</li><li>localActive - An optional boolean. If `true`, this group will ignore the parent's `active` status when determining its own `active` status. Defaults to `false`.</li></ul> |
| **Returns**                                 | <ul><li>The new `group`</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/group.lua line 144](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/group.lua#L144){target="_blank"} |

---


### [menu](#menu)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.group:menu(id[, name]) -> menu`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds an `menu` to this group.                                                                     |
| **Parameters**                              | <ul><li>id    - The ID number of the new menu</li><li>name  - The name of the menu.</li></ul> |
| **Returns**                                 | <ul><li>The new `menu`</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/group.lua line 240](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/group.lua#L240){target="_blank"} |

---


### [name](#name)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.group:name() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the `name` given to the group.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The name.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/group.lua line 100](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/group.lua#L100){target="_blank"} |

---


### [parameter](#parameter)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.group:parameter(id[, name]) -> parameter`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds an `parameter` to this group.                                                                     |
| **Parameters**                              | <ul><li>id    - The ID number of the new parameter</li><li>name  - The name of the parameter.</li></ul> |
| **Returns**                                 | <ul><li>The new `parameter`</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/group.lua line 215](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/group.lua#L215){target="_blank"} |

---


### [parent](#parent)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.group:parent() -> group | controls`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the parent of the group, which should be either a `group`, `controls` or `nil`.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The group's parents.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/group.lua line 113](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/group.lua#L113){target="_blank"} |

---


### [reset](#reset)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.group:reset() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | This will remove all parameters, actions, menus and bindings from the group. It does not remove sub-groups. Use with care!                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `group` instance.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/group.lua line 288](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/group.lua#L288){target="_blank"} |

---


### [tangent](#tangent)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.group:tangent() -> hs.tangent`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | The `hs.tangent` connection.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `hs.tangent`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/group.lua line 51](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/group.lua#L51){target="_blank"} |

---


### [xml](#xml)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.group:xml() -> cp.web.xml`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the `xml` configuration for the Group, sorted alphabetically.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `xml` for the Group.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/group.lua line 307](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/group.lua#L307){target="_blank"} |

---

