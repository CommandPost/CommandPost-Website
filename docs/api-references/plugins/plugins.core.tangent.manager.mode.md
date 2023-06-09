# plugins.core.tangent.manager.mode

Represents a Tangent Mode

## API Overview
### **Functions** - _API calls offered directly by the extension_
 * [is](#is)

### **Constructors** - _API calls which return an object, typically one that offers API methods_
 * [mode](#mode)

### **Methods** - _API calls which can only be made on an object returned by a constructor_
 * [activate](#activate)
 * [onActivate](#onactivate)
 * [onDeactivate](#ondeactivate)
 * [xml](#xml)


## API Documentation

### Functions


### [is](#is)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.mode.is(thing) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if `thing` is a `mode` or not.                                                                     |
| **Parameters**                              | <ul><li>thing - The item to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if is a mode otherwise `false`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Constructors


### [mode](#mode)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.mode(id, name)`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `Mode` instance.                                                                     |
| **Parameters**                              | <ul><li>id        - The ID number of the mode.</li><li>name      - The name of the mode.</li></ul> |
| **Returns**                                 | <ul><li> *</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Methods


### [activate](#activate)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.mode:activate() -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Executes the `activate` function, if present.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`nil`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [onActivate](#onactivate)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.mode:onActivate(activateFn) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the function that will be called when the Tangent sends a 'mode change' request.                                                                     |
| **Parameters**                              | <ul><li>activateFn     - The function to call when the Tangent requests the mode change.</li></ul> |
| **Returns**                                 | <ul><li>The `parameter` instance.</li></ul>          |
| **Notes**                                   | <ul><li>This function should have this signature:</li><li></li><li>```lua</li><li>function() -> nil</li><li>```</li></ul>                |

---

### [onDeactivate](#ondeactivate)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.mode:onDeactivate(deactivateFn) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the function that will be called when the Tangent sends a 'mode change' request and switche to a different mode.                                                                     |
| **Parameters**                              | <ul><li>deactivateFn     - The function to call when the Tangent requests the mode change.</li></ul> |
| **Returns**                                 | <ul><li>The `parameter` instance.</li></ul>          |
| **Notes**                                   | <ul><li>This function should have this signature:</li><li></li><li>`function() -> nil`</li></ul>                |

---

### [xml](#xml)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.mode:xml() -> cp.web.xml`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the `xml` configuration for the Mode.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `xml` for the Mode.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
