# plugins.core.tangent.manager.controls

Represents a Tangent Group

---

## API Overview
**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [controls](#controls)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [active](#active)
 * [enabled](#enabled)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [action](#action)
 * [controls](#controls)
 * [findByID](#findbyid)
 * [group](#group)
 * [menu](#menu)
 * [parameter](#parameter)
 * [parent](#parent)
 * [register](#register)
 * [tangent](#tangent)
 * [unregister](#unregister)
 * [xml](#xml)


---

## API Documentation

#### Constructors


### [controls](#controls)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.controls(manager) -> Group`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `Group` instance.                                                                     |
| **Parameters**                              | <ul><li>manager - The manager</li></ul> |
| **Returns**                                 | <ul><li>A new `Group` object</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/controls.lua line 22](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/controls.lua#L22) |

---

#### Fields


### [active](#active)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.controls.active <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Indicates if the controls are active. They will be active if `enabled` is `true`.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/plugins/core/tangent/manager/controls.lua line 56](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/controls.lua#L56) |

---


### [enabled](#enabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.controls.enabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Indicates if the controls are enabled.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/plugins/core/tangent/manager/controls.lua line 49](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/controls.lua#L49) |

---

#### Methods


### [action](#action)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.controls:action(id[, name]) -> action`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds an `action` to this controls.                                                                     |
| **Parameters**                              | <ul><li>id    - The ID number of the new action</li><li>name  - The name of the action.</li></ul> |
| **Returns**                                 | <ul><li>The new `action`</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/controls.lua line 163](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/controls.lua#L163) |

---


### [controls](#controls)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.controls:controls() -> controls`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns this `controls` instance.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `controls instance.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/controls.lua line 76](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/controls.lua#L76) |

---


### [findByID](#findbyid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.controls:findByID(id) -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Finds a control (Action/Parameter/Mode) by its unique ID.                                                                     |
| **Parameters**                              | <ul><li>id        - the ID to search by</li></ul> |
| **Returns**                                 | <ul><li>The control, or `nil` if not found.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/controls.lua line 128](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/controls.lua#L128) |

---


### [group](#group)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.controls:group(name) -> group`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds a subgroup to this group.                                                                     |
| **Parameters**                              | <ul><li>name  - the name of the new sub-group</li></ul> |
| **Returns**                                 | <ul><li>The new `group`</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/controls.lua line 141](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/controls.lua#L141) |

---


### [menu](#menu)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.controls:menu(id[, name]) -> menu`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds an `menu` to this controls.                                                                     |
| **Parameters**                              | <ul><li>id    - The ID number of the new menu</li><li>name  - The name of the menu.</li></ul> |
| **Returns**                                 | <ul><li>The new `menu`</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/controls.lua line 211](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/controls.lua#L211) |

---


### [parameter](#parameter)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.controls:parameter(id[, name]) -> parameter`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds an `parameter` to this controls.                                                                     |
| **Parameters**                              | <ul><li>id    - The ID number of the new parameter</li><li>name  - The name of the parameter.</li></ul> |
| **Returns**                                 | <ul><li>The new `parameter`</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/controls.lua line 187](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/controls.lua#L187) |

---


### [parent](#parent)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.controls:parent() -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Always returns `nil`, sinces `controls` have no parent.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`nil`.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/controls.lua line 63](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/controls.lua#L63) |

---


### [register](#register)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.controls:register(control) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Registers a control (Action/Parameter/Menu) with it's ID. This allows efficient retrieval via the `findById(...)` method, as well as checking that ID is unique.                                                                     |
| **Parameters**                              | <ul><li>control       - The Action/Parameter/Menu to register</li></ul> |
| **Returns**                                 | <ul><li>self</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/controls.lua line 89](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/controls.lua#L89) |

---


### [tangent](#tangent)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.controls:tangent() -> hs.tangent`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | The `hs.tangent` connection.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `hs.tangent`.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/controls.lua line 36](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/controls.lua#L36) |

---


### [unregister](#unregister)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.controls:unregister(control) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Unregisters a control (Action/Parameter/Menu) with it's ID                                                                     |
| **Parameters**                              | <ul><li>control       - The Action/Parameter/Menu to unregister</li></ul> |
| **Returns**                                 | <ul><li>self</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/controls.lua line 109](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/controls.lua#L109) |

---


### [xml](#xml)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.controls:xml() -> cp.web.xml`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the `xml` configuration for the Group.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `xml` for the Group.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/controls.lua line 235](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/controls.lua#L235) |

---

