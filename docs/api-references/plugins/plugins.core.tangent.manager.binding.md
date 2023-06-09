# plugins.core.tangent.manager.binding

Represents a Tangent Binding

## API Overview
* Constructors - API calls which return an object, typically one that offers API methods
 * [binding](#binding)
* Methods - API calls which can only be made on an object returned by a constructor
 * [member](#member)
 * [members](#members)
 * [name](#name)
 * [xml](#xml)

## API Documentation

### Constructors

| [binding](#binding)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.binding(name) -> binding`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `Binding` instance.                                                                     |
| **Parameters**                              | <ul><li>name - The name of the binding.</li></ul> |
| **Returns**                                 | <ul><li>the new `binding`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Methods

| [member](#member)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.binding:member(parameter) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds a `parameter` as a member of the Binding group. The order is significant - it will determine the order the parameters are applied to group controls in the Mapper.                                                                     |
| **Parameters**                              | <ul><li>param     - The `parameter` to add to the binding.</li></ul> |
| **Returns**                                 | <ul><li>The `binding` instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [members](#members)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.binding:members(...) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds the list of parameters to this binding.                                                                     |
| **Parameters**                              | <ul><li>...   - the list of parameters to bind.</li></ul> |
| **Returns**                                 | <ul><li>The `binding` instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [name](#name)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.binding:name() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the `name` of this binding.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The name.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [xml](#xml)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.binding:xml() -> cp.web.xml`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the `xml` configuration for the Binding.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `xml` for the Binding.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

