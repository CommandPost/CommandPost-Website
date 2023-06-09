# plugins.core.tangent.manager.binding

Represents a Tangent Binding

---

## API Overview
**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [binding](#binding)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [member](#member)
 * [members](#members)
 * [name](#name)
 * [xml](#xml)


---

## API Documentation

#### Constructors


### [binding](#binding)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.binding(name) -> binding`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `Binding` instance.                                                                     |
| **Parameters**                              | <ul><li>name - The name of the binding.</li></ul> |
| **Returns**                                 | <ul><li>the new `binding`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/binding.lua line 16](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/binding.lua#L16){target="_blank"} |

---

#### Methods


### [member](#member)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.binding:member(parameter) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds a `parameter` as a member of the Binding group. The order is significant - it will determine the order the parameters are applied to group controls in the Mapper.                                                                     |
| **Parameters**                              | <ul><li>param     - The `parameter` to add to the binding.</li></ul> |
| **Returns**                                 | <ul><li>The `binding` instance.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/binding.lua line 43](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/binding.lua#L43){target="_blank"} |

---


### [members](#members)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.binding:members(...) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds the list of parameters to this binding.                                                                     |
| **Parameters**                              | <ul><li>...   - the list of parameters to bind.</li></ul> |
| **Returns**                                 | <ul><li>The `binding` instance.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/binding.lua line 58](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/binding.lua#L58){target="_blank"} |

---


### [name](#name)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.binding:name() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the `name` of this binding.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The name.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/binding.lua line 30](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/binding.lua#L30){target="_blank"} |

---


### [xml](#xml)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.binding:xml() -> cp.web.xml`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the `xml` configuration for the Binding.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `xml` for the Binding.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/binding.lua line 74](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/binding.lua#L74){target="_blank"} |

---

