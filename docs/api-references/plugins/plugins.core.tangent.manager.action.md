# plugins.core.tangent.manager.action

Represents a Tangent Action

---

## API Overview
**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [action](#action)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [active](#active)
 * [localActive](#localactive)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [is](#is)
 * [onPress](#onpress)
 * [onRelease](#onrelease)
 * [xml](#xml)


---

## API Documentation

#### Constructors


### [action](#action)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.action(id[, name[, parent[, localActive]]]) -> action`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `Action` instance.                                                                     |
| **Parameters**                              | <ul><li>id        - The ID number of the action.</li><li>name      - The name of the action.</li><li>parent    - The parent group. (optional)</li><li>localActive - If set to `true`, the parent's `active` state will be ignored when determining if this action is active. Defaults to `false`.</li></ul> |
| **Returns**                                 | <ul><li>the new `action`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/action.lua line 17](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/action.lua#L17){target="_blank"} |

---

#### Fields


### [active](#active)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.action.active <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Indicates if the action is active. It will only be active if                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/action.lua line 41](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/action.lua#L41){target="_blank"} |

---


### [localActive](#localactive)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.action.localActive <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Indicates if the action should ignore the parent's `enabled` state when determining if the action is active.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/action.lua line 34](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/action.lua#L34){target="_blank"} |

---

#### Methods


### [is](#is)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.action.is() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Is an object an action?                                                                     |
| **Parameters**                              | <ul><li>otherThing - Object to test.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the object is an action otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/action.lua line 50](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/action.lua#L50){target="_blank"} |

---


### [onPress](#onpress)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.action:onPress(pressFn) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the function that will be called when the Tangent sends a 'action on' request.                                                                     |
| **Parameters**                              | <ul><li>pressFn     - The function to call when the Tangent requests the action on.</li></ul> |
| **Returns**                                 | <ul><li>The `parameter` instance.</li></ul>          |
| **Notes**                                   | <ul><li>This function should have this signature:</li><li></li><li>`function() -> nil`</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/action.lua line 63](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/action.lua#L63){target="_blank"} |

---


### [onRelease](#onrelease)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.action:onRelease(releaseFn) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the function that will be called when the Tangent sends a 'action off' request.                                                                     |
| **Parameters**                              | <ul><li>releaseFn     - The function to call when the Tangent requests the action off.</li></ul> |
| **Returns**                                 | <ul><li>The `parameter` instance.</li></ul>          |
| **Notes**                                   | <ul><li>This function should have this signature:</li><li></li><li>`function() -> nil`</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/action.lua line 100](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/action.lua#L100){target="_blank"} |

---


### [xml](#xml)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.action:xml() -> cp.web.xml`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the `xml` configuration for the Action.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `xml` for the Action.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/action.lua line 137](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/action.lua#L137){target="_blank"} |

---

