# plugins.core.tangent.manager.parameter

Represents a Tangent Parameter control.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [is](#is)
 * [update](#update)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [parameter](#parameter)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [change](#change)
 * [get](#get)
 * [maxValue](#maxvalue)
 * [minValue](#minvalue)
 * [onChange](#onchange)
 * [onGet](#onget)
 * [onReset](#onreset)
 * [press](#press)
 * [release](#release)
 * [reset](#reset)
 * [stepSize](#stepsize)
 * [xml](#xml)


---

## API Documentation

#### Functions


### [is](#is)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.parameter.is(thing) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the `thing` is a `parameter` instance.                                                                     |
| **Parameters**                              | <ul><li>thing     - The other object to test.</li></ul> |
| **Returns**                                 | <ul><li>`true` if it is a `parameter`, `false` if not.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/parameter.lua line 33](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/parameter.lua#L33) |

---


### [update](#update)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.parameter:update()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Updates the Tangent with the current value of the parameter.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Nothing.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/parameter.lua line 221](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/parameter.lua#L221) |

---

#### Constructors


### [parameter](#parameter)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.parameter(id[, name[, parent]) -> parameter`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `Parameter` instance.                                                                     |
| **Parameters**                              | <ul><li>id        - The ID number of the parameter.</li><li>name      - The name of the parameter.</li><li>parent    - The parent of the parameter.</li></ul> |
| **Returns**                                 | <ul><li>the new `parameter`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/parameter.lua line 18](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/parameter.lua#L18) |

---

#### Methods


### [change](#change)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.parameter:change(amount) -> number`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Executes the `change` function if present, and returns the new result. If none has been set, `nil` is returned.                                                                     |
| **Parameters**                              | <ul><li>amount    - The amount to change the parameter.</li></ul> |
| **Returns**                                 | <ul><li>The current value, or `nil` if it can't be accessed.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/parameter.lua line 162](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/parameter.lua#L162) |

---


### [get](#get)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.parameter:get() -> number`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Executes the `get` function if present, and returns the result. If none has been set, `nil` is returned.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The current value, or `nil` if it can't be accessed.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/parameter.lua line 122](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/parameter.lua#L122) |

---


### [maxValue](#maxvalue)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.parameter:maxValue([value]) -> number | self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets or sets the maximum value for the parameter.                                                                     |
| **Parameters**                              | <ul><li>value     - The new value.</li></ul> |
| **Returns**                                 | <ul><li>If `value` is `nil`, the current value is returned, otherwise returns `self`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/parameter.lua line 64](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/parameter.lua#L64) |

---


### [minValue](#minvalue)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.parameter:minValue([value]) -> number | self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets or sets the minimum value for the parameter.                                                                     |
| **Parameters**                              | <ul><li>value     - The new value.</li></ul> |
| **Returns**                                 | <ul><li>If `value` is `nil`, the current value is returned, otherwise returns `self`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/parameter.lua line 46](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/parameter.lua#L46) |

---


### [onChange](#onchange)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.parameter:onChange(changeFn) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the function that will be called when the Tangent sends a 'parameter change' request.                                                                     |
| **Parameters**                              | <ul><li>getFn     - The function to call when the Tangent requests the parameter change.</li></ul> |
| **Returns**                                 | <ul><li>The `parameter` instance.</li></ul>          |
| **Notes**                                   | <ul><li>This function should have this signature:</li><li></li><li>`function(amount) -> number`</li><li></li><li>The return value should be the new value of the parameter.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/parameter.lua line 138](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/parameter.lua#L138) |

---


### [onGet](#onget)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.parameter:onGet(getFn) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the function that will be called when the Tangent sends a 'parameter value' request.                                                                     |
| **Parameters**                              | <ul><li>getFn     - The function to call when the Tangent requests the parameter value.</li></ul> |
| **Returns**                                 | <ul><li>The `parameter` instance.</li></ul>          |
| **Notes**                                   | <ul><li>This function should have this signature:</li><li></li><li>`function() -> number`</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/parameter.lua line 100](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/parameter.lua#L100) |

---


### [onReset](#onreset)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.parameter:onReset(resetFn) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the function that will be called when the Tangent sends a 'parameter reset' request.                                                                     |
| **Parameters**                              | <ul><li>resetFn     - The function to call when the Tangent requests the parameter reset.</li></ul> |
| **Returns**                                 | <ul><li>The `parameter` instance.</li></ul>          |
| **Notes**                                   | <ul><li>This function should have this signature:</li><li></li><li>`function() -> nil`</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/parameter.lua line 183](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/parameter.lua#L183) |

---


### [press](#press)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.parameter:press() -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Executes the `press` function, if present.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`nil`</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/action.lua line 85](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/action.lua#L85) |

---


### [release](#release)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.parameter:release() -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Executes the `release` function, if present.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`nil`</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/action.lua line 122](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/action.lua#L122) |

---


### [reset](#reset)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.parameter:reset() -> number`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Executes the `reset` function if present. Returns the current value of the parameter after reset.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The current value, or `nil` if it can't be accessed.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/parameter.lua line 205](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/parameter.lua#L205) |

---


### [stepSize](#stepsize)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.parameter:stepSize([value]) -> number | self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets or sets the step size for the parameter.                                                                     |
| **Parameters**                              | <ul><li>value     - The new value.</li></ul> |
| **Returns**                                 | <ul><li>If `value` is `nil`, the current value is returned, otherwise returns `self`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/parameter.lua line 82](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/parameter.lua#L82) |

---


### [xml](#xml)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.parameter:xml() -> cp.web.xml`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the `xml` configuration for the Parameter.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `xml` for the Parameter.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/parameter.lua line 239](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/parameter.lua#L239) |

---

